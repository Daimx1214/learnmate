// js/store.js — localStorage wrapper. All keys are prefixed 'saathi.v1.'.
// Every storage access is wrapped; if localStorage is unavailable or full,
// an in-memory Map keeps the session working.

const PREFIX = 'saathi.v1.';
const KEYS = {
  profiles: PREFIX + 'profiles',
  active: PREFIX + 'activeProfile',
  settings: PREFIX + 'settings',
  usage: PREFIX + 'usage',
};
const progressKey = (id) => `${PREFIX}progress.${id}`;
const doubtsKey = (id) => `${PREFIX}doubts.${id}`;

const MAX_PROFILES = 4;
const MAX_DOUBTS = 50;
const NICK_MAX = 20;
// 32 symbols. 256 is divisible by 32, so byte % 32 is unbiased.
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export const AVATARS = [
  { id: 'lotus', emoji: '🌸', label_hi: 'कमल' },
  { id: 'tiger', emoji: '🐯', label_hi: 'बाघ' },
  { id: 'peacock', emoji: '🦚', label_hi: 'मोर' },
  { id: 'elephant', emoji: '🐘', label_hi: 'हाथी' },
  { id: 'sun', emoji: '☀️', label_hi: 'सूरज' },
  { id: 'moon', emoji: '🌙', label_hi: 'चाँद' },
  { id: 'star', emoji: '⭐', label_hi: 'तारा' },
  { id: 'fish', emoji: '🐟', label_hi: 'मछली' },
];

// ---------- raw storage with in-memory fallback ----------

// Write-through cache: every write goes to memory too, and memory is read
// first, so a failed localStorage write never serves a stale value.
const memory = new Map();

function rawGet(key) {
  if (memory.has(key)) return memory.get(key);
  try {
    const v = localStorage.getItem(key);
    return v === undefined ? null : v;
  } catch (e) {
    return null;
  }
}

function rawSet(key, value) {
  memory.set(key, value);
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // quota or privacy mode: memory copy still holds the value
  }
}

function rawRemove(key) {
  memory.delete(key);
  try {
    localStorage.removeItem(key);
  } catch (e) {
    // ignore
  }
}

function readJSON(key, fallback) {
  const raw = rawGet(key);
  if (raw === null) return fallback;
  try {
    const v = JSON.parse(raw);
    return v === null || v === undefined ? fallback : v;
  } catch (e) {
    return fallback;
  }
}

function writeJSON(key, value) {
  rawSet(key, JSON.stringify(value));
}

// ---------- helpers ----------

function newId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

