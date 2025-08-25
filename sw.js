// sw.js
const CACHE_NAME = 'magic-note-cache-v1';

const urlsToCache = [
  '/magic-note/',
  '/magic-note/index.html',
  '/magic-note/icon-192.png',
  '/magic-note/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});