const staticCacheName = "pwa-v2";

// Install event to cache resources
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      const resourcesToCache = [
        './', // Cache the root (index.html) or other pages you want
        './assets/img/favicon.png', // Example: your favicon
        './assets/css/style.css', // Example: your main CSS file
        './assets/js/main.js', // Example: your main JS file

        // External resources
        'https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong', // Font
        'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i', // Fonts
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', // Font Awesome
        'https://unpkg.com/aos@2.3.1/dist/aos.css', // AOS CSS
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', // Bootstrap CSS
        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.4/swiper-bundle.min.css', // Swiper CSS
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // Animate CSS
        'https://cdn.jsdelivr.net/npm/sweetalert2@11.1.6/dist/sweetalert2.min.css', // SweetAlert CSS
        'https://cdn.jsdelivr.net/npm/ol@v6.15.0/ol.css', // OpenLayers CSS

        // External JS resources
        'https://code.jquery.com/jquery-3.6.0.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.4/swiper-bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.8/typed.min.js',
        'https://unpkg.com/aos@2.3.1/dist/aos.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        'https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/js/glightbox.min.js',
        'https://cdn.jsdelivr.net/npm/sweetalert2@11', // SweetAlert2 JS
        'https://cdnjs.cloudflare.com/ajax/libs/i18next/21.6.0/i18next.min.js', // i18next JS
        './assets/js/main.js', // Your local JS files
        './assets/js/nav.js', // Local JS files
        "/index.html", // Ensure this file exists in the correct folder
        "/404.html",    // Ensure this file exists as a fallback page
      ];

      console.log("Caching resources:", resourcesToCache);

      return cache.addAll(resourcesToCache).catch(function (error) {
        console.error("Failed to add resources to cache:", error);
      });
    })
  );
});

// Fetch event to handle requests
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
        // Add the X-Content-Type-Options header
        const newHeaders = new Headers(networkResponse.headers);
        newHeaders.set('X-Content-Type-Options', 'nosniff');

        // Cache the new content for future requests
        return caches.open(staticCacheName).then(function (cache) {
          cache.put(event.request, networkResponse.clone());
          return new Response(networkResponse.body, {
            status: networkResponse.status,
            statusText: networkResponse.statusText,
            headers: newHeaders
          });
        });
      }).catch(function () {
        // Provide fallback for offline scenarios
        return caches.match("/index.html");
      });
    })
  );
});

// Activate event to handle cache cleanup
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
