import { AVATARS, getProfile, getActiveProfileId, addStudySeconds, getUsage } from './store.js';
import { syncAll, isOnline } from './sync.js';
import { t } from './i18n.js';

// Route name -> whether it needs an active profile.
const ROUTES = {
  profiles: false,
  home: true,
  learn: true,
  practice: true,
  ask: true,
  progress: true,
  family: false,
  about: false,
};

const NAV_ROUTES = new Set(['home', 'learn', 'practice', 'ask', 'progress']);
const STUDY_ROUTES = new Set(['learn', 'practice', 'ask']);

const NAV_ITEMS = [
  { key: 'home', hash: '#/home', icon: '🏠', labelKey: 'nav_home' },
  { key: 'learn', hash: '#/learn', icon: '📖', labelKey: 'nav_learn' },
  { key: 'ask', hash: '#/ask', icon: '❓', labelKey: 'nav_ask' },
  { key: 'progress', hash: '#/progress', icon: '📊', labelKey: 'nav_progress' },
];

const STUDY_TICK_MS = 15000;

const appEl = document.getElementById('app');
const navEl = document.getElementById('bottom-nav');

let currentName = '';
let routeToken = 0;

function currentProfile() {
  const id = getActiveProfileId();
  if (!id) return null;
  return getProfile(id) || null;
}

function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, '');
  const slash = raw.indexOf('/');
  const name = slash === -1 ? raw : raw.slice(0, slash);
  const rest = slash === -1 ? '' : raw.slice(slash + 1);
  let conceptId = null;
  if (rest) {
    try {
      conceptId = decodeURIComponent(rest);
    } catch (err) {
      conceptId = rest;
    }
  }
  return { name, conceptId };
}

function defaultHash() {
  return currentProfile() ? '#/home' : '#/profiles';
}

function navigate(hash) {
  if (location.hash === hash) {
    route();
  } else {
    location.hash = hash;
  }
}

function toast(text) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

function buildNav() {
  navEl.innerHTML = '';
  for (const item of NAV_ITEMS) {
    const link = document.createElement('a');
    link.href = item.hash;
    link.dataset.key = item.key;

    const icon = document.createElement('span');
    icon.className = 'nav-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = item.icon;

    const label = document.createElement('span');
    label.className = 'nav-label';
    label.textContent = t(item.labelKey);

    link.append(icon, label);
    navEl.appendChild(link);
  }
}

function updateNav(name) {
  const visible = NAV_ROUTES.has(name);
  navEl.hidden = !visible;
  for (const link of navEl.querySelectorAll('a')) {
    const isActive = link.dataset.key === name;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

// One reusable header, built on first use and kept in the DOM across renders.
let headerEl = null;
let headerParts = null;

function buildHeader() {
  headerEl = document.createElement('header');
  headerEl.className = 'app-header';

  const profileLink = document.createElement('a');
  profileLink.className = 'app-header-profile';
  profileLink.href = '#/profiles';

  const avatar = document.createElement('span');
  avatar.className = 'app-header-avatar';
  const name = document.createElement('span');
  name.className = 'app-header-name';
  profileLink.append(avatar, name);

  const status = document.createElement('div');
  status.className = 'app-header-status';
  const dot = document.createElement('span');
  const data = document.createElement('span');
  data.className = 'app-header-data';
  status.append(dot, data);

  headerEl.append(profileLink, status);
  headerParts = { avatar, name, dot, data };
}

function updateStatusDot() {
  if (!headerParts) return;
  headerParts.dot.className = `status-dot ${navigator.onLine ? 'online' : 'offline'}`;
}

// Switches the header between the profile link and the bare brand name.
function setBrandMode(on) {
  headerEl.querySelector('.app-header-profile').hidden = on;
  headerEl.querySelector('.app-header-status').hidden = on;
  let brand = headerEl.querySelector('.brand-header');
  if (!brand) {
    brand = document.createElement('span');
    brand.className = 'brand-header';
    brand.textContent = 'साथी';
    headerEl.prepend(brand);
  }
  brand.hidden = !on;
}

// Shows the header for an active profile; shows the brand name when there is none.
function refreshHeader(profile) {
  if (!headerEl) buildHeader();
  if (!profile) {
    setBrandMode(true);
    return;
  }
  setBrandMode(false);
  const avatar = AVATARS.find((a) => a.id === profile.avatar) || AVATARS[0];
  headerParts.avatar.textContent = avatar.emoji;
  headerParts.name.textContent = profile.nickname;
  updateStatusDot();
  const kb = Math.round(getUsage().bytes / 1024);
  headerParts.data.textContent = t('data_today', { kb });
}

function renderError() {
  appEl.innerHTML = '';
  const box = document.createElement('div');
  box.className = 'notice';

  const msg = document.createElement('p');
  msg.textContent = t('app_error');

  const retry = document.createElement('button');
  retry.type = 'button';
  retry.className = 'btn';
  retry.textContent = t('app_retry');
  retry.addEventListener('click', () => route());

  box.append(msg, retry);
  appEl.appendChild(box);
}

async function route() {
  const token = ++routeToken;
  const { name, conceptId } = parseRoute();

  if (!Object.prototype.hasOwnProperty.call(ROUTES, name)) {
    location.hash = defaultHash();
    return;
  }

  const profile = currentProfile();
  if (ROUTES[name] && !profile) {
    location.hash = '#/profiles';
    return;
  }

  currentName = name;
  updateNav(name);
  appEl.innerHTML = '';

  const params = conceptId ? { conceptId } : {};
  const ctx = {
    navigate,
    params,
    toast,
    profile,
    refresh: () => route(),
  };

  try {
    const mod = await import(`./screens/${name}.js`);
    if (token !== routeToken) return;
    appEl.innerHTML = '';
    refreshHeader(profile);
    if (headerEl) appEl.prepend(headerEl);
    await mod.render(appEl, ctx);
  } catch (err) {
    if (token !== routeToken) return;
    console.error(err);
    renderError();
  }
}

// Every 15s while visible, credit study time on a study route.
function studyTick() {
  try {
    const profile = currentProfile();
    if (
      document.visibilityState === 'visible' &&
      profile &&
      STUDY_ROUTES.has(currentName)
    ) {
      addStudySeconds(profile.id, STUDY_TICK_MS / 1000);
    }
  } catch (err) {
    console.error(err);
  }
}

async function syncActive() {
  try {
    const profile = currentProfile();
    if (profile) await syncAll(profile.id);
  } catch (err) {
    console.error(err);
  }
}

async function syncOnLoad() {
  try {
    if (isOnline()) await syncActive();
  } catch (err) {
    console.error(err);
  }
}

function init() {
  buildNav();
  window.addEventListener('hashchange', route);
  window.addEventListener('online', updateStatusDot);
  window.addEventListener('offline', updateStatusDot);
  window.addEventListener('online', () => {
    syncActive();
  });
  setInterval(studyTick, STUDY_TICK_MS);
  route();
  syncOnLoad();
}

init();
