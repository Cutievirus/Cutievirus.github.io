import{s as d,n as c,o as u}from"../chunks/scheduler.x3cykQpu.js";import{S as _,i as g,t as r,k as v,a as l,j as y,g as s,l as k,o as x,d as h,p as w}from"../chunks/index.yHSKvnyS.js";import{l as S}from"../chunks/backend.B2y0QlxK.js";function C(f){let t,a,e,o;return{c(){t=r(`

`),a=r(`

`),e=v("p"),o=r(p),this.h()},l(n){t=l(n,`

`),y("svelte-1c0vuvf",document.head).forEach(s),a=l(n,`

`),e=k(n,"P",{});var m=x(e);o=l(m,p),m.forEach(s),this.h()},h(){document.title="Connecting itch.io — Cutievirus"},m(n,i){h(n,t,i),h(n,a,i),h(n,e,i),w(e,o)},p:c,i:c,o:c,d(n){n&&(s(t),s(a),s(e))}}}let p="Finishing your itch.io connection…";function E(f){return u(async()=>{try{const t=new URLSearchParams(location.hash.slice(1)),a=t.get("access_token"),e=t.get("state");if(history.replaceState(null,"",location.pathname),!a||!e)throw new Error("missing token");const o=await S(a,e);o.login?location.href=o.login:o.pending?location.href=`/connect/confirm?pending=${o.pending}`:location.href="/connect"}catch{location.href="/connect?error=itchio_failed"}}),[]}class q extends _{constructor(t){super(),g(this,t,E,C,d,{})}}export{q as component};
