import{s as O,o as Q,n as N}from"../chunks/scheduler.x3cykQpu.js";import{S as V,i as X,t as p,c as M,a as $,b as q,d,m as L,e as w,f as v,g as m,h as T,v as G,u as J,k as B,l as E,o as K,p as P,s as R,n as S,q as Y}from"../chunks/index.yHSKvnyS.js";import{g as Z,r as j}from"../chunks/backend.B2y0QlxK.js";import{B as A}from"../chunks/Button.XthWw4pN.js";import{I as x}from"../chunks/Img.mQUKWcJH.js";import{M as tt}from"../chunks/MessageWindow.3SG5wRlT.js";import{P as et}from"../chunks/PageTitle.ghKrtzTr.js";import{B as nt}from"../chunks/BrandIcon.fc36jx7B.js";function ot(c){let t,n,e,o,r,i=F(c[0])+"",f,C,g,_,a,b,k,I;e=new nt({props:{source:c[0].connection.source,size:16,style:"vertical-align:middle;"}});let u=c[0].connection.avatar_url&&D(c);function U(s,l){if(s[0].action==="create")return st;if(s[0].action==="merge")return at}let y=U(c),h=y&&y(c);return a=new A({props:{block:!0,action:c[4],disabled:c[2],$$slots:{default:[it]},$$scope:{ctx:c}}}),k=new A({props:{block:!0,action:c[5],disabled:c[2],$$slots:{default:[lt]},$$scope:{ctx:c}}}),{c(){t=B("p"),n=p(`
			`),M(e.$$.fragment),o=p(`
			`),u&&u.c(),r=p(`
			`),f=p(i),C=p(`
		`),g=p(`
		`),h&&h.c(),_=p(`
		`),M(a.$$.fragment),b=p(`
		`),M(k.$$.fragment)},l(s){t=E(s,"P",{});var l=K(t);n=$(l,`
			`),q(e.$$.fragment,l),o=$(l,`
			`),u&&u.l(l),r=$(l,`
			`),f=$(l,i),C=$(l,`
		`),l.forEach(m),g=$(s,`
		`),h&&h.l(s),_=$(s,`
		`),q(a.$$.fragment,s),b=$(s,`
		`),q(k.$$.fragment,s)},m(s,l){d(s,t,l),P(t,n),L(e,t,null),P(t,o),u&&u.m(t,null),P(t,r),P(t,f),P(t,C),d(s,g,l),h&&h.m(s,l),d(s,_,l),L(a,s,l),d(s,b,l),L(k,s,l),I=!0},p(s,l){const W={};l&1&&(W.source=s[0].connection.source),e.$set(W),s[0].connection.avatar_url?u?(u.p(s,l),l&1&&w(u,1)):(u=D(s),u.c(),w(u,1),u.m(t,r)):u&&(G(),v(u,1,1,()=>{u=null}),J()),(!I||l&1)&&i!==(i=F(s[0])+"")&&R(f,i),y!==(y=U(s))&&(h&&h.d(1),h=y&&y(s),h&&(h.c(),h.m(_.parentNode,_)));const H={};l&4&&(H.disabled=s[2]),l&129&&(H.$$scope={dirty:l,ctx:s}),a.$set(H);const z={};l&4&&(z.disabled=s[2]),l&128&&(z.$$scope={dirty:l,ctx:s}),k.$set(z)},i(s){I||(w(e.$$.fragment,s),w(u),w(a.$$.fragment,s),w(k.$$.fragment,s),I=!0)},o(s){v(e.$$.fragment,s),v(u),v(a.$$.fragment,s),v(k.$$.fragment,s),I=!1},d(s){s&&(m(t),m(g),m(_),m(b)),T(e),u&&u.d(),h&&h.d(s),T(a,s),T(k,s)}}}function rt(c){let t,n="Loading…";return{c(){t=B("p"),t.textContent=n},l(e){t=E(e,"P",{"data-svelte-h":!0}),S(t)!=="svelte-cr9qbe"&&(t.textContent=n)},m(e,o){d(e,t,o)},p:N,i:N,o:N,d(e){e&&m(t)}}}function ct(c){let t,n,e,o,r='<a href="/connect">Back to Connect</a>';return{c(){t=B("p"),n=p(c[1]),e=p(`
		`),o=B("p"),o.innerHTML=r,this.h()},l(i){t=E(i,"P",{class:!0});var f=K(t);n=$(f,c[1]),f.forEach(m),e=$(i,`
		`),o=E(i,"P",{"data-svelte-h":!0}),S(o)!=="svelte-4nt1sq"&&(o.innerHTML=r),this.h()},h(){Y(t,"class","error svelte-1w0c66u")},m(i,f){d(i,t,f),P(t,n),d(i,e,f),d(i,o,f)},p(i,f){f&2&&R(n,i[1])},i:N,o:N,d(i){i&&(m(t),m(e),m(o))}}}function D(c){let t,n;return t=new x({props:{src:c[0].connection.avatar_url,width:16,height:16,radius:1,alt:""}}),{c(){M(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,o){L(t,e,o),n=!0},p(e,o){const r={};o&1&&(r.src=e[0].connection.avatar_url),t.$set(r)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function at(c){let t,n=`
				Its other connections move too — starmium and download keys follow
				their connections, as always.
			`;return{c(){t=B("p"),t.textContent=n},l(e){t=E(e,"P",{"data-svelte-h":!0}),S(t)!=="svelte-scqe1h"&&(t.textContent=n)},m(e,o){d(e,t,o)},d(e){e&&m(t)}}}function st(c){let t,n="This connection becomes the new account's primary connection.";return{c(){t=B("p"),t.textContent=n},l(e){t=E(e,"P",{"data-svelte-h":!0}),S(t)!=="svelte-iowb7q"&&(t.textContent=n)},m(e,o){d(e,t,o)},d(e){e&&m(t)}}}function it(c){let t=c[3][c[0].action]+"",n;return{c(){n=p(t)},l(e){n=$(e,t)},m(e,o){d(e,n,o)},p(e,o){o&1&&t!==(t=e[3][e[0].action]+"")&&R(n,t)},d(e){e&&m(n)}}}function lt(c){let t;return{c(){t=p("Cancel")},l(n){t=$(n,"Cancel")},m(n,e){d(n,t,e)},d(n){n&&m(t)}}}function ft(c){let t,n,e,o,r,i,f;n=new et({props:{title:"Confirm"}});const C=[ct,rt,ot],g=[];function _(a,b){return a[1]?0:a[0]?2:1}return o=_(c),r=g[o]=C[o](c),{c(){t=p(`
	`),M(n.$$.fragment),e=p(`

	`),r.c(),i=p(`
`)},l(a){t=$(a,`
	`),q(n.$$.fragment,a),e=$(a,`

	`),r.l(a),i=$(a,`
`)},m(a,b){d(a,t,b),L(n,a,b),d(a,e,b),g[o].m(a,b),d(a,i,b),f=!0},p(a,b){let k=o;o=_(a),o===k?g[o].p(a,b):(G(),v(g[k],1,1,()=>{g[k]=null}),J(),r=g[o],r?r.p(a,b):(r=g[o]=C[o](a),r.c()),w(r,1),r.m(i.parentNode,i))},i(a){f||(w(n.$$.fragment,a),w(r),f=!0)},o(a){v(n.$$.fragment,a),v(r),f=!1},d(a){a&&(m(t),m(e),m(i)),T(n,a),g[o].d(a)}}}function ut(c){let t,n,e,o;return n=new tt({props:{shrink:!0,$$slots:{default:[ft]},$$scope:{ctx:c}}}),{c(){t=p(`

`),M(n.$$.fragment),e=p(`

`)},l(r){t=$(r,`

`),q(n.$$.fragment,r),e=$(r,`

`)},m(r,i){d(r,t,i),L(n,r,i),d(r,e,i),o=!0},p(r,[i]){const f={};i&135&&(f.$$scope={dirty:i,ctx:r}),n.$set(f)},i(r){o||(w(n.$$.fragment,r),o=!0)},o(r){v(n.$$.fragment,r),o=!1},d(r){r&&(m(t),m(e)),T(n,r)}}}function mt(c){return`${c.connection.display_name??c.connection.username??c.connection.remote_id}(${c.connection.source==="itchio"?"itch.io":"patreon"})`}function F(c){var n,e,o,r,i,f;const t=mt(c);switch(c.action){case"create":return`Create new account for ${t}?`;case"connect":return`Connect ${t} to ${(n=c.account)==null?void 0:n.display_name}?`;case"move":return`${t} is connected to ${(e=c.source_account)==null?void 0:e.display_name}. Move it to ${(o=c.account)==null?void 0:o.display_name}?`;case"merge":return`${t} is the primary connection for ${(r=c.source_account)==null?void 0:r.display_name}. Merge ${(i=c.source_account)==null?void 0:i.display_name} into ${(f=c.account)==null?void 0:f.display_name}?`;case"login":return`${t} is already connected to your account.`}}function _t(c,t,n){let e=null,o="",r=!1;const i=()=>new URLSearchParams(location.search).get("pending");Q(async()=>{const _=i();if(!_){n(1,o="Nothing to confirm.");return}try{n(0,e=await Z(_))}catch(a){n(1,o=a instanceof Error?a.message:"This confirmation has expired.")}});const f={create:"Create account",connect:"Connect",move:"Move connection",merge:"Merge accounts",login:"Continue"};async function C(){const _=i();if(_){n(2,r=!0),n(1,o="");try{const a=await j(_,"confirm");a.redirect?location.href=a.redirect:location.href="/connect"}catch(a){n(1,o=a instanceof Error?a.message:"That action failed."),n(2,r=!1)}}}async function g(){const _=i();if(!_){location.href="/connect";return}n(2,r=!0);try{await j(_,"cancel")}catch{}location.href="/connect"}return[e,o,r,f,C,g]}class vt extends V{constructor(t){super(),X(this,t,_t,ut,O,{})}}export{vt as component};
