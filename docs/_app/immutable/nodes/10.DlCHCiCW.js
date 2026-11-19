import{s as p,n as i,o as u}from"../chunks/scheduler.x3cykQpu.js";import{S as g,i as _,t as r,k as y,a as l,j as k,g as s,l as v,o as w,d as h,p as x}from"../chunks/index.yHSKvnyS.js";import{l as S}from"../chunks/backend.B2y0QlxK.js";function C(m){let t,n,o,a;return{c(){t=r(`

`),n=r(`

`),o=y("p"),a=r(d),this.h()},l(e){t=l(e,`

`),k("svelte-1c0vuvf",document.head).forEach(s),n=l(e,`

`),o=v(e,"P",{});var f=w(o);a=l(f,d),f.forEach(s),this.h()},h(){document.title="Connecting itch.io — Cutievirus"},m(e,c){h(e,t,c),h(e,n,c),h(e,o,c),x(o,a)},p:i,i,o:i,d(e){e&&(s(t),s(n),s(o))}}}let d="Finishing your itch.io connection…";function E(m){return u(async()=>{try{const t=new URLSearchParams(location.hash.slice(1)),n=new URLSearchParams(location.search),o=t.get("access_token")??n.get("access_token"),a=t.get("state")??n.get("state");if(history.replaceState(null,"",location.pathname),!o||!a)throw new Error("missing token or state from itch.io");const e=await S(o,a);e.login?location.href=e.login:e.pending?location.href=`/connect/confirm?pending=${e.pending}`:location.href="/connect"}catch(t){const n=t instanceof Error?t.message:"itch.io connection failed";location.href=`/connect?error=${encodeURIComponent(n)}`}}),[]}class U extends g{constructor(t){super(),_(this,t,E,C,p,{})}}export{U as component};
