import{s as Pt}from"../chunks/scheduler.BjkBv5nx.js";import{S as bt,i as wt,t as r,c as D,k as s,a as l,b as z,l as o,n as y,o as O,g as n,d as a,m as B,p as i,s as yt,e as I,f as A,h as R}from"../chunks/index.BT_eMuJg.js";import{A as Et}from"../chunks/Anchor.DPTg1Ks6.js";import{I as et}from"../chunks/Img.CZ6ZAp8Z.js";import{P as Ht}from"../chunks/PageTitle.DTA_6V-l.js";function Mt(E){let m;return{c(){m=r("Example LUT Textures")},l(p){m=l(p,"Example LUT Textures")},m(p,T){a(p,m,T)},d(p){p&&n(m)}}}function Dt(E){let m,p,T,u,$t=`\r
    "LUT" is an abbreviation for "Look Up Table". LUT textures are used to map from one color to another.\r
`,W,c,ht=`\r
    You can use LUT textures to fine-tune and adjust the colors in your game, or you can use them to create some cool effects.\r
`,Y,v,ct="When defining a texture, you can specify the <code>lut</code> parameter to use a LUT texture.",F,L,vt=`
    Example: <code>texture(lut:lut-inverted)</code>
`,G,g,nt,H,Lt="lut-inverted.png",rt,k=E[0].pluginName.toUpperCase()+"",J,lt,K,h,Q,f,at,M,Ct="(no filter)",it,st,C,ot,V,x,pt,mt,U,ft,X,_,ut,gt,P,dt,Z,$,Tt,xt,b,_t,tt,w,Ut=`
    Also see Babylon&#39;s documentation on <a href="https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses/#color-correction" target="_blank">Color Correction</a>. 
`,S;return p=new Ht({props:{title:"LUT Textures"}}),h=new Et({props:{h2:!0,id:"example-luts",$$slots:{default:[Mt]},$$scope:{ctx:E}}}),C=new et({props:{src:"/img/lut/lut.png",alt:"Default LUT",width:"256",height:"16"}}),U=new et({props:{src:"/img/lut/lut-inverted.png",alt:"Inverted LUT",width:"256",height:"16"}}),P=new et({props:{src:"/img/lut/lut-posterized.png",alt:"Posterized LUT",width:"256",height:"16"}}),b=new et({props:{src:"/img/lut/lut-highcontrast.png",alt:"High Contrast LUT",width:"256",height:"16"}}),{c(){m=r(`\r
\r
`),D(p.$$.fragment),T=r(`\r
\r
`),u=s("p"),u.textContent=$t,W=r(`\r
`),c=s("p"),c.textContent=ht,Y=r(`\r
`),v=s("p"),v.innerHTML=ct,F=r(`\r
`),L=s("p"),L.innerHTML=vt,G=r(`\r
`),g=s("p"),nt=r(`\r
    This will load the `),H=s("code"),H.textContent=Lt,rt=r(" image from the "),J=r(k),lt=r(` folder. The file extension is optional and will default to png.\r
`),K=r(`\r
`),D(h.$$.fragment),Q=r(`\r
`),f=s("p"),at=r(`\r
    Default LUT `),M=s("small"),M.textContent=Ct,it=r(`\r
    `),st=s("br"),D(C.$$.fragment),ot=r(`\r
`),V=r(`\r
`),x=s("p"),pt=r(`\r
    Inverted LUT\r
    `),mt=s("br"),D(U.$$.fragment),ft=r(`\r
`),X=r(`\r
`),_=s("p"),ut=r(`\r
    Posterized LUT\r
    `),gt=s("br"),D(P.$$.fragment),dt=r(`\r
`),Z=r(`\r
`),$=s("p"),Tt=r(`\r
    High Contrast LUT\r
    `),xt=s("br"),D(b.$$.fragment),_t=r(`\r
`),tt=r(`\r
`),w=s("p"),w.innerHTML=Ut},l(t){m=l(t,`\r
\r
`),z(p.$$.fragment,t),T=l(t,`\r
\r
`),u=o(t,"P",{"data-svelte-h":!0}),y(u)!=="svelte-4m3lg9"&&(u.textContent=$t),W=l(t,`\r
`),c=o(t,"P",{"data-svelte-h":!0}),y(c)!=="svelte-7uh159"&&(c.textContent=ht),Y=l(t,`\r
`),v=o(t,"P",{"data-svelte-h":!0}),y(v)!=="svelte-n6887n"&&(v.innerHTML=ct),F=l(t,`\r
`),L=o(t,"P",{"data-svelte-h":!0}),y(L)!=="svelte-1iw3l29"&&(L.innerHTML=vt),G=l(t,`\r
`),g=o(t,"P",{});var e=O(g);nt=l(e,`\r
    This will load the `),H=o(e,"CODE",{"data-svelte-h":!0}),y(H)!=="svelte-z2ctg"&&(H.textContent=Lt),rt=l(e," image from the "),J=l(e,k),lt=l(e,` folder. The file extension is optional and will default to png.\r
`),e.forEach(n),K=l(t,`\r
`),z(h.$$.fragment,t),Q=l(t,`\r
`),f=o(t,"P",{});var d=O(f);at=l(d,`\r
    Default LUT `),M=o(d,"SMALL",{"data-svelte-h":!0}),y(M)!=="svelte-lp3ggg"&&(M.textContent=Ct),it=l(d,`\r
    `),st=o(d,"BR",{}),z(C.$$.fragment,d),ot=l(d,`\r
`),d.forEach(n),V=l(t,`\r
`),x=o(t,"P",{});var j=O(x);pt=l(j,`\r
    Inverted LUT\r
    `),mt=o(j,"BR",{}),z(U.$$.fragment,j),ft=l(j,`\r
`),j.forEach(n),X=l(t,`\r
`),_=o(t,"P",{});var N=O(_);ut=l(N,`\r
    Posterized LUT\r
    `),gt=o(N,"BR",{}),z(P.$$.fragment,N),dt=l(N,`\r
`),N.forEach(n),Z=l(t,`\r
`),$=o(t,"P",{});var q=O($);Tt=l(q,`\r
    High Contrast LUT\r
    `),xt=o(q,"BR",{}),z(b.$$.fragment,q),_t=l(q,`\r
`),q.forEach(n),tt=l(t,`\r
`),w=o(t,"P",{"data-svelte-h":!0}),y(w)!=="svelte-18rmyyi"&&(w.innerHTML=Ut)},m(t,e){a(t,m,e),B(p,t,e),a(t,T,e),a(t,u,e),a(t,W,e),a(t,c,e),a(t,Y,e),a(t,v,e),a(t,F,e),a(t,L,e),a(t,G,e),a(t,g,e),i(g,nt),i(g,H),i(g,rt),i(g,J),i(g,lt),a(t,K,e),B(h,t,e),a(t,Q,e),a(t,f,e),i(f,at),i(f,M),i(f,it),i(f,st),B(C,f,null),i(f,ot),a(t,V,e),a(t,x,e),i(x,pt),i(x,mt),B(U,x,null),i(x,ft),a(t,X,e),a(t,_,e),i(_,ut),i(_,gt),B(P,_,null),i(_,dt),a(t,Z,e),a(t,$,e),i($,Tt),i($,xt),B(b,$,null),i($,_t),a(t,tt,e),a(t,w,e),S=!0},p(t,[e]){(!S||e&1)&&k!==(k=t[0].pluginName.toUpperCase()+"")&&yt(J,k);const d={};e&2&&(d.$$scope={dirty:e,ctx:t}),h.$set(d)},i(t){S||(I(p.$$.fragment,t),I(h.$$.fragment,t),I(C.$$.fragment,t),I(U.$$.fragment,t),I(P.$$.fragment,t),I(b.$$.fragment,t),S=!0)},o(t){A(p.$$.fragment,t),A(h.$$.fragment,t),A(C.$$.fragment,t),A(U.$$.fragment,t),A(P.$$.fragment,t),A(b.$$.fragment,t),S=!1},d(t){t&&(n(m),n(T),n(u),n(W),n(c),n(Y),n(v),n(F),n(L),n(G),n(g),n(K),n(Q),n(f),n(V),n(x),n(X),n(_),n(Z),n($),n(tt),n(w)),R(p,t),R(h,t),R(C),R(U),R(P),R(b)}}}function zt(E,m,p){let{data:T}=m;return E.$$set=u=>{"data"in u&&p(0,T=u.data)},[T]}class St extends bt{constructor(m){super(),wt(this,m,zt,Dt,Pt,{data:0})}}export{St as component};
