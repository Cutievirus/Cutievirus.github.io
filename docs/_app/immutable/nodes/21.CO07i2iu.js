import{s as Tt,b as yt}from"../chunks/scheduler.Cdu_wsp_.js";import{S as Pt,i as Lt,t as a,c as H,k as m,a as r,b as j,l as p,n as $,q as lt,d as l,m as S,e as k,f as I,g as s,h as D}from"../chunks/index.gwBTkKco.js";import{A as bt}from"../chunks/Anchor.Ct3bDT7x.js";import{C as st}from"../chunks/Code.j1pNgbFo.js";import{P as Mt}from"../chunks/PageTitle.BTvWZLGY.js";import{P as qt}from"../chunks/ParameterList.Q-Qm_bpW.js";function At(f){let o;return{c(){o=a("x1,y1,z1|x2,y2,z2|x3,y3,z3|x4,y4,z4|x5,y5,z5|x6,y6,z6|x7,y7,z7|x8,y8,z8")},l(n){o=r(n,"x1,y1,z1|x2,y2,z2|x3,y3,z3|x4,y4,z4|x5,y5,z5|x6,y6,z6|x7,y7,z7|x8,y8,z8")},m(n,i){l(n,o,i)},d(n){n&&s(o)}}}function Ht(f){let o;return{c(){o=a("Diagonal Walls")},l(n){o=r(n,"Diagonal Walls")},m(n,i){l(n,o,i)},d(n){n&&s(o)}}}function jt(f){let o;return{c(){o=a("vtx(x4:-.5,-.5),side(+0,+1,connect:se),-1#top(A2,0,0)")},l(n){o=r(n,"vtx(x4:-.5,-.5),side(+0,+1,connect:se),-1#top(A2,0,0)")},m(n,i){l(n,o,i)},d(n){n&&s(o)}}}function St(f){let o;return{c(){o=a("Slopes")},l(n){o=r(n,"Slopes")},m(n,i){l(n,o,i)},d(n){n&&s(o)}}}function kt(f){let o;return{c(){o=a("slope(1)")},l(n){o=r(n,"slope(1)")},m(n,i){l(n,o,i)},d(n){n&&s(o)}}}function It(f){let o;return{c(){o=a("vtx(z7:1|z8:1)")},l(n){o=r(n,"vtx(z7:1|z8:1)")},m(n,i){l(n,o,i)},d(n){n&&s(o)}}}function Dt(f){let o,n,i,v,ot=`
    Vertex offsets are a powerful feature that let you adjust the positions of the verteces of a tile. Each tile has a total of 8 corners which can be adjusted, allowing things such as hills, slopes, and even diagonal walls.
`,E,w,at="The eight corners are as follows:",G,g,rt=`
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
`,O,C,it=`
    The vtx function takes parameters for each of these 8 corners, for each of the x, y, and z axes.
`,V,u,W,c,B,z,ft,R,y,mt=`
    Diagonal walls are achieved by taking one of the corners of the tile and moving it to the center.
`,F,b,pt="Example:",J,h,K,T,$t=`
    The vtx command takes corner 4 (the sourtheast corner) and moves it to the center of the tile. This creates the basic shape for the diagonal wall.
`,N,P,ut=`
    In the side command, we&#39;re both choosing a new texture for the side (+0,+1 is one tile down on the tileset), but we&#39;re also setting the connection mode. <code>connect:se</code> means the southeast corner should have the texture be &quot;connected&quot;, this prevents the autotile from using a corner texture here.
`,Q,L,ct=`
    <code>-1#</code> indicates a new Configuration Layer (a new feature in Rewrite). This creates a new layer that we can configure. -1 means it will be below the default layer. This layer will just be a basic floor texture with <code>top(A2,0,0)</code>. Otherwise, our vertex offset will leave a hole in the floor. Alternatively, if we have the floor on a different tile layer already then we don&#39;t need this part.
`,U,x,X,M,ht,Y,q,xt=`
    Internally, the Slope command uses vertex offsets. The two following configurations should have roughly the same result. Although, the slope command has some additional features for the direction of the slope.
`,Z,d,tt,_,et,A,dt=`
    <code>z7</code> and <code>z8</code> are the top southwest and top southeast corners, each of which we&#39;re moving up (z) by 1.
`,nt;return n=new Mt({props:{title:"Vertex Offsets"}}),u=new qt({props:{$$slots:{default:[At]},$$scope:{ctx:f}}}),c=new bt({props:{h2:!0,id:"diagonal-walls",$$slots:{default:[Ht]},$$scope:{ctx:f}}}),h=new st({props:{$$slots:{default:[jt]},$$scope:{ctx:f}}}),x=new bt({props:{h2:!0,id:"slopes",$$slots:{default:[St]},$$scope:{ctx:f}}}),d=new st({props:{$$slots:{default:[kt]},$$scope:{ctx:f}}}),_=new st({props:{$$slots:{default:[It]},$$scope:{ctx:f}}}),{c(){o=a(`

`),H(n.$$.fragment),i=a(`

`),v=m("p"),v.textContent=ot,E=a(`

`),w=m("p"),w.textContent=at,G=a(`
`),g=m("table"),g.innerHTML=rt,O=a(`

`),C=m("p"),C.textContent=it,V=a(`
`),H(u.$$.fragment),W=a(`

`),H(c.$$.fragment),B=a(`

`),z=m("img"),R=a(`

`),y=m("p"),y.textContent=mt,F=a(`
`),b=m("p"),b.textContent=pt,J=a(`
`),H(h.$$.fragment),K=a(`
`),T=m("p"),T.textContent=$t,N=a(`
`),P=m("p"),P.innerHTML=ut,Q=a(`
`),L=m("p"),L.innerHTML=ct,U=a(`

`),H(x.$$.fragment),X=a(`

`),M=m("img"),Y=a(`

`),q=m("p"),q.textContent=xt,Z=a(`
`),H(d.$$.fragment),tt=a(`
`),H(_.$$.fragment),et=a(`
`),A=m("p"),A.innerHTML=dt,this.h()},l(t){o=r(t,`

`),j(n.$$.fragment,t),i=r(t,`

`),v=p(t,"P",{"data-svelte-h":!0}),$(v)!=="svelte-1hjinl2"&&(v.textContent=ot),E=r(t,`

`),w=p(t,"P",{"data-svelte-h":!0}),$(w)!=="svelte-104phxo"&&(w.textContent=at),G=r(t,`
`),g=p(t,"TABLE",{"data-svelte-h":!0}),$(g)!=="svelte-ifis7y"&&(g.innerHTML=rt),O=r(t,`

`),C=p(t,"P",{"data-svelte-h":!0}),$(C)!=="svelte-ttjasq"&&(C.textContent=it),V=r(t,`
`),j(u.$$.fragment,t),W=r(t,`

`),j(c.$$.fragment,t),B=r(t,`

`),z=p(t,"IMG",{src:!0,alt:!0}),R=r(t,`

`),y=p(t,"P",{"data-svelte-h":!0}),$(y)!=="svelte-1v0g8gf"&&(y.textContent=mt),F=r(t,`
`),b=p(t,"P",{"data-svelte-h":!0}),$(b)!=="svelte-11lpom8"&&(b.textContent=pt),J=r(t,`
`),j(h.$$.fragment,t),K=r(t,`
`),T=p(t,"P",{"data-svelte-h":!0}),$(T)!=="svelte-xa7h4f"&&(T.textContent=$t),N=r(t,`
`),P=p(t,"P",{"data-svelte-h":!0}),$(P)!=="svelte-xolviq"&&(P.innerHTML=ut),Q=r(t,`
`),L=p(t,"P",{"data-svelte-h":!0}),$(L)!=="svelte-1e131c6"&&(L.innerHTML=ct),U=r(t,`

`),j(x.$$.fragment,t),X=r(t,`

`),M=p(t,"IMG",{src:!0,alt:!0}),Y=r(t,`

`),q=p(t,"P",{"data-svelte-h":!0}),$(q)!=="svelte-jqzn64"&&(q.textContent=xt),Z=r(t,`
`),j(d.$$.fragment,t),tt=r(t,`
`),j(_.$$.fragment,t),et=r(t,`
`),A=p(t,"P",{"data-svelte-h":!0}),$(A)!=="svelte-52pg4n"&&(A.innerHTML=dt),this.h()},h(){yt(z.src,ft="/img/examples/vtx-diagonal-walls.png")||lt(z,"src",ft),lt(z,"alt",""),yt(M.src,ht="/img/examples/vtx-slopes.png")||lt(M,"src",ht),lt(M,"alt","")},m(t,e){l(t,o,e),S(n,t,e),l(t,i,e),l(t,v,e),l(t,E,e),l(t,w,e),l(t,G,e),l(t,g,e),l(t,O,e),l(t,C,e),l(t,V,e),S(u,t,e),l(t,W,e),S(c,t,e),l(t,B,e),l(t,z,e),l(t,R,e),l(t,y,e),l(t,F,e),l(t,b,e),l(t,J,e),S(h,t,e),l(t,K,e),l(t,T,e),l(t,N,e),l(t,P,e),l(t,Q,e),l(t,L,e),l(t,U,e),S(x,t,e),l(t,X,e),l(t,M,e),l(t,Y,e),l(t,q,e),l(t,Z,e),S(d,t,e),l(t,tt,e),S(_,t,e),l(t,et,e),l(t,A,e),nt=!0},p(t,[e]){const _t={};e&1&&(_t.$$scope={dirty:e,ctx:t}),u.$set(_t);const vt={};e&1&&(vt.$$scope={dirty:e,ctx:t}),c.$set(vt);const wt={};e&1&&(wt.$$scope={dirty:e,ctx:t}),h.$set(wt);const gt={};e&1&&(gt.$$scope={dirty:e,ctx:t}),x.$set(gt);const Ct={};e&1&&(Ct.$$scope={dirty:e,ctx:t}),d.$set(Ct);const zt={};e&1&&(zt.$$scope={dirty:e,ctx:t}),_.$set(zt)},i(t){nt||(k(n.$$.fragment,t),k(u.$$.fragment,t),k(c.$$.fragment,t),k(h.$$.fragment,t),k(x.$$.fragment,t),k(d.$$.fragment,t),k(_.$$.fragment,t),nt=!0)},o(t){I(n.$$.fragment,t),I(u.$$.fragment,t),I(c.$$.fragment,t),I(h.$$.fragment,t),I(x.$$.fragment,t),I(d.$$.fragment,t),I(_.$$.fragment,t),nt=!1},d(t){t&&(s(o),s(i),s(v),s(E),s(w),s(G),s(g),s(O),s(C),s(V),s(W),s(B),s(z),s(R),s(y),s(F),s(b),s(J),s(K),s(T),s(N),s(P),s(Q),s(L),s(U),s(X),s(M),s(Y),s(q),s(Z),s(tt),s(et),s(A)),D(n,t),D(u,t),D(c,t),D(h,t),D(x,t),D(d,t),D(_,t)}}}class Rt extends Pt{constructor(o){super(),Lt(this,o,null,Dt,Tt,{})}}export{Rt as component};
