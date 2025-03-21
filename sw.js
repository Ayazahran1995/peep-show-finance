// sw.js
const CACHE_NAME = 'finance-explained-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/PPNeueMachina-Regular.otf',
    '/PPNeueMachina-Bold.otf'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
