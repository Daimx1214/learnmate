// js/tutor.js — pure offline doubt answering. No DOM, no storage, no network, no imports.

const ANSWER_WORD_CAP = 90;
const CLOSING = 'अब नीचे दिया छोटा सवाल हल करें।';

// Common Hindi function words. They are ignored when matching concept title words,
// so a question like "आसमान नीला क्यों है" does not match a concept just on "है".
const TITLE_STOPWORDS = new Set([
  'क्या', 'क्यों', 'कैसे', 'कब', 'कहाँ', 'कौन', 'है', 'हैं', 'था', 'थी', 'थे', 'हो', 'होता', 'होती', 'होते',
  'और', 'या', 'तथा', 'में', 'का', 'की', 'के', 'से', 'पर', 'को', 'ने', 'तो', 'भी', 'एक', 'यह', 'वह', 'ये', 'वे',
  'जो', 'इस', 'उस', 'लिए', 'लिये', 'द्वारा',
]);

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

function scoreConcept(normText, concept) {
  let score = 0;
  for (const kw of concept.keywords || []) {
    const k = normalise(kw);
    if (k && normText.includes(k)) score += 1;
  }
  const titleWords = normalise(concept.title)
    .split(' ')
    .filter((w) => [...w].length >= 2 && !TITLE_STOPWORDS.has(w));
  if (titleWords.some((w) => normText.includes(w))) score += 1;
  return score;
}

export function findClosestConcept(text, chapter) {
  const normText = normalise(text);
  let best = null;
  let bestScore = 0;
  for (const concept of (chapter && chapter.concepts) || []) {
    const score = scoreConcept(normText, concept);
    if (score > bestScore) {
      bestScore = score;
      best = concept;
    }
  }
  return { concept: best, score: bestScore };
}

function buildAnswer(concept, matched, points, example) {
  const parts = [];
  if (!matched) {
    parts.push(`यह सवाल इस अध्याय में सीधे नहीं है। सबसे नज़दीक का विषय है: ${concept.title}।`);
  }
  points.forEach((p, i) => parts.push(`चरण ${i + 1}: ${p}`));
  if (example) parts.push(`उदाहरण: ${example}`);
  parts.push(CLOSING);
  return parts.join(' ');
}

export function answerDoubt(text, chapter) {
  const { concept: best, score } = findClosestConcept(text, chapter);
  const matched = score > 0;
  const concept = matched ? best : ((chapter && chapter.concepts) || [])[0] || null;

  if (!concept) {
    return { matched: false, conceptId: null, answer: CLOSING, checkQuestion: null, correctOptionId: null, card: null };
  }

  const card = concept.card || { points: [], example: '' };
  const allPoints = (card.points || []).slice(0, 3);
  const example = card.example ? String(card.example) : '';

  // Drop points from the end until the answer fits in the word cap.
  let answer = '';
  for (let n = allPoints.length; n >= 0; n--) {
    answer = buildAnswer(concept, matched, allPoints.slice(0, n), example);
    if (wordCount(answer) <= ANSWER_WORD_CAP) break;
  }
  if (wordCount(answer) > ANSWER_WORD_CAP) {
    answer = answer.trim().split(/\s+/).slice(0, ANSWER_WORD_CAP).join(' ');
  }

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
