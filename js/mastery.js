// js/mastery.js — pure mastery and scheduling logic. No DOM, no storage, no imports.

const ATTEMPT_CAP = 200;
const MASTERED_AT = 0.8;
const HELP_BELOW = 0.5;
const LESSON_STREAK = 2;
const LOWEST_PICK_PROB = 0.7;
const START_MASTERY = 0;
const LEARN_RATE = 0.3;
const MASTERED_MIN_ATTEMPTS = 3;
const REVIEW_PICK_PROB = 0.2;
const REVIEW_GAP_DAYS = 2;
const DAY_MS = 24 * 60 * 60 * 1000;

function masteryOf(progress, conceptId) {
  const m = progress && progress.mastery ? progress.mastery[conceptId] : undefined;
  return Number.isFinite(m) ? m : START_MASTERY;
}

// Per-concept attempt count. Uses the persisted counter; falls back to scanning
// the (capped) attempt list only for progress saved before the counter existed.
function attemptCountOf(progress, conceptId) {
  const counts = progress && progress.attemptCounts ? progress.attemptCounts : null;
  const c = counts ? counts[conceptId] : undefined;
  if (Number.isFinite(c)) return c;
  const attempts = progress && Array.isArray(progress.attempts) ? progress.attempts : [];
  return attempts.filter((a) => a.conceptId === conceptId).length;
}

// Spec: mastered when m >= 0.8 AND at least 3 attempts on the concept.
export function isMastered(progress, conceptId) {
  return masteryOf(progress, conceptId) >= MASTERED_AT &&
    attemptCountOf(progress, conceptId) >= MASTERED_MIN_ATTEMPTS;
}

// Parse 'YYYY-MM-DD' as a UTC date and return the key shifted by n days.
function shiftDay(dayStr, n) {
  const [y, m, d] = dayStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}

export function applyAnswer(progress, { conceptId, questionId, optionId, tag, correct } = {}) {
  const base = progress || {};
  const mastery = { ...(base.mastery || {}) };
  const wrongStreak = { ...(base.wrongStreak || {}) };
  const attempts = Array.isArray(base.attempts) ? base.attempts.slice() : [];
  const attemptCounts = { ...(base.attemptCounts || {}) };

  const m = masteryOf(base, conceptId);
  const hit = correct ? 1 : 0;
  mastery[conceptId] = m + LEARN_RATE * (hit - m);
  if (correct) {
    wrongStreak[conceptId] = 0;
  } else {
    wrongStreak[conceptId] = (wrongStreak[conceptId] || 0) + 1;
  }
  attemptCounts[conceptId] = attemptCountOf(base, conceptId) + 1;

  attempts.push({
    ts: Date.now(),
    conceptId,
    questionId,
    optionId,
    tag: tag || null,
    correct: !!correct,
  });
  if (attempts.length > ATTEMPT_CAP) attempts.splice(0, attempts.length - ATTEMPT_CAP);

  return { ...base, mastery, wrongStreak, attempts, attemptCounts, lastQuestionId: questionId };
}

export function shouldShowLesson(progress, conceptId) {
  return ((progress && progress.wrongStreak && progress.wrongStreak[conceptId]) || 0) >= LESSON_STREAK;
}

export function pickNextQuestion(chapter, progress, rng = Math.random) {
  const concepts = ((chapter && chapter.concepts) || []).filter(
    (c) => Array.isArray(c.questions) && c.questions.length > 0
  );
  if (concepts.length === 0) return { concept: null, question: null };

  const byMastery = concepts
    .slice()
    .sort((a, b) => masteryOf(progress, a.id) - masteryOf(progress, b.id));
  const lowest = byMastery[0];

  let concept;
  if (concepts.length === 1) {
    concept = lowest;
  } else {
    // (c) review share: ~20% when an eligible concept (attempted, none in last 2 days) exists.
    const eligible = reviewEligibleConcepts(concepts, progress, Date.now());
    if (eligible.length > 0 && rng() < REVIEW_PICK_PROB) {
      const i = Math.min(eligible.length - 1, Math.floor(rng() * eligible.length));
      concept = eligible[i];
    } else if (rng() < LOWEST_PICK_PROB) {
      concept = lowest;
    } else {
      const others = byMastery.slice(1);
      const weights = others.map((c) => 1 - masteryOf(progress, c.id) + 0.05);
      const total = weights.reduce((s, w) => s + w, 0);
      let r = rng() * total;
      concept = others[others.length - 1];
      for (let i = 0; i < others.length; i++) {
        r -= weights[i];
        if (r < 0) {
          concept = others[i];
          break;
        }
      }
    }
  }

  return { concept, question: pickQuestionInConcept(concept, progress, rng) };
}

