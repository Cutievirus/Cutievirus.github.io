import{s as se,c as G,u as N,g as P,a as W,r as ce,o as fe,d as Y,n as F}from"./scheduler.x3cykQpu.js";import{S as oe,i as re,t as h,k as D,a as p,l as O,o as E,g,q as H,B as A,d,p as q,x as J,e as v,f as M,c as j,r as K,b as C,m as R,v as I,u as U,h as z,H as V}from"./index.yHSKvnyS.js";import{e as T}from"./each.D6YF6ztN.js";import{g as ue}from"./index.BbP3371Q.js";import{L as ie}from"./Link.HvS9P6Ip.js";const me=!0,_e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:ue,ge=me,{window:he}=_e,pe=a=>({}),Q=a=>({});function de(a){let l,e,s,o,f,m,c,r,u,t,i,n,k,L;const w=a[8].summary,b=G(w,a,a[7],Q),B=a[8].default,y=G(B,a,a[7],null);return{c(){l=h(`





`),e=D("details"),s=h(`
    `),o=D("summary"),b&&b.c(),f=h(`
    
    `),m=D("div"),c=h(`
        `),y&&y.c(),r=h(`
    `),u=h(`

`),t=h(`
`),i=D("hr"),this.h()},l(_){l=p(_,`





`),e=O(_,"DETAILS",{class:!0});var $=E(e);s=p($,`
    `),o=O($,"SUMMARY",{id:!0,class:!0});var Z=E(o);b&&b.l(Z),Z.forEach(g),f=p($,`
    
    `),m=O($,"DIV",{class:!0});var S=E(m);c=p(S,`
        `),y&&y.l(S),r=p(S,`
    `),S.forEach(g),u=p($,`

`),$.forEach(g),t=p(_,`
`),i=O(_,"HR",{class:!0}),this.h()},h(){H(o,"id",a[1]),H(o,"class","svelte-1q6ixhq"),H(m,"class","svelte-1q6ixhq"),e.open=a[0],H(e,"class","svelte-1q6ixhq"),A(e,"isOpen",a[2]),A(e,"browser",ge),H(i,"class","svelte-1q6ixhq")},m(_,$){d(_,l,$),d(_,e,$),q(e,s),q(e,o),b&&b.m(o,null),a[9](o),q(e,f),q(e,m),q(m,c),y&&y.m(m,null),q(m,r),q(e,u),a[10](e),d(_,t,$),d(_,i,$),n=!0,k||(L=[J(he,"resize",a[6]),J(o,"click",a[5])],k=!0)},p(_,[$]){b&&b.p&&(!n||$&128)&&N(b,w,_,_[7],n?W(w,_[7],$,pe):P(_[7]),Q),(!n||$&2)&&H(o,"id",_[1]),y&&y.p&&(!n||$&128)&&N(y,B,_,_[7],n?W(B,_[7],$,null):P(_[7]),null),(!n||$&1)&&(e.open=_[0]),(!n||$&4)&&A(e,"isOpen",_[2])},i(_){n||(v(b,_),v(y,_),n=!0)},o(_){M(b,_),M(y,_),n=!1},d(_){_&&(g(l),g(e),g(t),g(i)),b&&b.d(_),a[9](null),y&&y.d(_),a[10](null),k=!1,ce(L)}}}function $e(a,l,e){let{$$slots:s={},$$scope:o}=l,{id:f}=l,{open:m=!1}=l,c=m,r,u,t=0;const i=async w=>{w.preventDefault(),e(0,m=!0),e(2,c=!c),await new Promise(b=>requestAnimationFrame(b)),e(3,r.style.maxHeight=(c?r:u).scrollHeight+"px",r),t&&window.clearTimeout(t),t=window.setTimeout(()=>e(0,m=c),400)};fe(async()=>{await document.fonts.ready,e(3,r.style.maxHeight=(c?r:u).scrollHeight+"px",r)});function n(){e(3,r.style.maxHeight=(c?r:u).scrollHeight+"px",r)}function k(w){Y[w?"unshift":"push"](()=>{u=w,e(4,u)})}function L(w){Y[w?"unshift":"push"](()=>{r=w,e(3,r)})}return a.$$set=w=>{"id"in w&&e(1,f=w.id),"open"in w&&e(0,m=w.open),"$$scope"in w&&e(7,o=w.$$scope)},[m,f,c,r,u,i,n,o,s,k,L]}class ae extends oe{constructor(l){super(),re(this,l,$e,de,se,{id:1,open:0})}}function X(a,l,e){const s=a.slice();return s[2]=l[e][0],s[3]=l[e][1],s}function x(a,l,e){const s=a.slice();return s[6]=l[e][0],s[7]=l[e][1],s}function ee(a,l,e){const s=a.slice();return s[6]=l[e][0],s[7]=l[e][1],s}function we(a){let l=a[7]+"",e;return{c(){e=h(l)},l(s){e=p(s,l)},m(s,o){d(s,e,o)},p:F,d(s){s&&g(e)}}}function te(a){let l,e,s;return e=new ie({props:{href:"/docs/mz3d-rewrite/"+a[6],$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){l=D("li"),j(e.$$.fragment)},l(o){l=O(o,"LI",{});var f=E(l);C(e.$$.fragment,f),f.forEach(g)},m(o,f){d(o,l,f),R(e,l,null),s=!0},p(o,f){const m={};f&4096&&(m.$$scope={dirty:f,ctx:o}),e.$set(m)},i(o){s||(v(e.$$.fragment,o),s=!0)},o(o){M(e.$$.fragment,o),s=!1},d(o){o&&g(l),z(e)}}}function be(a){let l,e,s,o,f,m,c=T(Object.entries(a[0])),r=[];for(let t=0;t<c.length;t+=1)r[t]=te(ee(a,c,t));const u=t=>M(r[t],1,1,()=>{r[t]=null});return{c(){l=h(`
    
    `),e=D("ul"),s=h(`
        `);for(let t=0;t<r.length;t+=1)r[t].c();o=h(`
    `),f=h(`
`)},l(t){l=p(t,`
    
    `),e=O(t,"UL",{});var i=E(e);s=p(i,`
        `);for(let n=0;n<r.length;n+=1)r[n].l(i);o=p(i,`
    `),i.forEach(g),f=p(t,`
`)},m(t,i){d(t,l,i),d(t,e,i),q(e,s);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null);q(e,o),d(t,f,i),m=!0},p(t,i){if(i&1){c=T(Object.entries(t[0]));let n;for(n=0;n<c.length;n+=1){const k=ee(t,c,n);r[n]?(r[n].p(k,i),v(r[n],1)):(r[n]=te(k),r[n].c(),v(r[n],1),r[n].m(e,o))}for(I(),n=c.length;n<r.length;n+=1)u(n);U()}},i(t){if(!m){for(let i=0;i<c.length;i+=1)v(r[i]);m=!0}},o(t){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)M(r[i]);m=!1},d(t){t&&(g(l),g(e),g(f)),V(r,t)}}}function ve(a){let l;return{c(){l=h(`
        MZ3D-Rewrite
    `)},l(e){l=p(e,`
        MZ3D-Rewrite
    `)},m(e,s){d(e,l,s)},d(e){e&&g(l)}}}function ke(a){let l=a[7]+"",e;return{c(){e=h(l)},l(s){e=p(s,l)},m(s,o){d(s,e,o)},p:F,d(s){s&&g(e)}}}function ne(a){let l,e,s;return e=new ie({props:{href:"/docs/"+a[2]+"/"+a[6],$$slots:{default:[ke]},$$scope:{ctx:a}}}),{c(){l=D("li"),j(e.$$.fragment)},l(o){l=O(o,"LI",{});var f=E(l);C(e.$$.fragment,f),f.forEach(g)},m(o,f){d(o,l,f),R(e,l,null),s=!0},p(o,f){const m={};f&4096&&(m.$$scope={dirty:f,ctx:o}),e.$set(m)},i(o){s||(v(e.$$.fragment,o),s=!0)},o(o){M(e.$$.fragment,o),s=!1},d(o){o&&g(l),z(e)}}}function ye(a){let l,e,s,o,f,m,c=T(Object.entries(a[1])),r=[];for(let t=0;t<c.length;t+=1)r[t]=ne(x(a,c,t));const u=t=>M(r[t],1,1,()=>{r[t]=null});return{c(){l=h(`
        
        `),e=D("ul"),s=h(`
            `);for(let t=0;t<r.length;t+=1)r[t].c();o=h(`
        `),f=h(`
    `)},l(t){l=p(t,`
        
        `),e=O(t,"UL",{});var i=E(e);s=p(i,`
            `);for(let n=0;n<r.length;n+=1)r[n].l(i);o=p(i,`
        `),i.forEach(g),f=p(t,`
    `)},m(t,i){d(t,l,i),d(t,e,i),q(e,s);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null);q(e,o),d(t,f,i),m=!0},p(t,i){if(i&2){c=T(Object.entries(t[1]));let n;for(n=0;n<c.length;n+=1){const k=x(t,c,n);r[n]?(r[n].p(k,i),v(r[n],1)):(r[n]=ne(k),r[n].c(),v(r[n],1),r[n].m(e,o))}for(I(),n=c.length;n<r.length;n+=1)u(n);U()}},i(t){if(!m){for(let i=0;i<c.length;i+=1)v(r[i]);m=!0}},o(t){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)M(r[i]);m=!1},d(t){t&&(g(l),g(e),g(f)),V(r,t)}}}function Me(a){let l,e=a[3]+"",s,o;return{c(){l=h(`
            `),s=h(e),o=h(`
        `)},l(f){l=p(f,`
            `),s=p(f,e),o=p(f,`
        `)},m(f,m){d(f,l,m),d(f,s,m),d(f,o,m)},p:F,d(f){f&&(g(l),g(s),g(o))}}}function le(a){let l,e;return l=new ae({props:{open:!0,id:a[2],$$slots:{summary:[Me],default:[ye]},$$scope:{ctx:a}}}),{c(){j(l.$$.fragment)},l(s){C(l.$$.fragment,s)},m(s,o){R(l,s,o),e=!0},p(s,o){const f={};o&4096&&(f.$$scope={dirty:o,ctx:s}),l.$set(f)},i(s){e||(v(l.$$.fragment,s),e=!0)},o(s){M(l.$$.fragment,s),e=!1},d(s){z(l,s)}}}function qe(a){let l,e,s,o,f;e=new ae({props:{open:!0,id:"mz3d-rewrite",$$slots:{summary:[ve],default:[be]},$$scope:{ctx:a}}});let m=T(Object.entries({mv3d:"MV3D",mz3d:"MZ3D"})),c=[];for(let u=0;u<m.length;u+=1)c[u]=le(X(a,m,u));const r=u=>M(c[u],1,1,()=>{c[u]=null});return{c(){l=h(`

`),j(e.$$.fragment),s=h(`

`);for(let u=0;u<c.length;u+=1)c[u].c();o=K()},l(u){l=p(u,`

`),C(e.$$.fragment,u),s=p(u,`

`);for(let t=0;t<c.length;t+=1)c[t].l(u);o=K()},m(u,t){d(u,l,t),R(e,u,t),d(u,s,t);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(u,t);d(u,o,t),f=!0},p(u,[t]){const i={};if(t&4096&&(i.$$scope={dirty:t,ctx:u}),e.$set(i),t&2){m=T(Object.entries({mv3d:"MV3D",mz3d:"MZ3D"}));let n;for(n=0;n<m.length;n+=1){const k=X(u,m,n);c[n]?(c[n].p(k,t),v(c[n],1)):(c[n]=le(k),c[n].c(),v(c[n],1),c[n].m(o.parentNode,o))}for(I(),n=m.length;n<c.length;n+=1)r(n);U()}},i(u){if(!f){v(e.$$.fragment,u);for(let t=0;t<m.length;t+=1)v(c[t]);f=!0}},o(u){M(e.$$.fragment,u),c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)M(c[t]);f=!1},d(u){u&&(g(l),g(s),g(o)),z(e,u),V(c,u)}}}function De(a){return[{"#getting-started":"Getting Started","map-texture":"Map Texture","vertex-offsets":"Vertex Offsets",lut:"LUT Textures","connected-maps":"Connected Maps"},{"#getting-started":"Getting Started","plugin-commands":"Plugin Commands","tile-config":"Tile Configuration Functions","event-config":"Event Configuration Functions","map-config":"Map Configuration Functions",modeling:"Modeling"}]}class Se extends oe{constructor(l){super(),re(this,l,De,qe,se,{})}}export{Se as D};
