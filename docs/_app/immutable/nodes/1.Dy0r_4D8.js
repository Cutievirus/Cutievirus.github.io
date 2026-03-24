import{s as H,f as N,o as W,n as z}from"../chunks/scheduler.BjkBv5nx.js";import{S as D,i as F,t as m,c as y,a as u,j as I,g as $,b as C,d,m as E,e as S,f as j,h as x,k as B,l as L,o as P,q as M,p as g,s as A,n as J,x as K,y as O}from"../chunks/index.BT_eMuJg.js";import{p as Q}from"../chunks/stores.BRBo6LgB.js";import{M as R}from"../chunks/DocNav.D3EDvnwi.js";import{L as U}from"../chunks/Layout.DWvC3Vad.js";import{S as V}from"../chunks/Sidebar.QyloSfjU.js";import{C as X}from"../chunks/ColumnLayout.CZ3t2REy.js";function G(_){let l,e,a,n="🡠back",s,o,r;return{c(){l=B("p"),e=m(`\r
				Try going `),a=B("a"),a.textContent=n,s=m(`\r
			`),this.h()},l(t){l=L(t,"P",{class:!0});var f=P(l);e=u(f,`\r
				Try going `),a=L(f,"A",{href:!0,"data-svelte-h":!0}),J(a)!=="svelte-bl56nm"&&(a.textContent=n),s=u(f,`\r
			`),f.forEach($),this.h()},h(){M(a,"href","javscript:goBack();"),M(l,"class","svelte-ix4sbo")},m(t,f){d(t,l,f),g(l,e),g(l,a),g(l,s),o||(r=K(a,"click",O(st)),o=!0)},p:z,d(t){t&&$(l),o=!1,r()}}}function Y(_){var T;let l,e,a,n=_[1].status+"",s,o,r,t,f,h=((T=_[1].error)==null?void 0:T.message)+"",v,q,w,k,p=_[0]&&G();return{c(){l=m(`\r
			`),e=B("h1"),a=m(" "),s=m(n),o=m(" "),r=m(`\r
			\r
			`),t=B("p"),f=m(" "),v=m(h),q=m(" "),w=m(`\r
			`),p&&p.c(),k=m(`\r
		`),this.h()},l(i){l=u(i,`\r
			`),e=L(i,"H1",{class:!0});var c=P(e);a=u(c," "),s=u(c,n),o=u(c," "),c.forEach($),r=u(i,`\r
			\r
			`),t=L(i,"P",{class:!0});var b=P(t);f=u(b," "),v=u(b,h),q=u(b," "),b.forEach($),w=u(i,`\r
			`),p&&p.l(i),k=u(i,`\r
		`),this.h()},h(){M(e,"class","svelte-ix4sbo"),M(t,"class","svelte-ix4sbo")},m(i,c){d(i,l,c),d(i,e,c),g(e,a),g(e,s),g(e,o),d(i,r,c),d(i,t,c),g(t,f),g(t,v),g(t,q),d(i,w,c),p&&p.m(i,c),d(i,k,c)},p(i,c){var b;c&2&&n!==(n=i[1].status+"")&&A(s,n),c&2&&h!==(h=((b=i[1].error)==null?void 0:b.message)+"")&&A(v,h),i[0]?p?p.p(i,c):(p=G(),p.c(),p.m(k.parentNode,k)):p&&(p.d(1),p=null)},d(i){i&&($(l),$(e),$(r),$(t),$(w),$(k)),p&&p.d(i)}}}function Z(_){let l,e,a,n,s,o;return e=new R({props:{$$slots:{default:[Y]},$$scope:{ctx:_}}}),n=new V({}),{c(){l=m(`\r
		`),y(e.$$.fragment),a=m(`\r
		`),y(n.$$.fragment),s=m(`\r
	`)},l(r){l=u(r,`\r
		`),C(e.$$.fragment,r),a=u(r,`\r
		`),C(n.$$.fragment,r),s=u(r,`\r
	`)},m(r,t){d(r,l,t),E(e,r,t),d(r,a,t),E(n,r,t),d(r,s,t),o=!0},p(r,t){const f={};t&7&&(f.$$scope={dirty:t,ctx:r}),e.$set(f)},i(r){o||(S(e.$$.fragment,r),S(n.$$.fragment,r),o=!0)},o(r){j(e.$$.fragment,r),j(n.$$.fragment,r),o=!1},d(r){r&&($(l),$(a),$(s)),x(e,r),x(n,r)}}}function tt(_){let l,e,a,n;return e=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:_}}}),{c(){l=m(`\r
	`),y(e.$$.fragment),a=m(`\r
`)},l(s){l=u(s,`\r
	`),C(e.$$.fragment,s),a=u(s,`\r
`)},m(s,o){d(s,l,o),E(e,s,o),d(s,a,o),n=!0},p(s,o){const r={};o&7&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){n||(S(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){s&&($(l),$(a)),x(e,s)}}}function et(_){var r;let l,e,a,n,s,o;return document.title=e=_[1].status+" "+((r=_[1].error)==null?void 0:r.message),n=new U({props:{$$slots:{default:[tt]},$$scope:{ctx:_}}}),{c(){l=m(`\r
\r
`),a=m(`\r
\r
`),y(n.$$.fragment),s=m(`\r
\r
`)},l(t){l=u(t,`\r
\r
`),I("svelte-rjk6mf",document.head).forEach($),a=u(t,`\r
\r
`),C(n.$$.fragment,t),s=u(t,`\r
\r
`)},m(t,f){d(t,l,f),d(t,a,f),E(n,t,f),d(t,s,f),o=!0},p(t,[f]){var v;(!o||f&2)&&e!==(e=t[1].status+" "+((v=t[1].error)==null?void 0:v.message))&&(document.title=e);const h={};f&7&&(h.$$scope={dirty:f,ctx:t}),n.$set(h)},i(t){o||(S(n.$$.fragment,t),o=!0)},o(t){j(n.$$.fragment,t),o=!1},d(t){t&&($(l),$(a),$(s)),x(n,t)}}}function st(){history.back()}function rt(_,l,e){let a;N(_,Q,s=>e(1,a=s));let n=!1;return W(()=>{e(0,n=history.length>1)}),[n,a]}class ut extends D{constructor(l){super(),F(this,l,rt,et,H,{})}}export{ut as component};
