'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "0e45fcc48908bd1cca6a570e644335a4",
"assets/NOTICES": "b147af7f6d098101dc8eb59013c1b2e8",
"assets/AssetManifest.bin": "f93acf4e9ac4b2ff692c53ab7e09b3c2",
"assets/assets/GIT_DARK.png": "3c0d276be539a45bb1d2ad753f8676ac",
"assets/assets/skills/flask.png": "297a556714d0fa002a3cd39eee629374",
"assets/assets/skills/restfulapi.png": "d08eb2bb1a081054dd9446764359b05b",
"assets/assets/skills/linux.png": "f26464c9aa71d8bf1c08c448fefc3b17",
"assets/assets/skills/prometheus.png": "bf631633ec383185f95a68f3a7c29b74",
"assets/assets/skills/powershell.png": "ae785dbbbceb78d2c7503fd7df9fa75a",
"assets/assets/skills/azure_ad.png": "00ecfdbfbe9194ac3a0d9eb0c804b20f",
"assets/assets/skills/nginx.png": "079389aec36b410fc8389b8f57cb0487",
"assets/assets/skills/ansible.png": "3cca55fc4c3edfc42178a35bd07f7631",
"assets/assets/skills/fastapi.png": "78a8a27c4f9b11e57d9437a2c81fe5c7",
"assets/assets/skills/sql.png": "476f81a19db94f15fec396171c34239a",
"assets/assets/skills/terraform.png": "04b3b30dac48c04d8d9bb2b7f578a0e8",
"assets/assets/skills/git.png": "a703c065455196e5066e6601bcff2e46",
"assets/assets/skills/mssql.png": "3cd96b6df33c6575110ca2670a77f489",
"assets/assets/skills/django.png": "02711c2cf037c786ebb844af1328f809",
"assets/assets/skills/grafana.png": "038ecf503b1a25901f65b299d767465e",
"assets/assets/skills/graphql.png": "9768c8be3644dfbfefa3fc6cd2a57b66",
"assets/assets/skills/qt_frame.png": "c682ff5fe82373fe9663e2941be14cdd",
"assets/assets/skills/golang.png": "de2f371731bba5199f0636b90e0dfb13",
"assets/assets/skills/python.png": "2aae2ae0b55ad76dafe20d06bc788e90",
"assets/assets/skills/gcp.png": "e9b6b11823b3aac1438beca790c8f26a",
"assets/assets/skills/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/LINKEDIN_DARK.png": "1714929a97119ca71a0652d464b8a200",
"assets/assets/GIT_LIGHT.png": "5029af9c0ed32cd26ade669df805e945",
"assets/assets/GMAIL.png": "db3921367084308347fcbd09111c7ef3",
"assets/assets/LINKDIN_LIGHT.png": "dda499d8edb884a5bab16b08c2a716cd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "a53946203dd4cd53548679c4d77e1fbf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bd75ed7a4ff2c53b86c56e182282cf8f",
"assets/AssetManifest.json": "63f6b1a5baa970d90c6ff309b9624db3",
"index.html": "886538e7f7defc6454b92f270cb9d894",
"/": "886538e7f7defc6454b92f270cb9d894",
"manifest.json": "670cbb8626bc2695910a7cf3782f3d78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
