import { CHAPTER } from '../data/chapter.js';
import { addDoubt, updateDoubt, getDoubts, getProgress } from '../store.js';
import { answerDoubt, findClosestConcept } from '../tutor.js';
import { isOnline } from '../sync.js';
import { weakConcepts } from '../mastery.js';
import { t, speechLang } from '../i18n.js';

const TEXT_MAX = 300;
const LIST_CAP = 10;
const PHOTO_MAX_SIDE = 800;
const PHOTO_MAX_BYTES = 153600;
const PHOTO_QUALITIES = [0.8, 0.7, 0.6, 0.5];

// Approximate decoded size of a data URL's payload, in bytes.
function dataUrlBytes(url) {
  const comma = url.indexOf(',');
  return Math.ceil(((url.length - comma - 1) * 3) / 4);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('decode'));
    img.src = src;
  });
}

// Scales the longest side to at most PHOTO_MAX_SIDE, then steps JPEG quality
// down until the encoded size fits PHOTO_MAX_BYTES. Rejects if it cannot fit.
async function downscalePhoto(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) throw new Error('decode');
    const scale = Math.min(1, PHOTO_MAX_SIDE / Math.max(w, h));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(w * scale));
    canvas.height = Math.max(1, Math.round(h * scale));
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    for (const q of PHOTO_QUALITIES) {
      const dataUrl = canvas.toDataURL('image/jpeg', q);
      if (dataUrl.startsWith('data:image/jpeg') && dataUrlBytes(dataUrl) <= PHOTO_MAX_BYTES) {
        return dataUrl;
      }
    }
    throw new Error('too-large');
  } finally {
    URL.revokeObjectURL(url);
  }
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function button(label, className, onClick) {
  const b = el('button', className, label);
  b.type = 'button';
  b.style.minHeight = '48px';
  b.addEventListener('click', onClick);
  return b;
}

