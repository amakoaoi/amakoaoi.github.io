if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ai-84132260.svg",revision:null},{url:"assets/armchair-833ccc03.webp",revision:null},{url:"assets/armchair2-92f83d61.webp",revision:null},{url:"assets/black_jack-796c73e6.svg",revision:null},{url:"assets/black_king-89a171b3.svg",revision:null},{url:"assets/black_queen-b33faf9a.svg",revision:null},{url:"assets/cards_back_1-56292c68.svg",revision:null},{url:"assets/cards_back_2-e1b8fff9.svg",revision:null},{url:"assets/cards_back_3-c4e2e822.svg",revision:null},{url:"assets/cards_back_4-a72f9628.svg",revision:null},{url:"assets/cards_back_5-e0502207.svg",revision:null},{url:"assets/cards_back_6-849faa43.svg",revision:null},{url:"assets/cards_back_7-3e149fb1.svg",revision:null},{url:"assets/cards_back_8-81dc1a4e.svg",revision:null},{url:"assets/cards_back_9-8437b7e2.svg",revision:null},{url:"assets/clip_studio_paint-41b0c9fb.svg",revision:null},{url:"assets/clock-071f2ecd.webp",revision:null},{url:"assets/clover-6f4a2b5e.svg",revision:null},{url:"assets/css-02005660.svg",revision:null},{url:"assets/design-0b3fc5bc.webp",revision:null},{url:"assets/diamond-eeca8424.svg",revision:null},{url:"assets/drawings_mobile-388aa17c.webp",revision:null},{url:"assets/drawings-896308c2.webp",revision:null},{url:"assets/en-51a8613a.svg",revision:null},{url:"assets/fr-c19557a7.svg",revision:null},{url:"assets/games-ade3cc72.webp",revision:null},{url:"assets/heart-89b7df4e.svg",revision:null},{url:"assets/html-281ad198.svg",revision:null},{url:"assets/index-06868be4.css",revision:null},{url:"assets/index-11eee355.js",revision:null},{url:"assets/javascript-40a27a1f.svg",revision:null},{url:"assets/josh-manteau-b0c558fe.webp",revision:null},{url:"assets/lantern-de432a35.webp",revision:null},{url:"assets/maya-29e2a13d.svg",revision:null},{url:"assets/nodejs-dc8800bf.svg",revision:null},{url:"assets/photoshop-a0afc10e.svg",revision:null},{url:"assets/python-6aa0ccc7.svg",revision:null},{url:"assets/red_jack-daef393c.svg",revision:null},{url:"assets/red_king-6b744201.svg",revision:null},{url:"assets/red_queen-595a427b.svg",revision:null},{url:"assets/renamer2-8d6878a2.webp",revision:null},{url:"assets/rig-4772542c.webp",revision:null},{url:"assets/shapebox2-b3523dff.webp",revision:null},{url:"assets/spade-2aa9e878.svg",revision:null},{url:"assets/sudoku-7e77552d.webp",revision:null},{url:"assets/vue-606c4449.svg",revision:null},{url:"assets/wacom-2adf1718.svg",revision:null},{url:"assets/wardrobe-e4502293.webp",revision:null},{url:"favicon.svg",revision:"2269921a48440a09996b34fe6d5a3afd"},{url:"index.html",revision:"172c41ec465797ef0e38b0770ecc7cd4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"48b5d1a315ec07eb20ce72ec1f0f6a33"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));