import{s as Ct,n as xt}from"../chunks/scheduler.BjkBv5nx.js";import{S as wt,i as vt,t as $,c as h,k as v,a as f,b as g,l as P,n as T,o as Je,g as r,d as l,m as d,p as Pe,e as b,f as x,h as C,q as Pt}from"../chunks/index.BT_eMuJg.js";import{A as W}from"../chunks/Anchor.DPTg1Ks6.js";import{C as je}from"../chunks/Code.UvG0J7Qo.js";import{L as Ke}from"../chunks/Link.DpGiBmhP.js";import{P as kt}from"../chunks/PageTitle.DTA_6V-l.js";import{V as bt}from"../chunks/Version.52FMOf3v.js";import{P as we}from"../chunks/ParameterList.CApmv983.js";function St(i){let n;return{c(){n=$("Light Function")},l(t){n=f(t,"Light Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Ft(i){let n,t,o="color",u,c,F="color",S;return{c(){n=$("light("),t=v("samp"),t.textContent=o,u=$(`)\r
ambient(`),c=v("samp"),c.textContent=F,S=$(")")},l(w){n=f(w,"light("),t=P(w,"SAMP",{"data-svelte-h":!0}),T(t)!=="svelte-168vm1j"&&(t.textContent=o),u=f(w,`)\r
ambient(`),c=P(w,"SAMP",{"data-svelte-h":!0}),T(c)!=="svelte-168vm1j"&&(c.textContent=F),S=f(w,")")},m(w,_){l(w,n,_),l(w,t,_),l(w,u,_),l(w,c,_),l(w,S,_)},p:xt,d(w){w&&(r(n),r(t),r(u),r(c),r(S))}}}function Tt(i){let n;return{c(){n=$("Sun Function")},l(t){n=f(t,"Sun Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function jt(i){let n;return{c(){n=$("color|yaw,pitch")},l(t){n=f(t,"color|yaw,pitch")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Et(i){let n;return{c(){n=$("sun(orange), sun(white|45,45)")},l(t){n=f(t,"sun(orange), sun(white|45,45)")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Mt(i){let n,t,o,u,c=`\r
        The sun function sets the color and angle of the sunlight for the map.\r
    `,F,S,w,_,V,B;return t=new W({props:{h2:!0,id:"sun",$$slots:{default:[Tt]},$$scope:{ctx:i}}}),S=new we({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),_=new je({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){n=$(`\r
    `),h(t.$$.fragment),o=$(`\r
    `),u=v("p"),u.textContent=c,F=$(`\r
    Parameters:\r
    `),h(S.$$.fragment),w=$(`\r
    Examples:\r
    `),h(_.$$.fragment),V=$(`\r
`)},l(m){n=f(m,`\r
    `),g(t.$$.fragment,m),o=f(m,`\r
    `),u=P(m,"P",{"data-svelte-h":!0}),T(u)!=="svelte-d9ofwy"&&(u.textContent=c),F=f(m,`\r
    Parameters:\r
    `),g(S.$$.fragment,m),w=f(m,`\r
    Examples:\r
    `),g(_.$$.fragment,m),V=f(m,`\r
`)},m(m,k){l(m,n,k),d(t,m,k),l(m,o,k),l(m,u,k),l(m,F,k),d(S,m,k),l(m,w,k),d(_,m,k),l(m,V,k),B=!0},p(m,k){const j={};k&4&&(j.$$scope={dirty:k,ctx:m}),t.$set(j);const Y={};k&4&&(Y.$$scope={dirty:k,ctx:m}),S.$set(Y);const E={};k&4&&(E.$$scope={dirty:k,ctx:m}),_.$set(E)},i(m){B||(b(t.$$.fragment,m),b(S.$$.fragment,m),b(_.$$.fragment,m),B=!0)},o(m){x(t.$$.fragment,m),x(S.$$.fragment,m),x(_.$$.fragment,m),B=!1},d(m){m&&(r(n),r(o),r(u),r(F),r(w),r(V)),C(t,m),C(S,m),C(_,m)}}}function Lt(i){let n;return{c(){n=$("Fog Function")},l(t){n=f(t,"Fog Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Ht(i){let n;return{c(){n=$("color|near,far")},l(t){n=f(t,"color|near,far")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function At(i){let n;return{c(){n=$("Camera Function")},l(t){n=f(t,"Camera Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function yt(i){let n;return{c(){n=$("yaw,pitch|dist|height|mode")},l(t){n=f(t,"yaw,pitch|dist|height|mode")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function zt(i){let n;return{c(){n=$(`camera(0,70|5|0.5|p)\r
camera(45,60|10|0|o)\r
camera(mode:2d)`)},l(t){n=f(t,`camera(0,70|5|0.5|p)\r
camera(45,60|10|0|o)\r
camera(mode:2d)`)},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function qt(i){let n;return{c(){n=$("Ceiling Function")},l(t){n=f(t,"Ceiling Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Bt(i){let n;return{c(){n=$("Texture Function")},l(t){n=f(t,"Texture Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Dt(i){let n;return{c(){n=$("img,x,y,w,h|height,backface|alpha|glow,glowintensity|anim:animx,animy")},l(t){n=f(t,"img,x,y,w,h|height,backface|alpha|glow,glowintensity|anim:animx,animy")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Yt(i){let n;return{c(){n=$("Edge Function")},l(t){n=f(t,"Edge Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Ut(i){let n;return{c(){n=$("Base Function")},l(t){n=f(t,"Base Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Wt(i){let n,t,o="n",u;return{c(){n=$("base("),t=v("samp"),t.textContent=o,u=$(")"),this.h()},l(c){n=f(c,"base("),t=P(c,"SAMP",{title:!0,"data-svelte-h":!0}),T(t)!=="svelte-11z14xk"&&(t.textContent=o),u=f(c,")"),this.h()},h(){Pt(t,"title","number")},m(c,F){l(c,n,F),l(c,t,F),l(c,u,F)},p:xt,d(c){c&&(r(n),r(t),r(u))}}}function Vt(i){let n;return{c(){n=$("Bloom Function")},l(t){n=f(t,"Bloom Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Ot(i){let n;return{c(){n=$("Set Command")},l(t){n=f(t,"Set Command")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Gt(i){let n;return{c(){n=$("intensity,threshold,radius")},l(t){n=f(t,"intensity,threshold,radius")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function It(i){let n;return{c(){n=$("Skybox and Skyball Functions")},l(t){n=f(t,"Skybox and Skyball Functions")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Jt(i){let n;return{c(){n=$("Skybox Function")},l(t){n=f(t,"Skybox Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Kt(i){let n;return{c(){n=$("default,top,bottom,north,west,south,east|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},l(t){n=f(t,"default,top,bottom,north,west,south,east|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Nt(i){let n;return{c(){n=$("Skyball Function")},l(t){n=f(t,"Skyball Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Qt(i){let n;return{c(){n=$("texture,repeat|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},l(t){n=f(t,"texture,repeat|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Rt(i){let n;return{c(){n=$("Skybox and Skyball Commands")},l(t){n=f(t,"Skybox and Skyball Commands")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function Xt(i){let n,t,o,u,c=`\r
        Adjusts the bloom effect for the map.\r
    `,F,S,w,_,V,B,m,k,j,Y,E,N,y,ke=`\r
        Sets up a skybox for the map.\r
    `,Q,M,R,z,Se="You can use the skybox function multiple times with different indexes to set up different layers.",X,L,Z,q,Fe=`\r
        The skyball function sets up a skyball for the map.\r
    `,ee,H,te,A,ve,D,O,pe,ne;return t=new W({props:{h2:!0,id:"bloom",$$slots:{default:[Vt]},$$scope:{ctx:i}}}),_=new Ke({props:{href:"plugin-commands#set",$$slots:{default:[Ot]},$$scope:{ctx:i}}}),m=new we({props:{$$slots:{default:[Gt]},$$scope:{ctx:i}}}),j=new W({props:{h2:!0,id:"skybox&skyball",$$slots:{default:[It]},$$scope:{ctx:i}}}),E=new W({props:{h3:!0,id:"skybox",$$slots:{default:[Jt]},$$scope:{ctx:i}}}),M=new we({props:{$$slots:{default:[Kt]},$$scope:{ctx:i}}}),L=new W({props:{h3:!0,id:"skyball",$$slots:{default:[Nt]},$$scope:{ctx:i}}}),H=new we({props:{$$slots:{default:[Qt]},$$scope:{ctx:i}}}),D=new Ke({props:{href:"plugin-commands#skybox&skyball",$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){n=$(`\r
    `),h(t.$$.fragment),o=$(`\r
    `),u=v("p"),u.textContent=c,F=$(`\r
    `),S=v("p"),w=$(`\r
        Most postprocessing effects are adjusted using the `),h(_.$$.fragment),V=$(`,\r
        but bloom settings might need to be adjusted for each map.\r
    `),B=$(`\r
    Parameters:\r
    `),h(m.$$.fragment),k=$(`\r
\r
    `),h(j.$$.fragment),Y=$(`\r
    `),h(E.$$.fragment),N=$(`\r
    `),y=v("p"),y.textContent=ke,Q=$(`\r
    Parameters:\r
    `),h(M.$$.fragment),R=$(`\r
    `),z=v("p"),z.textContent=Se,X=$(`\r
\r
    `),h(L.$$.fragment),Z=$(`\r
    `),q=v("p"),q.textContent=Fe,ee=$(`\r
    Parameters:\r
    `),h(H.$$.fragment),te=$(`\r
    `),A=v("p"),ve=$("For more info about skyboxes and skyballs, see the "),h(D.$$.fragment),O=$("."),pe=$(`\r
`)},l(a){n=f(a,`\r
    `),g(t.$$.fragment,a),o=f(a,`\r
    `),u=P(a,"P",{"data-svelte-h":!0}),T(u)!=="svelte-hvheb9"&&(u.textContent=c),F=f(a,`\r
    `),S=P(a,"P",{});var p=Je(S);w=f(p,`\r
        Most postprocessing effects are adjusted using the `),g(_.$$.fragment,p),V=f(p,`,\r
        but bloom settings might need to be adjusted for each map.\r
    `),p.forEach(r),B=f(a,`\r
    Parameters:\r
    `),g(m.$$.fragment,a),k=f(a,`\r
\r
    `),g(j.$$.fragment,a),Y=f(a,`\r
    `),g(E.$$.fragment,a),N=f(a,`\r
    `),y=P(a,"P",{"data-svelte-h":!0}),T(y)!=="svelte-q55tut"&&(y.textContent=ke),Q=f(a,`\r
    Parameters:\r
    `),g(M.$$.fragment,a),R=f(a,`\r
    `),z=P(a,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1ljhj3j"&&(z.textContent=Se),X=f(a,`\r
\r
    `),g(L.$$.fragment,a),Z=f(a,`\r
    `),q=P(a,"P",{"data-svelte-h":!0}),T(q)!=="svelte-17nbqlg"&&(q.textContent=Fe),ee=f(a,`\r
    Parameters:\r
    `),g(H.$$.fragment,a),te=f(a,`\r
    `),A=P(a,"P",{});var U=Je(A);ve=f(U,"For more info about skyboxes and skyballs, see the "),g(D.$$.fragment,U),O=f(U,"."),U.forEach(r),pe=f(a,`\r
`)},m(a,p){l(a,n,p),d(t,a,p),l(a,o,p),l(a,u,p),l(a,F,p),l(a,S,p),Pe(S,w),d(_,S,null),Pe(S,V),l(a,B,p),d(m,a,p),l(a,k,p),d(j,a,p),l(a,Y,p),d(E,a,p),l(a,N,p),l(a,y,p),l(a,Q,p),d(M,a,p),l(a,R,p),l(a,z,p),l(a,X,p),d(L,a,p),l(a,Z,p),l(a,q,p),l(a,ee,p),d(H,a,p),l(a,te,p),l(a,A,p),Pe(A,ve),d(D,A,null),Pe(A,O),l(a,pe,p),ne=!0},p(a,p){const U={};p&4&&(U.$$scope={dirty:p,ctx:a}),t.$set(U);const J={};p&4&&(J.$$scope={dirty:p,ctx:a}),_.$set(J);const Te={};p&4&&(Te.$$scope={dirty:p,ctx:a}),m.$set(Te);const ue={};p&4&&(ue.$$scope={dirty:p,ctx:a}),j.$set(ue);const G={};p&4&&(G.$$scope={dirty:p,ctx:a}),E.$set(G);const ce={};p&4&&(ce.$$scope={dirty:p,ctx:a}),M.$set(ce);const I={};p&4&&(I.$$scope={dirty:p,ctx:a}),L.$set(I);const _e={};p&4&&(_e.$$scope={dirty:p,ctx:a}),H.$set(_e);const K={};p&4&&(K.$$scope={dirty:p,ctx:a}),D.$set(K)},i(a){ne||(b(t.$$.fragment,a),b(_.$$.fragment,a),b(m.$$.fragment,a),b(j.$$.fragment,a),b(E.$$.fragment,a),b(M.$$.fragment,a),b(L.$$.fragment,a),b(H.$$.fragment,a),b(D.$$.fragment,a),ne=!0)},o(a){x(t.$$.fragment,a),x(_.$$.fragment,a),x(m.$$.fragment,a),x(j.$$.fragment,a),x(E.$$.fragment,a),x(M.$$.fragment,a),x(L.$$.fragment,a),x(H.$$.fragment,a),x(D.$$.fragment,a),ne=!1},d(a){a&&(r(n),r(o),r(u),r(F),r(S),r(B),r(k),r(Y),r(N),r(y),r(Q),r(R),r(z),r(X),r(Z),r(q),r(ee),r(te),r(A),r(pe)),C(t,a),C(_),C(m,a),C(j,a),C(E,a),C(M,a),C(L,a),C(H,a),C(D)}}}function Zt(i){let n;return{c(){n=$("Enable/Disable Function")},l(t){n=f(t,"Enable/Disable Function")},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function en(i){let n;return{c(){n=$(`enable()\r
disable()`)},l(t){n=f(t,`enable()\r
disable()`)},m(t,o){l(t,n,o)},d(t){t&&r(n)}}}function tn(i){let n,t,o,u,c,F,S=`\r
    The light function (and its alias the ambient function) sets the ambient light color for the map.\r
`,w,_,V='The color parameter can be a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">hex color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">named color</a>, or any other valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">css color</a>.',B,m,k,j,Y,E,N,y,ke=`\r
    The fog function sets the color and distance of the fog for the map.\r
`,Q,M,R,z,Se="Color is the color of the fog, and near and far are the distances where the fog starts and ends.",X,L,Z,q,Fe=`\r
    The camera function sets various properties of the camera when the map is loaded.\r
`,ee,H,te,A,ve=`\r
    Yaw and pitch are the initial camera angles. Yaw is rotation side to side, and pitch is up and down.\r
`,D,O,pe=`\r
    Dist is the distance from the camera to the character. Set this to zero for 1st person mode.\r
`,ne,a,p=`\r
    Height is a vertical offset from the character's position that the camera look at. The purpose of this is so the character's head or body can be in the center of the screen rather than their feet.\r
`,U,J,Te=`\r
    Mode is the initial camera mode. The options are "perspective", "orthographic", "2d". You only need to specify the first letter of the mode.\r
`,ue,G,ce,I,_e,K,Ne=`\r
    The ceiling function sets up a ceiling for the map. This is intended for interior maps.\r
`,Ee,re,Ge,le,Ie,Me,se,Le,he,Qe=`
    The new parameters are height and backface. Height is the z position the ceiling will be at.
    <br/>Backface is whether the ceiling mesh should be double sided or not.
`,He,ge,Re="ceiling(A4,0,0|2,false)",Ae,ae,ye,de,Xe=`\r
    The edge function controls how the edges of the map will be treated.\r
`,ze,be,Ze=`
    <code>edge(true)</code> walls around the edge of the map will be rendered.
    <br/><code>edge(false)</code> walls around the edge of the map will not be rendered.
    <br/><code>edge(clamp)</code> tiles along the edge of the map will be repeated in areas outside the map.
    You can also specify a number to specify the number of tiles near the edge that will be repeated.
    For example, <code>edge(clamp,2)</code> will repeat the 2 tiles around the edge of the map.
`,qe,$e,Be,xe,et=`\r
    Sets a base height for the map. The base height will be added to the height of all tiles.\r
`,De,fe,Ye,oe,Ue,ie,We,Ce,tt=`\r
    Enables or disables 3D rendering for the map.\r
`,Ve,me,Oe;return t=new kt({props:{title:"Map Configuration"}}),u=new W({props:{h2:!0,id:"light",$$slots:{default:[St]},$$scope:{ctx:i}}}),m=new je({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),j=new bt({props:{block:!0,premium:i[0],$$slots:{default:[Mt]},$$scope:{ctx:i}}}),E=new W({props:{h2:!0,id:"fog",$$slots:{default:[Lt]},$$scope:{ctx:i}}}),M=new we({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}}),L=new W({props:{h2:!0,id:"camera",$$slots:{default:[At]},$$scope:{ctx:i}}}),H=new we({props:{$$slots:{default:[yt]},$$scope:{ctx:i}}}),G=new je({props:{$$slots:{default:[zt]},$$scope:{ctx:i}}}),I=new W({props:{h2:!0,id:"ceiling",$$slots:{default:[qt]},$$scope:{ctx:i}}}),le=new Ke({props:{href:"tile-config#textures",$$slots:{default:[Bt]},$$scope:{ctx:i}}}),se=new we({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),ae=new W({props:{h2:!0,id:"edge",$$slots:{default:[Yt]},$$scope:{ctx:i}}}),$e=new W({props:{h2:!0,id:"base",$$slots:{default:[Ut]},$$scope:{ctx:i}}}),fe=new je({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),oe=new bt({props:{block:!0,premium:i[0],$$slots:{default:[Xt]},$$scope:{ctx:i}}}),ie=new W({props:{h2:!0,id:"enable",$$slots:{default:[Zt]},$$scope:{ctx:i}}}),me=new je({props:{$$slots:{default:[en]},$$scope:{ctx:i}}}),{c(){n=$(`\r
\r
`),h(t.$$.fragment),o=$(`\r
\r
`),h(u.$$.fragment),c=$(`\r
`),F=v("p"),F.textContent=S,w=$(`\r
\r
`),_=v("p"),_.innerHTML=V,B=$(`\r
\r
`),h(m.$$.fragment),k=$(`\r
\r
`),h(j.$$.fragment),Y=$(`\r
\r
`),h(E.$$.fragment),N=$(`\r
`),y=v("p"),y.textContent=ke,Q=$(`\r
Parameters:\r
`),h(M.$$.fragment),R=$(`\r
`),z=v("p"),z.textContent=Se,X=$(`\r
\r
`),h(L.$$.fragment),Z=$(`\r
`),q=v("p"),q.textContent=Fe,ee=$(`\r
Parameters:\r
`),h(H.$$.fragment),te=$(`\r
`),A=v("p"),A.textContent=ve,D=$(`\r
`),O=v("p"),O.textContent=pe,ne=$(`\r
`),a=v("p"),a.textContent=p,U=$(`\r
`),J=v("p"),J.textContent=Te,ue=$(`\r
Examples:\r
`),h(G.$$.fragment),ce=$(`\r
\r
`),h(I.$$.fragment),_e=$(`\r
`),K=v("p"),K.textContent=Ne,Ee=$(`\r
`),re=v("p"),Ge=$(`\r
    The ceiling function is a `),h(le.$$.fragment),Ie=$(` with an extra parameter group inserted as the second parameter group.\r
`),Me=$(`\r
Parameters:\r
`),h(se.$$.fragment),Le=$(`\r
`),he=v("p"),he.innerHTML=Qe,He=$(`\r
Example: `),ge=v("code"),ge.textContent=Re,Ae=$(`\r
\r
`),h(ae.$$.fragment),ye=$(`\r
`),de=v("p"),de.textContent=Xe,ze=$(`\r
`),be=v("p"),be.innerHTML=Ze,qe=$(`\r
\r
`),h($e.$$.fragment),Be=$(`\r
`),xe=v("p"),xe.textContent=et,De=$(`\r
`),h(fe.$$.fragment),Ye=$(`\r
\r
`),h(oe.$$.fragment),Ue=$(`\r
\r
`),h(ie.$$.fragment),We=$(`\r
`),Ce=v("p"),Ce.textContent=tt,Ve=$(`\r
`),h(me.$$.fragment)},l(e){n=f(e,`\r
\r
`),g(t.$$.fragment,e),o=f(e,`\r
\r
`),g(u.$$.fragment,e),c=f(e,`\r
`),F=P(e,"P",{"data-svelte-h":!0}),T(F)!=="svelte-1a1ep1l"&&(F.textContent=S),w=f(e,`\r
\r
`),_=P(e,"P",{"data-svelte-h":!0}),T(_)!=="svelte-2x2t8q"&&(_.innerHTML=V),B=f(e,`\r
\r
`),g(m.$$.fragment,e),k=f(e,`\r
\r
`),g(j.$$.fragment,e),Y=f(e,`\r
\r
`),g(E.$$.fragment,e),N=f(e,`\r
`),y=P(e,"P",{"data-svelte-h":!0}),T(y)!=="svelte-lyw8tk"&&(y.textContent=ke),Q=f(e,`\r
Parameters:\r
`),g(M.$$.fragment,e),R=f(e,`\r
`),z=P(e,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1me6f1p"&&(z.textContent=Se),X=f(e,`\r
\r
`),g(L.$$.fragment,e),Z=f(e,`\r
`),q=P(e,"P",{"data-svelte-h":!0}),T(q)!=="svelte-hn5itw"&&(q.textContent=Fe),ee=f(e,`\r
Parameters:\r
`),g(H.$$.fragment,e),te=f(e,`\r
`),A=P(e,"P",{"data-svelte-h":!0}),T(A)!=="svelte-fmh28b"&&(A.textContent=ve),D=f(e,`\r
`),O=P(e,"P",{"data-svelte-h":!0}),T(O)!=="svelte-in3t2d"&&(O.textContent=pe),ne=f(e,`\r
`),a=P(e,"P",{"data-svelte-h":!0}),T(a)!=="svelte-m4bnjp"&&(a.textContent=p),U=f(e,`\r
`),J=P(e,"P",{"data-svelte-h":!0}),T(J)!=="svelte-givgjg"&&(J.textContent=Te),ue=f(e,`\r
Examples:\r
`),g(G.$$.fragment,e),ce=f(e,`\r
\r
`),g(I.$$.fragment,e),_e=f(e,`\r
`),K=P(e,"P",{"data-svelte-h":!0}),T(K)!=="svelte-18geji3"&&(K.textContent=Ne),Ee=f(e,`\r
`),re=P(e,"P",{});var s=Je(re);Ge=f(s,`\r
    The ceiling function is a `),g(le.$$.fragment,s),Ie=f(s,` with an extra parameter group inserted as the second parameter group.\r
`),s.forEach(r),Me=f(e,`\r
Parameters:\r
`),g(se.$$.fragment,e),Le=f(e,`\r
`),he=P(e,"P",{"data-svelte-h":!0}),T(he)!=="svelte-hovdpy"&&(he.innerHTML=Qe),He=f(e,`\r
Example: `),ge=P(e,"CODE",{"data-svelte-h":!0}),T(ge)!=="svelte-1x4sjo2"&&(ge.textContent=Re),Ae=f(e,`\r
\r
`),g(ae.$$.fragment,e),ye=f(e,`\r
`),de=P(e,"P",{"data-svelte-h":!0}),T(de)!=="svelte-1y5cgi7"&&(de.textContent=Xe),ze=f(e,`\r
`),be=P(e,"P",{"data-svelte-h":!0}),T(be)!=="svelte-ojfytk"&&(be.innerHTML=Ze),qe=f(e,`\r
\r
`),g($e.$$.fragment,e),Be=f(e,`\r
`),xe=P(e,"P",{"data-svelte-h":!0}),T(xe)!=="svelte-fxp0x0"&&(xe.textContent=et),De=f(e,`\r
`),g(fe.$$.fragment,e),Ye=f(e,`\r
\r
`),g(oe.$$.fragment,e),Ue=f(e,`\r
\r
`),g(ie.$$.fragment,e),We=f(e,`\r
`),Ce=P(e,"P",{"data-svelte-h":!0}),T(Ce)!=="svelte-108inuh"&&(Ce.textContent=tt),Ve=f(e,`\r
`),g(me.$$.fragment,e)},m(e,s){l(e,n,s),d(t,e,s),l(e,o,s),d(u,e,s),l(e,c,s),l(e,F,s),l(e,w,s),l(e,_,s),l(e,B,s),d(m,e,s),l(e,k,s),d(j,e,s),l(e,Y,s),d(E,e,s),l(e,N,s),l(e,y,s),l(e,Q,s),d(M,e,s),l(e,R,s),l(e,z,s),l(e,X,s),d(L,e,s),l(e,Z,s),l(e,q,s),l(e,ee,s),d(H,e,s),l(e,te,s),l(e,A,s),l(e,D,s),l(e,O,s),l(e,ne,s),l(e,a,s),l(e,U,s),l(e,J,s),l(e,ue,s),d(G,e,s),l(e,ce,s),d(I,e,s),l(e,_e,s),l(e,K,s),l(e,Ee,s),l(e,re,s),Pe(re,Ge),d(le,re,null),Pe(re,Ie),l(e,Me,s),d(se,e,s),l(e,Le,s),l(e,he,s),l(e,He,s),l(e,ge,s),l(e,Ae,s),d(ae,e,s),l(e,ye,s),l(e,de,s),l(e,ze,s),l(e,be,s),l(e,qe,s),d($e,e,s),l(e,Be,s),l(e,xe,s),l(e,De,s),d(fe,e,s),l(e,Ye,s),d(oe,e,s),l(e,Ue,s),d(ie,e,s),l(e,We,s),l(e,Ce,s),l(e,Ve,s),d(me,e,s),Oe=!0},p(e,[s]){const nt={};s&4&&(nt.$$scope={dirty:s,ctx:e}),u.$set(nt);const rt={};s&4&&(rt.$$scope={dirty:s,ctx:e}),m.$set(rt);const lt={};s&4&&(lt.$$scope={dirty:s,ctx:e}),j.$set(lt);const st={};s&4&&(st.$$scope={dirty:s,ctx:e}),E.$set(st);const at={};s&4&&(at.$$scope={dirty:s,ctx:e}),M.$set(at);const $t={};s&4&&($t.$$scope={dirty:s,ctx:e}),L.$set($t);const ft={};s&4&&(ft.$$scope={dirty:s,ctx:e}),H.$set(ft);const ot={};s&4&&(ot.$$scope={dirty:s,ctx:e}),G.$set(ot);const it={};s&4&&(it.$$scope={dirty:s,ctx:e}),I.$set(it);const mt={};s&4&&(mt.$$scope={dirty:s,ctx:e}),le.$set(mt);const pt={};s&4&&(pt.$$scope={dirty:s,ctx:e}),se.$set(pt);const ut={};s&4&&(ut.$$scope={dirty:s,ctx:e}),ae.$set(ut);const ct={};s&4&&(ct.$$scope={dirty:s,ctx:e}),$e.$set(ct);const _t={};s&4&&(_t.$$scope={dirty:s,ctx:e}),fe.$set(_t);const ht={};s&4&&(ht.$$scope={dirty:s,ctx:e}),oe.$set(ht);const gt={};s&4&&(gt.$$scope={dirty:s,ctx:e}),ie.$set(gt);const dt={};s&4&&(dt.$$scope={dirty:s,ctx:e}),me.$set(dt)},i(e){Oe||(b(t.$$.fragment,e),b(u.$$.fragment,e),b(m.$$.fragment,e),b(j.$$.fragment,e),b(E.$$.fragment,e),b(M.$$.fragment,e),b(L.$$.fragment,e),b(H.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(le.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b($e.$$.fragment,e),b(fe.$$.fragment,e),b(oe.$$.fragment,e),b(ie.$$.fragment,e),b(me.$$.fragment,e),Oe=!0)},o(e){x(t.$$.fragment,e),x(u.$$.fragment,e),x(m.$$.fragment,e),x(j.$$.fragment,e),x(E.$$.fragment,e),x(M.$$.fragment,e),x(L.$$.fragment,e),x(H.$$.fragment,e),x(G.$$.fragment,e),x(I.$$.fragment,e),x(le.$$.fragment,e),x(se.$$.fragment,e),x(ae.$$.fragment,e),x($e.$$.fragment,e),x(fe.$$.fragment,e),x(oe.$$.fragment,e),x(ie.$$.fragment,e),x(me.$$.fragment,e),Oe=!1},d(e){e&&(r(n),r(o),r(c),r(F),r(w),r(_),r(B),r(k),r(Y),r(N),r(y),r(Q),r(R),r(z),r(X),r(Z),r(q),r(ee),r(te),r(A),r(D),r(O),r(ne),r(a),r(U),r(J),r(ue),r(ce),r(_e),r(K),r(Ee),r(re),r(Me),r(Le),r(he),r(He),r(ge),r(Ae),r(ye),r(de),r(ze),r(be),r(qe),r(Be),r(xe),r(De),r(Ye),r(Ue),r(We),r(Ce),r(Ve)),C(t,e),C(u,e),C(m,e),C(j,e),C(E,e),C(M,e),C(L,e),C(H,e),C(G,e),C(I,e),C(le),C(se,e),C(ae,e),C($e,e),C(fe,e),C(oe,e),C(ie,e),C(me,e)}}}function nn(i,n,t){let{data:o}=n,u=o.premium;return i.$$set=c=>{"data"in c&&t(1,o=c.data)},[u,o]}class pn extends wt{constructor(n){super(),vt(this,n,nn,tn,Ct,{data:1})}}export{pn as component};
