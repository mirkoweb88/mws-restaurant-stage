var staticCacheName = 'app-stage1-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then( cache => {
      return cache.addAll([
          '/',
          'index.html',
          'restaurant.html',
          'css/styles.css',
          'js/main.js',
          'js/restaurant_info.js',
          'js/dbhelper.js',
          'img/1.jpg',
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
          'img/small/1.jpg',
          'img/small/2.jpg',
          'img/small/3.jpg',
          'img/small/4.jpg',
          'img/small/5.jpg',
          'img/small/6.jpg',
          'img/small/7.jpg',
          'img/small/8.jpg',
          'img/small/9.jpg',
          'img/small/10.jpg',
          'data/restaurants.json'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('app-stage1') && cacheName != staticCacheName;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => console.log("Error: ", err))
  );
});
