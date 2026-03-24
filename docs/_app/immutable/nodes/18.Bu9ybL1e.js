import{s as R,b as V}from"../chunks/scheduler.BjkBv5nx.js";import{S as W,i as X,t as i,c as O,k as x,a as s,b as A,l as h,n as b,o as Y,g as n,q as B,d as r,m as F,p as w,s as Z,e as J,f as K,h as Q}from"../chunks/index.BT_eMuJg.js";import{C as ee}from"../chunks/Code.UvG0J7Qo.js";import{P as te}from"../chunks/PageTitle.CRO4oYBw.js";function ne($){let l;return{c(){l=i(`\r
    top(image.png,-47,-54|tile:map)\r
`)},l(a){l=s(a,`\r
    top(image.png,-47,-54|tile:map)\r
`)},m(a,m){r(a,l,m)},d(a){a&&n(l)}}}function ae($){let l,a,m,o,E=`\r
    The map texture mode can be used to achieve a technique similar to parallax mapping, where a texture is used for the entire map, and tiles are mapped to it according to their x y z coordinates.\r
`,k,u,U,q,d,N=`\r
    Usage Example:\r
`,P,f,T,p,L,g,S="image.png",j,v=$[0].pluginName.toUpperCase()+"",y,z,M,c,D=`
    <code>-47</code> and <code>-54</code> are the offset for the texture. This means tile 0,0 will be mapped to -47,-54 on the texture, or in other words, 0,0 on the texture will be tile 47,54.
`,H,_,G=`
    <code>tile:map</code> activates the &quot;map&quot; tiling mode, which is what enables the map texture feature.
`,C;return a=new te({props:{title:"Map Texture"}}),f=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:$}}}),{c(){l=i(`\r
\r
`),O(a.$$.fragment),m=i(`\r
\r
`),o=x("p"),o.textContent=E,k=i(`\r
`),u=x("img"),q=i(`\r
\r
`),d=x("p"),d.textContent=N,P=i(`\r
`),O(f.$$.fragment),T=i(`\r
`),p=x("p"),L=i(`\r
    `),g=x("code"),g.textContent=S,j=i(" will be loaded from the "),y=i(v),z=i(` folder.\r
`),M=i(`\r
`),c=x("p"),c.innerHTML=D,H=i(`\r
`),_=x("p"),_.innerHTML=G,this.h()},l(e){l=s(e,`\r
\r
`),A(a.$$.fragment,e),m=s(e,`\r
\r
`),o=h(e,"P",{"data-svelte-h":!0}),b(o)!=="svelte-i1gyba"&&(o.textContent=E),k=s(e,`\r
`),u=h(e,"IMG",{src:!0,alt:!0}),q=s(e,`\r
\r
`),d=h(e,"P",{"data-svelte-h":!0}),b(d)!=="svelte-68nkht"&&(d.textContent=N),P=s(e,`\r
`),A(f.$$.fragment,e),T=s(e,`\r
`),p=h(e,"P",{});var t=Y(p);L=s(t,`\r
    `),g=h(t,"CODE",{"data-svelte-h":!0}),b(g)!=="svelte-9g6v4i"&&(g.textContent=S),j=s(t," will be loaded from the "),y=s(t,v),z=s(t,` folder.\r
`),t.forEach(n),M=s(e,`\r
`),c=h(e,"P",{"data-svelte-h":!0}),b(c)!=="svelte-19yw517"&&(c.innerHTML=D),H=s(e,`\r
`),_=h(e,"P",{"data-svelte-h":!0}),b(_)!=="svelte-1bko5ip"&&(_.innerHTML=G),this.h()},h(){V(u.src,U="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kj5nhnx6q5am7qjfvuefbydw/bafkreib4kr5o75rkyidzerc73e7255sxumesmm7cwmeeh5dudggdmc4nd4@jpeg")||B(u,"src",U),B(u,"alt","")},m(e,t){r(e,l,t),F(a,e,t),r(e,m,t),r(e,o,t),r(e,k,t),r(e,u,t),r(e,q,t),r(e,d,t),r(e,P,t),F(f,e,t),r(e,T,t),r(e,p,t),w(p,L),w(p,g),w(p,j),w(p,y),w(p,z),r(e,M,t),r(e,c,t),r(e,H,t),r(e,_,t),C=!0},p(e,[t]){const I={};t&2&&(I.$$scope={dirty:t,ctx:e}),f.$set(I),(!C||t&1)&&v!==(v=e[0].pluginName.toUpperCase()+"")&&Z(y,v)},i(e){C||(J(a.$$.fragment,e),J(f.$$.fragment,e),C=!0)},o(e){K(a.$$.fragment,e),K(f.$$.fragment,e),C=!1},d(e){e&&(n(l),n(m),n(o),n(k),n(u),n(q),n(d),n(P),n(T),n(p),n(M),n(c),n(H),n(_)),Q(a,e),Q(f,e)}}}function re($,l,a){let{data:m}=l;return $.$$set=o=>{"data"in o&&a(0,m=o.data)},[m]}class pe extends W{constructor(l){super(),X(this,l,re,ae,R,{data:0})}}export{pe as component};
