// js/screens/progress.js — progress screen: streak, mastery per concept, weak topics,
// family code with sync, and the data-saver toggle. Never shows doubt texts.

import { CHAPTER } from '../data/chapter.js';
import { getProgress, getSettings, setSettings, getUsage } from '../store.js';
import { conceptStatus, weakConcepts, computeStreak, weekMinutes } from '../mastery.js';
import { syncFamilySummary } from '../sync.js';
import { t } from '../i18n.js';

const WEAK_CAP = 3;
const STATUS_LABEL = {
  mastered: 'status_mastered',
  help: 'status_help',
  learning: 'status_learning',
};

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

function progressBar(fraction) {
  const bar = el('div', 'progress-bar');
  const fill = document.createElement('i');
  fill.style.setProperty('--p', fraction.toFixed(2));
  bar.appendChild(fill);
  return bar;
}

function streakCard(progress, today) {
  const days = progress.studyDays || {};
  const card = el('div', 'card');
  card.append(
    el('p', null, t('progress_streak', { n: computeStreak(days, today) })),
    el('p', null, t('progress_week', { n: weekMinutes(days, today) }))
  );
  return card;
}

function masteryCard(progress) {
  const card = el('div', 'card');
  const mastery = progress.mastery || {};
  const attempts = Array.isArray(progress.attempts) ? progress.attempts : [];

  for (const concept of CHAPTER.concepts || []) {
    const raw = Number.isFinite(Number(mastery[concept.id])) ? Number(mastery[concept.id]) : 0.3;
    const m = Math.min(1, Math.max(0, raw));
    const attempted = attempts.some((a) => a.conceptId === concept.id);
    const status = conceptStatus(m, attempted, progress.attemptCounts?.[concept.id] ?? 0);

    const row = el('div', 'concept-row');
    const head = el('div', 'concept-head');
    head.append(el('strong', null, concept.title), el('span', 'chip', t(STATUS_LABEL[status])));
    row.append(head, el('p', 'muted', `${Math.round(m * 100)}%`), progressBar(m));
    card.appendChild(row);
  }
  return card;
}

function weakCard(progress) {
  const card = el('div', 'card');
  card.appendChild(el('h2', null, t('weak_heading')));

  const attempts = Array.isArray(progress.attempts) ? progress.attempts : [];
  const weak = weakConcepts(CHAPTER, progress)
    .filter((c) => attempts.some((a) => a.conceptId === c.id))
    .slice(0, WEAK_CAP);

  if (weak.length === 0) {
    card.appendChild(el('p', 'muted', t('weak_none')));
    return card;
  }
  const list = el('ul', 'weak-list');
  for (const c of weak) list.appendChild(el('li', null, c.title));
  card.appendChild(list);
  return card;
}

function familyCard(ctx, profile, progress) {
  const card = el('div', 'card');
  card.appendChild(el('h2', null, t('family_heading')));

  const code = el('div', 'family-code', profile.familyCode);
  code.setAttribute('dir', 'ltr');
  code.style.fontSize = '2rem';
  code.style.fontWeight = '700';
  code.style.letterSpacing = '0.2em';
  card.append(code, el('p', 'muted', t('family_code_note')));

  if (getSettings().dataSaver) {
    card.appendChild(el('p', 'muted', t('data_saver_on')));
  }

  const btn = el('button', 'btn-secondary', t('family_sync'));
  btn.type = 'button';
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    let ok = false;
    try {
      ok = await syncFamilySummary(profile, progress, true);
    } catch (e) {
      ok = false;
    }
    btn.disabled = false;
    ctx.toast(ok === 'local' ? t('sync_saved_local') : ok ? t('sync_done') : t('sync_later'));
  });
  card.appendChild(btn);
  return card;
}

function dataSaverRow(ctx) {
  const label = el('label', 'toggle');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = !!getSettings().dataSaver;
  input.onchange = () => {
    setSettings({ dataSaver: input.checked });
    ctx.refresh();
  };
  label.append(el('span', null, t('data_saver')), input);
  return label;
}


function usageLine() {
  const kb = Math.round(getUsage().bytes / 1024);
  return el('p', 'muted', t('data_today', { kb }));
}

export function render(root, ctx) {
  root.appendChild(el('h1', 'screen-title', t('progress_title')));

  const profile = ctx.profile;
  if (!profile) {
    const card = el('div', 'card');
    const link = el('a', 'btn', t('profile_pick_link'));
    link.href = '#/profiles';
    card.append(el('p', 'muted', t('profile_pick_first')), link);
    root.appendChild(card);
    return;
  }

  const progress = getProgress(profile.id) || {};
  const today = todayKey();

  root.appendChild(streakCard(progress, today));
  root.appendChild(masteryCard(progress));
  root.appendChild(weakCard(progress));
  root.appendChild(familyCard(ctx, profile, progress));
  const saverCard = el('div', 'card');
  saverCard.appendChild(dataSaverRow(ctx));
  root.appendChild(saverCard);
  root.appendChild(usageLine());
}
