import { CHAPTER } from '../data/chapter.js';
import { getProgress } from '../store.js';
import { computeStreak, weakConcepts } from '../mastery.js';
import { t } from '../i18n.js';

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
  row.append(el('span', 'muted stat-label', label), el('strong', 'stat-value', value));
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
  const weakTitle = weakest ? weakest.title : t('weak_none');
  const mastery = overallMastery(progress);
  const percent = Math.round(mastery * 100);

  root.appendChild(el('h1', 'screen-title', t('home_greeting', { name: profile.nickname })));

  const card = el('div', 'card');
  card.append(
    statRow(t('home_stat_today'), t('home_minutes', { n: todayMinutes })),
    statRow(t('home_stat_streak'), t('home_days', { n: streak })),
    statRow(t('home_stat_weak'), weakTitle),
  );

  const masteryLabel = el('p', 'muted', t('home_mastery', { pct: percent }));
  const bar = el('div', 'progress-bar');
  const fill = document.createElement('i');
  fill.style.setProperty('--p', String(mastery));
  bar.appendChild(fill);
  card.append(masteryLabel, bar);
  root.appendChild(card);

  const actions = el('div', 'actions');
  const buttons = [
    [t('home_btn_learn'), '#/learn'],
    [t('home_btn_practice'), '#/practice'],
    [t('home_btn_ask'), '#/ask'],
  ];
  for (const [text, hash] of buttons) {
    const btn = el('button', 'btn', text);
    btn.type = 'button';
    btn.addEventListener('click', () => ctx.navigate(hash));
    actions.appendChild(btn);
  }
  root.appendChild(actions);

  root.appendChild(el('p', 'muted', t('home_chapter', { title: CHAPTER.title })));
  root.appendChild(el('p', 'muted', t('home_base')));
}
