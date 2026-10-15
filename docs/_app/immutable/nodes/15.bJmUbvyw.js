import{s as ki,n as Ai}from"../chunks/scheduler.Cdu_wsp_.js";import{S as yi,i as Ti,t as l,c as rt,k as p,a as n,b as _t,l as f,o as _e,g as t,n as o,d as e,m as dt,p as nt,f as Ct,u as zi,e as vt,s as G,h as ht,q as d,v as Di}from"../chunks/index.gwBTkKco.js";import{A as Pe}from"../chunks/Anchor.Ct3bDT7x.js";import{C as Ot}from"../chunks/Code.j1pNgbFo.js";import{L as qi}from"../chunks/Link.DqQNm6cE.js";import{P as Li}from"../chunks/PageTitle.BTvWZLGY.js";import{V as Il}from"../chunks/Version.B286Izlg.js";function bi(m){let a,s=`
    RPG Maker MZ adds a new UI for plugin commands. MV3D-style plugin commands can still be used using the &quot;Legacy Command&quot; plugin command.
    With a few exceptions, the commands are largely the same as in MV3D. The main difference is that the <code>mv3d</code> prefix is omitted.
    <br/>Most of the information on this page assumes you are using the legacy command format.
`;return{c(){a=p("p"),a.innerHTML=s},l(u){a=f(u,"P",{"data-svelte-h":!0}),o(a)!=="svelte-vk5lji"&&(a.innerHTML=s)},m(u,_){e(u,a,_)},d(u){u&&t(a)}}}function Hi(m){let a;return{c(){a=l("The target string should be provided as the first word in the command.")},l(s){a=n(s,"The target string should be provided as the first word in the command.")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ji(m){let a;return{c(){a=l('The target string should be placed directly after the "mv3d" prefix as the second word in the command.')},l(s){a=n(s,'The target string should be placed directly after the "mv3d" prefix as the second word in the command.')},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ci(m){let a,s;return{c(){a=l(m[1]),s=l("@target rest of the command")},l(u){a=n(u,m[1]),s=n(u,"@target rest of the command")},m(u,_){e(u,a,_),e(u,s,_)},p(u,_){_&2&&G(a,u[1])},d(u){u&&(t(a),t(s))}}}function Ni(m){let a,s;return{c(){a=l(m[1]),s=l("camera yaw +45")},l(u){a=n(u,m[1]),s=n(u,"camera yaw +45")},m(u,_){e(u,a,_),e(u,s,_)},p(u,_){_&2&&G(a,u[1])},d(u){u&&(t(a),t(s))}}}function Ei(m){let a;return{c(){a=l("Camera Commands")},l(s){a=n(s,"Camera Commands")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ii(m){let a,s,u="camera",_,C,x="n",q,v,P="t",H,y,j,c="camera",T,W,k="n",N,F,Z="t",Y,O,V,mt="camera",tt,J,R="n",w,U,bt="t",X,xt,st,at="camera",A,h,it="n",ot,lt,Dt="t",ft,pt,D,g="camera",ut,Mt,E="n",K,Pt,z="t",et,Nt,$t,pe="camera",Ft,St,Ut="n",Et,At,Vt="t",Ht,qt,jt,Zt="camera",Tt,yt,Bt="x",Rt,kt,Yt="y",ct,wt,Qt="t";return{c(){a=l(m[1]),s=p("span"),s.textContent=u,_=l(" pitch "),C=p("samp"),C.textContent=x,q=l(" "),v=p("samp"),v.textContent=P,H=l(`
`),y=l(m[1]),j=p("span"),j.textContent=c,T=l(" yaw "),W=p("samp"),W.textContent=k,N=l(" "),F=p("samp"),F.textContent=Z,Y=l(`
`),O=l(m[1]),V=p("span"),V.textContent=mt,tt=l(" roll "),J=p("samp"),J.textContent=R,w=l(" "),U=p("samp"),U.textContent=bt,X=l(`
`),xt=l(m[1]),st=p("span"),st.textContent=at,A=l(" dist "),h=p("samp"),h.textContent=it,ot=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(`
`),pt=l(m[1]),D=p("span"),D.textContent=g,ut=l(" height "),Mt=p("samp"),Mt.textContent=E,K=l(" "),Pt=p("samp"),Pt.textContent=z,et=l(`
`),Nt=l(m[1]),$t=p("span"),$t.textContent=pe,Ft=l(" zoom "),St=p("samp"),St.textContent=Ut,Et=l(" "),At=p("samp"),At.textContent=Vt,Ht=l(`
`),qt=l(m[1]),jt=p("span"),jt.textContent=Zt,Tt=l(" pan "),yt=p("samp"),yt.textContent=Bt,Rt=l(" "),kt=p("samp"),kt.textContent=Yt,ct=l(" "),wt=p("samp"),wt.textContent=Qt,this.h()},l(M){a=n(M,m[1]),s=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-133tnn0"&&(s.textContent=u),_=n(M," pitch "),C=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(C)!=="svelte-11z14xk"&&(C.textContent=x),q=n(M," "),v=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(v)!=="svelte-n2z30q"&&(v.textContent=P),H=n(M,`
`),y=n(M,m[1]),j=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o(j)!=="svelte-133tnn0"&&(j.textContent=c),T=n(M," yaw "),W=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(W)!=="svelte-11z14xk"&&(W.textContent=k),N=n(M," "),F=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(F)!=="svelte-n2z30q"&&(F.textContent=Z),Y=n(M,`
`),O=n(M,m[1]),V=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o(V)!=="svelte-133tnn0"&&(V.textContent=mt),tt=n(M," roll "),J=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(J)!=="svelte-11z14xk"&&(J.textContent=R),w=n(M," "),U=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(U)!=="svelte-n2z30q"&&(U.textContent=bt),X=n(M,`
`),xt=n(M,m[1]),st=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o(st)!=="svelte-133tnn0"&&(st.textContent=at),A=n(M," dist "),h=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(h)!=="svelte-11z14xk"&&(h.textContent=it),ot=n(M," "),lt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(lt)!=="svelte-n2z30q"&&(lt.textContent=Dt),ft=n(M,`
`),pt=n(M,m[1]),D=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o(D)!=="svelte-133tnn0"&&(D.textContent=g),ut=n(M," height "),Mt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(Mt)!=="svelte-11z14xk"&&(Mt.textContent=E),K=n(M," "),Pt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(Pt)!=="svelte-n2z30q"&&(Pt.textContent=z),et=n(M,`
`),Nt=n(M,m[1]),$t=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o($t)!=="svelte-133tnn0"&&($t.textContent=pe),Ft=n(M," zoom "),St=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(St)!=="svelte-11z14xk"&&(St.textContent=Ut),Et=n(M," "),At=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(At)!=="svelte-n2z30q"&&(At.textContent=Vt),Ht=n(M,`
`),qt=n(M,m[1]),jt=f(M,"SPAN",{title:!0,"data-svelte-h":!0}),o(jt)!=="svelte-133tnn0"&&(jt.textContent=Zt),Tt=n(M," pan "),yt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(yt)!=="svelte-p3ccxq"&&(yt.textContent=Bt),Rt=n(M," "),kt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(kt)!=="svelte-eyvwfd"&&(kt.textContent=Yt),ct=n(M," "),wt=f(M,"SAMP",{title:!0,"data-svelte-h":!0}),o(wt)!=="svelte-n2z30q"&&(wt.textContent=Qt),this.h()},h(){d(s,"title","optional word"),d(C,"title","number"),d(v,"title","time"),d(j,"title","optional word"),d(W,"title","number"),d(F,"title","time"),d(V,"title","optional word"),d(J,"title","number"),d(U,"title","time"),d(st,"title","optional word"),d(h,"title","number"),d(lt,"title","time"),d(D,"title","optional word"),d(Mt,"title","number"),d(Pt,"title","time"),d($t,"title","optional word"),d(St,"title","number"),d(At,"title","time"),d(jt,"title","optional word"),d(yt,"title","number"),d(kt,"title","number"),d(wt,"title","time")},m(M,B){e(M,a,B),e(M,s,B),e(M,_,B),e(M,C,B),e(M,q,B),e(M,v,B),e(M,H,B),e(M,y,B),e(M,j,B),e(M,T,B),e(M,W,B),e(M,N,B),e(M,F,B),e(M,Y,B),e(M,O,B),e(M,V,B),e(M,tt,B),e(M,J,B),e(M,w,B),e(M,U,B),e(M,X,B),e(M,xt,B),e(M,st,B),e(M,A,B),e(M,h,B),e(M,ot,B),e(M,lt,B),e(M,ft,B),e(M,pt,B),e(M,D,B),e(M,ut,B),e(M,Mt,B),e(M,K,B),e(M,Pt,B),e(M,et,B),e(M,Nt,B),e(M,$t,B),e(M,Ft,B),e(M,St,B),e(M,Et,B),e(M,At,B),e(M,Ht,B),e(M,qt,B),e(M,jt,B),e(M,Tt,B),e(M,yt,B),e(M,Rt,B),e(M,kt,B),e(M,ct,B),e(M,wt,B)},p(M,B){B&2&&G(a,M[1]),B&2&&G(y,M[1]),B&2&&G(O,M[1]),B&2&&G(xt,M[1]),B&2&&G(pt,M[1]),B&2&&G(Nt,M[1]),B&2&&G(qt,M[1])},d(M){M&&(t(a),t(s),t(_),t(C),t(q),t(v),t(H),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(V),t(tt),t(J),t(w),t(U),t(X),t(xt),t(st),t(A),t(h),t(ot),t(lt),t(ft),t(pt),t(D),t(ut),t(Mt),t(K),t(Pt),t(et),t(Nt),t($t),t(Ft),t(St),t(Et),t(At),t(Ht),t(qt),t(jt),t(Tt),t(yt),t(Rt),t(kt),t(ct),t(wt))}}}function Ri(m){let a,s,u,_="@t",C,x,q="t";return{c(){a=l(m[1]),s=l("camera target "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q,this.h()},l(v){a=n(v,m[1]),s=n(v,"camera target "),u=f(v,"SAMP",{title:!0,"data-svelte-h":!0}),o(u)!=="svelte-vygyen"&&(u.textContent=_),C=n(v," "),x=f(v,"SAMP",{title:!0,"data-svelte-h":!0}),o(x)!=="svelte-n2z30q"&&(x.textContent=q),this.h()},h(){d(u,"title","target string"),d(x,"title","time")},m(v,P){e(v,a,P),e(v,s,P),e(v,u,P),e(v,C,P),e(v,x,P)},p(v,P){P&2&&G(a,v[1])},d(v){v&&(t(a),t(s),t(u),t(C),t(x))}}}function Wi(m){let a,s,u,_="@t",C,x,q="t",v,P,H,y,j="@t",c,T,W="t",k,N,F,Z,Y="@t",O,V,mt="t",tt,J,R;return{c(){a=l(m[1]),s=l("camera track "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q,v=l(`
`),P=l(m[1]),H=l("camera track pitch "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,k=l(`
`),N=l(m[1]),F=l("camera track yaw "),Z=p("samp"),Z.textContent=Y,O=l(" "),V=p("samp"),V.textContent=mt,tt=l(`
`),J=l(m[1]),R=l("camera track off"),this.h()},l(w){a=n(w,m[1]),s=n(w,"camera track "),u=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),o(u)!=="svelte-vygyen"&&(u.textContent=_),C=n(w," "),x=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),o(x)!=="svelte-n2z30q"&&(x.textContent=q),v=n(w,`
`),P=n(w,m[1]),H=n(w,"camera track pitch "),y=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),o(y)!=="svelte-vygyen"&&(y.textContent=j),c=n(w," "),T=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),o(T)!=="svelte-n2z30q"&&(T.textContent=W),k=n(w,`
`),N=n(w,m[1]),F=n(w,"camera track yaw "),Z=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),o(Z)!=="svelte-vygyen"&&(Z.textContent=Y),O=n(w," "),V=f(w,"SAMP",{title:!0,"data-svelte-h":!0}),o(V)!=="svelte-n2z30q"&&(V.textContent=mt),tt=n(w,`
`),J=n(w,m[1]),R=n(w,"camera track off"),this.h()},h(){d(u,"title","target string"),d(x,"title","time"),d(y,"title","target string"),d(T,"title","time"),d(Z,"title","target string"),d(V,"title","time")},m(w,U){e(w,a,U),e(w,s,U),e(w,u,U),e(w,C,U),e(w,x,U),e(w,v,U),e(w,P,U),e(w,H,U),e(w,y,U),e(w,c,U),e(w,T,U),e(w,k,U),e(w,N,U),e(w,F,U),e(w,Z,U),e(w,O,U),e(w,V,U),e(w,tt,U),e(w,J,U),e(w,R,U)},p(w,U){U&2&&G(a,w[1]),U&2&&G(P,w[1]),U&2&&G(N,w[1]),U&2&&G(J,w[1])},d(w){w&&(t(a),t(s),t(u),t(C),t(x),t(v),t(P),t(H),t(y),t(c),t(T),t(k),t(N),t(F),t(Z),t(O),t(V),t(tt),t(J),t(R))}}}function Fi(m){let a,s,u,_="p/o/2d";return{c(){a=l(m[1]),s=l("camera mode "),u=p("samp"),u.textContent=_,this.h()},l(C){a=n(C,m[1]),s=n(C,"camera mode "),u=f(C,"SAMP",{title:!0,"data-svelte-h":!0}),o(u)!=="svelte-1osurfq"&&(u.textContent=_),this.h()},h(){d(u,"title","PERSPECTIVE or ORTHOGRAPHIC or 2D")},m(C,x){e(C,a,x),e(C,s,x),e(C,u,x)},p(C,x){x&2&&G(a,C[1])},d(C){C&&(t(a),t(s),t(u))}}}function Oi(m){let a;return{c(){a=l("Light Commands")},l(s){a=n(s,"Light Commands")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Mi(m){let a;return{c(){a=l("When combined with a sunlight source, the ambient light will appear to be the color in shadowed areas.")},l(s){a=n(s,"When combined with a sunlight source, the ambient light will appear to be the color in shadowed areas.")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Vi(m){let a,s,u,_="color",C,x,q="t",v,P,H,y,j="color",c,T,W="t";return{c(){a=l(m[1]),s=l("light "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q,v=l(`
`),P=l(m[1]),H=l("ambient "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,this.h()},l(k){a=n(k,m[1]),s=n(k,"light "),u=f(k,"SAMP",{"data-svelte-h":!0}),o(u)!=="svelte-168vm1j"&&(u.textContent=_),C=n(k," "),x=f(k,"SAMP",{title:!0,"data-svelte-h":!0}),o(x)!=="svelte-n2z30q"&&(x.textContent=q),v=n(k,`
`),P=n(k,m[1]),H=n(k,"ambient "),y=f(k,"SAMP",{"data-svelte-h":!0}),o(y)!=="svelte-168vm1j"&&(y.textContent=j),c=n(k," "),T=f(k,"SAMP",{title:!0,"data-svelte-h":!0}),o(T)!=="svelte-n2z30q"&&(T.textContent=W),this.h()},h(){d(x,"title","time"),d(T,"title","time")},m(k,N){e(k,a,N),e(k,s,N),e(k,u,N),e(k,C,N),e(k,x,N),e(k,v,N),e(k,P,N),e(k,H,N),e(k,y,N),e(k,c,N),e(k,T,N)},p(k,N){N&2&&G(a,k[1]),N&2&&G(P,k[1])},d(k){k&&(t(a),t(s),t(u),t(C),t(x),t(v),t(P),t(H),t(y),t(c),t(T))}}}function Yi(m){let a,s,u="@t",_,C,x="color",q,v,P="t",H,y,j,c="@t",T,W,k="n",N,F,Z="t",Y,O,V,mt="@t",tt,J,R="n",w,U,bt="t",X,xt,st,at="@t",A,h,it="color",ot,lt,Dt="intensity",ft,pt,D="dist",g,ut,Mt="t";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" lamp color "),C=p("samp"),C.textContent=x,q=l(" "),v=p("samp"),v.textContent=P,H=l(`
`),y=l(m[1]),j=p("samp"),j.textContent=c,T=l(" lamp intensity "),W=p("samp"),W.textContent=k,N=l(" "),F=p("samp"),F.textContent=Z,Y=l(`
`),O=l(m[1]),V=p("samp"),V.textContent=mt,tt=l(" lamp dist "),J=p("samp"),J.textContent=R,w=l(" "),U=p("samp"),U.textContent=bt,X=l(`
`),xt=l(m[1]),st=p("samp"),st.textContent=at,A=l(" lamp "),h=p("samp"),h.textContent=it,ot=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(" "),pt=p("samp"),pt.textContent=D,g=l(" "),ut=p("samp"),ut.textContent=Mt,this.h()},l(E){a=n(E,m[1]),s=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(E," lamp color "),C=f(E,"SAMP",{"data-svelte-h":!0}),o(C)!=="svelte-168vm1j"&&(C.textContent=x),q=n(E," "),v=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(v)!=="svelte-n2z30q"&&(v.textContent=P),H=n(E,`
`),y=n(E,m[1]),j=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(j)!=="svelte-vygyen"&&(j.textContent=c),T=n(E," lamp intensity "),W=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(W)!=="svelte-11z14xk"&&(W.textContent=k),N=n(E," "),F=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(F)!=="svelte-n2z30q"&&(F.textContent=Z),Y=n(E,`
`),O=n(E,m[1]),V=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(V)!=="svelte-vygyen"&&(V.textContent=mt),tt=n(E," lamp dist "),J=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(J)!=="svelte-11z14xk"&&(J.textContent=R),w=n(E," "),U=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(U)!=="svelte-n2z30q"&&(U.textContent=bt),X=n(E,`
`),xt=n(E,m[1]),st=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(st)!=="svelte-vygyen"&&(st.textContent=at),A=n(E," lamp "),h=f(E,"SAMP",{"data-svelte-h":!0}),o(h)!=="svelte-168vm1j"&&(h.textContent=it),ot=n(E," "),lt=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(lt)!=="svelte-103h9bj"&&(lt.textContent=Dt),ft=n(E," "),pt=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(pt)!=="svelte-15cdrwg"&&(pt.textContent=D),g=n(E," "),ut=f(E,"SAMP",{title:!0,"data-svelte-h":!0}),o(ut)!=="svelte-n2z30q"&&(ut.textContent=Mt),this.h()},h(){d(s,"title","target string"),d(v,"title","time"),d(j,"title","target string"),d(W,"title","number"),d(F,"title","time"),d(V,"title","target string"),d(J,"title","number"),d(U,"title","time"),d(st,"title","target string"),d(lt,"title","number"),d(pt,"title","number"),d(ut,"title","time")},m(E,K){e(E,a,K),e(E,s,K),e(E,_,K),e(E,C,K),e(E,q,K),e(E,v,K),e(E,H,K),e(E,y,K),e(E,j,K),e(E,T,K),e(E,W,K),e(E,N,K),e(E,F,K),e(E,Y,K),e(E,O,K),e(E,V,K),e(E,tt,K),e(E,J,K),e(E,w,K),e(E,U,K),e(E,X,K),e(E,xt,K),e(E,st,K),e(E,A,K),e(E,h,K),e(E,ot,K),e(E,lt,K),e(E,ft,K),e(E,pt,K),e(E,g,K),e(E,ut,K)},p(E,K){K&2&&G(a,E[1]),K&2&&G(y,E[1]),K&2&&G(O,E[1]),K&2&&G(xt,E[1])},d(E){E&&(t(a),t(s),t(_),t(C),t(q),t(v),t(H),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(V),t(tt),t(J),t(w),t(U),t(X),t(xt),t(st),t(A),t(h),t(ot),t(lt),t(ft),t(pt),t(g),t(ut))}}}function Ui(m){let a,s,u="@t",_,C,x="color",q,v,P="t",H,y,j,c="@t",T,W,k="n",N,F,Z="t",Y,O,V,mt="@t",tt,J,R="n",w,U,bt="t",X,xt,st,at="@t",A,h,it="n",ot,lt,Dt="t",ft,pt,D,g="@t",ut,Mt,E="n",K,Pt,z="t",et,Nt,$t,pe="@t",Ft,St,Ut="n",Et,At,Vt="t",Ht,qt,jt,Zt="@t",Tt,yt,Bt="color",Rt,kt,Yt="intensity",ct,wt,Qt="dist",M,B,Xt="angle",Gt,Jt,It="t";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" flashlight color "),C=p("samp"),C.textContent=x,q=l(" "),v=p("samp"),v.textContent=P,H=l(`
`),y=l(m[1]),j=p("samp"),j.textContent=c,T=l(" flashlight intensity "),W=p("samp"),W.textContent=k,N=l(" "),F=p("samp"),F.textContent=Z,Y=l(`
`),O=l(m[1]),V=p("samp"),V.textContent=mt,tt=l(" flashlight dist "),J=p("samp"),J.textContent=R,w=l(" "),U=p("samp"),U.textContent=bt,X=l(`
`),xt=l(m[1]),st=p("samp"),st.textContent=at,A=l(" flashlight angle "),h=p("samp"),h.textContent=it,ot=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(`
`),pt=l(m[1]),D=p("samp"),D.textContent=g,ut=l(" flashlight pitch "),Mt=p("samp"),Mt.textContent=E,K=l(" "),Pt=p("samp"),Pt.textContent=z,et=l(`
`),Nt=l(m[1]),$t=p("samp"),$t.textContent=pe,Ft=l(" flashlight yaw "),St=p("samp"),St.textContent=Ut,Et=l(" "),At=p("samp"),At.textContent=Vt,Ht=l(`
`),qt=l(m[1]),jt=p("samp"),jt.textContent=Zt,Tt=l(" flashlight "),yt=p("samp"),yt.textContent=Bt,Rt=l(" "),kt=p("samp"),kt.textContent=Yt,ct=l(" "),wt=p("samp"),wt.textContent=Qt,M=l(" "),B=p("samp"),B.textContent=Xt,Gt=l(" "),Jt=p("samp"),Jt.textContent=It,this.h()},l(S){a=n(S,m[1]),s=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(S," flashlight color "),C=f(S,"SAMP",{"data-svelte-h":!0}),o(C)!=="svelte-168vm1j"&&(C.textContent=x),q=n(S," "),v=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(v)!=="svelte-n2z30q"&&(v.textContent=P),H=n(S,`
`),y=n(S,m[1]),j=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(j)!=="svelte-vygyen"&&(j.textContent=c),T=n(S," flashlight intensity "),W=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(W)!=="svelte-11z14xk"&&(W.textContent=k),N=n(S," "),F=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(F)!=="svelte-n2z30q"&&(F.textContent=Z),Y=n(S,`
`),O=n(S,m[1]),V=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(V)!=="svelte-vygyen"&&(V.textContent=mt),tt=n(S," flashlight dist "),J=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(J)!=="svelte-11z14xk"&&(J.textContent=R),w=n(S," "),U=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(U)!=="svelte-n2z30q"&&(U.textContent=bt),X=n(S,`
`),xt=n(S,m[1]),st=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(st)!=="svelte-vygyen"&&(st.textContent=at),A=n(S," flashlight angle "),h=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(h)!=="svelte-11z14xk"&&(h.textContent=it),ot=n(S," "),lt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(lt)!=="svelte-n2z30q"&&(lt.textContent=Dt),ft=n(S,`
`),pt=n(S,m[1]),D=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(D)!=="svelte-vygyen"&&(D.textContent=g),ut=n(S," flashlight pitch "),Mt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(Mt)!=="svelte-11z14xk"&&(Mt.textContent=E),K=n(S," "),Pt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(Pt)!=="svelte-n2z30q"&&(Pt.textContent=z),et=n(S,`
`),Nt=n(S,m[1]),$t=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o($t)!=="svelte-vygyen"&&($t.textContent=pe),Ft=n(S," flashlight yaw "),St=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(St)!=="svelte-11z14xk"&&(St.textContent=Ut),Et=n(S," "),At=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(At)!=="svelte-n2z30q"&&(At.textContent=Vt),Ht=n(S,`
`),qt=n(S,m[1]),jt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(jt)!=="svelte-vygyen"&&(jt.textContent=Zt),Tt=n(S," flashlight "),yt=f(S,"SAMP",{"data-svelte-h":!0}),o(yt)!=="svelte-168vm1j"&&(yt.textContent=Bt),Rt=n(S," "),kt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(kt)!=="svelte-103h9bj"&&(kt.textContent=Yt),ct=n(S," "),wt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(wt)!=="svelte-15cdrwg"&&(wt.textContent=Qt),M=n(S," "),B=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(B)!=="svelte-jlbei9"&&(B.textContent=Xt),Gt=n(S," "),Jt=f(S,"SAMP",{title:!0,"data-svelte-h":!0}),o(Jt)!=="svelte-n2z30q"&&(Jt.textContent=It),this.h()},h(){d(s,"title","target string"),d(v,"title","time"),d(j,"title","target string"),d(W,"title","number"),d(F,"title","time"),d(V,"title","target string"),d(J,"title","number"),d(U,"title","time"),d(st,"title","target string"),d(h,"title","number"),d(lt,"title","time"),d(D,"title","target string"),d(Mt,"title","number"),d(Pt,"title","time"),d($t,"title","target string"),d(St,"title","number"),d(At,"title","time"),d(jt,"title","target string"),d(kt,"title","number"),d(wt,"title","number"),d(B,"title","number"),d(Jt,"title","time")},m(S,Q){e(S,a,Q),e(S,s,Q),e(S,_,Q),e(S,C,Q),e(S,q,Q),e(S,v,Q),e(S,H,Q),e(S,y,Q),e(S,j,Q),e(S,T,Q),e(S,W,Q),e(S,N,Q),e(S,F,Q),e(S,Y,Q),e(S,O,Q),e(S,V,Q),e(S,tt,Q),e(S,J,Q),e(S,w,Q),e(S,U,Q),e(S,X,Q),e(S,xt,Q),e(S,st,Q),e(S,A,Q),e(S,h,Q),e(S,ot,Q),e(S,lt,Q),e(S,ft,Q),e(S,pt,Q),e(S,D,Q),e(S,ut,Q),e(S,Mt,Q),e(S,K,Q),e(S,Pt,Q),e(S,et,Q),e(S,Nt,Q),e(S,$t,Q),e(S,Ft,Q),e(S,St,Q),e(S,Et,Q),e(S,At,Q),e(S,Ht,Q),e(S,qt,Q),e(S,jt,Q),e(S,Tt,Q),e(S,yt,Q),e(S,Rt,Q),e(S,kt,Q),e(S,ct,Q),e(S,wt,Q),e(S,M,Q),e(S,B,Q),e(S,Gt,Q),e(S,Jt,Q)},p(S,Q){Q&2&&G(a,S[1]),Q&2&&G(y,S[1]),Q&2&&G(O,S[1]),Q&2&&G(xt,S[1]),Q&2&&G(pt,S[1]),Q&2&&G(Nt,S[1]),Q&2&&G(qt,S[1])},d(S){S&&(t(a),t(s),t(_),t(C),t(q),t(v),t(H),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(V),t(tt),t(J),t(w),t(U),t(X),t(xt),t(st),t(A),t(h),t(ot),t(lt),t(ft),t(pt),t(D),t(ut),t(Mt),t(K),t(Pt),t(et),t(Nt),t($t),t(Ft),t(St),t(Et),t(At),t(Ht),t(qt),t(jt),t(Tt),t(yt),t(Rt),t(kt),t(ct),t(wt),t(M),t(B),t(Gt),t(Jt))}}}function Zi(m){let a,s,u,_="color",C,x,q="t",v,P,H,y,j="n",c,T,W="t",k,N,F,Z,Y="n",O,V,mt="t",tt,J,R,w,U="yaw",bt,X,xt="pitch",st,at,A="t";return{c(){a=l(m[1]),s=l("sun color "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q,v=l(`
`),P=l(m[1]),H=l("sun yaw "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,k=l(`
`),N=l(m[1]),F=l("sun pitch "),Z=p("samp"),Z.textContent=Y,O=l(" "),V=p("samp"),V.textContent=mt,tt=l(`
`),J=l(m[1]),R=l("sun angle "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=xt,st=l(" "),at=p("samp"),at.textContent=A,this.h()},l(h){a=n(h,m[1]),s=n(h,"sun color "),u=f(h,"SAMP",{"data-svelte-h":!0}),o(u)!=="svelte-168vm1j"&&(u.textContent=_),C=n(h," "),x=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(x)!=="svelte-n2z30q"&&(x.textContent=q),v=n(h,`
`),P=n(h,m[1]),H=n(h,"sun yaw "),y=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(y)!=="svelte-11z14xk"&&(y.textContent=j),c=n(h," "),T=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(T)!=="svelte-n2z30q"&&(T.textContent=W),k=n(h,`
`),N=n(h,m[1]),F=n(h,"sun pitch "),Z=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(Z)!=="svelte-11z14xk"&&(Z.textContent=Y),O=n(h," "),V=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(V)!=="svelte-n2z30q"&&(V.textContent=mt),tt=n(h,`
`),J=n(h,m[1]),R=n(h,"sun angle "),w=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(w)!=="svelte-z540cx"&&(w.textContent=U),bt=n(h," "),X=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(X)!=="svelte-1o30zjk"&&(X.textContent=xt),st=n(h," "),at=f(h,"SAMP",{title:!0,"data-svelte-h":!0}),o(at)!=="svelte-n2z30q"&&(at.textContent=A),this.h()},h(){d(x,"title","time"),d(y,"title","number"),d(T,"title","time"),d(Z,"title","number"),d(V,"title","time"),d(w,"title","number"),d(X,"title","number"),d(at,"title","time")},m(h,it){e(h,a,it),e(h,s,it),e(h,u,it),e(h,C,it),e(h,x,it),e(h,v,it),e(h,P,it),e(h,H,it),e(h,y,it),e(h,c,it),e(h,T,it),e(h,k,it),e(h,N,it),e(h,F,it),e(h,Z,it),e(h,O,it),e(h,V,it),e(h,tt,it),e(h,J,it),e(h,R,it),e(h,w,it),e(h,bt,it),e(h,X,it),e(h,st,it),e(h,at,it)},p(h,it){it&2&&G(a,h[1]),it&2&&G(P,h[1]),it&2&&G(N,h[1]),it&2&&G(J,h[1])},d(h){h&&(t(a),t(s),t(u),t(C),t(x),t(v),t(P),t(H),t(y),t(c),t(T),t(k),t(N),t(F),t(Z),t(O),t(V),t(tt),t(J),t(R),t(w),t(bt),t(X),t(st),t(at))}}}function Bi(m){let a,s,u=`
        The Sun commands set up a directional light to act as a sunlight source and changes properties of that light. The sun will create dynamic shadows.
    `,_,C,x,q;return C=new Ot({props:{$$slots:{default:[Zi]},$$scope:{ctx:m}}}),{c(){a=l(`
    `),s=p("p"),s.textContent=u,_=l(`
    
`),rt(C.$$.fragment),x=l(`
    
`)},l(v){a=n(v,`
    `),s=f(v,"P",{"data-svelte-h":!0}),o(s)!=="svelte-ncm4ei"&&(s.textContent=u),_=n(v,`
    
`),_t(C.$$.fragment,v),x=n(v,`
    
`)},m(v,P){e(v,a,P),e(v,s,P),e(v,_,P),dt(C,v,P),e(v,x,P),q=!0},p(v,P){const H={};P&10&&(H.$$scope={dirty:P,ctx:v}),C.$set(H)},i(v){q||(vt(C.$$.fragment,v),q=!0)},o(v){Ct(C.$$.fragment,v),q=!1},d(v){v&&(t(a),t(s),t(_),t(x)),ht(C,v)}}}function Gi(m){let a;return{c(){a=l("Animation Command")},l(s){a=n(s,"Animation Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ji(m){let a;return{c(){a=l("Additional parameters can also be provided at the end of the command.")},l(s){a=n(s,"Additional parameters can also be provided at the end of the command.")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ki(m){let a;return{c(){a=l(`Due to the new animation system in RPG Maker MZ, the animation command is slightly different in MZ3D.
        In addition to the depth and scale parameters supported by MV3D, MZ3D also supports the rot and height parameters.`)},l(s){a=n(s,`Due to the new animation system in RPG Maker MZ, the animation command is slightly different in MZ3D.
        In addition to the depth and scale parameters supported by MV3D, MZ3D also supports the rot and height parameters.`)},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Pi(m){let a,s="Rot is the rotation of the animation in degrees.",u,_,C="Height is a height offset for the animation's position.";return{c(){a=p("li"),a.textContent=s,u=l(`
    `),_=p("li"),_.textContent=C},l(x){a=f(x,"LI",{"data-svelte-h":!0}),o(a)!=="svelte-1qbv15q"&&(a.textContent=s),u=n(x,`
    `),_=f(x,"LI",{"data-svelte-h":!0}),o(_)!=="svelte-19ht2v"&&(_.textContent=C)},m(x,q){e(x,a,q),e(x,u,q),e(x,_,q)},d(x){x&&(t(a),t(u),t(_))}}}function Qi(m){let a,s;return a=new Ot({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),{c(){rt(a.$$.fragment)},l(u){_t(a.$$.fragment,u)},m(u,_){dt(a,u,_),s=!0},p(u,_){const C={};_&10&&(C.$$scope={dirty:_,ctx:u}),a.$set(C)},i(u){s||(vt(a.$$.fragment,u),s=!0)},o(u){Ct(a.$$.fragment,u),s=!1},d(u){ht(a,u)}}}function Xi(m){let a,s;return a=new Ot({props:{$$slots:{default:[ts]},$$scope:{ctx:m}}}),{c(){rt(a.$$.fragment)},l(u){_t(a.$$.fragment,u)},m(u,_){dt(a,u,_),s=!0},p(u,_){const C={};_&10&&(C.$$scope={dirty:_,ctx:u}),a.$set(C)},i(u){s||(vt(a.$$.fragment,u),s=!0)},o(u){Ct(a.$$.fragment,u),s=!1},d(u){ht(a,u)}}}function gi(m){let a,s,u="@t",_,C,x="id",q,v,P,H="@t",y,j,c="id",T,W,k="true/false",N,F,Z="n";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" animation "),C=p("samp"),C.textContent=x,q=l(`
`),v=l(m[1]),P=p("samp"),P.textContent=H,y=l(" animation "),j=p("samp"),j.textContent=c,T=l(" depth "),W=p("samp"),W.textContent=k,N=l(" scale "),F=p("samp"),F.textContent=Z,this.h()},l(Y){a=n(Y,m[1]),s=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(Y," animation "),C=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),o(C)!=="svelte-19gu8vr"&&(C.textContent=x),q=n(Y,`
`),v=n(Y,m[1]),P=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),o(P)!=="svelte-vygyen"&&(P.textContent=H),y=n(Y," animation "),j=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),o(j)!=="svelte-19gu8vr"&&(j.textContent=c),T=n(Y," depth "),W=f(Y,"SAMP",{"data-svelte-h":!0}),o(W)!=="svelte-17yyxv0"&&(W.textContent=k),N=n(Y," scale "),F=f(Y,"SAMP",{title:!0,"data-svelte-h":!0}),o(F)!=="svelte-11z14xk"&&(F.textContent=Z),this.h()},h(){d(s,"title","target string"),d(C,"title","number"),d(P,"title","target string"),d(j,"title","number"),d(F,"title","number")},m(Y,O){e(Y,a,O),e(Y,s,O),e(Y,_,O),e(Y,C,O),e(Y,q,O),e(Y,v,O),e(Y,P,O),e(Y,y,O),e(Y,j,O),e(Y,T,O),e(Y,W,O),e(Y,N,O),e(Y,F,O)},p(Y,O){O&2&&G(a,Y[1]),O&2&&G(v,Y[1])},d(Y){Y&&(t(a),t(s),t(_),t(C),t(q),t(v),t(P),t(y),t(j),t(T),t(W),t(N),t(F))}}}function ts(m){let a,s,u="@t",_,C,x="id",q,v,P,H="@t",y,j,c="id",T,W,k="true/false",N,F,Z="n",Y,O,V="n",mt,tt,J="n";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" animation "),C=p("samp"),C.textContent=x,q=l(`
`),v=l(m[1]),P=p("samp"),P.textContent=H,y=l(" animation "),j=p("samp"),j.textContent=c,T=l(" depth "),W=p("samp"),W.textContent=k,N=l(" scale "),F=p("samp"),F.textContent=Z,Y=l(" rot "),O=p("samp"),O.textContent=V,mt=l(" height "),tt=p("samp"),tt.textContent=J,this.h()},l(R){a=n(R,m[1]),s=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(R," animation "),C=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(C)!=="svelte-19gu8vr"&&(C.textContent=x),q=n(R,`
`),v=n(R,m[1]),P=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(P)!=="svelte-vygyen"&&(P.textContent=H),y=n(R," animation "),j=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(j)!=="svelte-19gu8vr"&&(j.textContent=c),T=n(R," depth "),W=f(R,"SAMP",{"data-svelte-h":!0}),o(W)!=="svelte-17yyxv0"&&(W.textContent=k),N=n(R," scale "),F=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(F)!=="svelte-11z14xk"&&(F.textContent=Z),Y=n(R," rot "),O=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(O)!=="svelte-lsecsk"&&(O.textContent=V),mt=n(R," height "),tt=f(R,"SAMP",{title:!0,"data-svelte-h":!0}),o(tt)!=="svelte-11z14xk"&&(tt.textContent=J),this.h()},h(){d(s,"title","target string"),d(C,"title","number"),d(P,"title","target string"),d(j,"title","number"),d(F,"title","number"),d(O,"title","number (degrees)"),d(tt,"title","number")},m(R,w){e(R,a,w),e(R,s,w),e(R,_,w),e(R,C,w),e(R,q,w),e(R,v,w),e(R,P,w),e(R,y,w),e(R,j,w),e(R,T,w),e(R,W,w),e(R,N,w),e(R,F,w),e(R,Y,w),e(R,O,w),e(R,mt,w),e(R,tt,w)},p(R,w){w&2&&G(a,R[1]),w&2&&G(v,R[1])},d(R){R&&(t(a),t(s),t(_),t(C),t(q),t(v),t(P),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(O),t(mt),t(tt))}}}function es(m){let a;return{c(){a=l("Fog Command")},l(s){a=n(s,"Fog Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Si(m){let a,s,u="Set Command",_;return{c(){a=l("To control the alpha fog, see the "),s=p("a"),s.textContent=u,_=l("."),this.h()},l(C){a=n(C,"To control the alpha fog, see the "),s=f(C,"A",{href:!0,"data-svelte-h":!0}),o(s)!=="svelte-e8u5ae"&&(s.textContent=u),_=n(C,"."),this.h()},h(){d(s,"href","#set")},m(C,x){e(C,a,x),e(C,s,x),e(C,_,x)},d(C){C&&(t(a),t(s),t(_))}}}function ls(m){let a,s,u,_="color",C,x,q="t",v,P,H,y,j="n",c,T,W="t",k,N,F,Z,Y="n",O,V,mt="t",tt,J,R,w,U="near",bt,X,xt="far",st,at,A="t",h,it,ot,lt,Dt="color",ft,pt,D="near",g,ut,Mt="far",E,K,Pt="t";return{c(){a=l(m[1]),s=l("fog color "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q,v=l(`
`),P=l(m[1]),H=l("fog near "),y=p("samp"),y.textContent=j,c=l(" "),T=p("samp"),T.textContent=W,k=l(`
`),N=l(m[1]),F=l("fog far "),Z=p("samp"),Z.textContent=Y,O=l(" "),V=p("samp"),V.textContent=mt,tt=l(`
`),J=l(m[1]),R=l("fog dist "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=xt,st=l(" "),at=p("samp"),at.textContent=A,h=l(`
`),it=l(m[1]),ot=l("fog "),lt=p("samp"),lt.textContent=Dt,ft=l(" "),pt=p("samp"),pt.textContent=D,g=l(" "),ut=p("samp"),ut.textContent=Mt,E=l(" "),K=p("samp"),K.textContent=Pt,this.h()},l(z){a=n(z,m[1]),s=n(z,"fog color "),u=f(z,"SAMP",{"data-svelte-h":!0}),o(u)!=="svelte-168vm1j"&&(u.textContent=_),C=n(z," "),x=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(x)!=="svelte-n2z30q"&&(x.textContent=q),v=n(z,`
`),P=n(z,m[1]),H=n(z,"fog near "),y=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(y)!=="svelte-11z14xk"&&(y.textContent=j),c=n(z," "),T=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(T)!=="svelte-n2z30q"&&(T.textContent=W),k=n(z,`
`),N=n(z,m[1]),F=n(z,"fog far "),Z=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(Z)!=="svelte-11z14xk"&&(Z.textContent=Y),O=n(z," "),V=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(V)!=="svelte-n2z30q"&&(V.textContent=mt),tt=n(z,`
`),J=n(z,m[1]),R=n(z,"fog dist "),w=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(w)!=="svelte-5hdkt6"&&(w.textContent=U),bt=n(z," "),X=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(X)!=="svelte-1mgb5yz"&&(X.textContent=xt),st=n(z," "),at=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(at)!=="svelte-n2z30q"&&(at.textContent=A),h=n(z,`
`),it=n(z,m[1]),ot=n(z,"fog "),lt=f(z,"SAMP",{"data-svelte-h":!0}),o(lt)!=="svelte-168vm1j"&&(lt.textContent=Dt),ft=n(z," "),pt=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(pt)!=="svelte-5hdkt6"&&(pt.textContent=D),g=n(z," "),ut=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(ut)!=="svelte-1mgb5yz"&&(ut.textContent=Mt),E=n(z," "),K=f(z,"SAMP",{title:!0,"data-svelte-h":!0}),o(K)!=="svelte-n2z30q"&&(K.textContent=Pt),this.h()},h(){d(x,"title","time"),d(y,"title","number"),d(T,"title","time"),d(Z,"title","number"),d(V,"title","time"),d(w,"title","number"),d(X,"title","number"),d(at,"title","time"),d(pt,"title","number"),d(ut,"title","number"),d(K,"title","time")},m(z,et){e(z,a,et),e(z,s,et),e(z,u,et),e(z,C,et),e(z,x,et),e(z,v,et),e(z,P,et),e(z,H,et),e(z,y,et),e(z,c,et),e(z,T,et),e(z,k,et),e(z,N,et),e(z,F,et),e(z,Z,et),e(z,O,et),e(z,V,et),e(z,tt,et),e(z,J,et),e(z,R,et),e(z,w,et),e(z,bt,et),e(z,X,et),e(z,st,et),e(z,at,et),e(z,h,et),e(z,it,et),e(z,ot,et),e(z,lt,et),e(z,ft,et),e(z,pt,et),e(z,g,et),e(z,ut,et),e(z,E,et),e(z,K,et)},p(z,et){et&2&&G(a,z[1]),et&2&&G(P,z[1]),et&2&&G(N,z[1]),et&2&&G(J,z[1]),et&2&&G(it,z[1])},d(z){z&&(t(a),t(s),t(u),t(C),t(x),t(v),t(P),t(H),t(y),t(c),t(T),t(k),t(N),t(F),t(Z),t(O),t(V),t(tt),t(J),t(R),t(w),t(bt),t(X),t(st),t(at),t(h),t(it),t(ot),t(lt),t(ft),t(pt),t(g),t(ut),t(E),t(K))}}}function ns(m){let a;return{c(){a=l("Resolution Scale Command")},l(s){a=n(s,"Resolution Scale Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function is(m){let a,s,u,_="n",C,x,q="t";return{c(){a=l(m[1]),s=l("resolution scale "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q,this.h()},l(v){a=n(v,m[1]),s=n(v,"resolution scale "),u=f(v,"SAMP",{title:!0,"data-svelte-h":!0}),o(u)!=="svelte-11z14xk"&&(u.textContent=_),C=n(v," "),x=f(v,"SAMP",{title:!0,"data-svelte-h":!0}),o(x)!=="svelte-n2z30q"&&(x.textContent=q),this.h()},h(){d(u,"title","number"),d(x,"title","time")},m(v,P){e(v,a,P),e(v,s,P),e(v,u,P),e(v,C,P),e(v,x,P)},p(v,P){P&2&&G(a,v[1])},d(v){v&&(t(a),t(s),t(u),t(C),t(x))}}}function ss(m){let a;return{c(){a=l("Configure Command")},l(s){a=n(s,"Configure Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function as(m){let a;return{c(){a=l("Event Configuration Functions")},l(s){a=n(s,"Event Configuration Functions")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ms(m){let a,s,u="@t",_,C,x="functions",q,v,P="t";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" configure "),C=p("samp"),C.textContent=x,q=l(" "),v=p("samp"),v.textContent=P,this.h()},l(H){a=n(H,m[1]),s=f(H,"SAMP",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(H," configure "),C=f(H,"SAMP",{title:!0,"data-svelte-h":!0}),o(C)!=="svelte-tv9uzu"&&(C.textContent=x),q=n(H," "),v=f(H,"SAMP",{title:!0,"data-svelte-h":!0}),o(v)!=="svelte-n2z30q"&&(v.textContent=P),this.h()},h(){d(s,"title","target string"),d(C,"title","list of configuration functions"),d(v,"title","time")},m(H,y){e(H,a,y),e(H,s,y),e(H,_,y),e(H,C,y),e(H,q,y),e(H,v,y)},p(H,y){y&2&&G(a,H[1])},d(H){H&&(t(a),t(s),t(_),t(C),t(q),t(v))}}}function ps(m){let a;return{c(){a=l("Skybox and Skyball Commands")},l(s){a=n(s,"Skybox and Skyball Commands")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function fs(m){let a;return{c(){a=l("Skybox Command")},l(s){a=n(s,"Skybox Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function us(m){let a,s,u,_,C,x,q,v,P="layer",H,y,j,c,T="layer",W,k,N="n",F,Z,Y="t",O,V,mt,tt,J="layer",R,w,U="img",bt,X,xt="t",st,at,A,h,it="layer",ot,lt,Dt="img",ft,pt,D="img",g,ut,Mt="img",E,K,Pt="t",z,et,Nt,$t,pe="layer",Ft,St,Ut="img",Et,At,Vt="img",Ht,qt,jt="img",Zt,Tt,yt="img",Bt,Rt,kt="img",Yt,ct,wt="img",Qt,M,B="t",Xt,Gt,Jt,It,S="layer",Q,gt,Wt="n",we,le,ie,fe,re="layer",se,ue,Se="n",te,Kt,b,I,ae="layer",Le,ee,pl="n",He,qe,de,he,ke="layer",je,me,Rl="yaw",ce,ne,ge="pitch",be,Me,Ae="roll";return{c(){a=p("span"),s=l(m[1]),u=l("skybox clear"),_=l(`
`),C=p("span"),x=l(m[1]),q=l("skybox clear "),v=p("samp"),v.textContent=P,H=l(`
`),y=l(m[1]),j=l("skybox "),c=p("samp"),c.textContent=T,W=l(" alpha "),k=p("samp"),k.textContent=N,F=l(" "),Z=p("samp"),Z.textContent=Y,O=l(`
`),V=l(m[1]),mt=l("skybox "),tt=p("samp"),tt.textContent=J,R=l(" "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=xt,st=l(`
`),at=l(m[1]),A=l("skybox "),h=p("samp"),h.textContent=it,ot=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(" top "),pt=p("samp"),pt.textContent=D,g=l(" bottom "),ut=p("samp"),ut.textContent=Mt,E=l(" "),K=p("samp"),K.textContent=Pt,z=l(`
`),et=l(m[1]),Nt=l("skybox "),$t=p("samp"),$t.textContent=pe,Ft=l(" north "),St=p("samp"),St.textContent=Ut,Et=l(" south "),At=p("samp"),At.textContent=Vt,Ht=l(" east "),qt=p("samp"),qt.textContent=jt,Zt=l(" west "),Tt=p("samp"),Tt.textContent=yt,Bt=l(" top "),Rt=p("samp"),Rt.textContent=kt,Yt=l(" bottom "),ct=p("samp"),ct.textContent=wt,Qt=l(" "),M=p("samp"),M.textContent=B,Xt=l(`
`),Gt=l(m[1]),Jt=l("skybox "),It=p("samp"),It.textContent=S,Q=l(" autorotate yaw "),gt=p("samp"),gt.textContent=Wt,we=l(`
`),le=l(m[1]),ie=l("skybox "),fe=p("samp"),fe.textContent=re,se=l(" autorotate pitch "),ue=p("samp"),ue.textContent=Se,te=l(`
`),Kt=l(m[1]),b=l("skybox "),I=p("samp"),I.textContent=ae,Le=l(" autorotate roll "),ee=p("samp"),ee.textContent=pl,He=l(`
`),qe=l(m[1]),de=l("skybox "),he=p("samp"),he.textContent=ke,je=l(" autorotate "),me=p("samp"),me.textContent=Rl,ce=l(" "),ne=p("samp"),ne.textContent=ge,be=l(" "),Me=p("samp"),Me.textContent=Ae,this.h()},l(r){a=f(r,"SPAN",{title:!0});var L=_e(a);s=n(L,m[1]),u=n(L,"skybox clear"),L.forEach(t),_=n(r,`
`),C=f(r,"SPAN",{title:!0});var Re=_e(C);x=n(Re,m[1]),q=n(Re,"skybox clear "),v=f(Re,"SAMP",{"data-svelte-h":!0}),o(v)!=="svelte-1xi0d59"&&(v.textContent=P),Re.forEach(t),H=n(r,`
`),y=n(r,m[1]),j=n(r,"skybox "),c=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(c)!=="svelte-tpduj3"&&(c.textContent=T),W=n(r," alpha "),k=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(k)!=="svelte-11z14xk"&&(k.textContent=N),F=n(r," "),Z=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(Z)!=="svelte-n2z30q"&&(Z.textContent=Y),O=n(r,`
`),V=n(r,m[1]),mt=n(r,"skybox "),tt=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(tt)!=="svelte-tpduj3"&&(tt.textContent=J),R=n(r," "),w=f(r,"SAMP",{"data-svelte-h":!0}),o(w)!=="svelte-1ictklr"&&(w.textContent=U),bt=n(r," "),X=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(X)!=="svelte-n2z30q"&&(X.textContent=xt),st=n(r,`
`),at=n(r,m[1]),A=n(r,"skybox "),h=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(h)!=="svelte-tpduj3"&&(h.textContent=it),ot=n(r," "),lt=f(r,"SAMP",{"data-svelte-h":!0}),o(lt)!=="svelte-1ictklr"&&(lt.textContent=Dt),ft=n(r," top "),pt=f(r,"SAMP",{"data-svelte-h":!0}),o(pt)!=="svelte-1ictklr"&&(pt.textContent=D),g=n(r," bottom "),ut=f(r,"SAMP",{"data-svelte-h":!0}),o(ut)!=="svelte-1ictklr"&&(ut.textContent=Mt),E=n(r," "),K=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(K)!=="svelte-n2z30q"&&(K.textContent=Pt),z=n(r,`
`),et=n(r,m[1]),Nt=n(r,"skybox "),$t=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o($t)!=="svelte-tpduj3"&&($t.textContent=pe),Ft=n(r," north "),St=f(r,"SAMP",{"data-svelte-h":!0}),o(St)!=="svelte-1ictklr"&&(St.textContent=Ut),Et=n(r," south "),At=f(r,"SAMP",{"data-svelte-h":!0}),o(At)!=="svelte-1ictklr"&&(At.textContent=Vt),Ht=n(r," east "),qt=f(r,"SAMP",{"data-svelte-h":!0}),o(qt)!=="svelte-1ictklr"&&(qt.textContent=jt),Zt=n(r," west "),Tt=f(r,"SAMP",{"data-svelte-h":!0}),o(Tt)!=="svelte-1ictklr"&&(Tt.textContent=yt),Bt=n(r," top "),Rt=f(r,"SAMP",{"data-svelte-h":!0}),o(Rt)!=="svelte-1ictklr"&&(Rt.textContent=kt),Yt=n(r," bottom "),ct=f(r,"SAMP",{"data-svelte-h":!0}),o(ct)!=="svelte-1ictklr"&&(ct.textContent=wt),Qt=n(r," "),M=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(M)!=="svelte-n2z30q"&&(M.textContent=B),Xt=n(r,`
`),Gt=n(r,m[1]),Jt=n(r,"skybox "),It=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(It)!=="svelte-tpduj3"&&(It.textContent=S),Q=n(r," autorotate yaw "),gt=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(gt)!=="svelte-11z14xk"&&(gt.textContent=Wt),we=n(r,`
`),le=n(r,m[1]),ie=n(r,"skybox "),fe=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(fe)!=="svelte-tpduj3"&&(fe.textContent=re),se=n(r," autorotate pitch "),ue=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(ue)!=="svelte-11z14xk"&&(ue.textContent=Se),te=n(r,`
`),Kt=n(r,m[1]),b=n(r,"skybox "),I=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(I)!=="svelte-tpduj3"&&(I.textContent=ae),Le=n(r," autorotate roll "),ee=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(ee)!=="svelte-11z14xk"&&(ee.textContent=pl),He=n(r,`
`),qe=n(r,m[1]),de=n(r,"skybox "),he=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(he)!=="svelte-tpduj3"&&(he.textContent=ke),je=n(r," autorotate "),me=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(me)!=="svelte-z540cx"&&(me.textContent=Rl),ce=n(r," "),ne=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(ne)!=="svelte-1o30zjk"&&(ne.textContent=ge),be=n(r," "),Me=f(r,"SAMP",{title:!0,"data-svelte-h":!0}),o(Me)!=="svelte-14d26p9"&&(Me.textContent=Ae),this.h()},h(){d(a,"title","clear all skyboxes"),d(C,"title","clear skybox on specified layer"),d(c,"title","optional (default 0) skybox layer"),d(k,"title","number"),d(Z,"title","time"),d(tt,"title","optional (default 0) skybox layer"),d(X,"title","time"),d(h,"title","optional (default 0) skybox layer"),d(K,"title","time"),d($t,"title","optional (default 0) skybox layer"),d(M,"title","time"),d(It,"title","optional (default 0) skybox layer"),d(gt,"title","number"),d(fe,"title","optional (default 0) skybox layer"),d(ue,"title","number"),d(I,"title","optional (default 0) skybox layer"),d(ee,"title","number"),d(he,"title","optional (default 0) skybox layer"),d(me,"title","number"),d(ne,"title","number"),d(Me,"title","number")},m(r,L){e(r,a,L),nt(a,s),nt(a,u),e(r,_,L),e(r,C,L),nt(C,x),nt(C,q),nt(C,v),e(r,H,L),e(r,y,L),e(r,j,L),e(r,c,L),e(r,W,L),e(r,k,L),e(r,F,L),e(r,Z,L),e(r,O,L),e(r,V,L),e(r,mt,L),e(r,tt,L),e(r,R,L),e(r,w,L),e(r,bt,L),e(r,X,L),e(r,st,L),e(r,at,L),e(r,A,L),e(r,h,L),e(r,ot,L),e(r,lt,L),e(r,ft,L),e(r,pt,L),e(r,g,L),e(r,ut,L),e(r,E,L),e(r,K,L),e(r,z,L),e(r,et,L),e(r,Nt,L),e(r,$t,L),e(r,Ft,L),e(r,St,L),e(r,Et,L),e(r,At,L),e(r,Ht,L),e(r,qt,L),e(r,Zt,L),e(r,Tt,L),e(r,Bt,L),e(r,Rt,L),e(r,Yt,L),e(r,ct,L),e(r,Qt,L),e(r,M,L),e(r,Xt,L),e(r,Gt,L),e(r,Jt,L),e(r,It,L),e(r,Q,L),e(r,gt,L),e(r,we,L),e(r,le,L),e(r,ie,L),e(r,fe,L),e(r,se,L),e(r,ue,L),e(r,te,L),e(r,Kt,L),e(r,b,L),e(r,I,L),e(r,Le,L),e(r,ee,L),e(r,He,L),e(r,qe,L),e(r,de,L),e(r,he,L),e(r,je,L),e(r,me,L),e(r,ce,L),e(r,ne,L),e(r,be,L),e(r,Me,L)},p(r,L){L&2&&G(s,r[1]),L&2&&G(x,r[1]),L&2&&G(y,r[1]),L&2&&G(V,r[1]),L&2&&G(at,r[1]),L&2&&G(et,r[1]),L&2&&G(Gt,r[1]),L&2&&G(le,r[1]),L&2&&G(Kt,r[1]),L&2&&G(qe,r[1])},d(r){r&&(t(a),t(_),t(C),t(H),t(y),t(j),t(c),t(W),t(k),t(F),t(Z),t(O),t(V),t(mt),t(tt),t(R),t(w),t(bt),t(X),t(st),t(at),t(A),t(h),t(ot),t(lt),t(ft),t(pt),t(g),t(ut),t(E),t(K),t(z),t(et),t(Nt),t($t),t(Ft),t(St),t(Et),t(At),t(Ht),t(qt),t(Zt),t(Tt),t(Bt),t(Rt),t(Yt),t(ct),t(Qt),t(M),t(Xt),t(Gt),t(Jt),t(It),t(Q),t(gt),t(we),t(le),t(ie),t(fe),t(se),t(ue),t(te),t(Kt),t(b),t(I),t(Le),t(ee),t(He),t(qe),t(de),t(he),t(je),t(me),t(ce),t(ne),t(be),t(Me))}}}function os(m){let a;return{c(){a=l("Skyball Command")},l(s){a=n(s,"Skyball Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Cs(m){let a,s,u,_,C,x,q,v,P="layer",H,y,j,c,T="layer",W,k,N="n",F,Z,Y="t",O,V,mt,tt,J="layer",R,w,U="img",bt,X,xt="t",st,at,A,h,it="layer",ot,lt,Dt="img",ft,pt,D="n",g,ut,Mt="t",E,K,Pt,z,et="layer",Nt,$t,pe="n",Ft,St,Ut,Et,At="layer",Vt,Ht,qt="n",jt,Zt,Tt,yt,Bt="layer",Rt,kt,Yt="n",ct,wt,Qt,M,B="layer",Xt,Gt,Jt="img",It,S,Q="n",gt,Wt,we="yaw",le,ie,fe="pitch",re,se,ue="roll",Se,te,Kt="t";return{c(){a=p("span"),s=l(m[1]),u=l("skyball clear"),_=l(`
`),C=p("span"),x=l(m[1]),q=l("skyball clear "),v=p("samp"),v.textContent=P,H=l(`
`),y=l(m[1]),j=l("skyball "),c=p("samp"),c.textContent=T,W=l(" alpha "),k=p("samp"),k.textContent=N,F=l(" "),Z=p("samp"),Z.textContent=Y,O=l(`
`),V=l(m[1]),mt=l("skyball "),tt=p("samp"),tt.textContent=J,R=l(" "),w=p("samp"),w.textContent=U,bt=l(" "),X=p("samp"),X.textContent=xt,st=l(`
`),at=l(m[1]),A=l("skyball "),h=p("samp"),h.textContent=it,ot=l(" "),lt=p("samp"),lt.textContent=Dt,ft=l(" repeat "),pt=p("samp"),pt.textContent=D,g=l(" "),ut=p("samp"),ut.textContent=Mt,E=l(`
`),K=l(m[1]),Pt=l("skyball "),z=p("samp"),z.textContent=et,Nt=l(" autorotate yaw "),$t=p("samp"),$t.textContent=pe,Ft=l(`
`),St=l(m[1]),Ut=l("skyball "),Et=p("samp"),Et.textContent=At,Vt=l(" autorotate pitch "),Ht=p("samp"),Ht.textContent=qt,jt=l(`
`),Zt=l(m[1]),Tt=l("skyball "),yt=p("samp"),yt.textContent=Bt,Rt=l(" autorotate roll "),kt=p("samp"),kt.textContent=Yt,ct=l(`
`),wt=l(m[1]),Qt=l("skyball "),M=p("samp"),M.textContent=B,Xt=l(" "),Gt=p("samp"),Gt.textContent=Jt,It=l(" repeat "),S=p("samp"),S.textContent=Q,gt=l(" autorotate "),Wt=p("samp"),Wt.textContent=we,le=l(" "),ie=p("samp"),ie.textContent=fe,re=l(" "),se=p("samp"),se.textContent=ue,Se=l(" "),te=p("samp"),te.textContent=Kt,this.h()},l(b){a=f(b,"SPAN",{title:!0});var I=_e(a);s=n(I,m[1]),u=n(I,"skyball clear"),I.forEach(t),_=n(b,`
`),C=f(b,"SPAN",{title:!0});var ae=_e(C);x=n(ae,m[1]),q=n(ae,"skyball clear "),v=f(ae,"SAMP",{"data-svelte-h":!0}),o(v)!=="svelte-1xi0d59"&&(v.textContent=P),ae.forEach(t),H=n(b,`
`),y=n(b,m[1]),j=n(b,"skyball "),c=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(c)!=="svelte-wxxorr"&&(c.textContent=T),W=n(b," alpha "),k=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(k)!=="svelte-11z14xk"&&(k.textContent=N),F=n(b," "),Z=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(Z)!=="svelte-n2z30q"&&(Z.textContent=Y),O=n(b,`
`),V=n(b,m[1]),mt=n(b,"skyball "),tt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(tt)!=="svelte-wxxorr"&&(tt.textContent=J),R=n(b," "),w=f(b,"SAMP",{"data-svelte-h":!0}),o(w)!=="svelte-1ictklr"&&(w.textContent=U),bt=n(b," "),X=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(X)!=="svelte-n2z30q"&&(X.textContent=xt),st=n(b,`
`),at=n(b,m[1]),A=n(b,"skyball "),h=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(h)!=="svelte-wxxorr"&&(h.textContent=it),ot=n(b," "),lt=f(b,"SAMP",{"data-svelte-h":!0}),o(lt)!=="svelte-1ictklr"&&(lt.textContent=Dt),ft=n(b," repeat "),pt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(pt)!=="svelte-11z14xk"&&(pt.textContent=D),g=n(b," "),ut=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(ut)!=="svelte-n2z30q"&&(ut.textContent=Mt),E=n(b,`
`),K=n(b,m[1]),Pt=n(b,"skyball "),z=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(z)!=="svelte-wxxorr"&&(z.textContent=et),Nt=n(b," autorotate yaw "),$t=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o($t)!=="svelte-11z14xk"&&($t.textContent=pe),Ft=n(b,`
`),St=n(b,m[1]),Ut=n(b,"skyball "),Et=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(Et)!=="svelte-wxxorr"&&(Et.textContent=At),Vt=n(b," autorotate pitch "),Ht=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(Ht)!=="svelte-11z14xk"&&(Ht.textContent=qt),jt=n(b,`
`),Zt=n(b,m[1]),Tt=n(b,"skyball "),yt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(yt)!=="svelte-wxxorr"&&(yt.textContent=Bt),Rt=n(b," autorotate roll "),kt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(kt)!=="svelte-11z14xk"&&(kt.textContent=Yt),ct=n(b,`
`),wt=n(b,m[1]),Qt=n(b,"skyball "),M=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(M)!=="svelte-wxxorr"&&(M.textContent=B),Xt=n(b," "),Gt=f(b,"SAMP",{"data-svelte-h":!0}),o(Gt)!=="svelte-1ictklr"&&(Gt.textContent=Jt),It=n(b," repeat "),S=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(S)!=="svelte-11z14xk"&&(S.textContent=Q),gt=n(b," autorotate "),Wt=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(Wt)!=="svelte-z540cx"&&(Wt.textContent=we),le=n(b," "),ie=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(ie)!=="svelte-1o30zjk"&&(ie.textContent=fe),re=n(b," "),se=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(se)!=="svelte-14d26p9"&&(se.textContent=ue),Se=n(b," "),te=f(b,"SAMP",{title:!0,"data-svelte-h":!0}),o(te)!=="svelte-n2z30q"&&(te.textContent=Kt),this.h()},h(){d(a,"title","clear all skyballs"),d(C,"title","clear skyball on specified layer"),d(c,"title","optional (default 0) skyball layer"),d(k,"title","number"),d(Z,"title","time"),d(tt,"title","optional (default 0) skyball layer"),d(X,"title","time"),d(h,"title","optional (default 0) skyball layer"),d(pt,"title","number"),d(ut,"title","time"),d(z,"title","optional (default 0) skyball layer"),d($t,"title","number"),d(Et,"title","optional (default 0) skyball layer"),d(Ht,"title","number"),d(yt,"title","optional (default 0) skyball layer"),d(kt,"title","number"),d(M,"title","optional (default 0) skyball layer"),d(S,"title","number"),d(Wt,"title","number"),d(ie,"title","number"),d(se,"title","number"),d(te,"title","time")},m(b,I){e(b,a,I),nt(a,s),nt(a,u),e(b,_,I),e(b,C,I),nt(C,x),nt(C,q),nt(C,v),e(b,H,I),e(b,y,I),e(b,j,I),e(b,c,I),e(b,W,I),e(b,k,I),e(b,F,I),e(b,Z,I),e(b,O,I),e(b,V,I),e(b,mt,I),e(b,tt,I),e(b,R,I),e(b,w,I),e(b,bt,I),e(b,X,I),e(b,st,I),e(b,at,I),e(b,A,I),e(b,h,I),e(b,ot,I),e(b,lt,I),e(b,ft,I),e(b,pt,I),e(b,g,I),e(b,ut,I),e(b,E,I),e(b,K,I),e(b,Pt,I),e(b,z,I),e(b,Nt,I),e(b,$t,I),e(b,Ft,I),e(b,St,I),e(b,Ut,I),e(b,Et,I),e(b,Vt,I),e(b,Ht,I),e(b,jt,I),e(b,Zt,I),e(b,Tt,I),e(b,yt,I),e(b,Rt,I),e(b,kt,I),e(b,ct,I),e(b,wt,I),e(b,Qt,I),e(b,M,I),e(b,Xt,I),e(b,Gt,I),e(b,It,I),e(b,S,I),e(b,gt,I),e(b,Wt,I),e(b,le,I),e(b,ie,I),e(b,re,I),e(b,se,I),e(b,Se,I),e(b,te,I)},p(b,I){I&2&&G(s,b[1]),I&2&&G(x,b[1]),I&2&&G(y,b[1]),I&2&&G(V,b[1]),I&2&&G(at,b[1]),I&2&&G(K,b[1]),I&2&&G(St,b[1]),I&2&&G(Zt,b[1]),I&2&&G(wt,b[1])},d(b){b&&(t(a),t(_),t(C),t(H),t(y),t(j),t(c),t(W),t(k),t(F),t(Z),t(O),t(V),t(mt),t(tt),t(R),t(w),t(bt),t(X),t(st),t(at),t(A),t(h),t(ot),t(lt),t(ft),t(pt),t(g),t(ut),t(E),t(K),t(Pt),t(z),t(Nt),t($t),t(Ft),t(St),t(Ut),t(Et),t(Vt),t(Ht),t(jt),t(Zt),t(Tt),t(yt),t(Rt),t(kt),t(ct),t(wt),t(Qt),t(M),t(Xt),t(Gt),t(It),t(S),t(gt),t(Wt),t(le),t(ie),t(re),t(se),t(Se),t(te))}}}function vs(m){let a,s,u,_,C,x,q=`
    The Skybox command will set up a cube-shaped mesh to represent the sky. The skybox takes six textures, one for each face.
`,v,P,H=`
    A layer parameter can be provided after to set up multiple skyboxes. The layer parameter is always optional and defaults to 0.
    Higher layers will be drawn over lower layers.
`,y,j,c=`
    The time parameter will fade the skybox in or out, but cannot fade between different textures. To fade between textures you need to use multiple skybox layers.
`,T,W,k=`
    If an image is provided without a side name, it will be used as the default image and will be used for any sides without an image.
    <br/>Texutres are pulled from the img/parallaxes folder.
    <br/>The word &quot;clear&quot; can be used to mean a blank texture.
`,N,F,Z=`
    The autorotate parameters can be used to make the skybox rotate automatically.
`,Y,O,V,mt,tt,J,R=`
    The Skyball command will set up a sphere-shaped mesh to represent the sky. The skyball takes only one texture which is wrapped around the sphere.
    <br/>Like skyboxes, skyballs can also be layered. Skyballs are always drawn in front of skyboxes.
    <br/>Also like skyboxes, skyballs can be automatically rotated with the autorotate parameters.
`,w,U,bt=`
    Skyballs have an additional "repeat" parameter which can make the texture repeat a certain number of times around the sphere.
`,X,xt,st,at;return s=new Pe({props:{h2:!0,id:"skybox&skyball",$$slots:{default:[ps]},$$scope:{ctx:m}}}),_=new Pe({props:{h3:!0,id:"skybox",$$slots:{default:[fs]},$$scope:{ctx:m}}}),O=new Ot({props:{$$slots:{default:[us]},$$scope:{ctx:m}}}),mt=new Pe({props:{h3:!0,id:"skyball",$$slots:{default:[os]},$$scope:{ctx:m}}}),xt=new Ot({props:{$$slots:{default:[Cs]},$$scope:{ctx:m}}}),{c(){a=l(`
`),rt(s.$$.fragment),u=l(`
`),rt(_.$$.fragment),C=l(`
`),x=p("p"),x.textContent=q,v=l(`
`),P=p("p"),P.textContent=H,y=l(`
`),j=p("p"),j.textContent=c,T=l(`
`),W=p("p"),W.innerHTML=k,N=l(`
`),F=p("p"),F.textContent=Z,Y=l(`
`),rt(O.$$.fragment),V=l(`

`),rt(mt.$$.fragment),tt=l(`
`),J=p("p"),J.innerHTML=R,w=l(`
`),U=p("p"),U.textContent=bt,X=l(`
`),rt(xt.$$.fragment),st=l(`

`)},l(A){a=n(A,`
`),_t(s.$$.fragment,A),u=n(A,`
`),_t(_.$$.fragment,A),C=n(A,`
`),x=f(A,"P",{"data-svelte-h":!0}),o(x)!=="svelte-1g16wg1"&&(x.textContent=q),v=n(A,`
`),P=f(A,"P",{"data-svelte-h":!0}),o(P)!=="svelte-4492k"&&(P.textContent=H),y=n(A,`
`),j=f(A,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1w9n3ff"&&(j.textContent=c),T=n(A,`
`),W=f(A,"P",{"data-svelte-h":!0}),o(W)!=="svelte-eo8jvt"&&(W.innerHTML=k),N=n(A,`
`),F=f(A,"P",{"data-svelte-h":!0}),o(F)!=="svelte-tlpivx"&&(F.textContent=Z),Y=n(A,`
`),_t(O.$$.fragment,A),V=n(A,`

`),_t(mt.$$.fragment,A),tt=n(A,`
`),J=f(A,"P",{"data-svelte-h":!0}),o(J)!=="svelte-93nfgk"&&(J.innerHTML=R),w=n(A,`
`),U=f(A,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1izf0ar"&&(U.textContent=bt),X=n(A,`
`),_t(xt.$$.fragment,A),st=n(A,`

`)},m(A,h){e(A,a,h),dt(s,A,h),e(A,u,h),dt(_,A,h),e(A,C,h),e(A,x,h),e(A,v,h),e(A,P,h),e(A,y,h),e(A,j,h),e(A,T,h),e(A,W,h),e(A,N,h),e(A,F,h),e(A,Y,h),dt(O,A,h),e(A,V,h),dt(mt,A,h),e(A,tt,h),e(A,J,h),e(A,w,h),e(A,U,h),e(A,X,h),dt(xt,A,h),e(A,st,h),at=!0},p(A,h){const it={};h&8&&(it.$$scope={dirty:h,ctx:A}),s.$set(it);const ot={};h&8&&(ot.$$scope={dirty:h,ctx:A}),_.$set(ot);const lt={};h&10&&(lt.$$scope={dirty:h,ctx:A}),O.$set(lt);const Dt={};h&8&&(Dt.$$scope={dirty:h,ctx:A}),mt.$set(Dt);const ft={};h&10&&(ft.$$scope={dirty:h,ctx:A}),xt.$set(ft)},i(A){at||(vt(s.$$.fragment,A),vt(_.$$.fragment,A),vt(O.$$.fragment,A),vt(mt.$$.fragment,A),vt(xt.$$.fragment,A),at=!0)},o(A){Ct(s.$$.fragment,A),Ct(_.$$.fragment,A),Ct(O.$$.fragment,A),Ct(mt.$$.fragment,A),Ct(xt.$$.fragment,A),at=!1},d(A){A&&(t(a),t(u),t(C),t(x),t(v),t(P),t(y),t(j),t(T),t(W),t(N),t(F),t(Y),t(V),t(tt),t(J),t(w),t(U),t(X),t(st)),ht(s,A),ht(_,A),ht(O,A),ht(mt,A),ht(xt,A)}}}function $s(m){let a;return{c(){a=l("Action Command")},l(s){a=n(s,"Action Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function xs(m){let a,s,u="@t",_,C,x="name",q,v,P,H="@t",y,j,c="name",T,W,k,N="@t",F,Z,Y="name",O,V,mt,tt="@t",J,R,w="name",U,bt,X,xt="@t",st,at,A="name",h,it,ot,lt="@t",Dt,ft,pt="name";return{c(){a=l(m[1]),s=p("samp"),s.textContent=u,_=l(" action play "),C=p("samp"),C.textContent=x,q=l(`
`),v=l(m[1]),P=p("samp"),P.textContent=H,y=l(" action play "),j=p("samp"),j.textContent=c,T=l(` wait
`),W=l(m[1]),k=p("samp"),k.textContent=N,F=l(" action play "),Z=p("samp"),Z.textContent=Y,O=l(` loop
`),V=l(m[1]),mt=p("samp"),mt.textContent=tt,J=l(" action play "),R=p("samp"),R.textContent=w,U=l(` important
`),bt=l(m[1]),X=p("samp"),X.textContent=xt,st=l(" action play "),at=p("samp"),at.textContent=A,h=l(` loop important
`),it=l(m[1]),ot=p("samp"),ot.textContent=lt,Dt=l(" action stop "),ft=p("samp"),ft.textContent=pt,this.h()},l(D){a=n(D,m[1]),s=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(s)!=="svelte-vygyen"&&(s.textContent=u),_=n(D," action play "),C=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(C)!=="svelte-eu41wn"&&(C.textContent=x),q=n(D,`
`),v=n(D,m[1]),P=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(P)!=="svelte-vygyen"&&(P.textContent=H),y=n(D," action play "),j=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(j)!=="svelte-eu41wn"&&(j.textContent=c),T=n(D,` wait
`),W=n(D,m[1]),k=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(k)!=="svelte-vygyen"&&(k.textContent=N),F=n(D," action play "),Z=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(Z)!=="svelte-eu41wn"&&(Z.textContent=Y),O=n(D,` loop
`),V=n(D,m[1]),mt=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(mt)!=="svelte-vygyen"&&(mt.textContent=tt),J=n(D," action play "),R=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(R)!=="svelte-eu41wn"&&(R.textContent=w),U=n(D,` important
`),bt=n(D,m[1]),X=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(X)!=="svelte-vygyen"&&(X.textContent=xt),st=n(D," action play "),at=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(at)!=="svelte-eu41wn"&&(at.textContent=A),h=n(D,` loop important
`),it=n(D,m[1]),ot=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(ot)!=="svelte-vygyen"&&(ot.textContent=lt),Dt=n(D," action stop "),ft=f(D,"SAMP",{title:!0,"data-svelte-h":!0}),o(ft)!=="svelte-eu41wn"&&(ft.textContent=pt),this.h()},h(){d(s,"title","target string"),d(C,"title","action name"),d(P,"title","target string"),d(j,"title","action name"),d(k,"title","target string"),d(Z,"title","action name"),d(mt,"title","target string"),d(R,"title","action name"),d(X,"title","target string"),d(at,"title","action name"),d(ot,"title","target string"),d(ft,"title","action name")},m(D,g){e(D,a,g),e(D,s,g),e(D,_,g),e(D,C,g),e(D,q,g),e(D,v,g),e(D,P,g),e(D,y,g),e(D,j,g),e(D,T,g),e(D,W,g),e(D,k,g),e(D,F,g),e(D,Z,g),e(D,O,g),e(D,V,g),e(D,mt,g),e(D,J,g),e(D,R,g),e(D,U,g),e(D,bt,g),e(D,X,g),e(D,st,g),e(D,at,g),e(D,h,g),e(D,it,g),e(D,ot,g),e(D,Dt,g),e(D,ft,g)},p(D,g){g&2&&G(a,D[1]),g&2&&G(v,D[1]),g&2&&G(W,D[1]),g&2&&G(V,D[1]),g&2&&G(bt,D[1]),g&2&&G(it,D[1])},d(D){D&&(t(a),t(s),t(_),t(C),t(q),t(v),t(P),t(y),t(j),t(T),t(W),t(k),t(F),t(Z),t(O),t(V),t(mt),t(J),t(R),t(U),t(bt),t(X),t(st),t(at),t(h),t(it),t(ot),t(Dt),t(ft))}}}function rs(m){let a,s,u,_,C=`
    The Action command plays or stops an action (animation) on the target character with an imported gltf model.
    <br/>The wait, loop, and important keywords can be provided at the end of the command to modify the behavior.
`,x,q,v=`
    <li>Loop will cause the action to loop.</li>
    <li>Important will prevent the action from being interrupted by changing state.</li>
    <li>Wait will cause the interpreter to wait until the action is finished before continuing.</li>
`,P,H,y,j;return s=new Pe({props:{h2:!0,id:"action",$$slots:{default:[$s]},$$scope:{ctx:m}}}),H=new Ot({props:{$$slots:{default:[xs]},$$scope:{ctx:m}}}),{c(){a=l(`
`),rt(s.$$.fragment),u=l(`
`),_=p("p"),_.innerHTML=C,x=l(`
`),q=p("ul"),q.innerHTML=v,P=l(`
`),rt(H.$$.fragment),y=l(`

`)},l(c){a=n(c,`
`),_t(s.$$.fragment,c),u=n(c,`
`),_=f(c,"P",{"data-svelte-h":!0}),o(_)!=="svelte-138s267"&&(_.innerHTML=C),x=n(c,`
`),q=f(c,"UL",{"data-svelte-h":!0}),o(q)!=="svelte-114sln6"&&(q.innerHTML=v),P=n(c,`
`),_t(H.$$.fragment,c),y=n(c,`

`)},m(c,T){e(c,a,T),dt(s,c,T),e(c,u,T),e(c,_,T),e(c,x,T),e(c,q,T),e(c,P,T),dt(H,c,T),e(c,y,T),j=!0},p(c,T){const W={};T&8&&(W.$$scope={dirty:T,ctx:c}),s.$set(W);const k={};T&10&&(k.$$scope={dirty:T,ctx:c}),H.$set(k)},i(c){j||(vt(s.$$.fragment,c),vt(H.$$.fragment,c),j=!0)},o(c){Ct(s.$$.fragment,c),Ct(H.$$.fragment,c),j=!1},d(c){c&&(t(a),t(u),t(_),t(x),t(q),t(P),t(y)),ht(s,c),ht(H,c)}}}function _s(m){let a;return{c(){a=l("Set Command")},l(s){a=n(s,"Set Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ds(m){let a,s,u,_="setting",C,x,q="value";return{c(){a=l(m[1]),s=l("set "),u=p("samp"),u.textContent=_,C=l(" "),x=p("samp"),x.textContent=q},l(v){a=n(v,m[1]),s=n(v,"set "),u=f(v,"SAMP",{"data-svelte-h":!0}),o(u)!=="svelte-17zv5fa"&&(u.textContent=_),C=n(v," "),x=f(v,"SAMP",{"data-svelte-h":!0}),o(x)!=="svelte-8e37ox"&&(x.textContent=q)},m(v,P){e(v,a,P),e(v,s,P),e(v,u,P),e(v,C,P),e(v,x,P)},p(v,P){P&2&&G(a,v[1])},d(v){v&&(t(a),t(s),t(u),t(C),t(x))}}}function hs(m){let a;return{c(){a=l("Doesn't work propertly with 3D models")},l(s){a=n(s,"Doesn't work propertly with 3D models")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function bs(m){let a,s,u="<dt>alphaFog</dt><dd>Blends the 3D environment into the parallax background with an alpha fog effect. <samp>0</samp> to disable, <samp>1</samp> for full effect.</dd><dt>glowIntensity</dt><dd>Intensity of the glow effect. <samp>0</samp> or higher</dd><dt>glowRadius</dt><dd>Radius of the glow effect. <samp>0</samp> or higher</dd><dt>glowThroughWalls</dt><dd>When true, the glow effect will be visible through walls. <samp>true</samp> or <samp>false</samp></dd><dt>highlight</dt><dd>Controls the mode for the highlight effect. Can be <samp>Off</samp>, <samp>Inner</samp>, <samp>Outer</samp>, or <samp>On</samp></dd><dt>highlightRadius</dt><dd>Radius of the highlight effect. <samp>0</samp> or higher</dd><dt>highlightThroughWalls</dt><dd>When true, the highlight effect will be visible through walls. <samp>true</samp> or <samp>false</samp></dd><dt>chromaticAberration</dt><dd>Intensity of the chromatic aberration effect. <samp>0</samp> or higher</dd><dt>chromaticAberrationAngle</dt><dd>Angle of the chromatic aberration effect. <samp>0</samp> to <samp>360</samp></dd><dt>aperture</dt><dd>Larger values cause more blur away from the focus distance.</dd><dt>blurStrength</dt><dd>Strength of the blur effect. <samp>0</samp> or higher</dd><dt>focusDistance</dt><dd>Distance at which the camera is focused. <samp>center</samp> focuses on the center of the screen. <samp>mouse</samp> focuses on the mouse position. <samp>auto</samp> will set focus to camera distance, or center of screen if in 1st person. Using a number will fix the focus distance at that value.</dd><dt>bloom</dt><dd>Intensity of the bloom effect. <samp>0</samp> or higher</dd><dt>bloomThreshold</dt><dd>Threshold for the bloom effect. <samp>0</samp> to <samp>1</samp></dd><dt>bloomRadius</dt><dd>Radius of the bloom effect. <samp>0</samp> or higher</dd>",_;return{c(){a=l(`
`),s=p("dl"),s.innerHTML=u,_=l(`
`)},l(C){a=n(C,`
`),s=f(C,"DL",{"data-svelte-h":!0}),o(s)!=="svelte-s155oh"&&(s.innerHTML=u),_=n(C,`
`)},m(C,x){e(C,a,x),e(C,s,x),e(C,_,x)},p:Ai,d(C){C&&(t(a),t(s),t(_))}}}function Ms(m){let a;return{c(){a=l("Enable / Disable Command")},l(s){a=n(s,"Enable / Disable Command")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function Ps(m){let a,s,u,_;return{c(){a=l(m[1]),s=l(`enable
`),u=l(m[1]),_=l("disable")},l(C){a=n(C,m[1]),s=n(C,`enable
`),u=n(C,m[1]),_=n(C,"disable")},m(C,x){e(C,a,x),e(C,s,x),e(C,u,x),e(C,_,x)},p(C,x){x&2&&G(a,C[1]),x&2&&G(u,C[1])},d(C){C&&(t(a),t(s),t(u),t(_))}}}function Ss(m){let a,s,u,_;return{c(){a=l(m[1]),s=l(`enable 0
`),u=l(m[1]),_=l("disable 1")},l(C){a=n(C,m[1]),s=n(C,`enable 0
`),u=n(C,m[1]),_=n(C,"disable 1")},m(C,x){e(C,a,x),e(C,s,x),e(C,u,x),e(C,_,x)},p(C,x){x&2&&G(a,C[1]),x&2&&G(u,C[1])},d(C){C&&(t(a),t(s),t(u),t(_))}}}function ws(m){let a=m[0].pluginName+"",s,u,_,C=m[0].pluginName+"",x,q;return{c(){s=l(a),u=l(".enable(0);"),_=p("br"),x=l(C),q=l(".disable(1);")},l(v){s=n(v,a),u=n(v,".enable(0);"),_=f(v,"BR",{}),x=n(v,C),q=n(v,".disable(1);")},m(v,P){e(v,s,P),e(v,u,P),e(v,_,P),e(v,x,P),e(v,q,P)},p(v,P){P&1&&a!==(a=v[0].pluginName+"")&&G(s,a),P&1&&C!==(C=v[0].pluginName+"")&&G(x,C)},d(v){v&&(t(s),t(u),t(_),t(x),t(q))}}}function ks(m){let a,s,u="It was intended that you be able to provide a fade type with the enable or disable command, but this isn't working due to a bug.",_,C,x,q,v="Instead, you can use a script call to accomplish the same thing.",P,H,y,j,c="Fade mode 0 is fade to black and fade mode 1 is fade to white.",T,W;return C=new Ot({props:{$$slots:{default:[Ss]},$$scope:{ctx:m}}}),H=new Ot({props:{$$slots:{default:[ws]},$$scope:{ctx:m}}}),{c(){a=l(`
    `),s=p("p"),s.textContent=u,_=l(`
`),rt(C.$$.fragment),x=l(`
    `),q=p("p"),q.textContent=v,P=l(`
    `),rt(H.$$.fragment),y=l(`
    `),j=p("p"),j.textContent=c,T=l(`
`)},l(k){a=n(k,`
    `),s=f(k,"P",{"data-svelte-h":!0}),o(s)!=="svelte-1f6ybq"&&(s.textContent=u),_=n(k,`
`),_t(C.$$.fragment,k),x=n(k,`
    `),q=f(k,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1vauc6j"&&(q.textContent=v),P=n(k,`
    `),_t(H.$$.fragment,k),y=n(k,`
    `),j=f(k,"P",{"data-svelte-h":!0}),o(j)!=="svelte-jymit8"&&(j.textContent=c),T=n(k,`
`)},m(k,N){e(k,a,N),e(k,s,N),e(k,_,N),dt(C,k,N),e(k,x,N),e(k,q,N),e(k,P,N),dt(H,k,N),e(k,y,N),e(k,j,N),e(k,T,N),W=!0},p(k,N){const F={};N&10&&(F.$$scope={dirty:N,ctx:k}),C.$set(F);const Z={};N&9&&(Z.$$scope={dirty:N,ctx:k}),H.$set(Z)},i(k){W||(vt(C.$$.fragment,k),vt(H.$$.fragment,k),W=!0)},o(k){Ct(C.$$.fragment,k),Ct(H.$$.fragment,k),W=!1},d(k){k&&(t(a),t(s),t(_),t(x),t(q),t(P),t(y),t(j),t(T)),ht(C,k),ht(H,k)}}}function As(m){let a;return{c(){a=l("Script Call")},l(s){a=n(s,"Script Call")},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function wi(m){let a;return{c(){a=l('You should leave out the "mv3d" prefix when running commands this way.')},l(s){a=n(s,'You should leave out the "mv3d" prefix when running commands this way.')},m(s,u){e(s,a,u)},d(s){s&&t(a)}}}function ys(m){let a,s=m[0].pluginName+"",u,_;return{c(){a=l(`var id=1, depth=true, scale=1;
`),u=l(s),_=l('.command("@p animation", id, "depth", depth, "scale", scale);')},l(C){a=n(C,`var id=1, depth=true, scale=1;
`),u=n(C,s),_=n(C,'.command("@p animation", id, "depth", depth, "scale", scale);')},m(C,x){e(C,a,x),e(C,u,x),e(C,_,x)},p(C,x){x&1&&s!==(s=C[0].pluginName+"")&&G(u,s)},d(C){C&&(t(a),t(u),t(_))}}}function Ts(m){let a,s,u,_,C,x,q,v,P,H,y,j="Valid targets:",c,T,W=`
    <li>@p or @player - targets $gamePlayer</li>
    <li>@e0, @s, or target string omitted - targets the current event</li>
    <li>@e1, @e2, @e3, @e25 etc - targets event with specified id</li>
    <li>@f0, @f1, @f2 - targets first, second, third follower, etc.</li>
    <li>@v0, @v1, @v2 - targets boat, ship, airship</li>
`,k,N,F=`
    Many commands can take a time parameter at the end. The time parameter is in seconds. If omitted, the time parameter defaults to 1 second.
`,Z,Y,O=`
    Some numeric parameters can be prefixed with + to be set relative to the current value.
`,V,mt,tt,J,R,w,U=`
    The Camera Pitch, Yaw, and Roll commands rotate the camera around the camera target.
    <br/>The Camera Dist command sets the distance from the camera target.
    <br/>The Camera Height command sets a height offset from the camera target.
    <br/>The Camera Zoom command alters the FOV to zoom in or out.
    <br/>The Camera Pan command offsets the x and y position from the camera target.
`,bt,X,xt=`
    The following camera commands can have the word "camera" omitted and still work as a command.
`,st,at,A,h,it=`
    The Camera Target command sets the camera target to a character. The camera will move with the camera target.
`,ot,lt,Dt,ft,pt=`
    The Camera Track command sets the camera to track a character, automatically rotating the camera to face the character.
    Typically you will want to use this in conjunction with the Camera Target command to move the camera away from the player, then track the player.
    <br/>There are additional &quot;Track Pitch&quot; and &quot;Track Yaw&quot; commands which track only the pitch and yaw respectively.
`,D,g,ut,Mt,E=`
    The Camera Mode command sets the camera mode between perspective, orthographic, and 2D. Only the first letter is required, so &quot;p&quot;, &quot;o&quot;, and &quot;2&quot; are possible values.
    (2D mode is a false 2D projection, and is different from <a href="#disable">disabling the 3D rendering</a>.)
`,K,Pt,z,et,Nt,$t,pe,Ft,St,Ut,Et='The color parameter can be a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">hex color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">named color</a>, or any other valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">css color</a>.',At,Vt,Ht,qt,jt="The Lamp commands set up a point light on the target event and changes properties of that light.",Zt,Tt,yt,Bt,Rt=`
    The Flashlight commands set up a spot light on the target event and changes properties of that light.
    In addition to the same properties as the lamp, the flashlight has angle, pitch, and yaw properties.
    Angle is the angle of the light cone in degrees, and pitch and yaw are the direction the light is pointing.
`,kt,Yt,ct,wt,Qt,M,B,Xt,Gt=`
    The Animation command plays an animation at the target event.
`,Jt,It,S,Q,gt,Wt,we,le,ie="Depth controls whether the animation should have depth enabled. If false, animations are drawn over everything else.",fe,re,se="Scale is a scaling factor for the animation.",ue,Se,te,Kt,b,I,ae,Le,ee,pl,He,qe,de,he,ke,je,me,Rl=`
    The Resolution Scale command changes the size of the 3D canvas relative to the game canvas. This can be used to create a pixellated effect. The scale should be between 0 and 1.
`,ce,ne,ge,be,Me,Ae,r,L,Re,Ol,We,Vl,Fe,Oe,Yl,Ve,Ul,tl,_n="Changes a setting. Some of the settings changeable using this command also appear in the plugin parameters. For those settings, the same syntax is used as in the plugin parameters.",Zl,el,dn="Settings changed with this command are saved in the save file.",Bl,Ye,Gl,ll,hn="Valid Settings:",Jl,zt,fl,bn="lockCamera",ul,Mn="Locks the camera in place. <samp>true</samp> or <samp>false</samp>",ol,Pn="allowRotation",Cl,Sn="Allows the camera to rotate side to side. <samp>true</samp> or <samp>false</samp>",vl,wn="allowPitch",$l,kn="Allows the camera to pitch up and down. <samp>true</samp> or <samp>false</samp>",xl,An="diagonalMovement",rl,yn=`Changes the way diagonal movement works. Can be <samp>Off</samp>, <samp>Diagonal Basic</samp>, <samp>Diagonal Basic 3D</samp>, <samp>Diagonal Smart</samp>, or <samp>Diagonal Smart 3D</samp>
    <br/>3D modes mean diagonal movement only allowed when 3D mode is enabled.`,_l,Tn="turnIncrement",dl,zn="How many degrees the camera turns when turning. <samp>0</samp> to <samp>360</samp>",hl,Dn="turnSpeed",bl,qn="How fast the camera turns in degrees per second.",Ml,Ln="instantMovement",ye,fn,Pl,Hn="true",un,Sl,jn="false",on,Ue,Cn,wl,cn="inputCameraMouse",kl,Nn="When true, the camera can be controlled with the mouse. <samp>true</samp> or <samp>false</samp>",Al,En="inputCameraGamepad",yl,In="When true, the camera can be controlled with a gamepad. <samp>true</samp> or <samp>false</samp>",Tl,Rn="cameraCollision",zl,Wn=`Allows the camera to collide with objects. Can be <samp>Off</samp>, <samp>Type1</samp>, <samp>Type2</samp>, <samp>Type1 Smoothed</samp>, or <samp>Type2 Smoothed</samp>
    <br/>Type2 allows objects to be between the camera and player, Type1 does not. Smoothed will smooth the camera position when colliding.`,Dl,Fn="airshipHeight",ql,On=`How high the airship flies.

    `,Ll,Vn="allowGlide",Hl,Yn="If true, collision detection for flying characters will only use the current elevation and not target elevation. <samp>true</samp> or <samp>false</samp>",jl,Un="animationDepth",cl,Zn="Whether animations should have depth enabled. If false, animations are drawn over everything else. <samp>true</samp> or <samp>false</samp>",Kl,Ze,Ql,Be,Xl,nl,Bn=`
    The Enable and Disable commands enable or disable the 3D rendering.
    When disabled, the 3D rendering will be hidden and the game will behave as if the plugin is not installed.
`,gl,Ge,tn,Je,en,Ke,ln,Te,vn,Nl,Wl=m[0].pluginName+"",nn,$n,xn,sn,an,Qe,Fl;s=new Li({props:{title:"Plugin Commands"}});let oe=m[0].pluginName==="mz3d"&&bi();function Gn(i,$){return i[0].pluginName==="mv3d"?ji:Hi}let mn=Gn(m),Ne=mn(m);P=new Ot({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),mt=new Ot({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),J=new Pe({props:{h2:!0,id:"camera",$$slots:{default:[Ei]},$$scope:{ctx:m}}}),at=new Ot({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),lt=new Ot({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),g=new Ot({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),Pt=new Ot({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),et=new Pe({props:{h2:!0,id:"light",$$slots:{default:[Oi]},$$scope:{ctx:m}}});let Ce=m[0].premium&&Mi();Vt=new Ot({props:{$$slots:{default:[Vi]},$$scope:{ctx:m}}}),Tt=new Ot({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),Yt=new Ot({props:{$$slots:{default:[Ui]},$$scope:{ctx:m}}}),wt=new Il({props:{block:!0,premium:m[2],$$slots:{default:[Bi]},$$scope:{ctx:m}}}),M=new Pe({props:{h2:!0,id:"animation",$$slots:{default:[Gi]},$$scope:{ctx:m}}});function Jn(i,$){return i[0].pluginName==="mz3d"?Ki:Ji}let pn=Jn(m),Ee=pn(m),ve=m[0].pluginName==="mz3d"&&Pi();const Kn=[Xi,Qi],Xe=[];function Qn(i,$){return i[0].pluginName==="mz3d"?0:1}Kt=Qn(m),b=Xe[Kt]=Kn[Kt](m),ae=new Pe({props:{h2:!0,id:"fog",$$slots:{default:[es]},$$scope:{ctx:m}}});let $e=m[0].premium&&Si();de=new Ot({props:{$$slots:{default:[ls]},$$scope:{ctx:m}}}),ke=new Pe({props:{h2:!0,id:"resolution-scale",$$slots:{default:[ns]},$$scope:{ctx:m}}}),ne=new Ot({props:{$$slots:{default:[is]},$$scope:{ctx:m}}}),be=new Pe({props:{h2:!0,id:"configure",$$slots:{default:[ss]},$$scope:{ctx:m}}}),L=new qi({props:{href:"event-config",$$slots:{default:[as]},$$scope:{ctx:m}}}),We=new Ot({props:{$$slots:{default:[ms]},$$scope:{ctx:m}}}),Fe=new Il({props:{block:!0,premium:m[2],$$slots:{default:[vs]},$$scope:{ctx:m}}}),Oe=new Il({props:{block:!0,premium:m[2],$$slots:{default:[rs]},$$scope:{ctx:m}}}),Ve=new Pe({props:{h2:!0,id:"set",$$slots:{default:[_s]},$$scope:{ctx:m}}}),Ye=new Ot({props:{$$slots:{default:[ds]},$$scope:{ctx:m}}}),Ue=new Il({props:{bug:!0,inline:!0,small:!0,$$slots:{default:[hs]},$$scope:{ctx:m}}}),Ze=new Il({props:{block:!0,premium:m[2],$$slots:{default:[bs]},$$scope:{ctx:m}}}),Be=new Pe({props:{h2:!0,id:"enable",alias:"disable",$$slots:{default:[Ms]},$$scope:{ctx:m}}}),Ge=new Ot({props:{$$slots:{default:[Ps]},$$scope:{ctx:m}}}),Je=new Il({props:{block:!0,bug:!0,v:"<=0.9",$$slots:{default:[ks]},$$scope:{ctx:m}}}),Ke=new Pe({props:{h2:!0,id:"script",$$slots:{default:[As]},$$scope:{ctx:m}}});let xe=m[0].pluginName==="mv3d"&&wi();return Qe=new Ot({props:{$$slots:{default:[ys]},$$scope:{ctx:m}}}),{c(){a=l(`
`),rt(s.$$.fragment),u=l(`

    `),oe&&oe.c(),_=l(`

`),C=p("p"),x=l(`Some commands (like lamp and flashlight) act on a character. By default the target character will be the current event. You can define your own target by providing a target string. A target string is the "@" character followed by an identifier.
    `),Ne.c(),q=l(`
`),v=l(`
Example:
`),rt(P.$$.fragment),H=l(`
`),y=p("p"),y.textContent=j,c=l(`
`),T=p("ul"),T.innerHTML=W,k=l(`


`),N=p("p"),N.textContent=F,Z=l(`

`),Y=p("p"),Y.textContent=O,V=l(`
Example:
`),rt(mt.$$.fragment),tt=l(`

`),rt(J.$$.fragment),R=l(`

`),w=p("p"),w.innerHTML=U,bt=l(`

`),X=p("p"),X.textContent=xt,st=l(`

`),rt(at.$$.fragment),A=l(`

`),h=p("p"),h.textContent=it,ot=l(`
`),rt(lt.$$.fragment),Dt=l(`


`),ft=p("p"),ft.innerHTML=pt,D=l(`

`),rt(g.$$.fragment),ut=l(`

`),Mt=p("p"),Mt.innerHTML=E,K=l(`
`),rt(Pt.$$.fragment),z=l(`

`),rt(et.$$.fragment),Nt=l(`

`),$t=p("p"),pe=l(`
    The Light command (and its alias the Ambient command) sets the ambient light color.
`),Ce&&Ce.c(),Ft=l(`
`),St=l(`

`),Ut=p("p"),Ut.innerHTML=Et,At=l(`

`),rt(Vt.$$.fragment),Ht=l(`

`),qt=p("p"),qt.textContent=jt,Zt=l(`

`),rt(Tt.$$.fragment),yt=l(`

`),Bt=p("p"),Bt.textContent=Rt,kt=l(`

`),rt(Yt.$$.fragment),ct=l(`

`),rt(wt.$$.fragment),Qt=l(`

`),rt(M.$$.fragment),B=l(`

`),Xt=p("p"),Xt.textContent=Gt,Jt=l(`

`),It=p("p"),S=l(`
    `),Ee.c(),Q=l(`
`),gt=l(`
`),Wt=p("ul"),we=l(`
    `),le=p("li"),le.textContent=ie,fe=l(`
    `),re=p("li"),re.textContent=se,ue=l(`
    `),ve&&ve.c(),Se=l(`
`),te=l(`
    `),b.c(),I=l(`

`),rt(ae.$$.fragment),Le=l(`
`),ee=p("p"),pl=l(`
    The fog command changes the fog color and density for the map.
    It has a near distance and a far distance, which are the distances from the camera where the fog starts and ends.
    `),$e&&$e.c(),He=l(`
`),qe=l(`

`),rt(de.$$.fragment),he=l(`

`),rt(ke.$$.fragment),je=l(`
`),me=p("p"),me.textContent=Rl,ce=l(`
`),rt(ne.$$.fragment),ge=l(`

`),rt(be.$$.fragment),Me=l(`
`),Ae=p("p"),r=l(`
    The configure command can change the configurations of a character. You should provide a list of configuration functions as the parameter.
    For more information the configuration functions you can use, see `),rt(L.$$.fragment),Re=l(`.
`),Ol=l(`

`),rt(We.$$.fragment),Vl=l(`

`),rt(Fe.$$.fragment),rt(Oe.$$.fragment),Yl=l(`


`),rt(Ve.$$.fragment),Ul=l(`
`),tl=p("p"),tl.textContent=_n,Zl=l(`
`),el=p("p"),el.textContent=dn,Bl=l(`
    
`),rt(Ye.$$.fragment),Gl=l(`

`),ll=p("p"),ll.textContent=hn,Jl=l(`
`),zt=p("dl"),fl=p("dt"),fl.textContent=bn,ul=p("dd"),ul.innerHTML=Mn,ol=p("dt"),ol.textContent=Pn,Cl=p("dd"),Cl.innerHTML=Sn,vl=p("dt"),vl.textContent=wn,$l=p("dd"),$l.innerHTML=kn,xl=p("dt"),xl.textContent=An,rl=p("dd"),rl.innerHTML=yn,_l=p("dt"),_l.textContent=Tn,dl=p("dd"),dl.innerHTML=zn,hl=p("dt"),hl.textContent=Dn,bl=p("dd"),bl.textContent=qn,Ml=p("dt"),Ml.textContent=Ln,ye=p("dd"),fn=l("When true, the player moves instantly to the new position. "),Pl=p("samp"),Pl.textContent=Hn,un=l(" or "),Sl=p("samp"),Sl.textContent=jn,on=l(`
        `),rt(Ue.$$.fragment),Cn=l(`
    `),wl=p("dt"),wl.textContent=cn,kl=p("dd"),kl.innerHTML=Nn,Al=p("dt"),Al.textContent=En,yl=p("dd"),yl.innerHTML=In,Tl=p("dt"),Tl.textContent=Rn,zl=p("dd"),zl.innerHTML=Wn,Dl=p("dt"),Dl.textContent=Fn,ql=p("dd"),ql.textContent=On,Ll=p("dt"),Ll.textContent=Vn,Hl=p("dd"),Hl.innerHTML=Yn,jl=p("dt"),jl.textContent=Un,cl=p("dd"),cl.innerHTML=Zn,Kl=l(`

`),rt(Ze.$$.fragment),Ql=l(`

`),rt(Be.$$.fragment),Xl=l(`

`),nl=p("p"),nl.textContent=Bn,gl=l(`
`),rt(Ge.$$.fragment),tn=l(`

`),rt(Je.$$.fragment),en=l(`

`),rt(Ke.$$.fragment),ln=l(`

`),Te=p("p"),vn=l(`
    To run a plugin command using javascript, you can use `),Nl=p("code"),nn=l(Wl),$n=l(".command"),xn=l(`.
    `),xe&&xe.c(),sn=l(`
    You can pass the parameters as separate arguments into the function as well.
`),an=l(`
Example:
`),rt(Qe.$$.fragment)},l(i){a=n(i,`
`),_t(s.$$.fragment,i),u=n(i,`

    `),oe&&oe.l(i),_=n(i,`

`),C=f(i,"P",{});var $=_e(C);x=n($,`Some commands (like lamp and flashlight) act on a character. By default the target character will be the current event. You can define your own target by providing a target string. A target string is the "@" character followed by an identifier.
    `),Ne.l($),q=n($,`
`),$.forEach(t),v=n(i,`
Example:
`),_t(P.$$.fragment,i),H=n(i,`
`),y=f(i,"P",{"data-svelte-h":!0}),o(y)!=="svelte-desj0i"&&(y.textContent=j),c=n(i,`
`),T=f(i,"UL",{"data-svelte-h":!0}),o(T)!=="svelte-y1gmy3"&&(T.innerHTML=W),k=n(i,`


`),N=f(i,"P",{"data-svelte-h":!0}),o(N)!=="svelte-wm7q7v"&&(N.textContent=F),Z=n(i,`

`),Y=f(i,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-ibg6us"&&(Y.textContent=O),V=n(i,`
Example:
`),_t(mt.$$.fragment,i),tt=n(i,`

`),_t(J.$$.fragment,i),R=n(i,`

`),w=f(i,"P",{"data-svelte-h":!0}),o(w)!=="svelte-cccd7m"&&(w.innerHTML=U),bt=n(i,`

`),X=f(i,"P",{"data-svelte-h":!0}),o(X)!=="svelte-1pk8hi9"&&(X.textContent=xt),st=n(i,`

`),_t(at.$$.fragment,i),A=n(i,`

`),h=f(i,"P",{"data-svelte-h":!0}),o(h)!=="svelte-o0hb91"&&(h.textContent=it),ot=n(i,`
`),_t(lt.$$.fragment,i),Dt=n(i,`


`),ft=f(i,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-1rf2jx2"&&(ft.innerHTML=pt),D=n(i,`

`),_t(g.$$.fragment,i),ut=n(i,`

`),Mt=f(i,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-w64j1e"&&(Mt.innerHTML=E),K=n(i,`
`),_t(Pt.$$.fragment,i),z=n(i,`

`),_t(et.$$.fragment,i),Nt=n(i,`

`),$t=f(i,"P",{});var il=_e($t);pe=n(il,`
    The Light command (and its alias the Ambient command) sets the ambient light color.
`),Ce&&Ce.l(il),Ft=n(il,`
`),il.forEach(t),St=n(i,`

`),Ut=f(i,"P",{"data-svelte-h":!0}),o(Ut)!=="svelte-2x2t8q"&&(Ut.innerHTML=Et),At=n(i,`

`),_t(Vt.$$.fragment,i),Ht=n(i,`

`),qt=f(i,"P",{"data-svelte-h":!0}),o(qt)!=="svelte-1wyewdv"&&(qt.textContent=jt),Zt=n(i,`

`),_t(Tt.$$.fragment,i),yt=n(i,`

`),Bt=f(i,"P",{"data-svelte-h":!0}),o(Bt)!=="svelte-1gd1k4j"&&(Bt.textContent=Rt),kt=n(i,`

`),_t(Yt.$$.fragment,i),ct=n(i,`

`),_t(wt.$$.fragment,i),Qt=n(i,`

`),_t(M.$$.fragment,i),B=n(i,`

`),Xt=f(i,"P",{"data-svelte-h":!0}),o(Xt)!=="svelte-19ryghp"&&(Xt.textContent=Gt),Jt=n(i,`

`),It=f(i,"P",{});var sl=_e(It);S=n(sl,`
    `),Ee.l(sl),Q=n(sl,`
`),sl.forEach(t),gt=n(i,`
`),Wt=f(i,"UL",{});var ze=_e(Wt);we=n(ze,`
    `),le=f(ze,"LI",{"data-svelte-h":!0}),o(le)!=="svelte-cwvqa7"&&(le.textContent=ie),fe=n(ze,`
    `),re=f(ze,"LI",{"data-svelte-h":!0}),o(re)!=="svelte-1dx83yp"&&(re.textContent=se),ue=n(ze,`
    `),ve&&ve.l(ze),Se=n(ze,`
`),ze.forEach(t),te=n(i,`
    `),b.l(i),I=n(i,`

`),_t(ae.$$.fragment,i),Le=n(i,`
`),ee=f(i,"P",{});var al=_e(ee);pl=n(al,`
    The fog command changes the fog color and density for the map.
    It has a near distance and a far distance, which are the distances from the camera where the fog starts and ends.
    `),$e&&$e.l(al),He=n(al,`
`),al.forEach(t),qe=n(i,`

`),_t(de.$$.fragment,i),he=n(i,`

`),_t(ke.$$.fragment,i),je=n(i,`
`),me=f(i,"P",{"data-svelte-h":!0}),o(me)!=="svelte-jvpabw"&&(me.textContent=Rl),ce=n(i,`
`),_t(ne.$$.fragment,i),ge=n(i,`

`),_t(be.$$.fragment,i),Me=n(i,`
`),Ae=f(i,"P",{});var ml=_e(Ae);r=n(ml,`
    The configure command can change the configurations of a character. You should provide a list of configuration functions as the parameter.
    For more information the configuration functions you can use, see `),_t(L.$$.fragment,ml),Re=n(ml,`.
`),ml.forEach(t),Ol=n(i,`

`),_t(We.$$.fragment,i),Vl=n(i,`

`),_t(Fe.$$.fragment,i),_t(Oe.$$.fragment,i),Yl=n(i,`


`),_t(Ve.$$.fragment,i),Ul=n(i,`
`),tl=f(i,"P",{"data-svelte-h":!0}),o(tl)!=="svelte-1xdtofa"&&(tl.textContent=_n),Zl=n(i,`
`),el=f(i,"P",{"data-svelte-h":!0}),o(el)!=="svelte-1jy56p0"&&(el.textContent=dn),Bl=n(i,`
    
`),_t(Ye.$$.fragment,i),Gl=n(i,`

`),ll=f(i,"P",{"data-svelte-h":!0}),o(ll)!=="svelte-rutver"&&(ll.textContent=hn),Jl=n(i,`
`),zt=f(i,"DL",{});var Lt=_e(zt);fl=f(Lt,"DT",{"data-svelte-h":!0}),o(fl)!=="svelte-1ilamju"&&(fl.textContent=bn),ul=f(Lt,"DD",{"data-svelte-h":!0}),o(ul)!=="svelte-dml8n2"&&(ul.innerHTML=Mn),ol=f(Lt,"DT",{"data-svelte-h":!0}),o(ol)!=="svelte-fy2pyf"&&(ol.textContent=Pn),Cl=f(Lt,"DD",{"data-svelte-h":!0}),o(Cl)!=="svelte-xt5rd3"&&(Cl.innerHTML=Sn),vl=f(Lt,"DT",{"data-svelte-h":!0}),o(vl)!=="svelte-pss6zv"&&(vl.textContent=wn),$l=f(Lt,"DD",{"data-svelte-h":!0}),o($l)!=="svelte-n6iirn"&&($l.innerHTML=kn),xl=f(Lt,"DT",{"data-svelte-h":!0}),o(xl)!=="svelte-u2n78g"&&(xl.textContent=An),rl=f(Lt,"DD",{"data-svelte-h":!0}),o(rl)!=="svelte-16wrx3u"&&(rl.innerHTML=yn),_l=f(Lt,"DT",{"data-svelte-h":!0}),o(_l)!=="svelte-115dma2"&&(_l.textContent=Tn),dl=f(Lt,"DD",{"data-svelte-h":!0}),o(dl)!=="svelte-eeu2x1"&&(dl.innerHTML=zn),hl=f(Lt,"DT",{"data-svelte-h":!0}),o(hl)!=="svelte-v6ojo0"&&(hl.textContent=Dn),bl=f(Lt,"DD",{"data-svelte-h":!0}),o(bl)!=="svelte-vm66pb"&&(bl.textContent=qn),Ml=f(Lt,"DT",{"data-svelte-h":!0}),o(Ml)!=="svelte-1wgzutm"&&(Ml.textContent=Ln),ye=f(Lt,"DD",{});var De=_e(ye);fn=n(De,"When true, the player moves instantly to the new position. "),Pl=f(De,"SAMP",{"data-svelte-h":!0}),o(Pl)!=="svelte-w3oc00"&&(Pl.textContent=Hn),un=n(De," or "),Sl=f(De,"SAMP",{"data-svelte-h":!0}),o(Sl)!=="svelte-yrx02b"&&(Sl.textContent=jn),on=n(De,`
        `),_t(Ue.$$.fragment,De),Cn=n(De,`
    `),De.forEach(t),wl=f(Lt,"DT",{"data-svelte-h":!0}),o(wl)!=="svelte-15vsl48"&&(wl.textContent=cn),kl=f(Lt,"DD",{"data-svelte-h":!0}),o(kl)!=="svelte-kxsakr"&&(kl.innerHTML=Nn),Al=f(Lt,"DT",{"data-svelte-h":!0}),o(Al)!=="svelte-zc8c4w"&&(Al.textContent=En),yl=f(Lt,"DD",{"data-svelte-h":!0}),o(yl)!=="svelte-yx9mef"&&(yl.innerHTML=In),Tl=f(Lt,"DT",{"data-svelte-h":!0}),o(Tl)!=="svelte-1nqsaqd"&&(Tl.textContent=Rn),zl=f(Lt,"DD",{"data-svelte-h":!0}),o(zl)!=="svelte-11sxzid"&&(zl.innerHTML=Wn),Dl=f(Lt,"DT",{"data-svelte-h":!0}),o(Dl)!=="svelte-1r4z69"&&(Dl.textContent=Fn),ql=f(Lt,"DD",{"data-svelte-h":!0}),o(ql)!=="svelte-77tmnd"&&(ql.textContent=On),Ll=f(Lt,"DT",{"data-svelte-h":!0}),o(Ll)!=="svelte-1gcl63k"&&(Ll.textContent=Vn),Hl=f(Lt,"DD",{"data-svelte-h":!0}),o(Hl)!=="svelte-mkn3yc"&&(Hl.innerHTML=Yn),jl=f(Lt,"DT",{"data-svelte-h":!0}),o(jl)!=="svelte-pxjtjx"&&(jl.textContent=Un),cl=f(Lt,"DD",{"data-svelte-h":!0}),o(cl)!=="svelte-1sauxoo"&&(cl.innerHTML=Zn),Lt.forEach(t),Kl=n(i,`

`),_t(Ze.$$.fragment,i),Ql=n(i,`

`),_t(Be.$$.fragment,i),Xl=n(i,`

`),nl=f(i,"P",{"data-svelte-h":!0}),o(nl)!=="svelte-1emkn63"&&(nl.textContent=Bn),gl=n(i,`
`),_t(Ge.$$.fragment,i),tn=n(i,`

`),_t(Je.$$.fragment,i),en=n(i,`

`),_t(Ke.$$.fragment,i),ln=n(i,`

`),Te=f(i,"P",{});var Ie=_e(Te);vn=n(Ie,`
    To run a plugin command using javascript, you can use `),Nl=f(Ie,"CODE",{});var El=_e(Nl);nn=n(El,Wl),$n=n(El,".command"),El.forEach(t),xn=n(Ie,`.
    `),xe&&xe.l(Ie),sn=n(Ie,`
    You can pass the parameters as separate arguments into the function as well.
`),Ie.forEach(t),an=n(i,`
Example:
`),_t(Qe.$$.fragment,i)},m(i,$){e(i,a,$),dt(s,i,$),e(i,u,$),oe&&oe.m(i,$),e(i,_,$),e(i,C,$),nt(C,x),Ne.m(C,null),nt(C,q),e(i,v,$),dt(P,i,$),e(i,H,$),e(i,y,$),e(i,c,$),e(i,T,$),e(i,k,$),e(i,N,$),e(i,Z,$),e(i,Y,$),e(i,V,$),dt(mt,i,$),e(i,tt,$),dt(J,i,$),e(i,R,$),e(i,w,$),e(i,bt,$),e(i,X,$),e(i,st,$),dt(at,i,$),e(i,A,$),e(i,h,$),e(i,ot,$),dt(lt,i,$),e(i,Dt,$),e(i,ft,$),e(i,D,$),dt(g,i,$),e(i,ut,$),e(i,Mt,$),e(i,K,$),dt(Pt,i,$),e(i,z,$),dt(et,i,$),e(i,Nt,$),e(i,$t,$),nt($t,pe),Ce&&Ce.m($t,null),nt($t,Ft),e(i,St,$),e(i,Ut,$),e(i,At,$),dt(Vt,i,$),e(i,Ht,$),e(i,qt,$),e(i,Zt,$),dt(Tt,i,$),e(i,yt,$),e(i,Bt,$),e(i,kt,$),dt(Yt,i,$),e(i,ct,$),dt(wt,i,$),e(i,Qt,$),dt(M,i,$),e(i,B,$),e(i,Xt,$),e(i,Jt,$),e(i,It,$),nt(It,S),Ee.m(It,null),nt(It,Q),e(i,gt,$),e(i,Wt,$),nt(Wt,we),nt(Wt,le),nt(Wt,fe),nt(Wt,re),nt(Wt,ue),ve&&ve.m(Wt,null),nt(Wt,Se),e(i,te,$),Xe[Kt].m(i,$),e(i,I,$),dt(ae,i,$),e(i,Le,$),e(i,ee,$),nt(ee,pl),$e&&$e.m(ee,null),nt(ee,He),e(i,qe,$),dt(de,i,$),e(i,he,$),dt(ke,i,$),e(i,je,$),e(i,me,$),e(i,ce,$),dt(ne,i,$),e(i,ge,$),dt(be,i,$),e(i,Me,$),e(i,Ae,$),nt(Ae,r),dt(L,Ae,null),nt(Ae,Re),e(i,Ol,$),dt(We,i,$),e(i,Vl,$),dt(Fe,i,$),dt(Oe,i,$),e(i,Yl,$),dt(Ve,i,$),e(i,Ul,$),e(i,tl,$),e(i,Zl,$),e(i,el,$),e(i,Bl,$),dt(Ye,i,$),e(i,Gl,$),e(i,ll,$),e(i,Jl,$),e(i,zt,$),nt(zt,fl),nt(zt,ul),nt(zt,ol),nt(zt,Cl),nt(zt,vl),nt(zt,$l),nt(zt,xl),nt(zt,rl),nt(zt,_l),nt(zt,dl),nt(zt,hl),nt(zt,bl),nt(zt,Ml),nt(zt,ye),nt(ye,fn),nt(ye,Pl),nt(ye,un),nt(ye,Sl),nt(ye,on),dt(Ue,ye,null),nt(ye,Cn),nt(zt,wl),nt(zt,kl),nt(zt,Al),nt(zt,yl),nt(zt,Tl),nt(zt,zl),nt(zt,Dl),nt(zt,ql),nt(zt,Ll),nt(zt,Hl),nt(zt,jl),nt(zt,cl),e(i,Kl,$),dt(Ze,i,$),e(i,Ql,$),dt(Be,i,$),e(i,Xl,$),e(i,nl,$),e(i,gl,$),dt(Ge,i,$),e(i,tn,$),dt(Je,i,$),e(i,en,$),dt(Ke,i,$),e(i,ln,$),e(i,Te,$),nt(Te,vn),nt(Te,Nl),nt(Nl,nn),nt(Nl,$n),nt(Te,xn),xe&&xe.m(Te,null),nt(Te,sn),e(i,an,$),dt(Qe,i,$),Fl=!0},p(i,[$]){i[0].pluginName==="mz3d"?oe||(oe=bi(),oe.c(),oe.m(_.parentNode,_)):oe&&(oe.d(1),oe=null),mn!==(mn=Gn(i))&&(Ne.d(1),Ne=mn(i),Ne&&(Ne.c(),Ne.m(C,q)));const il={};$&10&&(il.$$scope={dirty:$,ctx:i}),P.$set(il);const sl={};$&10&&(sl.$$scope={dirty:$,ctx:i}),mt.$set(sl);const ze={};$&8&&(ze.$$scope={dirty:$,ctx:i}),J.$set(ze);const al={};$&10&&(al.$$scope={dirty:$,ctx:i}),at.$set(al);const ml={};$&10&&(ml.$$scope={dirty:$,ctx:i}),lt.$set(ml);const Lt={};$&10&&(Lt.$$scope={dirty:$,ctx:i}),g.$set(Lt);const De={};$&10&&(De.$$scope={dirty:$,ctx:i}),Pt.$set(De);const Ie={};$&8&&(Ie.$$scope={dirty:$,ctx:i}),et.$set(Ie),i[0].premium?Ce||(Ce=Mi(),Ce.c(),Ce.m($t,Ft)):Ce&&(Ce.d(1),Ce=null);const El={};$&10&&(El.$$scope={dirty:$,ctx:i}),Vt.$set(El);const Xn={};$&10&&(Xn.$$scope={dirty:$,ctx:i}),Tt.$set(Xn);const gn={};$&10&&(gn.$$scope={dirty:$,ctx:i}),Yt.$set(gn);const ti={};$&10&&(ti.$$scope={dirty:$,ctx:i}),wt.$set(ti);const ei={};$&8&&(ei.$$scope={dirty:$,ctx:i}),M.$set(ei),pn!==(pn=Jn(i))&&(Ee.d(1),Ee=pn(i),Ee&&(Ee.c(),Ee.m(It,Q))),i[0].pluginName==="mz3d"?ve||(ve=Pi(),ve.c(),ve.m(Wt,Se)):ve&&(ve.d(1),ve=null);let rn=Kt;Kt=Qn(i),Kt===rn?Xe[Kt].p(i,$):(Di(),Ct(Xe[rn],1,1,()=>{Xe[rn]=null}),zi(),b=Xe[Kt],b?b.p(i,$):(b=Xe[Kt]=Kn[Kt](i),b.c()),vt(b,1),b.m(I.parentNode,I));const li={};$&8&&(li.$$scope={dirty:$,ctx:i}),ae.$set(li),i[0].premium?$e||($e=Si(),$e.c(),$e.m(ee,He)):$e&&($e.d(1),$e=null);const ni={};$&10&&(ni.$$scope={dirty:$,ctx:i}),de.$set(ni);const ii={};$&8&&(ii.$$scope={dirty:$,ctx:i}),ke.$set(ii);const si={};$&10&&(si.$$scope={dirty:$,ctx:i}),ne.$set(si);const ai={};$&8&&(ai.$$scope={dirty:$,ctx:i}),be.$set(ai);const mi={};$&8&&(mi.$$scope={dirty:$,ctx:i}),L.$set(mi);const pi={};$&10&&(pi.$$scope={dirty:$,ctx:i}),We.$set(pi);const fi={};$&10&&(fi.$$scope={dirty:$,ctx:i}),Fe.$set(fi);const ui={};$&10&&(ui.$$scope={dirty:$,ctx:i}),Oe.$set(ui);const oi={};$&8&&(oi.$$scope={dirty:$,ctx:i}),Ve.$set(oi);const Ci={};$&10&&(Ci.$$scope={dirty:$,ctx:i}),Ye.$set(Ci);const vi={};$&8&&(vi.$$scope={dirty:$,ctx:i}),Ue.$set(vi);const $i={};$&8&&($i.$$scope={dirty:$,ctx:i}),Ze.$set($i);const xi={};$&8&&(xi.$$scope={dirty:$,ctx:i}),Be.$set(xi);const ri={};$&10&&(ri.$$scope={dirty:$,ctx:i}),Ge.$set(ri);const _i={};$&11&&(_i.$$scope={dirty:$,ctx:i}),Je.$set(_i);const di={};$&8&&(di.$$scope={dirty:$,ctx:i}),Ke.$set(di),(!Fl||$&1)&&Wl!==(Wl=i[0].pluginName+"")&&G(nn,Wl),i[0].pluginName==="mv3d"?xe||(xe=wi(),xe.c(),xe.m(Te,sn)):xe&&(xe.d(1),xe=null);const hi={};$&9&&(hi.$$scope={dirty:$,ctx:i}),Qe.$set(hi)},i(i){Fl||(vt(s.$$.fragment,i),vt(P.$$.fragment,i),vt(mt.$$.fragment,i),vt(J.$$.fragment,i),vt(at.$$.fragment,i),vt(lt.$$.fragment,i),vt(g.$$.fragment,i),vt(Pt.$$.fragment,i),vt(et.$$.fragment,i),vt(Vt.$$.fragment,i),vt(Tt.$$.fragment,i),vt(Yt.$$.fragment,i),vt(wt.$$.fragment,i),vt(M.$$.fragment,i),vt(b),vt(ae.$$.fragment,i),vt(de.$$.fragment,i),vt(ke.$$.fragment,i),vt(ne.$$.fragment,i),vt(be.$$.fragment,i),vt(L.$$.fragment,i),vt(We.$$.fragment,i),vt(Fe.$$.fragment,i),vt(Oe.$$.fragment,i),vt(Ve.$$.fragment,i),vt(Ye.$$.fragment,i),vt(Ue.$$.fragment,i),vt(Ze.$$.fragment,i),vt(Be.$$.fragment,i),vt(Ge.$$.fragment,i),vt(Je.$$.fragment,i),vt(Ke.$$.fragment,i),vt(Qe.$$.fragment,i),Fl=!0)},o(i){Ct(s.$$.fragment,i),Ct(P.$$.fragment,i),Ct(mt.$$.fragment,i),Ct(J.$$.fragment,i),Ct(at.$$.fragment,i),Ct(lt.$$.fragment,i),Ct(g.$$.fragment,i),Ct(Pt.$$.fragment,i),Ct(et.$$.fragment,i),Ct(Vt.$$.fragment,i),Ct(Tt.$$.fragment,i),Ct(Yt.$$.fragment,i),Ct(wt.$$.fragment,i),Ct(M.$$.fragment,i),Ct(b),Ct(ae.$$.fragment,i),Ct(de.$$.fragment,i),Ct(ke.$$.fragment,i),Ct(ne.$$.fragment,i),Ct(be.$$.fragment,i),Ct(L.$$.fragment,i),Ct(We.$$.fragment,i),Ct(Fe.$$.fragment,i),Ct(Oe.$$.fragment,i),Ct(Ve.$$.fragment,i),Ct(Ye.$$.fragment,i),Ct(Ue.$$.fragment,i),Ct(Ze.$$.fragment,i),Ct(Be.$$.fragment,i),Ct(Ge.$$.fragment,i),Ct(Je.$$.fragment,i),Ct(Ke.$$.fragment,i),Ct(Qe.$$.fragment,i),Fl=!1},d(i){i&&(t(a),t(u),t(_),t(C),t(v),t(H),t(y),t(c),t(T),t(k),t(N),t(Z),t(Y),t(V),t(tt),t(R),t(w),t(bt),t(X),t(st),t(A),t(h),t(ot),t(Dt),t(ft),t(D),t(ut),t(Mt),t(K),t(z),t(Nt),t($t),t(St),t(Ut),t(At),t(Ht),t(qt),t(Zt),t(yt),t(Bt),t(kt),t(ct),t(Qt),t(B),t(Xt),t(Jt),t(It),t(gt),t(Wt),t(te),t(I),t(Le),t(ee),t(qe),t(he),t(je),t(me),t(ce),t(ge),t(Me),t(Ae),t(Ol),t(Vl),t(Yl),t(Ul),t(tl),t(Zl),t(el),t(Bl),t(Gl),t(ll),t(Jl),t(zt),t(Kl),t(Ql),t(Xl),t(nl),t(gl),t(tn),t(en),t(ln),t(Te),t(an)),ht(s,i),oe&&oe.d(i),Ne.d(),ht(P,i),ht(mt,i),ht(J,i),ht(at,i),ht(lt,i),ht(g,i),ht(Pt,i),ht(et,i),Ce&&Ce.d(),ht(Vt,i),ht(Tt,i),ht(Yt,i),ht(wt,i),ht(M,i),Ee.d(),ve&&ve.d(),Xe[Kt].d(i),ht(ae,i),$e&&$e.d(),ht(de,i),ht(ke,i),ht(ne,i),ht(be,i),ht(L),ht(We,i),ht(Fe,i),ht(Oe,i),ht(Ve,i),ht(Ye,i),ht(Ue),ht(Ze,i),ht(Be,i),ht(Ge,i),ht(Je,i),ht(Ke,i),xe&&xe.d(),ht(Qe,i)}}}function zs(m,a,s){let{data:u}=a;const _=u.premium;let C;return m.$$set=x=>{"data"in x&&s(0,u=x.data)},m.$$.update=()=>{m.$$.dirty&1&&s(1,C=u.pluginName==="mv3d"?"mv3d ":"")},[u,C,_]}class Es extends yi{constructor(a){super(),Ti(this,a,zs,Ts,ki,{data:0})}}export{Es as component};
