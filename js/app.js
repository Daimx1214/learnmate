import { AVATARS, getProfile, getActiveProfileId, addStudySeconds } from './store.js';
import { syncAll, isOnline } from './sync.js';
import { t } from './i18n.js';
import { getLang, setLang } from './lang.js';

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
  { key: 'practice', hash: '#/practice', icon: '✍️', labelKey: 'nav_practice' },
  { key: 'ask', hash: '#/ask', icon: '❓', labelKey: 'nav_ask' },
  { key: 'progress', hash: '#/progress', icon: '📊', labelKey: 'nav_progress' },
];

const STUDY_TICK_MS = 15000;

const appEl = document.getElementById('app');
const navEl = document.getElementById('top-nav');

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
  navEl.hidden = false;
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
  const statusText = document.createElement('span');
  statusText.className = 'app-header-status-text';
  status.append(dot, statusText);

  const row = document.createElement('div');
  row.className = 'app-header-row';
  row.append(profileLink, status);
  headerEl.appendChild(row);

  const langBtn = document.createElement('button');
  langBtn.type = 'button';
  langBtn.className = 'lang-toggle';
  langBtn.textContent = t('lang_switch_label');
  langBtn.addEventListener('click', () => {
    setLang(getLang() === 'hi' ? 'en' : 'hi');
    window.location.reload();
  });
  row.appendChild(langBtn);
  headerParts = { avatar, name, dot, statusText };
}

function updateStatusDot() {
  if (!headerParts) return;
  headerParts.dot.className = `status-dot ${navigator.onLine ? 'online' : 'offline'}`;
  headerParts.statusText.textContent = navigator.onLine ? '' : t('status_offline');
}

// Switches the header between the profile link and the bare brand name.
function setBrandMode(on) {
  headerEl.querySelector('.app-header-profile').hidden = on;
  headerEl.querySelector('.app-header-status').hidden = on;
  let brand = headerEl.querySelector('.brand-header');
  if (!brand) {
    brand = document.createElement('span');
    brand.className = 'brand-header';
    brand.textContent = 'LearnMate';
    headerEl.querySelector('.app-header-row').prepend(brand);
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
  headerParts.avatar.textContent = '';
  if (profile.photo) {
    const img = document.createElement('img');
    img.className = 'header-photo';
    img.src = profile.photo;
    img.alt = '';
    headerParts.avatar.appendChild(img);
  } else {
    headerParts.avatar.textContent = avatar.emoji;
  }
  headerParts.name.textContent = profile.nickname;
  updateStatusDot();
}

// One reusable footer, appended at the end of #app on every render.
let footerEl = null;

function buildFooter() {
  if (footerEl) return footerEl;
  footerEl = document.createElement('footer');
  footerEl.className = 'app-footer';

  const links = document.createElement('p');
  links.className = 'footer-links';
  const about = document.createElement('a');
  about.href = '#/about';
  about.textContent = t('about_title');
  const family = document.createElement('a');
  family.href = '#/family';
  family.textContent = t('family_title');
  links.append(about, family);

  const copy = document.createElement('p');
  copy.className = 'footer-copy';
  copy.textContent = t('footer_copy');

  footerEl.append(links, copy);
  return footerEl;
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

// Scroll-reveal: screen blocks rise in, staggered, as they enter view.
let revealObserver = null;
function animateIn() {
  if (!('IntersectionObserver' in window)) return;
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObserver.unobserve(e.target);
        }
      }
    }, { threshold: 0.08 });
  }
  appEl.querySelectorAll('.card, .concept-row, .list > *').forEach((b, i) => {
    b.style.setProperty('--d', `${Math.min(i, 5) * 30}ms`);
    b.classList.add('reveal');
    revealObserver.observe(b);
  });
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
    // The navigation lives at the top, directly under the header.
    if (headerEl) headerEl.appendChild(navEl);
    await mod.render(appEl, ctx);
    appEl.appendChild(buildFooter());
    document.body.dataset.route = name;
    animateIn();
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
  document.title = t('app_title');
  document.documentElement.lang = getLang() === 'hi' ? 'hi' : 'en';
  buildNav();
  window.addEventListener('hashchange', route);
  window.addEventListener('online', updateStatusDot);
  window.addEventListener('offline', updateStatusDot);
  window.addEventListener('online', () => {
    syncActive();
  });
  window.addEventListener('scroll', () => {
    if (headerEl) headerEl.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
  setInterval(studyTick, STUDY_TICK_MS);
  route();
  syncOnLoad();
}

init();
