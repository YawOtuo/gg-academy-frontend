if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const f=e=>i(e,t),r={module:{uri:t},exports:c,require:f};s[t]=Promise.all(a.map((e=>r[e]||f(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"df3e6162d685cc7f0f0aadf49e71882e"},{url:"/_next/static/chunks/12038df7-7bb8051ad9fb59b4.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/183-39eca679156765c5.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/23-bf4d6ce19fade3bd.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/3627521c-41a0d2f0bc3971f2.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/412-591ddb67d0c63d23.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/674-5e542af30316bd2e.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/710-1e004697706f24f1.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/737dfa3e-97417bf30264a239.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/746-d92c2254fc591392.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/787-90feb611ee3d1b4b.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/89-d3a56e95808e1bf7.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/896-d9182dcbe7ede8b4.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/8dc5345f-5e7837f827b12f5e.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/app/_not-found/page-4475c7182703d691.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/app/layout-c55b5e656a3f10e8.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/app/page-df463941558b0d48.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/app/students/%5Bid%5D/page-476719901b589e0a.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/app/students/page-7cf30105d7684f58.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/bc9c3264-306d4f8ebad14ec1.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/d622d42c-9f045958706380e1.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/e416a3ff-01cb385e3739031d.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/fd9d1056-c176ba62bfa905c4.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/main-4eb31c2f2c0c0c08.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/main-app-7182f4d8df3878c7.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-61b9eb65701d5637.js",revision:"kxqS2xHfC_igOZ0-aMmN5"},{url:"/_next/static/css/2fa82b729f8dd1c9.css",revision:"2fa82b729f8dd1c9"},{url:"/_next/static/css/f530e2ee20637349.css",revision:"f530e2ee20637349"},{url:"/_next/static/kxqS2xHfC_igOZ0-aMmN5/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/kxqS2xHfC_igOZ0-aMmN5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/062522b8b7c3ad6a-s.woff2",revision:"0f347a32b2168180dbc514e104ab207c"},{url:"/_next/static/media/19e37deead9b3ec2-s.woff2",revision:"8f919c25620e7f246b5abcfa979922bf"},{url:"/_next/static/media/3d9ea938b6afa941-s.p.woff2",revision:"ee1b2a154fb9ea98a28413a839adedfb"},{url:"/_next/static/media/46392699924ae7e5-s.woff2",revision:"467f697ccbe92aebc38f6c1a433f6948"},{url:"/_next/static/media/6fed4e5749a3ea15-s.woff2",revision:"bd04001574d461203c7264ac27d8c504"},{url:"/_next/static/media/83651bee47cf14da-s.woff2",revision:"d2bb91b14d5895c91741b933a76be9c0"},{url:"/_next/static/media/9beef36ab83de3f0-s.woff2",revision:"82c2dc97217d32c57a029754fda91e4e"},{url:"/_next/static/media/dd4ab5b525bd804a-s.woff2",revision:"b505d29c0021c60e4a004de0b5fea45f"},{url:"/_next/static/media/e6f5886ae1242622-s.woff2",revision:"e64d3f79602912c46c2b4d7f26dcadb8"},{url:"/_next/static/media/faac4ac11aa3d97b-s.woff2",revision:"9cb88d5b1ed3ff5796eefc9e62af1b8e"},{url:"/icon512_maskable.png",revision:"c47d53e477d5ca2c8dbd758818f44ef8"},{url:"/icon512_rounded.png",revision:"bbb0704cd234f38db171e238d3951351"},{url:"/manifest.json",revision:"4e28d1b2f98316d0b8316cda4e2613b0"},{url:"/manifest_and_icons.zip",revision:"9fa631b8da2d2fa858161c7715de7e46"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/student-placeholder.png",revision:"6def13cefbe49bf132c17ade5342fc5b"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
