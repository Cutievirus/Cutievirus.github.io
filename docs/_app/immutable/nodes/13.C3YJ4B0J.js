import{s as ki,n as Ai}from"../chunks/scheduler.BjkBv5nx.js";import{S as yi,i as Ti,t as l,c as xt,k as p,a as n,b as _t,l as f,o as _e,g as t,n as r,d as e,m as dt,p as nt,f as ot,u as zi,e as Ct,s as G,h as ht,q as d,v as Di}from"../chunks/index.BT_eMuJg.js";import{A as Pe}from"../chunks/Anchor.DPTg1Ks6.js";import{C as Ot}from"../chunks/Code.UvG0J7Qo.js";import{L as qi}from"../chunks/Link.DpGiBmhP.js";import{P as Li}from"../chunks/PageTitle.CTdwTmNL.js";import{V as Il}from"../chunks/Version.52FMOf3v.js";function bi(m){let a,s=`
    RPG Maker MZ adds a new UI for plugin commands. MV3D-style plugin commands can still be used using the &quot;Legacy Command&quot; plugin command.
    With a few exceptions, the commands are largely the same as in MV3D. The main difference is that the <code>mv3d</code> prefix is omitted.
    <br/>Most of the information on this page assumes you are using the legacy command format.
`;return{c(){a=p("p"),a.innerHTML=s},l(u){a=f(u,"P",{"data-svelte-h":!0}),r(a)!=="svelte-vk5lji"&&(a.innerHTML=s)},m(u,_){e(u,a,_)},d(u){u&&t(a)}}}function Hi(m){let a;return{c(){a=l("The target string should be provided as the first word in the command.")},l(s){a=n(s,"The target string should be provided as the first word in the command.")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ji(m){let a;return{c(){a=l('The target string should be placed directly after the "mv3d" prefix as the second word in the command.')},l(s){a=n(s,'The target string should be placed directly after the "mv3d" prefix as the second word in the command.')},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ci(m){let a,s;return{c(){a=l(m[1]),s=l("@target rest of the command")},l(u){a=n(u,m[1]),s=n(u,"@target rest of the command")},m(u,_){e(u,a,_),e(u,s,_)},p(u,_){_&2&&G(a,u[1])},d(u){u&&(t(a),t(s))}}}function Ni(m){let a,s;return{c(){a=l(m[1]),s=l("camera yaw +45")},l(u){a=n(u,m[1]),s=n(u,"camera yaw +45")},m(u,_){e(u,a,_),e(u,s,_)},p(u,_){_&2&&G(a,u[1])},d(u){u&&(t(a),t(s))}}}function Ei(m){let a;return{c(){a=l("Camera Commands")},l(s){a=n(s,"Camera Commands")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ii(m){let a,s,u="camera",_,o,$="n",q,C,P="t",H,y,j,c="camera",T,W,k="n",N,F,Z="t",Y,O,V,mt="camera",tt,J,R="n",w,U,bt="t",X,$t,st,at="camera",A,h,it="n",rt,lt,Dt="t",ft,pt,D,g="camera",ut,Mt,E="n",K,Pt,z="t",et,Nt,vt,pe="camera",Ft,St,Ut="n",Et,At,Vt="t",Ht,qt,jt,Zt="camera",Tt,yt,Bt="x",Rt,kt,Yt="y",ct,wt,Qt="t";return{c(){a=l(m[1]),s=p("span"),s.textContent=u,_=l(" pitch "),o=p("samp"),o.textContent=$,q=l(" "),C=p("samp"),C.textContent=P,H=l(`\r
`),y=l(m[1]),j=p("span"),j.textContent=c,T=l(" yaw "),W=p("samp"),W.textContent=k,N=l(" "),F=p("samp"),F.textContent=Z,Y=l(`\r
`),O=l(m[1]),V=p("span"),V.textContent=mt,tt=l(" roll "),J=p("samp"),J.textContent=R,w=l(" "),U=p("samp"),U.textContent=bt,X=l(`\r
`),$t=l(m[1]),st=p("span"),st.textContent=at,A=l(" dist "),h=p("samp"),h.textContent=it,rt=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(`\r
`),pt=l(m[1]),D=p("span"),D.textContent=g,ut=l(" height "),Mt=p("samp"),Mt.textContent=E,K=l(" "),Pt=p("samp"),Pt.textContent=z,et=l(`\r
`),Nt=l(m[1]),vt=p("span"),vt.textContent=pe,Ft=l(" zoom "),St=p("samp"),St.textContent=Ut,Et=l(" "),At=p("samp"),At.textContent=Vt,Ht=l(`\r
`),qt=l(m[1]),jt=p("span"),jt.textContent=Zt,Tt=l(" pan "),yt=p("samp"),yt.textContent=Bt,Rt=l(" "),kt=p("samp"),kt.textContent=Yt,ct=l(" "),wt=p("samp"),wt.textContent=Qt,this.h()},l(M){a=n(M,m[1]),s=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-133tnn0"&&(s.textContent=u),_=n(M," pitch "),o=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(o)!=="svelte-11z14xk"&&(o.textContent=$),q=n(M," "),C=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(C)!=="svelte-n2z30q"&&(C.textContent=P),H=n(M,`\r
`),y=n(M,m[1]),j=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(j)!=="svelte-133tnn0"&&(j.textContent=c),T=n(M," yaw "),W=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(W)!=="svelte-11z14xk"&&(W.textContent=k),N=n(M," "),F=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(F)!=="svelte-n2z30q"&&(F.textContent=Z),Y=n(M,`\r
`),O=n(M,m[1]),V=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(V)!=="svelte-133tnn0"&&(V.textContent=mt),tt=n(M," roll "),J=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(J)!=="svelte-11z14xk"&&(J.textContent=R),w=n(M," "),U=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(U)!=="svelte-n2z30q"&&(U.textContent=bt),X=n(M,`\r
`),$t=n(M,m[1]),st=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(st)!=="svelte-133tnn0"&&(st.textContent=at),A=n(M," dist "),h=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(h)!=="svelte-11z14xk"&&(h.textContent=it),rt=n(M," "),lt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(lt)!=="svelte-n2z30q"&&(lt.textContent=Dt),ft=n(M,`\r
`),pt=n(M,m[1]),D=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(D)!=="svelte-133tnn0"&&(D.textContent=g),ut=n(M," height "),Mt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(Mt)!=="svelte-11z14xk"&&(Mt.textContent=E),K=n(M," "),Pt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(Pt)!=="svelte-n2z30q"&&(Pt.textContent=z),et=n(M,`\r
`),Nt=n(M,m[1]),vt=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(vt)!=="svelte-133tnn0"&&(vt.textContent=pe),Ft=n(M," zoom "),St=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(St)!=="svelte-11z14xk"&&(St.textContent=Ut),Et=n(M," "),At=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(At)!=="svelte-n2z30q"&&(At.textContent=Vt),Ht=n(M,`\r
`),qt=n(M,m[1]),jt=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),r(jt)!=="svelte-133tnn0"&&(jt.textContent=Zt),Tt=n(M," pan "),yt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(yt)!=="svelte-p3ccxq"&&(yt.textContent=Bt),Rt=n(M," "),kt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(kt)!=="svelte-eyvwfd"&&(kt.textContent=Yt),ct=n(M," "),wt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),r(wt)!=="svelte-n2z30q"&&(wt.textContent=Qt),this.h()},h(){d(s,"title","optional word"),d(o,"title","number"),d(C,"title","time"),d(j,"title","optional word"),d(W,"title","number"),d(F,"title","time"),d(V,"title","optional word"),d(J,"title","number"),d(U,"title","time"),d(st,"title","optional word"),d(h,"title","number"),d(lt,"title","time"),d(D,"title","optional word"),d(Mt,"title","number"),d(Pt,"title","time"),d(vt,"title","optional word"),d(St,"title","number"),d(At,"title","time"),d(jt,"title","optional word"),d(yt,"title","number"),d(kt,"title","number"),d(wt,"title","time")},m(M,B){e(M,a,B),e(M,s,B),e(M,_,B),e(M,o,B),e(M,q,B),e(M,C,B),e(M,H,B),e(M,y,B),e(M,j,B),e(M,T,B),e(M,W,B),e(M,N,B),e(M,F,B),e(M,Y,B),e(M,O,B),e(M,V,B),e(M,tt,B),e(M,J,B),e(M,w,B),e(M,U,B),e(M,X,B),e(M,$t,B),e(M,st,B),e(M,A,B),e(M,h,B),e(M,rt,B),e(M,lt,B),e(M,ft,B),e(M,pt,B),e(M,D,B),e(M,ut,B),e(M,Mt,B),e(M,K,B),e(M,Pt,B),e(M,et,B),e(M,Nt,B),e(M,vt,B),e(M,Ft,B),e(M,St,B),e(M,Et,B),e(M,At,B),e(M,Ht,B),e(M,qt,B),e(M,jt,B),e(M,Tt,B),e(M,yt,B),e(M,Rt,B),e(M,kt,B),e(M,ct,B),e(M,wt,B)},p(M,B){B&2&&G(a,M[1]),B&2&&G(y,M[1]),B&2&&G(O,M[1]),B&2&&G($t,M[1]),B&2&&G(pt,M[1]),B&2&&G(Nt,M[1]),B&2&&G(qt,M[1])},d(M){M&&(t(a),t(s),t(_),t(o),t(q),t(C),t(H),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(V),t(tt),t(J),t(w),t(U),t(X),t($t),t(st),t(A),t(h),t(rt),t(lt),t(ft),t(pt),t(D),t(ut),t(Mt),t(K),t(Pt),t(et),t(Nt),t(vt),t(Ft),t(St),t(Et),t(At),t(Ht),t(qt),t(jt),t(Tt),t(yt),t(Rt),t(kt),t(ct),t(wt))}}}function Ri(m){let a,s,u,_="@t",o,$,q="t";return{c(){a=l(m[1]),s=l("camera target "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q,this.h()},l(C){a=n(C,m[1]),s=n(C,"camera target "),u=f(C,"SAMP",{title:!0,"data-svelte-h":!0}),r(u)!=="svelte-vygyen"&&(u.textContent=_),o=n(C," "),$=f(C,"SAMP",{title:!0,"data-svelte-h":!0}),r($)!=="svelte-n2z30q"&&($.textContent=q),this.h()},h(){d(u,"title","target string"),d($,"title","time")},m(C,P){e(C,a,P),e(C,s,P),e(C,u,P),e(C,o,P),e(C,$,P)},p(C,P){P&2&&G(a,C[1])},d(C){C&&(t(a),t(s),t(u),t(o),t($))}}}function Wi(m){let a,s,u,_="@t",o,$,q="t",C,P,H,y,j="@t",c,T,W="t",k,N,F,Z,Y="@t",O,V,mt="t",tt,J,R;return{c(){a=l(m[1]),s=l("camera track "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q,C=l(`\r
`),P=l(m[1]),H=l("camera track pitch "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,k=l(`\r
`),N=l(m[1]),F=l("camera track yaw "),Z=p("samp"),Z.textContent=Y,O=l(" "),V=p("samp"),V.textContent=mt,tt=l(`\r
`),J=l(m[1]),R=l("camera track off"),this.h()},l(w){a=n(w,m[1]),s=n(w,"camera track "),u=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),r(u)!=="svelte-vygyen"&&(u.textContent=_),o=n(w," "),$=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),r($)!=="svelte-n2z30q"&&($.textContent=q),C=n(w,`\r
`),P=n(w,m[1]),H=n(w,"camera track pitch "),y=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),r(y)!=="svelte-vygyen"&&(y.textContent=j),c=n(w," "),T=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),r(T)!=="svelte-n2z30q"&&(T.textContent=W),k=n(w,`\r
`),N=n(w,m[1]),F=n(w,"camera track yaw "),Z=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),r(Z)!=="svelte-vygyen"&&(Z.textContent=Y),O=n(w," "),V=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),r(V)!=="svelte-n2z30q"&&(V.textContent=mt),tt=n(w,`\r
`),J=n(w,m[1]),R=n(w,"camera track off"),this.h()},h(){d(u,"title","target string"),d($,"title","time"),d(y,"title","target string"),d(T,"title","time"),d(Z,"title","target string"),d(V,"title","time")},m(w,U){e(w,a,U),e(w,s,U),e(w,u,U),e(w,o,U),e(w,$,U),e(w,C,U),e(w,P,U),e(w,H,U),e(w,y,U),e(w,c,U),e(w,T,U),e(w,k,U),e(w,N,U),e(w,F,U),e(w,Z,U),e(w,O,U),e(w,V,U),e(w,tt,U),e(w,J,U),e(w,R,U)},p(w,U){U&2&&G(a,w[1]),U&2&&G(P,w[1]),U&2&&G(N,w[1]),U&2&&G(J,w[1])},d(w){w&&(t(a),t(s),t(u),t(o),t($),t(C),t(P),t(H),t(y),t(c),t(T),t(k),t(N),t(F),t(Z),t(O),t(V),t(tt),t(J),t(R))}}}function Fi(m){let a,s,u,_="p/o/2d";return{c(){a=l(m[1]),s=l("camera mode "),u=p("samp"),u.textContent=_,this.h()},l(o){a=n(o,m[1]),s=n(o,"camera mode "),u=f(o,"SAMP",{title:!0,"data-svelte-h":!0}),r(u)!=="svelte-1osurfq"&&(u.textContent=_),this.h()},h(){d(u,"title","PERSPECTIVE or ORTHOGRAPHIC or 2D")},m(o,$){e(o,a,$),e(o,s,$),e(o,u,$)},p(o,$){$&2&&G(a,o[1])},d(o){o&&(t(a),t(s),t(u))}}}function Oi(m){let a;return{c(){a=l("Light Commands")},l(s){a=n(s,"Light Commands")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Mi(m){let a;return{c(){a=l("When combined with a sunlight source, the ambient light will appear to be the color in shadowed areas.")},l(s){a=n(s,"When combined with a sunlight source, the ambient light will appear to be the color in shadowed areas.")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Vi(m){let a,s,u,_="color",o,$,q="t",C,P,H,y,j="color",c,T,W="t";return{c(){a=l(m[1]),s=l("light "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q,C=l(`\r
`),P=l(m[1]),H=l("ambient "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,this.h()},l(k){a=n(k,m[1]),s=n(k,"light "),u=f(k,"SAMP",{"data-svelte-h":!0}),r(u)!=="svelte-168vm1j"&&(u.textContent=_),o=n(k," "),$=f(k,"SAMP",{title:!0,"data-svelte-h":!0}),r($)!=="svelte-n2z30q"&&($.textContent=q),C=n(k,`\r
`),P=n(k,m[1]),H=n(k,"ambient "),y=f(k,"SAMP",{"data-svelte-h":!0}),r(y)!=="svelte-168vm1j"&&(y.textContent=j),c=n(k," "),T=f(k,"SAMP",{title:!0,"data-svelte-h":!0}),r(T)!=="svelte-n2z30q"&&(T.textContent=W),this.h()},h(){d($,"title","time"),d(T,"title","time")},m(k,N){e(k,a,N),e(k,s,N),e(k,u,N),e(k,o,N),e(k,$,N),e(k,C,N),e(k,P,N),e(k,H,N),e(k,y,N),e(k,c,N),e(k,T,N)},p(k,N){N&2&&G(a,k[1]),N&2&&G(P,k[1])},d(k){k&&(t(a),t(s),t(u),t(o),t($),t(C),t(P),t(H),t(y),t(c),t(T))}}}function Yi(m){let a,s,u="@t",_,o,$="color",q,C,P="t",H,y,j,c="@t",T,W,k="n",N,F,Z="t",Y,O,V,mt="@t",tt,J,R="n",w,U,bt="t",X,$t,st,at="@t",A,h,it="color",rt,lt,Dt="intensity",ft,pt,D="dist",g,ut,Mt="t";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" lamp color "),o=p("samp"),o.textContent=$,q=l(" "),C=p("samp"),C.textContent=P,H=l(`\r
`),y=l(m[1]),j=p("samp"),j.textContent=c,T=l(" lamp intensity "),W=p("samp"),W.textContent=k,N=l(" "),F=p("samp"),F.textContent=Z,Y=l(`\r
`),O=l(m[1]),V=p("samp"),V.textContent=mt,tt=l(" lamp dist "),J=p("samp"),J.textContent=R,w=l(" "),U=p("samp"),U.textContent=bt,X=l(`\r
`),$t=l(m[1]),st=p("samp"),st.textContent=at,A=l(" lamp "),h=p("samp"),h.textContent=it,rt=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(" "),pt=p("samp"),pt.textContent=D,g=l(" "),ut=p("samp"),ut.textContent=Mt,this.h()},l(E){a=n(E,m[1]),s=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(E," lamp color "),o=f(E,"SAMP",{"data-svelte-h":!0}),r(o)!=="svelte-168vm1j"&&(o.textContent=$),q=n(E," "),C=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(C)!=="svelte-n2z30q"&&(C.textContent=P),H=n(E,`\r
`),y=n(E,m[1]),j=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(j)!=="svelte-vygyen"&&(j.textContent=c),T=n(E," lamp intensity "),W=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(W)!=="svelte-11z14xk"&&(W.textContent=k),N=n(E," "),F=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(F)!=="svelte-n2z30q"&&(F.textContent=Z),Y=n(E,`\r
`),O=n(E,m[1]),V=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(V)!=="svelte-vygyen"&&(V.textContent=mt),tt=n(E," lamp dist "),J=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(J)!=="svelte-11z14xk"&&(J.textContent=R),w=n(E," "),U=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(U)!=="svelte-n2z30q"&&(U.textContent=bt),X=n(E,`\r
`),$t=n(E,m[1]),st=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(st)!=="svelte-vygyen"&&(st.textContent=at),A=n(E," lamp "),h=f(E,"SAMP",{"data-svelte-h":!0}),r(h)!=="svelte-168vm1j"&&(h.textContent=it),rt=n(E," "),lt=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(lt)!=="svelte-103h9bj"&&(lt.textContent=Dt),ft=n(E," "),pt=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(pt)!=="svelte-15cdrwg"&&(pt.textContent=D),g=n(E," "),ut=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),r(ut)!=="svelte-n2z30q"&&(ut.textContent=Mt),this.h()},h(){d(s,"title","target string"),d(C,"title","time"),d(j,"title","target string"),d(W,"title","number"),d(F,"title","time"),d(V,"title","target string"),d(J,"title","number"),d(U,"title","time"),d(st,"title","target string"),d(lt,"title","number"),d(pt,"title","number"),d(ut,"title","time")},m(E,K){e(E,a,K),e(E,s,K),e(E,_,K),e(E,o,K),e(E,q,K),e(E,C,K),e(E,H,K),e(E,y,K),e(E,j,K),e(E,T,K),e(E,W,K),e(E,N,K),e(E,F,K),e(E,Y,K),e(E,O,K),e(E,V,K),e(E,tt,K),e(E,J,K),e(E,w,K),e(E,U,K),e(E,X,K),e(E,$t,K),e(E,st,K),e(E,A,K),e(E,h,K),e(E,rt,K),e(E,lt,K),e(E,ft,K),e(E,pt,K),e(E,g,K),e(E,ut,K)},p(E,K){K&2&&G(a,E[1]),K&2&&G(y,E[1]),K&2&&G(O,E[1]),K&2&&G($t,E[1])},d(E){E&&(t(a),t(s),t(_),t(o),t(q),t(C),t(H),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(V),t(tt),t(J),t(w),t(U),t(X),t($t),t(st),t(A),t(h),t(rt),t(lt),t(ft),t(pt),t(g),t(ut))}}}function Ui(m){let a,s,u="@t",_,o,$="color",q,C,P="t",H,y,j,c="@t",T,W,k="n",N,F,Z="t",Y,O,V,mt="@t",tt,J,R="n",w,U,bt="t",X,$t,st,at="@t",A,h,it="n",rt,lt,Dt="t",ft,pt,D,g="@t",ut,Mt,E="n",K,Pt,z="t",et,Nt,vt,pe="@t",Ft,St,Ut="n",Et,At,Vt="t",Ht,qt,jt,Zt="@t",Tt,yt,Bt="color",Rt,kt,Yt="intensity",ct,wt,Qt="dist",M,B,Xt="angle",Gt,Jt,It="t";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" flashlight color "),o=p("samp"),o.textContent=$,q=l(" "),C=p("samp"),C.textContent=P,H=l(`\r
`),y=l(m[1]),j=p("samp"),j.textContent=c,T=l(" flashlight intensity "),W=p("samp"),W.textContent=k,N=l(" "),F=p("samp"),F.textContent=Z,Y=l(`\r
`),O=l(m[1]),V=p("samp"),V.textContent=mt,tt=l(" flashlight dist "),J=p("samp"),J.textContent=R,w=l(" "),U=p("samp"),U.textContent=bt,X=l(`\r
`),$t=l(m[1]),st=p("samp"),st.textContent=at,A=l(" flashlight angle "),h=p("samp"),h.textContent=it,rt=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(`\r
`),pt=l(m[1]),D=p("samp"),D.textContent=g,ut=l(" flashlight pitch "),Mt=p("samp"),Mt.textContent=E,K=l(" "),Pt=p("samp"),Pt.textContent=z,et=l(`\r
`),Nt=l(m[1]),vt=p("samp"),vt.textContent=pe,Ft=l(" flashlight yaw "),St=p("samp"),St.textContent=Ut,Et=l(" "),At=p("samp"),At.textContent=Vt,Ht=l(`\r
`),qt=l(m[1]),jt=p("samp"),jt.textContent=Zt,Tt=l(" flashlight "),yt=p("samp"),yt.textContent=Bt,Rt=l(" "),kt=p("samp"),kt.textContent=Yt,ct=l(" "),wt=p("samp"),wt.textContent=Qt,M=l(" "),B=p("samp"),B.textContent=Xt,Gt=l(" "),Jt=p("samp"),Jt.textContent=It,this.h()},l(S){a=n(S,m[1]),s=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(S," flashlight color "),o=f(S,"SAMP",{"data-svelte-h":!0}),r(o)!=="svelte-168vm1j"&&(o.textContent=$),q=n(S," "),C=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(C)!=="svelte-n2z30q"&&(C.textContent=P),H=n(S,`\r
`),y=n(S,m[1]),j=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(j)!=="svelte-vygyen"&&(j.textContent=c),T=n(S," flashlight intensity "),W=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(W)!=="svelte-11z14xk"&&(W.textContent=k),N=n(S," "),F=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(F)!=="svelte-n2z30q"&&(F.textContent=Z),Y=n(S,`\r
`),O=n(S,m[1]),V=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(V)!=="svelte-vygyen"&&(V.textContent=mt),tt=n(S," flashlight dist "),J=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(J)!=="svelte-11z14xk"&&(J.textContent=R),w=n(S," "),U=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(U)!=="svelte-n2z30q"&&(U.textContent=bt),X=n(S,`\r
`),$t=n(S,m[1]),st=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(st)!=="svelte-vygyen"&&(st.textContent=at),A=n(S," flashlight angle "),h=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(h)!=="svelte-11z14xk"&&(h.textContent=it),rt=n(S," "),lt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(lt)!=="svelte-n2z30q"&&(lt.textContent=Dt),ft=n(S,`\r
`),pt=n(S,m[1]),D=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(D)!=="svelte-vygyen"&&(D.textContent=g),ut=n(S," flashlight pitch "),Mt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(Mt)!=="svelte-11z14xk"&&(Mt.textContent=E),K=n(S," "),Pt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(Pt)!=="svelte-n2z30q"&&(Pt.textContent=z),et=n(S,`\r
`),Nt=n(S,m[1]),vt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(vt)!=="svelte-vygyen"&&(vt.textContent=pe),Ft=n(S," flashlight yaw "),St=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(St)!=="svelte-11z14xk"&&(St.textContent=Ut),Et=n(S," "),At=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(At)!=="svelte-n2z30q"&&(At.textContent=Vt),Ht=n(S,`\r
`),qt=n(S,m[1]),jt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(jt)!=="svelte-vygyen"&&(jt.textContent=Zt),Tt=n(S," flashlight "),yt=f(S,"SAMP",{"data-svelte-h":!0}),r(yt)!=="svelte-168vm1j"&&(yt.textContent=Bt),Rt=n(S," "),kt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(kt)!=="svelte-103h9bj"&&(kt.textContent=Yt),ct=n(S," "),wt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(wt)!=="svelte-15cdrwg"&&(wt.textContent=Qt),M=n(S," "),B=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(B)!=="svelte-jlbei9"&&(B.textContent=Xt),Gt=n(S," "),Jt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),r(Jt)!=="svelte-n2z30q"&&(Jt.textContent=It),this.h()},h(){d(s,"title","target string"),d(C,"title","time"),d(j,"title","target string"),d(W,"title","number"),d(F,"title","time"),d(V,"title","target string"),d(J,"title","number"),d(U,"title","time"),d(st,"title","target string"),d(h,"title","number"),d(lt,"title","time"),d(D,"title","target string"),d(Mt,"title","number"),d(Pt,"title","time"),d(vt,"title","target string"),d(St,"title","number"),d(At,"title","time"),d(jt,"title","target string"),d(kt,"title","number"),d(wt,"title","number"),d(B,"title","number"),d(Jt,"title","time")},m(S,Q){e(S,a,Q),e(S,s,Q),e(S,_,Q),e(S,o,Q),e(S,q,Q),e(S,C,Q),e(S,H,Q),e(S,y,Q),e(S,j,Q),e(S,T,Q),e(S,W,Q),e(S,N,Q),e(S,F,Q),e(S,Y,Q),e(S,O,Q),e(S,V,Q),e(S,tt,Q),e(S,J,Q),e(S,w,Q),e(S,U,Q),e(S,X,Q),e(S,$t,Q),e(S,st,Q),e(S,A,Q),e(S,h,Q),e(S,rt,Q),e(S,lt,Q),e(S,ft,Q),e(S,pt,Q),e(S,D,Q),e(S,ut,Q),e(S,Mt,Q),e(S,K,Q),e(S,Pt,Q),e(S,et,Q),e(S,Nt,Q),e(S,vt,Q),e(S,Ft,Q),e(S,St,Q),e(S,Et,Q),e(S,At,Q),e(S,Ht,Q),e(S,qt,Q),e(S,jt,Q),e(S,Tt,Q),e(S,yt,Q),e(S,Rt,Q),e(S,kt,Q),e(S,ct,Q),e(S,wt,Q),e(S,M,Q),e(S,B,Q),e(S,Gt,Q),e(S,Jt,Q)},p(S,Q){Q&2&&G(a,S[1]),Q&2&&G(y,S[1]),Q&2&&G(O,S[1]),Q&2&&G($t,S[1]),Q&2&&G(pt,S[1]),Q&2&&G(Nt,S[1]),Q&2&&G(qt,S[1])},d(S){S&&(t(a),t(s),t(_),t(o),t(q),t(C),t(H),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(V),t(tt),t(J),t(w),t(U),t(X),t($t),t(st),t(A),t(h),t(rt),t(lt),t(ft),t(pt),t(D),t(ut),t(Mt),t(K),t(Pt),t(et),t(Nt),t(vt),t(Ft),t(St),t(Et),t(At),t(Ht),t(qt),t(jt),t(Tt),t(yt),t(Rt),t(kt),t(ct),t(wt),t(M),t(B),t(Gt),t(Jt))}}}function Zi(m){let a,s,u,_="color",o,$,q="t",C,P,H,y,j="n",c,T,W="t",k,N,F,Z,Y="n",O,V,mt="t",tt,J,R,w,U="yaw",bt,X,$t="pitch",st,at,A="t";return{c(){a=l(m[1]),s=l("sun color "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q,C=l(`\r
`),P=l(m[1]),H=l("sun yaw "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,k=l(`\r
`),N=l(m[1]),F=l("sun pitch "),Z=p("samp"),Z.textContent=Y,O=l(" "),V=p("samp"),V.textContent=mt,tt=l(`\r
`),J=l(m[1]),R=l("sun angle "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=$t,st=l(" "),at=p("samp"),at.textContent=A,this.h()},l(h){a=n(h,m[1]),s=n(h,"sun color "),u=f(h,"SAMP",{"data-svelte-h":!0}),r(u)!=="svelte-168vm1j"&&(u.textContent=_),o=n(h," "),$=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r($)!=="svelte-n2z30q"&&($.textContent=q),C=n(h,`\r
`),P=n(h,m[1]),H=n(h,"sun yaw "),y=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(y)!=="svelte-11z14xk"&&(y.textContent=j),c=n(h," "),T=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(T)!=="svelte-n2z30q"&&(T.textContent=W),k=n(h,`\r
`),N=n(h,m[1]),F=n(h,"sun pitch "),Z=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(Z)!=="svelte-11z14xk"&&(Z.textContent=Y),O=n(h," "),V=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(V)!=="svelte-n2z30q"&&(V.textContent=mt),tt=n(h,`\r
`),J=n(h,m[1]),R=n(h,"sun angle "),w=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(w)!=="svelte-z540cx"&&(w.textContent=U),bt=n(h," "),X=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(X)!=="svelte-1o30zjk"&&(X.textContent=$t),st=n(h," "),at=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),r(at)!=="svelte-n2z30q"&&(at.textContent=A),this.h()},h(){d($,"title","time"),d(y,"title","number"),d(T,"title","time"),d(Z,"title","number"),d(V,"title","time"),d(w,"title","number"),d(X,"title","number"),d(at,"title","time")},m(h,it){e(h,a,it),e(h,s,it),e(h,u,it),e(h,o,it),e(h,$,it),e(h,C,it),e(h,P,it),e(h,H,it),e(h,y,it),e(h,c,it),e(h,T,it),e(h,k,it),e(h,N,it),e(h,F,it),e(h,Z,it),e(h,O,it),e(h,V,it),e(h,tt,it),e(h,J,it),e(h,R,it),e(h,w,it),e(h,bt,it),e(h,X,it),e(h,st,it),e(h,at,it)},p(h,it){it&2&&G(a,h[1]),it&2&&G(P,h[1]),it&2&&G(N,h[1]),it&2&&G(J,h[1])},d(h){h&&(t(a),t(s),t(u),t(o),t($),t(C),t(P),t(H),t(y),t(c),t(T),t(k),t(N),t(F),t(Z),t(O),t(V),t(tt),t(J),t(R),t(w),t(bt),t(X),t(st),t(at))}}}function Bi(m){let a,s,u=`\r
        The Sun commands set up a directional light to act as a sunlight source and changes properties of that light. The sun will create dynamic shadows.\r
    `,_,o,$,q;return o=new Ot({props:{$$slots:{default:[Zi]},$$scope:{ctx:m}}}),{c(){a=l(`\r
    `),s=p("p"),s.textContent=u,_=l(`\r
    \r
`),xt(o.$$.fragment),$=l(`\r
    \r
`)},l(C){a=n(C,`\r
    `),s=f(C,"P",{"data-svelte-h":!0}),r(s)!=="svelte-ncm4ei"&&(s.textContent=u),_=n(C,`\r
    \r
`),_t(o.$$.fragment,C),$=n(C,`\r
    \r
`)},m(C,P){e(C,a,P),e(C,s,P),e(C,_,P),dt(o,C,P),e(C,$,P),q=!0},p(C,P){const H={};P&10&&(H.$$scope={dirty:P,ctx:C}),o.$set(H)},i(C){q||(Ct(o.$$.fragment,C),q=!0)},o(C){ot(o.$$.fragment,C),q=!1},d(C){C&&(t(a),t(s),t(_),t($)),ht(o,C)}}}function Gi(m){let a;return{c(){a=l("Animation Command")},l(s){a=n(s,"Animation Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ji(m){let a;return{c(){a=l("Additional parameters can also be provided at the end of the command.")},l(s){a=n(s,"Additional parameters can also be provided at the end of the command.")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ki(m){let a;return{c(){a=l(`Due to the new animation system in RPG Maker MZ, the animation command is slightly different in MZ3D.\r
        In addition to the depth and scale parameters supported by MV3D, MZ3D also supports the rot and height parameters.`)},l(s){a=n(s,`Due to the new animation system in RPG Maker MZ, the animation command is slightly different in MZ3D.\r
        In addition to the depth and scale parameters supported by MV3D, MZ3D also supports the rot and height parameters.`)},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Pi(m){let a,s="Rot is the rotation of the animation in degrees.",u,_,o="Height is a height offset for the animation's position.";return{c(){a=p("li"),a.textContent=s,u=l(`\r
    `),_=p("li"),_.textContent=o},l($){a=f($,"LI",{"data-svelte-h":!0}),r(a)!=="svelte-1qbv15q"&&(a.textContent=s),u=n($,`\r
    `),_=f($,"LI",{"data-svelte-h":!0}),r(_)!=="svelte-19ht2v"&&(_.textContent=o)},m($,q){e($,a,q),e($,u,q),e($,_,q)},d($){$&&(t(a),t(u),t(_))}}}function Qi(m){let a,s;return a=new Ot({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),{c(){xt(a.$$.fragment)},l(u){_t(a.$$.fragment,u)},m(u,_){dt(a,u,_),s=!0},p(u,_){const o={};_&10&&(o.$$scope={dirty:_,ctx:u}),a.$set(o)},i(u){s||(Ct(a.$$.fragment,u),s=!0)},o(u){ot(a.$$.fragment,u),s=!1},d(u){ht(a,u)}}}function Xi(m){let a,s;return a=new Ot({props:{$$slots:{default:[ts]},$$scope:{ctx:m}}}),{c(){xt(a.$$.fragment)},l(u){_t(a.$$.fragment,u)},m(u,_){dt(a,u,_),s=!0},p(u,_){const o={};_&10&&(o.$$scope={dirty:_,ctx:u}),a.$set(o)},i(u){s||(Ct(a.$$.fragment,u),s=!0)},o(u){ot(a.$$.fragment,u),s=!1},d(u){ht(a,u)}}}function gi(m){let a,s,u="@t",_,o,$="id",q,C,P,H="@t",y,j,c="id",T,W,k="true/false",N,F,Z="n";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" animation "),o=p("samp"),o.textContent=$,q=l(`\r
`),C=l(m[1]),P=p("samp"),P.textContent=H,y=l(" animation "),j=p("samp"),j.textContent=c,T=l(" depth "),W=p("samp"),W.textContent=k,N=l(" scale "),F=p("samp"),F.textContent=Z,this.h()},l(Y){a=n(Y,m[1]),s=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(Y," animation "),o=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),r(o)!=="svelte-19gu8vr"&&(o.textContent=$),q=n(Y,`\r
`),C=n(Y,m[1]),P=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),r(P)!=="svelte-vygyen"&&(P.textContent=H),y=n(Y," animation "),j=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),r(j)!=="svelte-19gu8vr"&&(j.textContent=c),T=n(Y," depth "),W=f(Y,"SAMP",{"data-svelte-h":!0}),r(W)!=="svelte-17yyxv0"&&(W.textContent=k),N=n(Y," scale "),F=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),r(F)!=="svelte-11z14xk"&&(F.textContent=Z),this.h()},h(){d(s,"title","target string"),d(o,"title","number"),d(P,"title","target string"),d(j,"title","number"),d(F,"title","number")},m(Y,O){e(Y,a,O),e(Y,s,O),e(Y,_,O),e(Y,o,O),e(Y,q,O),e(Y,C,O),e(Y,P,O),e(Y,y,O),e(Y,j,O),e(Y,T,O),e(Y,W,O),e(Y,N,O),e(Y,F,O)},p(Y,O){O&2&&G(a,Y[1]),O&2&&G(C,Y[1])},d(Y){Y&&(t(a),t(s),t(_),t(o),t(q),t(C),t(P),t(y),t(j),t(T),t(W),t(N),t(F))}}}function ts(m){let a,s,u="@t",_,o,$="id",q,C,P,H="@t",y,j,c="id",T,W,k="true/false",N,F,Z="n",Y,O,V="n",mt,tt,J="n";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" animation "),o=p("samp"),o.textContent=$,q=l(`\r
`),C=l(m[1]),P=p("samp"),P.textContent=H,y=l(" animation "),j=p("samp"),j.textContent=c,T=l(" depth "),W=p("samp"),W.textContent=k,N=l(" scale "),F=p("samp"),F.textContent=Z,Y=l(" rot "),O=p("samp"),O.textContent=V,mt=l(" height "),tt=p("samp"),tt.textContent=J,this.h()},l(R){a=n(R,m[1]),s=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(R," animation "),o=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(o)!=="svelte-19gu8vr"&&(o.textContent=$),q=n(R,`\r
`),C=n(R,m[1]),P=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(P)!=="svelte-vygyen"&&(P.textContent=H),y=n(R," animation "),j=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(j)!=="svelte-19gu8vr"&&(j.textContent=c),T=n(R," depth "),W=f(R,"SAMP",{"data-svelte-h":!0}),r(W)!=="svelte-17yyxv0"&&(W.textContent=k),N=n(R," scale "),F=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(F)!=="svelte-11z14xk"&&(F.textContent=Z),Y=n(R," rot "),O=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(O)!=="svelte-lsecsk"&&(O.textContent=V),mt=n(R," height "),tt=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),r(tt)!=="svelte-11z14xk"&&(tt.textContent=J),this.h()},h(){d(s,"title","target string"),d(o,"title","number"),d(P,"title","target string"),d(j,"title","number"),d(F,"title","number"),d(O,"title","number (degrees)"),d(tt,"title","number")},m(R,w){e(R,a,w),e(R,s,w),e(R,_,w),e(R,o,w),e(R,q,w),e(R,C,w),e(R,P,w),e(R,y,w),e(R,j,w),e(R,T,w),e(R,W,w),e(R,N,w),e(R,F,w),e(R,Y,w),e(R,O,w),e(R,mt,w),e(R,tt,w)},p(R,w){w&2&&G(a,R[1]),w&2&&G(C,R[1])},d(R){R&&(t(a),t(s),t(_),t(o),t(q),t(C),t(P),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(mt),t(tt))}}}function es(m){let a;return{c(){a=l("Fog Command")},l(s){a=n(s,"Fog Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Si(m){let a,s,u="Set Command",_;return{c(){a=l("To control the alpha fog, see the "),s=p("a"),s.textContent=u,_=l("."),this.h()},l(o){a=n(o,"To control the alpha fog, see the "),s=f(o,"A",{href:!0,"data-svelte-h":!0}),r(s)!=="svelte-e8u5ae"&&(s.textContent=u),_=n(o,"."),this.h()},h(){d(s,"href","#set")},m(o,$){e(o,a,$),e(o,s,$),e(o,_,$)},d(o){o&&(t(a),t(s),t(_))}}}function ls(m){let a,s,u,_="color",o,$,q="t",C,P,H,y,j="n",c,T,W="t",k,N,F,Z,Y="n",O,V,mt="t",tt,J,R,w,U="near",bt,X,$t="far",st,at,A="t",h,it,rt,lt,Dt="color",ft,pt,D="near",g,ut,Mt="far",E,K,Pt="t";return{c(){a=l(m[1]),s=l("fog color "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q,C=l(`\r
`),P=l(m[1]),H=l("fog near "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,k=l(`\r
`),N=l(m[1]),F=l("fog far "),Z=p("samp"),Z.textContent=Y,O=l(" "),V=p("samp"),V.textContent=mt,tt=l(`\r
`),J=l(m[1]),R=l("fog dist "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=$t,st=l(" "),at=p("samp"),at.textContent=A,h=l(`\r
`),it=l(m[1]),rt=l("fog "),lt=p("samp"),lt.textContent=Dt,ft=l(" "),pt=p("samp"),pt.textContent=D,g=l(" "),ut=p("samp"),ut.textContent=Mt,E=l(" "),K=p("samp"),K.textContent=Pt,this.h()},l(z){a=n(z,m[1]),s=n(z,"fog color "),u=f(z,"SAMP",{"data-svelte-h":!0}),r(u)!=="svelte-168vm1j"&&(u.textContent=_),o=n(z," "),$=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r($)!=="svelte-n2z30q"&&($.textContent=q),C=n(z,`\r
`),P=n(z,m[1]),H=n(z,"fog near "),y=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(y)!=="svelte-11z14xk"&&(y.textContent=j),c=n(z," "),T=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(T)!=="svelte-n2z30q"&&(T.textContent=W),k=n(z,`\r
`),N=n(z,m[1]),F=n(z,"fog far "),Z=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(Z)!=="svelte-11z14xk"&&(Z.textContent=Y),O=n(z," "),V=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(V)!=="svelte-n2z30q"&&(V.textContent=mt),tt=n(z,`\r
`),J=n(z,m[1]),R=n(z,"fog dist "),w=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(w)!=="svelte-5hdkt6"&&(w.textContent=U),bt=n(z," "),X=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(X)!=="svelte-1mgb5yz"&&(X.textContent=$t),st=n(z," "),at=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(at)!=="svelte-n2z30q"&&(at.textContent=A),h=n(z,`\r
`),it=n(z,m[1]),rt=n(z,"fog "),lt=f(z,"SAMP",{"data-svelte-h":!0}),r(lt)!=="svelte-168vm1j"&&(lt.textContent=Dt),ft=n(z," "),pt=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(pt)!=="svelte-5hdkt6"&&(pt.textContent=D),g=n(z," "),ut=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(ut)!=="svelte-1mgb5yz"&&(ut.textContent=Mt),E=n(z," "),K=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),r(K)!=="svelte-n2z30q"&&(K.textContent=Pt),this.h()},h(){d($,"title","time"),d(y,"title","number"),d(T,"title","time"),d(Z,"title","number"),d(V,"title","time"),d(w,"title","number"),d(X,"title","number"),d(at,"title","time"),d(pt,"title","number"),d(ut,"title","number"),d(K,"title","time")},m(z,et){e(z,a,et),e(z,s,et),e(z,u,et),e(z,o,et),e(z,$,et),e(z,C,et),e(z,P,et),e(z,H,et),e(z,y,et),e(z,c,et),e(z,T,et),e(z,k,et),e(z,N,et),e(z,F,et),e(z,Z,et),e(z,O,et),e(z,V,et),e(z,tt,et),e(z,J,et),e(z,R,et),e(z,w,et),e(z,bt,et),e(z,X,et),e(z,st,et),e(z,at,et),e(z,h,et),e(z,it,et),e(z,rt,et),e(z,lt,et),e(z,ft,et),e(z,pt,et),e(z,g,et),e(z,ut,et),e(z,E,et),e(z,K,et)},p(z,et){et&2&&G(a,z[1]),et&2&&G(P,z[1]),et&2&&G(N,z[1]),et&2&&G(J,z[1]),et&2&&G(it,z[1])},d(z){z&&(t(a),t(s),t(u),t(o),t($),t(C),t(P),t(H),t(y),t(c),t(T),t(k),t(N),t(F),t(Z),t(O),t(V),t(tt),t(J),t(R),t(w),t(bt),t(X),t(st),t(at),t(h),t(it),t(rt),t(lt),t(ft),t(pt),t(g),t(ut),t(E),t(K))}}}function ns(m){let a;return{c(){a=l("Resolution Scale Command")},l(s){a=n(s,"Resolution Scale Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function is(m){let a,s,u,_="n",o,$,q="t";return{c(){a=l(m[1]),s=l("resolution scale "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q,this.h()},l(C){a=n(C,m[1]),s=n(C,"resolution scale "),u=f(C,"SAMP",{title:!0,"data-svelte-h":!0}),r(u)!=="svelte-11z14xk"&&(u.textContent=_),o=n(C," "),$=f(C,"SAMP",{title:!0,"data-svelte-h":!0}),r($)!=="svelte-n2z30q"&&($.textContent=q),this.h()},h(){d(u,"title","number"),d($,"title","time")},m(C,P){e(C,a,P),e(C,s,P),e(C,u,P),e(C,o,P),e(C,$,P)},p(C,P){P&2&&G(a,C[1])},d(C){C&&(t(a),t(s),t(u),t(o),t($))}}}function ss(m){let a;return{c(){a=l("Configure Command")},l(s){a=n(s,"Configure Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function as(m){let a;return{c(){a=l("Event Configuration Functions")},l(s){a=n(s,"Event Configuration Functions")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ms(m){let a,s,u="@t",_,o,$="functions",q,C,P="t";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" configure "),o=p("samp"),o.textContent=$,q=l(" "),C=p("samp"),C.textContent=P,this.h()},l(H){a=n(H,m[1]),s=f(H,"SAMP",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(H," configure "),o=f(H,"SAMP",{title:!0,"data-svelte-h":!0}),r(o)!=="svelte-tv9uzu"&&(o.textContent=$),q=n(H," "),C=f(H,"SAMP",{title:!0,"data-svelte-h":!0}),r(C)!=="svelte-n2z30q"&&(C.textContent=P),this.h()},h(){d(s,"title","target string"),d(o,"title","list of configuration functions"),d(C,"title","time")},m(H,y){e(H,a,y),e(H,s,y),e(H,_,y),e(H,o,y),e(H,q,y),e(H,C,y)},p(H,y){y&2&&G(a,H[1])},d(H){H&&(t(a),t(s),t(_),t(o),t(q),t(C))}}}function ps(m){let a;return{c(){a=l("Skybox and Skyball Commands")},l(s){a=n(s,"Skybox and Skyball Commands")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function fs(m){let a;return{c(){a=l("Skybox Command")},l(s){a=n(s,"Skybox Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function us(m){let a,s,u,_,o,$,q,C,P="layer",H,y,j,c,T="layer",W,k,N="n",F,Z,Y="t",O,V,mt,tt,J="layer",R,w,U="img",bt,X,$t="t",st,at,A,h,it="layer",rt,lt,Dt="img",ft,pt,D="img",g,ut,Mt="img",E,K,Pt="t",z,et,Nt,vt,pe="layer",Ft,St,Ut="img",Et,At,Vt="img",Ht,qt,jt="img",Zt,Tt,yt="img",Bt,Rt,kt="img",Yt,ct,wt="img",Qt,M,B="t",Xt,Gt,Jt,It,S="layer",Q,gt,Wt="n",we,le,ie,fe,xe="layer",se,ue,Se="n",te,Kt,b,I,ae="layer",Le,ee,pl="n",He,qe,de,he,ke="layer",je,me,Rl="yaw",ce,ne,ge="pitch",be,Me,Ae="roll";return{c(){a=p("span"),s=l(m[1]),u=l("skybox clear"),_=l(`\r
`),o=p("span"),$=l(m[1]),q=l("skybox clear "),C=p("samp"),C.textContent=P,H=l(`\r
`),y=l(m[1]),j=l("skybox "),c=p("samp"),c.textContent=T,W=l(" alpha "),k=p("samp"),k.textContent=N,F=l(" "),Z=p("samp"),Z.textContent=Y,O=l(`\r
`),V=l(m[1]),mt=l("skybox "),tt=p("samp"),tt.textContent=J,R=l(" "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=$t,st=l(`\r
`),at=l(m[1]),A=l("skybox "),h=p("samp"),h.textContent=it,rt=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(" top "),pt=p("samp"),pt.textContent=D,g=l(" bottom "),ut=p("samp"),ut.textContent=Mt,E=l(" "),K=p("samp"),K.textContent=Pt,z=l(`\r
`),et=l(m[1]),Nt=l("skybox "),vt=p("samp"),vt.textContent=pe,Ft=l(" north "),St=p("samp"),St.textContent=Ut,Et=l(" south "),At=p("samp"),At.textContent=Vt,Ht=l(" east "),qt=p("samp"),qt.textContent=jt,Zt=l(" west "),Tt=p("samp"),Tt.textContent=yt,Bt=l(" top "),Rt=p("samp"),Rt.textContent=kt,Yt=l(" bottom "),ct=p("samp"),ct.textContent=wt,Qt=l(" "),M=p("samp"),M.textContent=B,Xt=l(`\r
`),Gt=l(m[1]),Jt=l("skybox "),It=p("samp"),It.textContent=S,Q=l(" autorotate yaw "),gt=p("samp"),gt.textContent=Wt,we=l(`\r
`),le=l(m[1]),ie=l("skybox "),fe=p("samp"),fe.textContent=xe,se=l(" autorotate pitch "),ue=p("samp"),ue.textContent=Se,te=l(`\r
`),Kt=l(m[1]),b=l("skybox "),I=p("samp"),I.textContent=ae,Le=l(" autorotate roll "),ee=p("samp"),ee.textContent=pl,He=l(`\r
`),qe=l(m[1]),de=l("skybox "),he=p("samp"),he.textContent=ke,je=l(" autorotate "),me=p("samp"),me.textContent=Rl,ce=l(" "),ne=p("samp"),ne.textContent=ge,be=l(" "),Me=p("samp"),Me.textContent=Ae,this.h()},l(x){a=f(x,"SPAN",{title:!0});var L=_e(a);s=n(L,m[1]),u=n(L,"skybox clear"),L.forEach(t),_=n(x,`\r
`),o=f(x,"SPAN",{title:!0});var Re=_e(o);$=n(Re,m[1]),q=n(Re,"skybox clear "),C=f(Re,"SAMP",{"data-svelte-h":!0}),r(C)!=="svelte-1xi0d59"&&(C.textContent=P),Re.forEach(t),H=n(x,`\r
`),y=n(x,m[1]),j=n(x,"skybox "),c=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(c)!=="svelte-tpduj3"&&(c.textContent=T),W=n(x," alpha "),k=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(k)!=="svelte-11z14xk"&&(k.textContent=N),F=n(x," "),Z=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(Z)!=="svelte-n2z30q"&&(Z.textContent=Y),O=n(x,`\r
`),V=n(x,m[1]),mt=n(x,"skybox "),tt=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(tt)!=="svelte-tpduj3"&&(tt.textContent=J),R=n(x," "),w=f(x,"SAMP",{"data-svelte-h":!0}),r(w)!=="svelte-1ictklr"&&(w.textContent=U),bt=n(x," "),X=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(X)!=="svelte-n2z30q"&&(X.textContent=$t),st=n(x,`\r
`),at=n(x,m[1]),A=n(x,"skybox "),h=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(h)!=="svelte-tpduj3"&&(h.textContent=it),rt=n(x," "),lt=f(x,"SAMP",{"data-svelte-h":!0}),r(lt)!=="svelte-1ictklr"&&(lt.textContent=Dt),ft=n(x," top "),pt=f(x,"SAMP",{"data-svelte-h":!0}),r(pt)!=="svelte-1ictklr"&&(pt.textContent=D),g=n(x," bottom "),ut=f(x,"SAMP",{"data-svelte-h":!0}),r(ut)!=="svelte-1ictklr"&&(ut.textContent=Mt),E=n(x," "),K=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(K)!=="svelte-n2z30q"&&(K.textContent=Pt),z=n(x,`\r
`),et=n(x,m[1]),Nt=n(x,"skybox "),vt=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(vt)!=="svelte-tpduj3"&&(vt.textContent=pe),Ft=n(x," north "),St=f(x,"SAMP",{"data-svelte-h":!0}),r(St)!=="svelte-1ictklr"&&(St.textContent=Ut),Et=n(x," south "),At=f(x,"SAMP",{"data-svelte-h":!0}),r(At)!=="svelte-1ictklr"&&(At.textContent=Vt),Ht=n(x," east "),qt=f(x,"SAMP",{"data-svelte-h":!0}),r(qt)!=="svelte-1ictklr"&&(qt.textContent=jt),Zt=n(x," west "),Tt=f(x,"SAMP",{"data-svelte-h":!0}),r(Tt)!=="svelte-1ictklr"&&(Tt.textContent=yt),Bt=n(x," top "),Rt=f(x,"SAMP",{"data-svelte-h":!0}),r(Rt)!=="svelte-1ictklr"&&(Rt.textContent=kt),Yt=n(x," bottom "),ct=f(x,"SAMP",{"data-svelte-h":!0}),r(ct)!=="svelte-1ictklr"&&(ct.textContent=wt),Qt=n(x," "),M=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(M)!=="svelte-n2z30q"&&(M.textContent=B),Xt=n(x,`\r
`),Gt=n(x,m[1]),Jt=n(x,"skybox "),It=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(It)!=="svelte-tpduj3"&&(It.textContent=S),Q=n(x," autorotate yaw "),gt=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(gt)!=="svelte-11z14xk"&&(gt.textContent=Wt),we=n(x,`\r
`),le=n(x,m[1]),ie=n(x,"skybox "),fe=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(fe)!=="svelte-tpduj3"&&(fe.textContent=xe),se=n(x," autorotate pitch "),ue=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(ue)!=="svelte-11z14xk"&&(ue.textContent=Se),te=n(x,`\r
`),Kt=n(x,m[1]),b=n(x,"skybox "),I=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(I)!=="svelte-tpduj3"&&(I.textContent=ae),Le=n(x," autorotate roll "),ee=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(ee)!=="svelte-11z14xk"&&(ee.textContent=pl),He=n(x,`\r
`),qe=n(x,m[1]),de=n(x,"skybox "),he=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(he)!=="svelte-tpduj3"&&(he.textContent=ke),je=n(x," autorotate "),me=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(me)!=="svelte-z540cx"&&(me.textContent=Rl),ce=n(x," "),ne=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(ne)!=="svelte-1o30zjk"&&(ne.textContent=ge),be=n(x," "),Me=f(x,"SAMP",{title:!0,"data-svelte-h":!0}),r(Me)!=="svelte-14d26p9"&&(Me.textContent=Ae),this.h()},h(){d(a,"title","clear all skyboxes"),d(o,"title","clear skybox on specified layer"),d(c,"title","optional (default 0) skybox layer"),d(k,"title","number"),d(Z,"title","time"),d(tt,"title","optional (default 0) skybox layer"),d(X,"title","time"),d(h,"title","optional (default 0) skybox layer"),d(K,"title","time"),d(vt,"title","optional (default 0) skybox layer"),d(M,"title","time"),d(It,"title","optional (default 0) skybox layer"),d(gt,"title","number"),d(fe,"title","optional (default 0) skybox layer"),d(ue,"title","number"),d(I,"title","optional (default 0) skybox layer"),d(ee,"title","number"),d(he,"title","optional (default 0) skybox layer"),d(me,"title","number"),d(ne,"title","number"),d(Me,"title","number")},m(x,L){e(x,a,L),nt(a,s),nt(a,u),e(x,_,L),e(x,o,L),nt(o,$),nt(o,q),nt(o,C),e(x,H,L),e(x,y,L),e(x,j,L),e(x,c,L),e(x,W,L),e(x,k,L),e(x,F,L),e(x,Z,L),e(x,O,L),e(x,V,L),e(x,mt,L),e(x,tt,L),e(x,R,L),e(x,w,L),e(x,bt,L),e(x,X,L),e(x,st,L),e(x,at,L),e(x,A,L),e(x,h,L),e(x,rt,L),e(x,lt,L),e(x,ft,L),e(x,pt,L),e(x,g,L),e(x,ut,L),e(x,E,L),e(x,K,L),e(x,z,L),e(x,et,L),e(x,Nt,L),e(x,vt,L),e(x,Ft,L),e(x,St,L),e(x,Et,L),e(x,At,L),e(x,Ht,L),e(x,qt,L),e(x,Zt,L),e(x,Tt,L),e(x,Bt,L),e(x,Rt,L),e(x,Yt,L),e(x,ct,L),e(x,Qt,L),e(x,M,L),e(x,Xt,L),e(x,Gt,L),e(x,Jt,L),e(x,It,L),e(x,Q,L),e(x,gt,L),e(x,we,L),e(x,le,L),e(x,ie,L),e(x,fe,L),e(x,se,L),e(x,ue,L),e(x,te,L),e(x,Kt,L),e(x,b,L),e(x,I,L),e(x,Le,L),e(x,ee,L),e(x,He,L),e(x,qe,L),e(x,de,L),e(x,he,L),e(x,je,L),e(x,me,L),e(x,ce,L),e(x,ne,L),e(x,be,L),e(x,Me,L)},p(x,L){L&2&&G(s,x[1]),L&2&&G($,x[1]),L&2&&G(y,x[1]),L&2&&G(V,x[1]),L&2&&G(at,x[1]),L&2&&G(et,x[1]),L&2&&G(Gt,x[1]),L&2&&G(le,x[1]),L&2&&G(Kt,x[1]),L&2&&G(qe,x[1])},d(x){x&&(t(a),t(_),t(o),t(H),t(y),t(j),t(c),t(W),t(k),t(F),t(Z),t(O),t(V),t(mt),t(tt),t(R),t(w),t(bt),t(X),t(st),t(at),t(A),t(h),t(rt),t(lt),t(ft),t(pt),t(g),t(ut),t(E),t(K),t(z),t(et),t(Nt),t(vt),t(Ft),t(St),t(Et),t(At),t(Ht),t(qt),t(Zt),t(Tt),t(Bt),t(Rt),t(Yt),t(ct),t(Qt),t(M),t(Xt),t(Gt),t(Jt),t(It),t(Q),t(gt),t(we),t(le),t(ie),t(fe),t(se),t(ue),t(te),t(Kt),t(b),t(I),t(Le),t(ee),t(He),t(qe),t(de),t(he),t(je),t(me),t(ce),t(ne),t(be),t(Me))}}}function rs(m){let a;return{c(){a=l("Skyball Command")},l(s){a=n(s,"Skyball Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function os(m){let a,s,u,_,o,$,q,C,P="layer",H,y,j,c,T="layer",W,k,N="n",F,Z,Y="t",O,V,mt,tt,J="layer",R,w,U="img",bt,X,$t="t",st,at,A,h,it="layer",rt,lt,Dt="img",ft,pt,D="n",g,ut,Mt="t",E,K,Pt,z,et="layer",Nt,vt,pe="n",Ft,St,Ut,Et,At="layer",Vt,Ht,qt="n",jt,Zt,Tt,yt,Bt="layer",Rt,kt,Yt="n",ct,wt,Qt,M,B="layer",Xt,Gt,Jt="img",It,S,Q="n",gt,Wt,we="yaw",le,ie,fe="pitch",xe,se,ue="roll",Se,te,Kt="t";return{c(){a=p("span"),s=l(m[1]),u=l("skyball clear"),_=l(`\r
`),o=p("span"),$=l(m[1]),q=l("skyball clear "),C=p("samp"),C.textContent=P,H=l(`\r
`),y=l(m[1]),j=l("skyball "),c=p("samp"),c.textContent=T,W=l(" alpha "),k=p("samp"),k.textContent=N,F=l(" "),Z=p("samp"),Z.textContent=Y,O=l(`\r
`),V=l(m[1]),mt=l("skyball "),tt=p("samp"),tt.textContent=J,R=l(" "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=$t,st=l(`\r
`),at=l(m[1]),A=l("skyball "),h=p("samp"),h.textContent=it,rt=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(" repeat "),pt=p("samp"),pt.textContent=D,g=l(" "),ut=p("samp"),ut.textContent=Mt,E=l(`\r
`),K=l(m[1]),Pt=l("skyball "),z=p("samp"),z.textContent=et,Nt=l(" autorotate yaw "),vt=p("samp"),vt.textContent=pe,Ft=l(`\r
`),St=l(m[1]),Ut=l("skyball "),Et=p("samp"),Et.textContent=At,Vt=l(" autorotate pitch "),Ht=p("samp"),Ht.textContent=qt,jt=l(`\r
`),Zt=l(m[1]),Tt=l("skyball "),yt=p("samp"),yt.textContent=Bt,Rt=l(" autorotate roll "),kt=p("samp"),kt.textContent=Yt,ct=l(`\r
`),wt=l(m[1]),Qt=l("skyball "),M=p("samp"),M.textContent=B,Xt=l(" "),Gt=p("samp"),Gt.textContent=Jt,It=l(" repeat "),S=p("samp"),S.textContent=Q,gt=l(" autorotate "),Wt=p("samp"),Wt.textContent=we,le=l(" "),ie=p("samp"),ie.textContent=fe,xe=l(" "),se=p("samp"),se.textContent=ue,Se=l(" "),te=p("samp"),te.textContent=Kt,this.h()},l(b){a=f(b,"SPAN",{title:!0});var I=_e(a);s=n(I,m[1]),u=n(I,"skyball clear"),I.forEach(t),_=n(b,`\r
`),o=f(b,"SPAN",{title:!0});var ae=_e(o);$=n(ae,m[1]),q=n(ae,"skyball clear "),C=f(ae,"SAMP",{"data-svelte-h":!0}),r(C)!=="svelte-1xi0d59"&&(C.textContent=P),ae.forEach(t),H=n(b,`\r
`),y=n(b,m[1]),j=n(b,"skyball "),c=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(c)!=="svelte-wxxorr"&&(c.textContent=T),W=n(b," alpha "),k=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(k)!=="svelte-11z14xk"&&(k.textContent=N),F=n(b," "),Z=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(Z)!=="svelte-n2z30q"&&(Z.textContent=Y),O=n(b,`\r
`),V=n(b,m[1]),mt=n(b,"skyball "),tt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(tt)!=="svelte-wxxorr"&&(tt.textContent=J),R=n(b," "),w=f(b,"SAMP",{"data-svelte-h":!0}),r(w)!=="svelte-1ictklr"&&(w.textContent=U),bt=n(b," "),X=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(X)!=="svelte-n2z30q"&&(X.textContent=$t),st=n(b,`\r
`),at=n(b,m[1]),A=n(b,"skyball "),h=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(h)!=="svelte-wxxorr"&&(h.textContent=it),rt=n(b," "),lt=f(b,"SAMP",{"data-svelte-h":!0}),r(lt)!=="svelte-1ictklr"&&(lt.textContent=Dt),ft=n(b," repeat "),pt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(pt)!=="svelte-11z14xk"&&(pt.textContent=D),g=n(b," "),ut=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(ut)!=="svelte-n2z30q"&&(ut.textContent=Mt),E=n(b,`\r
`),K=n(b,m[1]),Pt=n(b,"skyball "),z=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(z)!=="svelte-wxxorr"&&(z.textContent=et),Nt=n(b," autorotate yaw "),vt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(vt)!=="svelte-11z14xk"&&(vt.textContent=pe),Ft=n(b,`\r
`),St=n(b,m[1]),Ut=n(b,"skyball "),Et=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(Et)!=="svelte-wxxorr"&&(Et.textContent=At),Vt=n(b," autorotate pitch "),Ht=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(Ht)!=="svelte-11z14xk"&&(Ht.textContent=qt),jt=n(b,`\r
`),Zt=n(b,m[1]),Tt=n(b,"skyball "),yt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(yt)!=="svelte-wxxorr"&&(yt.textContent=Bt),Rt=n(b," autorotate roll "),kt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(kt)!=="svelte-11z14xk"&&(kt.textContent=Yt),ct=n(b,`\r
`),wt=n(b,m[1]),Qt=n(b,"skyball "),M=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(M)!=="svelte-wxxorr"&&(M.textContent=B),Xt=n(b," "),Gt=f(b,"SAMP",{"data-svelte-h":!0}),r(Gt)!=="svelte-1ictklr"&&(Gt.textContent=Jt),It=n(b," repeat "),S=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(S)!=="svelte-11z14xk"&&(S.textContent=Q),gt=n(b," autorotate "),Wt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(Wt)!=="svelte-z540cx"&&(Wt.textContent=we),le=n(b," "),ie=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(ie)!=="svelte-1o30zjk"&&(ie.textContent=fe),xe=n(b," "),se=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(se)!=="svelte-14d26p9"&&(se.textContent=ue),Se=n(b," "),te=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),r(te)!=="svelte-n2z30q"&&(te.textContent=Kt),this.h()},h(){d(a,"title","clear all skyballs"),d(o,"title","clear skyball on specified layer"),d(c,"title","optional (default 0) skyball layer"),d(k,"title","number"),d(Z,"title","time"),d(tt,"title","optional (default 0) skyball layer"),d(X,"title","time"),d(h,"title","optional (default 0) skyball layer"),d(pt,"title","number"),d(ut,"title","time"),d(z,"title","optional (default 0) skyball layer"),d(vt,"title","number"),d(Et,"title","optional (default 0) skyball layer"),d(Ht,"title","number"),d(yt,"title","optional (default 0) skyball layer"),d(kt,"title","number"),d(M,"title","optional (default 0) skyball layer"),d(S,"title","number"),d(Wt,"title","number"),d(ie,"title","number"),d(se,"title","number"),d(te,"title","time")},m(b,I){e(b,a,I),nt(a,s),nt(a,u),e(b,_,I),e(b,o,I),nt(o,$),nt(o,q),nt(o,C),e(b,H,I),e(b,y,I),e(b,j,I),e(b,c,I),e(b,W,I),e(b,k,I),e(b,F,I),e(b,Z,I),e(b,O,I),e(b,V,I),e(b,mt,I),e(b,tt,I),e(b,R,I),e(b,w,I),e(b,bt,I),e(b,X,I),e(b,st,I),e(b,at,I),e(b,A,I),e(b,h,I),e(b,rt,I),e(b,lt,I),e(b,ft,I),e(b,pt,I),e(b,g,I),e(b,ut,I),e(b,E,I),e(b,K,I),e(b,Pt,I),e(b,z,I),e(b,Nt,I),e(b,vt,I),e(b,Ft,I),e(b,St,I),e(b,Ut,I),e(b,Et,I),e(b,Vt,I),e(b,Ht,I),e(b,jt,I),e(b,Zt,I),e(b,Tt,I),e(b,yt,I),e(b,Rt,I),e(b,kt,I),e(b,ct,I),e(b,wt,I),e(b,Qt,I),e(b,M,I),e(b,Xt,I),e(b,Gt,I),e(b,It,I),e(b,S,I),e(b,gt,I),e(b,Wt,I),e(b,le,I),e(b,ie,I),e(b,xe,I),e(b,se,I),e(b,Se,I),e(b,te,I)},p(b,I){I&2&&G(s,b[1]),I&2&&G($,b[1]),I&2&&G(y,b[1]),I&2&&G(V,b[1]),I&2&&G(at,b[1]),I&2&&G(K,b[1]),I&2&&G(St,b[1]),I&2&&G(Zt,b[1]),I&2&&G(wt,b[1])},d(b){b&&(t(a),t(_),t(o),t(H),t(y),t(j),t(c),t(W),t(k),t(F),t(Z),t(O),t(V),t(mt),t(tt),t(R),t(w),t(bt),t(X),t(st),t(at),t(A),t(h),t(rt),t(lt),t(ft),t(pt),t(g),t(ut),t(E),t(K),t(Pt),t(z),t(Nt),t(vt),t(Ft),t(St),t(Ut),t(Et),t(Vt),t(Ht),t(jt),t(Zt),t(Tt),t(yt),t(Rt),t(kt),t(ct),t(wt),t(Qt),t(M),t(Xt),t(Gt),t(It),t(S),t(gt),t(Wt),t(le),t(ie),t(xe),t(se),t(Se),t(te))}}}function Cs(m){let a,s,u,_,o,$,q=`\r
    The Skybox command will set up a cube-shaped mesh to represent the sky. The skybox takes six textures, one for each face.\r
`,C,P,H=`\r
    A layer parameter can be provided after to set up multiple skyboxes. The layer parameter is always optional and defaults to 0.\r
    Higher layers will be drawn over lower layers.\r
`,y,j,c=`\r
    The time parameter will fade the skybox in or out, but cannot fade between different textures. To fade between textures you need to use multiple skybox layers.\r
`,T,W,k=`
    If an image is provided without a side name, it will be used as the default image and will be used for any sides without an image.
    <br/>Texutres are pulled from the img/parallaxes folder.
    <br/>The word &quot;clear&quot; can be used to mean a blank texture.
`,N,F,Z=`\r
    The autorotate parameters can be used to make the skybox rotate automatically.\r
`,Y,O,V,mt,tt,J,R=`
    The Skyball command will set up a sphere-shaped mesh to represent the sky. The skyball takes only one texture which is wrapped around the sphere.
    <br/>Like skyboxes, skyballs can also be layered. Skyballs are always drawn in front of skyboxes.
    <br/>Also like skyboxes, skyballs can be automatically rotated with the autorotate parameters.
`,w,U,bt=`\r
    Skyballs have an additional "repeat" parameter which can make the texture repeat a certain number of times around the sphere.\r
`,X,$t,st,at;return s=new Pe({props:{h2:!0,id:"skybox&skyball",$$slots:{default:[ps]},$$scope:{ctx:m}}}),_=new Pe({props:{h3:!0,id:"skybox",$$slots:{default:[fs]},$$scope:{ctx:m}}}),O=new Ot({props:{$$slots:{default:[us]},$$scope:{ctx:m}}}),mt=new Pe({props:{h3:!0,id:"skyball",$$slots:{default:[rs]},$$scope:{ctx:m}}}),$t=new Ot({props:{$$slots:{default:[os]},$$scope:{ctx:m}}}),{c(){a=l(`\r
`),xt(s.$$.fragment),u=l(`\r
`),xt(_.$$.fragment),o=l(`\r
`),$=p("p"),$.textContent=q,C=l(`\r
`),P=p("p"),P.textContent=H,y=l(`\r
`),j=p("p"),j.textContent=c,T=l(`\r
`),W=p("p"),W.innerHTML=k,N=l(`\r
`),F=p("p"),F.textContent=Z,Y=l(`\r
`),xt(O.$$.fragment),V=l(`\r
\r
`),xt(mt.$$.fragment),tt=l(`\r
`),J=p("p"),J.innerHTML=R,w=l(`\r
`),U=p("p"),U.textContent=bt,X=l(`\r
`),xt($t.$$.fragment),st=l(`\r
\r
`)},l(A){a=n(A,`\r
`),_t(s.$$.fragment,A),u=n(A,`\r
`),_t(_.$$.fragment,A),o=n(A,`\r
`),$=f(A,"P",{"data-svelte-h":!0}),r($)!=="svelte-1g16wg1"&&($.textContent=q),C=n(A,`\r
`),P=f(A,"P",{"data-svelte-h":!0}),r(P)!=="svelte-4492k"&&(P.textContent=H),y=n(A,`\r
`),j=f(A,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1w9n3ff"&&(j.textContent=c),T=n(A,`\r
`),W=f(A,"P",{"data-svelte-h":!0}),r(W)!=="svelte-eo8jvt"&&(W.innerHTML=k),N=n(A,`\r
`),F=f(A,"P",{"data-svelte-h":!0}),r(F)!=="svelte-tlpivx"&&(F.textContent=Z),Y=n(A,`\r
`),_t(O.$$.fragment,A),V=n(A,`\r
\r
`),_t(mt.$$.fragment,A),tt=n(A,`\r
`),J=f(A,"P",{"data-svelte-h":!0}),r(J)!=="svelte-93nfgk"&&(J.innerHTML=R),w=n(A,`\r
`),U=f(A,"P",{"data-svelte-h":!0}),r(U)!=="svelte-1izf0ar"&&(U.textContent=bt),X=n(A,`\r
`),_t($t.$$.fragment,A),st=n(A,`\r
\r
`)},m(A,h){e(A,a,h),dt(s,A,h),e(A,u,h),dt(_,A,h),e(A,o,h),e(A,$,h),e(A,C,h),e(A,P,h),e(A,y,h),e(A,j,h),e(A,T,h),e(A,W,h),e(A,N,h),e(A,F,h),e(A,Y,h),dt(O,A,h),e(A,V,h),dt(mt,A,h),e(A,tt,h),e(A,J,h),e(A,w,h),e(A,U,h),e(A,X,h),dt($t,A,h),e(A,st,h),at=!0},p(A,h){const it={};h&8&&(it.$$scope={dirty:h,ctx:A}),s.$set(it);const rt={};h&8&&(rt.$$scope={dirty:h,ctx:A}),_.$set(rt);const lt={};h&10&&(lt.$$scope={dirty:h,ctx:A}),O.$set(lt);const Dt={};h&8&&(Dt.$$scope={dirty:h,ctx:A}),mt.$set(Dt);const ft={};h&10&&(ft.$$scope={dirty:h,ctx:A}),$t.$set(ft)},i(A){at||(Ct(s.$$.fragment,A),Ct(_.$$.fragment,A),Ct(O.$$.fragment,A),Ct(mt.$$.fragment,A),Ct($t.$$.fragment,A),at=!0)},o(A){ot(s.$$.fragment,A),ot(_.$$.fragment,A),ot(O.$$.fragment,A),ot(mt.$$.fragment,A),ot($t.$$.fragment,A),at=!1},d(A){A&&(t(a),t(u),t(o),t($),t(C),t(P),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(V),t(tt),t(J),t(w),t(U),t(X),t(st)),ht(s,A),ht(_,A),ht(O,A),ht(mt,A),ht($t,A)}}}function vs(m){let a;return{c(){a=l("Action Command")},l(s){a=n(s,"Action Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function $s(m){let a,s,u="@t",_,o,$="name",q,C,P,H="@t",y,j,c="name",T,W,k,N="@t",F,Z,Y="name",O,V,mt,tt="@t",J,R,w="name",U,bt,X,$t="@t",st,at,A="name",h,it,rt,lt="@t",Dt,ft,pt="name";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" action play "),o=p("samp"),o.textContent=$,q=l(`\r
`),C=l(m[1]),P=p("samp"),P.textContent=H,y=l(" action play "),j=p("samp"),j.textContent=c,T=l(` wait\r
`),W=l(m[1]),k=p("samp"),k.textContent=N,F=l(" action play "),Z=p("samp"),Z.textContent=Y,O=l(` loop\r
`),V=l(m[1]),mt=p("samp"),mt.textContent=tt,J=l(" action play "),R=p("samp"),R.textContent=w,U=l(` important\r
`),bt=l(m[1]),X=p("samp"),X.textContent=$t,st=l(" action play "),at=p("samp"),at.textContent=A,h=l(` loop important\r
`),it=l(m[1]),rt=p("samp"),rt.textContent=lt,Dt=l(" action stop "),ft=p("samp"),ft.textContent=pt,this.h()},l(D){a=n(D,m[1]),s=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(D," action play "),o=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(o)!=="svelte-eu41wn"&&(o.textContent=$),q=n(D,`\r
`),C=n(D,m[1]),P=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(P)!=="svelte-vygyen"&&(P.textContent=H),y=n(D," action play "),j=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(j)!=="svelte-eu41wn"&&(j.textContent=c),T=n(D,` wait\r
`),W=n(D,m[1]),k=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(k)!=="svelte-vygyen"&&(k.textContent=N),F=n(D," action play "),Z=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(Z)!=="svelte-eu41wn"&&(Z.textContent=Y),O=n(D,` loop\r
`),V=n(D,m[1]),mt=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(mt)!=="svelte-vygyen"&&(mt.textContent=tt),J=n(D," action play "),R=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(R)!=="svelte-eu41wn"&&(R.textContent=w),U=n(D,` important\r
`),bt=n(D,m[1]),X=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(X)!=="svelte-vygyen"&&(X.textContent=$t),st=n(D," action play "),at=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(at)!=="svelte-eu41wn"&&(at.textContent=A),h=n(D,` loop important\r
`),it=n(D,m[1]),rt=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(rt)!=="svelte-vygyen"&&(rt.textContent=lt),Dt=n(D," action stop "),ft=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),r(ft)!=="svelte-eu41wn"&&(ft.textContent=pt),this.h()},h(){d(s,"title","target string"),d(o,"title","action name"),d(P,"title","target string"),d(j,"title","action name"),d(k,"title","target string"),d(Z,"title","action name"),d(mt,"title","target string"),d(R,"title","action name"),d(X,"title","target string"),d(at,"title","action name"),d(rt,"title","target string"),d(ft,"title","action name")},m(D,g){e(D,a,g),e(D,s,g),e(D,_,g),e(D,o,g),e(D,q,g),e(D,C,g),e(D,P,g),e(D,y,g),e(D,j,g),e(D,T,g),e(D,W,g),e(D,k,g),e(D,F,g),e(D,Z,g),e(D,O,g),e(D,V,g),e(D,mt,g),e(D,J,g),e(D,R,g),e(D,U,g),e(D,bt,g),e(D,X,g),e(D,st,g),e(D,at,g),e(D,h,g),e(D,it,g),e(D,rt,g),e(D,Dt,g),e(D,ft,g)},p(D,g){g&2&&G(a,D[1]),g&2&&G(C,D[1]),g&2&&G(W,D[1]),g&2&&G(V,D[1]),g&2&&G(bt,D[1]),g&2&&G(it,D[1])},d(D){D&&(t(a),t(s),t(_),t(o),t(q),t(C),t(P),t(y),t(j),t(T),t(W),t(k),t(F),t(Z),t(O),t(V),t(mt),t(J),t(R),t(U),t(bt),t(X),t(st),t(at),t(h),t(it),t(rt),t(Dt),t(ft))}}}function xs(m){let a,s,u,_,o=`
    The Action command plays or stops an action (animation) on the target character with an imported gltf model.
    <br/>The wait, loop, and important keywords can be provided at the end of the command to modify the behavior.
`,$,q,C=`
    <li>Loop will cause the action to loop.</li>
    <li>Important will prevent the action from being interrupted by changing state.</li>
    <li>Wait will cause the interpreter to wait until the action is finished before continuing.</li>
`,P,H,y,j;return s=new Pe({props:{h2:!0,id:"action",$$slots:{default:[vs]},$$scope:{ctx:m}}}),H=new Ot({props:{$$slots:{default:[$s]},$$scope:{ctx:m}}}),{c(){a=l(`\r
`),xt(s.$$.fragment),u=l(`\r
`),_=p("p"),_.innerHTML=o,$=l(`\r
`),q=p("ul"),q.innerHTML=C,P=l(`\r
`),xt(H.$$.fragment),y=l(`\r
\r
`)},l(c){a=n(c,`\r
`),_t(s.$$.fragment,c),u=n(c,`\r
`),_=f(c,"P",{"data-svelte-h":!0}),r(_)!=="svelte-138s267"&&(_.innerHTML=o),$=n(c,`\r
`),q=f(c,"UL",{"data-svelte-h":!0}),r(q)!=="svelte-114sln6"&&(q.innerHTML=C),P=n(c,`\r
`),_t(H.$$.fragment,c),y=n(c,`\r
\r
`)},m(c,T){e(c,a,T),dt(s,c,T),e(c,u,T),e(c,_,T),e(c,$,T),e(c,q,T),e(c,P,T),dt(H,c,T),e(c,y,T),j=!0},p(c,T){const W={};T&8&&(W.$$scope={dirty:T,ctx:c}),s.$set(W);const k={};T&10&&(k.$$scope={dirty:T,ctx:c}),H.$set(k)},i(c){j||(Ct(s.$$.fragment,c),Ct(H.$$.fragment,c),j=!0)},o(c){ot(s.$$.fragment,c),ot(H.$$.fragment,c),j=!1},d(c){c&&(t(a),t(u),t(_),t($),t(q),t(P),t(y)),ht(s,c),ht(H,c)}}}function _s(m){let a;return{c(){a=l("Set Command")},l(s){a=n(s,"Set Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ds(m){let a,s,u,_="setting",o,$,q="value";return{c(){a=l(m[1]),s=l("set "),u=p("samp"),u.textContent=_,o=l(" "),$=p("samp"),$.textContent=q},l(C){a=n(C,m[1]),s=n(C,"set "),u=f(C,"SAMP",{"data-svelte-h":!0}),r(u)!=="svelte-17zv5fa"&&(u.textContent=_),o=n(C," "),$=f(C,"SAMP",{"data-svelte-h":!0}),r($)!=="svelte-8e37ox"&&($.textContent=q)},m(C,P){e(C,a,P),e(C,s,P),e(C,u,P),e(C,o,P),e(C,$,P)},p(C,P){P&2&&G(a,C[1])},d(C){C&&(t(a),t(s),t(u),t(o),t($))}}}function hs(m){let a;return{c(){a=l("Doesn't work propertly with 3D models")},l(s){a=n(s,"Doesn't work propertly with 3D models")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function bs(m){let a,s,u="<dt>alphaFog</dt><dd>Blends the 3D environment into the parallax background with an alpha fog effect. <samp>0</samp> to disable, <samp>1</samp> for full effect.</dd><dt>glowIntensity</dt><dd>Intensity of the glow effect. <samp>0</samp> or higher</dd><dt>glowRadius</dt><dd>Radius of the glow effect. <samp>0</samp> or higher</dd><dt>glowThroughWalls</dt><dd>When true, the glow effect will be visible through walls. <samp>true</samp> or <samp>false</samp></dd><dt>highlight</dt><dd>Controls the mode for the highlight effect. Can be <samp>Off</samp>, <samp>Inner</samp>, <samp>Outer</samp>, or <samp>On</samp></dd><dt>highlightRadius</dt><dd>Radius of the highlight effect. <samp>0</samp> or higher</dd><dt>highlightThroughWalls</dt><dd>When true, the highlight effect will be visible through walls. <samp>true</samp> or <samp>false</samp></dd><dt>chromaticAberration</dt><dd>Intensity of the chromatic aberration effect. <samp>0</samp> or higher</dd><dt>chromaticAberrationAngle</dt><dd>Angle of the chromatic aberration effect. <samp>0</samp> to <samp>360</samp></dd><dt>aperture</dt><dd>Larger values cause more blur away from the focus distance.</dd><dt>blurStrength</dt><dd>Strength of the blur effect. <samp>0</samp> or higher</dd><dt>focusDistance</dt><dd>Distance at which the camera is focused. <samp>center</samp> focuses on the center of the screen. <samp>mouse</samp> focuses on the mouse position. <samp>auto</samp> will set focus to camera distance, or center of screen if in 1st person. Using a number will fix the focus distance at that value.</dd><dt>bloom</dt><dd>Intensity of the bloom effect. <samp>0</samp> or higher</dd><dt>bloomThreshold</dt><dd>Threshold for the bloom effect. <samp>0</samp> to <samp>1</samp></dd><dt>bloomRadius</dt><dd>Radius of the bloom effect. <samp>0</samp> or higher</dd>",_;return{c(){a=l(`\r
`),s=p("dl"),s.innerHTML=u,_=l(`\r
`)},l(o){a=n(o,`\r
`),s=f(o,"DL",{"data-svelte-h":!0}),r(s)!=="svelte-s155oh"&&(s.innerHTML=u),_=n(o,`\r
`)},m(o,$){e(o,a,$),e(o,s,$),e(o,_,$)},p:Ai,d(o){o&&(t(a),t(s),t(_))}}}function Ms(m){let a;return{c(){a=l("Enable / Disable Command")},l(s){a=n(s,"Enable / Disable Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ps(m){let a,s,u,_;return{c(){a=l(m[1]),s=l(`enable\r
`),u=l(m[1]),_=l("disable")},l(o){a=n(o,m[1]),s=n(o,`enable\r
`),u=n(o,m[1]),_=n(o,"disable")},m(o,$){e(o,a,$),e(o,s,$),e(o,u,$),e(o,_,$)},p(o,$){$&2&&G(a,o[1]),$&2&&G(u,o[1])},d(o){o&&(t(a),t(s),t(u),t(_))}}}function Ss(m){let a,s,u,_;return{c(){a=l(m[1]),s=l(`enable 0\r
`),u=l(m[1]),_=l("disable 1")},l(o){a=n(o,m[1]),s=n(o,`enable 0\r
`),u=n(o,m[1]),_=n(o,"disable 1")},m(o,$){e(o,a,$),e(o,s,$),e(o,u,$),e(o,_,$)},p(o,$){$&2&&G(a,o[1]),$&2&&G(u,o[1])},d(o){o&&(t(a),t(s),t(u),t(_))}}}function ws(m){let a=m[0].pluginName+"",s,u,_,o=m[0].pluginName+"",$,q;return{c(){s=l(a),u=l(".enable(0);"),_=p("br"),$=l(o),q=l(".disable(1);")},l(C){s=n(C,a),u=n(C,".enable(0);"),_=f(C,"BR",{}),$=n(C,o),q=n(C,".disable(1);")},m(C,P){e(C,s,P),e(C,u,P),e(C,_,P),e(C,$,P),e(C,q,P)},p(C,P){P&1&&a!==(a=C[0].pluginName+"")&&G(s,a),P&1&&o!==(o=C[0].pluginName+"")&&G($,o)},d(C){C&&(t(s),t(u),t(_),t($),t(q))}}}function ks(m){let a,s,u="It was intended that you be able to provide a fade type with the enable or disable command, but this isn't working due to a bug.",_,o,$,q,C="Instead, you can use a script call to accomplish the same thing.",P,H,y,j,c="Fade mode 0 is fade to black and fade mode 1 is fade to white.",T,W;return o=new Ot({props:{$$slots:{default:[Ss]},$$scope:{ctx:m}}}),H=new Ot({props:{$$slots:{default:[ws]},$$scope:{ctx:m}}}),{c(){a=l(`\r
    `),s=p("p"),s.textContent=u,_=l(`\r
`),xt(o.$$.fragment),$=l(`\r
    `),q=p("p"),q.textContent=C,P=l(`\r
    `),xt(H.$$.fragment),y=l(`\r
    `),j=p("p"),j.textContent=c,T=l(`\r
`)},l(k){a=n(k,`\r
    `),s=f(k,"P",{"data-svelte-h":!0}),r(s)!=="svelte-1f6ybq"&&(s.textContent=u),_=n(k,`\r
`),_t(o.$$.fragment,k),$=n(k,`\r
    `),q=f(k,"P",{"data-svelte-h":!0}),r(q)!=="svelte-1vauc6j"&&(q.textContent=C),P=n(k,`\r
    `),_t(H.$$.fragment,k),y=n(k,`\r
    `),j=f(k,"P",{"data-svelte-h":!0}),r(j)!=="svelte-jymit8"&&(j.textContent=c),T=n(k,`\r
`)},m(k,N){e(k,a,N),e(k,s,N),e(k,_,N),dt(o,k,N),e(k,$,N),e(k,q,N),e(k,P,N),dt(H,k,N),e(k,y,N),e(k,j,N),e(k,T,N),W=!0},p(k,N){const F={};N&10&&(F.$$scope={dirty:N,ctx:k}),o.$set(F);const Z={};N&9&&(Z.$$scope={dirty:N,ctx:k}),H.$set(Z)},i(k){W||(Ct(o.$$.fragment,k),Ct(H.$$.fragment,k),W=!0)},o(k){ot(o.$$.fragment,k),ot(H.$$.fragment,k),W=!1},d(k){k&&(t(a),t(s),t(_),t($),t(q),t(P),t(y),t(j),t(T)),ht(o,k),ht(H,k)}}}function As(m){let a;return{c(){a=l("Script Call")},l(s){a=n(s,"Script Call")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function wi(m){let a;return{c(){a=l('You should leave out the "mv3d" prefix when running commands this way.')},l(s){a=n(s,'You should leave out the "mv3d" prefix when running commands this way.')},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ys(m){let a,s=m[0].pluginName+"",u,_;return{c(){a=l(`var id=1, depth=true, scale=1;\r
`),u=l(s),_=l('.command("@p animation", id, "depth", depth, "scale", scale);')},l(o){a=n(o,`var id=1, depth=true, scale=1;\r
`),u=n(o,s),_=n(o,'.command("@p animation", id, "depth", depth, "scale", scale);')},m(o,$){e(o,a,$),e(o,u,$),e(o,_,$)},p(o,$){$&1&&s!==(s=o[0].pluginName+"")&&G(u,s)},d(o){o&&(t(a),t(u),t(_))}}}function Ts(m){let a,s,u,_,o,$,q,C,P,H,y,j="Valid targets:",c,T,W=`
    <li>@p or @player - targets $gamePlayer</li>
    <li>@e0, @s, or target string omitted - targets the current event</li>
    <li>@e1, @e2, @e3, @e25 etc - targets event with specified id</li>
    <li>@f0, @f1, @f2 - targets first, second, third follower, etc.</li>
    <li>@v0, @v1, @v2 - targets boat, ship, airship</li>
`,k,N,F=`\r
    Many commands can take a time parameter at the end. The time parameter is in seconds. If omitted, the time parameter defaults to 1 second.\r
`,Z,Y,O=`\r
    Some numeric parameters can be prefixed with + to be set relative to the current value.\r
`,V,mt,tt,J,R,w,U=`
    The Camera Pitch, Yaw, and Roll commands rotate the camera around the camera target.
    <br/>The Camera Dist command sets the distance from the camera target.
    <br/>The Camera Height command sets a height offset from the camera target.
    <br/>The Camera Zoom command alters the FOV to zoom in or out.
    <br/>The Camera Pan command offsets the x and y position from the camera target.
`,bt,X,$t=`\r
    The following camera commands can have the word "camera" omitted and still work as a command.\r
`,st,at,A,h,it=`\r
    The Camera Target command sets the camera target to a character. The camera will move with the camera target.\r
`,rt,lt,Dt,ft,pt=`
    The Camera Track command sets the camera to track a character, automatically rotating the camera to face the character.
    Typically you will want to use this in conjunction with the Camera Target command to move the camera away from the player, then track the player.
    <br/>There are additional &quot;Track Pitch&quot; and &quot;Track Yaw&quot; commands which track only the pitch and yaw respectively.
`,D,g,ut,Mt,E=`
    The Camera Mode command sets the camera mode between perspective, orthographic, and 2D. Only the first letter is required, so &quot;p&quot;, &quot;o&quot;, and &quot;2&quot; are possible values.
    (2D mode is a false 2D projection, and is different from <a href="#disable">disabling the 3D rendering</a>.)
`,K,Pt,z,et,Nt,vt,pe,Ft,St,Ut,Et='The color parameter can be a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">hex color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">named color</a>, or any other valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">css color</a>.',At,Vt,Ht,qt,jt="The Lamp commands set up a point light on the target event and changes properties of that light.",Zt,Tt,yt,Bt,Rt=`\r
    The Flashlight commands set up a spot light on the target event and changes properties of that light.\r
    In addition to the same properties as the lamp, the flashlight has angle, pitch, and yaw properties.\r
    Angle is the angle of the light cone in degrees, and pitch and yaw are the direction the light is pointing.\r
`,kt,Yt,ct,wt,Qt,M,B,Xt,Gt=`\r
    The Animation command plays an animation at the target event.\r
`,Jt,It,S,Q,gt,Wt,we,le,ie="Depth controls whether the animation should have depth enabled. If false, animations are drawn over everything else.",fe,xe,se="Scale is a scaling factor for the animation.",ue,Se,te,Kt,b,I,ae,Le,ee,pl,He,qe,de,he,ke,je,me,Rl=`\r
    The Resolution Scale command changes the size of the 3D canvas relative to the game canvas. This can be used to create a pixellated effect. The scale should be between 0 and 1.\r
`,ce,ne,ge,be,Me,Ae,x,L,Re,Ol,We,Vl,Fe,Oe,Yl,Ve,Ul,tl,_n="Changes a setting. Some of the settings changeable using this command also appear in the plugin parameters. For those settings, the same syntax is used as in the plugin parameters.",Zl,el,dn="Settings changed with this command are saved in the save file.",Bl,Ye,Gl,ll,hn="Valid Settings:",Jl,zt,fl,bn="lockCamera",ul,Mn="Locks the camera in place. <samp>true</samp> or <samp>false</samp>",rl,Pn="allowRotation",ol,Sn="Allows the camera to rotate side to side. <samp>true</samp> or <samp>false</samp>",Cl,wn="allowPitch",vl,kn="Allows the camera to pitch up and down. <samp>true</samp> or <samp>false</samp>",$l,An="diagonalMovement",xl,yn=`Changes the way diagonal movement works. Can be <samp>Off</samp>, <samp>Diagonal Basic</samp>, <samp>Diagonal Basic 3D</samp>, <samp>Diagonal Smart</samp>, or <samp>Diagonal Smart 3D</samp>
    <br/>3D modes mean diagonal movement only allowed when 3D mode is enabled.`,_l,Tn="turnIncrement",dl,zn="How many degrees the camera turns when turning. <samp>0</samp> to <samp>360</samp>",hl,Dn="turnSpeed",bl,qn="How fast the camera turns in degrees per second.",Ml,Ln="instantMovement",ye,fn,Pl,Hn="true",un,Sl,jn="false",rn,Ue,on,wl,cn="inputCameraMouse",kl,Nn="When true, the camera can be controlled with the mouse. <samp>true</samp> or <samp>false</samp>",Al,En="inputCameraGamepad",yl,In="When true, the camera can be controlled with a gamepad. <samp>true</samp> or <samp>false</samp>",Tl,Rn="cameraCollision",zl,Wn=`Allows the camera to collide with objects. Can be <samp>Off</samp>, <samp>Type1</samp>, <samp>Type2</samp>, <samp>Type1 Smoothed</samp>, or <samp>Type2 Smoothed</samp>
    <br/>Type2 allows objects to be between the camera and player, Type1 does not. Smoothed will smooth the camera position when colliding.`,Dl,Fn="airshipHeight",ql,On=`How high the airship flies.\r
\r
    `,Ll,Vn="allowGlide",Hl,Yn="If true, collision detection for flying characters will only use the current elevation and not target elevation. <samp>true</samp> or <samp>false</samp>",jl,Un="animationDepth",cl,Zn="Whether animations should have depth enabled. If false, animations are drawn over everything else. <samp>true</samp> or <samp>false</samp>",Kl,Ze,Ql,Be,Xl,nl,Bn=`\r
    The Enable and Disable commands enable or disable the 3D rendering.\r
    When disabled, the 3D rendering will be hidden and the game will behave as if the plugin is not installed.\r
`,gl,Ge,tn,Je,en,Ke,ln,Te,Cn,Nl,Wl=m[0].pluginName+"",nn,vn,$n,sn,an,Qe,Fl;s=new Li({props:{title:"Plugin Commands"}});let re=m[0].pluginName==="mz3d"&&bi();function Gn(i,v){return i[0].pluginName==="mv3d"?ji:Hi}let mn=Gn(m),Ne=mn(m);P=new Ot({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),mt=new Ot({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),J=new Pe({props:{h2:!0,id:"camera",$$slots:{default:[Ei]},$$scope:{ctx:m}}}),at=new Ot({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),lt=new Ot({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),g=new Ot({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),Pt=new Ot({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),et=new Pe({props:{h2:!0,id:"light",$$slots:{default:[Oi]},$$scope:{ctx:m}}});let oe=m[0].premium&&Mi();Vt=new Ot({props:{$$slots:{default:[Vi]},$$scope:{ctx:m}}}),Tt=new Ot({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),Yt=new Ot({props:{$$slots:{default:[Ui]},$$scope:{ctx:m}}}),wt=new Il({props:{block:!0,premium:m[2],$$slots:{default:[Bi]},$$scope:{ctx:m}}}),M=new Pe({props:{h2:!0,id:"animation",$$slots:{default:[Gi]},$$scope:{ctx:m}}});function Jn(i,v){return i[0].pluginName==="mz3d"?Ki:Ji}let pn=Jn(m),Ee=pn(m),Ce=m[0].pluginName==="mz3d"&&Pi();const Kn=[Xi,Qi],Xe=[];function Qn(i,v){return i[0].pluginName==="mz3d"?0:1}Kt=Qn(m),b=Xe[Kt]=Kn[Kt](m),ae=new Pe({props:{h2:!0,id:"fog",$$slots:{default:[es]},$$scope:{ctx:m}}});let ve=m[0].premium&&Si();de=new Ot({props:{$$slots:{default:[ls]},$$scope:{ctx:m}}}),ke=new Pe({props:{h2:!0,id:"resolution-scale",$$slots:{default:[ns]},$$scope:{ctx:m}}}),ne=new Ot({props:{$$slots:{default:[is]},$$scope:{ctx:m}}}),be=new Pe({props:{h2:!0,id:"configure",$$slots:{default:[ss]},$$scope:{ctx:m}}}),L=new qi({props:{href:"event-config",$$slots:{default:[as]},$$scope:{ctx:m}}}),We=new Ot({props:{$$slots:{default:[ms]},$$scope:{ctx:m}}}),Fe=new Il({props:{block:!0,premium:m[2],$$slots:{default:[Cs]},$$scope:{ctx:m}}}),Oe=new Il({props:{block:!0,premium:m[2],$$slots:{default:[xs]},$$scope:{ctx:m}}}),Ve=new Pe({props:{h2:!0,id:"set",$$slots:{default:[_s]},$$scope:{ctx:m}}}),Ye=new Ot({props:{$$slots:{default:[ds]},$$scope:{ctx:m}}}),Ue=new Il({props:{bug:!0,inline:!0,small:!0,$$slots:{default:[hs]},$$scope:{ctx:m}}}),Ze=new Il({props:{block:!0,premium:m[2],$$slots:{default:[bs]},$$scope:{ctx:m}}}),Be=new Pe({props:{h2:!0,id:"enable",alias:"disable",$$slots:{default:[Ms]},$$scope:{ctx:m}}}),Ge=new Ot({props:{$$slots:{default:[Ps]},$$scope:{ctx:m}}}),Je=new Il({props:{block:!0,bug:!0,v:"<=0.9",$$slots:{default:[ks]},$$scope:{ctx:m}}}),Ke=new Pe({props:{h2:!0,id:"script",$$slots:{default:[As]},$$scope:{ctx:m}}});let $e=m[0].pluginName==="mv3d"&&wi();return Qe=new Ot({props:{$$slots:{default:[ys]},$$scope:{ctx:m}}}),{c(){a=l(`\r
`),xt(s.$$.fragment),u=l(`\r
\r
    `),re&&re.c(),_=l(`\r
\r
`),o=p("p"),$=l(`Some commands (like lamp and flashlight) act on a character. By default the target character will be the current event. You can define your own target by providing a target string. A target string is the "@" character followed by an identifier.\r
    `),Ne.c(),q=l(`\r
`),C=l(`\r
Example:\r
`),xt(P.$$.fragment),H=l(`\r
`),y=p("p"),y.textContent=j,c=l(`\r
`),T=p("ul"),T.innerHTML=W,k=l(`\r
\r
\r
`),N=p("p"),N.textContent=F,Z=l(`\r
\r
`),Y=p("p"),Y.textContent=O,V=l(`\r
Example:\r
`),xt(mt.$$.fragment),tt=l(`\r
\r
`),xt(J.$$.fragment),R=l(`\r
\r
`),w=p("p"),w.innerHTML=U,bt=l(`\r
\r
`),X=p("p"),X.textContent=$t,st=l(`\r
\r
`),xt(at.$$.fragment),A=l(`\r
\r
`),h=p("p"),h.textContent=it,rt=l(`\r
`),xt(lt.$$.fragment),Dt=l(`\r
\r
\r
`),ft=p("p"),ft.innerHTML=pt,D=l(`\r
\r
`),xt(g.$$.fragment),ut=l(`\r
\r
`),Mt=p("p"),Mt.innerHTML=E,K=l(`\r
`),xt(Pt.$$.fragment),z=l(`\r
\r
`),xt(et.$$.fragment),Nt=l(`\r
\r
`),vt=p("p"),pe=l(`\r
    The Light command (and its alias the Ambient command) sets the ambient light color.\r
`),oe&&oe.c(),Ft=l(`\r
`),St=l(`\r
\r
`),Ut=p("p"),Ut.innerHTML=Et,At=l(`\r
\r
`),xt(Vt.$$.fragment),Ht=l(`\r
\r
`),qt=p("p"),qt.textContent=jt,Zt=l(`\r
\r
`),xt(Tt.$$.fragment),yt=l(`\r
\r
`),Bt=p("p"),Bt.textContent=Rt,kt=l(`\r
\r
`),xt(Yt.$$.fragment),ct=l(`\r
\r
`),xt(wt.$$.fragment),Qt=l(`\r
\r
`),xt(M.$$.fragment),B=l(`\r
\r
`),Xt=p("p"),Xt.textContent=Gt,Jt=l(`\r
\r
`),It=p("p"),S=l(`\r
    `),Ee.c(),Q=l(`\r
`),gt=l(`\r
`),Wt=p("ul"),we=l(`\r
    `),le=p("li"),le.textContent=ie,fe=l(`\r
    `),xe=p("li"),xe.textContent=se,ue=l(`\r
    `),Ce&&Ce.c(),Se=l(`\r
`),te=l(`\r
    `),b.c(),I=l(`\r
\r
`),xt(ae.$$.fragment),Le=l(`\r
`),ee=p("p"),pl=l(`\r
    The fog command changes the fog color and density for the map.\r
    It has a near distance and a far distance, which are the distances from the camera where the fog starts and ends.\r
    `),ve&&ve.c(),He=l(`\r
`),qe=l(`\r
\r
`),xt(de.$$.fragment),he=l(`\r
\r
`),xt(ke.$$.fragment),je=l(`\r
`),me=p("p"),me.textContent=Rl,ce=l(`\r
`),xt(ne.$$.fragment),ge=l(`\r
\r
`),xt(be.$$.fragment),Me=l(`\r
`),Ae=p("p"),x=l(`\r
    The configure command can change the configurations of a character. You should provide a list of configuration functions as the parameter.\r
    For more information the configuration functions you can use, see `),xt(L.$$.fragment),Re=l(`.\r
`),Ol=l(`\r
\r
`),xt(We.$$.fragment),Vl=l(`\r
\r
`),xt(Fe.$$.fragment),xt(Oe.$$.fragment),Yl=l(`\r
\r
\r
`),xt(Ve.$$.fragment),Ul=l(`\r
`),tl=p("p"),tl.textContent=_n,Zl=l(`\r
`),el=p("p"),el.textContent=dn,Bl=l(`\r
    \r
`),xt(Ye.$$.fragment),Gl=l(`\r
\r
`),ll=p("p"),ll.textContent=hn,Jl=l(`\r
`),zt=p("dl"),fl=p("dt"),fl.textContent=bn,ul=p("dd"),ul.innerHTML=Mn,rl=p("dt"),rl.textContent=Pn,ol=p("dd"),ol.innerHTML=Sn,Cl=p("dt"),Cl.textContent=wn,vl=p("dd"),vl.innerHTML=kn,$l=p("dt"),$l.textContent=An,xl=p("dd"),xl.innerHTML=yn,_l=p("dt"),_l.textContent=Tn,dl=p("dd"),dl.innerHTML=zn,hl=p("dt"),hl.textContent=Dn,bl=p("dd"),bl.textContent=qn,Ml=p("dt"),Ml.textContent=Ln,ye=p("dd"),fn=l("When true, the player moves instantly to the new position. "),Pl=p("samp"),Pl.textContent=Hn,un=l(" or "),Sl=p("samp"),Sl.textContent=jn,rn=l(`\r
        `),xt(Ue.$$.fragment),on=l(`\r
    `),wl=p("dt"),wl.textContent=cn,kl=p("dd"),kl.innerHTML=Nn,Al=p("dt"),Al.textContent=En,yl=p("dd"),yl.innerHTML=In,Tl=p("dt"),Tl.textContent=Rn,zl=p("dd"),zl.innerHTML=Wn,Dl=p("dt"),Dl.textContent=Fn,ql=p("dd"),ql.textContent=On,Ll=p("dt"),Ll.textContent=Vn,Hl=p("dd"),Hl.innerHTML=Yn,jl=p("dt"),jl.textContent=Un,cl=p("dd"),cl.innerHTML=Zn,Kl=l(`\r
\r
`),xt(Ze.$$.fragment),Ql=l(`\r
\r
`),xt(Be.$$.fragment),Xl=l(`\r
\r
`),nl=p("p"),nl.textContent=Bn,gl=l(`\r
`),xt(Ge.$$.fragment),tn=l(`\r
\r
`),xt(Je.$$.fragment),en=l(`\r
\r
`),xt(Ke.$$.fragment),ln=l(`\r
\r
`),Te=p("p"),Cn=l(`\r
    To run a plugin command using javascript, you can use `),Nl=p("code"),nn=l(Wl),vn=l(".command"),$n=l(`.\r
    `),$e&&$e.c(),sn=l(`\r
    You can pass the parameters as separate arguments into the function as well.\r
`),an=l(`\r
Example:\r
`),xt(Qe.$$.fragment)},l(i){a=n(i,`\r
`),_t(s.$$.fragment,i),u=n(i,`\r
\r
    `),re&&re.l(i),_=n(i,`\r
\r
`),o=f(i,"P",{});var v=_e(o);$=n(v,`Some commands (like lamp and flashlight) act on a character. By default the target character will be the current event. You can define your own target by providing a target string. A target string is the "@" character followed by an identifier.\r
    `),Ne.l(v),q=n(v,`\r
`),v.forEach(t),C=n(i,`\r
Example:\r
`),_t(P.$$.fragment,i),H=n(i,`\r
`),y=f(i,"P",{"data-svelte-h":!0}),r(y)!=="svelte-desj0i"&&(y.textContent=j),c=n(i,`\r
`),T=f(i,"UL",{"data-svelte-h":!0}),r(T)!=="svelte-y1gmy3"&&(T.innerHTML=W),k=n(i,`\r
\r
\r
`),N=f(i,"P",{"data-svelte-h":!0}),r(N)!=="svelte-wm7q7v"&&(N.textContent=F),Z=n(i,`\r
\r
`),Y=f(i,"P",{"data-svelte-h":!0}),r(Y)!=="svelte-ibg6us"&&(Y.textContent=O),V=n(i,`\r
Example:\r
`),_t(mt.$$.fragment,i),tt=n(i,`\r
\r
`),_t(J.$$.fragment,i),R=n(i,`\r
\r
`),w=f(i,"P",{"data-svelte-h":!0}),r(w)!=="svelte-cccd7m"&&(w.innerHTML=U),bt=n(i,`\r
\r
`),X=f(i,"P",{"data-svelte-h":!0}),r(X)!=="svelte-1pk8hi9"&&(X.textContent=$t),st=n(i,`\r
\r
`),_t(at.$$.fragment,i),A=n(i,`\r
\r
`),h=f(i,"P",{"data-svelte-h":!0}),r(h)!=="svelte-o0hb91"&&(h.textContent=it),rt=n(i,`\r
`),_t(lt.$$.fragment,i),Dt=n(i,`\r
\r
\r
`),ft=f(i,"P",{"data-svelte-h":!0}),r(ft)!=="svelte-1rf2jx2"&&(ft.innerHTML=pt),D=n(i,`\r
\r
`),_t(g.$$.fragment,i),ut=n(i,`\r
\r
`),Mt=f(i,"P",{"data-svelte-h":!0}),r(Mt)!=="svelte-w64j1e"&&(Mt.innerHTML=E),K=n(i,`\r
`),_t(Pt.$$.fragment,i),z=n(i,`\r
\r
`),_t(et.$$.fragment,i),Nt=n(i,`\r
\r
`),vt=f(i,"P",{});var il=_e(vt);pe=n(il,`\r
    The Light command (and its alias the Ambient command) sets the ambient light color.\r
`),oe&&oe.l(il),Ft=n(il,`\r
`),il.forEach(t),St=n(i,`\r
\r
`),Ut=f(i,"P",{"data-svelte-h":!0}),r(Ut)!=="svelte-2x2t8q"&&(Ut.innerHTML=Et),At=n(i,`\r
\r
`),_t(Vt.$$.fragment,i),Ht=n(i,`\r
\r
`),qt=f(i,"P",{"data-svelte-h":!0}),r(qt)!=="svelte-1wyewdv"&&(qt.textContent=jt),Zt=n(i,`\r
\r
`),_t(Tt.$$.fragment,i),yt=n(i,`\r
\r
`),Bt=f(i,"P",{"data-svelte-h":!0}),r(Bt)!=="svelte-1gd1k4j"&&(Bt.textContent=Rt),kt=n(i,`\r
\r
`),_t(Yt.$$.fragment,i),ct=n(i,`\r
\r
`),_t(wt.$$.fragment,i),Qt=n(i,`\r
\r
`),_t(M.$$.fragment,i),B=n(i,`\r
\r
`),Xt=f(i,"P",{"data-svelte-h":!0}),r(Xt)!=="svelte-19ryghp"&&(Xt.textContent=Gt),Jt=n(i,`\r
\r
`),It=f(i,"P",{});var sl=_e(It);S=n(sl,`\r
    `),Ee.l(sl),Q=n(sl,`\r
`),sl.forEach(t),gt=n(i,`\r
`),Wt=f(i,"UL",{});var ze=_e(Wt);we=n(ze,`\r
    `),le=f(ze,"LI",{"data-svelte-h":!0}),r(le)!=="svelte-cwvqa7"&&(le.textContent=ie),fe=n(ze,`\r
    `),xe=f(ze,"LI",{"data-svelte-h":!0}),r(xe)!=="svelte-1dx83yp"&&(xe.textContent=se),ue=n(ze,`\r
    `),Ce&&Ce.l(ze),Se=n(ze,`\r
`),ze.forEach(t),te=n(i,`\r
    `),b.l(i),I=n(i,`\r
\r
`),_t(ae.$$.fragment,i),Le=n(i,`\r
`),ee=f(i,"P",{});var al=_e(ee);pl=n(al,`\r
    The fog command changes the fog color and density for the map.\r
    It has a near distance and a far distance, which are the distances from the camera where the fog starts and ends.\r
    `),ve&&ve.l(al),He=n(al,`\r
`),al.forEach(t),qe=n(i,`\r
\r
`),_t(de.$$.fragment,i),he=n(i,`\r
\r
`),_t(ke.$$.fragment,i),je=n(i,`\r
`),me=f(i,"P",{"data-svelte-h":!0}),r(me)!=="svelte-jvpabw"&&(me.textContent=Rl),ce=n(i,`\r
`),_t(ne.$$.fragment,i),ge=n(i,`\r
\r
`),_t(be.$$.fragment,i),Me=n(i,`\r
`),Ae=f(i,"P",{});var ml=_e(Ae);x=n(ml,`\r
    The configure command can change the configurations of a character. You should provide a list of configuration functions as the parameter.\r
    For more information the configuration functions you can use, see `),_t(L.$$.fragment,ml),Re=n(ml,`.\r
`),ml.forEach(t),Ol=n(i,`\r
\r
`),_t(We.$$.fragment,i),Vl=n(i,`\r
\r
`),_t(Fe.$$.fragment,i),_t(Oe.$$.fragment,i),Yl=n(i,`\r
\r
\r
`),_t(Ve.$$.fragment,i),Ul=n(i,`\r
`),tl=f(i,"P",{"data-svelte-h":!0}),r(tl)!=="svelte-1xdtofa"&&(tl.textContent=_n),Zl=n(i,`\r
`),el=f(i,"P",{"data-svelte-h":!0}),r(el)!=="svelte-1jy56p0"&&(el.textContent=dn),Bl=n(i,`\r
    \r
`),_t(Ye.$$.fragment,i),Gl=n(i,`\r
\r
`),ll=f(i,"P",{"data-svelte-h":!0}),r(ll)!=="svelte-rutver"&&(ll.textContent=hn),Jl=n(i,`\r
`),zt=f(i,"DL",{});var Lt=_e(zt);fl=f(Lt,"DT",{"data-svelte-h":!0}),r(fl)!=="svelte-1ilamju"&&(fl.textContent=bn),ul=f(Lt,"DD",{"data-svelte-h":!0}),r(ul)!=="svelte-dml8n2"&&(ul.innerHTML=Mn),rl=f(Lt,"DT",{"data-svelte-h":!0}),r(rl)!=="svelte-fy2pyf"&&(rl.textContent=Pn),ol=f(Lt,"DD",{"data-svelte-h":!0}),r(ol)!=="svelte-xt5rd3"&&(ol.innerHTML=Sn),Cl=f(Lt,"DT",{"data-svelte-h":!0}),r(Cl)!=="svelte-pss6zv"&&(Cl.textContent=wn),vl=f(Lt,"DD",{"data-svelte-h":!0}),r(vl)!=="svelte-n6iirn"&&(vl.innerHTML=kn),$l=f(Lt,"DT",{"data-svelte-h":!0}),r($l)!=="svelte-u2n78g"&&($l.textContent=An),xl=f(Lt,"DD",{"data-svelte-h":!0}),r(xl)!=="svelte-16wrx3u"&&(xl.innerHTML=yn),_l=f(Lt,"DT",{"data-svelte-h":!0}),r(_l)!=="svelte-115dma2"&&(_l.textContent=Tn),dl=f(Lt,"DD",{"data-svelte-h":!0}),r(dl)!=="svelte-eeu2x1"&&(dl.innerHTML=zn),hl=f(Lt,"DT",{"data-svelte-h":!0}),r(hl)!=="svelte-v6ojo0"&&(hl.textContent=Dn),bl=f(Lt,"DD",{"data-svelte-h":!0}),r(bl)!=="svelte-vm66pb"&&(bl.textContent=qn),Ml=f(Lt,"DT",{"data-svelte-h":!0}),r(Ml)!=="svelte-1wgzutm"&&(Ml.textContent=Ln),ye=f(Lt,"DD",{});var De=_e(ye);fn=n(De,"When true, the player moves instantly to the new position. "),Pl=f(De,"SAMP",{"data-svelte-h":!0}),r(Pl)!=="svelte-w3oc00"&&(Pl.textContent=Hn),un=n(De," or "),Sl=f(De,"SAMP",{"data-svelte-h":!0}),r(Sl)!=="svelte-yrx02b"&&(Sl.textContent=jn),rn=n(De,`\r
        `),_t(Ue.$$.fragment,De),on=n(De,`\r
    `),De.forEach(t),wl=f(Lt,"DT",{"data-svelte-h":!0}),r(wl)!=="svelte-15vsl48"&&(wl.textContent=cn),kl=f(Lt,"DD",{"data-svelte-h":!0}),r(kl)!=="svelte-kxsakr"&&(kl.innerHTML=Nn),Al=f(Lt,"DT",{"data-svelte-h":!0}),r(Al)!=="svelte-zc8c4w"&&(Al.textContent=En),yl=f(Lt,"DD",{"data-svelte-h":!0}),r(yl)!=="svelte-yx9mef"&&(yl.innerHTML=In),Tl=f(Lt,"DT",{"data-svelte-h":!0}),r(Tl)!=="svelte-1nqsaqd"&&(Tl.textContent=Rn),zl=f(Lt,"DD",{"data-svelte-h":!0}),r(zl)!=="svelte-11sxzid"&&(zl.innerHTML=Wn),Dl=f(Lt,"DT",{"data-svelte-h":!0}),r(Dl)!=="svelte-1r4z69"&&(Dl.textContent=Fn),ql=f(Lt,"DD",{"data-svelte-h":!0}),r(ql)!=="svelte-77tmnd"&&(ql.textContent=On),Ll=f(Lt,"DT",{"data-svelte-h":!0}),r(Ll)!=="svelte-1gcl63k"&&(Ll.textContent=Vn),Hl=f(Lt,"DD",{"data-svelte-h":!0}),r(Hl)!=="svelte-mkn3yc"&&(Hl.innerHTML=Yn),jl=f(Lt,"DT",{"data-svelte-h":!0}),r(jl)!=="svelte-pxjtjx"&&(jl.textContent=Un),cl=f(Lt,"DD",{"data-svelte-h":!0}),r(cl)!=="svelte-1sauxoo"&&(cl.innerHTML=Zn),Lt.forEach(t),Kl=n(i,`\r
\r
`),_t(Ze.$$.fragment,i),Ql=n(i,`\r
\r
`),_t(Be.$$.fragment,i),Xl=n(i,`\r
\r
`),nl=f(i,"P",{"data-svelte-h":!0}),r(nl)!=="svelte-1emkn63"&&(nl.textContent=Bn),gl=n(i,`\r
`),_t(Ge.$$.fragment,i),tn=n(i,`\r
\r
`),_t(Je.$$.fragment,i),en=n(i,`\r
\r
`),_t(Ke.$$.fragment,i),ln=n(i,`\r
\r
`),Te=f(i,"P",{});var Ie=_e(Te);Cn=n(Ie,`\r
    To run a plugin command using javascript, you can use `),Nl=f(Ie,"CODE",{});var El=_e(Nl);nn=n(El,Wl),vn=n(El,".command"),El.forEach(t),$n=n(Ie,`.\r
    `),$e&&$e.l(Ie),sn=n(Ie,`\r
    You can pass the parameters as separate arguments into the function as well.\r
`),Ie.forEach(t),an=n(i,`\r
Example:\r
`),_t(Qe.$$.fragment,i)},m(i,v){e(i,a,v),dt(s,i,v),e(i,u,v),re&&re.m(i,v),e(i,_,v),e(i,o,v),nt(o,$),Ne.m(o,null),nt(o,q),e(i,C,v),dt(P,i,v),e(i,H,v),e(i,y,v),e(i,c,v),e(i,T,v),e(i,k,v),e(i,N,v),e(i,Z,v),e(i,Y,v),e(i,V,v),dt(mt,i,v),e(i,tt,v),dt(J,i,v),e(i,R,v),e(i,w,v),e(i,bt,v),e(i,X,v),e(i,st,v),dt(at,i,v),e(i,A,v),e(i,h,v),e(i,rt,v),dt(lt,i,v),e(i,Dt,v),e(i,ft,v),e(i,D,v),dt(g,i,v),e(i,ut,v),e(i,Mt,v),e(i,K,v),dt(Pt,i,v),e(i,z,v),dt(et,i,v),e(i,Nt,v),e(i,vt,v),nt(vt,pe),oe&&oe.m(vt,null),nt(vt,Ft),e(i,St,v),e(i,Ut,v),e(i,At,v),dt(Vt,i,v),e(i,Ht,v),e(i,qt,v),e(i,Zt,v),dt(Tt,i,v),e(i,yt,v),e(i,Bt,v),e(i,kt,v),dt(Yt,i,v),e(i,ct,v),dt(wt,i,v),e(i,Qt,v),dt(M,i,v),e(i,B,v),e(i,Xt,v),e(i,Jt,v),e(i,It,v),nt(It,S),Ee.m(It,null),nt(It,Q),e(i,gt,v),e(i,Wt,v),nt(Wt,we),nt(Wt,le),nt(Wt,fe),nt(Wt,xe),nt(Wt,ue),Ce&&Ce.m(Wt,null),nt(Wt,Se),e(i,te,v),Xe[Kt].m(i,v),e(i,I,v),dt(ae,i,v),e(i,Le,v),e(i,ee,v),nt(ee,pl),ve&&ve.m(ee,null),nt(ee,He),e(i,qe,v),dt(de,i,v),e(i,he,v),dt(ke,i,v),e(i,je,v),e(i,me,v),e(i,ce,v),dt(ne,i,v),e(i,ge,v),dt(be,i,v),e(i,Me,v),e(i,Ae,v),nt(Ae,x),dt(L,Ae,null),nt(Ae,Re),e(i,Ol,v),dt(We,i,v),e(i,Vl,v),dt(Fe,i,v),dt(Oe,i,v),e(i,Yl,v),dt(Ve,i,v),e(i,Ul,v),e(i,tl,v),e(i,Zl,v),e(i,el,v),e(i,Bl,v),dt(Ye,i,v),e(i,Gl,v),e(i,ll,v),e(i,Jl,v),e(i,zt,v),nt(zt,fl),nt(zt,ul),nt(zt,rl),nt(zt,ol),nt(zt,Cl),nt(zt,vl),nt(zt,$l),nt(zt,xl),nt(zt,_l),nt(zt,dl),nt(zt,hl),nt(zt,bl),nt(zt,Ml),nt(zt,ye),nt(ye,fn),nt(ye,Pl),nt(ye,un),nt(ye,Sl),nt(ye,rn),dt(Ue,ye,null),nt(ye,on),nt(zt,wl),nt(zt,kl),nt(zt,Al),nt(zt,yl),nt(zt,Tl),nt(zt,zl),nt(zt,Dl),nt(zt,ql),nt(zt,Ll),nt(zt,Hl),nt(zt,jl),nt(zt,cl),e(i,Kl,v),dt(Ze,i,v),e(i,Ql,v),dt(Be,i,v),e(i,Xl,v),e(i,nl,v),e(i,gl,v),dt(Ge,i,v),e(i,tn,v),dt(Je,i,v),e(i,en,v),dt(Ke,i,v),e(i,ln,v),e(i,Te,v),nt(Te,Cn),nt(Te,Nl),nt(Nl,nn),nt(Nl,vn),nt(Te,$n),$e&&$e.m(Te,null),nt(Te,sn),e(i,an,v),dt(Qe,i,v),Fl=!0},p(i,[v]){i[0].pluginName==="mz3d"?re||(re=bi(),re.c(),re.m(_.parentNode,_)):re&&(re.d(1),re=null),mn!==(mn=Gn(i))&&(Ne.d(1),Ne=mn(i),Ne&&(Ne.c(),Ne.m(o,q)));const il={};v&10&&(il.$$scope={dirty:v,ctx:i}),P.$set(il);const sl={};v&10&&(sl.$$scope={dirty:v,ctx:i}),mt.$set(sl);const ze={};v&8&&(ze.$$scope={dirty:v,ctx:i}),J.$set(ze);const al={};v&10&&(al.$$scope={dirty:v,ctx:i}),at.$set(al);const ml={};v&10&&(ml.$$scope={dirty:v,ctx:i}),lt.$set(ml);const Lt={};v&10&&(Lt.$$scope={dirty:v,ctx:i}),g.$set(Lt);const De={};v&10&&(De.$$scope={dirty:v,ctx:i}),Pt.$set(De);const Ie={};v&8&&(Ie.$$scope={dirty:v,ctx:i}),et.$set(Ie),i[0].premium?oe||(oe=Mi(),oe.c(),oe.m(vt,Ft)):oe&&(oe.d(1),oe=null);const El={};v&10&&(El.$$scope={dirty:v,ctx:i}),Vt.$set(El);const Xn={};v&10&&(Xn.$$scope={dirty:v,ctx:i}),Tt.$set(Xn);const gn={};v&10&&(gn.$$scope={dirty:v,ctx:i}),Yt.$set(gn);const ti={};v&10&&(ti.$$scope={dirty:v,ctx:i}),wt.$set(ti);const ei={};v&8&&(ei.$$scope={dirty:v,ctx:i}),M.$set(ei),pn!==(pn=Jn(i))&&(Ee.d(1),Ee=pn(i),Ee&&(Ee.c(),Ee.m(It,Q))),i[0].pluginName==="mz3d"?Ce||(Ce=Pi(),Ce.c(),Ce.m(Wt,Se)):Ce&&(Ce.d(1),Ce=null);let xn=Kt;Kt=Qn(i),Kt===xn?Xe[Kt].p(i,v):(Di(),ot(Xe[xn],1,1,()=>{Xe[xn]=null}),zi(),b=Xe[Kt],b?b.p(i,v):(b=Xe[Kt]=Kn[Kt](i),b.c()),Ct(b,1),b.m(I.parentNode,I));const li={};v&8&&(li.$$scope={dirty:v,ctx:i}),ae.$set(li),i[0].premium?ve||(ve=Si(),ve.c(),ve.m(ee,He)):ve&&(ve.d(1),ve=null);const ni={};v&10&&(ni.$$scope={dirty:v,ctx:i}),de.$set(ni);const ii={};v&8&&(ii.$$scope={dirty:v,ctx:i}),ke.$set(ii);const si={};v&10&&(si.$$scope={dirty:v,ctx:i}),ne.$set(si);const ai={};v&8&&(ai.$$scope={dirty:v,ctx:i}),be.$set(ai);const mi={};v&8&&(mi.$$scope={dirty:v,ctx:i}),L.$set(mi);const pi={};v&10&&(pi.$$scope={dirty:v,ctx:i}),We.$set(pi);const fi={};v&10&&(fi.$$scope={dirty:v,ctx:i}),Fe.$set(fi);const ui={};v&10&&(ui.$$scope={dirty:v,ctx:i}),Oe.$set(ui);const ri={};v&8&&(ri.$$scope={dirty:v,ctx:i}),Ve.$set(ri);const oi={};v&10&&(oi.$$scope={dirty:v,ctx:i}),Ye.$set(oi);const Ci={};v&8&&(Ci.$$scope={dirty:v,ctx:i}),Ue.$set(Ci);const vi={};v&8&&(vi.$$scope={dirty:v,ctx:i}),Ze.$set(vi);const $i={};v&8&&($i.$$scope={dirty:v,ctx:i}),Be.$set($i);const xi={};v&10&&(xi.$$scope={dirty:v,ctx:i}),Ge.$set(xi);const _i={};v&11&&(_i.$$scope={dirty:v,ctx:i}),Je.$set(_i);const di={};v&8&&(di.$$scope={dirty:v,ctx:i}),Ke.$set(di),(!Fl||v&1)&&Wl!==(Wl=i[0].pluginName+"")&&G(nn,Wl),i[0].pluginName==="mv3d"?$e||($e=wi(),$e.c(),$e.m(Te,sn)):$e&&($e.d(1),$e=null);const hi={};v&9&&(hi.$$scope={dirty:v,ctx:i}),Qe.$set(hi)},i(i){Fl||(Ct(s.$$.fragment,i),Ct(P.$$.fragment,i),Ct(mt.$$.fragment,i),Ct(J.$$.fragment,i),Ct(at.$$.fragment,i),Ct(lt.$$.fragment,i),Ct(g.$$.fragment,i),Ct(Pt.$$.fragment,i),Ct(et.$$.fragment,i),Ct(Vt.$$.fragment,i),Ct(Tt.$$.fragment,i),Ct(Yt.$$.fragment,i),Ct(wt.$$.fragment,i),Ct(M.$$.fragment,i),Ct(b),Ct(ae.$$.fragment,i),Ct(de.$$.fragment,i),Ct(ke.$$.fragment,i),Ct(ne.$$.fragment,i),Ct(be.$$.fragment,i),Ct(L.$$.fragment,i),Ct(We.$$.fragment,i),Ct(Fe.$$.fragment,i),Ct(Oe.$$.fragment,i),Ct(Ve.$$.fragment,i),Ct(Ye.$$.fragment,i),Ct(Ue.$$.fragment,i),Ct(Ze.$$.fragment,i),Ct(Be.$$.fragment,i),Ct(Ge.$$.fragment,i),Ct(Je.$$.fragment,i),Ct(Ke.$$.fragment,i),Ct(Qe.$$.fragment,i),Fl=!0)},o(i){ot(s.$$.fragment,i),ot(P.$$.fragment,i),ot(mt.$$.fragment,i),ot(J.$$.fragment,i),ot(at.$$.fragment,i),ot(lt.$$.fragment,i),ot(g.$$.fragment,i),ot(Pt.$$.fragment,i),ot(et.$$.fragment,i),ot(Vt.$$.fragment,i),ot(Tt.$$.fragment,i),ot(Yt.$$.fragment,i),ot(wt.$$.fragment,i),ot(M.$$.fragment,i),ot(b),ot(ae.$$.fragment,i),ot(de.$$.fragment,i),ot(ke.$$.fragment,i),ot(ne.$$.fragment,i),ot(be.$$.fragment,i),ot(L.$$.fragment,i),ot(We.$$.fragment,i),ot(Fe.$$.fragment,i),ot(Oe.$$.fragment,i),ot(Ve.$$.fragment,i),ot(Ye.$$.fragment,i),ot(Ue.$$.fragment,i),ot(Ze.$$.fragment,i),ot(Be.$$.fragment,i),ot(Ge.$$.fragment,i),ot(Je.$$.fragment,i),ot(Ke.$$.fragment,i),ot(Qe.$$.fragment,i),Fl=!1},d(i){i&&(t(a),t(u),t(_),t(o),t(C),t(H),t(y),t(c),t(T),t(k),t(N),t(Z),t(Y),t(V),t(tt),t(R),t(w),t(bt),t(X),t(st),t(A),t(h),t(rt),t(Dt),t(ft),t(D),t(ut),t(Mt),t(K),t(z),t(Nt),t(vt),t(St),t(Ut),t(At),t(Ht),t(qt),t(Zt),t(yt),t(Bt),t(kt),t(ct),t(Qt),t(B),t(Xt),t(Jt),t(It),t(gt),t(Wt),t(te),t(I),t(Le),t(ee),t(qe),t(he),t(je),t(me),t(ce),t(ge),t(Me),t(Ae),t(Ol),t(Vl),t(Yl),t(Ul),t(tl),t(Zl),t(el),t(Bl),t(Gl),t(ll),t(Jl),t(zt),t(Kl),t(Ql),t(Xl),t(nl),t(gl),t(tn),t(en),t(ln),t(Te),t(an)),ht(s,i),re&&re.d(i),Ne.d(),ht(P,i),ht(mt,i),ht(J,i),ht(at,i),ht(lt,i),ht(g,i),ht(Pt,i),ht(et,i),oe&&oe.d(),ht(Vt,i),ht(Tt,i),ht(Yt,i),ht(wt,i),ht(M,i),Ee.d(),Ce&&Ce.d(),Xe[Kt].d(i),ht(ae,i),ve&&ve.d(),ht(de,i),ht(ke,i),ht(ne,i),ht(be,i),ht(L),ht(We,i),ht(Fe,i),ht(Oe,i),ht(Ve,i),ht(Ye,i),ht(Ue),ht(Ze,i),ht(Be,i),ht(Ge,i),ht(Je,i),ht(Ke,i),$e&&$e.d(),ht(Qe,i)}}}function zs(m,a,s){let{data:u}=a;const _=u.premium;let o;return m.$$set=$=>{"data"in $&&s(0,u=$.data)},m.$$.update=()=>{m.$$.dirty&1&&s(1,o=u.pluginName==="mv3d"?"mv3d ":"")},[u,o,_]}class Es extends yi{constructor(a){super(),Ti(this,a,zs,Ts,ki,{data:0})}}export{Es as component};
