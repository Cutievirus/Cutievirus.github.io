import{s as et,b as nt}from"../chunks/scheduler.BjkBv5nx.js";import{S as rt,i as lt,t as l,c as K,k as o,a as s,b as O,l as p,n as m,q as Q,d as n,m as V,e as Y,f as Z,g as r,h as tt}from"../chunks/index.BT_eMuJg.js";import{C as st}from"../chunks/Code.UvG0J7Qo.js";import{P as at}from"../chunks/PageTitle.DTA_6V-l.js";function it(L){let i;return{c(){i=l(`\r
    connect(Map002|0,13,0)\r
`)},l(a){i=s(a,`\r
    connect(Map002|0,13,0)\r
`)},m(a,w){n(a,i,w)},d(a){a&&r(i)}}}function ot(L){let i,a,w,h,z=`\r
    Maps can be connected to other maps, which will cause both maps to be rendered at the same time.\r
`,k,u,G=`\r
    Currently there is no seamless transition to the connected maps, however transfers to connected maps should be faster since the connected map is already loaded.\r
`,P,c,N,y,d,R=`\r
    Usage Example:\r
`,M,f,q,x,U=`
    The first parameter is the map id (not the map name). It should be formatted as <code>MapXXX</code>, with the word &quot;Map&quot; and three digits. This should match the name of the Maps&#39;s json file in the data folder.
`,j,C,W=`\r
    The three numbered parameters are x, y, and z offsets. They determine the position of the connected map relative to the current map.\r
`,T,H,S,v,A=`\r
    Connect North: the y offset should be the negative height of the connected map.\r
`,X,_,B=`\r
    Connect East: the x offset should be the width of the current map.\r
`,g,$,D=`\r
    Connect South: the y offset should be the height of the current map.\r
`,E,b,F=`\r
    Connect West: the x offset should be the negative width of the connected map.\r
`,I;return a=new at({props:{title:"Connected Maps"}}),f=new st({props:{$$slots:{default:[it]},$$scope:{ctx:L}}}),{c(){i=l(`\r
\r
`),K(a.$$.fragment),w=l(`\r
\r
`),h=o("p"),h.textContent=z,k=l(`\r
`),u=o("p"),u.textContent=G,P=l(`\r
\r
`),c=o("img"),y=l(`\r
\r
`),d=o("p"),d.textContent=R,M=l(`\r
`),K(f.$$.fragment),q=l(`\r
`),x=o("p"),x.innerHTML=U,j=l(`\r
`),C=o("p"),C.textContent=W,T=l(`\r
\r
`),H=o("hr"),S=l(`\r
\r
`),v=o("p"),v.textContent=A,X=l(`\r
`),_=o("p"),_.textContent=B,g=l(`\r
`),$=o("p"),$.textContent=D,E=l(`\r
`),b=o("p"),b.textContent=F,this.h()},l(t){i=s(t,`\r
\r
`),O(a.$$.fragment,t),w=s(t,`\r
\r
`),h=p(t,"P",{"data-svelte-h":!0}),m(h)!=="svelte-1rapvip"&&(h.textContent=z),k=s(t,`\r
`),u=p(t,"P",{"data-svelte-h":!0}),m(u)!=="svelte-1h7sji2"&&(u.textContent=G),P=s(t,`\r
\r
`),c=p(t,"IMG",{src:!0,alt:!0}),y=s(t,`\r
\r
`),d=p(t,"P",{"data-svelte-h":!0}),m(d)!=="svelte-68nkht"&&(d.textContent=R),M=s(t,`\r
`),O(f.$$.fragment,t),q=s(t,`\r
`),x=p(t,"P",{"data-svelte-h":!0}),m(x)!=="svelte-nknrj1"&&(x.innerHTML=U),j=s(t,`\r
`),C=p(t,"P",{"data-svelte-h":!0}),m(C)!=="svelte-174llk4"&&(C.textContent=W),T=s(t,`\r
\r
`),H=p(t,"HR",{}),S=s(t,`\r
\r
`),v=p(t,"P",{"data-svelte-h":!0}),m(v)!=="svelte-5k4q4i"&&(v.textContent=A),X=s(t,`\r
`),_=p(t,"P",{"data-svelte-h":!0}),m(_)!=="svelte-1l6jcd"&&(_.textContent=B),g=s(t,`\r
`),$=p(t,"P",{"data-svelte-h":!0}),m($)!=="svelte-10ddtvt"&&($.textContent=D),E=s(t,`\r
`),b=p(t,"P",{"data-svelte-h":!0}),m(b)!=="svelte-1bf29km"&&(b.textContent=F),this.h()},h(){nt(c.src,N="https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:kj5nhnx6q5am7qjfvuefbydw/bafkreicekilgpdq5glwwp6orwccpguo2loymusb26lstvv333kiskt2r2e@jpeg")||Q(c,"src",N),Q(c,"alt","")},m(t,e){n(t,i,e),V(a,t,e),n(t,w,e),n(t,h,e),n(t,k,e),n(t,u,e),n(t,P,e),n(t,c,e),n(t,y,e),n(t,d,e),n(t,M,e),V(f,t,e),n(t,q,e),n(t,x,e),n(t,j,e),n(t,C,e),n(t,T,e),n(t,H,e),n(t,S,e),n(t,v,e),n(t,X,e),n(t,_,e),n(t,g,e),n(t,$,e),n(t,E,e),n(t,b,e),I=!0},p(t,[e]){const J={};e&1&&(J.$$scope={dirty:e,ctx:t}),f.$set(J)},i(t){I||(Y(a.$$.fragment,t),Y(f.$$.fragment,t),I=!0)},o(t){Z(a.$$.fragment,t),Z(f.$$.fragment,t),I=!1},d(t){t&&(r(i),r(w),r(h),r(k),r(u),r(P),r(c),r(y),r(d),r(M),r(q),r(x),r(j),r(C),r(T),r(H),r(S),r(v),r(X),r(_),r(g),r($),r(E),r(b)),tt(a,t),tt(f,t)}}}class ut extends rt{constructor(i){super(),lt(this,i,null,ot,et,{})}}export{ut as component};
