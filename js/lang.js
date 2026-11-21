// js/lang.js — the app's language choice (owner request, 22 Nov 2026).
// English is the default; Hindi is one tap away from the header button.
// The choice is stored only on this phone. Hindi content remains complete:
// the PS3 "one language" experience is fully available in Hindi mode.

const KEY = 'learnmate.lang.v1';

export function getLang() {
  try {
    return localStorage.getItem(KEY) === 'hi' ? 'hi' : 'en';
  } catch (err) {
    return 'en';
  }
}

export function setLang(lang) {
  try {
    localStorage.setItem(KEY, lang === 'hi' ? 'hi' : 'en');
  } catch (err) {
    // Storage unavailable: the language simply stays English this session.
  }
}