// A question from one specific concept (used when practice is started from
// that concept's lesson: the first question comes from the lesson itself,
// after that the adaptive picker takes over).
export function pickForConcept(concept, progress) {
  if (!concept || !Array.isArray(concept.questions) || concept.questions.length === 0) return null;
  return { concept, question: pickQuestionInConcept(concept, progress, Math.random) };
}

// Difficulty band for a concept's current mastery m.
function bandForMastery(m) {
  if (m < 0.4) return 'easy';
  if (m <= 0.7) return 'medium';
  return 'hard';
}

// Within a concept: prefer questions whose difficulty matches the mastery band
// (all questions if none match), then avoid repeating the last question where possible.
function pickQuestionInConcept(concept, progress, rng) {
  const qs = concept.questions;
  const band = bandForMastery(masteryOf(progress, concept.id));
  const banded = qs.filter((q) => q.difficulty === band);
  const candidates = banded.length > 0 ? banded : qs;
  const lastId = progress ? progress.lastQuestionId : null;
  const fresh = candidates.filter((q) => q.id !== lastId);
  const pool = fresh.length > 0 ? fresh : candidates;
  const idx = Math.min(pool.length - 1, Math.floor(rng() * pool.length));
  return pool[idx];
}

// Concepts with at least one attempt, none of whose listed attempts (`ts`, ms since epoch,
// set in applyAnswer) falls within the last REVIEW_GAP_DAYS days.
function reviewEligibleConcepts(concepts, progress, now) {
  const cutoff = now - REVIEW_GAP_DAYS * DAY_MS;
  const attempts = progress && Array.isArray(progress.attempts) ? progress.attempts : [];
  return concepts.filter((c) => {
    if (attemptCountOf(progress, c.id) <= 0) return false;
    return !attempts.some(
      (a) => a.conceptId === c.id && Number.isFinite(a.ts) && a.ts >= cutoff
    );
  });
}

export function conceptStatus(m, attempted, attemptCount = 0) {
  if (m >= MASTERED_AT && attemptCount >= MASTERED_MIN_ATTEMPTS) return 'mastered';
  if (attempted && m < HELP_BELOW) return 'help';
  return 'learning';
}

export function weakConcepts(chapter, progress) {
  const concepts = (chapter && chapter.concepts) || [];
  return concepts
    .map((c) => {
      const m = masteryOf(progress, c.id);
      const count = attemptCountOf(progress, c.id);
      const attempted = count > 0;
      return { concept: c, m, attempted, count };
    })
    .filter((x) => x.attempted && x.m < 0.5)
    .sort((a, b) => a.m - b.m)
    .map((x) => x.concept);
}

export function computeStreak(studyDays, todayStr) {
  const days = studyDays || {};
  const has = (day) => (Number(days[day]) || 0) > 0;
  let day = has(todayStr) ? todayStr : shiftDay(todayStr, -1);
  let streak = 0;
  while (has(day)) {
    streak += 1;
    day = shiftDay(day, -1);
  }
  return streak;
}

export function weekMinutes(studyDays, todayStr) {
  const days = studyDays || {};
  let seconds = 0;
  for (let i = 0; i < 7; i++) {
    seconds += Number(days[shiftDay(todayStr, -i)]) || 0;
  }
  return Math.round(seconds / 60);
}
