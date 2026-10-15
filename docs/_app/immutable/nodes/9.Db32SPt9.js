import{s as f,n as i,o as u}from"../chunks/scheduler.Cdu_wsp_.js";import{S as _,i as g,t as r,k as v,a as h,j as y,g as a,l as k,o as x,d as l,p as w}from"../chunks/index.gwBTkKco.js";import{l as S}from"../chunks/backend.xYVYwLyq.js";function C(m){let t,o,e,c;return{c(){t=r(`

`),o=r(`

`),e=v("p"),c=r(d),this.h()},l(n){t=h(n,`

`),y("svelte-1c0vuvf",document.head).forEach(a),o=h(n,`

`),e=k(n,"P",{});var p=x(e);c=h(p,d),p.forEach(a),this.h()},h(){document.title="Connecting itch.io — Cutievirus"},m(n,s){l(n,t,s),l(n,o,s),l(n,e,s),w(e,c)},p:i,i,o:i,d(n){n&&(a(t),a(o),a(e))}}}let d="Finishing your itch.io connection…";function E(m){return u(async()=>{try{const t=new URLSearchParams(location.hash.slice(1)),o=t.get("access_token"),e=t.get("state");if(history.replaceState(null,"",location.pathname),!o||!e)throw new Error("missing token");await S(o,e),location.href="/connect"}catch{location.href="/connect?error=itchio_failed"}}),[]}class q extends _{constructor(t){super(),g(this,t,E,C,f,{})}}export{q as component};
