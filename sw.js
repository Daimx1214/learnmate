// sw.js — root service worker (scope: ./). Offline-first app shell cache.
// /api/ requests are never cached. Other cross-origin and non-GET requests pass through.

const CACHE = 'saathi-v15';

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
  './js/i18n.js',
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
  );
});

// Stale-while-revalidate: answer from cache if present, refresh in background.
// Without a cached copy, go to the network and store the result.
// For navigations, fall back to the cached index.html when both fail.
function staleWhileRevalidate(event, request, isNavigation) {
  event.respondWith(
    (async () => {
      try {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(request);

        const network = fetch(request)
          .then((res) => {
            if (res && res.ok) cache.put(request, res.clone()).catch(() => {});
            return res;
          })
          .catch(() => null);

        if (cached) {
          event.waitUntil(network);
          return cached;
        }

        const fresh = await network;
        if (fresh) return fresh;

        if (isNavigation) {
          const shell = await cache.match('./index.html');
          if (shell) return shell;
        }
        return Response.error();
      } catch (e) {
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
      staleWhileRevalidate(event, request, isNavigation);
    }
  } catch (e) {
    // never throw from the fetch handler
  }
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
