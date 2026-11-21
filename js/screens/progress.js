// js/screens/progress.js — progress screen: streak, mastery per concept, weak topics,
// family code with sync, and the data-saver toggle. Never shows doubt texts.

import { CHAPTER } from '../data/chapter.js';
import { getProgress, getSettings, setSettings, getUsage } from '../store.js';
import { conceptStatus, weakConcepts, computeStreak, weekMinutes } from '../mastery.js';
import { syncFamilySummary } from '../sync.js';

const WEAK_CAP = 3;
const STATUS_LABEL = {
  mastered: 'सीखा',
  help: 'और अभ्यास चाहिए',
  learning: 'सीख रहे हैं',
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
    el('p', null, `लगातार दिन: ${computeStreak(days, today)}`),
    el('p', null, `इस हफ़्ते: ${weekMinutes(days, today)} मिनट`)
  );
  return card;
}

function masteryCard(progress) {
  const card = el('div', 'card');
  const mastery = progress.mastery || {};
  const attempts = Array.isArray(progress.attempts) ? progress.attempts : [];

  for (const concept of CHAPTER.concepts || []) {
    const raw = Number(mastery[concept.id]) || 0;
    const m = Math.min(1, Math.max(0, raw));
    const attempted = attempts.some((a) => a.conceptId === concept.id);
    const status = conceptStatus(m, attempted, progress.attemptCounts?.[concept.id] ?? 0);

    const row = el('div', 'concept-row');
    const head = el('div', 'concept-head');
    head.append(el('strong', null, concept.title), el('span', 'chip', STATUS_LABEL[status]));
    row.append(head, el('p', 'muted', `${Math.round(m * 100)}%`), progressBar(m));
    card.appendChild(row);
  }
  return card;
}

function weakCard(progress) {
  const card = el('div', 'card');
  card.appendChild(el('h2', null, 'कमज़ोर विषय'));

  const attempts = Array.isArray(progress.attempts) ? progress.attempts : [];
  const weak = weakConcepts(CHAPTER, progress)
    .filter((c) => attempts.some((a) => a.conceptId === c.id))
    .slice(0, WEAK_CAP);

  if (weak.length === 0) {
    card.appendChild(el('p', 'muted', 'अभी कोई कमज़ोर विषय नहीं'));
    return card;
  }
  const list = el('ul', 'weak-list');
  for (const c of weak) list.appendChild(el('li', null, c.title));
  card.appendChild(list);
  return card;
}

function familyCard(ctx, profile, progress) {
  const card = el('div', 'card');
  card.appendChild(el('h2', null, 'परिवार'));

  const code = el('div', 'family-code', profile.familyCode);
  code.style.fontSize = '2rem';
  code.style.fontWeight = '700';
  code.style.letterSpacing = '0.2em';
  card.append(code, el('p', 'muted', 'परिवार इस कोड से प्रगति देख सकता है'));

  if (getSettings().dataSaver) {
    card.appendChild(el('p', 'muted', 'डेटा बचत चालू है'));
    return card;
  }

  const btn = el('button', 'btn-secondary', 'परिवार के साथ सिंक करें');
  btn.type = 'button';
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    let ok = false;
    try {
      ok = await syncFamilySummary(profile, progress);
    } catch (e) {
      ok = false;
    }
    btn.disabled = false;
    ctx.toast(ok ? 'सिंक हो गया' : 'अभी सिंक नहीं हो पाया, इंटरनेट जुड़ने पर अपने-आप होगा');
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
  label.append(el('span', null, 'डेटा बचत'), input);
  return label;
}

function usageLine() {
  const kb = Math.round(getUsage().bytes / 1024);
  return el('p', 'muted', `आज ~${kb} KB डेटा`);
}

export function render(root, ctx) {
  root.appendChild(el('h1', 'screen-title', 'मेरी प्रगति'));

  const profile = ctx.profile;
  if (!profile) {
    const card = el('div', 'card');
    const link = el('a', 'btn', 'प्रोफ़ाइल चुनें');
    link.href = '#/profiles';
    card.append(el('p', 'muted', 'पहले प्रोफ़ाइल चुनें'), link);
    root.appendChild(card);
    return;
  }

  const progress = getProgress(profile.id) || {};
  const today = todayKey();

  root.appendChild(streakCard(progress, today));
  root.appendChild(masteryCard(progress));
  root.appendChild(weakCard(progress));
  root.appendChild(familyCard(ctx, profile, progress));
  root.appendChild(dataSaverRow(ctx));
  root.appendChild(usageLine());
}
