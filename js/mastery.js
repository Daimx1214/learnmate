// js/mastery.js — pure mastery and scheduling logic. No DOM, no storage, no imports.

const ATTEMPT_CAP = 200;
const MASTERED_AT = 0.8;
const HELP_BELOW = 0.5;
const LESSON_STREAK = 2;
const LOWEST_PICK_PROB = 0.7;
const START_MASTERY = 0.3;
const LEARN_RATE = 0.3;
const MASTERED_MIN_ATTEMPTS = 3;

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

  const qs = concept.questions;
  const lastId = progress ? progress.lastQuestionId : null;
  const fresh = qs.filter((q) => q.id !== lastId);
  const pool = fresh.length > 0 ? fresh : qs;
  const idx = Math.min(pool.length - 1, Math.floor(rng() * pool.length));
  return { concept, question: pool[idx] };
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
    .filter((x) => conceptStatus(x.m, x.attempted, x.count) !== 'mastered')
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
