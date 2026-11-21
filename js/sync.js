// js/sync.js — every network call goes through fetchTracked, which records data usage.

import { getSettings, setSettings, addUsage, getDoubts, updateDoubt, getProfile, getProgress } from './store.js';
import { conceptStatus, isMastered, weekMinutes } from './mastery.js';
import { answerDoubt } from './tutor.js';
import { getCurrentChapter } from './data/current.js';
import { getLang } from './i18n.js';

const SUMMARY_HELP_CAP = 20;
const TITLE_CAP = 60;

function todayStr() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Returns the Response, or null on network error. Never throws.
export async function fetchTracked(url, options = {}) {
  let res;
  try {
    res = await fetch(url, options);
  } catch (e) {
    return null;
  }
  let bytes = 0;
  try {
    bytes = (await res.clone().arrayBuffer()).byteLength;
  } catch (e) {
    const cl = Number(res.headers && res.headers.get('content-length'));
    bytes = Number.isFinite(cl) ? cl : 0;
  }
  try {
    addUsage(bytes);
  } catch (e) {
    // usage tracking must never break a fetch
  }
  return res;
}

export async function syncFamilySummary(profile, progress, manual = false) {
  try {
    if (!profile || !profile.familyCode) return false;
    // Data-saver blocks only automatic syncs; a manual sync always goes through.
    if (getSettings().dataSaver && !manual) return false;

    const mastery = (progress && progress.mastery) || {};
    const attempts = (progress && Array.isArray(progress.attempts)) ? progress.attempts : [];
    const { CHAPTER } = getCurrentChapter();
    const concepts = (CHAPTER && CHAPTER.concepts) || [];

    const conceptsNeedingHelp = concepts
      .filter((c) => {
        const attempted = attempts.some((a) => a.conceptId === c.id);
        return conceptStatus(Number(mastery[c.id]) || 0, attempted) === 'help';
      })
      .map((c) => [...String(c.title)].slice(0, TITLE_CAP).join(''))
      .slice(0, SUMMARY_HELP_CAP);

    // Only these three keys. Doubt text is never sent.
    const summary = {
      weekMinutes: weekMinutes((progress && progress.studyDays) || {}, todayStr()),
      conceptsMastered: concepts.filter((c) => isMastered(progress, c.id)).length,
      conceptsNeedingHelp,
    };

    const body = JSON.stringify({ familyCode: profile.familyCode, summary });
    try {
      addUsage(new TextEncoder().encode(body).length);
    } catch (e) {
      // usage tracking must never break a sync
    }
    const res = await fetchTracked('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    if (!res || !res.ok) return false;

    setSettings({ lastSyncAt: new Date().toISOString() });
    return true;
  } catch (e) {
    return false;
  }
}

// Answers queued doubts locally. No network calls.
export function flushDoubtQueue(profileId) {
  const { CHAPTER } = getCurrentChapter();
  for (const d of getDoubts(profileId)) {
    if (d.status !== 'queued') continue;
    try {
      const r = answerDoubt(d.text, CHAPTER, getLang());
      updateDoubt(profileId, d.id, {
        status: 'answered',
        answer: r.answer,
        conceptId: r.conceptId,
        checkQuestion: r.checkQuestion,
        correctOptionId: r.correctOptionId,
      });
    } catch (e) {
      // leave this doubt queued; try again on the next flush
    }
  }
}

export function isOnline() {
  return typeof navigator !== 'undefined' ? navigator.onLine !== false : true;
}

export async function syncAll(profileId) {
  try {
    if (!isOnline()) return false;
    const profile = getProfile(profileId);
    if (!profile) return false;
    flushDoubtQueue(profileId);
    return await syncFamilySummary(profile, getProgress(profileId));
  } catch (e) {
    return false;
  }
}
