"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7170],{78483:(e,t,n)=>{n.r(t),n.d(t,{HomeAdsFetcher:()=>w,default:()=>A});var i=n(30758),s=n(89848),o=n(66201),r=n(66351),u=n(39566),c=n(35072);const d=18e5;const l=1,f=.5,a={threshold:[0,f,l]};var v=n(86070);const b=(0,i.lazy)((()=>Promise.all([n.e(4151),n.e(4003),n.e(7599)]).then(n.bind(n,36534)))),m=(0,i.lazy)((()=>Promise.all([n.e(4151),n.e(599)]).then(n.bind(n,92523)))),h=(0,i.lazy)((()=>n.e(6665).then(n.bind(n,67009))));function w(){const{fetchAndSetHomeAd:e,setHomeAd:t,homeAd:n,previewHomeAd:w,setPreviewHomeAd:A}=(0,s.bT)(),y=w||n,{homeAdElement:E,setHomeAdElement:S}=(0,o.y)(),_=y&&"then"in y,{visibilityState:p}=function({target:e}){const[t,n]=(0,i.useState)("visible_unknown");return(0,i.useEffect)((()=>{if(e){const t=new IntersectionObserver((([{intersectionRatio:e}])=>n((()=>e>=l?"visible_100":e>=f?"visible_50":e<f?"visible_0":"visible_unknown"))),a);return t.observe(e),()=>t.disconnect()}n("visible_unknown")}),[e]),{visibilityState:t}}({target:E??void 0});if((0,i.useEffect)((function(){return e?.(),()=>{t(void 0),A(void 0)}}),[e,t,A]),function({visibilityState:e,homeAdIsCurrentlyBeingFetched:t}){const{fetchAndSetHomeAd:n}=(0,s.bT)(),o=(0,u.n)(),l=(0,r.$)(),[f,a]=(0,i.useState)(),v=(0,c.J)((()=>!t&&n?.()));(0,i.useEffect)((()=>{o&&l&&("visible_50"===e||"visible_100"===e)&&f&&Date.now()-f>=d&&v()}),[o,f,l,e,v]),(0,i.useEffect)((()=>{t||a(Date.now())}),[t,a])}({visibilityState:p,homeAdIsCurrentlyBeingFetched:_}),!y||_)return null;const H="text/html"===y.display[0]?.mimeType;return(0,v.jsx)(i.Suspense,{children:H?(0,v.jsx)(b,{homeAd:y,ref:S}):(0,v.jsx)(h,{homeAd:y,visibilityState:p,children:(0,v.jsx)(m,{homeAd:y,ref:S})})})}const A=w},66201:(e,t,n)=>{n.d(t,{H:()=>o,y:()=>s});var i=n(30758);function s(){const[e,t]=(0,i.useState)(null);return{homeAdElement:e,setHomeAdElement:t}}const o=i.forwardRef},66351:(e,t,n)=>{n.d(t,{$:()=>s});var i=n(30758);const s=()=>{const[e,t]=(0,i.useState)(document.hasFocus());return(0,i.useEffect)((()=>{function e(){t(!0)}function n(){t(!1)}return window.addEventListener("focus",e),window.addEventListener("blur",n),()=>{window.removeEventListener("focus",e),window.removeEventListener("blur",n)}}),[]),e}},35072:(e,t,n)=>{n.d(t,{J:()=>s});var i=n(30758);function s(e){const t=(0,i.useRef)(e);return(0,i.useLayoutEffect)((()=>{t.current=e})),(0,i.useCallback)(((...e)=>t.current(...e)),[])}}}]);
//# sourceMappingURL=home-ads-fetcher.js.map