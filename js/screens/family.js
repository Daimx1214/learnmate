import { addUsage, getProfiles, getProgress } from '../store.js';
import { conceptStatus, isMastered, weekMinutes } from '../mastery.js';
import { localizedPack } from '../data/chapter.js';
import { t } from '../i18n.js';

const CODE_RE = /^[A-HJ-NP-Z2-9]{6}$/;
const SUMMARY_HELP_CAP = 20;
const TITLE_CAP = 60;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function formatUpdated(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleString('hi-IN');
}

function summaryCard(data) {
  const card = el('div', 'card');
  const help = Array.isArray(data.conceptsNeedingHelp) ? data.conceptsNeedingHelp : [];

  const hasDate = data.updatedAt && !Number.isNaN(new Date(data.updatedAt).getTime());
  const lines = [
    t('sum_minutes', { n: String(data.weekMinutes ?? 0) }),
    t('sum_mastered', { n: String(data.conceptsMastered ?? 0) }),
    help.length ? t('sum_help', { list: help.join(', ') }) : t('sum_help_none'),
    hasDate ? t('sum_updated', { date: formatUpdated(data.updatedAt) }) : 'आख़िरी अपडेट: अभी इसी फ़ोन से',
  ];
  for (const line of lines) {
    const p = el('p', null, line);
    p.style.fontSize = '18px';
    card.appendChild(p);
  }
  return card;
}

function localTodayStr() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Offline fallback: builds the same three-field summary sync.js sends, from the
// profile's local progress. Doubt text is never included. Returns null if no
// local profile has this family code.
function localSummary(code) {
  const profile = getProfiles().find((p) => p && p.familyCode === code);
  if (!profile) return null;
  const progress = getProgress(profile.id);
  const mastery = progress.mastery || {};
  const attempts = Array.isArray(progress.attempts) ? progress.attempts : [];
  const pack = localizedPack();
  const concepts = (pack && pack.concepts) || [];

  const conceptsNeedingHelp = concepts
    .filter((c) => {
      const attempted = attempts.some((a) => a.conceptId === c.id);
      return conceptStatus(Number(mastery[c.id]) || 0, attempted) === 'help';
    })
    .map((c) => [...String(c.title)].slice(0, TITLE_CAP).join(''))
    .slice(0, SUMMARY_HELP_CAP);

  return {
    weekMinutes: weekMinutes(progress.studyDays || {}, localTodayStr()),
    conceptsMastered: concepts.filter((c) => isMastered(progress, c.id)).length,
    conceptsNeedingHelp,
    // Local data has no sync timestamp, so the card shows '—' for last update.
    updatedAt: undefined,
  };
}

export function render(root, ctx) {
  root.appendChild(el('h1', 'screen-title', t('family_title')));

  const form = el('form');
  form.noValidate = true;

  const input = el('input');
  input.type = 'text';
  input.maxLength = 6;
  input.placeholder = t('family_code_placeholder');
  input.autocomplete = 'off';
  input.autocapitalize = 'characters';
  input.style.minHeight = '48px';
  input.style.fontSize = '18px';
  input.style.width = '100%';
  input.addEventListener('input', () => {
    const upper = input.value.toUpperCase();
    if (upper !== input.value) input.value = upper;
  });

  const submit = el('button', 'btn', t('family_view'));
  submit.type = 'submit';
  submit.style.minHeight = '48px';

  const actions = el('div', 'actions');
  actions.appendChild(submit);
  form.append(input, actions);
  root.appendChild(form);

  const resultBox = el('section');
  root.appendChild(resultBox);

  const note = el('p', 'muted', t('family_read_only'));
  root.appendChild(note);

  let busy = false;

  async function lookup(code) {
    busy = true;
    submit.disabled = true;
    resultBox.replaceChildren(el('p', 'muted', t('family_loading')));
    try {
      let res = null;
      try {
        res = await fetch('api/family/' + code);
      } catch {
        res = null; // no server reachable: use the local store below
      }
      if (res) {
        try {
          addUsage((await res.clone().arrayBuffer()).byteLength);
        } catch {
          // usage tracking must never break a lookup
        }
        // A static host answers unknown paths with an HTML 404, not a JSON 404.
        const type = (res.headers && res.headers.get('content-type')) || '';
        if (res.status === 404 && !type.includes('application/json')) res = null;
      }

      if (!res) {
        const local = localSummary(code);
        resultBox.replaceChildren(local ? summaryCard(local) : el('div', 'notice', t('family_not_found')));
        return;
      }

      if (res.status === 404) {
        resultBox.replaceChildren(el('div', 'notice', t('family_not_found')));
        return;
      }
      if (!res.ok) {
        resultBox.replaceChildren();
        ctx.toast(t('family_error'));
        return;
      }

      let data;
      try {
        data = await res.json();
      } catch {
        resultBox.replaceChildren();
        ctx.toast(t('family_error'));
        return;
      }
      resultBox.replaceChildren(summaryCard(data || {}));
    } finally {
      busy = false;
      submit.disabled = false;
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (busy) return;
    const code = input.value.trim().toUpperCase();
    if (!CODE_RE.test(code)) {
      ctx.toast(t('family_bad_code'));
      return;
    }
    lookup(code);
  });
}
