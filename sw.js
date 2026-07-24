const CACHE_NAME = 'barantin-ai-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/auth.js'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Memaksa SW baru untuk langsung aktif
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // Mengambil alih tab yang sedang terbuka
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // Strategi: Network First, Fallback to Cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Jika berhasil ambil dari jaringan, simpan salinannya ke cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Jika offline atau gagal, ambil dari cache
        return caches.match(event.request);
      })
  );
});
