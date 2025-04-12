/* eslint-disable no-unused-vars */
const staticCacheName = "pwa-v2";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("pwa-v2").then(function (cache) {
      const resourcesToCache = [
        "./",
        "/index.html",
        "/404.html",
        
        // External resources
        "https://unpkg.com/aos@2.3.1/dist/aos.css",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css",
        "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.4/swiper-bundle.min.css",
            // Local CSS files
            "/assets/css/style.css",
            "/assets/css/nav.css",
            "/assets/css/hero.css",
            "/assets/css/about-me.css",
            "/assets/css/digital-skills.css",
            "/assets/css/cv-resume.css",
            "/assets/css/contact.css",
            "/assets/css/portfolio.css",
            "/assets/css/preloader.css",
            "/assets/css/services.css",
            "/assets/css/testimonials.css",
            "/assets/css/footer.css",
            "/assets/css/scrollbar.css",
            "/assets/css/cursor.css",
            
        "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.4/swiper-bundle.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.8/typed.min.js",
        "https://unpkg.com/aos@2.3.1/dist/aos.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",
        "https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.min.js",
        "https://cdn.jsdelivr.net/npm/sweetalert2@11",
          // Local JS files
          "/assets/js/main.js",
          "/assets/js/nav.js",
          "/assets/js/hero-links.js",
          "/assets/js/hero-particles.js",
          "/assets/js/about-me.js",
          "/assets/js/digital-skills.js",
          "/assets/js/cv-resume.js",
          "/assets/js/services.js",
          "/assets/js/portfolio.js",
          "/assets/js/testimonials.js",
          "/assets/js/contact-form-message.js",
          "/assets/js/alert-form.js",
          "/assets/js/footer.js",
          "/assets/js/contact-icons.js",
          "/assets/js/cursor.js",
      ];
      return (
        console.log("Caching resources:", resourcesToCache),
        cache.addAll(resourcesToCache).catch(function (error) {
          console.error("Failed to add resources to cache:", error);
        })
      );
    })
  );
}),
  self.addEventListener("fetch", function (event) {
    event.request.url.startsWith("chrome-extension://") ||
      event.respondWith(
        caches
          .match(event.request)
          .then(function (cachedResponse) {
            return (
              cachedResponse ||
              fetch(event.request).then(function (networkResponse) {
                return caches.open("pwa-v2").then(function (cache) {
                  return (
                    cache.put(event.request, networkResponse.clone()),
                    networkResponse
                  );
                });
              })
            );
          })
          .catch(function () {
            return caches.match("/index.html");
          })
      );
  }),
  self.addEventListener("activate", function (event) {
    const cacheWhitelist = ["pwa-v2"];
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (!cacheWhitelist.includes(cacheName))
              return caches.delete(cacheName);
          })
        );
      })
    );
  });
