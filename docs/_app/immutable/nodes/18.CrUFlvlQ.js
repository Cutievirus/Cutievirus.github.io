import{s as et,b as nt}from"../chunks/scheduler.Cdu_wsp_.js";import{S as lt,i as st,t as s,c as K,k as p,a,b as O,l as m,n as f,q as Q,d as n,m as V,e as Y,f as Z,g as l,h as tt}from"../chunks/index.gwBTkKco.js";import{C as at}from"../chunks/Code.j1pNgbFo.js";import{P as it}from"../chunks/PageTitle.bKvIm82Y.js";function ot(L){let o;return{c(){o=s(`
    connect(Map002|0,13,0)
`)},l(i){o=a(i,`
    connect(Map002|0,13,0)
`)},m(i,w){n(i,o,w)},d(i){i&&l(o)}}}function pt(L){let o,i,w,r,z=`
    Maps can be connected to other maps, which will cause both maps to be rendered at the same time.
`,k,u,G=`
    Currently there is no seamless transition to the connected maps, however transfers to connected maps should be faster since the connected map is already loaded.
`,P,c,N,y,d,R=`
    Usage Example:
`,M,h,q,x,U=`
    The first parameter is the map id (not the map name). It should be formatted as <code>MapXXX</code>, with the word &quot;Map&quot; and three digits. This should match the name of the Maps&#39;s json file in the data folder.
`,j,C,W=`
    The three numbered parameters are x, y, and z offsets. They determine the position of the connected map relative to the current map.
`,T,H,S,v,A=`
    Connect North: the y offset should be the negative height of the connected map.
`,X,_,B=`
    Connect East: the x offset should be the width of the current map.
`,g,$,D=`
    Connect South: the y offset should be the height of the current map.
`,E,b,F=`
    Connect West: the x offset should be the negative width of the connected map.
`,I;return i=new it({props:{title:"Connected Maps"}}),h=new at({props:{$$slots:{default:[ot]},$$scope:{ctx:L}}}),{c(){o=s(`

`),K(i.$$.fragment),w=s(`

`),r=p("p"),r.textContent=z,k=s(`
`),u=p("p"),u.textContent=G,P=s(`

`),c=p("img"),y=s(`

`),d=p("p"),d.textContent=R,M=s(`
`),K(h.$$.fragment),q=s(`
`),x=p("p"),x.innerHTML=U,j=s(`
`),C=p("p"),C.textContent=W,T=s(`

`),H=p("hr"),S=s(`

`),v=p("p"),v.textContent=A,X=s(`
`),_=p("p"),_.textContent=B,g=s(`
`),$=p("p"),$.textContent=D,E=s(`
`),b=p("p"),b.textContent=F,this.h()},l(t){o=a(t,`

`),O(i.$$.fragment,t),w=a(t,`

`),r=m(t,"P",{"data-svelte-h":!0}),f(r)!=="svelte-1rapvip"&&(r.textContent=z),k=a(t,`
`),u=m(t,"P",{"data-svelte-h":!0}),f(u)!=="svelte-1h7sji2"&&(u.textContent=G),P=a(t,`

`),c=m(t,"IMG",{src:!0,alt:!0}),y=a(t,`

`),d=m(t,"P",{"data-svelte-h":!0}),f(d)!=="svelte-68nkht"&&(d.textContent=R),M=a(t,`
`),O(h.$$.fragment,t),q=a(t,`
`),x=m(t,"P",{"data-svelte-h":!0}),f(x)!=="svelte-nknrj1"&&(x.innerHTML=U),j=a(t,`
`),C=m(t,"P",{"data-svelte-h":!0}),f(C)!=="svelte-174llk4"&&(C.textContent=W),T=a(t,`

`),H=m(t,"HR",{}),S=a(t,`

`),v=m(t,"P",{"data-svelte-h":!0}),f(v)!=="svelte-5k4q4i"&&(v.textContent=A),X=a(t,`
`),_=m(t,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1l6jcd"&&(_.textContent=B),g=a(t,`
`),$=m(t,"P",{"data-svelte-h":!0}),f($)!=="svelte-10ddtvt"&&($.textContent=D),E=a(t,`
`),b=m(t,"P",{"data-svelte-h":!0}),f(b)!=="svelte-1bf29km"&&(b.textContent=F),this.h()},h(){nt(c.src,N="https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:kj5nhnx6q5am7qjfvuefbydw/bafkreicekilgpdq5glwwp6orwccpguo2loymusb26lstvv333kiskt2r2e@jpeg")||Q(c,"src",N),Q(c,"alt","")},m(t,e){n(t,o,e),V(i,t,e),n(t,w,e),n(t,r,e),n(t,k,e),n(t,u,e),n(t,P,e),n(t,c,e),n(t,y,e),n(t,d,e),n(t,M,e),V(h,t,e),n(t,q,e),n(t,x,e),n(t,j,e),n(t,C,e),n(t,T,e),n(t,H,e),n(t,S,e),n(t,v,e),n(t,X,e),n(t,_,e),n(t,g,e),n(t,$,e),n(t,E,e),n(t,b,e),I=!0},p(t,[e]){const J={};e&1&&(J.$$scope={dirty:e,ctx:t}),h.$set(J)},i(t){I||(Y(i.$$.fragment,t),Y(h.$$.fragment,t),I=!0)},o(t){Z(i.$$.fragment,t),Z(h.$$.fragment,t),I=!1},d(t){t&&(l(o),l(w),l(r),l(k),l(u),l(P),l(c),l(y),l(d),l(M),l(q),l(x),l(j),l(C),l(T),l(H),l(S),l(v),l(X),l(_),l(g),l($),l(E),l(b)),tt(i,t),tt(h,t)}}}class ut extends lt{constructor(o){super(),st(this,o,null,pt,et,{})}}export{ut as component};
