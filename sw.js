// sw.js — root service worker (scope: ./). Offline-first app shell cache.
// /api/ requests are never cached. Other cross-origin and non-GET requests pass through.

const CACHE = 'saathi-v44';

const SHELL = [
  './',
  './index.html',
  './styles.css',
  './manifest.webmanifest',
  './icon.svg',
  './assets/fonts/mukta-devanagari-400.woff2',
  './assets/fonts/mukta-devanagari-700.woff2',
  './assets/fonts/mukta-latin-400.woff2',
  './assets/fonts/mukta-latin-700.woff2',
  './icon-192.png',
  './icon-512.png',
  './js/app.js',
  './js/store.js',
  './js/mastery.js',
  './js/tutor.js',
  './js/sync.js',
  './js/data/chapter.js',
  './js/data/subject-store.js',
  './js/data/math.js',
  './js/data/math-en.js',
  './js/data/computer.js',
  './js/data/computer-en.js',
  './js/data/english.js',
  './js/data/english-en.js',
  './js/data/urdu.js',
  './js/data/urdu-en.js',
  './js/data/social.js',
  './js/data/social-en.js',
  './js/data/islamiat.js',
  './js/data/islamiat-en.js',
  './js/i18n.js',
  './js/lang.js',
  './js/data/content-en.js',
  './js/screens/profiles.js',
  './js/screens/home.js',
  './js/screens/learn.js',
  './js/screens/practice.js',
  './js/screens/ask.js',
  './js/screens/progress.js',
  './js/screens/family.js',
  './js/screens/about.js',
];

const SHELL_URLS = new Set(SHELL.map((p) => new URL(p, self.location.href).href));

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) =>
        Promise.all(clients.map((c) => c.navigate(c.url).catch(() => {})))
      )
  );
});

// Network-first for the app shell (owner fix, 22 Nov): a returning phone
// always gets the newest shell when online, so an update shows on the
// first reload instead of the second. The cache is the offline fallback.
function networkFirst(event, request, isNavigation) {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        const fresh = await fetch(request);
        if (fresh && fresh.ok) cache.put(request, fresh.clone()).catch(() => {});
        return fresh;
      } catch (e) {
        const cached = await cache.match(request);
        if (cached) return cached;
        if (isNavigation) {
          const shell = await cache.match('./index.html');
          if (shell) return shell;
        }
        return Response.error();
      }
    })()
  );
}

self.addEventListener('fetch', (event) => {
  try {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    // Network-only: no respondWith, so the browser fetches it directly.
    if (url.pathname.startsWith('/api/')) return;

    const isNavigation = request.mode === 'navigate';
    if (isNavigation || SHELL_URLS.has(url.href)) {
      networkFirst(event, request, isNavigation);
    }
  } catch (e) {
    // never throw from the fetch handler
  }
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
