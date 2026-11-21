import { CHAPTER } from '../data/chapter.js';
import { getProgress } from '../store.js';
import { conceptStatus } from '../mastery.js';

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

function setBar(bar, fraction) {
  const fill = document.createElement('i');
  fill.style.setProperty('--p', String(fraction));
  bar.appendChild(fill);
  return bar;
}

function conceptMastery(progress, concept) {
  const map = (progress && progress.mastery) || {};
  return Math.min(1, Math.max(0, Number(map[concept.id]) || 0));
}

function isAttempted(progress, concept) {
  const attempts = (progress && progress.attempts) || [];
  return attempts.some((a) => a.conceptId === concept.id);
}

function renderList(root, ctx, progress) {
  root.appendChild(el('h1', 'screen-title', 'सीखें: बल और दाब'));

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

    const chip = el('span', 'chip', STATUS_LABEL[status] || STATUS_LABEL.learning);
    const bar = setBar(el('div', 'progress-bar'), m);

    card.append(btn, chip, bar);
    list.appendChild(card);
  }
  root.appendChild(list);
}

function renderConcept(root, ctx, progress, concept) {
  const reshow = Boolean(ctx.params && ctx.params.reshow);

  root.appendChild(el('h1', 'screen-title', concept.title));

  if (reshow) {
    root.appendChild(
      el('div', 'notice', 'इस विषय में थोड़ी और मेहनत चाहिए। पहले यह पाठ फिर से देखें।'),
    );
  }

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

  root.appendChild(el('div', 'notice', 'उदाहरण: ' + ((concept.card && concept.card.example) || '')));

  const actions = el('div', 'actions');

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const listen = el('button', 'btn-secondary', 'सुनें');
    listen.type = 'button';
    listen.addEventListener('click', () => {
      const points = (concept.card && concept.card.points) || [];
      const example = (concept.card && concept.card.example) || '';
      const text = [...points, example].filter(Boolean).join(' । ');
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      window.speechSynthesis.speak(utterance);
    });
    actions.appendChild(listen);
  }

  const practice = el('button', 'btn', reshow ? 'समझ गया, अभ्यास करें' : 'अभ्यास शुरू करें');
  practice.type = 'button';
  practice.addEventListener('click', () => ctx.navigate('#/practice'));

  const back = el('button', 'btn-secondary', 'सूची पर वापस');
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
    root.appendChild(el('p', null, 'यह पाठ नहीं मिला'));
    const back = el('button', 'btn-secondary', 'सूची पर वापस');
    back.type = 'button';
    back.addEventListener('click', () => ctx.navigate('#/learn'));
    root.appendChild(back);
    return;
  }

  renderConcept(root, ctx, progress, concept);
}
