import{S as g,i as p,s as v,y as _,r as b,u as h,v as y,w as m,m as j,k as x,x as $,I as d,e as f,g as O,a as S,c as l,n as w,f as i}from"./index-0d9ad2d2.js";import{B as C}from"./blog-layout-f66b7ab1.js";function R(r){let e,n,a;return{c(){e=f("p"),e.textContent="Was looking for the best way to reverse an array in Objective C and stumbled over this solution that might not be obvious to everyone (wasn\u2019t to me at least).",n=O(),a=f("div"),a.innerHTML='<div class="highlight"><pre class="highlight"><code><span class="hljs-built_in">NSArray</span> *reversedArray = [[array reverseObjectEnumerator] allObjects];</code></pre></div>',S(a,"class","highlighter-rouge language-objc")},m(s,t){l(s,e,t),l(s,n,t),l(s,a,t)},p:w,d(s){s&&i(e),s&&i(n),s&&i(a)}}}function T(r){let e,n;const a=[r[0],c];let s={$$slots:{default:[R]},$$scope:{ctx:r}};for(let t=0;t<a.length;t+=1)s=_(s,a[t]);return e=new C({props:s}),{c(){b(e.$$.fragment)},m(t,o){h(e,t,o),n=!0},p(t,[o]){const u=o&1?y(a,[o&1&&m(t[0]),o&0&&m(c)]):{};o&2&&(u.$$scope={dirty:o,ctx:t}),e.$set(u)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}const c={comments:!1,date:"2009-10-09T00:00:00Z",section:"blog",tags:["objective-c"],title:"Reversing an array in Objective C"};function k(r,e,n){return r.$$set=a=>{n(0,e=_(_({},e),d(a)))},e=d(e),[e]}class A extends g{constructor(e){super(),p(this,e,k,T,v,{})}}var q=Object.freeze(Object.defineProperty({__proto__:null,default:A,metadata:c},Symbol.toStringTag,{value:"Module"}));export{A as R,q as _,c as m};