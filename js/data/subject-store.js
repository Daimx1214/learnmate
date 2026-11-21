// js/data/subject-store.js — which subject the learner is studying.
// Stored on-device only. Content packs live in js/data/<subject>.js and are
// registered in js/data/chapter.js; a subject becomes selectable only when
// its pack actually has chapters.
const KEY = 'learnmate.subject.v1';
export const SUBJECT_IDS = ['science', 'math', 'english', 'urdu', 'computer', 'social', 'islamiat'];

export function getSubjectId() {
  try {
    const v = localStorage.getItem(KEY);
    return SUBJECT_IDS.includes(v) ? v : 'science';
  } catch {
    return 'science';
  }
}

export function setSubjectId(id) {
  try {
    if (SUBJECT_IDS.includes(id)) localStorage.setItem(KEY, id);
  } catch { /* storage unavailable */ }
}
