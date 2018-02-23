"use strict";var precacheConfig=[["/index.html","95f06e76d70215adb5775f0fc2969174"],["/static/css/main.60defbb2.css","ace5e0ee9f0c4da4f98db0343a813527"],["/static/js/main.261ada75.js","d995a0ff7b9ac6ba90798589a7f912e7"],["/static/media/1997.5f990d6f.jpg","5f990d6fd80bb0818687302ed1eb4d2c"],["/static/media/1998.95cead75.jpg","95cead757f0d089539fcb1733cd00c77"],["/static/media/1999.38828da9.jpg","38828da9ddfec4c816bf520d877cddaf"],["/static/media/2001.f06f6e28.jpg","f06f6e28f25e50f56b18148e2231c842"],["/static/media/2002.071d4088.jpg","071d40886789f2eb4694048e768c909b"],["/static/media/2003.e679f5ac.jpg","e679f5ac3e4150e20a5643f98a96441e"],["/static/media/2004.ba39b1cb.jpg","ba39b1cb644bc81e635b2565dfeed8e9"],["/static/media/2005.b297a876.jpg","b297a87633a156ce76e35a28a9bc2f82"],["/static/media/2006.8b2dd1c5.jpg","8b2dd1c56f87242cf4be9d04f710684b"],["/static/media/2007.59d7dc92.jpg","59d7dc9240c969808badc60cd50c1c6e"],["/static/media/2008.3e12426e.jpg","3e12426e4fb8331fb0526beca4d563e1"],["/static/media/2009.53bee774.jpg","53bee774816cdee6baa35a91925bc03c"],["/static/media/2010.4822dc74.jpg","4822dc746ebd3e1e394972312b3aa26d"],["/static/media/2011.d78c6028.jpg","d78c602818c80042cda55eee28bae0cc"],["/static/media/2012.8824cd3b.jpg","8824cd3b3b04831cb0e60bfbcb888923"],["/static/media/2013.8c6239f4.jpg","8c6239f4388f325d46ce60622c5a48bb"],["/static/media/2014.34200598.jpg","34200598bf76520e72184c3f31ca4f7c"],["/static/media/2015.b5bb43a2.jpg","b5bb43a2275b6c327be7d4f48becd5aa"],["/static/media/2016.f6446334.jpg","f6446334f7c2cf94146191b4c6daf70c"],["/static/media/2017.5e828de0.jpg","5e828de0cc3258390a72f4e2f8eea7bf"],["/static/media/ken-nadeau.571bac97.png","571bac970133d5fdcc3e5ff629347ca6"],["/static/media/pchc20-logo-reveal_720p.f968279e.webm","f968279e0abca95b628d74e4479ba9f2"],["/static/media/pchc20-logo-reveal_mobile.f84e2b49.webm","f84e2b4900b6595397f82fec4a31b4b7"],["/static/media/pchc20-logo.599f3ef9.svg","599f3ef91e6851b484cfe9ba5f20e776"],["/static/media/pchc20-peds-patient.c4d7f770.jpg","c4d7f7701e70182522feb3d39fda1a1b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});