import{s as _,f as d}from"./scheduler.Cdu_wsp_.js";import{S as p,i as g,t as l,c as h,a as f,j as y,g as m,b,d as u,m as A,e as C,f as P,h as S,s as T}from"./index.gwBTkKco.js";import{p as j}from"./stores.A_DVSwNv.js";import{A as q}from"./Anchor.Ct3bDT7x.js";function w(r){let n;return{c(){n=l(r[0])},l(e){n=f(e,r[0])},m(e,s){u(e,n,s)},p(e,s){s&1&&T(n,e[0])},d(e){e&&m(n)}}}function x(r){let n,e,s,a,c;return document.title=e=r[0],a=new q({props:{h1:!0,$$slots:{default:[w]},$$scope:{ctx:r}}}),{c(){n=l(`

`),s=l(`

`),h(a.$$.fragment)},l(t){n=f(t,`

`),y("svelte-pm843m",document.head).forEach(m),s=f(t,`

`),b(a.$$.fragment,t)},m(t,o){u(t,n,o),u(t,s,o),A(a,t,o),c=!0},p(t,[o]){(!c||o&1)&&e!==(e=t[0])&&(document.title=e);const i={};o&33&&(i.$$scope={dirty:o,ctx:t}),a.$set(i)},i(t){c||(C(a.$$.fragment,t),c=!0)},o(t){P(a.$$.fragment,t),c=!1},d(t){t&&(m(n),m(s)),S(a,t)}}}function E(r,n,e){let s;d(r,j,i=>e(4,s=i));let{category:a=void 0}=n,{title:c}=n,t=c,o="";return r.$$set=i=>{"category"in i&&e(1,a=i.category),"title"in i&&e(2,c=i.title)},r.$$.update=()=>{r.$$.dirty&30&&(e(3,o=a!==void 0?a:s.data.category),e(0,t=o?`${c} - ${o}`:c))},[t,a,c,o,s]}class F extends p{constructor(n){super(),g(this,n,E,x,_,{category:1,title:2})}}export{F as P};
