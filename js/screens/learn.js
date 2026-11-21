import { CHAPTER } from '../data/chapter.js';
import { getProgress } from '../store.js';
import { conceptStatus } from '../mastery.js';
import { t, speechLang } from '../i18n.js';

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

function setBar(bar, fraction) {
  const fill = document.createElement('i');
  fill.style.setProperty('--p', String(fraction));
  bar.appendChild(fill);
  return bar;
}

function conceptMastery(progress, concept) {
  const map = (progress && progress.mastery) || {};
  const raw = Number(map[concept.id]);
  return Math.min(1, Math.max(0, Number.isFinite(raw) ? raw : 0.3));
}

function isAttempted(progress, concept) {
  const attempts = (progress && progress.attempts) || [];
  return attempts.some((a) => a.conceptId === concept.id);
}

function renderList(root, ctx, progress) {
  root.appendChild(el('h1', 'screen-title', t('learn_title')));

  // Pack status line: lesson card count, then offline readiness once the service worker is ready.
  const packCount = (CHAPTER.concepts || []).length;
  const packLine = el('p', 'muted', t('learn_cards', { n: packCount }));
  root.appendChild(packLine);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(() => {
        if (packLine.isConnected) packLine.textContent += t('learn_offline_ready');
      })
      .catch(() => {});
  }

  const list = el('div', 'list');
  for (const concept of CHAPTER.concepts || []) {
    const m = conceptMastery(progress, concept);
    const status = conceptStatus(m, isAttempted(progress, concept), progress?.attemptCounts?.[concept.id] ?? 0);

    const card = el('div', 'card');
    const btn = el('button', 'btn-secondary', concept.title);
    btn.type = 'button';
    btn.style.minHeight = '48px';
    btn.style.width = '100%';
    btn.style.fontSize = '18px';
    btn.addEventListener('click', () => ctx.navigate('#/learn/' + concept.id));

    const chip = el('span', 'chip', t(STATUS_LABEL[status] || STATUS_LABEL.learning));
    const bar = setBar(el('div', 'progress-bar'), m);

    card.append(btn, chip, bar);
    list.appendChild(card);
  }
  root.appendChild(list);
}

function renderConcept(root, ctx, progress, concept) {
  root.appendChild(el('h1', 'screen-title', concept.title));

  const card = el('div', 'card');
  const ol = el('ol');
  for (const point of (concept.card && concept.card.points) || []) {
    const li = el('li', null, point);
    li.style.fontSize = '18px';
    li.style.marginBottom = '8px';
    ol.appendChild(li);
  }
  card.appendChild(ol);
  root.appendChild(card);

  root.appendChild(el('div', 'notice', t('learn_example', { example: (concept.card && concept.card.example) || '' })));

  const actions = el('div', 'actions');

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const listen = el('button', 'btn-secondary', t('learn_listen'));
    listen.type = 'button';
    listen.addEventListener('click', () => {
      const points = (concept.card && concept.card.points) || [];
      const example = (concept.card && concept.card.example) || '';
      const text = [...points, example].filter(Boolean).join(' । ');
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = speechLang();
      window.speechSynthesis.speak(utterance);
    });
    actions.appendChild(listen);
  }

  const practice = el('button', 'btn', t('learn_practice'));
  practice.type = 'button';
  practice.addEventListener('click', () => ctx.navigate('#/practice'));

  const back = el('button', 'btn-secondary', t('back_to_list'));
  back.type = 'button';
  back.addEventListener('click', () => ctx.navigate('#/learn'));

  actions.append(practice, back);
  root.appendChild(actions);
}

export function render(root, ctx) {
  const profile = ctx.profile;
  if (!profile) {
    ctx.navigate('#/profiles');
    return;
  }

  const progress = getProgress(profile.id) || {};
  const conceptId = ctx.params && ctx.params.conceptId;

  if (!conceptId) {
    renderList(root, ctx, progress);
    return;
  }

  const concept = (CHAPTER.concepts || []).find((c) => c.id === conceptId);
  if (!concept) {
    root.appendChild(el('p', null, t('learn_not_found')));
    const back = el('button', 'btn-secondary', t('back_to_list'));
    back.type = 'button';
    back.addEventListener('click', () => ctx.navigate('#/learn'));
    root.appendChild(back);
    return;
  }

  renderConcept(root, ctx, progress, concept);
}
