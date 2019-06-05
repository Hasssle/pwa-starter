var CACHE_NAME = "pwa-v0.1";
var urlsToCache = [
  "/",
  "style.css",
  "script.js",
  "manifest.json",
  "icons/favicon.ico",
  "icons/favicon-16x16.png",
  "icons/favicon-32x32.png",
  "icons/icon-72x72.png",
  "icons/icon-96x96.png",
  "icons/icon-128x128.png",
  "icons/icon-144x144.png",
  "icons/icon-152x152.png",
  "icons/icon-192x192.png",
  "icons/icon-384x384.png",
  "icons/icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    // Remove old caches
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Removed old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
