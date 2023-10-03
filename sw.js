const STATIC_CACHE = "sataic";


//Aqui especificamos que queremos guardar en cache
const APP_SHELL = ["/", "index.html", "index.js","assets","src"];

 
self.addEventListener("install", (e) => {

  const cacheStatic = caches

    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);

});

 

self.addEventListener("fecth", (e) => {

  //console.log("fetch", e.request);

  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  ).catch(console.log());

});