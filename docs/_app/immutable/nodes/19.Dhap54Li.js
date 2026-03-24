import{s as Tt,b as yt}from"../chunks/scheduler.BjkBv5nx.js";import{S as Pt,i as Lt,t as o,c as H,k as m,a,b as j,l as p,n as $,q as rt,d as r,m as S,e as k,f as I,g as l,h as D}from"../chunks/index.BT_eMuJg.js";import{A as bt}from"../chunks/Anchor.DPTg1Ks6.js";import{C as lt}from"../chunks/Code.UvG0J7Qo.js";import{P as Mt}from"../chunks/PageTitle.B4Kkee_P.js";import{P as qt}from"../chunks/ParameterList.CApmv983.js";function At(f){let s;return{c(){s=o("x1,y1,z1|x2,y2,z2|x3,y3,z3|x4,y4,z4|x5,y5,z5|x6,y6,z6|x7,y7,z7|x8,y8,z8")},l(n){s=a(n,"x1,y1,z1|x2,y2,z2|x3,y3,z3|x4,y4,z4|x5,y5,z5|x6,y6,z6|x7,y7,z7|x8,y8,z8")},m(n,i){r(n,s,i)},d(n){n&&l(s)}}}function Ht(f){let s;return{c(){s=o("Diagonal Walls")},l(n){s=a(n,"Diagonal Walls")},m(n,i){r(n,s,i)},d(n){n&&l(s)}}}function jt(f){let s;return{c(){s=o("vtx(x4:-.5,-.5),side(+0,+1,connect:se),-1#top(A2,0,0)")},l(n){s=a(n,"vtx(x4:-.5,-.5),side(+0,+1,connect:se),-1#top(A2,0,0)")},m(n,i){r(n,s,i)},d(n){n&&l(s)}}}function St(f){let s;return{c(){s=o("Slopes")},l(n){s=a(n,"Slopes")},m(n,i){r(n,s,i)},d(n){n&&l(s)}}}function kt(f){let s;return{c(){s=o("slope(1)")},l(n){s=a(n,"slope(1)")},m(n,i){r(n,s,i)},d(n){n&&l(s)}}}function It(f){let s;return{c(){s=o("vtx(z7:1|z8:1)")},l(n){s=a(n,"vtx(z7:1|z8:1)")},m(n,i){r(n,s,i)},d(n){n&&l(s)}}}function Dt(f){let s,n,i,v,st=`\r
    Vertex offsets are a powerful feature that let you adjust the positions of the verteces of a tile. Each tile has a total of 8 corners which can be adjusted, allowing things such as hills, slopes, and even diagonal walls.\r
`,E,w,ot="The eight corners are as follows:",G,g,at=`
    <tr>
        <td>corner 1:</td>
        <td>bottom northwest</td>
    </tr>
    <tr>
        <td>corner 2:</td>
        <td>bottom northeast</td>
    </tr>
    <tr>
        <td>corner 3:</td>
        <td>bottom southwest</td>
    </tr>
    <tr>
        <td>corner 4:</td>
        <td>bottom southeast</td>
    </tr>
    <tr>
        <td>corner 5:</td>
        <td>top northwest</td>
    </tr>
    <tr>
        <td>corner 6:</td>
        <td>top northeast</td>
    </tr>
    <tr>
        <td>corner 7:</td>
        <td>top southwest</td>
    </tr>
    <tr>
        <td>corner 8:</td>
        <td>top southeast</td>
    </tr>
`,O,C,it=`\r
    The vtx function takes parameters for each of these 8 corners, for each of the x, y, and z axes.\r
`,V,u,W,c,B,z,ft,R,y,mt=`\r
    Diagonal walls are achieved by taking one of the corners of the tile and moving it to the center.\r
`,F,b,pt="Example:",J,h,K,T,$t=`\r
    The vtx command takes corner 4 (the sourtheast corner) and moves it to the center of the tile. This creates the basic shape for the diagonal wall.\r
`,N,P,ut=`
    In the side command, we&#39;re both choosing a new texture for the side (+0,+1 is one tile down on the tileset), but we&#39;re also setting the connection mode. <code>connect:se</code> means the southeast corner should have the texture be &quot;connected&quot;, this prevents the autotile from using a corner texture here.
`,Q,L,ct=`
    <code>-1#</code> indicates a new Configuration Layer (a new feature in Rewrite). This creates a new layer that we can configure. -1 means it will be below the default layer. This layer will just be a basic floor texture with <code>top(A2,0,0)</code>. Otherwise, our vertex offset will leave a hole in the floor. Alternatively, if we have the floor on a different tile layer already then we don&#39;t need this part.
`,U,x,X,M,ht,Y,q,xt=`\r
    Internally, the Slope command uses vertex offsets. The two following configurations should have roughly the same result. Although, the slope command has some additional features for the direction of the slope.\r
`,Z,d,tt,_,et,A,dt=`
    <code>z7</code> and <code>z8</code> are the top southwest and top southeast corners, each of which we&#39;re moving up (z) by 1.
`,nt;return n=new Mt({props:{title:"Vertex Offsets"}}),u=new qt({props:{$$slots:{default:[At]},$$scope:{ctx:f}}}),c=new bt({props:{h2:!0,id:"diagonal-walls",$$slots:{default:[Ht]},$$scope:{ctx:f}}}),h=new lt({props:{$$slots:{default:[jt]},$$scope:{ctx:f}}}),x=new bt({props:{h2:!0,id:"slopes",$$slots:{default:[St]},$$scope:{ctx:f}}}),d=new lt({props:{$$slots:{default:[kt]},$$scope:{ctx:f}}}),_=new lt({props:{$$slots:{default:[It]},$$scope:{ctx:f}}}),{c(){s=o(`\r
\r
`),H(n.$$.fragment),i=o(`\r
\r
`),v=m("p"),v.textContent=st,E=o(`\r
\r
`),w=m("p"),w.textContent=ot,G=o(`\r
`),g=m("table"),g.innerHTML=at,O=o(`\r
\r
`),C=m("p"),C.textContent=it,V=o(`\r
`),H(u.$$.fragment),W=o(`\r
\r
`),H(c.$$.fragment),B=o(`\r
\r
`),z=m("img"),R=o(`\r
\r
`),y=m("p"),y.textContent=mt,F=o(`\r
`),b=m("p"),b.textContent=pt,J=o(`\r
`),H(h.$$.fragment),K=o(`\r
`),T=m("p"),T.textContent=$t,N=o(`\r
`),P=m("p"),P.innerHTML=ut,Q=o(`\r
`),L=m("p"),L.innerHTML=ct,U=o(`\r
\r
`),H(x.$$.fragment),X=o(`\r
\r
`),M=m("img"),Y=o(`\r
\r
`),q=m("p"),q.textContent=xt,Z=o(`\r
`),H(d.$$.fragment),tt=o(`\r
`),H(_.$$.fragment),et=o(`\r
`),A=m("p"),A.innerHTML=dt,this.h()},l(t){s=a(t,`\r
\r
`),j(n.$$.fragment,t),i=a(t,`\r
\r
`),v=p(t,"P",{"data-svelte-h":!0}),$(v)!=="svelte-1hjinl2"&&(v.textContent=st),E=a(t,`\r
\r
`),w=p(t,"P",{"data-svelte-h":!0}),$(w)!=="svelte-104phxo"&&(w.textContent=ot),G=a(t,`\r
`),g=p(t,"TABLE",{"data-svelte-h":!0}),$(g)!=="svelte-ifis7y"&&(g.innerHTML=at),O=a(t,`\r
\r
`),C=p(t,"P",{"data-svelte-h":!0}),$(C)!=="svelte-ttjasq"&&(C.textContent=it),V=a(t,`\r
`),j(u.$$.fragment,t),W=a(t,`\r
\r
`),j(c.$$.fragment,t),B=a(t,`\r
\r
`),z=p(t,"IMG",{src:!0,alt:!0}),R=a(t,`\r
\r
`),y=p(t,"P",{"data-svelte-h":!0}),$(y)!=="svelte-1v0g8gf"&&(y.textContent=mt),F=a(t,`\r
`),b=p(t,"P",{"data-svelte-h":!0}),$(b)!=="svelte-11lpom8"&&(b.textContent=pt),J=a(t,`\r
`),j(h.$$.fragment,t),K=a(t,`\r
`),T=p(t,"P",{"data-svelte-h":!0}),$(T)!=="svelte-xa7h4f"&&(T.textContent=$t),N=a(t,`\r
`),P=p(t,"P",{"data-svelte-h":!0}),$(P)!=="svelte-xolviq"&&(P.innerHTML=ut),Q=a(t,`\r
`),L=p(t,"P",{"data-svelte-h":!0}),$(L)!=="svelte-1e131c6"&&(L.innerHTML=ct),U=a(t,`\r
\r
`),j(x.$$.fragment,t),X=a(t,`\r
\r
`),M=p(t,"IMG",{src:!0,alt:!0}),Y=a(t,`\r
\r
`),q=p(t,"P",{"data-svelte-h":!0}),$(q)!=="svelte-jqzn64"&&(q.textContent=xt),Z=a(t,`\r
`),j(d.$$.fragment,t),tt=a(t,`\r
`),j(_.$$.fragment,t),et=a(t,`\r
`),A=p(t,"P",{"data-svelte-h":!0}),$(A)!=="svelte-52pg4n"&&(A.innerHTML=dt),this.h()},h(){yt(z.src,ft="/img/examples/vtx-diagonal-walls.png")||rt(z,"src",ft),rt(z,"alt",""),yt(M.src,ht="/img/examples/vtx-slopes.png")||rt(M,"src",ht),rt(M,"alt","")},m(t,e){r(t,s,e),S(n,t,e),r(t,i,e),r(t,v,e),r(t,E,e),r(t,w,e),r(t,G,e),r(t,g,e),r(t,O,e),r(t,C,e),r(t,V,e),S(u,t,e),r(t,W,e),S(c,t,e),r(t,B,e),r(t,z,e),r(t,R,e),r(t,y,e),r(t,F,e),r(t,b,e),r(t,J,e),S(h,t,e),r(t,K,e),r(t,T,e),r(t,N,e),r(t,P,e),r(t,Q,e),r(t,L,e),r(t,U,e),S(x,t,e),r(t,X,e),r(t,M,e),r(t,Y,e),r(t,q,e),r(t,Z,e),S(d,t,e),r(t,tt,e),S(_,t,e),r(t,et,e),r(t,A,e),nt=!0},p(t,[e]){const _t={};e&1&&(_t.$$scope={dirty:e,ctx:t}),u.$set(_t);const vt={};e&1&&(vt.$$scope={dirty:e,ctx:t}),c.$set(vt);const wt={};e&1&&(wt.$$scope={dirty:e,ctx:t}),h.$set(wt);const gt={};e&1&&(gt.$$scope={dirty:e,ctx:t}),x.$set(gt);const Ct={};e&1&&(Ct.$$scope={dirty:e,ctx:t}),d.$set(Ct);const zt={};e&1&&(zt.$$scope={dirty:e,ctx:t}),_.$set(zt)},i(t){nt||(k(n.$$.fragment,t),k(u.$$.fragment,t),k(c.$$.fragment,t),k(h.$$.fragment,t),k(x.$$.fragment,t),k(d.$$.fragment,t),k(_.$$.fragment,t),nt=!0)},o(t){I(n.$$.fragment,t),I(u.$$.fragment,t),I(c.$$.fragment,t),I(h.$$.fragment,t),I(x.$$.fragment,t),I(d.$$.fragment,t),I(_.$$.fragment,t),nt=!1},d(t){t&&(l(s),l(i),l(v),l(E),l(w),l(G),l(g),l(O),l(C),l(V),l(W),l(B),l(z),l(R),l(y),l(F),l(b),l(J),l(K),l(T),l(N),l(P),l(Q),l(L),l(U),l(X),l(M),l(Y),l(q),l(Z),l(tt),l(et),l(A)),D(n,t),D(u,t),D(c,t),D(h,t),D(x,t),D(d,t),D(_,t)}}}class Rt extends Pt{constructor(s){super(),Lt(this,s,null,Dt,Tt,{})}}export{Rt as component};
