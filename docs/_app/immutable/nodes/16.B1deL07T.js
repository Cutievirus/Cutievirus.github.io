import{s as Hn,n as te}from"../chunks/scheduler.Cdu_wsp_.js";import{S as Sn,i as Dn,t as o,c as x,k as c,a as f,b as v,l as d,n as P,o as Te,g as s,d as i,m as b,p as E,s as Ln,e as C,f as T,h as F,q as J}from"../chunks/index.gwBTkKco.js";import{A as R}from"../chunks/Anchor.Ct3bDT7x.js";import"../chunks/entry.mEstBqD3.js";/* empty css                                                     */import{C as Ce}from"../chunks/Code.j1pNgbFo.js";import{L as qt}from"../chunks/Link.DqQNm6cE.js";import{P as jn}from"../chunks/PageTitle.bKvIm82Y.js";import{V as Ot}from"../chunks/Version.B286Izlg.js";import{S as qn,R as On,O as zn,G as In}from"../chunks/ShapeFunction.ILctvY0n.js";import{P as An}from"../chunks/ParameterList.Q-Qm_bpW.js";function Bn(u){let n;return{c(){n=o("Texture Functions")},l(t){n=f(t,"Texture Functions")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Rn(u){let n;return{c(){n=o(`
img,x,y,w,h|alpha|glow,glowintensity|anim:animx,animy
`)},l(t){n=f(t,`
img,x,y,w,h|alpha|glow,glowintensity|anim:animx,animy
`)},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Wn(u){let n,t,$,r,a="glow function",m;return{c(){n=o(`
        Due to a bug the second parameter seems to not work for tile textures... Glow intensity will always be 1.
        `),t=c("br"),$=o(" For now, use the "),r=c("a"),r.textContent=a,m=o(` instead if you need to set the glow intensity.
    `),this.h()},l(h){n=f(h,`
        Due to a bug the second parameter seems to not work for tile textures... Glow intensity will always be 1.
        `),t=d(h,"BR",{}),$=f(h," For now, use the "),r=d(h,"A",{href:!0,"data-svelte-h":!0}),P(r)!=="svelte-jipaxt"&&(r.textContent=a),m=f(h,` instead if you need to set the glow intensity.
    `),this.h()},h(){J(r,"href","#glow")},m(h,k){i(h,n,k),i(h,t,k),i(h,$,k),i(h,r,k),i(h,m,k)},p:te,d(h){h&&(s(n),s(t),s($),s(r),s(m))}}}function Gn(u){let n,t,$=`
        A second parameter can be provided to control the intensity of the premium glow effect.
    `,r,a,m,h,k="texture(||1,0), texture(glow:red,1)",M,_,A,L;return _=new Ot({props:{block:!0,bug:!0,$$slots:{default:[Wn]},$$scope:{ctx:u}}}),{c(){n=o(`
    `),t=c("p"),t.textContent=$,r=o(`
    
    `),a=c("br"),m=o("Examples: "),h=c("code"),h.textContent=k,M=o(`
    `),x(_.$$.fragment),A=o(`
`)},l(g){n=f(g,`
    `),t=d(g,"P",{"data-svelte-h":!0}),P(t)!=="svelte-pajxct"&&(t.textContent=$),r=f(g,`
    
    `),a=d(g,"BR",{}),m=f(g,"Examples: "),h=d(g,"CODE",{"data-svelte-h":!0}),P(h)!=="svelte-150pqnu"&&(h.textContent=k),M=f(g,`
    `),v(_.$$.fragment,g),A=f(g,`
`)},m(g,H){i(g,n,H),i(g,t,H),i(g,r,H),i(g,a,H),i(g,m,H),i(g,h,H),i(g,M,H),b(_,g,H),i(g,A,H),L=!0},p(g,H){const S={};H&4&&(S.$$scope={dirty:H,ctx:g}),_.$set(S)},i(g){L||(C(_.$$.fragment,g),L=!0)},o(g){T(_.$$.fragment,g),L=!1},d(g){g&&(s(n),s(t),s(r),s(a),s(m),s(h),s(M),s(A)),F(_,g)}}}function Nn(u){let n;return{c(){n=o("Ceiling Function")},l(t){n=f(t,"Ceiling Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Un(u){let n;return{c(){n=o("ceiling config set for the map")},l(t){n=f(t,"ceiling config set for the map")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Vn(u){let n;return{c(){n=o("Height Function")},l(t){n=f(t,"Height Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function yn(u){let n,t,$="n",r;return{c(){n=o("height("),t=c("samp"),t.textContent=$,r=o(")"),this.h()},l(a){n=f(a,"height("),t=d(a,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=$),r=f(a,")"),this.h()},h(){J(t,"title","number")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function Jn(u){let n;return{c(){n=o("Depth Function")},l(t){n=f(t,"Depth Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Kn(u){let n,t,$="n",r;return{c(){n=o("depth("),t=c("samp"),t.textContent=$,r=o(")"),this.h()},l(a){n=f(a,"depth("),t=d(a,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=$),r=f(a,")"),this.h()},h(){J(t,"title","number")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function Qn(u){let n;return{c(){n=o("Fringe Function")},l(t){n=f(t,"Fringe Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Xn(u){let n,t,$="n",r;return{c(){n=o("fringe("),t=c("samp"),t.textContent=$,r=o(")"),this.h()},l(a){n=f(a,"fringe("),t=d(a,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=$),r=f(a,")"),this.h()},h(){J(t,"title","number")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function Yn(u){let n;return{c(){n=o("Float Function")},l(t){n=f(t,"Float Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function Zn(u){let n,t,$="n",r;return{c(){n=o("float("),t=c("samp"),t.textContent=$,r=o(")"),this.h()},l(a){n=f(a,"float("),t=d(a,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=$),r=f(a,")"),this.h()},h(){J(t,"title","number")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function el(u){let n;return{c(){n=o("Tile Offset Function")},l(t){n=f(t,"Tile Offset Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function tl(u){let n,t,$="x",r,a,m="y",h;return{c(){n=o("tileoffset("),t=c("samp"),t.textContent=$,r=o(","),a=c("samp"),a.textContent=m,h=o(")"),this.h()},l(k){n=f(k,"tileoffset("),t=d(k,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-p3ccxq"&&(t.textContent=$),r=f(k,","),a=d(k,"SAMP",{title:!0,"data-svelte-h":!0}),P(a)!=="svelte-eyvwfd"&&(a.textContent=m),h=f(k,")"),this.h()},h(){J(t,"title","number"),J(a,"title","number")},m(k,M){i(k,n,M),i(k,t,M),i(k,r,M),i(k,a,M),i(k,h,M)},p:te,d(k){k&&(s(n),s(t),s(r),s(a),s(h))}}}function nl(u){let n;return{c(){n=o("Slope Function")},l(t){n=f(t,"Slope Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function ll(u){let n;return{c(){n=o("height,direction|top,side|texrot")},l(t){n=f(t,"height,direction|top,side|texrot")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function sl(u){let n;return{c(){n=o("Pass Function")},l(t){n=f(t,"Pass Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function il(u){let n;return{c(){n=o("Width Function")},l(t){n=f(t,"Width Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function ol(u){let n,t,$="n",r;return{c(){n=o("width("),t=c("samp"),t.textContent=$,r=o(")"),this.h()},l(a){n=f(a,"width("),t=d(a,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=$),r=f(a,")"),this.h()},h(){J(t,"title","number")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function fl(u){let n;return{c(){n=o("Slant Function")},l(t){n=f(t,"Slant Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function al(u){let n,t,$="n",r;return{c(){n=o("width("),t=c("samp"),t.textContent=$,r=o(")"),this.h()},l(a){n=f(a,"width("),t=d(a,"SAMP",{title:!0,"data-svelte-h":!0}),P(t)!=="svelte-11z14xk"&&(t.textContent=$),r=f(a,")"),this.h()},h(){J(t,"title","number")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function $l(u){let n;return{c(){n=o("Shadow Function")},l(t){n=f(t,"Shadow Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function rl(u){let n,t,$="true/false",r;return{c(){n=o("shadow("),t=c("samp"),t.textContent=$,r=o(")")},l(a){n=f(a,"shadow("),t=d(a,"SAMP",{"data-svelte-h":!0}),P(t)!=="svelte-17yyxv0"&&(t.textContent=$),r=f(a,")")},m(a,m){i(a,n,m),i(a,t,m),i(a,r,m)},p:te,d(a){a&&(s(n),s(t),s(r))}}}function ul(u){let n,t,$,r,a="Whether the tile should cast shadows, true by default.",m,h,k,M;return t=new R({props:{h2:!0,id:"shadow",$$slots:{default:[$l]},$$scope:{ctx:u}}}),h=new Ce({props:{$$slots:{default:[rl]},$$scope:{ctx:u}}}),{c(){n=o(`
    `),x(t.$$.fragment),$=o(`
    `),r=c("p"),r.textContent=a,m=o(`
    `),x(h.$$.fragment),k=o(`
`)},l(_){n=f(_,`
    `),v(t.$$.fragment,_),$=f(_,`
    `),r=d(_,"P",{"data-svelte-h":!0}),P(r)!=="svelte-13gfl95"&&(r.textContent=a),m=f(_,`
    `),v(h.$$.fragment,_),k=f(_,`
`)},m(_,A){i(_,n,A),b(t,_,A),i(_,$,A),i(_,r,A),i(_,m,A),b(h,_,A),i(_,k,A),M=!0},p(_,A){const L={};A&4&&(L.$$scope={dirty:A,ctx:_}),t.$set(L);const g={};A&4&&(g.$$scope={dirty:A,ctx:_}),h.$set(g)},i(_){M||(C(t.$$.fragment,_),C(h.$$.fragment,_),M=!0)},o(_){T(t.$$.fragment,_),T(h.$$.fragment,_),M=!1},d(_){_&&(s(n),s($),s(r),s(m),s(k)),F(t,_),F(h,_)}}}function pl(u){let n;return{c(){n=o("Model Function")},l(t){n=f(t,"Model Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function ml(u){let n;return{c(){n=o("Importing Models")},l(t){n=f(t,"Importing Models")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function hl(u){let n;return{c(){n=o("Mesh Function")},l(t){n=f(t,"Mesh Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function cl(u){let n;return{c(){n=o("Mesh Building")},l(t){n=f(t,"Mesh Building")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function dl(u){let n;return{c(){n=o("Scale Function")},l(t){n=f(t,"Scale Function")},m(t,$){i(t,n,$)},d(t){t&&s(n)}}}function _l(u){let n,t,$,r,a="Imports a 3D model for the tile.",m,h,k,M=u[0].pluginName.toUpperCase()+"",_,A,L,g,H,S,Y,D,Ue="Constructs a mesh for the tile based on a mesh string.",K,G,Fe,z,Pe,j,ne,q,Ve,N,Q="width",ye,U,X="height",Je,Z,I;return t=new R({props:{h2:!0,id:"model",$$slots:{default:[pl]},$$scope:{ctx:u}}}),L=new qt({props:{href:"modeling#model-import",$$slots:{default:[ml]},$$scope:{ctx:u}}}),S=new R({props:{h2:!0,id:"mesh",$$slots:{default:[hl]},$$scope:{ctx:u}}}),z=new qt({props:{href:"modeling#mesh",$$slots:{default:[cl]},$$scope:{ctx:u}}}),q=new qt({props:{href:"event-config#scale",$$slots:{default:[dl]},$$scope:{ctx:u}}}),{c(){n=o(`

`),x(t.$$.fragment),$=o(`
`),r=c("p"),r.textContent=a,m=o(`
`),h=c("p"),k=o("For more information about importing 3D models into "),_=o(M),A=o(", see "),x(L.$$.fragment),g=o("."),H=o(`

`),x(S.$$.fragment),Y=o(`
`),D=c("p"),D.textContent=Ue,K=o(`
`),G=c("p"),Fe=o("For more information about mesh strings, see "),x(z.$$.fragment),Pe=o(`

`),j=c("p"),ne=o("When using model or mesh, you should use the "),x(q.$$.fragment),Ve=o(" to set the size instead of "),N=c("a"),N.textContent=Q,ye=o(" and "),U=c("a"),U.textContent=X,Je=o("."),Z=o(`
`),this.h()},l(p){n=f(p,`

`),v(t.$$.fragment,p),$=f(p,`
`),r=d(p,"P",{"data-svelte-h":!0}),P(r)!=="svelte-1j5osw9"&&(r.textContent=a),m=f(p,`
`),h=d(p,"P",{});var w=Te(h);k=f(w,"For more information about importing 3D models into "),_=f(w,M),A=f(w,", see "),v(L.$$.fragment,w),g=f(w,"."),w.forEach(s),H=f(p,`

`),v(S.$$.fragment,p),Y=f(p,`
`),D=d(p,"P",{"data-svelte-h":!0}),P(D)!=="svelte-1px76el"&&(D.textContent=Ue),K=f(p,`
`),G=d(p,"P",{});var ee=Te(G);Fe=f(ee,"For more information about mesh strings, see "),v(z.$$.fragment,ee),ee.forEach(s),Pe=f(p,`

`),j=d(p,"P",{});var O=Te(j);ne=f(O,"When using model or mesh, you should use the "),v(q.$$.fragment,O),Ve=f(O," to set the size instead of "),N=d(O,"A",{href:!0,"data-svelte-h":!0}),P(N)!=="svelte-uffdsb"&&(N.textContent=Q),ye=f(O," and "),U=d(O,"A",{href:!0,"data-svelte-h":!0}),P(U)!=="svelte-8tiic7"&&(U.textContent=X),Je=f(O,"."),O.forEach(s),Z=f(p,`
`),this.h()},h(){J(N,"href","#width"),J(U,"href","#height")},m(p,w){i(p,n,w),b(t,p,w),i(p,$,w),i(p,r,w),i(p,m,w),i(p,h,w),E(h,k),E(h,_),E(h,A),b(L,h,null),E(h,g),i(p,H,w),b(S,p,w),i(p,Y,w),i(p,D,w),i(p,K,w),i(p,G,w),E(G,Fe),b(z,G,null),i(p,Pe,w),i(p,j,w),E(j,ne),b(q,j,null),E(j,Ve),E(j,N),E(j,ye),E(j,U),E(j,Je),i(p,Z,w),I=!0},p(p,w){const ee={};w&4&&(ee.$$scope={dirty:w,ctx:p}),t.$set(ee),(!I||w&1)&&M!==(M=p[0].pluginName.toUpperCase()+"")&&Ln(_,M);const O={};w&4&&(O.$$scope={dirty:w,ctx:p}),L.$set(O);const V={};w&4&&(V.$$scope={dirty:w,ctx:p}),S.$set(V);const ke={};w&4&&(ke.$$scope={dirty:w,ctx:p}),z.$set(ke);const y={};w&4&&(y.$$scope={dirty:w,ctx:p}),q.$set(y)},i(p){I||(C(t.$$.fragment,p),C(L.$$.fragment,p),C(S.$$.fragment,p),C(z.$$.fragment,p),C(q.$$.fragment,p),I=!0)},o(p){T(t.$$.fragment,p),T(L.$$.fragment,p),T(S.$$.fragment,p),T(z.$$.fragment,p),T(q.$$.fragment,p),I=!1},d(p){p&&(s(n),s($),s(r),s(m),s(h),s(H),s(Y),s(D),s(K),s(G),s(Pe),s(j),s(Z)),F(t,p),F(L),F(S,p),F(z),F(q)}}}function wl(u){let n,t,$,r,a,m,h=`
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
`,O,V,ke,y,zt,le,It,et,se,tt,Me,Kt=`
    The height function, as the name implies will set the height for a tile.
    Tiles will be stacked on top of tiles layered below them, so if you configure height on both an upper layer and lower layer tile,
    their heights will be effectively combined.
`,nt,ie,lt,oe,st,Ee,Qt=`
    The depth function will set the depth of a tile. Depth is like a negative height,
    the tile&#39;s effective height will be its own height minus its depth. If there is a tile on a layer below the tile with depth,
    it will &quot;cut a hole&quot; in that tile, reducing that tile&#39;s height instead.
    <br/>The primary use is to create pits, bodies of water, and other holes in the ground.
    The side texture of the tile will use the &quot;inside&quot; texture for the part of the height caused by the depth.
`,it,fe,ot,ae,ft,Ae,Xt=`
    The fringe function will add a gap between the tile and the tile below it, effectively making the tile appear to be floating.
    The player can walk under the tile if the gap is large enough.
`,at,$e,$t,re,rt,Le,Yt=`
    The float function will set a distance above the tile that boats and ships should float above the tile.
    This is useful if you used the depth function to create a body of water and want boats to float near the top of the water instead of at the bottom.
`,ut,ue,pt,He,mt,Se,ht,De,ct,pe,dt,je,Zt=`
    The tile offset function will offset the tile's actual position on the map.
    This is used by default for star tiles to move them one tile down onto the tile below them.
`,_t,me,wt,he,gt,qe,en=`
    The slope sets the tile shape to slope and configures other slope-related settings.
`,xt,Oe,tn="parameter list:",vt,ce,bt,ze,nn=`
    The height parameter is the height of the slope. The direction parameter is the direction the slope is facing.
    <br/>Direction can be <code>n</code>, <code>s</code>, <code>e</code>, <code>w</code>, <code>ne</code>, <code>se</code>, <code>sw</code>, <code>nw</code>.
    <br/>The diagonal directions can be appended with <code>i</code> or <code>o</code> to indicate they&#39;re an inner or outer corner, for example <code>nei</code> or <code>neo</code>.
    <br/>Direction can also be set up with the shadow pen <span class="TODO">link to mapping page</span>.
    <br/>Examples: <code>slope(2,e), slope(2,e), slope(2,swi)</code>
`,Ct,B,Bt,Rt,Wt,Ke,ln="{}",Gt,Nt,Ut,Vt,Qe,sn="slope(2,top:{A4,0,0},side:{A4,0,1})",yt,Jt,Tt,Ie,on=`
    The texrot parameter is whether the texture should be rotated to match the slope&#39;s direction. For regular tiles this is true by default, but for autotiles it&#39;s false.
    <br/>Example: <code>slope(2||false), slope(2,texrot:true)</code>
`,Ft,de,Pt,Be,fn=`
    The pass function can be used to alter the passability of a tile. Possible values are <code>pass(o)</code> meaning you can walk on the tile, <code>pass(x)</code> meaning you cannot walk on the tile, and <code>pass(*)</code> meaning you can walk through the tile.
`,kt,_e,Mt,Re,an=`
    The width function can be used to set the width of a tile. This can be useful for creating pillars that are thicker or thinner than a normal tile.
`,Et,we,At,ge,Lt,We,$n=`
    The slant function can be used to give the walls of the tile a slight angle instead of being perfectly vertical.
    The exact angle will vary depending on the height of the tile, because the value provided is the extra vertical distance the bottom of the tile will occupy.
`,Ht,xe,St,ve,Dt,Ge,jt,be,Xe;return t=new jn({props:{title:"Tile Configuration"}}),r=new R({props:{h2:!0,id:"textures",$$slots:{default:[Bn]},$$scope:{ctx:u}}}),S=new An({props:{$$slots:{default:[Rn]},$$scope:{ctx:u}}}),I=new Ot({props:{premium:u[1],$$slots:{default:[Gn]},$$scope:{ctx:u}}}),V=new R({props:{h2:!0,id:"ceiling",$$slots:{default:[Nn]},$$scope:{ctx:u}}}),le=new qt({props:{href:"map-config#ceiling",$$slots:{default:[Un]},$$scope:{ctx:u}}}),se=new R({props:{h2:!0,id:"height",$$slots:{default:[Vn]},$$scope:{ctx:u}}}),ie=new Ce({props:{$$slots:{default:[yn]},$$scope:{ctx:u}}}),oe=new R({props:{h2:!0,id:"depth",$$slots:{default:[Jn]},$$scope:{ctx:u}}}),fe=new Ce({props:{$$slots:{default:[Kn]},$$scope:{ctx:u}}}),ae=new R({props:{h2:!0,id:"fringe",$$slots:{default:[Qn]},$$scope:{ctx:u}}}),$e=new Ce({props:{$$slots:{default:[Xn]},$$scope:{ctx:u}}}),re=new R({props:{h2:!0,id:"float",$$slots:{default:[Yn]},$$scope:{ctx:u}}}),ue=new Ce({props:{$$slots:{default:[Zn]},$$scope:{ctx:u}}}),He=new qn({props:{subject:"tile"}}),Se=new On({props:{subject:"tile"}}),De=new zn({props:{subject:"tile",premium:u[1]}}),pe=new R({props:{h2:!0,id:"tileoffset",$$slots:{default:[el]},$$scope:{ctx:u}}}),me=new Ce({props:{$$slots:{default:[tl]},$$scope:{ctx:u}}}),he=new R({props:{h2:!0,id:"slope",$$slots:{default:[nl]},$$scope:{ctx:u}}}),ce=new An({props:{$$slots:{default:[ll]},$$scope:{ctx:u}}}),de=new R({props:{h2:!0,id:"pass",$$slots:{default:[sl]},$$scope:{ctx:u}}}),_e=new R({props:{h2:!0,id:"width",$$slots:{default:[il]},$$scope:{ctx:u}}}),we=new Ce({props:{$$slots:{default:[ol]},$$scope:{ctx:u}}}),ge=new R({props:{h2:!0,id:"slant",$$slots:{default:[fl]},$$scope:{ctx:u}}}),xe=new Ce({props:{$$slots:{default:[al]},$$scope:{ctx:u}}}),ve=new Ot({props:{block:!0,premium:u[1],$$slots:{default:[ul]},$$scope:{ctx:u}}}),Ge=new In({props:{subject:"tile",premium:u[1]}}),be=new Ot({props:{block:!0,premium:u[1],$$slots:{default:[_l]},$$scope:{ctx:u}}}),{c(){n=o(`

    
`),x(t.$$.fragment),$=o(`

`),x(r.$$.fragment),a=o(`
`),m=c("p"),m.innerHTML=h,k=o(`
`),M=c("p"),M.innerHTML=_,A=o(`

`),L=c("p"),L.textContent=g,H=o(`
`),x(S.$$.fragment),Y=o(`

`),D=c("p"),Ue=o(`
    The img parameter should be either a tileset image name (A1-5, B, C, D, E) or a custom image name. Custom images are loaded form the img/`),G=o(K),Fe=o(` folder.
    Filenames should include the file extension.
    If the image path starts with a slash, it will be loaded relative to the project root folder instead. Example: `),z=c("code"),z.textContent=Pe,j=o(`
`),ne=o(`

`),q=c("p"),q.innerHTML=Ve,N=o(`

`),Q=c("p"),Q.innerHTML=ye,U=o(`

`),X=c("p"),X.innerHTML=Je,Z=o(`
`),x(I.$$.fragment),p=o(`


`),w=c("p"),w.innerHTML=ee,O=o(`

`),x(V.$$.fragment),ke=o(`
`),y=c("p"),zt=o(`
    Overrides the `),x(le.$$.fragment),It=o(` for this tile. This only works for bottom layer tiles.
`),et=o(`

`),x(se.$$.fragment),tt=o(`
`),Me=c("p"),Me.textContent=Kt,nt=o(`
`),x(ie.$$.fragment),lt=o(`

`),x(oe.$$.fragment),st=o(`
`),Ee=c("p"),Ee.innerHTML=Qt,it=o(`
`),x(fe.$$.fragment),ot=o(`

`),x(ae.$$.fragment),ft=o(`
`),Ae=c("p"),Ae.textContent=Xt,at=o(`
`),x($e.$$.fragment),$t=o(`

`),x(re.$$.fragment),rt=o(`
`),Le=c("p"),Le.textContent=Yt,ut=o(`
`),x(ue.$$.fragment),pt=o(`

`),x(He.$$.fragment),mt=o(`

`),x(Se.$$.fragment),ht=o(`

`),x(De.$$.fragment),ct=o(`

`),x(pe.$$.fragment),dt=o(`
`),je=c("p"),je.textContent=Zt,_t=o(`
`),x(me.$$.fragment),wt=o(`

`),x(he.$$.fragment),gt=o(`
`),qe=c("p"),qe.textContent=en,xt=o(`
`),Oe=c("p"),Oe.textContent=tn,vt=o(`
`),x(ce.$$.fragment),bt=o(`

`),ze=c("p"),ze.innerHTML=nn,Ct=o(`

`),B=c("p"),Bt=o(`
    The top and side parameters are the textures used for the top and side of the slope. If these aren't set, it will use the normal top and side textures for the tile.
    `),Rt=c("br"),Wt=o("The texture parameters should be wrapped with "),Ke=c("code"),Gt=o(ln),Nt=o(` to group them into a single parameter.
    `),Ut=c("br"),Vt=o("Example: "),Qe=c("code"),yt=o(sn),Jt=o(`
`),Tt=o(`

`),Ie=c("p"),Ie.innerHTML=on,Ft=o(`

`),x(de.$$.fragment),Pt=o(`
`),Be=c("p"),Be.innerHTML=fn,kt=o(`

`),x(_e.$$.fragment),Mt=o(`
`),Re=c("p"),Re.textContent=an,Et=o(`
`),x(we.$$.fragment),At=o(`


`),x(ge.$$.fragment),Lt=o(`
`),We=c("p"),We.textContent=$n,Ht=o(`
`),x(xe.$$.fragment),St=o(`

`),x(ve.$$.fragment),Dt=o(`


`),x(Ge.$$.fragment),jt=o(`



`),x(be.$$.fragment)},l(e){n=f(e,`

    
`),v(t.$$.fragment,e),$=f(e,`

`),v(r.$$.fragment,e),a=f(e,`
`),m=d(e,"P",{"data-svelte-h":!0}),P(m)!=="svelte-1eglt4c"&&(m.innerHTML=h),k=f(e,`
`),M=d(e,"P",{"data-svelte-h":!0}),P(M)!=="svelte-1in5tp9"&&(M.innerHTML=_),A=f(e,`

`),L=d(e,"P",{"data-svelte-h":!0}),P(L)!=="svelte-stwwka"&&(L.textContent=g),H=f(e,`
`),v(S.$$.fragment,e),Y=f(e,`

`),D=d(e,"P",{});var l=Te(D);Ue=f(l,`
    The img parameter should be either a tileset image name (A1-5, B, C, D, E) or a custom image name. Custom images are loaded form the img/`),G=f(l,K),Fe=f(l,` folder.
    Filenames should include the file extension.
    If the image path starts with a slash, it will be loaded relative to the project root folder instead. Example: `),z=d(l,"CODE",{"data-svelte-h":!0}),P(z)!=="svelte-1visai7"&&(z.textContent=Pe),j=f(l,`
`),l.forEach(s),ne=f(e,`

`),q=d(e,"P",{"data-svelte-h":!0}),P(q)!=="svelte-1qwdtqw"&&(q.innerHTML=Ve),N=f(e,`

`),Q=d(e,"P",{"data-svelte-h":!0}),P(Q)!=="svelte-y93ma1"&&(Q.innerHTML=ye),U=f(e,`

`),X=d(e,"P",{"data-svelte-h":!0}),P(X)!=="svelte-hc17oc"&&(X.innerHTML=Je),Z=f(e,`
`),v(I.$$.fragment,e),p=f(e,`


`),w=d(e,"P",{"data-svelte-h":!0}),P(w)!=="svelte-1623tze"&&(w.innerHTML=ee),O=f(e,`

`),v(V.$$.fragment,e),ke=f(e,`
`),y=d(e,"P",{});var Ne=Te(y);zt=f(Ne,`
    Overrides the `),v(le.$$.fragment,Ne),It=f(Ne,` for this tile. This only works for bottom layer tiles.
`),Ne.forEach(s),et=f(e,`

`),v(se.$$.fragment,e),tt=f(e,`
`),Me=d(e,"P",{"data-svelte-h":!0}),P(Me)!=="svelte-1i43yf5"&&(Me.textContent=Kt),nt=f(e,`
`),v(ie.$$.fragment,e),lt=f(e,`

`),v(oe.$$.fragment,e),st=f(e,`
`),Ee=d(e,"P",{"data-svelte-h":!0}),P(Ee)!=="svelte-k74u1g"&&(Ee.innerHTML=Qt),it=f(e,`
`),v(fe.$$.fragment,e),ot=f(e,`

`),v(ae.$$.fragment,e),ft=f(e,`
`),Ae=d(e,"P",{"data-svelte-h":!0}),P(Ae)!=="svelte-19glyi5"&&(Ae.textContent=Xt),at=f(e,`
`),v($e.$$.fragment,e),$t=f(e,`

`),v(re.$$.fragment,e),rt=f(e,`
`),Le=d(e,"P",{"data-svelte-h":!0}),P(Le)!=="svelte-or0x3"&&(Le.textContent=Yt),ut=f(e,`
`),v(ue.$$.fragment,e),pt=f(e,`

`),v(He.$$.fragment,e),mt=f(e,`

`),v(Se.$$.fragment,e),ht=f(e,`

`),v(De.$$.fragment,e),ct=f(e,`

`),v(pe.$$.fragment,e),dt=f(e,`
`),je=d(e,"P",{"data-svelte-h":!0}),P(je)!=="svelte-1b9smjk"&&(je.textContent=Zt),_t=f(e,`
`),v(me.$$.fragment,e),wt=f(e,`

`),v(he.$$.fragment,e),gt=f(e,`
`),qe=d(e,"P",{"data-svelte-h":!0}),P(qe)!=="svelte-q7oh37"&&(qe.textContent=en),xt=f(e,`
`),Oe=d(e,"P",{"data-svelte-h":!0}),P(Oe)!=="svelte-1c78zj5"&&(Oe.textContent=tn),vt=f(e,`
`),v(ce.$$.fragment,e),bt=f(e,`

`),ze=d(e,"P",{"data-svelte-h":!0}),P(ze)!=="svelte-16mhbjq"&&(ze.innerHTML=nn),Ct=f(e,`

`),B=d(e,"P",{});var W=Te(B);Bt=f(W,`
    The top and side parameters are the textures used for the top and side of the slope. If these aren't set, it will use the normal top and side textures for the tile.
    `),Rt=d(W,"BR",{}),Wt=f(W,"The texture parameters should be wrapped with "),Ke=d(W,"CODE",{});var Ye=Te(Ke);Gt=f(Ye,ln),Ye.forEach(s),Nt=f(W,` to group them into a single parameter.
    `),Ut=d(W,"BR",{}),Vt=f(W,"Example: "),Qe=d(W,"CODE",{});var Ze=Te(Qe);yt=f(Ze,sn),Ze.forEach(s),Jt=f(W,`
`),W.forEach(s),Tt=f(e,`

`),Ie=d(e,"P",{"data-svelte-h":!0}),P(Ie)!=="svelte-1uyud1r"&&(Ie.innerHTML=on),Ft=f(e,`

`),v(de.$$.fragment,e),Pt=f(e,`
`),Be=d(e,"P",{"data-svelte-h":!0}),P(Be)!=="svelte-121y1uj"&&(Be.innerHTML=fn),kt=f(e,`

`),v(_e.$$.fragment,e),Mt=f(e,`
`),Re=d(e,"P",{"data-svelte-h":!0}),P(Re)!=="svelte-t3rnk6"&&(Re.textContent=an),Et=f(e,`
`),v(we.$$.fragment,e),At=f(e,`


`),v(ge.$$.fragment,e),Lt=f(e,`
`),We=d(e,"P",{"data-svelte-h":!0}),P(We)!=="svelte-1cpxd7c"&&(We.textContent=$n),Ht=f(e,`
`),v(xe.$$.fragment,e),St=f(e,`

`),v(ve.$$.fragment,e),Dt=f(e,`


`),v(Ge.$$.fragment,e),jt=f(e,`



`),v(be.$$.fragment,e)},m(e,l){i(e,n,l),b(t,e,l),i(e,$,l),b(r,e,l),i(e,a,l),i(e,m,l),i(e,k,l),i(e,M,l),i(e,A,l),i(e,L,l),i(e,H,l),b(S,e,l),i(e,Y,l),i(e,D,l),E(D,Ue),E(D,G),E(D,Fe),E(D,z),E(D,j),i(e,ne,l),i(e,q,l),i(e,N,l),i(e,Q,l),i(e,U,l),i(e,X,l),i(e,Z,l),b(I,e,l),i(e,p,l),i(e,w,l),i(e,O,l),b(V,e,l),i(e,ke,l),i(e,y,l),E(y,zt),b(le,y,null),E(y,It),i(e,et,l),b(se,e,l),i(e,tt,l),i(e,Me,l),i(e,nt,l),b(ie,e,l),i(e,lt,l),b(oe,e,l),i(e,st,l),i(e,Ee,l),i(e,it,l),b(fe,e,l),i(e,ot,l),b(ae,e,l),i(e,ft,l),i(e,Ae,l),i(e,at,l),b($e,e,l),i(e,$t,l),b(re,e,l),i(e,rt,l),i(e,Le,l),i(e,ut,l),b(ue,e,l),i(e,pt,l),b(He,e,l),i(e,mt,l),b(Se,e,l),i(e,ht,l),b(De,e,l),i(e,ct,l),b(pe,e,l),i(e,dt,l),i(e,je,l),i(e,_t,l),b(me,e,l),i(e,wt,l),b(he,e,l),i(e,gt,l),i(e,qe,l),i(e,xt,l),i(e,Oe,l),i(e,vt,l),b(ce,e,l),i(e,bt,l),i(e,ze,l),i(e,Ct,l),i(e,B,l),E(B,Bt),E(B,Rt),E(B,Wt),E(B,Ke),E(Ke,Gt),E(B,Nt),E(B,Ut),E(B,Vt),E(B,Qe),E(Qe,yt),E(B,Jt),i(e,Tt,l),i(e,Ie,l),i(e,Ft,l),b(de,e,l),i(e,Pt,l),i(e,Be,l),i(e,kt,l),b(_e,e,l),i(e,Mt,l),i(e,Re,l),i(e,Et,l),b(we,e,l),i(e,At,l),b(ge,e,l),i(e,Lt,l),i(e,We,l),i(e,Ht,l),b(xe,e,l),i(e,St,l),b(ve,e,l),i(e,Dt,l),b(Ge,e,l),i(e,jt,l),b(be,e,l),Xe=!0},p(e,[l]){const Ne={};l&4&&(Ne.$$scope={dirty:l,ctx:e}),r.$set(Ne);const W={};l&4&&(W.$$scope={dirty:l,ctx:e}),S.$set(W),(!Xe||l&1)&&K!==(K=e[0].pluginName.toUpperCase()+"")&&Ln(G,K);const Ye={};l&4&&(Ye.$$scope={dirty:l,ctx:e}),I.$set(Ye);const Ze={};l&4&&(Ze.$$scope={dirty:l,ctx:e}),V.$set(Ze);const rn={};l&4&&(rn.$$scope={dirty:l,ctx:e}),le.$set(rn);const un={};l&4&&(un.$$scope={dirty:l,ctx:e}),se.$set(un);const pn={};l&4&&(pn.$$scope={dirty:l,ctx:e}),ie.$set(pn);const mn={};l&4&&(mn.$$scope={dirty:l,ctx:e}),oe.$set(mn);const hn={};l&4&&(hn.$$scope={dirty:l,ctx:e}),fe.$set(hn);const cn={};l&4&&(cn.$$scope={dirty:l,ctx:e}),ae.$set(cn);const dn={};l&4&&(dn.$$scope={dirty:l,ctx:e}),$e.$set(dn);const _n={};l&4&&(_n.$$scope={dirty:l,ctx:e}),re.$set(_n);const wn={};l&4&&(wn.$$scope={dirty:l,ctx:e}),ue.$set(wn);const gn={};l&4&&(gn.$$scope={dirty:l,ctx:e}),pe.$set(gn);const xn={};l&4&&(xn.$$scope={dirty:l,ctx:e}),me.$set(xn);const vn={};l&4&&(vn.$$scope={dirty:l,ctx:e}),he.$set(vn);const bn={};l&4&&(bn.$$scope={dirty:l,ctx:e}),ce.$set(bn);const Cn={};l&4&&(Cn.$$scope={dirty:l,ctx:e}),de.$set(Cn);const Tn={};l&4&&(Tn.$$scope={dirty:l,ctx:e}),_e.$set(Tn);const Fn={};l&4&&(Fn.$$scope={dirty:l,ctx:e}),we.$set(Fn);const Pn={};l&4&&(Pn.$$scope={dirty:l,ctx:e}),ge.$set(Pn);const kn={};l&4&&(kn.$$scope={dirty:l,ctx:e}),xe.$set(kn);const Mn={};l&4&&(Mn.$$scope={dirty:l,ctx:e}),ve.$set(Mn);const En={};l&5&&(En.$$scope={dirty:l,ctx:e}),be.$set(En)},i(e){Xe||(C(t.$$.fragment,e),C(r.$$.fragment,e),C(S.$$.fragment,e),C(I.$$.fragment,e),C(V.$$.fragment,e),C(le.$$.fragment,e),C(se.$$.fragment,e),C(ie.$$.fragment,e),C(oe.$$.fragment,e),C(fe.$$.fragment,e),C(ae.$$.fragment,e),C($e.$$.fragment,e),C(re.$$.fragment,e),C(ue.$$.fragment,e),C(He.$$.fragment,e),C(Se.$$.fragment,e),C(De.$$.fragment,e),C(pe.$$.fragment,e),C(me.$$.fragment,e),C(he.$$.fragment,e),C(ce.$$.fragment,e),C(de.$$.fragment,e),C(_e.$$.fragment,e),C(we.$$.fragment,e),C(ge.$$.fragment,e),C(xe.$$.fragment,e),C(ve.$$.fragment,e),C(Ge.$$.fragment,e),C(be.$$.fragment,e),Xe=!0)},o(e){T(t.$$.fragment,e),T(r.$$.fragment,e),T(S.$$.fragment,e),T(I.$$.fragment,e),T(V.$$.fragment,e),T(le.$$.fragment,e),T(se.$$.fragment,e),T(ie.$$.fragment,e),T(oe.$$.fragment,e),T(fe.$$.fragment,e),T(ae.$$.fragment,e),T($e.$$.fragment,e),T(re.$$.fragment,e),T(ue.$$.fragment,e),T(He.$$.fragment,e),T(Se.$$.fragment,e),T(De.$$.fragment,e),T(pe.$$.fragment,e),T(me.$$.fragment,e),T(he.$$.fragment,e),T(ce.$$.fragment,e),T(de.$$.fragment,e),T(_e.$$.fragment,e),T(we.$$.fragment,e),T(ge.$$.fragment,e),T(xe.$$.fragment,e),T(ve.$$.fragment,e),T(Ge.$$.fragment,e),T(be.$$.fragment,e),Xe=!1},d(e){e&&(s(n),s($),s(a),s(m),s(k),s(M),s(A),s(L),s(H),s(Y),s(D),s(ne),s(q),s(N),s(Q),s(U),s(X),s(Z),s(p),s(w),s(O),s(ke),s(y),s(et),s(tt),s(Me),s(nt),s(lt),s(st),s(Ee),s(it),s(ot),s(ft),s(Ae),s(at),s($t),s(rt),s(Le),s(ut),s(pt),s(mt),s(ht),s(ct),s(dt),s(je),s(_t),s(wt),s(gt),s(qe),s(xt),s(Oe),s(vt),s(bt),s(ze),s(Ct),s(B),s(Tt),s(Ie),s(Ft),s(Pt),s(Be),s(kt),s(Mt),s(Re),s(Et),s(At),s(Lt),s(We),s(Ht),s(St),s(Dt),s(jt)),F(t,e),F(r,e),F(S,e),F(I,e),F(V,e),F(le),F(se,e),F(ie,e),F(oe,e),F(fe,e),F(ae,e),F($e,e),F(re,e),F(ue,e),F(He,e),F(Se,e),F(De,e),F(pe,e),F(me,e),F(he,e),F(ce,e),F(de,e),F(_e,e),F(we,e),F(ge,e),F(xe,e),F(ve,e),F(Ge,e),F(be,e)}}}function gl(u,n,t){let{data:$}=n,r=$.premium;return u.$$set=a=>{"data"in a&&t(0,$=a.data)},[$,r]}class Ll extends Sn{constructor(n){super(),Dn(this,n,gl,wl,Hn,{data:0})}}export{Ll as component};
