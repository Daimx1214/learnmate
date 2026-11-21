import { CHAPTER, MISCONCEPTIONS } from '../data/chapter.js';
import { getProgress, saveProgress } from '../store.js';
import { applyAnswer, shouldShowLesson, pickNextQuestion } from '../mastery.js';
import { t } from '../i18n.js';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function percentOf(progress, concept) {
  const map = (progress && progress.mastery) || {};
  const m = Math.min(1, Math.max(0, Number(map[concept.id]) || 0));
  return { m, pct: Math.round(m * 100) };
}

export function render(root, ctx) {
  const profile = ctx.profile;
  if (!profile) {
    ctx.navigate('#/profiles');
    return;
  }

  let progress = getProgress(profile.id) || {};

  // Closure state for this screen instance: the chosen question, and the
  // option the learner tapped (null until answered).
  let picked = null; // { concept, question }
  let answered = null; // option object

  const pick = () => {
    picked = pickNextQuestion(CHAPTER, progress) || null;
    answered = null;
  };

  const showLesson = (concept) => {
    root.replaceChildren();
    root.appendChild(el('h1', 'screen-title', concept.title));
    root.appendChild(el('p', 'muted', t('practice_lesson_note')));

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

    const btn = el('button', 'btn', t('practice_read_done'));
    btn.type = 'button';
    btn.addEventListener('click', () => {
      progress.wrongStreak = progress.wrongStreak || {};
      progress.wrongStreak[concept.id] = 0;
      saveProgress(profile.id, progress);
      draw();
    });
    const actions = el('div', 'actions');
    actions.appendChild(btn);
    root.appendChild(actions);
  };

  const showFeedback = (concept, question, option) => {
    const box = el('div', 'card');
    box.style.marginTop = '12px';

    if (option.correct) {
      box.style.borderLeft = '4px solid var(--green)';
      const reason = question.explanation || t('practice_default_reason');
      box.appendChild(el('p', null, t('practice_correct', { reason })));
    } else {
      box.appendChild(el('p', null, option.feedback || ''));
      const label = option.misconception && MISCONCEPTIONS[option.misconception]
        ? MISCONCEPTIONS[option.misconception].label
        : null;
      if (label) {
        box.appendChild(el('span', 'chip', t('practice_misconception', { label })));
      }
    }
    root.appendChild(box);

    const actions = el('div', 'actions');
    const next = el('button', 'btn', t('practice_next'));
    next.type = 'button';
    next.addEventListener('click', () => ctx.refresh());
    const ghost = el('button', 'btn-ghost', t('practice_view_lesson'));
    ghost.type = 'button';
    ghost.addEventListener('click', () => ctx.navigate('#/learn/' + concept.id));
    actions.append(next, ghost);
    root.appendChild(actions);
  };

  const onAnswer = (concept, question, option) => {
    if (answered) return;
    answered = option;
    const tag = option.misconception || null;
    progress = applyAnswer(progress, {
      conceptId: concept.id,
      questionId: question.id,
      optionId: option.id,
      tag,
      correct: Boolean(option.correct),
    });
    saveProgress(profile.id, progress);
    draw();
  };

  const showQuestion = (concept, question) => {
    root.replaceChildren();
    root.appendChild(el('h1', 'screen-title', t('practice_title', { title: concept.title })));

    const { m, pct } = percentOf(progress, concept);
    const chip = el('span', 'chip', t('practice_mastery', { pct }));
    const bar = el('div', 'progress-bar');
    const fill = document.createElement('i');
    fill.style.setProperty('--p', String(m));
    bar.appendChild(fill);
    root.append(chip, bar);

    const q = el('p', null, question.text);
    q.style.fontSize = '20px';
    q.style.fontWeight = '600';
    root.appendChild(q);

    const options = [];
    for (const option of question.options || []) {
      const btn = el('button', 'btn-secondary', option.text);
      btn.type = 'button';
      btn.style.minHeight = '56px';
      btn.style.width = '100%';
      btn.style.marginBottom = '8px';
      btn.addEventListener('click', () => onAnswer(concept, question, option));
      options.push({ option, btn });
      root.appendChild(btn);
    }

    if (answered) {
      for (const { option, btn } of options) {
        btn.disabled = true;
        if (option.correct) btn.style.border = '2px solid var(--green)';
      }
      showFeedback(concept, question, answered);
    }
  };

  const draw = () => {
    root.replaceChildren();
    if (!picked) {
      pick();
    }
    if (!picked) {
      root.appendChild(el('p', null, t('practice_none')));
      return;
    }
    const { concept, question } = picked;

    if (!answered && shouldShowLesson(progress, concept.id)) {
      showLesson(concept);
      return;
    }
    showQuestion(concept, question);
  };

  draw();
}
