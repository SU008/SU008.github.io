'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "492827cc363d8ed7e3627dd002dfe1a1",
"assets/assets/amsterdam.png": "6080efcf8a04639eea6dcda6ee045c9a",
"assets/assets/andorra.png": "b9c2a2e2335f6914ca1abcdf6dddec47",
"assets/assets/astrakhan.png": "1c2b352b713e8098d0893f153e554a0c",
"assets/assets/athens.png": "658a0b46ea145522902df86a918cbd81",
"assets/assets/belgrade.png": "54ec900d3699b3af6965ad3d8f2d4fed",
"assets/assets/berlin.png": "2ba613bbf44065d18cc1471e66c56ed6",
"assets/assets/brussels.png": "9a80418be70f4d90b0eda4b82b4c9587",
"assets/assets/bucharest.png": "fa7a9e0e756b2196064e2a8b94b10799",
"assets/assets/budapest.png": "8c8543cefcd4b7f93d1dc43918bd8712",
"assets/assets/chisinau.png": "c13cea9f1b2593a4bb78167a154fc275",
"assets/assets/copenhagen.png": "43161867ca3aa691305a4587759d6dda",
"assets/assets/day.png": "9f36c150e5b0297e20411999d5e27627",
"assets/assets/day_v2.png": "ab4740e72968368edc3c7feefc5cabd5",
"assets/assets/dublin.png": "5987214b6f3361d29efec47e9532d8cb",
"assets/assets/egypt.png": "a099e084c6fcccfa4032d58d17d63f27",
"assets/assets/finland.png": "4d09aa7cbb3831b439667e55cfa039fd",
"assets/assets/gibraltar.png": "aed39c93ee2e7a8b154bac31661a88e1",
"assets/assets/greece.png": "d8c44c47741e348927cec7e3d64a22ca",
"assets/assets/helsinki.png": "622b2ac7b5bca22961ce7d48ce3ac267",
"assets/assets/indonesia.png": "cb1239cc98b52f637175e17547c4c520",
"assets/assets/ireland.png": "9f7776fd2e60d39382dbef93099a839e",
"assets/assets/istanbul.png": "71168387ec8611bfa5dc7c750e5dcd34",
"assets/assets/italy.png": "5c16ae2a5865435c93e693d9bcbf673d",
"assets/assets/kaliningrad.png": "79704ae07a989b367df11950d18a807f",
"assets/assets/kiev.png": "b3cb812891309e3dff5b206d83d6394a",
"assets/assets/kirov.png": "e202a121d51f6c2e0203eb1da0d3d8dc",
"assets/assets/lisbon.png": "a6cc9432161f482a55a83a6ee5682710",
"assets/assets/london.png": "f8b4f6c6196ea6d411eca34b5f982389",
"assets/assets/luxembourg.png": "70e23863b68e1a6c8e06b7831a976d3a",
"assets/assets/madrid.png": "9ef3baf54ca542f3c9fdc05158d8ef99",
"assets/assets/malta.png": "f5e717795de668c5c9f1ec53c40cbbd8",
"assets/assets/minsk.png": "009193b8b9ccccdbbd8fcbaed82121b2",
"assets/assets/monaco.png": "21bbd9da79c17516d7f77b821ec7cb02",
"assets/assets/moscow.png": "72102058c7c864c864aad91589667285",
"assets/assets/netherlands.png": "efca7bd6689e00bfa033b5919a935ae3",
"assets/assets/night.png": "f48bb8c2e3dc7a7544755506efb889b0",
"assets/assets/night_v2.png": "f4fcbcc91a677df713b5892fc228d2e6",
"assets/assets/oslo.png": "0218f102ee9e56be7e6c7a054c382428",
"assets/assets/paris.png": "1540a4ab007718793b041995456b08a5",
"assets/assets/portugal.png": "ce2be580295064c27df285bb4f9b08b7",
"assets/assets/prague.png": "34a1aa3612a432063fab7e1e46db470c",
"assets/assets/riga.png": "2435b2f40215ca53ea436795a5a49786",
"assets/assets/rome.png": "f352f9ce00bc9cb18ea45a482bff3032",
"assets/assets/samara.png": "846c81b852da12710c21e20e435294ce",
"assets/assets/saratov.png": "753d7cfc913d09369b8f8ba06371dc2c",
"assets/assets/simferopol.png": "b630c47215395c0975dbb48a535a936d",
"assets/assets/sofia.png": "c6066795cb18406b0cc1faef6db967d7",
"assets/assets/stockholm.png": "3a9ef51ced84b600d3586b805684cff1",
"assets/assets/sweden.png": "1de294ce393685c1b867797a9f2b1f42",
"assets/assets/tallinn.png": "77c9be8149772da4242b843ad0c529a3",
"assets/assets/tirane.png": "cac7ada8f2e4e6141b34a7b8b048ab02",
"assets/assets/ulyanovsk.png": "5be77ba9bbc9478b0f5d5b2a1d62d861",
"assets/assets/uzhgorod.png": "9545eecdde845cf84b739843283f30a9",
"assets/assets/vienna.png": "485bfe8a623cbf40003acbce3e03558e",
"assets/assets/vilnius.png": "d33003b99af2412cb1414c74239321fa",
"assets/assets/volgograd.png": "ce78d9aca95db1cda09711b90e97efe1",
"assets/assets/warsaw.png": "c67267f0698f808c392da3b16c8b6685",
"assets/assets/zaporozhye.png": "1782769a38efb75356d9f8ac85b37749",
"assets/assets/zurich.png": "48dbecce2d6e3efa974f3286ee403d4a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d2c00a3860cf391ff179e203c07bd53d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "74613db240b220a6440058dc7bc2539c",
"/": "74613db240b220a6440058dc7bc2539c",
"main.dart.js": "0d884e40b1b23827249e59e393a0028b",
"manifest.json": "0712354027980c67fd8eb05bbb0386fb",
"version.json": "d3d252550fd21b67da95a3493b1020db"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
