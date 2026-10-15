import{s as _t,n as mt}from"./scheduler.Cdu_wsp_.js";import{S as vt,i as bt,t as f,c as X,k as C,a,b as Z,l as w,o as at,n as A,g as i,d as o,m as tt,p as m,s as ot,e as et,f as nt,h as lt,q as ft}from"./index.gwBTkKco.js";import{A as ht}from"./Anchor.Ct3bDT7x.js";import{C as $t}from"./Code.j1pNgbFo.js";import{L as yt}from"./Link.DqQNm6cE.js";import{V as Ct}from"./Version.B286Izlg.js";function At(r){let e;return{c(){e=f("Glow Function")},l(t){e=a(t,"Glow Function")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function wt(r){let e;return{c(){e=f("The effect works well for lava and other things that should emit light.")},l(t){e=a(t,"The effect works well for lava and other things that should emit light.")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function xt(r){let e,t=`
    If one of the tile's textures has glow configured, the texture settings will take priority.
`;return{c(){e=C("p"),e.textContent=t},l(n){e=w(n,"P",{"data-svelte-h":!0}),A(e)!=="svelte-16dukse"&&(e.textContent=t)},m(n,l){o(n,e,l)},d(n){n&&i(e)}}}function Pt(r){let e,t,n,l,u="glow(1,0), glow(red,1)",g;return{c(){e=f(`
    A second parameter can be provided to control the intensity of the premium glow effect.
    `),t=C("br"),n=f("Examples: "),l=C("code"),l.textContent=u,g=f(`
`)},l(b){e=a(b,`
    A second parameter can be provided to control the intensity of the premium glow effect.
    `),t=w(b,"BR",{}),n=a(b,"Examples: "),l=w(b,"CODE",{"data-svelte-h":!0}),A(l)!=="svelte-1i6hon7"&&(l.textContent=u),g=a(b,`
`)},m(b,k){o(b,e,k),o(b,t,k),o(b,n,k),o(b,l,k),o(b,g,k)},p:mt,d(b){b&&(i(e),i(t),i(n),i(l),i(g))}}}function St(r){let e;return{c(){e=f("Alpha Function")},l(t){e=a(t,"Alpha Function")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function gt(r){let e,t=`
    If one of the tile's textures has alpha configured, the texture settings will take priority.
`;return{c(){e=C("p"),e.textContent=t},l(n){e=w(n,"P",{"data-svelte-h":!0}),A(e)!=="svelte-u7roxb"&&(e.textContent=t)},m(n,l){o(n,e,l)},d(n){n&&i(e)}}}function Et(r){let e;return{c(){e=f("Highlight Function")},l(t){e=a(t,"Highlight Function")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Mt(r){let e;return{c(){e=f("Set Command")},l(t){e=a(t,"Set Command")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function zt(r){let e,t,n="color",l;return{c(){e=f("highlight("),t=C("samp"),t.textContent=n,l=f(")")},l(u){e=a(u,"highlight("),t=w(u,"SAMP",{"data-svelte-h":!0}),A(t)!=="svelte-168vm1j"&&(t.textContent=n),l=a(u,")")},m(u,g){o(u,e,g),o(u,t,g),o(u,l,g)},p:mt,d(u){u&&(i(e),i(t),i(l))}}}function Ft(r){let e,t,n,l,u,g,b,k,E,T,h,M,y,$,D;return t=new ht({props:{h2:!0,id:"highlight",$$slots:{default:[Et]},$$scope:{ctx:r}}}),T=new yt({props:{href:"plugin-commands/#set",$$slots:{default:[Mt]},$$scope:{ctx:r}}}),y=new $t({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}}),{c(){e=f(`
    `),X(t.$$.fragment),n=f(`
    `),l=C("p"),u=f(`
        Sets the highlight color for the `),g=f(r[0]),b=f(`. Set this to black to disable.
        `),k=C("br"),E=f(" To change other highlight settings, use the "),X(T.$$.fragment),h=f(`.
    `),M=f(`
    `),X(y.$$.fragment),$=f(`
`)},l(v){e=a(v,`
    `),Z(t.$$.fragment,v),n=a(v,`
    `),l=w(v,"P",{});var d=at(l);u=a(d,`
        Sets the highlight color for the `),g=a(d,r[0]),b=a(d,`. Set this to black to disable.
        `),k=w(d,"BR",{}),E=a(d," To change other highlight settings, use the "),Z(T.$$.fragment,d),h=a(d,`.
    `),d.forEach(i),M=a(v,`
    `),Z(y.$$.fragment,v),$=a(v,`
`)},m(v,d){o(v,e,d),tt(t,v,d),o(v,n,d),o(v,l,d),m(l,u),m(l,g),m(l,b),m(l,k),m(l,E),tt(T,l,null),m(l,h),o(v,M,d),tt(y,v,d),o(v,$,d),D=!0},p(v,d){const j={};d&4&&(j.$$scope={dirty:d,ctx:v}),t.$set(j),(!D||d&1)&&ot(g,v[0]);const S={};d&4&&(S.$$scope={dirty:d,ctx:v}),T.$set(S);const _={};d&4&&(_.$$scope={dirty:d,ctx:v}),y.$set(_)},i(v){D||(et(t.$$.fragment,v),et(T.$$.fragment,v),et(y.$$.fragment,v),D=!0)},o(v){nt(t.$$.fragment,v),nt(T.$$.fragment,v),nt(y.$$.fragment,v),D=!1},d(v){v&&(i(e),i(n),i(l),i(M),i($)),lt(t,v),lt(T),lt(y,v)}}}function jt(r){let e,t,n,l,u,g,b,k,E,T,h,M,y,$="glow(1), glow(red)",D,v,d,j,S,_,P,F,R,Y,L,O,s,p,I="alpha(0.5), alpha(1)",V,U,st,J,rt;t=new ht({props:{h2:!0,id:"glow",$$slots:{default:[At]},$$scope:{ctx:r}}});let H=r[0]==="tile"&&wt(),N=r[0]==="tile"&&xt();j=new Ct({props:{premium:r[1],$$slots:{default:[Pt]},$$scope:{ctx:r}}}),_=new ht({props:{h2:!0,id:"alpha",$$slots:{default:[St]},$$scope:{ctx:r}}});let q=r[0]==="tile"&&gt();return J=new Ct({props:{block:!0,premium:r[1],$$slots:{default:[Ft]},$$scope:{ctx:r}}}),{c(){e=f(`

`),X(t.$$.fragment),n=f(`
`),l=C("p"),u=f(`
    The glow parameter will add an emissive color to make the `),g=f(r[0]),b=f(` glow.
    `),H&&H.c(),k=f(`
    `),E=C("br"),T=f(`It can take a number from 0 to 1 or a color. 
    `),h=C("br"),M=f("Examples: "),y=C("code"),y.textContent=$,D=f(`
`),v=f(`
`),N&&N.c(),d=f(`
`),X(j.$$.fragment),S=f(`



`),X(_.$$.fragment),P=f(`
`),F=C("p"),R=f(`
    The alpha parameter can be used to make the `),Y=f(r[0]),L=f(` partially transparent. Or, you can set alpha to 1 to turn on alpha blending.
    `),O=C("br"),s=f("Examples: "),p=C("code"),p.textContent=I,V=f(`
`),U=f(`
`),q&&q.c(),st=f(`

`),X(J.$$.fragment)},l(c){e=a(c,`

`),Z(t.$$.fragment,c),n=a(c,`
`),l=w(c,"P",{});var x=at(l);u=a(x,`
    The glow parameter will add an emissive color to make the `),g=a(x,r[0]),b=a(x,` glow.
    `),H&&H.l(x),k=a(x,`
    `),E=w(x,"BR",{}),T=a(x,`It can take a number from 0 to 1 or a color. 
    `),h=w(x,"BR",{}),M=a(x,"Examples: "),y=w(x,"CODE",{"data-svelte-h":!0}),A(y)!=="svelte-1a7ct2"&&(y.textContent=$),D=a(x,`
`),x.forEach(i),v=a(c,`
`),N&&N.l(c),d=a(c,`
`),Z(j.$$.fragment,c),S=a(c,`



`),Z(_.$$.fragment,c),P=a(c,`
`),F=w(c,"P",{});var W=at(F);R=a(W,`
    The alpha parameter can be used to make the `),Y=a(W,r[0]),L=a(W,` partially transparent. Or, you can set alpha to 1 to turn on alpha blending.
    `),O=w(W,"BR",{}),s=a(W,"Examples: "),p=w(W,"CODE",{"data-svelte-h":!0}),A(p)!=="svelte-qktyga"&&(p.textContent=I),V=a(W,`
`),W.forEach(i),U=a(c,`
`),q&&q.l(c),st=a(c,`

`),Z(J.$$.fragment,c)},m(c,x){o(c,e,x),tt(t,c,x),o(c,n,x),o(c,l,x),m(l,u),m(l,g),m(l,b),H&&H.m(l,null),m(l,k),m(l,E),m(l,T),m(l,h),m(l,M),m(l,y),m(l,D),o(c,v,x),N&&N.m(c,x),o(c,d,x),tt(j,c,x),o(c,S,x),tt(_,c,x),o(c,P,x),o(c,F,x),m(F,R),m(F,Y),m(F,L),m(F,O),m(F,s),m(F,p),m(F,V),o(c,U,x),q&&q.m(c,x),o(c,st,x),tt(J,c,x),rt=!0},p(c,[x]){const W={};x&4&&(W.$$scope={dirty:x,ctx:c}),t.$set(W),(!rt||x&1)&&ot(g,c[0]),c[0]==="tile"?H||(H=wt(),H.c(),H.m(l,k)):H&&(H.d(1),H=null),c[0]==="tile"?N||(N=xt(),N.c(),N.m(d.parentNode,d)):N&&(N.d(1),N=null);const it={};x&2&&(it.premium=c[1]),x&4&&(it.$$scope={dirty:x,ctx:c}),j.$set(it);const ct={};x&4&&(ct.$$scope={dirty:x,ctx:c}),_.$set(ct),(!rt||x&1)&&ot(Y,c[0]),c[0]==="tile"?q||(q=gt(),q.c(),q.m(st.parentNode,st)):q&&(q.d(1),q=null);const pt={};x&2&&(pt.premium=c[1]),x&5&&(pt.$$scope={dirty:x,ctx:c}),J.$set(pt)},i(c){rt||(et(t.$$.fragment,c),et(j.$$.fragment,c),et(_.$$.fragment,c),et(J.$$.fragment,c),rt=!0)},o(c){nt(t.$$.fragment,c),nt(j.$$.fragment,c),nt(_.$$.fragment,c),nt(J.$$.fragment,c),rt=!1},d(c){c&&(i(e),i(n),i(l),i(v),i(d),i(S),i(P),i(F),i(U),i(st)),lt(t,c),H&&H.d(),N&&N.d(c),lt(j,c),lt(_,c),q&&q.d(c),lt(J,c)}}}function Ot(r,e,t){let{subject:n="character"}=e,{premium:l="?"}=e;return r.$$set=u=>{"subject"in u&&t(0,n=u.subject),"premium"in u&&t(1,l=u.premium)},[n,l]}class fe extends vt{constructor(e){super(),bt(this,e,Ot,jt,_t,{subject:0,premium:1})}}function Lt(r){let e;return{c(){e=f("Offset Functions")},l(t){e=a(t,"Offset Functions")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function qt(r){let e,t,n="n",l,u,g="n",b,k,E="n",T,h,M="x",y,$,D="y",v,d,j="z",S;return{c(){e=f("xoff("),t=C("samp"),t.textContent=n,l=f(`)
yoff(`),u=C("samp"),u.textContent=g,b=f(`)
zoff(`),k=C("samp"),k.textContent=E,T=f(`)
offset(`),h=C("samp"),h.textContent=M,y=f(","),$=C("samp"),$.textContent=D,v=f(","),d=C("samp"),d.textContent=j,S=f(")"),this.h()},l(_){e=a(_,"xoff("),t=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(t)!=="svelte-11z14xk"&&(t.textContent=n),l=a(_,`)
yoff(`),u=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(u)!=="svelte-11z14xk"&&(u.textContent=g),b=a(_,`)
zoff(`),k=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(k)!=="svelte-11z14xk"&&(k.textContent=E),T=a(_,`)
offset(`),h=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(h)!=="svelte-p3ccxq"&&(h.textContent=M),y=a(_,","),$=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A($)!=="svelte-eyvwfd"&&($.textContent=D),v=a(_,","),d=w(_,"SAMP",{title:!0,"data-svelte-h":!0}),A(d)!=="svelte-1dzwvas"&&(d.textContent=j),S=a(_,")"),this.h()},h(){ft(t,"title","number"),ft(u,"title","number"),ft(k,"title","number"),ft(h,"title","number"),ft($,"title","number"),ft(d,"title","number")},m(_,P){o(_,e,P),o(_,t,P),o(_,l,P),o(_,u,P),o(_,b,P),o(_,k,P),o(_,T,P),o(_,h,P),o(_,y,P),o(_,$,P),o(_,v,P),o(_,d,P),o(_,S,P)},p:mt,d(_){_&&(i(e),i(t),i(l),i(u),i(b),i(k),i(T),i(h),i(y),i($),i(v),i(d),i(S))}}}function Ht(r){let e;return{c(){e=f("Dynamic Offset")},l(t){e=a(t,"Dynamic Offset")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Rt(r){let e;return{c(){e=f("but any shape can be given a dynamic offset with this function.")},l(t){e=a(t,"but any shape can be given a dynamic offset with this function.")},m(t,n){o(t,e,n)},p:mt,d(t){t&&i(e)}}}function It(r){let e,t,n=r[1]&&kt();return{c(){e=f("but other dynamic shapes can be given a dynamic offset as well, such as the board shape"),n&&n.c(),t=f(".")},l(l){e=a(l,"but other dynamic shapes can be given a dynamic offset as well, such as the board shape"),n&&n.l(l),t=a(l,".")},m(l,u){o(l,e,u),n&&n.m(l,u),o(l,t,u)},p(l,u){l[1]?n||(n=kt(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){l&&(i(e),i(t)),n&&n.d(l)}}}function kt(r){let e;return{c(){e=f(" or the model or mesh shapes")},l(t){e=a(t," or the model or mesh shapes")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Bt(r){let e;return{c(){e=f("doff(0), doff(.45), doff(.45p)")},l(t){e=a(t,"doff(0), doff(.45), doff(.45p)")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Gt(r){let e,t,n,l,u=`
    There are three offset functions, xoff, yoff, and zoff, which add an offset to the position in the respective dimension. There is also an offset function which can be used to set all three at once.
`,g,b,k,E,T,h,M,y,$,D,v,d,j,S,_=`
    If the value provided to this function includes the letter "p", the dynamic offset will be adjusted according to the camera's pitch.
    The offset will be zero when the camera pitch is parallel to the ground, and will be the full offset when the camera is looking straight down.
`,P,F,R;t=new ht({props:{h2:!0,id:"offset",$$slots:{default:[Lt]},$$scope:{ctx:r}}}),b=new $t({props:{$$slots:{default:[qt]},$$scope:{ctx:r}}}),E=new ht({props:{h2:!0,id:"doff",$$slots:{default:[Ht]},$$scope:{ctx:r}}});function Y(s,p){return s[0]==="tile"?It:Rt}let L=Y(r),O=L(r);return F=new $t({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}}}),{c(){e=f(`

`),X(t.$$.fragment),n=f(`
`),l=C("p"),l.textContent=u,g=f(`
`),X(b.$$.fragment),k=f(`


`),X(E.$$.fragment),T=f(`
`),h=C("p"),M=f(`
    The DOff Function controls the `),y=f(r[0]),$=f(`'s "Dynamic Offset". Dynamic offset is the amount the `),D=f(r[0]),v=f(` will be offset towards the camera.
    This is usually used for the sprite shape, `),O.c(),d=f(`
    The default dynamic offset for sprites is settable in the plugin parameters through the "Sprite Dynamic Offset" parameter.
`),j=f(`
`),S=C("p"),S.textContent=_,P=f(`

Examples:
`),X(F.$$.fragment)},l(s){e=a(s,`

`),Z(t.$$.fragment,s),n=a(s,`
`),l=w(s,"P",{"data-svelte-h":!0}),A(l)!=="svelte-1hjggeo"&&(l.textContent=u),g=a(s,`
`),Z(b.$$.fragment,s),k=a(s,`


`),Z(E.$$.fragment,s),T=a(s,`
`),h=w(s,"P",{});var p=at(h);M=a(p,`
    The DOff Function controls the `),y=a(p,r[0]),$=a(p,`'s "Dynamic Offset". Dynamic offset is the amount the `),D=a(p,r[0]),v=a(p,` will be offset towards the camera.
    This is usually used for the sprite shape, `),O.l(p),d=a(p,`
    The default dynamic offset for sprites is settable in the plugin parameters through the "Sprite Dynamic Offset" parameter.
`),p.forEach(i),j=a(s,`
`),S=w(s,"P",{"data-svelte-h":!0}),A(S)!=="svelte-cd2jlp"&&(S.textContent=_),P=a(s,`

Examples:
`),Z(F.$$.fragment,s)},m(s,p){o(s,e,p),tt(t,s,p),o(s,n,p),o(s,l,p),o(s,g,p),tt(b,s,p),o(s,k,p),tt(E,s,p),o(s,T,p),o(s,h,p),m(h,M),m(h,y),m(h,$),m(h,D),m(h,v),O.m(h,null),m(h,d),o(s,j,p),o(s,S,p),o(s,P,p),tt(F,s,p),R=!0},p(s,[p]){const I={};p&4&&(I.$$scope={dirty:p,ctx:s}),t.$set(I);const V={};p&4&&(V.$$scope={dirty:p,ctx:s}),b.$set(V);const U={};p&4&&(U.$$scope={dirty:p,ctx:s}),E.$set(U),(!R||p&1)&&ot(y,s[0]),(!R||p&1)&&ot(D,s[0]),L===(L=Y(s))&&O?O.p(s,p):(O.d(1),O=L(s),O&&(O.c(),O.m(h,d)));const st={};p&4&&(st.$$scope={dirty:p,ctx:s}),F.$set(st)},i(s){R||(et(t.$$.fragment,s),et(b.$$.fragment,s),et(E.$$.fragment,s),et(F.$$.fragment,s),R=!0)},o(s){nt(t.$$.fragment,s),nt(b.$$.fragment,s),nt(E.$$.fragment,s),nt(F.$$.fragment,s),R=!1},d(s){s&&(i(e),i(n),i(l),i(g),i(k),i(T),i(h),i(j),i(S),i(P)),lt(t,s),lt(b,s),lt(E,s),O.d(),lt(F,s)}}}function Nt(r,e,t){let{subject:n="character"}=e,{premium:l="?"}=e;return r.$$set=u=>{"subject"in u&&t(0,n=u.subject),"premium"in u&&t(1,l=u.premium)},[n,l]}class ae extends vt{constructor(e){super(),bt(this,e,Nt,Gt,_t,{subject:0,premium:1})}}function Vt(r){let e;return{c(){e=f("Rotation Functions")},l(t){e=a(t,"Rotation Functions")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Yt(r){let e,t,n="n",l,u,g="n",b,k,E="n",T,h,M="n",y;return{c(){e=f("yaw("),t=C("samp"),t.textContent=n,l=f(`)
pitch(`),u=C("samp"),u.textContent=g,b=f(`)
roll(`),k=C("samp"),k.textContent=E,T=f(`)
rot(`),h=C("samp"),h.textContent=M,y=f(")"),this.h()},l($){e=a($,"yaw("),t=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(t)!=="svelte-11z14xk"&&(t.textContent=n),l=a($,`)
pitch(`),u=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(u)!=="svelte-11z14xk"&&(u.textContent=g),b=a($,`)
roll(`),k=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(k)!=="svelte-11z14xk"&&(k.textContent=E),T=a($,`)
rot(`),h=w($,"SAMP",{title:!0,"data-svelte-h":!0}),A(h)!=="svelte-11z14xk"&&(h.textContent=M),y=a($,")"),this.h()},h(){ft(t,"title","number"),ft(u,"title","number"),ft(k,"title","number"),ft(h,"title","number")},m($,D){o($,e,D),o($,t,D),o($,l,D),o($,u,D),o($,b,D),o($,k,D),o($,T,D),o($,h,D),o($,y,D)},p:mt,d($){$&&(i(e),i(t),i(l),i(u),i(b),i(k),i(T),i(h),i(y))}}}function Jt(r){let e,t,n,l,u=`
    There are four rotation functions, yaw, pitch, roll, and rot.
`,g,b,k=`
    Rot is the simple rotation function, and is usually only used on its own, but when used with the others it is applied last.
`,E,T,h,M,y,$,D,v,d,j,S,_,P,F,R,Y,L,O;return t=new ht({props:{h2:!0,id:"rot",$$slots:{default:[Vt]},$$scope:{ctx:r}}}),L=new $t({props:{$$slots:{default:[Yt]},$$scope:{ctx:r}}}),{c(){e=f(`

`),X(t.$$.fragment),n=f(`
`),l=C("p"),l.textContent=u,g=f(`
`),b=C("p"),b.textContent=k,E=f(`
`),T=C("p"),h=f(`
    Yaw rotates the `),M=f(r[0]),y=f(` around the z axis, effectively turning it left and right.
`),$=f(`
`),D=C("p"),v=f(`
    Pitch rotates the `),d=f(r[0]),j=f(` around the x axis, effectively turning it up and down.
`),S=f(`
`),_=C("p"),P=f(`
    Roll rotates the `),F=f(r[0]),R=f(` around the y axis, effectively tilting it side to side.
`),Y=f(`
`),X(L.$$.fragment)},l(s){e=a(s,`

`),Z(t.$$.fragment,s),n=a(s,`
`),l=w(s,"P",{"data-svelte-h":!0}),A(l)!=="svelte-1xkzqq7"&&(l.textContent=u),g=a(s,`
`),b=w(s,"P",{"data-svelte-h":!0}),A(b)!=="svelte-1cgmswk"&&(b.textContent=k),E=a(s,`
`),T=w(s,"P",{});var p=at(T);h=a(p,`
    Yaw rotates the `),M=a(p,r[0]),y=a(p,` around the z axis, effectively turning it left and right.
`),p.forEach(i),$=a(s,`
`),D=w(s,"P",{});var I=at(D);v=a(I,`
    Pitch rotates the `),d=a(I,r[0]),j=a(I,` around the x axis, effectively turning it up and down.
`),I.forEach(i),S=a(s,`
`),_=w(s,"P",{});var V=at(_);P=a(V,`
    Roll rotates the `),F=a(V,r[0]),R=a(V,` around the y axis, effectively tilting it side to side.
`),V.forEach(i),Y=a(s,`
`),Z(L.$$.fragment,s)},m(s,p){o(s,e,p),tt(t,s,p),o(s,n,p),o(s,l,p),o(s,g,p),o(s,b,p),o(s,E,p),o(s,T,p),m(T,h),m(T,M),m(T,y),o(s,$,p),o(s,D,p),m(D,v),m(D,d),m(D,j),o(s,S,p),o(s,_,p),m(_,P),m(_,F),m(_,R),o(s,Y,p),tt(L,s,p),O=!0},p(s,[p]){const I={};p&2&&(I.$$scope={dirty:p,ctx:s}),t.$set(I),(!O||p&1)&&ot(M,s[0]),(!O||p&1)&&ot(d,s[0]),(!O||p&1)&&ot(F,s[0]);const V={};p&2&&(V.$$scope={dirty:p,ctx:s}),L.$set(V)},i(s){O||(et(t.$$.fragment,s),et(L.$$.fragment,s),O=!0)},o(s){nt(t.$$.fragment,s),nt(L.$$.fragment,s),O=!1},d(s){s&&(i(e),i(n),i(l),i(g),i(b),i(E),i(T),i($),i(D),i(S),i(_),i(Y)),lt(t,s),lt(L,s)}}}function Kt(r,e,t){let{subject:n="character"}=e;return r.$$set=l=>{"subject"in l&&t(0,n=l.subject)},[n]}class oe extends vt{constructor(e){super(),bt(this,e,Kt,Jt,_t,{subject:0})}}function Qt(r){let e;return{c(){e=f("Shape Function")},l(t){e=a(t,"Shape Function")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Ut(r){let e;return{c(){e=f("A plane that lies flat on the ground.")},l(t){e=a(t,"A plane that lies flat on the ground.")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Wt(r){let e;return{c(){e=f("The default shape. Flat tiles normally appear as a flat plane, but when given height will have walls that use the side texture.")},l(t){e=a(t,"The default shape. Flat tiles normally appear as a flat plane, but when given height will have walls that use the side texture.")},m(t,n){o(t,e,n)},d(t){t&&i(e)}}}function Tt(r){let e,t="fence",n,l=`
        A shape that will connect to other nearby tiles to create a fence.
        A second parameter can be provided to set whether it should have fence posts (true by default).
        <br/>Examples: <code>shape(fence), shape(fence,false)</code>
    `;return{c(){e=C("dt"),e.textContent=t,n=C("dd"),n.innerHTML=l},l(u){e=w(u,"DT",{"data-svelte-h":!0}),A(e)!=="svelte-1trvg5"&&(e.textContent=t),n=w(u,"DD",{"data-svelte-h":!0}),A(n)!=="svelte-lorb5"&&(n.innerHTML=l)},m(u,g){o(u,e,g),o(u,n,g)},d(u){u&&(i(e),i(n))}}}function Dt(r){let e,t="slope",n,l=`
        A shape for creating slopes that let the player walk up or down to different elevations. Can be used as ramps or stairs, sloped roofs, or hills.
        Takes a second parameter which is the slope&#39;s height.
        <br/>Examples: <code>shape(slope), shape(slope,2)</code>
        <br/>For more information and functionality, see the <a href="#slope">slope function</a>.
    `;return{c(){e=C("dt"),e.textContent=t,n=C("dd"),n.innerHTML=l},l(u){e=w(u,"DT",{"data-svelte-h":!0}),A(e)!=="svelte-1pee1tj"&&(e.textContent=t),n=w(u,"DD",{"data-svelte-h":!0}),A(n)!=="svelte-cpgxd8"&&(n.innerHTML=l)},m(u,g){o(u,e,g),o(u,n,g)},d(u){u&&(i(e),i(n))}}}function Xt(r){let e,t,n,l,u,g,b,k,E,T,h,M,y="flat",$,D,v,d,j="cross",S,_="An intersection of two verical planes.",P,F="xcross",R,Y="Same as cross, but angled at 45deg. Essentially a shorthand for <code>shape(cross),rot(45)</code>",L,O="8cross",s,p="A combination of cross and xcross.",I,V="sprite",U,st=`
        <p>A special shape that will always face the camera.</p>
        <p>Takes a second parameter for <a href="#doff">dynamic offset</a>.</p>
    `,J,rt="billboard",H,N=`
        Formerly known as the &quot;tree&quot; shape, also named &quot;board&quot; and &quot;cardboard&quot;.
        <br/>A billboard will rotate to match the camera&#39;s yaw, but not its pitch.
    `,q,c="wall",x,W=`
        The wall shape is a flat plane that stands straight up instead of lying on the ground.
        It&#39;s intended for creating wall decorations by using it alongside the <a href="#rot">rot function</a> and <a href="#offset">offset functions</a>.
    `,it;t=new ht({props:{h2:!0,id:"shape",$$slots:{default:[Qt]},$$scope:{ctx:r}}});function ct(z,G){return z[0]==="tile"?Wt:Ut}let pt=ct(r),ut=pt(r),K=r[0]==="tile"&&Tt(),Q=r[0]==="tile"&&Dt();return{c(){e=f(`


`),X(t.$$.fragment),n=f(`
`),l=C("p"),u=f(`
    The shape function will set the shape of the `),g=f(r[0]),b=f(". The shape determines how the "),k=f(r[0]),E=f(`'s mesh will be built and how it will behave.
`),T=f(`
`),h=C("dl"),M=C("dt"),M.textContent=y,$=C("dd"),D=f(`
        `),ut.c(),v=f(`
    `),d=C("dt"),d.textContent=j,S=C("dd"),S.textContent=_,P=C("dt"),P.textContent=F,R=C("dd"),R.innerHTML=Y,L=C("dt"),L.textContent=O,s=C("dd"),s.textContent=p,I=C("dt"),I.textContent=V,U=C("dd"),U.innerHTML=st,J=C("dt"),J.textContent=rt,H=C("dd"),H.innerHTML=N,K&&K.c(),q=C("dt"),q.textContent=c,x=C("dd"),x.innerHTML=W,Q&&Q.c()},l(z){e=a(z,`


`),Z(t.$$.fragment,z),n=a(z,`
`),l=w(z,"P",{});var G=at(l);u=a(G,`
    The shape function will set the shape of the `),g=a(G,r[0]),b=a(G,". The shape determines how the "),k=a(G,r[0]),E=a(G,`'s mesh will be built and how it will behave.
`),G.forEach(i),T=a(z,`
`),h=w(z,"DL",{});var B=at(h);M=w(B,"DT",{"data-svelte-h":!0}),A(M)!=="svelte-1ooe3lh"&&(M.textContent=y),$=w(B,"DD",{});var dt=at($);D=a(dt,`
        `),ut.l(dt),v=a(dt,`
    `),dt.forEach(i),d=w(B,"DT",{"data-svelte-h":!0}),A(d)!=="svelte-i1mz0q"&&(d.textContent=j),S=w(B,"DD",{"data-svelte-h":!0}),A(S)!=="svelte-xhsz52"&&(S.textContent=_),P=w(B,"DT",{"data-svelte-h":!0}),A(P)!=="svelte-1pa5ioa"&&(P.textContent=F),R=w(B,"DD",{"data-svelte-h":!0}),A(R)!=="svelte-1n7bls2"&&(R.innerHTML=Y),L=w(B,"DT",{"data-svelte-h":!0}),A(L)!=="svelte-1q9ewi2"&&(L.textContent=O),s=w(B,"DD",{"data-svelte-h":!0}),A(s)!=="svelte-yomgwk"&&(s.textContent=p),I=w(B,"DT",{"data-svelte-h":!0}),A(I)!=="svelte-1biz6zv"&&(I.textContent=V),U=w(B,"DD",{"data-svelte-h":!0}),A(U)!=="svelte-tp9cva"&&(U.innerHTML=st),J=w(B,"DT",{"data-svelte-h":!0}),A(J)!=="svelte-1463zcb"&&(J.textContent=rt),H=w(B,"DD",{"data-svelte-h":!0}),A(H)!=="svelte-raikco"&&(H.innerHTML=N),K&&K.l(B),q=w(B,"DT",{"data-svelte-h":!0}),A(q)!=="svelte-13wzyb2"&&(q.textContent=c),x=w(B,"DD",{"data-svelte-h":!0}),A(x)!=="svelte-11raevs"&&(x.innerHTML=W),Q&&Q.l(B),B.forEach(i)},m(z,G){o(z,e,G),tt(t,z,G),o(z,n,G),o(z,l,G),m(l,u),m(l,g),m(l,b),m(l,k),m(l,E),o(z,T,G),o(z,h,G),m(h,M),m(h,$),m($,D),ut.m($,null),m($,v),m(h,d),m(h,S),m(h,P),m(h,R),m(h,L),m(h,s),m(h,I),m(h,U),m(h,J),m(h,H),K&&K.m(h,null),m(h,q),m(h,x),Q&&Q.m(h,null),it=!0},p(z,[G]){const B={};G&2&&(B.$$scope={dirty:G,ctx:z}),t.$set(B),(!it||G&1)&&ot(g,z[0]),(!it||G&1)&&ot(k,z[0]),pt!==(pt=ct(z))&&(ut.d(1),ut=pt(z),ut&&(ut.c(),ut.m($,v))),z[0]==="tile"?K||(K=Tt(),K.c(),K.m(h,q)):K&&(K.d(1),K=null),z[0]==="tile"?Q||(Q=Dt(),Q.c(),Q.m(h,null)):Q&&(Q.d(1),Q=null)},i(z){it||(et(t.$$.fragment,z),it=!0)},o(z){nt(t.$$.fragment,z),it=!1},d(z){z&&(i(e),i(n),i(l),i(T),i(h)),lt(t,z),ut.d(),K&&K.d(),Q&&Q.d()}}}function Zt(r,e,t){let{subject:n="character"}=e;return r.$$set=l=>{"subject"in l&&t(0,n=l.subject)},[n]}class re extends vt{constructor(e){super(),bt(this,e,Zt,Xt,_t,{subject:0})}}export{fe as G,ae as O,oe as R,re as S};
