import{s as R,b as V}from"../chunks/scheduler.Cdu_wsp_.js";import{S as W,i as X,t as s,c as O,k as x,a as o,b as A,l as h,n as b,o as Y,g as n,q as B,d as l,m as F,p as w,s as Z,e as J,f as K,h as Q}from"../chunks/index.gwBTkKco.js";import{C as ee}from"../chunks/Code.j1pNgbFo.js";import{P as te}from"../chunks/PageTitle.bKvIm82Y.js";function ne($){let i;return{c(){i=s(`
    top(image.png,-47,-54|tile:map)
`)},l(a){i=o(a,`
    top(image.png,-47,-54|tile:map)
`)},m(a,r){l(a,i,r)},d(a){a&&n(i)}}}function ae($){let i,a,r,p,E=`
    The map texture mode can be used to achieve a technique similar to parallax mapping, where a texture is used for the entire map, and tiles are mapped to it according to their x y z coordinates.
`,k,u,U,q,d,N=`
    Usage Example:
`,P,f,T,m,L,g,S="image.png",j,v=$[0].pluginName.toUpperCase()+"",y,z,M,c,D=`
    <code>-47</code> and <code>-54</code> are the offset for the texture. This means tile 0,0 will be mapped to -47,-54 on the texture, or in other words, 0,0 on the texture will be tile 47,54.
`,H,_,G=`
    <code>tile:map</code> activates the &quot;map&quot; tiling mode, which is what enables the map texture feature.
`,C;return a=new te({props:{title:"Map Texture"}}),f=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:$}}}),{c(){i=s(`

`),O(a.$$.fragment),r=s(`

`),p=x("p"),p.textContent=E,k=s(`
`),u=x("img"),q=s(`

`),d=x("p"),d.textContent=N,P=s(`
`),O(f.$$.fragment),T=s(`
`),m=x("p"),L=s(`
    `),g=x("code"),g.textContent=S,j=s(" will be loaded from the "),y=s(v),z=s(` folder.
`),M=s(`
`),c=x("p"),c.innerHTML=D,H=s(`
`),_=x("p"),_.innerHTML=G,this.h()},l(e){i=o(e,`

`),A(a.$$.fragment,e),r=o(e,`

`),p=h(e,"P",{"data-svelte-h":!0}),b(p)!=="svelte-i1gyba"&&(p.textContent=E),k=o(e,`
`),u=h(e,"IMG",{src:!0,alt:!0}),q=o(e,`

`),d=h(e,"P",{"data-svelte-h":!0}),b(d)!=="svelte-68nkht"&&(d.textContent=N),P=o(e,`
`),A(f.$$.fragment,e),T=o(e,`
`),m=h(e,"P",{});var t=Y(m);L=o(t,`
    `),g=h(t,"CODE",{"data-svelte-h":!0}),b(g)!=="svelte-9g6v4i"&&(g.textContent=S),j=o(t," will be loaded from the "),y=o(t,v),z=o(t,` folder.
`),t.forEach(n),M=o(e,`
`),c=h(e,"P",{"data-svelte-h":!0}),b(c)!=="svelte-19yw517"&&(c.innerHTML=D),H=o(e,`
`),_=h(e,"P",{"data-svelte-h":!0}),b(_)!=="svelte-1bko5ip"&&(_.innerHTML=G),this.h()},h(){V(u.src,U="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kj5nhnx6q5am7qjfvuefbydw/bafkreib4kr5o75rkyidzerc73e7255sxumesmm7cwmeeh5dudggdmc4nd4@jpeg")||B(u,"src",U),B(u,"alt","")},m(e,t){l(e,i,t),F(a,e,t),l(e,r,t),l(e,p,t),l(e,k,t),l(e,u,t),l(e,q,t),l(e,d,t),l(e,P,t),F(f,e,t),l(e,T,t),l(e,m,t),w(m,L),w(m,g),w(m,j),w(m,y),w(m,z),l(e,M,t),l(e,c,t),l(e,H,t),l(e,_,t),C=!0},p(e,[t]){const I={};t&2&&(I.$$scope={dirty:t,ctx:e}),f.$set(I),(!C||t&1)&&v!==(v=e[0].pluginName.toUpperCase()+"")&&Z(y,v)},i(e){C||(J(a.$$.fragment,e),J(f.$$.fragment,e),C=!0)},o(e){K(a.$$.fragment,e),K(f.$$.fragment,e),C=!1},d(e){e&&(n(i),n(r),n(p),n(k),n(u),n(q),n(d),n(P),n(T),n(m),n(M),n(c),n(H),n(_)),Q(a,e),Q(f,e)}}}function le($,i,a){let{data:r}=i;return $.$$set=p=>{"data"in p&&a(0,r=p.data)},[r]}class me extends W{constructor(i){super(),X(this,i,le,ae,R,{data:0})}}export{me as component};
