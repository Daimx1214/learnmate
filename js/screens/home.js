import { CHAPTER } from '../data/chapter.js';
import { getProgress } from '../store.js';
import { computeStreak, weakConcepts } from '../mastery.js';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Local calendar date as YYYY-MM-DD (matches the keys used in studyDays).
function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function overallMastery(progress) {
  const concepts = CHAPTER.concepts || [];
  if (!concepts.length) return 0;
  const map = (progress && progress.mastery) || {};
  const sum = concepts.reduce((acc, c) => acc + (Number(map[c.id]) || 0), 0);
  return sum / concepts.length;
}

function statRow(label, value) {
  const row = el('div', 'stat-row');
  row.append(el('span', 'muted', label), el('strong', null, value));
  return row;
}

export function render(root, ctx) {
  const profile = ctx.profile;
  if (!profile) {
    ctx.navigate('#/profiles');
    return;
  }

  const progress = getProgress(profile.id) || {};
  const today = todayKey();
  const studyDays = progress.studyDays || {};

  const todayMinutes = Math.round((Number(studyDays[today]) || 0) / 60);
  const streak = computeStreak(studyDays, today);
  const weakest = weakConcepts(CHAPTER, progress)[0];
  const weakTitle = weakest ? weakest.title : 'अभी कोई कमज़ोर विषय नहीं';
  const mastery = overallMastery(progress);
  const percent = Math.round(mastery * 100);

  root.appendChild(el('h1', 'screen-title', `नमस्ते, ${profile.nickname}!`));

  const card = el('div', 'card');
  card.append(
    statRow('आज का अध्ययन', `${todayMinutes} मिनट`),
    statRow('लगातार दिन', `${streak} दिन`),
    statRow('सबसे कमज़ोर विषय', weakTitle),
  );

  const masteryLabel = el('p', 'muted', `कुल समझ: ${percent}%`);
  const bar = el('div', 'progress-bar');
  const fill = document.createElement('i');
  fill.style.setProperty('--p', String(mastery));
  bar.appendChild(fill);
  card.append(masteryLabel, bar);
  root.appendChild(card);

  const actions = el('div', 'actions');
  const buttons = [
    ['आज का पाठ सीखें', '#/learn'],
    ['अभ्यास करें', '#/practice'],
    ['सवाल पूछें', '#/ask'],
  ];
  for (const [text, hash] of buttons) {
    const btn = el('button', 'btn', text);
    btn.type = 'button';
    btn.addEventListener('click', () => ctx.navigate(hash));
    actions.appendChild(btn);
  }
  root.appendChild(actions);

  root.appendChild(el('p', 'muted', `अध्याय: ${CHAPTER.title}`));
  root.appendChild(el('p', 'muted', 'आधार: कक्षा 8 विज्ञान पाठ्यक्रम'));
}
