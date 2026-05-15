'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9f2fe7e8f3f6d78c371034383521e256",
"assets/AssetManifest.bin.json": "c53b4f13f84e67d927be3583c79ccc32",
"assets/AssetManifest.json": "dcf55e2f3d9ff750eda56d6d34783e83",
"assets/assets/fonts/Montserrat-Bold.ttf": "c300fff4e4ae0ca994c58ac9f6639b19",
"assets/assets/fonts/Montserrat-Regular.ttf": "203d753a80557746c23ce95191fbf013",
"assets/assets/fonts/Raleway-Bold.ttf": "575e4317521b381ac94c0c8207c81979",
"assets/assets/fonts/Raleway-Regular.ttf": "580d0778ad254335be45bf58bb449f43",
"assets/assets/icons/2.0x/appstore.png": "00dc117b565c1a2823d2cd75cda1df30",
"assets/assets/icons/2.0x/open_in_new_window.png": "c6b96343ff1801bde0ad4acbd0758460",
"assets/assets/icons/2.0x/playstore.png": "687e0ae4d842527f2dad5a5d9eef2895",
"assets/assets/icons/3.0x/appstore.png": "9b25f1421482c19fbae38f37b53b1d85",
"assets/assets/icons/3.0x/open_in_new_window.png": "58c865ff6c0b488083efe7b969ffc199",
"assets/assets/icons/3.0x/playstore.png": "eba89ba31f4c5d20c91425979ae46248",
"assets/assets/icons/about-design_service.png": "7ae057fb4cf78793c158c72c3caea783",
"assets/assets/icons/about-develop_service.png": "a26aecbf63eed4ba5d8beb32da217b53",
"assets/assets/icons/about-maintenance_service.png": "6ce6ef3db13afbe687fb3657fb0fcf97",
"assets/assets/icons/appstore.png": "493626c1a2ead38f175aed24d119a98d",
"assets/assets/icons/double-arrow.png": "f15c685d54fc5ef24d24f9be120a7e37",
"assets/assets/icons/footer-email.png": "18f6af94b74350dbf9e14f09c2cb2bbd",
"assets/assets/icons/footer-github.png": "a67ebdddd7a867906ff9f987312af5b5",
"assets/assets/icons/footer-linkedin.png": "8210f71125f920c608056a9ff6cac9a1",
"assets/assets/icons/footer-whatsapp.png": "5945512f6aae180798cc8fd6f44fffc2",
"assets/assets/icons/home-email.png": "edba4ec4d349bf0aa80c674939ab25af",
"assets/assets/icons/home-github.png": "a7a304bf4edae5ac587a806777244a11",
"assets/assets/icons/home-linkedin.png": "4f41c905e525ab1287ad5ea52f5a6914",
"assets/assets/icons/open_in_new_window.png": "38f4a44be330ef1d5ad2bf62b77e404a",
"assets/assets/icons/playstore.png": "bb89cef4838dfb85dcc71d49bc129eaa",
"assets/assets/icons/separatorBlack1.png": "e92eea72eceb36ef7fe8b5a5e03c68df",
"assets/assets/images/2.0x/main_photo-x.png": "abb09d782a84e7880ac9b20852948dee",
"assets/assets/images/3.0x/main_photo-x.png": "77f0ab9f80ad4e9a5bc3515063b6c44c",
"assets/assets/images/main_photo-original.png": "f705263ca1b05766b3e88b93cf3c4140",
"assets/assets/images/main_photo-x.png": "73a7741871d1dcb44b6f0f0c669b3b4f",
"assets/assets/logo/2.0x/logo.png": "bc63cc28074ff2b6050f2c84d04fc7be",
"assets/assets/logo/3.0x/logo.png": "4cec30b3ebdb71effbe0a1fec7ce4339",
"assets/assets/logo/logo-original.png": "314a5587f6181692bcb11d1453dcdc0d",
"assets/assets/logo/logo.png": "e716399c5f34dc52e35532e369b7e913",
"assets/assets/skills/2.0x/BloC.png": "e4e3e325e056b23f922338e4926fa4d3",
"assets/assets/skills/2.0x/Codemagic.png": "17bfc358b8720891c58286372cf58f96",
"assets/assets/skills/2.0x/Dart.png": "e266942c4b59bb72398ac4a7931ceb09",
"assets/assets/skills/2.0x/Figma.png": "1923e35d17d36994bebea4187a04b858",
"assets/assets/skills/2.0x/Firebase.png": "b1c4f2fe01b14ad2b761942fc15e8d59",
"assets/assets/skills/2.0x/Flutter.png": "005ab91aba51cc55f7a4de55476802b8",
"assets/assets/skills/2.0x/GetX.png": "3b6867646d368bc0ab6446aca32f9ccc",
"assets/assets/skills/2.0x/Git.png": "b1ecac19389872d612faabf486da1cde",
"assets/assets/skills/2.0x/Hive.png": "5dfa0cc447ebc55076eb0dca35197b6b",
"assets/assets/skills/2.0x/Rest%2520APIs.png": "9ee51e375f8578ef7255a32aa1c9ad7b",
"assets/assets/skills/2.0x/Riverpod.png": "45b84a238dd5e15faf0449ef16738c3b",
"assets/assets/skills/2.0x/Sqflite.png": "61a9b1ff43c6a29ebf42cdd176a59765",
"assets/assets/skills/3.0x/BloC.png": "9b244c02d12b7aaefdbd32bd06132670",
"assets/assets/skills/3.0x/Codemagic.png": "4de6c28daa9f2573e1864d34bace52ac",
"assets/assets/skills/3.0x/Dart.png": "55821b11427db9a4ffb35db9b5ff35c8",
"assets/assets/skills/3.0x/Figma.png": "da9bd007d4192149bedadd1551070922",
"assets/assets/skills/3.0x/Firebase.png": "3fa6fc254bc20df6ef0eb7f3c6768d3a",
"assets/assets/skills/3.0x/Flutter.png": "022076c72086752aa66152a8c98618db",
"assets/assets/skills/3.0x/GetX.png": "297ddc60610d7e6efccf0cb9bf464a13",
"assets/assets/skills/3.0x/Git.png": "2356a1cad1a19c8fad2ba461cd7135b5",
"assets/assets/skills/3.0x/Hive.png": "4fab3f4c687e8938597d45c8f2e97a1c",
"assets/assets/skills/3.0x/Rest%2520APIs.png": "3534dba71740db66691813f73afbb6a2",
"assets/assets/skills/3.0x/Riverpod.png": "b856d08897aa3c652fa8f02ddf507142",
"assets/assets/skills/3.0x/Sqflite.png": "9ab24573589677183c08f7c578314c5e",
"assets/assets/skills/BloC.png": "37899fbce9c89d71c91def4fc11c27cd",
"assets/assets/skills/Codemagic.png": "bbb01f22d718a687e41381d34b6562be",
"assets/assets/skills/Dart.png": "74a946ae50ac2873220ddd066584692c",
"assets/assets/skills/Figma.png": "84bbc19ac3aea9d9b23dfdaac091a13a",
"assets/assets/skills/Firebase.png": "44064b39fd3017896fc02e78a0fceec0",
"assets/assets/skills/Flutter.png": "73b3cfffd625ebdf5ceeb27a69c732a6",
"assets/assets/skills/GetX.png": "376c3affb0e8c30e4acf2600f346fce9",
"assets/assets/skills/Git.png": "da48d5e3cdd128ff1d3575dc375ecc0f",
"assets/assets/skills/Hive.png": "a5d36ce44922f9a5c35472b5a15af676",
"assets/assets/skills/Rest%2520APIs.png": "0650ebcdad6f1fe6de5d1fa6eba59542",
"assets/assets/skills/Riverpod.png": "097b4aad1ea5585221fd74ae94c3562f",
"assets/assets/skills/Sqflite.png": "698bb64867fb0c3327f5491a332dc61d",
"assets/FontManifest.json": "4862abe88fcea3581627c80eeacbe206",
"assets/fonts/MaterialIcons-Regular.otf": "40d21578396bc733769169c13dd7aecb",
"assets/NOTICES": "98568d7ac7e3246f651dd5f9ccabc130",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2babbfa3a15b693180d38e8ffeb43159",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a21568d89f9653bf2cb5ff7ddb1bb112",
"/": "a21568d89f9653bf2cb5ff7ddb1bb112",
"logo.png": "314a5587f6181692bcb11d1453dcdc0d",
"main.dart.js": "90580a38e4145ea09ebd4b867a907169",
"manifest.json": "729f0117f7aa77f4b3f620b4b347d533",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
