import{s as I,b as g,i as m,j as b,n as c,h as _,k as o}from"./scheduler.BjkBv5nx.js";import{S as F,i as H,t as S,k as W,a as j,l as v,q as l,d as k,x as w,g as q}from"./index.BT_eMuJg.js";function C(e){let a,t,n,f,r,u,d;return{c(){a=S(`\r
\r
\r
\r
\r
`),t=W("img"),this.h()},l(i){a=j(i,`\r
\r
\r
\r
\r
`),t=v(i,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,style:!0,"data-radius":!0}),this.h()},h(){g(t.src,n=e[2])||l(t,"src",n),l(t,"alt",e[3]),l(t,"width",e[0]),l(t,"height",e[1]),l(t,"class",f=m(e[7].class)+" svelte-wp4vif"),l(t,"style",r="--width:"+e[0]+";--height:"+e[1]+";"+e[7].style),l(t,"data-radius",e[4]),(e[5]===void 0||e[6]===void 0)&&b(()=>e[8].call(t))},m(i,s){k(i,a,s),k(i,t,s),u||(d=w(t,"load",e[8]),u=!0)},p(i,[s]){s&4&&!g(t.src,n=i[2])&&l(t,"src",n),s&8&&l(t,"alt",i[3]),s&1&&l(t,"width",i[0]),s&2&&l(t,"height",i[1]),s&128&&f!==(f=m(i[7].class)+" svelte-wp4vif")&&l(t,"class",f),s&131&&r!==(r="--width:"+i[0]+";--height:"+i[1]+";"+i[7].style)&&l(t,"style",r),s&16&&l(t,"data-radius",i[4])},i:c,o:c,d(i){i&&(q(a),q(t)),u=!1,d()}}}function G(e,a,t){let{src:n}=a,{alt:f=""}=a,{width:r}=a,{height:u}=a,{radius:d=void 0}=a,i=0,s=0;function y(){i=this.naturalWidth,s=this.naturalHeight,t(5,i),t(6,s)}return e.$$set=h=>{t(7,a=_(_({},a),o(h))),"src"in h&&t(2,n=h.src),"alt"in h&&t(3,f=h.alt),"width"in h&&t(0,r=h.width),"height"in h&&t(1,u=h.height),"radius"in h&&t(4,d=h.radius)},e.$$.update=()=>{e.$$.dirty&3&&(isFinite(+r)&&t(0,r=r+"px"),isFinite(+u)&&t(1,u=u+"px"))},a=o(a),[r,u,n,f,d,i,s,a,y]}class A extends F{constructor(a){super(),H(this,a,G,C,I,{src:2,alt:3,width:0,height:1,radius:4})}}export{A as I};
