import{s as H,f as N,o as W,n as z}from"../chunks/scheduler.Cdu_wsp_.js";import{S as D,i as F,t as m,c as y,a as u,j as I,g as $,b as C,d,m as E,e as S,f as j,h as x,k as B,l as L,o as P,q as M,p as g,s as A,n as J,x as K,y as O}from"../chunks/index.gwBTkKco.js";import{p as Q}from"../chunks/stores.A_DVSwNv.js";import{M as R}from"../chunks/DocNav.C_vCsowI.js";import{L as U}from"../chunks/Layout.Rs2SP0qY.js";import{S as V}from"../chunks/Sidebar.C9cot_mW.js";import{C as X}from"../chunks/ColumnLayout.DPle6MMu.js";function G(_){let a,e,o,l="🡠back",s,r,n;return{c(){a=B("p"),e=m(`
				Try going `),o=B("a"),o.textContent=l,s=m(`
			`),this.h()},l(t){a=L(t,"P",{class:!0});var f=P(a);e=u(f,`
				Try going `),o=L(f,"A",{href:!0,"data-svelte-h":!0}),J(o)!=="svelte-bl56nm"&&(o.textContent=l),s=u(f,`
			`),f.forEach($),this.h()},h(){M(o,"href","javscript:goBack();"),M(a,"class","svelte-ix4sbo")},m(t,f){d(t,a,f),g(a,e),g(a,o),g(a,s),r||(n=K(o,"click",O(st)),r=!0)},p:z,d(t){t&&$(a),r=!1,n()}}}function Y(_){var T;let a,e,o,l=_[1].status+"",s,r,n,t,f,h=((T=_[1].error)==null?void 0:T.message)+"",v,q,w,k,p=_[0]&&G();return{c(){a=m(`
			`),e=B("h1"),o=m(" "),s=m(l),r=m(" "),n=m(`
			
			`),t=B("p"),f=m(" "),v=m(h),q=m(" "),w=m(`
			`),p&&p.c(),k=m(`
		`),this.h()},l(i){a=u(i,`
			`),e=L(i,"H1",{class:!0});var c=P(e);o=u(c," "),s=u(c,l),r=u(c," "),c.forEach($),n=u(i,`
			
			`),t=L(i,"P",{class:!0});var b=P(t);f=u(b," "),v=u(b,h),q=u(b," "),b.forEach($),w=u(i,`
			`),p&&p.l(i),k=u(i,`
		`),this.h()},h(){M(e,"class","svelte-ix4sbo"),M(t,"class","svelte-ix4sbo")},m(i,c){d(i,a,c),d(i,e,c),g(e,o),g(e,s),g(e,r),d(i,n,c),d(i,t,c),g(t,f),g(t,v),g(t,q),d(i,w,c),p&&p.m(i,c),d(i,k,c)},p(i,c){var b;c&2&&l!==(l=i[1].status+"")&&A(s,l),c&2&&h!==(h=((b=i[1].error)==null?void 0:b.message)+"")&&A(v,h),i[0]?p?p.p(i,c):(p=G(),p.c(),p.m(k.parentNode,k)):p&&(p.d(1),p=null)},d(i){i&&($(a),$(e),$(n),$(t),$(w),$(k)),p&&p.d(i)}}}function Z(_){let a,e,o,l,s,r;return e=new R({props:{$$slots:{default:[Y]},$$scope:{ctx:_}}}),l=new V({}),{c(){a=m(`
		`),y(e.$$.fragment),o=m(`
		`),y(l.$$.fragment),s=m(`
	`)},l(n){a=u(n,`
		`),C(e.$$.fragment,n),o=u(n,`
		`),C(l.$$.fragment,n),s=u(n,`
	`)},m(n,t){d(n,a,t),E(e,n,t),d(n,o,t),E(l,n,t),d(n,s,t),r=!0},p(n,t){const f={};t&7&&(f.$$scope={dirty:t,ctx:n}),e.$set(f)},i(n){r||(S(e.$$.fragment,n),S(l.$$.fragment,n),r=!0)},o(n){j(e.$$.fragment,n),j(l.$$.fragment,n),r=!1},d(n){n&&($(a),$(o),$(s)),x(e,n),x(l,n)}}}function tt(_){let a,e,o,l;return e=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:_}}}),{c(){a=m(`
	`),y(e.$$.fragment),o=m(`
`)},l(s){a=u(s,`
	`),C(e.$$.fragment,s),o=u(s,`
`)},m(s,r){d(s,a,r),E(e,s,r),d(s,o,r),l=!0},p(s,r){const n={};r&7&&(n.$$scope={dirty:r,ctx:s}),e.$set(n)},i(s){l||(S(e.$$.fragment,s),l=!0)},o(s){j(e.$$.fragment,s),l=!1},d(s){s&&($(a),$(o)),x(e,s)}}}function et(_){var n;let a,e,o,l,s,r;return document.title=e=_[1].status+" "+((n=_[1].error)==null?void 0:n.message),l=new U({props:{$$slots:{default:[tt]},$$scope:{ctx:_}}}),{c(){a=m(`

`),o=m(`

`),y(l.$$.fragment),s=m(`

`)},l(t){a=u(t,`

`),I("svelte-rjk6mf",document.head).forEach($),o=u(t,`

`),C(l.$$.fragment,t),s=u(t,`

`)},m(t,f){d(t,a,f),d(t,o,f),E(l,t,f),d(t,s,f),r=!0},p(t,[f]){var v;(!r||f&2)&&e!==(e=t[1].status+" "+((v=t[1].error)==null?void 0:v.message))&&(document.title=e);const h={};f&7&&(h.$$scope={dirty:f,ctx:t}),l.$set(h)},i(t){r||(S(l.$$.fragment,t),r=!0)},o(t){j(l.$$.fragment,t),r=!1},d(t){t&&($(a),$(o),$(s)),x(l,t)}}}function st(){history.back()}function nt(_,a,e){let o;N(_,Q,s=>e(1,o=s));let l=!1;return W(()=>{e(0,l=history.length>1)}),[l,o]}class ut extends D{constructor(a){super(),F(this,a,nt,et,H,{})}}export{ut as component};
