self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('coffee-timer-v1').then(cache =>
      cache.addAll(['./', 'index.html', 'manifest.json', 'service-worker.js'])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp =>
      resp || fetch(event.request)
    )
  );
});
