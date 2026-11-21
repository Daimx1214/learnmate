import { getProfile, getActiveProfileId, addStudySeconds } from './store.js';
import { syncAll, isOnline } from './sync.js';

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
  { key: 'home', hash: '#/home', icon: '🏠', label: 'होम' },
  { key: 'learn', hash: '#/learn', icon: '📖', label: 'सीखें' },
  { key: 'ask', hash: '#/ask', icon: '❓', label: 'पूछें' },
  { key: 'progress', hash: '#/progress', icon: '📊', label: 'प्रगति' },
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
    label.textContent = item.label;

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

function renderError() {
  appEl.innerHTML = '';
  const box = document.createElement('div');
  box.className = 'notice';

  const msg = document.createElement('p');
  msg.textContent = 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें।';

  const retry = document.createElement('button');
  retry.type = 'button';
  retry.className = 'btn';
  retry.textContent = 'फिर से कोशिश करें';
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
  window.addEventListener('online', () => {
    syncActive();
  });
  setInterval(studyTick, STUDY_TICK_MS);
  route();
  syncOnLoad();
}

init();