// Local calendar day as YYYY-MM-DD.
function localYMD(date) {
  const d = date instanceof Date ? date : new Date(date);
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function randomBytes(n) {
  const out = new Uint8Array(n);
  if (globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function') {
    globalThis.crypto.getRandomValues(out);
  } else {
    for (let i = 0; i < n; i++) out[i] = Math.floor(Math.random() * 256);
  }
  return out;
}

function makeFamilyCode(taken) {
  let code = '';
  for (let attempt = 0; attempt < 20; attempt++) {
    const bytes = randomBytes(6);
    code = '';
    for (let i = 0; i < 6; i++) code += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
    if (!taken.has(code)) return code;
  }
  // Collisions after 20 tries are practically impossible; return the last code.
  return code;
}

function defaultProgress() {
  return {
    mastery: {},
    wrongStreak: {},
    attempts: [],
    lastQuestionId: null,
    studyDays: {},
  };
}

// ---------- profiles ----------

export function getProfiles() {
  const list = readJSON(KEYS.profiles, []);
  return Array.isArray(list) ? list.slice() : [];
}

export function createProfile({ nickname, avatar, photo } = {}) {
  const nick = String(nickname ?? '').trim();
  const len = [...nick].length;
  if (len < 1 || len > NICK_MAX) {
    throw new Error('नाम 1 से 20 अक्षरों का होना चाहिए');
  }
  if (!AVATARS.some((a) => a.id === avatar)) {
    throw new Error('कृपया एक अवतार चुनें');
  }
  // Optional profile photo (owner request, 22 Nov): a small data URL that
  // lives only in this phone's storage. It is never synced or sent anywhere.
  if (photo !== undefined && photo !== null) {
    if (typeof photo !== 'string' || !photo.startsWith('data:image/') || photo.length > 160000) {
      throw new Error('फ़ोटो सही नहीं है');
    }
  }
  const profiles = getProfiles();
  if (profiles.length >= MAX_PROFILES) {
    throw new Error('एक फ़ोन पर अधिकतम 4 प्रोफ़ाइल बनाई जा सकती हैं');
  }
  const taken = new Set(profiles.map((p) => p.familyCode));
  const profile = {
    id: newId(),
    nickname: nick,
    avatar,
    photo: photo || null,
    familyCode: makeFamilyCode(taken),
    createdAt: new Date().toISOString(),
  };
  profiles.push(profile);
  writeJSON(KEYS.profiles, profiles);
  return profile;
}

export function getProfile(id) {
  return getProfiles().find((p) => p.id === id) || null;
}

export function deleteProfile(id) {
  const remaining = getProfiles().filter((p) => p.id !== id);
  writeJSON(KEYS.profiles, remaining);
  rawRemove(progressKey(id));
  rawRemove(doubtsKey(id));
  if (getActiveProfileId() === id) rawRemove(KEYS.active);
}

export function setActiveProfile(id) {
  if (id === null || id === undefined) {
    rawRemove(KEYS.active);
  } else {
    rawSet(KEYS.active, String(id));
  }
}

export function getActiveProfileId() {
  const v = rawGet(KEYS.active);
  return v === null || v === '' ? null : v;
}

// ---------- progress ----------

export function getProgress(profileId) {
  const stored = readJSON(progressKey(profileId), null);
  return { ...defaultProgress(), ...(stored && typeof stored === 'object' ? stored : {}) };
}

export function saveProgress(profileId, progress) {
  writeJSON(progressKey(profileId), progress);
}

export function addStudySeconds(profileId, seconds, date = new Date()) {
  const add = Number(seconds);
  if (!Number.isFinite(add) || add <= 0) return;
  const progress = getProgress(profileId);
  const day = localYMD(date);
  const studyDays = { ...progress.studyDays };
  studyDays[day] = (Number(studyDays[day]) || 0) + add;
  saveProgress(profileId, { ...progress, studyDays });
}

// ---------- doubts ----------

export function getDoubts(profileId) {
  const list = readJSON(doubtsKey(profileId), []);
  return Array.isArray(list) ? list.slice() : [];
}

// photo: optional JPEG data URL (already downscaled by the caller). Records
// without a photo stay valid. Photos are never sent by sync.
export function addDoubt(profileId, fields = {}) {
  const { text, status, photo, ...rest } = fields;
  const id = newId();
  const doubt = {
    ...rest,
    id,
    text: String(text ?? ''),
    status: status || 'queued',
    createdAt: new Date().toISOString(),
  };
  if (typeof photo === 'string' && photo.startsWith('data:image/')) doubt.photo = photo;
  let list = getDoubts(profileId);
  list.push(doubt);
  if (list.length > MAX_DOUBTS) list = list.slice(list.length - MAX_DOUBTS);
  writeJSON(doubtsKey(profileId), list);
  return id;
}

export function updateDoubt(profileId, id, patch = {}) {
  const list = getDoubts(profileId).map((d) => (d.id === id ? { ...d, ...patch } : d));
  writeJSON(doubtsKey(profileId), list);
}

// ---------- settings and usage ----------

export function getSettings() {
  const stored = readJSON(KEYS.settings, {});
  return { dataSaver: false, lang: 'hi', lastSyncAt: null, ...(stored && typeof stored === 'object' ? stored : {}) };
}

export function setSettings(patch = {}) {
  const next = { ...getSettings(), ...patch };
  writeJSON(KEYS.settings, next);
  return next;
}

export function getUsage() {
  const today = localYMD(new Date());
  const stored = readJSON(KEYS.usage, null);
  if (!stored || stored.date !== today) return { date: today, bytes: 0 };
  return { date: today, bytes: Number(stored.bytes) || 0 };
}

export function addUsage(bytes) {
  const add = Number(bytes);
  const usage = getUsage();
  const next = { date: usage.date, bytes: usage.bytes + (Number.isFinite(add) && add > 0 ? add : 0) };
  writeJSON(KEYS.usage, next);
  return next;
}
