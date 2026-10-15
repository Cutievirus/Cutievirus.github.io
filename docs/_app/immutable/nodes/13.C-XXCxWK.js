import{s as Ct,n as xt}from"../chunks/scheduler.Cdu_wsp_.js";import{S as wt,i as vt,t as f,c as h,k as v,a as o,b as g,l as P,n as T,o as Je,g as l,d as s,m as d,p as Pe,e as b,f as x,h as C,q as Pt}from"../chunks/index.gwBTkKco.js";import{A as W}from"../chunks/Anchor.Ct3bDT7x.js";import{C as je}from"../chunks/Code.j1pNgbFo.js";import{L as Ke}from"../chunks/Link.DqQNm6cE.js";import{P as kt}from"../chunks/PageTitle.BTvWZLGY.js";import{V as bt}from"../chunks/Version.B286Izlg.js";import{P as we}from"../chunks/ParameterList.Q-Qm_bpW.js";function St(i){let n;return{c(){n=f("Light Function")},l(t){n=o(t,"Light Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Ft(i){let n,t,r="color",u,c,F="color",S;return{c(){n=f("light("),t=v("samp"),t.textContent=r,u=f(`)
ambient(`),c=v("samp"),c.textContent=F,S=f(")")},l(w){n=o(w,"light("),t=P(w,"SAMP",{"data-svelte-h":!0}),T(t)!=="svelte-168vm1j"&&(t.textContent=r),u=o(w,`)
ambient(`),c=P(w,"SAMP",{"data-svelte-h":!0}),T(c)!=="svelte-168vm1j"&&(c.textContent=F),S=o(w,")")},m(w,_){s(w,n,_),s(w,t,_),s(w,u,_),s(w,c,_),s(w,S,_)},p:xt,d(w){w&&(l(n),l(t),l(u),l(c),l(S))}}}function Tt(i){let n;return{c(){n=f("Sun Function")},l(t){n=o(t,"Sun Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function jt(i){let n;return{c(){n=f("color|yaw,pitch")},l(t){n=o(t,"color|yaw,pitch")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Et(i){let n;return{c(){n=f("sun(orange), sun(white|45,45)")},l(t){n=o(t,"sun(orange), sun(white|45,45)")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Mt(i){let n,t,r,u,c=`
        The sun function sets the color and angle of the sunlight for the map.
    `,F,S,w,_,V,B;return t=new W({props:{h2:!0,id:"sun",$$slots:{default:[Tt]},$$scope:{ctx:i}}}),S=new we({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),_=new je({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){n=f(`
    `),h(t.$$.fragment),r=f(`
    `),u=v("p"),u.textContent=c,F=f(`
    Parameters:
    `),h(S.$$.fragment),w=f(`
    Examples:
    `),h(_.$$.fragment),V=f(`
`)},l(m){n=o(m,`
    `),g(t.$$.fragment,m),r=o(m,`
    `),u=P(m,"P",{"data-svelte-h":!0}),T(u)!=="svelte-d9ofwy"&&(u.textContent=c),F=o(m,`
    Parameters:
    `),g(S.$$.fragment,m),w=o(m,`
    Examples:
    `),g(_.$$.fragment,m),V=o(m,`
`)},m(m,k){s(m,n,k),d(t,m,k),s(m,r,k),s(m,u,k),s(m,F,k),d(S,m,k),s(m,w,k),d(_,m,k),s(m,V,k),B=!0},p(m,k){const j={};k&4&&(j.$$scope={dirty:k,ctx:m}),t.$set(j);const Y={};k&4&&(Y.$$scope={dirty:k,ctx:m}),S.$set(Y);const E={};k&4&&(E.$$scope={dirty:k,ctx:m}),_.$set(E)},i(m){B||(b(t.$$.fragment,m),b(S.$$.fragment,m),b(_.$$.fragment,m),B=!0)},o(m){x(t.$$.fragment,m),x(S.$$.fragment,m),x(_.$$.fragment,m),B=!1},d(m){m&&(l(n),l(r),l(u),l(F),l(w),l(V)),C(t,m),C(S,m),C(_,m)}}}function Lt(i){let n;return{c(){n=f("Fog Function")},l(t){n=o(t,"Fog Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Ht(i){let n;return{c(){n=f("color|near,far")},l(t){n=o(t,"color|near,far")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function At(i){let n;return{c(){n=f("Camera Function")},l(t){n=o(t,"Camera Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function yt(i){let n;return{c(){n=f("yaw,pitch|dist|height|mode")},l(t){n=o(t,"yaw,pitch|dist|height|mode")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function zt(i){let n;return{c(){n=f(`camera(0,70|5|0.5|p)
camera(45,60|10|0|o)
camera(mode:2d)`)},l(t){n=o(t,`camera(0,70|5|0.5|p)
camera(45,60|10|0|o)
camera(mode:2d)`)},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function qt(i){let n;return{c(){n=f("Ceiling Function")},l(t){n=o(t,"Ceiling Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Bt(i){let n;return{c(){n=f("Texture Function")},l(t){n=o(t,"Texture Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Dt(i){let n;return{c(){n=f("img,x,y,w,h|height,backface|alpha|glow,glowintensity|anim:animx,animy")},l(t){n=o(t,"img,x,y,w,h|height,backface|alpha|glow,glowintensity|anim:animx,animy")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Yt(i){let n;return{c(){n=f("Edge Function")},l(t){n=o(t,"Edge Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Ut(i){let n;return{c(){n=f("Base Function")},l(t){n=o(t,"Base Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Wt(i){let n,t,r="n",u;return{c(){n=f("base("),t=v("samp"),t.textContent=r,u=f(")"),this.h()},l(c){n=o(c,"base("),t=P(c,"SAMP",{title:!0,"data-svelte-h":!0}),T(t)!=="svelte-11z14xk"&&(t.textContent=r),u=o(c,")"),this.h()},h(){Pt(t,"title","number")},m(c,F){s(c,n,F),s(c,t,F),s(c,u,F)},p:xt,d(c){c&&(l(n),l(t),l(u))}}}function Vt(i){let n;return{c(){n=f("Bloom Function")},l(t){n=o(t,"Bloom Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Ot(i){let n;return{c(){n=f("Set Command")},l(t){n=o(t,"Set Command")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Gt(i){let n;return{c(){n=f("intensity,threshold,radius")},l(t){n=o(t,"intensity,threshold,radius")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function It(i){let n;return{c(){n=f("Skybox and Skyball Functions")},l(t){n=o(t,"Skybox and Skyball Functions")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Jt(i){let n;return{c(){n=f("Skybox Function")},l(t){n=o(t,"Skybox Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Kt(i){let n;return{c(){n=f("default,top,bottom,north,west,south,east|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},l(t){n=o(t,"default,top,bottom,north,west,south,east|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Nt(i){let n;return{c(){n=f("Skyball Function")},l(t){n=o(t,"Skyball Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Qt(i){let n;return{c(){n=f("texture,repeat|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},l(t){n=o(t,"texture,repeat|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Rt(i){let n;return{c(){n=f("Skybox and Skyball Commands")},l(t){n=o(t,"Skybox and Skyball Commands")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function Xt(i){let n,t,r,u,c=`
        Adjusts the bloom effect for the map.
    `,F,S,w,_,V,B,m,k,j,Y,E,N,y,ke=`
        Sets up a skybox for the map.
    `,Q,M,R,z,Se="You can use the skybox function multiple times with different indexes to set up different layers.",X,L,Z,q,Fe=`
        The skyball function sets up a skyball for the map.
    `,ee,H,te,A,ve,D,O,pe,ne;return t=new W({props:{h2:!0,id:"bloom",$$slots:{default:[Vt]},$$scope:{ctx:i}}}),_=new Ke({props:{href:"plugin-commands#set",$$slots:{default:[Ot]},$$scope:{ctx:i}}}),m=new we({props:{$$slots:{default:[Gt]},$$scope:{ctx:i}}}),j=new W({props:{h2:!0,id:"skybox&skyball",$$slots:{default:[It]},$$scope:{ctx:i}}}),E=new W({props:{h3:!0,id:"skybox",$$slots:{default:[Jt]},$$scope:{ctx:i}}}),M=new we({props:{$$slots:{default:[Kt]},$$scope:{ctx:i}}}),L=new W({props:{h3:!0,id:"skyball",$$slots:{default:[Nt]},$$scope:{ctx:i}}}),H=new we({props:{$$slots:{default:[Qt]},$$scope:{ctx:i}}}),D=new Ke({props:{href:"plugin-commands#skybox&skyball",$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){n=f(`
    `),h(t.$$.fragment),r=f(`
    `),u=v("p"),u.textContent=c,F=f(`
    `),S=v("p"),w=f(`
        Most postprocessing effects are adjusted using the `),h(_.$$.fragment),V=f(`,
        but bloom settings might need to be adjusted for each map.
    `),B=f(`
    Parameters:
    `),h(m.$$.fragment),k=f(`

    `),h(j.$$.fragment),Y=f(`
    `),h(E.$$.fragment),N=f(`
    `),y=v("p"),y.textContent=ke,Q=f(`
    Parameters:
    `),h(M.$$.fragment),R=f(`
    `),z=v("p"),z.textContent=Se,X=f(`

    `),h(L.$$.fragment),Z=f(`
    `),q=v("p"),q.textContent=Fe,ee=f(`
    Parameters:
    `),h(H.$$.fragment),te=f(`
    `),A=v("p"),ve=f("For more info about skyboxes and skyballs, see the "),h(D.$$.fragment),O=f("."),pe=f(`
`)},l($){n=o($,`
    `),g(t.$$.fragment,$),r=o($,`
    `),u=P($,"P",{"data-svelte-h":!0}),T(u)!=="svelte-hvheb9"&&(u.textContent=c),F=o($,`
    `),S=P($,"P",{});var p=Je(S);w=o(p,`
        Most postprocessing effects are adjusted using the `),g(_.$$.fragment,p),V=o(p,`,
        but bloom settings might need to be adjusted for each map.
    `),p.forEach(l),B=o($,`
    Parameters:
    `),g(m.$$.fragment,$),k=o($,`

    `),g(j.$$.fragment,$),Y=o($,`
    `),g(E.$$.fragment,$),N=o($,`
    `),y=P($,"P",{"data-svelte-h":!0}),T(y)!=="svelte-q55tut"&&(y.textContent=ke),Q=o($,`
    Parameters:
    `),g(M.$$.fragment,$),R=o($,`
    `),z=P($,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1ljhj3j"&&(z.textContent=Se),X=o($,`

    `),g(L.$$.fragment,$),Z=o($,`
    `),q=P($,"P",{"data-svelte-h":!0}),T(q)!=="svelte-17nbqlg"&&(q.textContent=Fe),ee=o($,`
    Parameters:
    `),g(H.$$.fragment,$),te=o($,`
    `),A=P($,"P",{});var U=Je(A);ve=o(U,"For more info about skyboxes and skyballs, see the "),g(D.$$.fragment,U),O=o(U,"."),U.forEach(l),pe=o($,`
`)},m($,p){s($,n,p),d(t,$,p),s($,r,p),s($,u,p),s($,F,p),s($,S,p),Pe(S,w),d(_,S,null),Pe(S,V),s($,B,p),d(m,$,p),s($,k,p),d(j,$,p),s($,Y,p),d(E,$,p),s($,N,p),s($,y,p),s($,Q,p),d(M,$,p),s($,R,p),s($,z,p),s($,X,p),d(L,$,p),s($,Z,p),s($,q,p),s($,ee,p),d(H,$,p),s($,te,p),s($,A,p),Pe(A,ve),d(D,A,null),Pe(A,O),s($,pe,p),ne=!0},p($,p){const U={};p&4&&(U.$$scope={dirty:p,ctx:$}),t.$set(U);const J={};p&4&&(J.$$scope={dirty:p,ctx:$}),_.$set(J);const Te={};p&4&&(Te.$$scope={dirty:p,ctx:$}),m.$set(Te);const ue={};p&4&&(ue.$$scope={dirty:p,ctx:$}),j.$set(ue);const G={};p&4&&(G.$$scope={dirty:p,ctx:$}),E.$set(G);const ce={};p&4&&(ce.$$scope={dirty:p,ctx:$}),M.$set(ce);const I={};p&4&&(I.$$scope={dirty:p,ctx:$}),L.$set(I);const _e={};p&4&&(_e.$$scope={dirty:p,ctx:$}),H.$set(_e);const K={};p&4&&(K.$$scope={dirty:p,ctx:$}),D.$set(K)},i($){ne||(b(t.$$.fragment,$),b(_.$$.fragment,$),b(m.$$.fragment,$),b(j.$$.fragment,$),b(E.$$.fragment,$),b(M.$$.fragment,$),b(L.$$.fragment,$),b(H.$$.fragment,$),b(D.$$.fragment,$),ne=!0)},o($){x(t.$$.fragment,$),x(_.$$.fragment,$),x(m.$$.fragment,$),x(j.$$.fragment,$),x(E.$$.fragment,$),x(M.$$.fragment,$),x(L.$$.fragment,$),x(H.$$.fragment,$),x(D.$$.fragment,$),ne=!1},d($){$&&(l(n),l(r),l(u),l(F),l(S),l(B),l(k),l(Y),l(N),l(y),l(Q),l(R),l(z),l(X),l(Z),l(q),l(ee),l(te),l(A),l(pe)),C(t,$),C(_),C(m,$),C(j,$),C(E,$),C(M,$),C(L,$),C(H,$),C(D)}}}function Zt(i){let n;return{c(){n=f("Enable/Disable Function")},l(t){n=o(t,"Enable/Disable Function")},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function en(i){let n;return{c(){n=f(`enable()
disable()`)},l(t){n=o(t,`enable()
disable()`)},m(t,r){s(t,n,r)},d(t){t&&l(n)}}}function tn(i){let n,t,r,u,c,F,S=`
    The light function (and its alias the ambient function) sets the ambient light color for the map.
`,w,_,V='The color parameter can be a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">hex color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">named color</a>, or any other valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">css color</a>.',B,m,k,j,Y,E,N,y,ke=`
    The fog function sets the color and distance of the fog for the map.
`,Q,M,R,z,Se="Color is the color of the fog, and near and far are the distances where the fog starts and ends.",X,L,Z,q,Fe=`
    The camera function sets various properties of the camera when the map is loaded.
`,ee,H,te,A,ve=`
    Yaw and pitch are the initial camera angles. Yaw is rotation side to side, and pitch is up and down.
`,D,O,pe=`
    Dist is the distance from the camera to the character. Set this to zero for 1st person mode.
`,ne,$,p=`
    Height is a vertical offset from the character's position that the camera look at. The purpose of this is so the character's head or body can be in the center of the screen rather than their feet.
`,U,J,Te=`
    Mode is the initial camera mode. The options are "perspective", "orthographic", "2d". You only need to specify the first letter of the mode.
`,ue,G,ce,I,_e,K,Ne=`
    The ceiling function sets up a ceiling for the map. This is intended for interior maps.
`,Ee,le,Ge,se,Ie,Me,ae,Le,he,Qe=`
    The new parameters are height and backface. Height is the z position the ceiling will be at.
    <br/>Backface is whether the ceiling mesh should be double sided or not.
`,He,ge,Re="ceiling(A4,0,0|2,false)",Ae,$e,ye,de,Xe=`
    The edge function controls how the edges of the map will be treated.
`,ze,be,Ze=`
    <code>edge(true)</code> walls around the edge of the map will be rendered.
    <br/><code>edge(false)</code> walls around the edge of the map will not be rendered.
    <br/><code>edge(clamp)</code> tiles along the edge of the map will be repeated in areas outside the map.
    You can also specify a number to specify the number of tiles near the edge that will be repeated.
    For example, <code>edge(clamp,2)</code> will repeat the 2 tiles around the edge of the map.
`,qe,fe,Be,xe,et=`
    Sets a base height for the map. The base height will be added to the height of all tiles.
`,De,oe,Ye,re,Ue,ie,We,Ce,tt=`
    Enables or disables 3D rendering for the map.
`,Ve,me,Oe;return t=new kt({props:{title:"Map Configuration"}}),u=new W({props:{h2:!0,id:"light",$$slots:{default:[St]},$$scope:{ctx:i}}}),m=new je({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),j=new bt({props:{block:!0,premium:i[0],$$slots:{default:[Mt]},$$scope:{ctx:i}}}),E=new W({props:{h2:!0,id:"fog",$$slots:{default:[Lt]},$$scope:{ctx:i}}}),M=new we({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}}),L=new W({props:{h2:!0,id:"camera",$$slots:{default:[At]},$$scope:{ctx:i}}}),H=new we({props:{$$slots:{default:[yt]},$$scope:{ctx:i}}}),G=new je({props:{$$slots:{default:[zt]},$$scope:{ctx:i}}}),I=new W({props:{h2:!0,id:"ceiling",$$slots:{default:[qt]},$$scope:{ctx:i}}}),se=new Ke({props:{href:"tile-config#textures",$$slots:{default:[Bt]},$$scope:{ctx:i}}}),ae=new we({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),$e=new W({props:{h2:!0,id:"edge",$$slots:{default:[Yt]},$$scope:{ctx:i}}}),fe=new W({props:{h2:!0,id:"base",$$slots:{default:[Ut]},$$scope:{ctx:i}}}),oe=new je({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),re=new bt({props:{block:!0,premium:i[0],$$slots:{default:[Xt]},$$scope:{ctx:i}}}),ie=new W({props:{h2:!0,id:"enable",$$slots:{default:[Zt]},$$scope:{ctx:i}}}),me=new je({props:{$$slots:{default:[en]},$$scope:{ctx:i}}}),{c(){n=f(`

`),h(t.$$.fragment),r=f(`

`),h(u.$$.fragment),c=f(`
`),F=v("p"),F.textContent=S,w=f(`

`),_=v("p"),_.innerHTML=V,B=f(`

`),h(m.$$.fragment),k=f(`

`),h(j.$$.fragment),Y=f(`

`),h(E.$$.fragment),N=f(`
`),y=v("p"),y.textContent=ke,Q=f(`
Parameters:
`),h(M.$$.fragment),R=f(`
`),z=v("p"),z.textContent=Se,X=f(`

`),h(L.$$.fragment),Z=f(`
`),q=v("p"),q.textContent=Fe,ee=f(`
Parameters:
`),h(H.$$.fragment),te=f(`
`),A=v("p"),A.textContent=ve,D=f(`
`),O=v("p"),O.textContent=pe,ne=f(`
`),$=v("p"),$.textContent=p,U=f(`
`),J=v("p"),J.textContent=Te,ue=f(`
Examples:
`),h(G.$$.fragment),ce=f(`

`),h(I.$$.fragment),_e=f(`
`),K=v("p"),K.textContent=Ne,Ee=f(`
`),le=v("p"),Ge=f(`
    The ceiling function is a `),h(se.$$.fragment),Ie=f(` with an extra parameter group inserted as the second parameter group.
`),Me=f(`
Parameters:
`),h(ae.$$.fragment),Le=f(`
`),he=v("p"),he.innerHTML=Qe,He=f(`
Example: `),ge=v("code"),ge.textContent=Re,Ae=f(`

`),h($e.$$.fragment),ye=f(`
`),de=v("p"),de.textContent=Xe,ze=f(`
`),be=v("p"),be.innerHTML=Ze,qe=f(`

`),h(fe.$$.fragment),Be=f(`
`),xe=v("p"),xe.textContent=et,De=f(`
`),h(oe.$$.fragment),Ye=f(`

`),h(re.$$.fragment),Ue=f(`

`),h(ie.$$.fragment),We=f(`
`),Ce=v("p"),Ce.textContent=tt,Ve=f(`
`),h(me.$$.fragment)},l(e){n=o(e,`

`),g(t.$$.fragment,e),r=o(e,`

`),g(u.$$.fragment,e),c=o(e,`
`),F=P(e,"P",{"data-svelte-h":!0}),T(F)!=="svelte-1a1ep1l"&&(F.textContent=S),w=o(e,`

`),_=P(e,"P",{"data-svelte-h":!0}),T(_)!=="svelte-2x2t8q"&&(_.innerHTML=V),B=o(e,`

`),g(m.$$.fragment,e),k=o(e,`

`),g(j.$$.fragment,e),Y=o(e,`

`),g(E.$$.fragment,e),N=o(e,`
`),y=P(e,"P",{"data-svelte-h":!0}),T(y)!=="svelte-lyw8tk"&&(y.textContent=ke),Q=o(e,`
Parameters:
`),g(M.$$.fragment,e),R=o(e,`
`),z=P(e,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1me6f1p"&&(z.textContent=Se),X=o(e,`

`),g(L.$$.fragment,e),Z=o(e,`
`),q=P(e,"P",{"data-svelte-h":!0}),T(q)!=="svelte-hn5itw"&&(q.textContent=Fe),ee=o(e,`
Parameters:
`),g(H.$$.fragment,e),te=o(e,`
`),A=P(e,"P",{"data-svelte-h":!0}),T(A)!=="svelte-fmh28b"&&(A.textContent=ve),D=o(e,`
`),O=P(e,"P",{"data-svelte-h":!0}),T(O)!=="svelte-in3t2d"&&(O.textContent=pe),ne=o(e,`
`),$=P(e,"P",{"data-svelte-h":!0}),T($)!=="svelte-m4bnjp"&&($.textContent=p),U=o(e,`
`),J=P(e,"P",{"data-svelte-h":!0}),T(J)!=="svelte-givgjg"&&(J.textContent=Te),ue=o(e,`
Examples:
`),g(G.$$.fragment,e),ce=o(e,`

`),g(I.$$.fragment,e),_e=o(e,`
`),K=P(e,"P",{"data-svelte-h":!0}),T(K)!=="svelte-18geji3"&&(K.textContent=Ne),Ee=o(e,`
`),le=P(e,"P",{});var a=Je(le);Ge=o(a,`
    The ceiling function is a `),g(se.$$.fragment,a),Ie=o(a,` with an extra parameter group inserted as the second parameter group.
`),a.forEach(l),Me=o(e,`
Parameters:
`),g(ae.$$.fragment,e),Le=o(e,`
`),he=P(e,"P",{"data-svelte-h":!0}),T(he)!=="svelte-hovdpy"&&(he.innerHTML=Qe),He=o(e,`
Example: `),ge=P(e,"CODE",{"data-svelte-h":!0}),T(ge)!=="svelte-1x4sjo2"&&(ge.textContent=Re),Ae=o(e,`

`),g($e.$$.fragment,e),ye=o(e,`
`),de=P(e,"P",{"data-svelte-h":!0}),T(de)!=="svelte-1y5cgi7"&&(de.textContent=Xe),ze=o(e,`
`),be=P(e,"P",{"data-svelte-h":!0}),T(be)!=="svelte-ojfytk"&&(be.innerHTML=Ze),qe=o(e,`

`),g(fe.$$.fragment,e),Be=o(e,`
`),xe=P(e,"P",{"data-svelte-h":!0}),T(xe)!=="svelte-fxp0x0"&&(xe.textContent=et),De=o(e,`
`),g(oe.$$.fragment,e),Ye=o(e,`

`),g(re.$$.fragment,e),Ue=o(e,`

`),g(ie.$$.fragment,e),We=o(e,`
`),Ce=P(e,"P",{"data-svelte-h":!0}),T(Ce)!=="svelte-108inuh"&&(Ce.textContent=tt),Ve=o(e,`
`),g(me.$$.fragment,e)},m(e,a){s(e,n,a),d(t,e,a),s(e,r,a),d(u,e,a),s(e,c,a),s(e,F,a),s(e,w,a),s(e,_,a),s(e,B,a),d(m,e,a),s(e,k,a),d(j,e,a),s(e,Y,a),d(E,e,a),s(e,N,a),s(e,y,a),s(e,Q,a),d(M,e,a),s(e,R,a),s(e,z,a),s(e,X,a),d(L,e,a),s(e,Z,a),s(e,q,a),s(e,ee,a),d(H,e,a),s(e,te,a),s(e,A,a),s(e,D,a),s(e,O,a),s(e,ne,a),s(e,$,a),s(e,U,a),s(e,J,a),s(e,ue,a),d(G,e,a),s(e,ce,a),d(I,e,a),s(e,_e,a),s(e,K,a),s(e,Ee,a),s(e,le,a),Pe(le,Ge),d(se,le,null),Pe(le,Ie),s(e,Me,a),d(ae,e,a),s(e,Le,a),s(e,he,a),s(e,He,a),s(e,ge,a),s(e,Ae,a),d($e,e,a),s(e,ye,a),s(e,de,a),s(e,ze,a),s(e,be,a),s(e,qe,a),d(fe,e,a),s(e,Be,a),s(e,xe,a),s(e,De,a),d(oe,e,a),s(e,Ye,a),d(re,e,a),s(e,Ue,a),d(ie,e,a),s(e,We,a),s(e,Ce,a),s(e,Ve,a),d(me,e,a),Oe=!0},p(e,[a]){const nt={};a&4&&(nt.$$scope={dirty:a,ctx:e}),u.$set(nt);const lt={};a&4&&(lt.$$scope={dirty:a,ctx:e}),m.$set(lt);const st={};a&4&&(st.$$scope={dirty:a,ctx:e}),j.$set(st);const at={};a&4&&(at.$$scope={dirty:a,ctx:e}),E.$set(at);const $t={};a&4&&($t.$$scope={dirty:a,ctx:e}),M.$set($t);const ft={};a&4&&(ft.$$scope={dirty:a,ctx:e}),L.$set(ft);const ot={};a&4&&(ot.$$scope={dirty:a,ctx:e}),H.$set(ot);const rt={};a&4&&(rt.$$scope={dirty:a,ctx:e}),G.$set(rt);const it={};a&4&&(it.$$scope={dirty:a,ctx:e}),I.$set(it);const mt={};a&4&&(mt.$$scope={dirty:a,ctx:e}),se.$set(mt);const pt={};a&4&&(pt.$$scope={dirty:a,ctx:e}),ae.$set(pt);const ut={};a&4&&(ut.$$scope={dirty:a,ctx:e}),$e.$set(ut);const ct={};a&4&&(ct.$$scope={dirty:a,ctx:e}),fe.$set(ct);const _t={};a&4&&(_t.$$scope={dirty:a,ctx:e}),oe.$set(_t);const ht={};a&4&&(ht.$$scope={dirty:a,ctx:e}),re.$set(ht);const gt={};a&4&&(gt.$$scope={dirty:a,ctx:e}),ie.$set(gt);const dt={};a&4&&(dt.$$scope={dirty:a,ctx:e}),me.$set(dt)},i(e){Oe||(b(t.$$.fragment,e),b(u.$$.fragment,e),b(m.$$.fragment,e),b(j.$$.fragment,e),b(E.$$.fragment,e),b(M.$$.fragment,e),b(L.$$.fragment,e),b(H.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b($e.$$.fragment,e),b(fe.$$.fragment,e),b(oe.$$.fragment,e),b(re.$$.fragment,e),b(ie.$$.fragment,e),b(me.$$.fragment,e),Oe=!0)},o(e){x(t.$$.fragment,e),x(u.$$.fragment,e),x(m.$$.fragment,e),x(j.$$.fragment,e),x(E.$$.fragment,e),x(M.$$.fragment,e),x(L.$$.fragment,e),x(H.$$.fragment,e),x(G.$$.fragment,e),x(I.$$.fragment,e),x(se.$$.fragment,e),x(ae.$$.fragment,e),x($e.$$.fragment,e),x(fe.$$.fragment,e),x(oe.$$.fragment,e),x(re.$$.fragment,e),x(ie.$$.fragment,e),x(me.$$.fragment,e),Oe=!1},d(e){e&&(l(n),l(r),l(c),l(F),l(w),l(_),l(B),l(k),l(Y),l(N),l(y),l(Q),l(R),l(z),l(X),l(Z),l(q),l(ee),l(te),l(A),l(D),l(O),l(ne),l($),l(U),l(J),l(ue),l(ce),l(_e),l(K),l(Ee),l(le),l(Me),l(Le),l(he),l(He),l(ge),l(Ae),l(ye),l(de),l(ze),l(be),l(qe),l(Be),l(xe),l(De),l(Ye),l(Ue),l(We),l(Ce),l(Ve)),C(t,e),C(u,e),C(m,e),C(j,e),C(E,e),C(M,e),C(L,e),C(H,e),C(G,e),C(I,e),C(se),C(ae,e),C($e,e),C(fe,e),C(oe,e),C(re,e),C(ie,e),C(me,e)}}}function nn(i,n,t){let{data:r}=n,u=r.premium;return i.$$set=c=>{"data"in c&&t(1,r=c.data)},[u,r]}class pn extends wt{constructor(n){super(),vt(this,n,nn,tn,Ct,{data:1})}}export{pn as component};
