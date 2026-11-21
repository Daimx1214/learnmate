// js/tutor.js — pure offline doubt answering. No DOM, no storage, no network, no imports.

const ANSWER_WORD_CAP = 90;

// Fixed reply scaffolding (Hindi only).
const PHRASES = {
  hi: {
    closing: 'अब नीचे दिया छोटा सवाल हल करें।',
    teacher: 'यह सवाल अपने शिक्षक से पूछें।',
    notMatched: (title) => `यह सवाल इस अध्याय में सीधे नहीं है। सबसे नज़दीक का विषय है: ${title}।`,
    stepLabel: 'चरण',
    exampleLabel: 'उदाहरण',
    check: 'छोटा सवाल',
  },
};

// Common function words (Hindi). They are ignored when matching concept title words,
// so a question like "आसमान नीला क्यों है" does not match a concept just on "है".
const STOPWORDS = {
  hi: new Set([
    'क्या', 'क्यों', 'कैसे', 'कब', 'कहाँ', 'कौन', 'है', 'हैं', 'था', 'थी', 'थे', 'हो', 'होता', 'होती', 'होते',
    'और', 'या', 'तथा', 'में', 'का', 'की', 'के', 'से', 'पर', 'को', 'ने', 'तो', 'भी', 'एक', 'यह', 'वह', 'ये', 'वे',
    'जो', 'इस', 'उस', 'लिए', 'लिये', 'द्वारा',
  ]),
};

export function tutorPhrases() {
  return { check: PHRASES.hi.check };
}

export function wordCount(str) {
  return String(str ?? '').trim().split(/\s+/).filter(Boolean).length;
}

// Lowercase, turn punctuation and symbols (including '।' and '?') into spaces,
// and collapse whitespace. Letters and combining marks (matras) are kept.
function normalise(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[\p{P}\p{S}]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreConcept(normText, concept, stopwords) {
  let score = 0;
  for (const kw of concept.keywords || []) {
    const k = normalise(kw);
    if (k && normText.includes(k)) score += 1;
  }
  const titleWords = normalise(concept.title)
    .split(' ')
    .filter((w) => [...w].length >= 2 && !stopwords.has(w));
  if (titleWords.some((w) => normText.includes(w))) score += 1;
  return score;
}

export function findClosestConcept(text, chapter) {
  const stopwords = STOPWORDS.hi;
  const normText = normalise(text);
  let best = null;
  let bestScore = 0;
  for (const concept of (chapter && chapter.concepts) || []) {
    const score = scoreConcept(normText, concept, stopwords);
    if (score > bestScore) {
      bestScore = score;
      best = concept;
    }
  }
  return { concept: best, score: bestScore };
}

function buildAnswer(concept, matched, points, example, P) {
  const parts = [];
  if (!matched) {
    parts.push(P.notMatched(concept.title));
  }
  points.forEach((p, i) => parts.push(`${P.stepLabel} ${i + 1}: ${p}`));
  if (example) parts.push(`${P.exampleLabel}: ${example}`);
  parts.push(P.closing);
  return parts.join(' ');
}

export function answerDoubt(text, chapter) {
  const P = PHRASES.hi;
  const { concept: best, score } = findClosestConcept(text, chapter);
  const matched = score > 0;
  const concept = matched ? best : ((chapter && chapter.concepts) || [])[0] || null;

  if (!concept) {
    return { matched: false, conceptId: null, answer: P.closing, checkQuestion: null, correctOptionId: null, card: null };
  }

  const card = concept.card || { points: [], example: '' };
  const allPoints = (card.points || []).slice(0, 3);
  const example = card.example ? String(card.example) : '';

  // The unmatched teacher sentence is reserved words outside the capped body,
  // so truncation of the body can never cut it off. Matched answers keep the full cap.
  const teacher = matched ? '' : P.teacher;
  const bodyCap = ANSWER_WORD_CAP - wordCount(teacher);

  // Drop points from the end until the body fits in the remaining word cap.
  let answer = '';
  for (let n = allPoints.length; n >= 0; n--) {
    answer = buildAnswer(concept, matched, allPoints.slice(0, n), example, P);
    if (wordCount(answer) <= bodyCap) break;
  }
  if (wordCount(answer) > bodyCap) {
    answer = answer.trim().split(/\s+/).slice(0, bodyCap).join(' ');
  }
  if (teacher) answer = `${answer} ${teacher}`;

  const q = (concept.questions || [])[0] || null;
  const checkQuestion = q
    ? { text: q.text, options: (q.options || []).map((o) => ({ id: o.id, text: o.text })) }
    : null;
  const correctOption = q ? (q.options || []).find((o) => o.correct) : null;

  return {
    matched,
    conceptId: concept.id,
    answer,
    checkQuestion,
    correctOptionId: correctOption ? correctOption.id : null,
    card,
  };
}
