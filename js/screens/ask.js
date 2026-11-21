import { CHAPTER } from '../data/chapter.js';
import { addDoubt, updateDoubt, getDoubts } from '../store.js';
import { answerDoubt, findClosestConcept } from '../tutor.js';
import { isOnline } from '../sync.js';

const TEXT_MAX = 300;
const LIST_CAP = 10;

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
  root.appendChild(el('h1', 'screen-title', 'सवाल पूछें'));

  if (!profile) {
    root.appendChild(el('p', null, 'पहले प्रोफ़ाइल चुनें'));
    const link = el('a', 'btn-secondary', 'प्रोफ़ाइल चुनें');
    link.href = '#/profiles';
    link.style.minHeight = '48px';
    root.appendChild(link);
    return;
  }

  // ----- input -----
  const card = el('div', 'card');
  const textarea = el('textarea');
  textarea.placeholder = 'अपना सवाल लिखें...';
  textarea.maxLength = TEXT_MAX;
  textarea.style.minHeight = '48px';
  textarea.style.width = '100%';
  textarea.style.fontSize = '18px';

  const listeningNote = el('p', 'muted', 'सुन रहा हूँ...');
  listeningNote.hidden = true;
  const speechNote = el('p', 'muted');

  const speakBtn = button('बोलकर पूछें', 'btn-yellow', () => toggleSpeech());
  const sendBtn = button('भेजें', 'btn', () => submit());
  const actions = el('div', 'actions');
  actions.append(speakBtn, sendBtn);

  card.append(textarea, listeningNote, speechNote, actions);
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
    recognition.lang = 'hi-IN';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const alt = event.results && event.results[0] && event.results[0][0];
      const transcript = alt && alt.transcript ? String(alt.transcript).trim() : '';
      if (transcript) textarea.value = transcript.slice(0, TEXT_MAX);
    };
    recognition.onerror = () => {
      setListening(false);
      ctx.toast('आवाज़ नहीं सुनी जा सकी, फिर से कोशिश करें');
    };
    recognition.onend = () => setListening(false);
  } else {
    speakBtn.disabled = true;
    speechNote.textContent = 'इस फ़ोन पर बोलकर पूछने की सुविधा नहीं है';
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
      ctx.toast('आवाज़ शुरू नहीं हो सकी');
    }
  }

  // ----- answer area -----
  const answerBox = el('section');
  root.appendChild(answerBox);

  function showAnswer(result) {
    answerBox.replaceChildren();
    answerBox.appendChild(el('h2', null, 'जवाब'));

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
            opt.id === result.correctOptionId ? 'बिल्कुल सही!' : 'अभी नहीं। फिर से सोचें।';
        });
        optionRow.appendChild(b);
      }
      checkCard.append(qText, optionRow, feedback);
      answerBox.appendChild(checkCard);
    }
  }

  function showOffline(text) {
    answerBox.replaceChildren();
    answerBox.appendChild(
      el(
        'div',
        'notice',
        'इंटरनेट नहीं है। आपका सवाल सहेज लिया गया है, जुड़ने पर जवाब मिल जाएगा। अभी इस विषय का पाठ देखें:',
      ),
    );

    const closest = findClosestConcept(text, CHAPTER);
    const concept = (closest && closest.concept) || (CHAPTER.concepts || [])[0];
    if (!concept) return;

    const conceptCard = el('div', 'card');
    conceptCard.appendChild(el('h2', null, concept.title));
    const firstPoint = (concept.card && concept.card.points && concept.card.points[0]) || '';
    const pointP = el('p', null, firstPoint);
    pointP.style.fontSize = '18px';
    const openBtn = button('यह पाठ खोलें', 'btn', () => ctx.navigate('#/learn/' + concept.id));
    conceptCard.append(pointP, openBtn);
    answerBox.appendChild(conceptCard);
  }

  // Runs the offline tutor, stores the answer on the doubt, returns the result.
  function answerAndSave(id, text) {
    let result;
    try {
      result = answerDoubt(text, CHAPTER);
    } catch {
      ctx.toast('जवाब नहीं बन सका, फिर से कोशिश करें');
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

  function submit() {
    const text = textarea.value.trim();
    if (!text) {
      ctx.toast('कृपया सवाल लिखें');
      return;
    }

    const offline = !isOnline();
    const id = addDoubt(profile.id, { text, status: 'queued' });
    textarea.value = '';

    if (offline) {
      showOffline(text);
    } else {
      const result = answerAndSave(id, text);
      if (result) showAnswer(result);
    }
    renderList();
  }

  // ----- past doubts -----
  root.appendChild(el('h2', null, 'आपके पिछले सवाल'));
  const list = el('div', 'list');
  root.appendChild(list);

  function answerStored(doubt) {
    if (!isOnline()) {
      ctx.toast('इंटरनेट नहीं है, जुड़ने पर जवाब मिलेगा');
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
      list.appendChild(el('p', 'muted', 'अभी कोई सवाल नहीं पूछा गया'));
      return;
    }
    for (const d of doubts) {
      const answered = d.status === 'answered';
      const item = el('div', 'card');
      const q = el('p', null, d.text);
      q.style.fontSize = '18px';
      const status = el('span', 'chip', answered ? 'जवाब मिला' : 'भेजने की प्रतीक्षा में');
      item.append(q, status);
      if (!answered) {
        item.appendChild(button('जवाब देखें', 'btn-ghost', () => answerStored(d)));
      }
      list.appendChild(item);
    }
  }

  renderList();
}
