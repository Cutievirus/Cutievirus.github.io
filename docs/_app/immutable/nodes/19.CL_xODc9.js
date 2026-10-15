import{s as Pt}from"../chunks/scheduler.Cdu_wsp_.js";import{S as bt,i as wt,t as l,c as D,k as s,a,b as z,l as o,n as y,o as O,g as n,d as r,m as B,p as i,s as yt,e as I,f as A,h as R}from"../chunks/index.gwBTkKco.js";import{A as Et}from"../chunks/Anchor.Ct3bDT7x.js";import{I as et}from"../chunks/Img.BBID0CA8.js";import{P as Ht}from"../chunks/PageTitle.bKvIm82Y.js";function Mt(E){let m;return{c(){m=l("Example LUT Textures")},l(p){m=a(p,"Example LUT Textures")},m(p,T){r(p,m,T)},d(p){p&&n(m)}}}function Dt(E){let m,p,T,u,$t=`
    "LUT" is an abbreviation for "Look Up Table". LUT textures are used to map from one color to another.
`,W,c,ht=`
    You can use LUT textures to fine-tune and adjust the colors in your game, or you can use them to create some cool effects.
`,Y,v,ct="When defining a texture, you can specify the <code>lut</code> parameter to use a LUT texture.",F,L,vt=`
    Example: <code>texture(lut:lut-inverted)</code>
`,G,g,nt,H,Lt="lut-inverted.png",lt,k=E[0].pluginName.toUpperCase()+"",J,at,K,h,Q,f,rt,M,Ct="(no filter)",it,st,C,ot,V,x,pt,mt,U,ft,X,_,ut,gt,P,dt,Z,$,Tt,xt,b,_t,tt,w,Ut=`
    Also see Babylon&#39;s documentation on <a href="https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses/#color-correction" target="_blank">Color Correction</a>. 
`,S;return p=new Ht({props:{title:"LUT Textures"}}),h=new Et({props:{h2:!0,id:"example-luts",$$slots:{default:[Mt]},$$scope:{ctx:E}}}),C=new et({props:{src:"/img/lut/lut.png",alt:"Default LUT",width:"256",height:"16"}}),U=new et({props:{src:"/img/lut/lut-inverted.png",alt:"Inverted LUT",width:"256",height:"16"}}),P=new et({props:{src:"/img/lut/lut-posterized.png",alt:"Posterized LUT",width:"256",height:"16"}}),b=new et({props:{src:"/img/lut/lut-highcontrast.png",alt:"High Contrast LUT",width:"256",height:"16"}}),{c(){m=l(`

`),D(p.$$.fragment),T=l(`

`),u=s("p"),u.textContent=$t,W=l(`
`),c=s("p"),c.textContent=ht,Y=l(`
`),v=s("p"),v.innerHTML=ct,F=l(`
`),L=s("p"),L.innerHTML=vt,G=l(`
`),g=s("p"),nt=l(`
    This will load the `),H=s("code"),H.textContent=Lt,lt=l(" image from the "),J=l(k),at=l(` folder. The file extension is optional and will default to png.
`),K=l(`
`),D(h.$$.fragment),Q=l(`
`),f=s("p"),rt=l(`
    Default LUT `),M=s("small"),M.textContent=Ct,it=l(`
    `),st=s("br"),D(C.$$.fragment),ot=l(`
`),V=l(`
`),x=s("p"),pt=l(`
    Inverted LUT
    `),mt=s("br"),D(U.$$.fragment),ft=l(`
`),X=l(`
`),_=s("p"),ut=l(`
    Posterized LUT
    `),gt=s("br"),D(P.$$.fragment),dt=l(`
`),Z=l(`
`),$=s("p"),Tt=l(`
    High Contrast LUT
    `),xt=s("br"),D(b.$$.fragment),_t=l(`
`),tt=l(`
`),w=s("p"),w.innerHTML=Ut},l(t){m=a(t,`

`),z(p.$$.fragment,t),T=a(t,`

`),u=o(t,"P",{"data-svelte-h":!0}),y(u)!=="svelte-4m3lg9"&&(u.textContent=$t),W=a(t,`
`),c=o(t,"P",{"data-svelte-h":!0}),y(c)!=="svelte-7uh159"&&(c.textContent=ht),Y=a(t,`
`),v=o(t,"P",{"data-svelte-h":!0}),y(v)!=="svelte-n6887n"&&(v.innerHTML=ct),F=a(t,`
`),L=o(t,"P",{"data-svelte-h":!0}),y(L)!=="svelte-1iw3l29"&&(L.innerHTML=vt),G=a(t,`
`),g=o(t,"P",{});var e=O(g);nt=a(e,`
    This will load the `),H=o(e,"CODE",{"data-svelte-h":!0}),y(H)!=="svelte-z2ctg"&&(H.textContent=Lt),lt=a(e," image from the "),J=a(e,k),at=a(e,` folder. The file extension is optional and will default to png.
`),e.forEach(n),K=a(t,`
`),z(h.$$.fragment,t),Q=a(t,`
`),f=o(t,"P",{});var d=O(f);rt=a(d,`
    Default LUT `),M=o(d,"SMALL",{"data-svelte-h":!0}),y(M)!=="svelte-lp3ggg"&&(M.textContent=Ct),it=a(d,`
    `),st=o(d,"BR",{}),z(C.$$.fragment,d),ot=a(d,`
`),d.forEach(n),V=a(t,`
`),x=o(t,"P",{});var j=O(x);pt=a(j,`
    Inverted LUT
    `),mt=o(j,"BR",{}),z(U.$$.fragment,j),ft=a(j,`
`),j.forEach(n),X=a(t,`
`),_=o(t,"P",{});var N=O(_);ut=a(N,`
    Posterized LUT
    `),gt=o(N,"BR",{}),z(P.$$.fragment,N),dt=a(N,`
`),N.forEach(n),Z=a(t,`
`),$=o(t,"P",{});var q=O($);Tt=a(q,`
    High Contrast LUT
    `),xt=o(q,"BR",{}),z(b.$$.fragment,q),_t=a(q,`
`),q.forEach(n),tt=a(t,`
`),w=o(t,"P",{"data-svelte-h":!0}),y(w)!=="svelte-18rmyyi"&&(w.innerHTML=Ut)},m(t,e){r(t,m,e),B(p,t,e),r(t,T,e),r(t,u,e),r(t,W,e),r(t,c,e),r(t,Y,e),r(t,v,e),r(t,F,e),r(t,L,e),r(t,G,e),r(t,g,e),i(g,nt),i(g,H),i(g,lt),i(g,J),i(g,at),r(t,K,e),B(h,t,e),r(t,Q,e),r(t,f,e),i(f,rt),i(f,M),i(f,it),i(f,st),B(C,f,null),i(f,ot),r(t,V,e),r(t,x,e),i(x,pt),i(x,mt),B(U,x,null),i(x,ft),r(t,X,e),r(t,_,e),i(_,ut),i(_,gt),B(P,_,null),i(_,dt),r(t,Z,e),r(t,$,e),i($,Tt),i($,xt),B(b,$,null),i($,_t),r(t,tt,e),r(t,w,e),S=!0},p(t,[e]){(!S||e&1)&&k!==(k=t[0].pluginName.toUpperCase()+"")&&yt(J,k);const d={};e&2&&(d.$$scope={dirty:e,ctx:t}),h.$set(d)},i(t){S||(I(p.$$.fragment,t),I(h.$$.fragment,t),I(C.$$.fragment,t),I(U.$$.fragment,t),I(P.$$.fragment,t),I(b.$$.fragment,t),S=!0)},o(t){A(p.$$.fragment,t),A(h.$$.fragment,t),A(C.$$.fragment,t),A(U.$$.fragment,t),A(P.$$.fragment,t),A(b.$$.fragment,t),S=!1},d(t){t&&(n(m),n(T),n(u),n(W),n(c),n(Y),n(v),n(F),n(L),n(G),n(g),n(K),n(Q),n(f),n(V),n(x),n(X),n(_),n(Z),n($),n(tt),n(w)),R(p,t),R(h,t),R(C),R(U),R(P),R(b)}}}function zt(E,m,p){let{data:T}=m;return E.$$set=u=>{"data"in u&&p(0,T=u.data)},[T]}class St extends bt{constructor(m){super(),wt(this,m,zt,Dt,Pt,{data:0})}}export{St as component};
