import{s as Hn,n as te}from"../chunks/scheduler.BjkBv5nx.js";import{S as Sn,i as Dn,t as i,c as x,k as c,a as o,b as v,l as d,n as P,o as Te,g as r,d as s,m as b,p as E,s as Ln,e as C,f as T,h as F,q as J}from"../chunks/index.BT_eMuJg.js";import{A as R}from"../chunks/Anchor.DPTg1Ks6.js";import"../chunks/entry.B198mIdq.js";import{C as Ce}from"../chunks/Code.UvG0J7Qo.js";import{L as qt}from"../chunks/Link.DpGiBmhP.js";import{P as jn}from"../chunks/PageTitle.9YCIYH6H.js";import{V as Ot}from"../chunks/Version.52FMOf3v.js";import{S as qn,R as On,O as zn,G as In}from"../chunks/ShapeFunction.D3kSnPl0.js";import{P as An}from"../chunks/ParameterList.CApmv983.js";function Bn(u){let n;return{c(){n=i("Texture Functions")},l(t){n=o(t,"Texture Functions")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Rn(u){let n;return{c(){n=i(`\r
img,x,y,w,h|alpha|glow,glowintensity|anim:animx,animy\r
`)},l(t){n=o(t,`\r
img,x,y,w,h|alpha|glow,glowintensity|anim:animx,animy\r
`)},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Wn(u){let n,t,a,$,f="glow function",m;return{c(){n=i(`\r
        Due to a bug the second parameter seems to not work for tile textures... Glow intensity will always be 1.\r
        `),t=c("br"),a=i(" For now, use the "),$=c("a"),$.textContent=f,m=i(` instead if you need to set the glow intensity.\r
    `),this.h()},l(h){n=o(h,`\r
        Due to a bug the second parameter seems to not work for tile textures... Glow intensity will always be 1.\r
        `),t=d(h,"BR",{}),a=o(h," For now, use the "),$=d(h,"A",{href:!0,"data-svelte-h":!0}),P($)!=="svelte-jipaxt"&&($.textContent=f),m=o(h,` instead if you need to set the glow intensity.\r
    `),this.h()},h(){J($,"href","#glow")},m(h,k){s(h,n,k),s(h,t,k),s(h,a,k),s(h,$,k),s(h,m,k)},p:te,d(h){h&&(r(n),r(t),r(a),r($),r(m))}}}function Gn(u){let n,t,a=`\r
        A second parameter can be provided to control the intensity of the premium glow effect.\r
    `,$,f,m,h,k="texture(||1,0), texture(glow:red,1)",M,_,A,L;return _=new Ot({props:{block:!0,bug:!0,$$slots:{default:[Wn]},$$scope:{ctx:u}}}),{c(){n=i(`\r
    `),t=c("p"),t.textContent=a,$=i(`\r
    \r
    `),f=c("br"),m=i("Examples: "),h=c("code"),h.textContent=k,M=i(`\r
    `),x(_.$$.fragment),A=i(`\r
`)},l(g){n=o(g,`\r
    `),t=d(g,"P",{"data-svelte-h":!0}),P(t)!=="svelte-pajxct"&&(t.textContent=a),$=o(g,`\r
    \r
    `),f=d(g,"BR",{}),m=o(g,"Examples: "),h=d(g,"CODE",{"data-svelte-h":!0}),P(h)!=="svelte-150pqnu"&&(h.textContent=k),M=o(g,`\r
    `),v(_.$$.fragment,g),A=o(g,`\r
`)},m(g,H){s(g,n,H),s(g,t,H),s(g,$,H),s(g,f,H),s(g,m,H),s(g,h,H),s(g,M,H),b(_,g,H),s(g,A,H),L=!0},p(g,H){const S={};H&4&&(S.$$scope={dirty:H,ctx:g}),_.$set(S)},i(g){L||(C(_.$$.fragment,g),L=!0)},o(g){T(_.$$.fragment,g),L=!1},d(g){g&&(r(n),r(t),r($),r(f),r(m),r(h),r(M),r(A)),F(_,g)}}}function Nn(u){let n;return{c(){n=i("Ceiling Function")},l(t){n=o(t,"Ceiling Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Un(u){let n;return{c(){n=i("ceiling config set for the map")},l(t){n=o(t,"ceiling config set for the map")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Vn(u){let n;return{c(){n=i("Height Function")},l(t){n=o(t,"Height Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function yn(u){let n,t,a="n",$;return{c(){n=i("height("),t=c("samp"),t.textContent=a,$=i(")"),this.h()},l(f){n=o(f,"height("),t=d(f,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=a),$=o(f,")"),this.h()},h(){J(t,"title","number")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function Jn(u){let n;return{c(){n=i("Depth Function")},l(t){n=o(t,"Depth Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Kn(u){let n,t,a="n",$;return{c(){n=i("depth("),t=c("samp"),t.textContent=a,$=i(")"),this.h()},l(f){n=o(f,"depth("),t=d(f,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=a),$=o(f,")"),this.h()},h(){J(t,"title","number")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function Qn(u){let n;return{c(){n=i("Fringe Function")},l(t){n=o(t,"Fringe Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Xn(u){let n,t,a="n",$;return{c(){n=i("fringe("),t=c("samp"),t.textContent=a,$=i(")"),this.h()},l(f){n=o(f,"fringe("),t=d(f,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=a),$=o(f,")"),this.h()},h(){J(t,"title","number")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function Yn(u){let n;return{c(){n=i("Float Function")},l(t){n=o(t,"Float Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function Zn(u){let n,t,a="n",$;return{c(){n=i("float("),t=c("samp"),t.textContent=a,$=i(")"),this.h()},l(f){n=o(f,"float("),t=d(f,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=a),$=o(f,")"),this.h()},h(){J(t,"title","number")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function el(u){let n;return{c(){n=i("Tile Offset Function")},l(t){n=o(t,"Tile Offset Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function tl(u){let n,t,a="x",$,f,m="y",h;return{c(){n=i("tileoffset("),t=c("samp"),t.textContent=a,$=i(","),f=c("samp"),f.textContent=m,h=i(")"),this.h()},l(k){n=o(k,"tileoffset("),t=d(k,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-p3ccxq"&&(t.textContent=a),$=o(k,","),f=d(k,"SAMP",{title:!0,"data-svelte-h":!0}),P(f)!=="svelte-eyvwfd"&&(f.textContent=m),h=o(k,")"),this.h()},h(){J(t,"title","number"),J(f,"title","number")},m(k,M){s(k,n,M),s(k,t,M),s(k,$,M),s(k,f,M),s(k,h,M)},p:te,d(k){k&&(r(n),r(t),r($),r(f),r(h))}}}function nl(u){let n;return{c(){n=i("Slope Function")},l(t){n=o(t,"Slope Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function ll(u){let n;return{c(){n=i("height,direction|top,side|texrot")},l(t){n=o(t,"height,direction|top,side|texrot")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function rl(u){let n;return{c(){n=i("Pass Function")},l(t){n=o(t,"Pass Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function sl(u){let n;return{c(){n=i("Width Function")},l(t){n=o(t,"Width Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function il(u){let n,t,a="n",$;return{c(){n=i("width("),t=c("samp"),t.textContent=a,$=i(")"),this.h()},l(f){n=o(f,"width("),t=d(f,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=a),$=o(f,")"),this.h()},h(){J(t,"title","number")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function ol(u){let n;return{c(){n=i("Slant Function")},l(t){n=o(t,"Slant Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function fl(u){let n,t,a="n",$;return{c(){n=i("width("),t=c("samp"),t.textContent=a,$=i(")"),this.h()},l(f){n=o(f,"width("),t=d(f,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=a),$=o(f,")"),this.h()},h(){J(t,"title","number")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function al(u){let n;return{c(){n=i("Shadow Function")},l(t){n=o(t,"Shadow Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function $l(u){let n,t,a="true/false",$;return{c(){n=i("shadow("),t=c("samp"),t.textContent=a,$=i(")")},l(f){n=o(f,"shadow("),t=d(f,"SAMP",{"data-svelte-h":!0}),P(t)!=="svelte-17yyxv0"&&(t.textContent=a),$=o(f,")")},m(f,m){s(f,n,m),s(f,t,m),s(f,$,m)},p:te,d(f){f&&(r(n),r(t),r($))}}}function ul(u){let n,t,a,$,f="Whether the tile should cast shadows, true by default.",m,h,k,M;return t=new R({props:{h2:!0,id:"shadow",$$slots:{default:[al]},$$scope:{ctx:u}}}),h=new Ce({props:{$$slots:{default:[$l]},$$scope:{ctx:u}}}),{c(){n=i(`\r
    `),x(t.$$.fragment),a=i(`\r
    `),$=c("p"),$.textContent=f,m=i(`\r
    `),x(h.$$.fragment),k=i(`\r
`)},l(_){n=o(_,`\r
    `),v(t.$$.fragment,_),a=o(_,`\r
    `),$=d(_,"P",{"data-svelte-h":!0}),P($)!=="svelte-13gfl95"&&($.textContent=f),m=o(_,`\r
    `),v(h.$$.fragment,_),k=o(_,`\r
`)},m(_,A){s(_,n,A),b(t,_,A),s(_,a,A),s(_,$,A),s(_,m,A),b(h,_,A),s(_,k,A),M=!0},p(_,A){const L={};A&4&&(L.$$scope={dirty:A,ctx:_}),t.$set(L);const g={};A&4&&(g.$$scope={dirty:A,ctx:_}),h.$set(g)},i(_){M||(C(t.$$.fragment,_),C(h.$$.fragment,_),M=!0)},o(_){T(t.$$.fragment,_),T(h.$$.fragment,_),M=!1},d(_){_&&(r(n),r(a),r($),r(m),r(k)),F(t,_),F(h,_)}}}function pl(u){let n;return{c(){n=i("Model Function")},l(t){n=o(t,"Model Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function ml(u){let n;return{c(){n=i("Importing Models")},l(t){n=o(t,"Importing Models")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function hl(u){let n;return{c(){n=i("Mesh Function")},l(t){n=o(t,"Mesh Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function cl(u){let n;return{c(){n=i("Mesh Building")},l(t){n=o(t,"Mesh Building")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function dl(u){let n;return{c(){n=i("Scale Function")},l(t){n=o(t,"Scale Function")},m(t,a){s(t,n,a)},d(t){t&&r(n)}}}function _l(u){let n,t,a,$,f="Imports a 3D model for the tile.",m,h,k,M=u[0].pluginName.toUpperCase()+"",_,A,L,g,H,S,Y,D,Ue="Constructs a mesh for the tile based on a mesh string.",K,G,Fe,z,Pe,j,ne,q,Ve,N,Q="width",ye,U,X="height",Je,Z,I;return t=new R({props:{h2:!0,id:"model",$$slots:{default:[pl]},$$scope:{ctx:u}}}),L=new qt({props:{href:"modeling#model-import",$$slots:{default:[ml]},$$scope:{ctx:u}}}),S=new R({props:{h2:!0,id:"mesh",$$slots:{default:[hl]},$$scope:{ctx:u}}}),z=new qt({props:{href:"modeling#mesh",$$slots:{default:[cl]},$$scope:{ctx:u}}}),q=new qt({props:{href:"event-config#scale",$$slots:{default:[dl]},$$scope:{ctx:u}}}),{c(){n=i(`\r
\r
`),x(t.$$.fragment),a=i(`\r
`),$=c("p"),$.textContent=f,m=i(`\r
`),h=c("p"),k=i("For more information about importing 3D models into "),_=i(M),A=i(", see "),x(L.$$.fragment),g=i("."),H=i(`\r
\r
`),x(S.$$.fragment),Y=i(`\r
`),D=c("p"),D.textContent=Ue,K=i(`\r
`),G=c("p"),Fe=i("For more information about mesh strings, see "),x(z.$$.fragment),Pe=i(`\r
\r
`),j=c("p"),ne=i("When using model or mesh, you should use the "),x(q.$$.fragment),Ve=i(" to set the size instead of "),N=c("a"),N.textContent=Q,ye=i(" and "),U=c("a"),U.textContent=X,Je=i("."),Z=i(`\r
`),this.h()},l(p){n=o(p,`\r
\r
`),v(t.$$.fragment,p),a=o(p,`\r
`),$=d(p,"P",{"data-svelte-h":!0}),P($)!=="svelte-1j5osw9"&&($.textContent=f),m=o(p,`\r
`),h=d(p,"P",{});var w=Te(h);k=o(w,"For more information about importing 3D models into "),_=o(w,M),A=o(w,", see "),v(L.$$.fragment,w),g=o(w,"."),w.forEach(r),H=o(p,`\r
\r
`),v(S.$$.fragment,p),Y=o(p,`\r
`),D=d(p,"P",{"data-svelte-h":!0}),P(D)!=="svelte-1px76el"&&(D.textContent=Ue),K=o(p,`\r
`),G=d(p,"P",{});var ee=Te(G);Fe=o(ee,"For more information about mesh strings, see "),v(z.$$.fragment,ee),ee.forEach(r),Pe=o(p,`\r
\r
`),j=d(p,"P",{});var O=Te(j);ne=o(O,"When using model or mesh, you should use the "),v(q.$$.fragment,O),Ve=o(O," to set the size instead of "),N=d(O,"A",{href:!0,"data-svelte-h":!0}),P(N)!=="svelte-uffdsb"&&(N.textContent=Q),ye=o(O," and "),U=d(O,"A",{href:!0,"data-svelte-h":!0}),P(U)!=="svelte-8tiic7"&&(U.textContent=X),Je=o(O,"."),O.forEach(r),Z=o(p,`\r
`),this.h()},h(){J(N,"href","#width"),J(U,"href","#height")},m(p,w){s(p,n,w),b(t,p,w),s(p,a,w),s(p,$,w),s(p,m,w),s(p,h,w),E(h,k),E(h,_),E(h,A),b(L,h,null),E(h,g),s(p,H,w),b(S,p,w),s(p,Y,w),s(p,D,w),s(p,K,w),s(p,G,w),E(G,Fe),b(z,G,null),s(p,Pe,w),s(p,j,w),E(j,ne),b(q,j,null),E(j,Ve),E(j,N),E(j,ye),E(j,U),E(j,Je),s(p,Z,w),I=!0},p(p,w){const ee={};w&4&&(ee.$$scope={dirty:w,ctx:p}),t.$set(ee),(!I||w&1)&&M!==(M=p[0].pluginName.toUpperCase()+"")&&Ln(_,M);const O={};w&4&&(O.$$scope={dirty:w,ctx:p}),L.$set(O);const V={};w&4&&(V.$$scope={dirty:w,ctx:p}),S.$set(V);const ke={};w&4&&(ke.$$scope={dirty:w,ctx:p}),z.$set(ke);const y={};w&4&&(y.$$scope={dirty:w,ctx:p}),q.$set(y)},i(p){I||(C(t.$$.fragment,p),C(L.$$.fragment,p),C(S.$$.fragment,p),C(z.$$.fragment,p),C(q.$$.fragment,p),I=!0)},o(p){T(t.$$.fragment,p),T(L.$$.fragment,p),T(S.$$.fragment,p),T(z.$$.fragment,p),T(q.$$.fragment,p),I=!1},d(p){p&&(r(n),r(a),r($),r(m),r(h),r(H),r(Y),r(D),r(K),r(G),r(Pe),r(j),r(Z)),F(t,p),F(L),F(S,p),F(z),F(q)}}}function wl(u){let n,t,a,$,f,m,h=`
    A tile can be configured to have different textures for the top, bottom, and sides.
    <br/>A special inside texture will be used if the tile has <a href="#depth">depth</a> configured.
    <br/>Different texutres can also be used for the north, south, east, and west sides.
    <br/>If unset, the inside texture will be the same as the side texture, and the side and bottom textures will be the same as the top texture.
`,k,M,_=`
    Each texture can be set with the respective <code>top()</code>, <code>side()</code>, <code>bottom()</code>, <code>inside()</code>, <code>north()</code>, <code>south()</code>, <code>east()</code>, and <code>west()</code> function.
    <code>Texture()</code> can be used to set both the top and side texture. at the same time.
`,A,L,g="A texture is defined using the following list of parameters:",H,S,Y,D,Ue,K=u[0].pluginName.toUpperCase()+"",G,Fe,z,Pe="texture(/img/tilesets/Inside_B.png)",j,ne,q,Ve=`
    The x and y parameters can be prefixed with + or - to use relative values
    <small>(in other parts of the plugin + is required to indicate relative because - means negative, but there are no negative tile coordinates so it&#39;s unambiguous here)</small>
`,N,Q,ye=`
    The alpha parameter can be used to make the texture partially transparent. Or, you can set alpha to 1 to turn on alpha blending.
    <br/>Examples: <code>texture(|1), texture(alpha:0.5)</code>
`,U,X,Je=`
    The glow parameter will add an emissive color to make the texture glow in the dark. The effect works well for lava and other things that should emit light.
    <br/>Examples: <code>texture(||1), texture(glow:red)</code>
`,Z,I,p,w,ee=`
    anim is an alias for animx and can be used with a colon to jump to that parameter.
    <br/> Animx and animy are used for defining custom animated tiles.
    The number supplied to animx and animy will be the offset used by the animation.
    The final offset will be equal to the anim offset times the current frame.
    <br/>Animx has frames 0,1,2,1 (like water animations), while animy has frames 0,1,2 (like waterfall animations).
    <br/>Examples: <code>texture(|||1,0), texture(anim:0,1)</code>
`,O,V,ke,y,zt,le,It,et,re,tt,Me,Kt=`\r
    The height function, as the name implies will set the height for a tile.\r
    Tiles will be stacked on top of tiles layered below them, so if you configure height on both an upper layer and lower layer tile,\r
    their heights will be effectively combined.\r
`,nt,se,lt,ie,rt,Ee,Qt=`
    The depth function will set the depth of a tile. Depth is like a negative height,
    the tile&#39;s effective height will be its own height minus its depth. If there is a tile on a layer below the tile with depth,
    it will &quot;cut a hole&quot; in that tile, reducing that tile&#39;s height instead.
    <br/>The primary use is to create pits, bodies of water, and other holes in the ground.
    The side texture of the tile will use the &quot;inside&quot; texture for the part of the height caused by the depth.
`,st,oe,it,fe,ot,Ae,Xt=`\r
    The fringe function will add a gap between the tile and the tile below it, effectively making the tile appear to be floating.\r
    The player can walk under the tile if the gap is large enough.\r
`,ft,ae,at,$e,$t,Le,Yt=`\r
    The float function will set a distance above the tile that boats and ships should float above the tile.\r
    This is useful if you used the depth function to create a body of water and want boats to float near the top of the water instead of at the bottom.\r
`,ut,ue,pt,He,mt,Se,ht,De,ct,pe,dt,je,Zt=`\r
    The tile offset function will offset the tile's actual position on the map.\r
    This is used by default for star tiles to move them one tile down onto the tile below them.\r
`,_t,me,wt,he,gt,qe,en=`\r
    The slope sets the tile shape to slope and configures other slope-related settings.\r
`,xt,Oe,tn="parameter list:",vt,ce,bt,ze,nn=`
    The height parameter is the height of the slope. The direction parameter is the direction the slope is facing.
    <br/>Direction can be <code>n</code>, <code>s</code>, <code>e</code>, <code>w</code>, <code>ne</code>, <code>se</code>, <code>sw</code>, <code>nw</code>.
    <br/>The diagonal directions can be appended with <code>i</code> or <code>o</code> to indicate they&#39;re an inner or outer corner, for example <code>nei</code> or <code>neo</code>.
    <br/>Direction can also be set up with the shadow pen <span class="TODO">link to mapping page</span>.
    <br/>Examples: <code>slope(2,e), slope(2,e), slope(2,swi)</code>
`,Ct,B,Bt,Rt,Wt,Ke,ln="{}",Gt,Nt,Ut,Vt,Qe,rn="slope(2,top:{A4,0,0},side:{A4,0,1})",yt,Jt,Tt,Ie,sn=`
    The texrot parameter is whether the texture should be rotated to match the slope&#39;s direction. For regular tiles this is true by default, but for autotiles it&#39;s false.
    <br/>Example: <code>slope(2||false), slope(2,texrot:true)</code>
`,Ft,de,Pt,Be,on=`
    The pass function can be used to alter the passability of a tile. Possible values are <code>pass(o)</code> meaning you can walk on the tile, <code>pass(x)</code> meaning you cannot walk on the tile, and <code>pass(*)</code> meaning you can walk through the tile.
`,kt,_e,Mt,Re,fn=`\r
    The width function can be used to set the width of a tile. This can be useful for creating pillars that are thicker or thinner than a normal tile.\r
`,Et,we,At,ge,Lt,We,an=`\r
    The slant function can be used to give the walls of the tile a slight angle instead of being perfectly vertical.\r
    The exact angle will vary depending on the height of the tile, because the value provided is the extra vertical distance the bottom of the tile will occupy.\r
`,Ht,xe,St,ve,Dt,Ge,jt,be,Xe;return t=new jn({props:{title:"Tile Configuration"}}),$=new R({props:{h2:!0,id:"textures",$$slots:{default:[Bn]},$$scope:{ctx:u}}}),S=new An({props:{$$slots:{default:[Rn]},$$scope:{ctx:u}}}),I=new Ot({props:{premium:u[1],$$slots:{default:[Gn]},$$scope:{ctx:u}}}),V=new R({props:{h2:!0,id:"ceiling",$$slots:{default:[Nn]},$$scope:{ctx:u}}}),le=new qt({props:{href:"map-config#ceiling",$$slots:{default:[Un]},$$scope:{ctx:u}}}),re=new R({props:{h2:!0,id:"height",$$slots:{default:[Vn]},$$scope:{ctx:u}}}),se=new Ce({props:{$$slots:{default:[yn]},$$scope:{ctx:u}}}),ie=new R({props:{h2:!0,id:"depth",$$slots:{default:[Jn]},$$scope:{ctx:u}}}),oe=new Ce({props:{$$slots:{default:[Kn]},$$scope:{ctx:u}}}),fe=new R({props:{h2:!0,id:"fringe",$$slots:{default:[Qn]},$$scope:{ctx:u}}}),ae=new Ce({props:{$$slots:{default:[Xn]},$$scope:{ctx:u}}}),$e=new R({props:{h2:!0,id:"float",$$slots:{default:[Yn]},$$scope:{ctx:u}}}),ue=new Ce({props:{$$slots:{default:[Zn]},$$scope:{ctx:u}}}),He=new qn({props:{subject:"tile"}}),Se=new On({props:{subject:"tile"}}),De=new zn({props:{subject:"tile",premium:u[1]}}),pe=new R({props:{h2:!0,id:"tileoffset",$$slots:{default:[el]},$$scope:{ctx:u}}}),me=new Ce({props:{$$slots:{default:[tl]},$$scope:{ctx:u}}}),he=new R({props:{h2:!0,id:"slope",$$slots:{default:[nl]},$$scope:{ctx:u}}}),ce=new An({props:{$$slots:{default:[ll]},$$scope:{ctx:u}}}),de=new R({props:{h2:!0,id:"pass",$$slots:{default:[rl]},$$scope:{ctx:u}}}),_e=new R({props:{h2:!0,id:"width",$$slots:{default:[sl]},$$scope:{ctx:u}}}),we=new Ce({props:{$$slots:{default:[il]},$$scope:{ctx:u}}}),ge=new R({props:{h2:!0,id:"slant",$$slots:{default:[ol]},$$scope:{ctx:u}}}),xe=new Ce({props:{$$slots:{default:[fl]},$$scope:{ctx:u}}}),ve=new Ot({props:{block:!0,premium:u[1],$$slots:{default:[ul]},$$scope:{ctx:u}}}),Ge=new In({props:{subject:"tile",premium:u[1]}}),be=new Ot({props:{block:!0,premium:u[1],$$slots:{default:[_l]},$$scope:{ctx:u}}}),{c(){n=i(`\r
\r
    \r
`),x(t.$$.fragment),a=i(`\r
\r
`),x($.$$.fragment),f=i(`\r
`),m=c("p"),m.innerHTML=h,k=i(`\r
`),M=c("p"),M.innerHTML=_,A=i(`\r
\r
`),L=c("p"),L.textContent=g,H=i(`\r
`),x(S.$$.fragment),Y=i(`\r
\r
`),D=c("p"),Ue=i(`\r
    The img parameter should be either a tileset image name (A1-5, B, C, D, E) or a custom image name. Custom images are loaded form the img/`),G=i(K),Fe=i(` folder.\r
    Filenames should include the file extension.\r
    If the image path starts with a slash, it will be loaded relative to the project root folder instead. Example: `),z=c("code"),z.textContent=Pe,j=i(`\r
`),ne=i(`\r
\r
`),q=c("p"),q.innerHTML=Ve,N=i(`\r
\r
`),Q=c("p"),Q.innerHTML=ye,U=i(`\r
\r
`),X=c("p"),X.innerHTML=Je,Z=i(`\r
`),x(I.$$.fragment),p=i(`\r
\r
\r
`),w=c("p"),w.innerHTML=ee,O=i(`\r
\r
`),x(V.$$.fragment),ke=i(`\r
`),y=c("p"),zt=i(`\r
    Overrides the `),x(le.$$.fragment),It=i(` for this tile. This only works for bottom layer tiles.\r
`),et=i(`\r
\r
`),x(re.$$.fragment),tt=i(`\r
`),Me=c("p"),Me.textContent=Kt,nt=i(`\r
`),x(se.$$.fragment),lt=i(`\r
\r
`),x(ie.$$.fragment),rt=i(`\r
`),Ee=c("p"),Ee.innerHTML=Qt,st=i(`\r
`),x(oe.$$.fragment),it=i(`\r
\r
`),x(fe.$$.fragment),ot=i(`\r
`),Ae=c("p"),Ae.textContent=Xt,ft=i(`\r
`),x(ae.$$.fragment),at=i(`\r
\r
`),x($e.$$.fragment),$t=i(`\r
`),Le=c("p"),Le.textContent=Yt,ut=i(`\r
`),x(ue.$$.fragment),pt=i(`\r
\r
`),x(He.$$.fragment),mt=i(`\r
\r
`),x(Se.$$.fragment),ht=i(`\r
\r
`),x(De.$$.fragment),ct=i(`\r
\r
`),x(pe.$$.fragment),dt=i(`\r
`),je=c("p"),je.textContent=Zt,_t=i(`\r
`),x(me.$$.fragment),wt=i(`\r
\r
`),x(he.$$.fragment),gt=i(`\r
`),qe=c("p"),qe.textContent=en,xt=i(`\r
`),Oe=c("p"),Oe.textContent=tn,vt=i(`\r
`),x(ce.$$.fragment),bt=i(`\r
\r
`),ze=c("p"),ze.innerHTML=nn,Ct=i(`\r
\r
`),B=c("p"),Bt=i(`\r
    The top and side parameters are the textures used for the top and side of the slope. If these aren't set, it will use the normal top and side textures for the tile.\r
    `),Rt=c("br"),Wt=i("The texture parameters should be wrapped with "),Ke=c("code"),Gt=i(ln),Nt=i(` to group them into a single parameter.\r
    `),Ut=c("br"),Vt=i("Example: "),Qe=c("code"),yt=i(rn),Jt=i(`\r
`),Tt=i(`\r
\r
`),Ie=c("p"),Ie.innerHTML=sn,Ft=i(`\r
\r
`),x(de.$$.fragment),Pt=i(`\r
`),Be=c("p"),Be.innerHTML=on,kt=i(`\r
\r
`),x(_e.$$.fragment),Mt=i(`\r
`),Re=c("p"),Re.textContent=fn,Et=i(`\r
`),x(we.$$.fragment),At=i(`\r
\r
\r
`),x(ge.$$.fragment),Lt=i(`\r
`),We=c("p"),We.textContent=an,Ht=i(`\r
`),x(xe.$$.fragment),St=i(`\r
\r
`),x(ve.$$.fragment),Dt=i(`\r
\r
\r
`),x(Ge.$$.fragment),jt=i(`\r
\r
\r
\r
`),x(be.$$.fragment)},l(e){n=o(e,`\r
\r
    \r
`),v(t.$$.fragment,e),a=o(e,`\r
\r
`),v($.$$.fragment,e),f=o(e,`\r
`),m=d(e,"P",{"data-svelte-h":!0}),P(m)!=="svelte-1eglt4c"&&(m.innerHTML=h),k=o(e,`\r
`),M=d(e,"P",{"data-svelte-h":!0}),P(M)!=="svelte-1in5tp9"&&(M.innerHTML=_),A=o(e,`\r
\r
`),L=d(e,"P",{"data-svelte-h":!0}),P(L)!=="svelte-stwwka"&&(L.textContent=g),H=o(e,`\r
`),v(S.$$.fragment,e),Y=o(e,`\r
\r
`),D=d(e,"P",{});var l=Te(D);Ue=o(l,`\r
    The img parameter should be either a tileset image name (A1-5, B, C, D, E) or a custom image name. Custom images are loaded form the img/`),G=o(l,K),Fe=o(l,` folder.\r
    Filenames should include the file extension.\r
    If the image path starts with a slash, it will be loaded relative to the project root folder instead. Example: `),z=d(l,"CODE",{"data-svelte-h":!0}),P(z)!=="svelte-1visai7"&&(z.textContent=Pe),j=o(l,`\r
`),l.forEach(r),ne=o(e,`\r
\r
`),q=d(e,"P",{"data-svelte-h":!0}),P(q)!=="svelte-1qwdtqw"&&(q.innerHTML=Ve),N=o(e,`\r
\r
`),Q=d(e,"P",{"data-svelte-h":!0}),P(Q)!=="svelte-y93ma1"&&(Q.innerHTML=ye),U=o(e,`\r
\r
`),X=d(e,"P",{"data-svelte-h":!0}),P(X)!=="svelte-hc17oc"&&(X.innerHTML=Je),Z=o(e,`\r
`),v(I.$$.fragment,e),p=o(e,`\r
\r
\r
`),w=d(e,"P",{"data-svelte-h":!0}),P(w)!=="svelte-1623tze"&&(w.innerHTML=ee),O=o(e,`\r
\r
`),v(V.$$.fragment,e),ke=o(e,`\r
`),y=d(e,"P",{});var Ne=Te(y);zt=o(Ne,`\r
    Overrides the `),v(le.$$.fragment,Ne),It=o(Ne,` for this tile. This only works for bottom layer tiles.\r
`),Ne.forEach(r),et=o(e,`\r
\r
`),v(re.$$.fragment,e),tt=o(e,`\r
`),Me=d(e,"P",{"data-svelte-h":!0}),P(Me)!=="svelte-1i43yf5"&&(Me.textContent=Kt),nt=o(e,`\r
`),v(se.$$.fragment,e),lt=o(e,`\r
\r
`),v(ie.$$.fragment,e),rt=o(e,`\r
`),Ee=d(e,"P",{"data-svelte-h":!0}),P(Ee)!=="svelte-k74u1g"&&(Ee.innerHTML=Qt),st=o(e,`\r
`),v(oe.$$.fragment,e),it=o(e,`\r
\r
`),v(fe.$$.fragment,e),ot=o(e,`\r
`),Ae=d(e,"P",{"data-svelte-h":!0}),P(Ae)!=="svelte-19glyi5"&&(Ae.textContent=Xt),ft=o(e,`\r
`),v(ae.$$.fragment,e),at=o(e,`\r
\r
`),v($e.$$.fragment,e),$t=o(e,`\r
`),Le=d(e,"P",{"data-svelte-h":!0}),P(Le)!=="svelte-or0x3"&&(Le.textContent=Yt),ut=o(e,`\r
`),v(ue.$$.fragment,e),pt=o(e,`\r
\r
`),v(He.$$.fragment,e),mt=o(e,`\r
\r
`),v(Se.$$.fragment,e),ht=o(e,`\r
\r
`),v(De.$$.fragment,e),ct=o(e,`\r
\r
`),v(pe.$$.fragment,e),dt=o(e,`\r
`),je=d(e,"P",{"data-svelte-h":!0}),P(je)!=="svelte-1b9smjk"&&(je.textContent=Zt),_t=o(e,`\r
`),v(me.$$.fragment,e),wt=o(e,`\r
\r
`),v(he.$$.fragment,e),gt=o(e,`\r
`),qe=d(e,"P",{"data-svelte-h":!0}),P(qe)!=="svelte-q7oh37"&&(qe.textContent=en),xt=o(e,`\r
`),Oe=d(e,"P",{"data-svelte-h":!0}),P(Oe)!=="svelte-1c78zj5"&&(Oe.textContent=tn),vt=o(e,`\r
`),v(ce.$$.fragment,e),bt=o(e,`\r
\r
`),ze=d(e,"P",{"data-svelte-h":!0}),P(ze)!=="svelte-16mhbjq"&&(ze.innerHTML=nn),Ct=o(e,`\r
\r
`),B=d(e,"P",{});var W=Te(B);Bt=o(W,`\r
    The top and side parameters are the textures used for the top and side of the slope. If these aren't set, it will use the normal top and side textures for the tile.\r
    `),Rt=d(W,"BR",{}),Wt=o(W,"The texture parameters should be wrapped with "),Ke=d(W,"CODE",{});var Ye=Te(Ke);Gt=o(Ye,ln),Ye.forEach(r),Nt=o(W,` to group them into a single parameter.\r
    `),Ut=d(W,"BR",{}),Vt=o(W,"Example: "),Qe=d(W,"CODE",{});var Ze=Te(Qe);yt=o(Ze,rn),Ze.forEach(r),Jt=o(W,`\r
`),W.forEach(r),Tt=o(e,`\r
\r
`),Ie=d(e,"P",{"data-svelte-h":!0}),P(Ie)!=="svelte-1uyud1r"&&(Ie.innerHTML=sn),Ft=o(e,`\r
\r
`),v(de.$$.fragment,e),Pt=o(e,`\r
`),Be=d(e,"P",{"data-svelte-h":!0}),P(Be)!=="svelte-121y1uj"&&(Be.innerHTML=on),kt=o(e,`\r
\r
`),v(_e.$$.fragment,e),Mt=o(e,`\r
`),Re=d(e,"P",{"data-svelte-h":!0}),P(Re)!=="svelte-t3rnk6"&&(Re.textContent=fn),Et=o(e,`\r
`),v(we.$$.fragment,e),At=o(e,`\r
\r
\r
`),v(ge.$$.fragment,e),Lt=o(e,`\r
`),We=d(e,"P",{"data-svelte-h":!0}),P(We)!=="svelte-1cpxd7c"&&(We.textContent=an),Ht=o(e,`\r
`),v(xe.$$.fragment,e),St=o(e,`\r
\r
`),v(ve.$$.fragment,e),Dt=o(e,`\r
\r
\r
`),v(Ge.$$.fragment,e),jt=o(e,`\r
\r
\r
\r
`),v(be.$$.fragment,e)},m(e,l){s(e,n,l),b(t,e,l),s(e,a,l),b($,e,l),s(e,f,l),s(e,m,l),s(e,k,l),s(e,M,l),s(e,A,l),s(e,L,l),s(e,H,l),b(S,e,l),s(e,Y,l),s(e,D,l),E(D,Ue),E(D,G),E(D,Fe),E(D,z),E(D,j),s(e,ne,l),s(e,q,l),s(e,N,l),s(e,Q,l),s(e,U,l),s(e,X,l),s(e,Z,l),b(I,e,l),s(e,p,l),s(e,w,l),s(e,O,l),b(V,e,l),s(e,ke,l),s(e,y,l),E(y,zt),b(le,y,null),E(y,It),s(e,et,l),b(re,e,l),s(e,tt,l),s(e,Me,l),s(e,nt,l),b(se,e,l),s(e,lt,l),b(ie,e,l),s(e,rt,l),s(e,Ee,l),s(e,st,l),b(oe,e,l),s(e,it,l),b(fe,e,l),s(e,ot,l),s(e,Ae,l),s(e,ft,l),b(ae,e,l),s(e,at,l),b($e,e,l),s(e,$t,l),s(e,Le,l),s(e,ut,l),b(ue,e,l),s(e,pt,l),b(He,e,l),s(e,mt,l),b(Se,e,l),s(e,ht,l),b(De,e,l),s(e,ct,l),b(pe,e,l),s(e,dt,l),s(e,je,l),s(e,_t,l),b(me,e,l),s(e,wt,l),b(he,e,l),s(e,gt,l),s(e,qe,l),s(e,xt,l),s(e,Oe,l),s(e,vt,l),b(ce,e,l),s(e,bt,l),s(e,ze,l),s(e,Ct,l),s(e,B,l),E(B,Bt),E(B,Rt),E(B,Wt),E(B,Ke),E(Ke,Gt),E(B,Nt),E(B,Ut),E(B,Vt),E(B,Qe),E(Qe,yt),E(B,Jt),s(e,Tt,l),s(e,Ie,l),s(e,Ft,l),b(de,e,l),s(e,Pt,l),s(e,Be,l),s(e,kt,l),b(_e,e,l),s(e,Mt,l),s(e,Re,l),s(e,Et,l),b(we,e,l),s(e,At,l),b(ge,e,l),s(e,Lt,l),s(e,We,l),s(e,Ht,l),b(xe,e,l),s(e,St,l),b(ve,e,l),s(e,Dt,l),b(Ge,e,l),s(e,jt,l),b(be,e,l),Xe=!0},p(e,[l]){const Ne={};l&4&&(Ne.$$scope={dirty:l,ctx:e}),$.$set(Ne);const W={};l&4&&(W.$$scope={dirty:l,ctx:e}),S.$set(W),(!Xe||l&1)&&K!==(K=e[0].pluginName.toUpperCase()+"")&&Ln(G,K);const Ye={};l&4&&(Ye.$$scope={dirty:l,ctx:e}),I.$set(Ye);const Ze={};l&4&&(Ze.$$scope={dirty:l,ctx:e}),V.$set(Ze);const $n={};l&4&&($n.$$scope={dirty:l,ctx:e}),le.$set($n);const un={};l&4&&(un.$$scope={dirty:l,ctx:e}),re.$set(un);const pn={};l&4&&(pn.$$scope={dirty:l,ctx:e}),se.$set(pn);const mn={};l&4&&(mn.$$scope={dirty:l,ctx:e}),ie.$set(mn);const hn={};l&4&&(hn.$$scope={dirty:l,ctx:e}),oe.$set(hn);const cn={};l&4&&(cn.$$scope={dirty:l,ctx:e}),fe.$set(cn);const dn={};l&4&&(dn.$$scope={dirty:l,ctx:e}),ae.$set(dn);const _n={};l&4&&(_n.$$scope={dirty:l,ctx:e}),$e.$set(_n);const wn={};l&4&&(wn.$$scope={dirty:l,ctx:e}),ue.$set(wn);const gn={};l&4&&(gn.$$scope={dirty:l,ctx:e}),pe.$set(gn);const xn={};l&4&&(xn.$$scope={dirty:l,ctx:e}),me.$set(xn);const vn={};l&4&&(vn.$$scope={dirty:l,ctx:e}),he.$set(vn);const bn={};l&4&&(bn.$$scope={dirty:l,ctx:e}),ce.$set(bn);const Cn={};l&4&&(Cn.$$scope={dirty:l,ctx:e}),de.$set(Cn);const Tn={};l&4&&(Tn.$$scope={dirty:l,ctx:e}),_e.$set(Tn);const Fn={};l&4&&(Fn.$$scope={dirty:l,ctx:e}),we.$set(Fn);const Pn={};l&4&&(Pn.$$scope={dirty:l,ctx:e}),ge.$set(Pn);const kn={};l&4&&(kn.$$scope={dirty:l,ctx:e}),xe.$set(kn);const Mn={};l&4&&(Mn.$$scope={dirty:l,ctx:e}),ve.$set(Mn);const En={};l&5&&(En.$$scope={dirty:l,ctx:e}),be.$set(En)},i(e){Xe||(C(t.$$.fragment,e),C($.$$.fragment,e),C(S.$$.fragment,e),C(I.$$.fragment,e),C(V.$$.fragment,e),C(le.$$.fragment,e),C(re.$$.fragment,e),C(se.$$.fragment,e),C(ie.$$.fragment,e),C(oe.$$.fragment,e),C(fe.$$.fragment,e),C(ae.$$.fragment,e),C($e.$$.fragment,e),C(ue.$$.fragment,e),C(He.$$.fragment,e),C(Se.$$.fragment,e),C(De.$$.fragment,e),C(pe.$$.fragment,e),C(me.$$.fragment,e),C(he.$$.fragment,e),C(ce.$$.fragment,e),C(de.$$.fragment,e),C(_e.$$.fragment,e),C(we.$$.fragment,e),C(ge.$$.fragment,e),C(xe.$$.fragment,e),C(ve.$$.fragment,e),C(Ge.$$.fragment,e),C(be.$$.fragment,e),Xe=!0)},o(e){T(t.$$.fragment,e),T($.$$.fragment,e),T(S.$$.fragment,e),T(I.$$.fragment,e),T(V.$$.fragment,e),T(le.$$.fragment,e),T(re.$$.fragment,e),T(se.$$.fragment,e),T(ie.$$.fragment,e),T(oe.$$.fragment,e),T(fe.$$.fragment,e),T(ae.$$.fragment,e),T($e.$$.fragment,e),T(ue.$$.fragment,e),T(He.$$.fragment,e),T(Se.$$.fragment,e),T(De.$$.fragment,e),T(pe.$$.fragment,e),T(me.$$.fragment,e),T(he.$$.fragment,e),T(ce.$$.fragment,e),T(de.$$.fragment,e),T(_e.$$.fragment,e),T(we.$$.fragment,e),T(ge.$$.fragment,e),T(xe.$$.fragment,e),T(ve.$$.fragment,e),T(Ge.$$.fragment,e),T(be.$$.fragment,e),Xe=!1},d(e){e&&(r(n),r(a),r(f),r(m),r(k),r(M),r(A),r(L),r(H),r(Y),r(D),r(ne),r(q),r(N),r(Q),r(U),r(X),r(Z),r(p),r(w),r(O),r(ke),r(y),r(et),r(tt),r(Me),r(nt),r(lt),r(rt),r(Ee),r(st),r(it),r(ot),r(Ae),r(ft),r(at),r($t),r(Le),r(ut),r(pt),r(mt),r(ht),r(ct),r(dt),r(je),r(_t),r(wt),r(gt),r(qe),r(xt),r(Oe),r(vt),r(bt),r(ze),r(Ct),r(B),r(Tt),r(Ie),r(Ft),r(Pt),r(Be),r(kt),r(Mt),r(Re),r(Et),r(At),r(Lt),r(We),r(Ht),r(St),r(Dt),r(jt)),F(t,e),F($,e),F(S,e),F(I,e),F(V,e),F(le),F(re,e),F(se,e),F(ie,e),F(oe,e),F(fe,e),F(ae,e),F($e,e),F(ue,e),F(He,e),F(Se,e),F(De,e),F(pe,e),F(me,e),F(he,e),F(ce,e),F(de,e),F(_e,e),F(we,e),F(ge,e),F(xe,e),F(ve,e),F(Ge,e),F(be,e)}}}function gl(u,n,t){let{data:a}=n,$=a.premium;return u.$$set=f=>{"data"in f&&t(0,a=f.data)},[a,$]}class Al extends Sn{constructor(n){super(),Dn(this,n,gl,wl,Hn,{data:0})}}export{Al as component};
