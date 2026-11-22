import { getProfile, getActiveProfileId, addStudySeconds } from './store.js';
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
let renderedHash = '';
let backHash = '#/home';

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

function buildHeader() {
  headerEl = document.createElement('header');
  headerEl.className = 'app-header';

  const row = document.createElement('div');
  row.className = 'app-header-row';
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
}

// The header holds only the nav and the language button (owner, 22 Nov:
// profile photo and name removed from the header entirely).
function refreshHeader() {
  if (!headerEl) buildHeader();
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

  const currentHash = location.hash || '#/profiles';
  if (renderedHash && renderedHash !== currentHash) backHash = renderedHash;
  renderedHash = currentHash;

  currentName = name;
  updateNav(name);
  appEl.innerHTML = '';

  const params = conceptId ? { conceptId } : {};
  const ctx = {
    navigate,
    params,
    backTo: backHash,
    toast,
    profile,
    refresh: () => route(),
  };

  try {
    const mod = await import(`./screens/${name}.js`);
    if (token !== routeToken) return;
    appEl.innerHTML = '';
    refreshHeader();
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
