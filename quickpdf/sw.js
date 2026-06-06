const CACHE = 'quickpdf-v1';
const BASE = '/quickpdf/';
const ASSETS = [
  BASE,
  `${BASE}index.html`,
  `${BASE}pdfjs/pdf.min.js`,
  `${BASE}pdfjs/pdf.worker.min.js`,
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .catch(err => {
        console.error('Cache addAll failed:', err);
        // Don't block install if caching fails
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached ?? fetch(e.request))
  );
});