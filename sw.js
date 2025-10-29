self.addEventListener('install', e => {
  console.log('Service Worker установился.');
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
