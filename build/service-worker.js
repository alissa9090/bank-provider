parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AaGI":[function(require,module,exports) {
var e="shopping-list-v0.1",n=["./","./manifest.webmanifest","./shopping-list-128x128.53711125.png","./shopping-list-144x144.8c812167.png","./shopping-list-152x152.9ce296dc.png","./shopping-list-192x192.a8be18ee.png","./shopping-list-256x256.24932ea0.png","./shopping-list-512x512.29e19655.png","./src.fc45d0fd.css","./src.fc45d0fd.js"];self.addEventListener("install",function(t){console.log("[ServiceWorker] Install"),t.waitUntil(caches.open(e).then(function(e){return console.log("[ServiceWorker] Pre-caching offline page"),e.addAll(n)})),self.skipWaiting()}),self.addEventListener("activate",function(n){console.log("[ServiceWorker] Activate"),n.waitUntil(caches.keys().then(function(n){return Promise.all(n.map(function(n){if(n!==e)return console.log("[ServiceWorker] Removing old cache",n),caches.delete(n)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){console.log("[ServiceWorker] Fetch",e.request.url),e.respondWith(caches.match(e.request).then(function(n){return n||fetch(e.request)},console.log).catch(console.log))});
},{}]},{},["AaGI"], null)
//# sourceMappingURL=service-worker.js.map