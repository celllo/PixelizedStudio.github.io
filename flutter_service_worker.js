'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d911a85c4a0a60054f4e14cc72617d9e",
"index.html": "ea025bdb58f299bf8acf9ceed620513a",
"/": "ea025bdb58f299bf8acf9ceed620513a",
"main.dart.js": "fbf1c826082e3d6907f09a4e86161fff",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"app-ads.txt": "730ffe6aec66d705e4b13e6a826cdef8",
"logo.png": "eeb25f0175da497749e6ce3f0da7f558",
"icons/android-chrome-192x192.png": "eeb25f0175da497749e6ce3f0da7f558",
"icons/apple-touch-icon.png": "56a3a2c417c16f237c193741b414d02d",
"icons/android-chrome-512x512.png": "adfe4016d3fad8464f47e205a6a3b37f",
"manifest.json": "a001f73b71b8f7cb199bb32b282c15db",
"assets/AssetManifest.json": "15a5b3a961eba9edfbb3bb83aa19d36b",
"assets/NOTICES": "3643886fc3723afc7a6f0be095294387",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/game28.png": "d11dae0db62fd22c6e087014ad7022eb",
"assets/assets/images/game14.png": "8a1ada68aaf69b8c04aa36eb8bb91ac6",
"assets/assets/images/beyazins.png": "c2672c7298f77f94e588f7ada165efbc",
"assets/assets/images/coming.png": "67b66db82af222703835068dccf2067f",
"assets/assets/images/game15.png": "878929498d934cfae64eba82b0bcff7d",
"assets/assets/images/game29.png": "7ba333cc9282dbda902bc17214aceb46",
"assets/assets/images/game17.png": "3fdb2c6acdaa516bc3bd3447c8f15f59",
"assets/assets/images/beyaztwitter.png": "4384d1239f37b4fd1b4e14cb306eb7e8",
"assets/assets/images/doga.png": "13ffef669240f40a796559521dadeed6",
"assets/assets/images/game16.png": "3eaa64487fe1054fdcbb3b1271ebd415",
"assets/assets/images/game12.png": "a58c083288e26b6ec5d4651f48d0c6d2",
"assets/assets/images/mail.png": "55f86d6a19f3532176e5e2013930ab33",
"assets/assets/images/game13.png": "54d281978f85022e62c6df680500bef8",
"assets/assets/images/game11.png": "8635ce6587ddcbe21132ecdd6fd869bc",
"assets/assets/images/pixelbeyaz.png": "84fde46ad338cd77907b21d7ce0dbc30",
"assets/assets/images/instagram.png": "1d9f34b13f8ae47bbd7bbdb0bac0bedd",
"assets/assets/images/game10.png": "014a1e83a4335311c7e58c8c2d896a0f",
"assets/assets/images/game2.png": "165fbdd9d6197a3605bb46b063fdc57a",
"assets/assets/images/game3.png": "7588f74fece6a0e8268cb4eed4da04eb",
"assets/assets/images/game1.png": "b23871ee3bc4262510533caa8166cde4",
"assets/assets/images/okan.png": "e8ef32faa53a18aec3ccde08b666fe6e",
"assets/assets/images/samet.png": "c5ec256ee2fd6d912e7ee3e1b3836c47",
"assets/assets/images/kare.png": "16c6e5f9e047007b14195c8b00d367db",
"assets/assets/images/circle.png": "f7af0ccd95f42076082b4b7a22b66bba",
"assets/assets/images/game4.png": "f3cf2c98b5a81653b8d242ef1965a25e",
"assets/assets/images/game5.png": "f100ae2a964bb7a426848782f3fb859c",
"assets/assets/images/meric.png": "3c2ba968bc3c03ed7317655e2a33f9b7",
"assets/assets/images/googlestore.png": "1a1428f47db1f722a27c164653a9e7f1",
"assets/assets/images/game7.png": "a2b890256d25f83ebe93f0ac07e3064b",
"assets/assets/images/appstore.png": "331c69684e7c30bb5de5bc30f55f0ad4",
"assets/assets/images/game6.png": "bb71cce3f1f1e448ac10e2f9ac8be1e7",
"assets/assets/images/back2.png": "e03482d1a0dceb9c2bc3e58c533ec674",
"assets/assets/images/murat.png": "692180603da384706b5645deb118b9c2",
"assets/assets/images/back3.png": "a4f22b0074f58ffb3d82aa4292363f9e",
"assets/assets/images/back1.png": "bc59e5e4bdb926dca180490207a141f8",
"assets/assets/images/game8.png": "0bbb45df32b663d8bd4e52347f451ec9",
"assets/assets/images/linkdin.png": "1fbfa5ba8022c458559e6d4a00656d30",
"assets/assets/images/game9.png": "e8472aac55d05d1b654ccda7f62f41fe",
"assets/assets/images/logo.png": "7064daca675fc69f244bdb49ee188771",
"assets/assets/images/twitter.png": "566f0d9088b0157ffa7497edafe5b23a",
"assets/assets/images/ezgi.png": "bf9336cd70c381d7d5fe1cd39852a1ae",
"assets/assets/images/game21.png": "3575b58daf1dc2d9629c1363282c3900",
"assets/assets/images/game20.png": "f9ad7abac937800f0d0b1ac73172930c",
"assets/assets/images/game22.png": "67b66db82af222703835068dccf2067f",
"assets/assets/images/game23.png": "21381011efb16576cc1251aab6bd86cc",
"assets/assets/images/game27.png": "16a75af27eee0610c47325e3952dab38",
"assets/assets/images/yusuf.png": "fff195a2697bfd010c58355d0c5f87cd",
"assets/assets/images/square.png": "85bb0a6c7b4777676a87afc80a91904f",
"assets/assets/images/game26.png": "4a7a4ca4e8d89d19855219f8cdfd74f5",
"assets/assets/images/game32.png": "092436a435decef218b81d57d6c64128",
"assets/assets/images/game24.png": "cb7d73ce72b1cfdffaed1bb99904cb9a",
"assets/assets/images/game30.png": "2335c3585b9e6d158559d94984fbb02b",
"assets/assets/images/game18.png": "280b80f062cb67beb91a9acca4995ef5",
"assets/assets/images/beyazlink.png": "2dab0a06690c05adc42e720601a21289",
"assets/assets/images/game19.png": "f32440ed7cf2c1788116b260fff41670",
"assets/assets/images/game31.png": "a17fb9028e0788d04be23f736df14dcc",
"assets/assets/images/game25.png": "20598838bf8d50223ead70aa959f9003",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