export function render(root, ctx) {
  const profile = ctx.profile;
  root.appendChild(el('h1', 'screen-title', t('ask_title')));

  if (!profile) {
    root.appendChild(el('p', null, t('profile_pick_first')));
    const link = el('a', 'btn-secondary', t('profile_pick_link'));
    link.href = '#/profiles';
    link.style.minHeight = '48px';
    root.appendChild(link);
    return;
  }

  // ----- input -----
  const card = el('div', 'card');
  const textarea = el('textarea');
  textarea.placeholder = t('ask_placeholder');
  textarea.maxLength = TEXT_MAX;
  textarea.style.minHeight = '48px';
  textarea.style.width = '100%';
  textarea.style.fontSize = '18px';

  const listeningNote = el('p', 'muted', t('ask_listening'));
  listeningNote.hidden = true;
  const speechNote = el('p', 'muted');

  const speakBtn = button(t('ask_speak'), 'btn-yellow', () => toggleSpeech());
  const sendBtn = button(t('ask_send'), 'btn', () => submit());

  // ----- optional photo -----
  const photoInput = el('input');
  photoInput.type = 'file';
  photoInput.accept = 'image/*';
  photoInput.hidden = true;
  const photoBtn = button(t('ask_add_photo'), 'btn-secondary', () => photoInput.click());
  const photoNote = el('p', 'muted');
  let pendingPhoto = null;

  function resetPhoto() {
    pendingPhoto = null;
    photoInput.value = '';
    photoNote.textContent = '';
  }

  async function onPhotoChosen(file) {
    pendingPhoto = null;
    if (!file) return;
    if (!String(file.type || '').startsWith('image/')) {
      photoInput.value = '';
      photoNote.textContent = t('ask_not_image');
      return;
    }
    photoNote.textContent = t('ask_photo_preparing');
    try {
      pendingPhoto = await downscalePhoto(file);
      photoNote.textContent = t('ask_photo_added');
    } catch (e) {
      photoInput.value = '';
      photoNote.textContent =
        e && e.message === 'too-large'
          ? t('ask_photo_too_large')
          : t('ask_photo_failed');
    }
  }
  photoInput.addEventListener('change', () => onPhotoChosen(photoInput.files && photoInput.files[0]));

  const actions = el('div', 'actions');
  actions.append(photoBtn, speakBtn, sendBtn);

  card.append(textarea, listeningNote, speechNote, photoInput, photoNote, actions);
  root.appendChild(card);

  // ----- speech -----
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let isListening = false;

  function setListening(on) {
    isListening = on;
    listeningNote.hidden = !on;
  }

  if (SR) {
    recognition = new SR();
    recognition.lang = speechLang();
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const alt = event.results && event.results[0] && event.results[0][0];
      const transcript = alt && alt.transcript ? String(alt.transcript).trim() : '';
      if (transcript) textarea.value = transcript.slice(0, TEXT_MAX);
    };
    recognition.onerror = () => {
      setListening(false);
      ctx.toast(t('ask_voice_unheard'));
    };
    recognition.onend = () => setListening(false);
  } else {
    speakBtn.disabled = true;
    speechNote.textContent = t('ask_no_voice');
  }

  function toggleSpeech() {
    if (!recognition) return;
    if (isListening) {
      try {
        recognition.stop();
      } catch {
        // already stopped
      }
      setListening(false);
      return;
    }
    try {
      recognition.start();
      setListening(true);
    } catch {
      ctx.toast(t('ask_voice_start_failed'));
    }
  }

  // ----- answer area -----
  const answerBox = el('section');
  root.appendChild(answerBox);

  function showAnswer(result) {
    answerBox.replaceChildren();
    answerBox.appendChild(el('h2', null, t('ask_answer_heading')));

    const answerCard = el('div', 'card');
    const body = el('p', null, result.answer || '');
    body.style.whiteSpace = 'pre-line';
    body.style.fontSize = '18px';
    answerCard.appendChild(body);
    answerBox.appendChild(answerCard);

    const cq = result.checkQuestion;
    if (cq) {
      const checkCard = el('div', 'card');
      const qText = el('p', null, cq.text);
      qText.style.fontSize = '18px';
      const feedback = el('p', 'muted');
      feedback.setAttribute('aria-live', 'polite');

      const optionRow = el('div', 'actions');
      for (const opt of cq.options || []) {
        const b = button(opt.text, 'btn-secondary', () => {
          feedback.textContent =
            opt.id === result.correctOptionId ? t('ask_right') : t('ask_wrong');
        });
        optionRow.appendChild(b);
      }
      checkCard.append(qText, optionRow, feedback);
      answerBox.appendChild(checkCard);
    }
  }

  // Offline-style card of the closest concept. Photo-only doubts pass '' for
  // text and PHOTO_NOTE as intro; the photo is never read for the concept pick.
  function showOffline(text, intro = t('ask_offline_note'), forcedConcept = null) {
    answerBox.replaceChildren();
    answerBox.appendChild(el('div', 'notice', intro));

    const closest = findClosestConcept(text, CHAPTER);
    const concept = forcedConcept || (closest && closest.concept) || (CHAPTER.concepts || [])[0];
    if (!concept) return;

    const conceptCard = el('div', 'card');
    conceptCard.appendChild(el('h2', null, concept.title));
    const firstPoint = (concept.card && concept.card.points && concept.card.points[0]) || '';
    const pointP = el('p', null, firstPoint);
    pointP.style.fontSize = '18px';
    const openBtn = button(t('ask_open_lesson'), 'btn', () => ctx.navigate('#/learn/' + concept.id));
    conceptCard.append(pointP, openBtn);
    answerBox.appendChild(conceptCard);
  }

  // Runs the offline tutor, stores the answer on the doubt, returns the result.
  function answerAndSave(id, text) {
    let result;
    try {
      result = answerDoubt(text, CHAPTER);
    } catch {
      ctx.toast(t('ask_failed'));
      return null;
    }
    updateDoubt(profile.id, id, {
      status: 'answered',
      answer: result.answer,
      conceptId: result.conceptId,
      checkQuestion: result.checkQuestion,
      correctOptionId: result.correctOptionId,
    });
    return result;
  }

  // Photo-only doubts get status 'photo_only' (not 'queued'), so the local
  // flush never answers them from empty text.
  function showPhotoOnly() {
    // Weakest concept for this learner; if none is returned, showOffline falls back to the first concept.
    const weak = weakConcepts(CHAPTER, getProgress(profile.id));
    showOffline('', t('ask_photo_note'), (weak && weak[0]) || null);
  }

  function submit() {
    const text = textarea.value.trim();
    const photo = pendingPhoto;
    if (!text && !photo) {
      ctx.toast(t('ask_need_input'));
      return;
    }

    if (!text) {
      addDoubt(profile.id, { text: '', status: 'photo_only', photo });
      resetPhoto();
      showPhotoOnly();
      renderList();
      return;
    }

    const offline = !isOnline();
    const fields = { text, status: 'queued' };
    if (photo) fields.photo = photo;
    const id = addDoubt(profile.id, fields);
    textarea.value = '';
    resetPhoto();

    if (offline) {
      showOffline(text);
    } else {
      const result = answerAndSave(id, text);
      if (result) showAnswer(result);
    }
    renderList();
  }

  // ----- past doubts -----
  root.appendChild(el('h2', null, t('ask_past')));
  const list = el('div', 'list');
  root.appendChild(list);

  function answerStored(doubt) {
    if (!doubt.text) {
      showPhotoOnly();
      return;
    }
    if (!isOnline()) {
      ctx.toast(t('ask_offline_wait'));
      return;
    }
    const result = answerAndSave(doubt.id, doubt.text);
    if (result) {
      showAnswer(result);
      renderList();
    }
  }

  function renderList() {
    list.replaceChildren();
    // Stored oldest first; show newest first, capped.
    const doubts = getDoubts(profile.id).slice(-LIST_CAP).reverse();
    if (!doubts.length) {
      list.appendChild(el('p', 'muted', t('ask_none')));
      return;
    }
    for (const d of doubts) {
      const answered = d.status === 'answered';
      const item = el('div', 'card');
      const q = el('p', null, d.text || t('ask_photo_only'));
      q.style.fontSize = '18px';
      const status = el('span', 'chip', answered ? t('ask_status_answered') : d.status === 'photo_only' ? t('ask_status_photo') : t('ask_status_queued'));
      const row = el('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '8px';
      if (d.photo) {
        const thumb = el('img');
        thumb.src = d.photo;
        thumb.alt = t('ask_photo_alt');
        thumb.style.maxWidth = '48px';
        thumb.style.maxHeight = '48px';
        thumb.style.objectFit = 'contain';
        row.appendChild(thumb);
      }
      row.appendChild(q);
      item.append(row, status);
      if (!answered) {
        item.appendChild(button(t('ask_see_answer'), 'btn-ghost', () => answerStored(d)));
      }
      list.appendChild(item);
    }
  }

  renderList();
}
