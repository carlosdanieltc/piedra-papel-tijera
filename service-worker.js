if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(function(error) {
        console.error('Error al registrar el Service Worker:', error);
      });
}

const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.js',
  '/indexeddb.js',
  '/manifest.json',
  '/src/components/',
  '/src/views/home-view.js',
  '/src/views/game-view.js',
  '/src/components/game-plays.js',
  '/assets/images/paper.jpg',
  '/assets/images/rock.jpg',
  '/assets/images/scissors.jpg',
  '/assets/images/backButton.png',
  '/assets/icons/icon-72x72.png',
  '/assets/icons/icon-144x144.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Caché abierta');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url)
  event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
              return cachedResponse
          }
          return fetch(event.request)
      })
  )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });