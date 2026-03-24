import{s as _,f as d}from"./scheduler.BjkBv5nx.js";import{S as p,i as g,t as l,c as h,a as f,j as y,g as m,b,d as u,m as A,e as C,f as P,h as S,s as T}from"./index.BT_eMuJg.js";import{p as j}from"./stores.BRBo6LgB.js";import{A as q}from"./Anchor.DPTg1Ks6.js";function w(s){let n;return{c(){n=l(s[0])},l(e){n=f(e,s[0])},m(e,o){u(e,n,o)},p(e,o){o&1&&T(n,e[0])},d(e){e&&m(n)}}}function x(s){let n,e,o,a,c;return document.title=e=s[0],a=new q({props:{h1:!0,$$slots:{default:[w]},$$scope:{ctx:s}}}),{c(){n=l(`\r
\r
`),o=l(`\r
\r
`),h(a.$$.fragment)},l(t){n=f(t,`\r
\r
`),y("svelte-pm843m",document.head).forEach(m),o=f(t,`\r
\r
`),b(a.$$.fragment,t)},m(t,r){u(t,n,r),u(t,o,r),A(a,t,r),c=!0},p(t,[r]){(!c||r&1)&&e!==(e=t[0])&&(document.title=e);const i={};r&33&&(i.$$scope={dirty:r,ctx:t}),a.$set(i)},i(t){c||(C(a.$$.fragment,t),c=!0)},o(t){P(a.$$.fragment,t),c=!1},d(t){t&&(m(n),m(o)),S(a,t)}}}function E(s,n,e){let o;d(s,j,i=>e(4,o=i));let{category:a=void 0}=n,{title:c}=n,t=c,r="";return s.$$set=i=>{"category"in i&&e(1,a=i.category),"title"in i&&e(2,c=i.title)},s.$$.update=()=>{s.$$.dirty&30&&(e(3,r=a!==void 0?a:o.data.category),e(0,t=r?`${c} - ${r}`:c))},[t,a,c,r,o]}class F extends p{constructor(n){super(),g(this,n,E,x,_,{category:1,title:2})}}export{F as P};
