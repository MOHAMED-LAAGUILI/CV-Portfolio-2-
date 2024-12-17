const staticCacheName = "pwa-v2";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/app.js",
        "/images/logo.png", // Add your images or other assets here
        "/offline.html", // A fallback page if offline
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log('Fetching:', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        console.log('Cache hit:', event.request.url);
        return cachedResponse; // Serve from cache
      }

      console.log('Cache miss:', event.request.url);
      return fetch(event.request).then(function (networkResponse) {
        // Cache the new content for future requests
        return caches.open(staticCacheName).then(function (cache) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(function () {
        // Provide fallback for offline scenarios
        return caches.match("/offline.html");
      });
    })
  );
});

// Activate event for handling cache updates
self.addEventListener("activate", function (event) {
  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
});
