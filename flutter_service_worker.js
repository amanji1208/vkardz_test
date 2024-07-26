'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f55ae017f3bbd5c526ab786f6cbfc6f",
"assets/AssetManifest.bin.json": "6123c1313731ee645e6bc6e843ba7950",
"assets/AssetManifest.json": "3f6b37384d1113637e478178e4632ea3",
"assets/assets/fonts/DMSans-Black.ttf": "33a429d13f9321057985bb638e3bd9d4",
"assets/assets/fonts/DMSans-Bold.ttf": "9def97569c21a2e08c818845776c4f21",
"assets/assets/fonts/DMSans-ExtraLight.ttf": "00cd6563cc997d9767f5d7329a183075",
"assets/assets/fonts/DMSans-Light.ttf": "737e8e7b386545e9636f14b1678e9d82",
"assets/assets/fonts/DMSans-Medium.ttf": "2dd767322ccc760c0c31d6a900b9d3b2",
"assets/assets/fonts/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/assets/fonts/DMSans-SemiBold.ttf": "b475f362cd4f51d0bb56cb036c86ef73",
"assets/assets/fonts/DMSans-Thin.ttf": "3d8bd9931375bff65eed852ce7c56a02",
"assets/assets/fonts/OFL.txt": "427576114558741ca4fbb39e3802608d",
"assets/assets/images/404Error.svg": "e5e5b2ea3a9af5d60aa497525892bf1e",
"assets/assets/images/addAdminDashboard.svg": "663bfff3f384f808ae152fec17bd6e28",
"assets/assets/images/Add_circle_admin.svg": "e3e6e4b192637c6864817cc2a0a5b3af",
"assets/assets/images/agreement.svg": "9cf7e37b760c195a093935500c6550dc",
"assets/assets/images/appleIcon.svg": "4b9b1308724b5531e1d86c667349f91e",
"assets/assets/images/Arrow_left.svg": "8fdd96f02b99ad1130f93f1ef2021a55",
"assets/assets/images/Arrow_left_drawer.svg": "c553b1b569f8ff9844b2a2283bd185d9",
"assets/assets/images/Arrow_right.svg": "eac1bf67f0bb23901a36a2b98834075a",
"assets/assets/images/Arrow_right_drawer.svg": "9850a00b49fd0324b38484fd958649ef",
"assets/assets/images/a_option.svg": "bd2d867bef7f45659c6d866aa25ddc81",
"assets/assets/images/badge.svg": "d36381421fd931c96648cc256db5fcd6",
"assets/assets/images/bar.svg": "904ec14ab0748d33f9db3bff283b3671",
"assets/assets/images/b_option.svg": "da03aa50d7f125c77110404de3feca3f",
"assets/assets/images/call.svg": "adfc87149271d5db4a8b5d6fb07140d1",
"assets/assets/images/cancel.svg": "e5ba69ec83d7c127d676f114eda1caa4",
"assets/assets/images/car1.jpg": "7b66c230bf9b9b9921cebb132dbe2f36",
"assets/assets/images/car2.jpg": "c611a72920b39a5fbab56e13c63e680e",
"assets/assets/images/car3.png": "262f10cc9236bf94d87f8e9a1057ffcb",
"assets/assets/images/car4.jpg": "d1ba204de996afb002f77792e5be2696",
"assets/assets/images/car5.jpg": "91bded2f631e89cec5b4debaf35953d3",
"assets/assets/images/change_password_admin.svg": "036cc4e6bfa20908cfc46d21491196f9",
"assets/assets/images/Checkbox.svg": "c6ddf0d6203898210fc6c49c00e209c4",
"assets/assets/images/checkCheckbox.svg": "0805afeb592d356e3d2396be68c0f4d1",
"assets/assets/images/clock.svg": "5147b32a5a31f3c3df6f808fa6f7d8cf",
"assets/assets/images/clock_small.svg": "4b8ee821f09d99ab2cb3c83888cada78",
"assets/assets/images/coffee.svg": "51098193287547bc2659389d534199b3",
"assets/assets/images/connection_a_b.svg": "bc8b526011a4b2a74e3d0d92bc1b385e",
"assets/assets/images/contact_email.svg": "e1acf701b1a570d99ca31d029c4ef1e8",
"assets/assets/images/contact_location.svg": "937e41e2e7efb9f412c846ca5322494d",
"assets/assets/images/contact_phone.svg": "dea2e8332e34b39e6423f18b9321dddf",
"assets/assets/images/dashboard_admin.svg": "457ce8892fd9018ba1b3a793b3060d1d",
"assets/assets/images/date.svg": "3edf7ad67e061f69cadae24c0544ad06",
"assets/assets/images/date_small.svg": "33e5e3371aabc98ff3726dd1166e0bb9",
"assets/assets/images/deleteAdminDashboard.svg": "8c8e6aff1195d3cb24cdae6b1bbf4006",
"assets/assets/images/details_selected.svg": "d8ff616fa70a35ddcb0636a7ae198e24",
"assets/assets/images/details_unselected.svg": "9b76cf150e04c058dcbb6d194929ac08",
"assets/assets/images/down-arrow.svg": "addaab447bef916d2dff1b8be98ead34",
"assets/assets/images/drive.svg": "23c237654fbb36c95023758560af5805",
"assets/assets/images/edit_profile_admin.svg": "5026afd5beb3a4dba9590303341b1897",
"assets/assets/images/extra_selected.svg": "76993645dcb2d62f3bf6fbe96194c330",
"assets/assets/images/extra_unselected.svg": "a2f0a6334af9baeff855b72e6f9fe3da",
"assets/assets/images/eye-slash.svg": "fb0956b250d5fbb8a0400471688b294f",
"assets/assets/images/eye.svg": "74cdc4b5b6619e3a4f9f12624a513314",
"assets/assets/images/FOOTER.png": "1e56cac9035d545a7633a811c9b97afd",
"assets/assets/images/from_arrow_small.svg": "eca64374fb2052d71f40a437fcd73dce",
"assets/assets/images/globe.svg": "8e38d0f5b3304693267866284805ff84",
"assets/assets/images/homePage_image.png": "1ad1c4915f3117597b0b7a9e742a218f",
"assets/assets/images/iconsFooter.svg": "999ee81a8b5a59693c3f74d4e70445c8",
"assets/assets/images/invoiceAdminDashboard.svg": "7c343e2aa67b257fc61c496bc3d8d35c",
"assets/assets/images/invoice_admin.svg": "8b02cfc533f15084545b344f8123467f",
"assets/assets/images/laptopImage.png": "8dd3ee2916b88a88b884bc9d7a52d211",
"assets/assets/images/login.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/assets/images/logout_admin.svg": "783dcda4f1a910430aa25e05636b9b78",
"assets/assets/images/LongTravel.svg": "8d7789ea3efe89a1b4f6316d5131619f",
"assets/assets/images/luggage.svg": "820b81474453f1d935770bca3849634e",
"assets/assets/images/maps.svg": "8cf0b68e9198d9aad4b6490f7d2fe52e",
"assets/assets/images/map_admin.svg": "56d2a6ab6360b36205302969f91590f5",
"assets/assets/images/minus.svg": "8c4c720d9484b8194e86f91a454c1bb8",
"assets/assets/images/minusQus.svg": "f10f133097f92c77f2d332cba71aa332",
"assets/assets/images/mobile_home.png": "af8aada0f77bce3337c683330cdedab3",
"assets/assets/images/mobile_home_bg.png": "da99ea3f174c95e7658199d35c5687d4",
"assets/assets/images/myBookingsAdminDashboard.svg": "c66d7ec1117ac6811db927d3024dabca",
"assets/assets/images/my_booking_admin.svg": "7a29d629e45d0bd7003626823687e8cf",
"assets/assets/images/nav-icon.svg": "eb1890d62bda782d95ecf86b2dfc0e77",
"assets/assets/images/newspaper.svg": "7da05a01d47d3b73a433f1a7f22605b4",
"assets/assets/images/numbersHome.png": "f93fcdf6d346acea230cb5a98e60b747",
"assets/assets/images/ourFleet.svg": "524a36e46aa2e0ed8d2568ca6ebc5f7b",
"assets/assets/images/passenger.svg": "57ed029b9000ddede49a07a2bb0273bf",
"assets/assets/images/payment_cards.png": "390aba4d148094ec99589bb32058022b",
"assets/assets/images/payment_cards.svg": "ca6f2f042da90159283f1e3ab0e45b71",
"assets/assets/images/payment_selected.svg": "87e5f65ce91e962765c08b412432fa21",
"assets/assets/images/payment_unselected.svg": "3a03a8996e45c27234245c707c07d5bc",
"assets/assets/images/pendingPaymentAdminDashboard.svg": "f19b108bf19966817f7405dd6b96f9f3",
"assets/assets/images/playStore.svg": "ec10b8844afa0d07445ff93b45c50baa",
"assets/assets/images/plus.svg": "bdaa0625b8ea14fa90368d5ffaebca9c",
"assets/assets/images/plusQus.svg": "a9ce63713515f637df155a05bb21351e",
"assets/assets/images/plus_round_trip.svg": "108649decf1f79c5b4ca505f1f77114f",
"assets/assets/images/prices_with_no_surprise.svg": "8485ed5558b1627469d0e97893ee30ca",
"assets/assets/images/private_travel.svg": "6d37ad92f4ccdf47d6d521acdfca22ea",
"assets/assets/images/safty_first.svg": "3f83a724328add4f20db327e3102d262",
"assets/assets/images/savedLocationAdminDashboard.svg": "4ea9e829c27309ba9643f864dd208bbf",
"assets/assets/images/search.svg": "3c34636bb8171c805c699a28a086fb60",
"assets/assets/images/service.png": "6947400ac9d6540b0b5122c1f85875cf",
"assets/assets/images/services.svg": "22e46794404e5f658575f1be3b038ed9",
"assets/assets/images/shield.svg": "061e2827ba5cb46fd9d0349885888f62",
"assets/assets/images/smallTick.svg": "1b97c45df3639891190bca08ff38bfaf",
"assets/assets/images/statue-of-liberty.svg": "c0625ef90d8a2a9a5bee502fdb1bda44",
"assets/assets/images/tick_payment_received.svg": "2cf0ef44a05748a45e39335391462f8c",
"assets/assets/images/times.svg": "2c8403f9412d980d0ca99fdcd0de2316",
"assets/assets/images/to_arrow_small.svg": "b83928c73da9cac4f27b56dfcf06e505",
"assets/assets/images/up-right-arrow.svg": "5e6a6e81d11b8166c3908a2f38e05e43",
"assets/assets/images/vehicle_selected.svg": "6bdd10fd35eca947b4f54c87ddd32624",
"assets/assets/images/waterBottle.svg": "505c99e247c08367dc1e75df6458f71d",
"assets/assets/images/wifi.svg": "026ca38bc71345fd7c66019acffb58ad",
"assets/FontManifest.json": "33e00a2d52f6211f77be5bc79972c2a6",
"assets/fonts/MaterialIcons-Regular.otf": "ed8d0a07c0718bedacd4e1d68e7ecbb6",
"assets/NOTICES": "f751d4acc9d4b5b69fa8f0a9ff1e1cfd",
"assets/packages/country_state_city_pro/assets/city.json": "3a7a4886baa0f1d4f3dc40a72dc35885",
"assets/packages/country_state_city_pro/assets/country.json": "de2a8a8da3cce0928ec6939e49dba675",
"assets/packages/country_state_city_pro/assets/state.json": "e4745737737ccbda1213e0af9839925f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "179833de516485fd053ccb848220f461",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbabcb43cc51ef74cf25029fe04d7fc4",
"/": "fbabcb43cc51ef74cf25029fe04d7fc4",
"main.dart.js": "bce173ba99aea9f9927064e614b7c95d",
"manifest.json": "46cf9964573e5c2e2840e012474dccb1",
"version.json": "fd284bd3f8a7c83c86dbbbf5b98a45c7"};
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
