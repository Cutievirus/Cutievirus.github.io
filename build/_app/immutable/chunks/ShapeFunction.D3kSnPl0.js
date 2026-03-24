import{s as _t,n as mt}from"./scheduler.BjkBv5nx.js";import{S as vt,i as bt,t as i,c as X,k as C,a as f,b as Z,l as w,o as ft,n as A,g as s,d as a,m as tt,p as m,s as at,e as et,f as nt,h as lt,q as it}from"./index.BT_eMuJg.js";import{A as ht}from"./Anchor.DPTg1Ks6.js";import{C as $t}from"./Code.UvG0J7Qo.js";import{L as yt}from"./Link.DpGiBmhP.js";import{V as Ct}from"./Version.52FMOf3v.js";function At(o){let e;return{c(){e=i("Glow Function")},l(t){e=f(t,"Glow Function")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function wt(o){let e;return{c(){e=i("The effect works well for lava and other things that should emit light.")},l(t){e=f(t,"The effect works well for lava and other things that should emit light.")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function xt(o){let e,t=`\r
    If one of the tile's textures has glow configured, the texture settings will take priority.\r
`;return{c(){e=C("p"),e.textContent=t},l(n){e=w(n,"P",{"data-svelte-h":!0}),A(e)!=="svelte-16dukse"&&(e.textContent=t)},m(n,l){a(n,e,l)},d(n){n&&s(e)}}}function Pt(o){let e,t,n,l,u="glow(1,0), glow(red,1)",g;return{c(){e=i(`\r
    A second parameter can be provided to control the intensity of the premium glow effect.\r
    `),t=C("br"),n=i("Examples: "),l=C("code"),l.textContent=u,g=i(`\r
`)},l(b){e=f(b,`\r
    A second parameter can be provided to control the intensity of the premium glow effect.\r
    `),t=w(b,"BR",{}),n=f(b,"Examples: "),l=w(b,"CODE",{"data-svelte-h":!0}),A(l)!=="svelte-1i6hon7"&&(l.textContent=u),g=f(b,`\r
`)},m(b,k){a(b,e,k),a(b,t,k),a(b,n,k),a(b,l,k),a(b,g,k)},p:mt,d(b){b&&(s(e),s(t),s(n),s(l),s(g))}}}function St(o){let e;return{c(){e=i("Alpha Function")},l(t){e=f(t,"Alpha Function")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function gt(o){let e,t=`\r
    If one of the tile's textures has alpha configured, the texture settings will take priority.\r
`;return{c(){e=C("p"),e.textContent=t},l(n){e=w(n,"P",{"data-svelte-h":!0}),A(e)!=="svelte-u7roxb"&&(e.textContent=t)},m(n,l){a(n,e,l)},d(n){n&&s(e)}}}function Et(o){let e;return{c(){e=i("Highlight Function")},l(t){e=f(t,"Highlight Function")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Mt(o){let e;return{c(){e=i("Set Command")},l(t){e=f(t,"Set Command")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function zt(o){let e,t,n="color",l;return{c(){e=i("highlight("),t=C("samp"),t.textContent=n,l=i(")")},l(u){e=f(u,"highlight("),t=w(u,"SAMP",{"data-svelte-h":!0}),A(t)!=="svelte-168vm1j"&&(t.textContent=n),l=f(u,")")},m(u,g){a(u,e,g),a(u,t,g),a(u,l,g)},p:mt,d(u){u&&(s(e),s(t),s(l))}}}function Ft(o){let e,t,n,l,u,g,b,k,E,T,h,M,y,$,D;return t=new ht({props:{h2:!0,id:"highlight",$$slots:{default:[Et]},$$scope:{ctx:o}}}),T=new yt({props:{href:"plugin-commands/#set",$$slots:{default:[Mt]},$$scope:{ctx:o}}}),y=new $t({props:{$$slots:{default:[zt]},$$scope:{ctx:o}}}),{c(){e=i(`\r
    `),X(t.$$.fragment),n=i(`\r
    `),l=C("p"),u=i(`\r
        Sets the highlight color for the `),g=i(o[0]),b=i(`. Set this to black to disable.\r
        `),k=C("br"),E=i(" To change other highlight settings, use the "),X(T.$$.fragment),h=i(`.\r
    `),M=i(`\r
    `),X(y.$$.fragment),$=i(`\r
`)},l(v){e=f(v,`\r
    `),Z(t.$$.fragment,v),n=f(v,`\r
    `),l=w(v,"P",{});var d=ft(l);u=f(d,`\r
        Sets the highlight color for the `),g=f(d,o[0]),b=f(d,`. Set this to black to disable.\r
        `),k=w(d,"BR",{}),E=f(d," To change other highlight settings, use the "),Z(T.$$.fragment,d),h=f(d,`.\r
    `),d.forEach(s),M=f(v,`\r
    `),Z(y.$$.fragment,v),$=f(v,`\r
`)},m(v,d){a(v,e,d),tt(t,v,d),a(v,n,d),a(v,l,d),m(l,u),m(l,g),m(l,b),m(l,k),m(l,E),tt(T,l,null),m(l,h),a(v,M,d),tt(y,v,d),a(v,$,d),D=!0},p(v,d){const j={};d&4&&(j.$$scope={dirty:d,ctx:v}),t.$set(j),(!D||d&1)&&at(g,v[0]);const S={};d&4&&(S.$$scope={dirty:d,ctx:v}),T.$set(S);const _={};d&4&&(_.$$scope={dirty:d,ctx:v}),y.$set(_)},i(v){D||(et(t.$$.fragment,v),et(T.$$.fragment,v),et(y.$$.fragment,v),D=!0)},o(v){nt(t.$$.fragment,v),nt(T.$$.fragment,v),nt(y.$$.fragment,v),D=!1},d(v){v&&(s(e),s(n),s(l),s(M),s($)),lt(t,v),lt(T),lt(y,v)}}}function jt(o){let e,t,n,l,u,g,b,k,E,T,h,M,y,$="glow(1), glow(red)",D,v,d,j,S,_,P,F,R,Y,L,O,r,p,I="alpha(0.5), alpha(1)",V,U,rt,J,ot;t=new ht({props:{h2:!0,id:"glow",$$slots:{default:[At]},$$scope:{ctx:o}}});let H=o[0]==="tile"&&wt(),N=o[0]==="tile"&&xt();j=new Ct({props:{premium:o[1],$$slots:{default:[Pt]},$$scope:{ctx:o}}}),_=new ht({props:{h2:!0,id:"alpha",$$slots:{default:[St]},$$scope:{ctx:o}}});let q=o[0]==="tile"&&gt();return J=new Ct({props:{block:!0,premium:o[1],$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){e=i(`\r
\r
`),X(t.$$.fragment),n=i(`\r
`),l=C("p"),u=i(`\r
    The glow parameter will add an emissive color to make the `),g=i(o[0]),b=i(` glow.\r
    `),H&&H.c(),k=i(`\r
    `),E=C("br"),T=i(`It can take a number from 0 to 1 or a color. \r
    `),h=C("br"),M=i("Examples: "),y=C("code"),y.textContent=$,D=i(`\r
`),v=i(`\r
`),N&&N.c(),d=i(`\r
`),X(j.$$.fragment),S=i(`\r
\r
\r
\r
`),X(_.$$.fragment),P=i(`\r
`),F=C("p"),R=i(`\r
    The alpha parameter can be used to make the `),Y=i(o[0]),L=i(` partially transparent. Or, you can set alpha to 1 to turn on alpha blending.\r
    `),O=C("br"),r=i("Examples: "),p=C("code"),p.textContent=I,V=i(`\r
`),U=i(`\r
`),q&&q.c(),rt=i(`\r
\r
`),X(J.$$.fragment)},l(c){e=f(c,`\r
\r
`),Z(t.$$.fragment,c),n=f(c,`\r
`),l=w(c,"P",{});var x=ft(l);u=f(x,`\r
    The glow parameter will add an emissive color to make the `),g=f(x,o[0]),b=f(x,` glow.\r
    `),H&&H.l(x),k=f(x,`\r
    `),E=w(x,"BR",{}),T=f(x,`It can take a number from 0 to 1 or a color. \r
    `),h=w(x,"BR",{}),M=f(x,"Examples: "),y=w(x,"CODE",{"data-svelte-h":!0}),A(y)!=="svelte-1a7ct2"&&(y.textContent=$),D=f(x,`\r
`),x.forEach(s),v=f(c,`\r
`),N&&N.l(c),d=f(c,`\r
`),Z(j.$$.fragment,c),S=f(c,`\r
\r
\r
\r
`),Z(_.$$.fragment,c),P=f(c,`\r
`),F=w(c,"P",{});var W=ft(F);R=f(W,`\r
    The alpha parameter can be used to make the `),Y=f(W,o[0]),L=f(W,` partially transparent. Or, you can set alpha to 1 to turn on alpha blending.\r
    `),O=w(W,"BR",{}),r=f(W,"Examples: "),p=w(W,"CODE",{"data-svelte-h":!0}),A(p)!=="svelte-qktyga"&&(p.textContent=I),V=f(W,`\r
`),W.forEach(s),U=f(c,`\r
`),q&&q.l(c),rt=f(c,`\r
\r
`),Z(J.$$.fragment,c)},m(c,x){a(c,e,x),tt(t,c,x),a(c,n,x),a(c,l,x),m(l,u),m(l,g),m(l,b),H&&H.m(l,null),m(l,k),m(l,E),m(l,T),m(l,h),m(l,M),m(l,y),m(l,D),a(c,v,x),N&&N.m(c,x),a(c,d,x),tt(j,c,x),a(c,S,x),tt(_,c,x),a(c,P,x),a(c,F,x),m(F,R),m(F,Y),m(F,L),m(F,O),m(F,r),m(F,p),m(F,V),a(c,U,x),q&&q.m(c,x),a(c,rt,x),tt(J,c,x),ot=!0},p(c,[x]){const W={};x&4&&(W.$$scope={dirty:x,ctx:c}),t.$set(W),(!ot||x&1)&&at(g,c[0]),c[0]==="tile"?H||(H=wt(),H.c(),H.m(l,k)):H&&(H.d(1),H=null),c[0]==="tile"?N||(N=xt(),N.c(),N.m(d.parentNode,d)):N&&(N.d(1),N=null);const st={};x&2&&(st.premium=c[1]),x&4&&(st.$$scope={dirty:x,ctx:c}),j.$set(st);const ct={};x&4&&(ct.$$scope={dirty:x,ctx:c}),_.$set(ct),(!ot||x&1)&&at(Y,c[0]),c[0]==="tile"?q||(q=gt(),q.c(),q.m(rt.parentNode,rt)):q&&(q.d(1),q=null);const pt={};x&2&&(pt.premium=c[1]),x&5&&(pt.$$scope={dirty:x,ctx:c}),J.$set(pt)},i(c){ot||(et(t.$$.fragment,c),et(j.$$.fragment,c),et(_.$$.fragment,c),et(J.$$.fragment,c),ot=!0)},o(c){nt(t.$$.fragment,c),nt(j.$$.fragment,c),nt(_.$$.fragment,c),nt(J.$$.fragment,c),ot=!1},d(c){c&&(s(e),s(n),s(l),s(v),s(d),s(S),s(P),s(F),s(U),s(rt)),lt(t,c),H&&H.d(),N&&N.d(c),lt(j,c),lt(_,c),q&&q.d(c),lt(J,c)}}}function Ot(o,e,t){let{subject:n="character"}=e,{premium:l="?"}=e;return o.$$set=u=>{"subject"in u&&t(0,n=u.subject),"premium"in u&&t(1,l=u.premium)},[n,l]}class ie extends vt{constructor(e){super(),bt(this,e,Ot,jt,_t,{subject:0,premium:1})}}function Lt(o){let e;return{c(){e=i("Offset Functions")},l(t){e=f(t,"Offset Functions")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function qt(o){let e,t,n="n",l,u,g="n",b,k,E="n",T,h,M="x",y,$,D="y",v,d,j="z",S;return{c(){e=i("xoff("),t=C("samp"),t.textContent=n,l=i(`)\r
yoff(`),u=C("samp"),u.textContent=g,b=i(`)\r
zoff(`),k=C("samp"),k.textContent=E,T=i(`)\r
offset(`),h=C("samp"),h.textContent=M,y=i(","),$=C("samp"),$.textContent=D,v=i(","),d=C("samp"),d.textContent=j,S=i(")"),this.h()},l(_){e=f(_,"xoff("),t=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(t)!=="svelte-11z14xk"&&(t.textContent=n),l=f(_,`)\r
yoff(`),u=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(u)!=="svelte-11z14xk"&&(u.textContent=g),b=f(_,`)\r
zoff(`),k=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(k)!=="svelte-11z14xk"&&(k.textContent=E),T=f(_,`)\r
offset(`),h=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(h)!=="svelte-p3ccxq"&&(h.textContent=M),y=f(_,","),$=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A($)!=="svelte-eyvwfd"&&($.textContent=D),v=f(_,","),d=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(d)!=="svelte-1dzwvas"&&(d.textContent=j),S=f(_,")"),this.h()},h(){it(t,"title","number"),it(u,"title","number"),it(k,"title","number"),it(h,"title","number"),it($,"title","number"),it(d,"title","number")},m(_,P){a(_,e,P),a(_,t,P),a(_,l,P),a(_,u,P),a(_,b,P),a(_,k,P),a(_,T,P),a(_,h,P),a(_,y,P),a(_,$,P),a(_,v,P),a(_,d,P),a(_,S,P)},p:mt,d(_){_&&(s(e),s(t),s(l),s(u),s(b),s(k),s(T),s(h),s(y),s($),s(v),s(d),s(S))}}}function Ht(o){let e;return{c(){e=i("Dynamic Offset")},l(t){e=f(t,"Dynamic Offset")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Rt(o){let e;return{c(){e=i("but any shape can be given a dynamic offset with this function.")},l(t){e=f(t,"but any shape can be given a dynamic offset with this function.")},m(t,n){a(t,e,n)},p:mt,d(t){t&&s(e)}}}function It(o){let e,t,n=o[1]&&kt();return{c(){e=i("but other dynamic shapes can be given a dynamic offset as well, such as the board shape"),n&&n.c(),t=i(".")},l(l){e=f(l,"but other dynamic shapes can be given a dynamic offset as well, such as the board shape"),n&&n.l(l),t=f(l,".")},m(l,u){a(l,e,u),n&&n.m(l,u),a(l,t,u)},p(l,u){l[1]?n||(n=kt(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){l&&(s(e),s(t)),n&&n.d(l)}}}function kt(o){let e;return{c(){e=i(" or the model or mesh shapes")},l(t){e=f(t," or the model or mesh shapes")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Bt(o){let e;return{c(){e=i("doff(0), doff(.45), doff(.45p)")},l(t){e=f(t,"doff(0), doff(.45), doff(.45p)")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Gt(o){let e,t,n,l,u=`\r
    There are three offset functions, xoff, yoff, and zoff, which add an offset to the position in the respective dimension. There is also an offset function which can be used to set all three at once.\r
`,g,b,k,E,T,h,M,y,$,D,v,d,j,S,_=`\r
    If the value provided to this function includes the letter "p", the dynamic offset will be adjusted according to the camera's pitch.\r
    The offset will be zero when the camera pitch is parallel to the ground, and will be the full offset when the camera is looking straight down.\r
`,P,F,R;t=new ht({props:{h2:!0,id:"offset",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),b=new $t({props:{$$slots:{default:[qt]},$$scope:{ctx:o}}}),E=new ht({props:{h2:!0,id:"doff",$$slots:{default:[Ht]},$$scope:{ctx:o}}});function Y(r,p){return r[0]==="tile"?It:Rt}let L=Y(o),O=L(o);return F=new $t({props:{$$slots:{default:[Bt]},$$scope:{ctx:o}}}),{c(){e=i(`\r
\r
`),X(t.$$.fragment),n=i(`\r
`),l=C("p"),l.textContent=u,g=i(`\r
`),X(b.$$.fragment),k=i(`\r
\r
\r
`),X(E.$$.fragment),T=i(`\r
`),h=C("p"),M=i(`\r
    The DOff Function controls the `),y=i(o[0]),$=i(`'s "Dynamic Offset". Dynamic offset is the amount the `),D=i(o[0]),v=i(` will be offset towards the camera.\r
    This is usually used for the sprite shape, `),O.c(),d=i(`\r
    The default dynamic offset for sprites is settable in the plugin parameters through the "Sprite Dynamic Offset" parameter.\r
`),j=i(`\r
`),S=C("p"),S.textContent=_,P=i(`\r
\r
Examples:\r
`),X(F.$$.fragment)},l(r){e=f(r,`\r
\r
`),Z(t.$$.fragment,r),n=f(r,`\r
`),l=w(r,"P",{"data-svelte-h":!0}),A(l)!=="svelte-1hjggeo"&&(l.textContent=u),g=f(r,`\r
`),Z(b.$$.fragment,r),k=f(r,`\r
\r
\r
`),Z(E.$$.fragment,r),T=f(r,`\r
`),h=w(r,"P",{});var p=ft(h);M=f(p,`\r
    The DOff Function controls the `),y=f(p,o[0]),$=f(p,`'s "Dynamic Offset". Dynamic offset is the amount the `),D=f(p,o[0]),v=f(p,` will be offset towards the camera.\r
    This is usually used for the sprite shape, `),O.l(p),d=f(p,`\r
    The default dynamic offset for sprites is settable in the plugin parameters through the "Sprite Dynamic Offset" parameter.\r
`),p.forEach(s),j=f(r,`\r
`),S=w(r,"P",{"data-svelte-h":!0}),A(S)!=="svelte-cd2jlp"&&(S.textContent=_),P=f(r,`\r
\r
Examples:\r
`),Z(F.$$.fragment,r)},m(r,p){a(r,e,p),tt(t,r,p),a(r,n,p),a(r,l,p),a(r,g,p),tt(b,r,p),a(r,k,p),tt(E,r,p),a(r,T,p),a(r,h,p),m(h,M),m(h,y),m(h,$),m(h,D),m(h,v),O.m(h,null),m(h,d),a(r,j,p),a(r,S,p),a(r,P,p),tt(F,r,p),R=!0},p(r,[p]){const I={};p&4&&(I.$$scope={dirty:p,ctx:r}),t.$set(I);const V={};p&4&&(V.$$scope={dirty:p,ctx:r}),b.$set(V);const U={};p&4&&(U.$$scope={dirty:p,ctx:r}),E.$set(U),(!R||p&1)&&at(y,r[0]),(!R||p&1)&&at(D,r[0]),L===(L=Y(r))&&O?O.p(r,p):(O.d(1),O=L(r),O&&(O.c(),O.m(h,d)));const rt={};p&4&&(rt.$$scope={dirty:p,ctx:r}),F.$set(rt)},i(r){R||(et(t.$$.fragment,r),et(b.$$.fragment,r),et(E.$$.fragment,r),et(F.$$.fragment,r),R=!0)},o(r){nt(t.$$.fragment,r),nt(b.$$.fragment,r),nt(E.$$.fragment,r),nt(F.$$.fragment,r),R=!1},d(r){r&&(s(e),s(n),s(l),s(g),s(k),s(T),s(h),s(j),s(S),s(P)),lt(t,r),lt(b,r),lt(E,r),O.d(),lt(F,r)}}}function Nt(o,e,t){let{subject:n="character"}=e,{premium:l="?"}=e;return o.$$set=u=>{"subject"in u&&t(0,n=u.subject),"premium"in u&&t(1,l=u.premium)},[n,l]}class fe extends vt{constructor(e){super(),bt(this,e,Nt,Gt,_t,{subject:0,premium:1})}}function Vt(o){let e;return{c(){e=i("Rotation Functions")},l(t){e=f(t,"Rotation Functions")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Yt(o){let e,t,n="n",l,u,g="n",b,k,E="n",T,h,M="n",y;return{c(){e=i("yaw("),t=C("samp"),t.textContent=n,l=i(`)\r
pitch(`),u=C("samp"),u.textContent=g,b=i(`)\r
roll(`),k=C("samp"),k.textContent=E,T=i(`)\r
rot(`),h=C("samp"),h.textContent=M,y=i(")"),this.h()},l($){e=f($,"yaw("),t=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(t)!=="svelte-11z14xk"&&(t.textContent=n),l=f($,`)\r
pitch(`),u=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(u)!=="svelte-11z14xk"&&(u.textContent=g),b=f($,`)\r
roll(`),k=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(k)!=="svelte-11z14xk"&&(k.textContent=E),T=f($,`)\r
rot(`),h=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(h)!=="svelte-11z14xk"&&(h.textContent=M),y=f($,")"),this.h()},h(){it(t,"title","number"),it(u,"title","number"),it(k,"title","number"),it(h,"title","number")},m($,D){a($,e,D),a($,t,D),a($,l,D),a($,u,D),a($,b,D),a($,k,D),a($,T,D),a($,h,D),a($,y,D)},p:mt,d($){$&&(s(e),s(t),s(l),s(u),s(b),s(k),s(T),s(h),s(y))}}}function Jt(o){let e,t,n,l,u=`\r
    There are four rotation functions, yaw, pitch, roll, and rot.\r
`,g,b,k=`\r
    Rot is the simple rotation function, and is usually only used on its own, but when used with the others it is applied last.\r
`,E,T,h,M,y,$,D,v,d,j,S,_,P,F,R,Y,L,O;return t=new ht({props:{h2:!0,id:"rot",$$slots:{default:[Vt]},$$scope:{ctx:o}}}),L=new $t({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){e=i(`\r
\r
`),X(t.$$.fragment),n=i(`\r
`),l=C("p"),l.textContent=u,g=i(`\r
`),b=C("p"),b.textContent=k,E=i(`\r
`),T=C("p"),h=i(`\r
    Yaw rotates the `),M=i(o[0]),y=i(` around the z axis, effectively turning it left and right.\r
`),$=i(`\r
`),D=C("p"),v=i(`\r
    Pitch rotates the `),d=i(o[0]),j=i(` around the x axis, effectively turning it up and down.\r
`),S=i(`\r
`),_=C("p"),P=i(`\r
    Roll rotates the `),F=i(o[0]),R=i(` around the y axis, effectively tilting it side to side.\r
`),Y=i(`\r
`),X(L.$$.fragment)},l(r){e=f(r,`\r
\r
`),Z(t.$$.fragment,r),n=f(r,`\r
`),l=w(r,"P",{"data-svelte-h":!0}),A(l)!=="svelte-1xkzqq7"&&(l.textContent=u),g=f(r,`\r
`),b=w(r,"P",{"data-svelte-h":!0}),A(b)!=="svelte-1cgmswk"&&(b.textContent=k),E=f(r,`\r
`),T=w(r,"P",{});var p=ft(T);h=f(p,`\r
    Yaw rotates the `),M=f(p,o[0]),y=f(p,` around the z axis, effectively turning it left and right.\r
`),p.forEach(s),$=f(r,`\r
`),D=w(r,"P",{});var I=ft(D);v=f(I,`\r
    Pitch rotates the `),d=f(I,o[0]),j=f(I,` around the x axis, effectively turning it up and down.\r
`),I.forEach(s),S=f(r,`\r
`),_=w(r,"P",{});var V=ft(_);P=f(V,`\r
    Roll rotates the `),F=f(V,o[0]),R=f(V,` around the y axis, effectively tilting it side to side.\r
`),V.forEach(s),Y=f(r,`\r
`),Z(L.$$.fragment,r)},m(r,p){a(r,e,p),tt(t,r,p),a(r,n,p),a(r,l,p),a(r,g,p),a(r,b,p),a(r,E,p),a(r,T,p),m(T,h),m(T,M),m(T,y),a(r,$,p),a(r,D,p),m(D,v),m(D,d),m(D,j),a(r,S,p),a(r,_,p),m(_,P),m(_,F),m(_,R),a(r,Y,p),tt(L,r,p),O=!0},p(r,[p]){const I={};p&2&&(I.$$scope={dirty:p,ctx:r}),t.$set(I),(!O||p&1)&&at(M,r[0]),(!O||p&1)&&at(d,r[0]),(!O||p&1)&&at(F,r[0]);const V={};p&2&&(V.$$scope={dirty:p,ctx:r}),L.$set(V)},i(r){O||(et(t.$$.fragment,r),et(L.$$.fragment,r),O=!0)},o(r){nt(t.$$.fragment,r),nt(L.$$.fragment,r),O=!1},d(r){r&&(s(e),s(n),s(l),s(g),s(b),s(E),s(T),s($),s(D),s(S),s(_),s(Y)),lt(t,r),lt(L,r)}}}function Kt(o,e,t){let{subject:n="character"}=e;return o.$$set=l=>{"subject"in l&&t(0,n=l.subject)},[n]}class ae extends vt{constructor(e){super(),bt(this,e,Kt,Jt,_t,{subject:0})}}function Qt(o){let e;return{c(){e=i("Shape Function")},l(t){e=f(t,"Shape Function")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Ut(o){let e;return{c(){e=i("A plane that lies flat on the ground.")},l(t){e=f(t,"A plane that lies flat on the ground.")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Wt(o){let e;return{c(){e=i("The default shape. Flat tiles normally appear as a flat plane, but when given height will have walls that use the side texture.")},l(t){e=f(t,"The default shape. Flat tiles normally appear as a flat plane, but when given height will have walls that use the side texture.")},m(t,n){a(t,e,n)},d(t){t&&s(e)}}}function Tt(o){let e,t="fence",n,l=`
        A shape that will connect to other nearby tiles to create a fence.
        A second parameter can be provided to set whether it should have fence posts (true by default).
        <br/>Examples: <code>shape(fence), shape(fence,false)</code>
    `;return{c(){e=C("dt"),e.textContent=t,n=C("dd"),n.innerHTML=l},l(u){e=w(u,"DT",{"data-svelte-h":!0}),A(e)!=="svelte-1trvg5"&&(e.textContent=t),n=w(u,"DD",{"data-svelte-h":!0}),A(n)!=="svelte-lorb5"&&(n.innerHTML=l)},m(u,g){a(u,e,g),a(u,n,g)},d(u){u&&(s(e),s(n))}}}function Dt(o){let e,t="slope",n,l=`
        A shape for creating slopes that let the player walk up or down to different elevations. Can be used as ramps or stairs, sloped roofs, or hills.
        Takes a second parameter which is the slope&#39;s height.
        <br/>Examples: <code>shape(slope), shape(slope,2)</code>
        <br/>For more information and functionality, see the <a href="#slope">slope function</a>.
    `;return{c(){e=C("dt"),e.textContent=t,n=C("dd"),n.innerHTML=l},l(u){e=w(u,"DT",{"data-svelte-h":!0}),A(e)!=="svelte-1pee1tj"&&(e.textContent=t),n=w(u,"DD",{"data-svelte-h":!0}),A(n)!=="svelte-cpgxd8"&&(n.innerHTML=l)},m(u,g){a(u,e,g),a(u,n,g)},d(u){u&&(s(e),s(n))}}}function Xt(o){let e,t,n,l,u,g,b,k,E,T,h,M,y="flat",$,D,v,d,j="cross",S,_="An intersection of two verical planes.",P,F="xcross",R,Y="Same as cross, but angled at 45deg. Essentially a shorthand for <code>shape(cross),rot(45)</code>",L,O="8cross",r,p="A combination of cross and xcross.",I,V="sprite",U,rt=`
        <p>A special shape that will always face the camera.</p>
        <p>Takes a second parameter for <a href="#doff">dynamic offset</a>.</p>
    `,J,ot="billboard",H,N=`
        Formerly known as the &quot;tree&quot; shape, also named &quot;board&quot; and &quot;cardboard&quot;.
        <br/>A billboard will rotate to match the camera&#39;s yaw, but not its pitch.
    `,q,c="wall",x,W=`
        The wall shape is a flat plane that stands straight up instead of lying on the ground.
        It&#39;s intended for creating wall decorations by using it alongside the <a href="#rot">rot function</a> and <a href="#offset">offset functions</a>.
    `,st;t=new ht({props:{h2:!0,id:"shape",$$slots:{default:[Qt]},$$scope:{ctx:o}}});function ct(z,G){return z[0]==="tile"?Wt:Ut}let pt=ct(o),ut=pt(o),K=o[0]==="tile"&&Tt(),Q=o[0]==="tile"&&Dt();return{c(){e=i(`\r
\r
\r
`),X(t.$$.fragment),n=i(`\r
`),l=C("p"),u=i(`\r
    The shape function will set the shape of the `),g=i(o[0]),b=i(". The shape determines how the "),k=i(o[0]),E=i(`'s mesh will be built and how it will behave.\r
`),T=i(`\r
`),h=C("dl"),M=C("dt"),M.textContent=y,$=C("dd"),D=i(`\r
        `),ut.c(),v=i(`\r
    `),d=C("dt"),d.textContent=j,S=C("dd"),S.textContent=_,P=C("dt"),P.textContent=F,R=C("dd"),R.innerHTML=Y,L=C("dt"),L.textContent=O,r=C("dd"),r.textContent=p,I=C("dt"),I.textContent=V,U=C("dd"),U.innerHTML=rt,J=C("dt"),J.textContent=ot,H=C("dd"),H.innerHTML=N,K&&K.c(),q=C("dt"),q.textContent=c,x=C("dd"),x.innerHTML=W,Q&&Q.c()},l(z){e=f(z,`\r
\r
\r
`),Z(t.$$.fragment,z),n=f(z,`\r
`),l=w(z,"P",{});var G=ft(l);u=f(G,`\r
    The shape function will set the shape of the `),g=f(G,o[0]),b=f(G,". The shape determines how the "),k=f(G,o[0]),E=f(G,`'s mesh will be built and how it will behave.\r
`),G.forEach(s),T=f(z,`\r
`),h=w(z,"DL",{});var B=ft(h);M=w(B,"DT",{"data-svelte-h":!0}),A(M)!=="svelte-1ooe3lh"&&(M.textContent=y),$=w(B,"DD",{});var dt=ft($);D=f(dt,`\r
        `),ut.l(dt),v=f(dt,`\r
    `),dt.forEach(s),d=w(B,"DT",{"data-svelte-h":!0}),A(d)!=="svelte-i1mz0q"&&(d.textContent=j),S=w(B,"DD",{"data-svelte-h":!0}),A(S)!=="svelte-xhsz52"&&(S.textContent=_),P=w(B,"DT",{"data-svelte-h":!0}),A(P)!=="svelte-1pa5ioa"&&(P.textContent=F),R=w(B,"DD",{"data-svelte-h":!0}),A(R)!=="svelte-1n7bls2"&&(R.innerHTML=Y),L=w(B,"DT",{"data-svelte-h":!0}),A(L)!=="svelte-1q9ewi2"&&(L.textContent=O),r=w(B,"DD",{"data-svelte-h":!0}),A(r)!=="svelte-yomgwk"&&(r.textContent=p),I=w(B,"DT",{"data-svelte-h":!0}),A(I)!=="svelte-1biz6zv"&&(I.textContent=V),U=w(B,"DD",{"data-svelte-h":!0}),A(U)!=="svelte-tp9cva"&&(U.innerHTML=rt),J=w(B,"DT",{"data-svelte-h":!0}),A(J)!=="svelte-1463zcb"&&(J.textContent=ot),H=w(B,"DD",{"data-svelte-h":!0}),A(H)!=="svelte-raikco"&&(H.innerHTML=N),K&&K.l(B),q=w(B,"DT",{"data-svelte-h":!0}),A(q)!=="svelte-13wzyb2"&&(q.textContent=c),x=w(B,"DD",{"data-svelte-h":!0}),A(x)!=="svelte-11raevs"&&(x.innerHTML=W),Q&&Q.l(B),B.forEach(s)},m(z,G){a(z,e,G),tt(t,z,G),a(z,n,G),a(z,l,G),m(l,u),m(l,g),m(l,b),m(l,k),m(l,E),a(z,T,G),a(z,h,G),m(h,M),m(h,$),m($,D),ut.m($,null),m($,v),m(h,d),m(h,S),m(h,P),m(h,R),m(h,L),m(h,r),m(h,I),m(h,U),m(h,J),m(h,H),K&&K.m(h,null),m(h,q),m(h,x),Q&&Q.m(h,null),st=!0},p(z,[G]){const B={};G&2&&(B.$$scope={dirty:G,ctx:z}),t.$set(B),(!st||G&1)&&at(g,z[0]),(!st||G&1)&&at(k,z[0]),pt!==(pt=ct(z))&&(ut.d(1),ut=pt(z),ut&&(ut.c(),ut.m($,v))),z[0]==="tile"?K||(K=Tt(),K.c(),K.m(h,q)):K&&(K.d(1),K=null),z[0]==="tile"?Q||(Q=Dt(),Q.c(),Q.m(h,null)):Q&&(Q.d(1),Q=null)},i(z){st||(et(t.$$.fragment,z),st=!0)},o(z){nt(t.$$.fragment,z),st=!1},d(z){z&&(s(e),s(n),s(l),s(T),s(h)),lt(t,z),ut.d(),K&&K.d(),Q&&Q.d()}}}function Zt(o,e,t){let{subject:n="character"}=e;return o.$$set=l=>{"subject"in l&&t(0,n=l.subject)},[n]}class oe extends vt{constructor(e){super(),bt(this,e,Zt,Xt,_t,{subject:0})}}export{ie as G,fe as O,ae as R,oe as S};
