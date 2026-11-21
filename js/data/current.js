// Saathi (साथी): resolves the chapter for the active language. Resolve at render time; do not cache at module load.
import { CHAPTER as CHAPTER_HI, MISCONCEPTIONS as MIS_HI } from './chapter.js';
import { CHAPTER as CHAPTER_EN, MISCONCEPTIONS as MIS_EN } from './chapter.en.js';
import { CHAPTER as CHAPTER_UR, MISCONCEPTIONS as MIS_UR } from './chapter.ur.js';
import { getLang } from '../i18n.js';

export function chapterFor(lang) {
  if (lang === 'en') return { CHAPTER: CHAPTER_EN, MISCONCEPTIONS: MIS_EN };
  if (lang === 'ur') return { CHAPTER: CHAPTER_UR, MISCONCEPTIONS: MIS_UR };
  return { CHAPTER: CHAPTER_HI, MISCONCEPTIONS: MIS_HI };
}

export function getCurrentChapter() {
  return chapterFor(getLang());
}
