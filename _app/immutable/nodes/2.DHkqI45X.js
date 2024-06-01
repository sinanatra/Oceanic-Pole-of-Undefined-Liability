import{s as te,e as an,b as Tn,t as gn,d as un,f as O,O as Et,j as qn,h as _n,i as M,v as d,k as W,l as V,m as Mn,n as En,w as Pn,P as Ot,Q as Ht,R as Y,S as Z,T as mn,r as St,p as tn,U as Xn,F as Vt,V as jt}from"../chunks/scheduler.DYE9INWR.js";import{S as ie,i as re,b as fe,d as se,m as ce,t as Fn,a as Bn,e as he,c as Yt,g as Zt}from"../chunks/index.A8tsFJ8X.js";function x(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function bt(e){return e}function Gt(e){if(e==null)return bt;var n,i,t=e.scale[0],r=e.scale[1],l=e.translate[0],o=e.translate[1];return function(a,s){s||(n=i=0);var h=2,u=a.length,f=new Array(u);for(f[0]=(n+=a[0])*t+l,f[1]=(i+=a[1])*r+o;h<u;)f[h]=a[h],++h;return f}}function Xt(e,n){for(var i,t=e.length,r=t-n;r<--t;)i=e[r],e[r++]=e[t],e[t]=i}function Vn(e,n){return typeof n=="string"&&(n=e.objects[n]),n.type==="GeometryCollection"?{type:"FeatureCollection",features:n.geometries.map(function(i){return Ce(e,i)})}:Ce(e,n)}function Ce(e,n){var i=n.id,t=n.bbox,r=n.properties==null?{}:n.properties,l=Wt(e,n);return i==null&&t==null?{type:"Feature",properties:r,geometry:l}:t==null?{type:"Feature",id:i,properties:r,geometry:l}:{type:"Feature",id:i,bbox:t,properties:r,geometry:l}}function Wt(e,n){var i=Gt(e.transform),t=e.arcs;function r(u,f){f.length&&f.pop();for(var c=t[u<0?~u:u],g=0,v=c.length;g<v;++g)f.push(i(c[g],g));u<0&&Xt(f,v)}function l(u){return i(u)}function o(u){for(var f=[],c=0,g=u.length;c<g;++c)r(u[c],f);return f.length<2&&f.push(f[0]),f}function a(u){for(var f=o(u);f.length<4;)f.push(f[0]);return f}function s(u){return u.map(a)}function h(u){var f=u.type,c;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(h)};case"Point":c=l(u.coordinates);break;case"MultiPoint":c=u.coordinates.map(l);break;case"LineString":c=o(u.arcs);break;case"MultiLineString":c=u.arcs.map(o);break;case"Polygon":c=s(u.arcs);break;case"MultiPolygon":c=u.arcs.map(s);break;default:return null}return{type:f,coordinates:c}}return h(n)}class Sn{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const i=this._partials;let t=0;for(let r=0;r<this._n&&r<32;r++){const l=i[r],o=n+l,a=Math.abs(n)<Math.abs(l)?n-(o-l):l-(o-n);a&&(i[t++]=a),n=o}return i[t]=n,this._n=t+1,this}valueOf(){const n=this._partials;let i=this._n,t,r,l,o=0;if(i>0){for(o=n[--i];i>0&&(t=o,r=n[--i],o=t+r,l=r-(o-t),!l););i>0&&(l<0&&n[i-1]<0||l>0&&n[i-1]>0)&&(r=l*2,t=o+r,r==t-o&&(o=t))}return o}}function*Ut(e){for(const n of e)yield*n}function yt(e){return Array.from(Ut(e))}var b=1e-6,Qt=1e-12,H=Math.PI,rn=H/2,Te=H/4,on=H*2,hn=180/H,nn=H/180,Q=Math.abs,Jt=Math.atan,Nn=Math.atan2,X=Math.cos,G=Math.sin,Kt=Math.sign||function(e){return e>0?1:e<0?-1:0},vn=Math.sqrt;function wt(e){return e>1?0:e<-1?H:Math.acos(e)}function Rn(e){return e>1?rn:e<-1?-rn:Math.asin(e)}function ln(){}function Wn(e,n){e&&Fe.hasOwnProperty(e.type)&&Fe[e.type](e,n)}var qe={Feature:function(e,n){Wn(e.geometry,n)},FeatureCollection:function(e,n){for(var i=e.features,t=-1,r=i.length;++t<r;)Wn(i[t].geometry,n)}},Fe={Sphere:function(e,n){n.sphere()},Point:function(e,n){e=e.coordinates,n.point(e[0],e[1],e[2])},MultiPoint:function(e,n){for(var i=e.coordinates,t=-1,r=i.length;++t<r;)e=i[t],n.point(e[0],e[1],e[2])},LineString:function(e,n){pe(e.coordinates,n,0)},MultiLineString:function(e,n){for(var i=e.coordinates,t=-1,r=i.length;++t<r;)pe(i[t],n,0)},Polygon:function(e,n){Be(e.coordinates,n)},MultiPolygon:function(e,n){for(var i=e.coordinates,t=-1,r=i.length;++t<r;)Be(i[t],n)},GeometryCollection:function(e,n){for(var i=e.geometries,t=-1,r=i.length;++t<r;)Wn(i[t],n)}};function pe(e,n,i){var t=-1,r=e.length-i,l;for(n.lineStart();++t<r;)l=e[t],n.point(l[0],l[1],l[2]);n.lineEnd()}function Be(e,n){var i=-1,t=e.length;for(n.polygonStart();++i<t;)pe(e[i],n,1);n.polygonEnd()}function wn(e,n){e&&qe.hasOwnProperty(e.type)?qe[e.type](e,n):Wn(e,n)}function ge(e){return[Nn(e[1],e[0]),Rn(e[2])]}function In(e){var n=e[0],i=e[1],t=X(i);return[t*X(n),t*G(n),G(i)]}function jn(e,n){return e[0]*n[0]+e[1]*n[1]+e[2]*n[2]}function Un(e,n){return[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]]}function le(e,n){e[0]+=n[0],e[1]+=n[1],e[2]+=n[2]}function Yn(e,n){return[e[0]*n,e[1]*n,e[2]*n]}function _e(e){var n=vn(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=n,e[1]/=n,e[2]/=n}function ve(e,n){function i(t,r){return t=e(t,r),n(t[0],t[1])}return e.invert&&n.invert&&(i.invert=function(t,r){return t=n.invert(t,r),t&&e.invert(t[0],t[1])}),i}function de(e,n){return Q(e)>H&&(e-=Math.round(e/on)*on),[e,n]}de.invert=de;function xt(e,n,i){return(e%=on)?n||i?ve(He(e),Ve(n,i)):He(e):n||i?Ve(n,i):de}function Oe(e){return function(n,i){return n+=e,Q(n)>H&&(n-=Math.round(n/on)*on),[n,i]}}function He(e){var n=Oe(e);return n.invert=Oe(-e),n}function Ve(e,n){var i=X(e),t=G(e),r=X(n),l=G(n);function o(a,s){var h=X(s),u=X(a)*h,f=G(a)*h,c=G(s),g=c*i+u*t;return[Nn(f*r-g*l,u*i-c*t),Rn(g*r+f*l)]}return o.invert=function(a,s){var h=X(s),u=X(a)*h,f=G(a)*h,c=G(s),g=c*r-f*l;return[Nn(f*r+c*l,u*i+g*t),Rn(g*i-u*t)]},o}function ni(e,n,i,t,r,l){if(i){var o=X(n),a=G(n),s=t*i;r==null?(r=n+t*on,l=n-s/2):(r=je(o,r),l=je(o,l),(t>0?r<l:r>l)&&(r+=t*on));for(var h,u=r;t>0?u>l:u<l;u-=s)h=ge([o,-a*X(u),-a*G(u)]),e.point(h[0],h[1])}}function je(e,n){n=In(n),n[0]-=e,_e(n);var i=wt(-n[1]);return((-n[2]<0?-i:i)+on-b)%on}function Pt(){var e=[],n;return{point:function(i,t,r){n.push([i,t,r])},lineStart:function(){e.push(n=[])},lineEnd:ln,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var i=e;return e=[],n=null,i}}}function Gn(e,n){return Q(e[0]-n[0])<b&&Q(e[1]-n[1])<b}function Zn(e,n,i,t){this.x=e,this.z=n,this.o=i,this.e=t,this.v=!1,this.n=this.p=null}function kt(e,n,i,t,r){var l=[],o=[],a,s;if(e.forEach(function(v){if(!((R=v.length-1)<=0)){var R,S=v[0],N=v[R],w;if(Gn(S,N)){if(!S[2]&&!N[2]){for(r.lineStart(),a=0;a<R;++a)r.point((S=v[a])[0],S[1]);r.lineEnd();return}N[0]+=2*b}l.push(w=new Zn(S,v,null,!0)),o.push(w.o=new Zn(S,null,w,!1)),l.push(w=new Zn(N,v,null,!1)),o.push(w.o=new Zn(N,null,w,!0))}}),!!l.length){for(o.sort(n),Ye(l),Ye(o),a=0,s=o.length;a<s;++a)o[a].e=i=!i;for(var h=l[0],u,f;;){for(var c=h,g=!0;c.v;)if((c=c.n)===h)return;u=c.z,r.lineStart();do{if(c.v=c.o.v=!0,c.e){if(g)for(a=0,s=u.length;a<s;++a)r.point((f=u[a])[0],f[1]);else t(c.x,c.n.x,1,r);c=c.n}else{if(g)for(u=c.p.z,a=u.length-1;a>=0;--a)r.point((f=u[a])[0],f[1]);else t(c.x,c.p.x,-1,r);c=c.p}c=c.o,u=c.z,g=!g}while(!c.v);r.lineEnd()}}}function Ye(e){if(n=e.length){for(var n,i=0,t=e[0],r;++i<n;)t.n=r=e[i],r.p=t,t=r;t.n=r=e[0],r.p=t}}function oe(e){return Q(e[0])<=H?e[0]:Kt(e[0])*((Q(e[0])+H)%on-H)}function ei(e,n){var i=oe(n),t=n[1],r=G(t),l=[G(i),-X(i),0],o=0,a=0,s=new Sn;r===1?t=rn+b:r===-1&&(t=-rn-b);for(var h=0,u=e.length;h<u;++h)if(c=(f=e[h]).length)for(var f,c,g=f[c-1],v=oe(g),R=g[1]/2+Te,S=G(R),N=X(R),w=0;w<c;++w,v=E,S=k,N=q,g=I){var I=f[w],E=oe(I),z=I[1]/2+Te,k=G(z),q=X(z),y=E-v,A=y>=0?1:-1,$=A*y,P=$>H,J=S*k;if(s.add(Nn(J*A*G($),N*q+J*X($))),o+=P?y+A*on:y,P^v>=i^E>=i){var T=Un(In(g),In(I));_e(T);var B=Un(l,T);_e(B);var _=(P^y>=0?-1:1)*Rn(B[2]);(t>_||t===_&&(T[0]||T[1]))&&(a+=P^y>=0?1:-1)}}return(o<-b||o<b&&s<-Qt)^a&1}function Mt(e,n,i,t){return function(r){var l=n(r),o=Pt(),a=n(o),s=!1,h,u,f,c={point:g,lineStart:R,lineEnd:S,polygonStart:function(){c.point=N,c.lineStart=w,c.lineEnd=I,u=[],h=[]},polygonEnd:function(){c.point=g,c.lineStart=R,c.lineEnd=S,u=yt(u);var E=ei(h,t);u.length?(s||(r.polygonStart(),s=!0),kt(u,ii,E,i,r)):E&&(s||(r.polygonStart(),s=!0),r.lineStart(),i(null,null,1,r),r.lineEnd()),s&&(r.polygonEnd(),s=!1),u=h=null},sphere:function(){r.polygonStart(),r.lineStart(),i(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function g(E,z){e(E,z)&&r.point(E,z)}function v(E,z){l.point(E,z)}function R(){c.point=v,l.lineStart()}function S(){c.point=g,l.lineEnd()}function N(E,z){f.push([E,z]),a.point(E,z)}function w(){a.lineStart(),f=[]}function I(){N(f[0][0],f[0][1]),a.lineEnd();var E=a.clean(),z=o.result(),k,q=z.length,y,A,$;if(f.pop(),h.push(f),f=null,!!q){if(E&1){if(A=z[0],(y=A.length-1)>0){for(s||(r.polygonStart(),s=!0),r.lineStart(),k=0;k<y;++k)r.point(($=A[k])[0],$[1]);r.lineEnd()}return}q>1&&E&2&&z.push(z.pop().concat(z.shift())),u.push(z.filter(ti))}}return c}}function ti(e){return e.length>1}function ii(e,n){return((e=e.x)[0]<0?e[1]-rn-b:rn-e[1])-((n=n.x)[0]<0?n[1]-rn-b:rn-n[1])}const Ze=Mt(function(){return!0},ri,oi,[-H,-rn]);function ri(e){var n=NaN,i=NaN,t=NaN,r;return{lineStart:function(){e.lineStart(),r=1},point:function(l,o){var a=l>0?H:-H,s=Q(l-n);Q(s-H)<b?(e.point(n,i=(i+o)/2>0?rn:-rn),e.point(t,i),e.lineEnd(),e.lineStart(),e.point(a,i),e.point(l,i),r=0):t!==a&&s>=H&&(Q(n-t)<b&&(n-=t*b),Q(l-a)<b&&(l-=a*b),i=li(n,i,l,o),e.point(t,i),e.lineEnd(),e.lineStart(),e.point(a,i),r=0),e.point(n=l,i=o),t=a},lineEnd:function(){e.lineEnd(),n=i=NaN},clean:function(){return 2-r}}}function li(e,n,i,t){var r,l,o=G(e-i);return Q(o)>b?Jt((G(n)*(l=X(t))*G(i)-G(t)*(r=X(n))*G(e))/(r*l*o)):(n+t)/2}function oi(e,n,i,t){var r;if(e==null)r=i*rn,t.point(-H,r),t.point(0,r),t.point(H,r),t.point(H,0),t.point(H,-r),t.point(0,-r),t.point(-H,-r),t.point(-H,0),t.point(-H,r);else if(Q(e[0]-n[0])>b){var l=e[0]<n[0]?H:-H;r=i*l/2,t.point(-l,r),t.point(0,r),t.point(l,r)}else t.point(n[0],n[1])}function ai(e){var n=X(e),i=2*nn,t=n>0,r=Q(n)>b;function l(u,f,c,g){ni(g,e,i,c,u,f)}function o(u,f){return X(u)*X(f)>n}function a(u){var f,c,g,v,R;return{lineStart:function(){v=g=!1,R=1},point:function(S,N){var w=[S,N],I,E=o(S,N),z=t?E?0:h(S,N):E?h(S+(S<0?H:-H),N):0;if(!f&&(v=g=E)&&u.lineStart(),E!==g&&(I=s(f,w),(!I||Gn(f,I)||Gn(w,I))&&(w[2]=1)),E!==g)R=0,E?(u.lineStart(),I=s(w,f),u.point(I[0],I[1])):(I=s(f,w),u.point(I[0],I[1],2),u.lineEnd()),f=I;else if(r&&f&&t^E){var k;!(z&c)&&(k=s(w,f,!0))&&(R=0,t?(u.lineStart(),u.point(k[0][0],k[0][1]),u.point(k[1][0],k[1][1]),u.lineEnd()):(u.point(k[1][0],k[1][1]),u.lineEnd(),u.lineStart(),u.point(k[0][0],k[0][1],3)))}E&&(!f||!Gn(f,w))&&u.point(w[0],w[1]),f=w,g=E,c=z},lineEnd:function(){g&&u.lineEnd(),f=null},clean:function(){return R|(v&&g)<<1}}}function s(u,f,c){var g=In(u),v=In(f),R=[1,0,0],S=Un(g,v),N=jn(S,S),w=S[0],I=N-w*w;if(!I)return!c&&u;var E=n*N/I,z=-n*w/I,k=Un(R,S),q=Yn(R,E),y=Yn(S,z);le(q,y);var A=k,$=jn(q,A),P=jn(A,A),J=$*$-P*(jn(q,q)-1);if(!(J<0)){var T=vn(J),B=Yn(A,(-$-T)/P);if(le(B,q),B=ge(B),!c)return B;var _=u[0],D=f[0],F=u[1],p=f[1],C;D<_&&(C=_,_=D,D=C);var L=D-_,K=Q(L-H)<b,m=K||L<b;if(!K&&p<F&&(C=F,F=p,p=C),m?K?F+p>0^B[1]<(Q(B[0]-_)<b?F:p):F<=B[1]&&B[1]<=p:L>H^(_<=B[0]&&B[0]<=D)){var j=Yn(A,(-$+T)/P);return le(j,q),[B,ge(j)]}}}function h(u,f){var c=t?e:H-e,g=0;return u<-c?g|=1:u>c&&(g|=2),f<-c?g|=4:f>c&&(g|=8),g}return Mt(o,a,l,t?[0,-e]:[-H,e-H])}function ui(e,n,i,t,r,l){var o=e[0],a=e[1],s=n[0],h=n[1],u=0,f=1,c=s-o,g=h-a,v;if(v=i-o,!(!c&&v>0)){if(v/=c,c<0){if(v<u)return;v<f&&(f=v)}else if(c>0){if(v>f)return;v>u&&(u=v)}if(v=r-o,!(!c&&v<0)){if(v/=c,c<0){if(v>f)return;v>u&&(u=v)}else if(c>0){if(v<u)return;v<f&&(f=v)}if(v=t-a,!(!g&&v>0)){if(v/=g,g<0){if(v<u)return;v<f&&(f=v)}else if(g>0){if(v>f)return;v>u&&(u=v)}if(v=l-a,!(!g&&v<0)){if(v/=g,g<0){if(v>f)return;v>u&&(u=v)}else if(g>0){if(v<u)return;v<f&&(f=v)}return u>0&&(e[0]=o+u*c,e[1]=a+u*g),f<1&&(n[0]=o+f*c,n[1]=a+f*g),!0}}}}}var $n=1e9,bn=-$n;function fi(e,n,i,t){function r(h,u){return e<=h&&h<=i&&n<=u&&u<=t}function l(h,u,f,c){var g=0,v=0;if(h==null||(g=o(h,f))!==(v=o(u,f))||s(h,u)<0^f>0)do c.point(g===0||g===3?e:i,g>1?t:n);while((g=(g+f+4)%4)!==v);else c.point(u[0],u[1])}function o(h,u){return Q(h[0]-e)<b?u>0?0:3:Q(h[0]-i)<b?u>0?2:1:Q(h[1]-n)<b?u>0?1:0:u>0?3:2}function a(h,u){return s(h.x,u.x)}function s(h,u){var f=o(h,1),c=o(u,1);return f!==c?f-c:f===0?u[1]-h[1]:f===1?h[0]-u[0]:f===2?h[1]-u[1]:u[0]-h[0]}return function(h){var u=h,f=Pt(),c,g,v,R,S,N,w,I,E,z,k,q={point:y,lineStart:J,lineEnd:T,polygonStart:$,polygonEnd:P};function y(_,D){r(_,D)&&u.point(_,D)}function A(){for(var _=0,D=0,F=g.length;D<F;++D)for(var p=g[D],C=1,L=p.length,K=p[0],m,j,dn=K[0],cn=K[1];C<L;++C)m=dn,j=cn,K=p[C],dn=K[0],cn=K[1],j<=t?cn>t&&(dn-m)*(t-j)>(cn-j)*(e-m)&&++_:cn<=t&&(dn-m)*(t-j)<(cn-j)*(e-m)&&--_;return _}function $(){u=f,c=[],g=[],k=!0}function P(){var _=A(),D=k&&_,F=(c=yt(c)).length;(D||F)&&(h.polygonStart(),D&&(h.lineStart(),l(null,null,1,h),h.lineEnd()),F&&kt(c,a,_,l,h),h.polygonEnd()),u=h,c=g=v=null}function J(){q.point=B,g&&g.push(v=[]),z=!0,E=!1,w=I=NaN}function T(){c&&(B(R,S),N&&E&&f.rejoin(),c.push(f.result())),q.point=y,E&&u.lineEnd()}function B(_,D){var F=r(_,D);if(g&&v.push([_,D]),z)R=_,S=D,N=F,z=!1,F&&(u.lineStart(),u.point(_,D));else if(F&&E)u.point(_,D);else{var p=[w=Math.max(bn,Math.min($n,w)),I=Math.max(bn,Math.min($n,I))],C=[_=Math.max(bn,Math.min($n,_)),D=Math.max(bn,Math.min($n,D))];ui(p,C,e,n,i,t)?(E||(u.lineStart(),u.point(p[0],p[1])),u.point(C[0],C[1]),F||u.lineEnd(),k=!1):F&&(u.lineStart(),u.point(_,D),k=!1)}w=_,I=D,E=F}return q}}const me=e=>e;var ae=new Sn,Ee=new Sn,Nt,Rt,Se,ye,pn={point:ln,lineStart:ln,lineEnd:ln,polygonStart:function(){pn.lineStart=si,pn.lineEnd=hi},polygonEnd:function(){pn.lineStart=pn.lineEnd=pn.point=ln,ae.add(Q(Ee)),Ee=new Sn},result:function(){var e=ae/2;return ae=new Sn,e}};function si(){pn.point=ci}function ci(e,n){pn.point=It,Nt=Se=e,Rt=ye=n}function It(e,n){Ee.add(ye*e-Se*n),Se=e,ye=n}function hi(){It(Nt,Rt)}var zn=1/0,Qn=zn,On=-zn,Jn=On,Kn={point:pi,lineStart:ln,lineEnd:ln,polygonStart:ln,polygonEnd:ln,result:function(){var e=[[zn,Qn],[On,Jn]];return On=Jn=-(Qn=zn=1/0),e}};function pi(e,n){e<zn&&(zn=e),e>On&&(On=e),n<Qn&&(Qn=n),n>Jn&&(Jn=n)}var we=0,Pe=0,An=0,xn=0,ne=0,kn=0,ke=0,Me=0,Dn=0,zt,$t,fn,sn,en={point:yn,lineStart:be,lineEnd:Ge,polygonStart:function(){en.lineStart=vi,en.lineEnd=di},polygonEnd:function(){en.point=yn,en.lineStart=be,en.lineEnd=Ge},result:function(){var e=Dn?[ke/Dn,Me/Dn]:kn?[xn/kn,ne/kn]:An?[we/An,Pe/An]:[NaN,NaN];return we=Pe=An=xn=ne=kn=ke=Me=Dn=0,e}};function yn(e,n){we+=e,Pe+=n,++An}function be(){en.point=gi}function gi(e,n){en.point=_i,yn(fn=e,sn=n)}function _i(e,n){var i=e-fn,t=n-sn,r=vn(i*i+t*t);xn+=r*(fn+e)/2,ne+=r*(sn+n)/2,kn+=r,yn(fn=e,sn=n)}function Ge(){en.point=yn}function vi(){en.point=mi}function di(){At(zt,$t)}function mi(e,n){en.point=At,yn(zt=fn=e,$t=sn=n)}function At(e,n){var i=e-fn,t=n-sn,r=vn(i*i+t*t);xn+=r*(fn+e)/2,ne+=r*(sn+n)/2,kn+=r,r=sn*e-fn*n,ke+=r*(fn+e),Me+=r*(sn+n),Dn+=r*3,yn(fn=e,sn=n)}function Dt(e){this._context=e}Dt.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,n){switch(this._point){case 0:{this._context.moveTo(e,n),this._point=1;break}case 1:{this._context.lineTo(e,n);break}default:{this._context.moveTo(e+this._radius,n),this._context.arc(e,n,this._radius,0,on);break}}},result:ln};var Ne=new Sn,ue,Lt,Ct,Ln,Cn,Hn={point:ln,lineStart:function(){Hn.point=Ei},lineEnd:function(){ue&&Tt(Lt,Ct),Hn.point=ln},polygonStart:function(){ue=!0},polygonEnd:function(){ue=null},result:function(){var e=+Ne;return Ne=new Sn,e}};function Ei(e,n){Hn.point=Tt,Lt=Ln=e,Ct=Cn=n}function Tt(e,n){Ln-=e,Cn-=n,Ne.add(vn(Ln*Ln+Cn*Cn)),Ln=e,Cn=n}let Xe,ee,We,Ue;class Qe{constructor(n){this._append=n==null?qt:Si(n),this._radius=4.5,this._=""}pointRadius(n){return this._radius=+n,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(n,i){switch(this._point){case 0:{this._append`M${n},${i}`,this._point=1;break}case 1:{this._append`L${n},${i}`;break}default:{if(this._append`M${n},${i}`,this._radius!==We||this._append!==ee){const t=this._radius,r=this._;this._="",this._append`m0,${t}a${t},${t} 0 1,1 0,${-2*t}a${t},${t} 0 1,1 0,${2*t}z`,We=t,ee=this._append,Ue=this._,this._=r}this._+=Ue;break}}}result(){const n=this._;return this._="",n.length?n:null}}function qt(e){let n=1;this._+=e[0];for(const i=e.length;n<i;++n)this._+=arguments[n]+e[n]}function Si(e){const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);if(n>15)return qt;if(n!==Xe){const i=10**n;Xe=n,ee=function(r){let l=1;this._+=r[0];for(const o=r.length;l<o;++l)this._+=Math.round(arguments[l]*i)/i+r[l]}}return ee}function yi(e,n){let i=3,t=4.5,r,l;function o(a){return a&&(typeof t=="function"&&l.pointRadius(+t.apply(this,arguments)),wn(a,r(l))),l.result()}return o.area=function(a){return wn(a,r(pn)),pn.result()},o.measure=function(a){return wn(a,r(Hn)),Hn.result()},o.bounds=function(a){return wn(a,r(Kn)),Kn.result()},o.centroid=function(a){return wn(a,r(en)),en.result()},o.projection=function(a){return arguments.length?(r=a==null?(e=null,me):(e=a).stream,o):e},o.context=function(a){return arguments.length?(l=a==null?(n=null,new Qe(i)):new Dt(n=a),typeof t!="function"&&l.pointRadius(t),o):n},o.pointRadius=function(a){return arguments.length?(t=typeof a=="function"?a:(l.pointRadius(+a),+a),o):t},o.digits=function(a){if(!arguments.length)return i;if(a==null)i=null;else{const s=Math.floor(a);if(!(s>=0))throw new RangeError(`invalid digits: ${a}`);i=s}return n===null&&(l=new Qe(i)),o},o.projection(e).digits(i).context(n)}function Ie(e){return function(n){var i=new Re;for(var t in e)i[t]=e[t];return i.stream=n,i}}function Re(){}Re.prototype={constructor:Re,point:function(e,n){this.stream.point(e,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function ze(e,n,i){var t=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),t!=null&&e.clipExtent(null),wn(i,e.stream(Kn)),n(Kn.result()),t!=null&&e.clipExtent(t),e}function Ft(e,n,i){return ze(e,function(t){var r=n[1][0]-n[0][0],l=n[1][1]-n[0][1],o=Math.min(r/(t[1][0]-t[0][0]),l/(t[1][1]-t[0][1])),a=+n[0][0]+(r-o*(t[1][0]+t[0][0]))/2,s=+n[0][1]+(l-o*(t[1][1]+t[0][1]))/2;e.scale(150*o).translate([a,s])},i)}function wi(e,n,i){return Ft(e,[[0,0],n],i)}function Pi(e,n,i){return ze(e,function(t){var r=+n,l=r/(t[1][0]-t[0][0]),o=(r-l*(t[1][0]+t[0][0]))/2,a=-l*t[0][1];e.scale(150*l).translate([o,a])},i)}function ki(e,n,i){return ze(e,function(t){var r=+n,l=r/(t[1][1]-t[0][1]),o=-l*t[0][0],a=(r-l*(t[1][1]+t[0][1]))/2;e.scale(150*l).translate([o,a])},i)}var Je=16,Mi=X(30*nn);function Ke(e,n){return+n?Ri(e,n):Ni(e)}function Ni(e){return Ie({point:function(n,i){n=e(n,i),this.stream.point(n[0],n[1])}})}function Ri(e,n){function i(t,r,l,o,a,s,h,u,f,c,g,v,R,S){var N=h-t,w=u-r,I=N*N+w*w;if(I>4*n&&R--){var E=o+c,z=a+g,k=s+v,q=vn(E*E+z*z+k*k),y=Rn(k/=q),A=Q(Q(k)-1)<b||Q(l-f)<b?(l+f)/2:Nn(z,E),$=e(A,y),P=$[0],J=$[1],T=P-t,B=J-r,_=w*T-N*B;(_*_/I>n||Q((N*T+w*B)/I-.5)>.3||o*c+a*g+s*v<Mi)&&(i(t,r,l,o,a,s,P,J,A,E/=q,z/=q,k,R,S),S.point(P,J),i(P,J,A,E,z,k,h,u,f,c,g,v,R,S))}}return function(t){var r,l,o,a,s,h,u,f,c,g,v,R,S={point:N,lineStart:w,lineEnd:E,polygonStart:function(){t.polygonStart(),S.lineStart=z},polygonEnd:function(){t.polygonEnd(),S.lineStart=w}};function N(y,A){y=e(y,A),t.point(y[0],y[1])}function w(){f=NaN,S.point=I,t.lineStart()}function I(y,A){var $=In([y,A]),P=e(y,A);i(f,c,u,g,v,R,f=P[0],c=P[1],u=y,g=$[0],v=$[1],R=$[2],Je,t),t.point(f,c)}function E(){S.point=N,t.lineEnd()}function z(){w(),S.point=k,S.lineEnd=q}function k(y,A){I(r=y,A),l=f,o=c,a=g,s=v,h=R,S.point=I}function q(){i(f,c,u,g,v,R,l,o,r,a,s,h,Je,t),S.lineEnd=E,E()}return S}}var Ii=Ie({point:function(e,n){this.stream.point(e*nn,n*nn)}});function zi(e){return Ie({point:function(n,i){var t=e(n,i);return this.stream.point(t[0],t[1])}})}function $i(e,n,i,t,r){function l(o,a){return o*=t,a*=r,[n+e*o,i-e*a]}return l.invert=function(o,a){return[(o-n)/e*t,(i-a)/e*r]},l}function xe(e,n,i,t,r,l){if(!l)return $i(e,n,i,t,r);var o=X(l),a=G(l),s=o*e,h=a*e,u=o/e,f=a/e,c=(a*i-o*n)/e,g=(a*n+o*i)/e;function v(R,S){return R*=t,S*=r,[s*R-h*S+n,i-h*R-s*S]}return v.invert=function(R,S){return[t*(u*R-f*S+c),r*(g-f*R-u*S)]},v}function Ai(e){return Di(function(){return e})()}function Di(e){var n,i=150,t=480,r=250,l=0,o=0,a=0,s=0,h=0,u,f=0,c=1,g=1,v=null,R=Ze,S=null,N,w,I,E=me,z=.5,k,q,y,A,$;function P(_){return y(_[0]*nn,_[1]*nn)}function J(_){return _=y.invert(_[0],_[1]),_&&[_[0]*hn,_[1]*hn]}P.stream=function(_){return A&&$===_?A:A=Ii(zi(u)(R(k(E($=_)))))},P.preclip=function(_){return arguments.length?(R=_,v=void 0,B()):R},P.postclip=function(_){return arguments.length?(E=_,S=N=w=I=null,B()):E},P.clipAngle=function(_){return arguments.length?(R=+_?ai(v=_*nn):(v=null,Ze),B()):v*hn},P.clipExtent=function(_){return arguments.length?(E=_==null?(S=N=w=I=null,me):fi(S=+_[0][0],N=+_[0][1],w=+_[1][0],I=+_[1][1]),B()):S==null?null:[[S,N],[w,I]]},P.scale=function(_){return arguments.length?(i=+_,T()):i},P.translate=function(_){return arguments.length?(t=+_[0],r=+_[1],T()):[t,r]},P.center=function(_){return arguments.length?(l=_[0]%360*nn,o=_[1]%360*nn,T()):[l*hn,o*hn]},P.rotate=function(_){return arguments.length?(a=_[0]%360*nn,s=_[1]%360*nn,h=_.length>2?_[2]%360*nn:0,T()):[a*hn,s*hn,h*hn]},P.angle=function(_){return arguments.length?(f=_%360*nn,T()):f*hn},P.reflectX=function(_){return arguments.length?(c=_?-1:1,T()):c<0},P.reflectY=function(_){return arguments.length?(g=_?-1:1,T()):g<0},P.precision=function(_){return arguments.length?(k=Ke(q,z=_*_),B()):vn(z)},P.fitExtent=function(_,D){return Ft(P,_,D)},P.fitSize=function(_,D){return wi(P,_,D)},P.fitWidth=function(_,D){return Pi(P,_,D)},P.fitHeight=function(_,D){return ki(P,_,D)};function T(){var _=xe(i,0,0,c,g,f).apply(null,n(l,o)),D=xe(i,t-_[0],r-_[1],c,g,f);return u=xt(a,s,h),q=ve(n,D),y=ve(u,q),k=Ke(q,z),B()}function B(){return A=$=null,P}return function(){return n=e.apply(this,arguments),P.invert=n.invert&&J,T()}}function Li(e){return function(n,i){var t=X(n),r=X(i),l=e(t*r);return l===1/0?[2,0]:[l*r*G(n),l*G(i)]}}function Ci(e){return function(n,i){var t=vn(n*n+i*i),r=e(t),l=G(r),o=X(r);return[Nn(n*l,t*o),Rn(t&&i*l/t)]}}var Bt=Li(function(e){return(e=wt(e))&&e/G(e)});Bt.invert=Ci(function(e){return e});function Ti(){return Ai(Bt).scale(79.4188).clipAngle(180-.001)}function qi(e){var R,S;let n,i,t=`<p class="svelte-oeayzq">An interactive visualization of all the space debris that reenters
            the atmosphere in the South Pacific Ocean. From 1960 until today.</p>`,r,l,o,a,s=((R=e[0])==null?void 0:R.name)+"",h,u,f,c,g=((S=e[0])==null?void 0:S.year)+"",v;return{c(){n=an("div"),i=an("div"),i.innerHTML=t,r=Tn(),l=an("div"),o=an("span"),a=gn("Satellite: "),h=gn(s),u=Tn(),f=an("span"),c=gn("Year: "),v=gn(g),this.h()},l(N){n=un(N,"DIV",{class:!0});var w=O(n);i=un(w,"DIV",{class:!0,"data-svelte-h":!0}),Et(i)!=="svelte-9fj3n4"&&(i.innerHTML=t),r=qn(w),l=un(w,"DIV",{class:!0});var I=O(l);o=un(I,"SPAN",{class:!0});var E=O(o);a=_n(E,"Satellite: "),h=_n(E,s),E.forEach(M),u=qn(I),f=un(I,"SPAN",{class:!0});var z=O(f);c=_n(z,"Year: "),v=_n(z,g),z.forEach(M),I.forEach(M),w.forEach(M),this.h()},h(){d(i,"class","description svelte-oeayzq"),d(o,"class","svelte-oeayzq"),d(f,"class","svelte-oeayzq"),d(l,"class","satellite-info svelte-oeayzq"),d(n,"class","top-bar svelte-oeayzq")},m(N,w){W(N,n,w),V(n,i),V(n,r),V(n,l),V(l,o),V(o,a),V(o,h),V(l,u),V(l,f),V(f,c),V(f,v)},p(N,[w]){var I,E;w&1&&s!==(s=((I=N[0])==null?void 0:I.name)+"")&&Mn(h,s),w&1&&g!==(g=((E=N[0])==null?void 0:E.year)+"")&&Mn(v,g)},i:En,o:En,d(N){N&&M(n)}}}function Fi(e,n,i){let{currentPoint:t}=n;return e.$$set=r=>{"currentPoint"in r&&i(0,t=r.currentPoint)},[t]}class Bi extends ie{constructor(n){super(),re(this,n,Fi,qi,te,{currentPoint:0})}}function Oi(e){let n,i,t,r,l,o;return{c(){n=an("div"),i=an("div"),t=Tn(),r=an("div"),this.h()},l(a){n=un(a,"DIV",{class:!0});var s=O(n);i=un(s,"DIV",{class:!0,style:!0}),O(i).forEach(M),t=qn(s),r=un(s,"DIV",{class:!0,style:!0}),O(r).forEach(M),s.forEach(M),this.h()},h(){d(i,"class","progress svelte-1aifhpe"),Pn(i,"width",(e[0]+1)/e[1].length*100+"%"),d(r,"class","draggable svelte-1aifhpe"),Pn(r,"left",(e[0]+1)/e[1].length*100+"%"),d(n,"class","progress-bar svelte-1aifhpe")},m(a,s){W(a,n,s),V(n,i),V(n,t),V(n,r),l||(o=Ot(n,"mousedown",e[2]),l=!0)},p(a,[s]){s&3&&Pn(i,"width",(a[0]+1)/a[1].length*100+"%"),s&3&&Pn(r,"left",(a[0]+1)/a[1].length*100+"%")},i:En,o:En,d(a){a&&M(n),l=!1,o()}}}function Hi(e,n,i){const t=Ht();let{index:r}=n,{points:l}=n;function o(a){const s=a.currentTarget.getBoundingClientRect();let h=a.clientX-s.left;const u=s.width;h<0?h=0:h>u&&(h=u);const f=h/u*100,c=Math.floor(f/100*l.length);t("updateIndex",c)}return e.$$set=a=>{"index"in a&&i(0,r=a.index),"points"in a&&i(1,l=a.points)},[r,l,o]}class Vi extends ie{constructor(n){super(),re(this,n,Hi,Oi,te,{index:0,points:1})}}function nt(e,n,i){const t=e.slice();return t[17]=n[i].cx,t[18]=n[i].cy,t[19]=n[i].name,t}function et(e,n,i){const t=e.slice();return t[22]=n[i],t[24]=i,t}function tt(e,n,i){const t=e.slice();return t[17]=n[i].cx,t[18]=n[i].cy,t[19]=n[i].name,t[25]=n[i].r,t[24]=i,t}function it(e,n,i){const t=e.slice();return t[27]=n[i],t[24]=i,t}function rt(e,n,i){const t=e.slice();return t[22]=n[i],t[24]=i,t}function lt(e,n,i){const t=e.slice();return t[22]=n[i],t[24]=i,t}function ot(e,n,i){const t=e.slice();return t[22]=n[i],t[24]=i,t}function at(e){var s,h;let n,i,t=((s=e[6][e[6].length-1])==null?void 0:s.name)+"",r,l,o=((h=e[6][e[6].length-1])==null?void 0:h.year)+"",a;return{c(){n=Y("text"),i=Y("textPath"),r=gn(t),l=gn(" — "),a=gn(o),this.h()},l(u){n=Z(u,"text",{"text-anchor":!0,dy:!0,fill:!0});var f=O(n);i=Z(f,"textPath",{href:!0,startOffset:!0});var c=O(i);r=_n(c,t),l=_n(c," — "),a=_n(c,o),c.forEach(M),f.forEach(M),this.h()},h(){d(i,"href","#sphere"),d(i,"startOffset","60%"),d(n,"text-anchor","left"),d(n,"dy","-5"),d(n,"fill","blue")},m(u,f){W(u,n,f),V(n,i),V(i,r),V(i,l),V(i,a)},p(u,f){var c,g;f[0]&64&&t!==(t=((c=u[6][u[6].length-1])==null?void 0:c.name)+"")&&Mn(r,t),f[0]&64&&o!==(o=((g=u[6][u[6].length-1])==null?void 0:g.year)+"")&&Mn(a,o)},d(u){u&&M(n)}}}function ut(e){let n,i;return{c(){n=Y("path"),this.h()},l(t){n=Z(t,"path",{d:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"d",i=e[11](e[22])),d(n,"class","marineBorders")},m(t,r){W(t,n,r)},p(t,r){r[0]&4&&i!==(i=t[11](t[22]))&&d(n,"d",i)},d(t){t&&M(n)}}}function ft(e){let n,i;return{c(){n=Y("path"),this.h()},l(t){n=Z(t,"path",{d:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"d",i=e[11](e[22])),d(n,"class","country")},m(t,r){W(t,n,r)},p(t,r){r[0]&2&&i!==(i=t[11](t[22]))&&d(n,"d",i)},d(t){t&&M(n)}}}function st(e){let n,i;return{c(){n=Y("path"),this.h()},l(t){n=Z(t,"path",{d:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"d",i=e[11](e[22])),d(n,"class","contour svelte-1kadrv2")},m(t,r){W(t,n,r)},p(t,r){r[0]&8&&i!==(i=t[11](t[22]))&&d(n,"d",i)},d(t){t&&M(n)}}}function ct(e){let n,i=x(e[6]),t=[];for(let r=0;r<i.length;r+=1)t[r]=pt(it(e,i,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();n=tn()},l(r){for(let l=0;l<t.length;l+=1)t[l].l(r);n=tn()},m(r,l){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,l);W(r,n,l)},p(r,l){if(l[0]&64){i=x(r[6]);let o;for(o=0;o<i.length;o+=1){const a=it(r,i,o);t[o]?t[o].p(a,l):(t[o]=pt(a),t[o].c(),t[o].m(n.parentNode,n))}for(;o<t.length;o+=1)t[o].d(1);t.length=i.length}},d(r){r&&M(n),mn(t,r)}}}function ht(e){let n,i,t,r,l,o;return{c(){n=Y("line"),this.h()},l(a){n=Z(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"x1",i=e[6][e[24]-1].cx),d(n,"y1",t=e[6][e[24]-1].cy),d(n,"x2",r=e[27].cx),d(n,"y2",l=e[27].cy),d(n,"class",o=Xn(e[24]===e[6].length-1?"line highlite":"line old")+" svelte-1kadrv2")},m(a,s){W(a,n,s)},p(a,s){s[0]&64&&i!==(i=a[6][a[24]-1].cx)&&d(n,"x1",i),s[0]&64&&t!==(t=a[6][a[24]-1].cy)&&d(n,"y1",t),s[0]&64&&r!==(r=a[27].cx)&&d(n,"x2",r),s[0]&64&&l!==(l=a[27].cy)&&d(n,"y2",l),s[0]&64&&o!==(o=Xn(a[24]===a[6].length-1?"line highlite":"line old")+" svelte-1kadrv2")&&d(n,"class",o)},d(a){a&&M(n)}}}function pt(e){let n,i=e[24]>0&&e[6][e[24]].name===e[6][e[24]-1].name&&ht(e);return{c(){i&&i.c(),n=tn()},l(t){i&&i.l(t),n=tn()},m(t,r){i&&i.m(t,r),W(t,n,r)},p(t,r){t[24]>0&&t[6][t[24]].name===t[6][t[24]-1].name?i?i.p(t,r):(i=ht(t),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(t){t&&M(n),i&&i.d(t)}}}function ji(e){let n,i,t,r;return{c(){n=Y("circle"),this.h()},l(l){n=Z(l,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"cx",i=e[17]),d(n,"cy",t=e[18]),d(n,"r",r=e[25]),d(n,"fill","blue"),d(n,"class","highlite svelte-1kadrv2")},m(l,o){W(l,n,o)},p(l,o){o[0]&64&&i!==(i=l[17])&&d(n,"cx",i),o[0]&64&&t!==(t=l[18])&&d(n,"cy",t),o[0]&64&&r!==(r=l[25])&&d(n,"r",r)},d(l){l&&M(n)}}}function Yi(e){let n,i,t,r,l;return{c(){n=Y("circle"),this.h()},l(o){n=Z(o,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"cx",i=e[17]),d(n,"cy",t=e[18]),d(n,"r",r=e[25]),d(n,"fill","blue"),d(n,"class",l=Xn(e[24]===e[6].length-1?"dot highlite":"dot old")+" svelte-1kadrv2")},m(o,a){W(o,n,a)},p(o,a){a[0]&64&&i!==(i=o[17])&&d(n,"cx",i),a[0]&64&&t!==(t=o[18])&&d(n,"cy",t),a[0]&64&&r!==(r=o[25])&&d(n,"r",r),a[0]&64&&l!==(l=Xn(o[24]===o[6].length-1?"dot highlite":"dot old")+" svelte-1kadrv2")&&d(n,"class",l)},d(o){o&&M(n)}}}function gt(e){let n,i=e[19]+"",t,r,l;return{c(){n=Y("text"),t=gn(i),this.h()},l(o){n=Z(o,"text",{x:!0,y:!0,class:!0,"font-size":!0});var a=O(n);t=_n(a,i),a.forEach(M),this.h()},h(){d(n,"x",r=e[25]+e[17]+8),d(n,"y",l=e[18]+2),d(n,"class","satellite-name svelte-1kadrv2"),d(n,"font-size","8")},m(o,a){W(o,n,a),V(n,t)},p(o,a){a[0]&64&&i!==(i=o[19]+"")&&Mn(t,i),a[0]&64&&r!==(r=o[25]+o[17]+8)&&d(n,"x",r),a[0]&64&&l!==(l=o[18]+2)&&d(n,"y",l)},d(o){o&&M(n)}}}function _t(e){let n,i;function t(a,s){if(a[24]>0&&a[6][a[24]].name===a[6][a[24]-1].name)return Yi;if(a[24]===a[6].length-1)return ji}let r=t(e),l=r&&r(e),o=e[24]===e[6].length-1&&gt(e);return{c(){l&&l.c(),n=tn(),o&&o.c(),i=tn()},l(a){l&&l.l(a),n=tn(),o&&o.l(a),i=tn()},m(a,s){l&&l.m(a,s),W(a,n,s),o&&o.m(a,s),W(a,i,s)},p(a,s){r===(r=t(a))&&l?l.p(a,s):(l&&l.d(1),l=r&&r(a),l&&(l.c(),l.m(n.parentNode,n))),a[24]===a[6].length-1?o?o.p(a,s):(o=gt(a),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(a){a&&(M(n),M(i)),l&&l.d(a),o&&o.d(a)}}}function vt(e){let n,i;return{c(){n=Y("path"),this.h()},l(t){n=Z(t,"path",{d:!0,class:!0}),O(n).forEach(M),this.h()},h(){d(n,"d",i=e[11](e[22])),d(n,"class","spoua svelte-1kadrv2")},m(t,r){W(t,n,r)},p(t,r){r[0]&16&&i!==(i=t[11](t[22]))&&d(n,"d",i)},d(t){t&&M(n)}}}function dt(e){let n,i,t,r,l=e[19]+"",o,a,s;return{c(){n=Y("circle"),r=Y("text"),o=gn(l),this.h()},l(h){n=Z(h,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),O(n).forEach(M),r=Z(h,"text",{x:!0,y:!0,"font-size":!0,class:!0});var u=O(r);o=_n(u,l),u.forEach(M),this.h()},h(){d(n,"cx",i=e[17]),d(n,"cy",t=e[18]),d(n,"r",1),d(n,"fill","black"),d(n,"class","svelte-1kadrv2"),d(r,"x",a=e[17]+4),d(r,"y",s=e[18]+2),d(r,"font-size","8"),d(r,"class","svelte-1kadrv2")},m(h,u){W(h,n,u),W(h,r,u),V(r,o)},p(h,u){u[0]&1&&i!==(i=h[17])&&d(n,"cx",i),u[0]&1&&t!==(t=h[18])&&d(n,"cy",t),u[0]&1&&l!==(l=h[19]+"")&&Mn(o,l),u[0]&1&&a!==(a=h[17]+4)&&d(r,"x",a),u[0]&1&&s!==(s=h[18]+2)&&d(r,"y",s)},d(h){h&&(M(n),M(r))}}}function mt(e){let n,i=e[17]&&e[18]&&dt(e);return{c(){i&&i.c(),n=tn()},l(t){i&&i.l(t),n=tn()},m(t,r){i&&i.m(t,r),W(t,n,r)},p(t,r){t[17]&&t[18]?i?i.p(t,r):(i=dt(t),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(t){t&&M(n),i&&i.d(t)}}}function Zi(e){let n,i,t,r,l,o,a,s,h,u,f,c,g,v,R,S,N,w,I;n=new Bi({props:{currentPoint:e[7]}}),t=new Vi({props:{index:e[8],points:e[5]}}),t.$on("updateIndex",e[12]);let E=e[6].length>1&&at(e),z=x(e[2]),k=[];for(let p=0;p<z.length;p+=1)k[p]=ut(ot(e,z,p));let q=x(e[1]),y=[];for(let p=0;p<q.length;p+=1)y[p]=ft(lt(e,q,p));let A=x(e[3]),$=[];for(let p=0;p<A.length;p+=1)$[p]=st(rt(e,A,p));let P=e[6].length>1&&ct(e),J=x(e[6]),T=[];for(let p=0;p<J.length;p+=1)T[p]=_t(tt(e,J,p));let B=x(e[4]),_=[];for(let p=0;p<B.length;p+=1)_[p]=vt(et(e,B,p));let D=x(e[0]),F=[];for(let p=0;p<D.length;p+=1)F[p]=mt(nt(e,D,p));return{c(){fe(n.$$.fragment),i=Tn(),fe(t.$$.fragment),r=Tn(),l=Y("svg"),o=Y("defs"),a=Y("path"),s=Y("clipPath"),h=Y("use"),E&&E.c(),u=Y("g"),f=Y("circle"),c=Y("g");for(let p=0;p<k.length;p+=1)k[p].c();g=Y("g");for(let p=0;p<y.length;p+=1)y[p].c();v=Y("g");for(let p=0;p<$.length;p+=1)$[p].c();R=Y("g"),P&&P.c(),S=Y("g");for(let p=0;p<T.length;p+=1)T[p].c();N=Y("g");for(let p=0;p<_.length;p+=1)_[p].c();w=Y("g");for(let p=0;p<F.length;p+=1)F[p].c();this.h()},l(p){se(n.$$.fragment,p),i=qn(p),se(t.$$.fragment,p),r=qn(p),l=Z(p,"svg",{viewBox:!0,style:!0});var C=O(l);o=Z(C,"defs",{});var L=O(o);a=Z(L,"path",{id:!0,d:!0}),O(a).forEach(M),s=Z(L,"clipPath",{class:!0,id:!0});var K=O(s);h=Z(K,"use",{href:!0}),O(h).forEach(M),K.forEach(M),L.forEach(M),E&&E.l(C),u=Z(C,"g",{"clip-path":!0,class:!0});var m=O(u);f=Z(m,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),O(f).forEach(M),c=Z(m,"g",{class:!0,fill:!0,stroke:!0});var j=O(c);for(let U=0;U<k.length;U+=1)k[U].l(j);j.forEach(M),g=Z(m,"g",{class:!0,fill:!0,stroke:!0});var dn=O(g);for(let U=0;U<y.length;U+=1)y[U].l(dn);dn.forEach(M),v=Z(m,"g",{class:!0,fill:!0,stroke:!0});var cn=O(v);for(let U=0;U<$.length;U+=1)$[U].l(cn);cn.forEach(M),R=Z(m,"g",{class:!0});var $e=O(R);P&&P.l($e),$e.forEach(M),S=Z(m,"g",{class:!0});var Ae=O(S);for(let U=0;U<T.length;U+=1)T[U].l(Ae);Ae.forEach(M),N=Z(m,"g",{class:!0});var De=O(N);for(let U=0;U<_.length;U+=1)_[U].l(De);De.forEach(M),w=Z(m,"g",{class:!0});var Le=O(w);for(let U=0;U<F.length;U+=1)F[U].l(Le);Le.forEach(M),m.forEach(M),C.forEach(M),this.h()},h(){d(a,"id","sphere"),d(a,"d",e[11]({type:"Sphere"})),d(h,"href","#sphere"),d(s,"class","clip"),d(s,"id","clip"),d(f,"cx",e[9]/2),d(f,"cy",e[10]/2),d(f,"r",e[9]),d(f,"fill","#eeffff"),d(c,"class","marine svelte-1kadrv2"),d(c,"fill","#e9f4ff"),d(c,"stroke","blue"),d(g,"class","world svelte-1kadrv2"),d(g,"fill","white"),d(g,"stroke","none"),d(v,"class","contour svelte-1kadrv2"),d(v,"fill","none"),d(v,"stroke","none"),d(R,"class","svelte-1kadrv2"),d(S,"class","svelte-1kadrv2"),d(N,"class","spoua svelte-1kadrv2"),d(w,"class","nemo svelte-1kadrv2"),d(u,"clip-path","url(#clip)"),d(u,"class","svelte-1kadrv2"),d(l,"viewBox","0 0 "+e[9]+" "+e[10]),Pn(l,"width","100%"),Pn(l,"height","100vh")},m(p,C){ce(n,p,C),W(p,i,C),ce(t,p,C),W(p,r,C),W(p,l,C),V(l,o),V(o,a),V(o,s),V(s,h),E&&E.m(l,null),V(l,u),V(u,f),V(u,c);for(let L=0;L<k.length;L+=1)k[L]&&k[L].m(c,null);V(u,g);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(g,null);V(u,v);for(let L=0;L<$.length;L+=1)$[L]&&$[L].m(v,null);V(u,R),P&&P.m(R,null),V(u,S);for(let L=0;L<T.length;L+=1)T[L]&&T[L].m(S,null);V(u,N);for(let L=0;L<_.length;L+=1)_[L]&&_[L].m(N,null);V(u,w);for(let L=0;L<F.length;L+=1)F[L]&&F[L].m(w,null);I=!0},p(p,C){const L={};C[0]&128&&(L.currentPoint=p[7]),n.$set(L);const K={};if(C[0]&256&&(K.index=p[8]),C[0]&32&&(K.points=p[5]),t.$set(K),p[6].length>1?E?E.p(p,C):(E=at(p),E.c(),E.m(l,u)):E&&(E.d(1),E=null),C[0]&2052){z=x(p[2]);let m;for(m=0;m<z.length;m+=1){const j=ot(p,z,m);k[m]?k[m].p(j,C):(k[m]=ut(j),k[m].c(),k[m].m(c,null))}for(;m<k.length;m+=1)k[m].d(1);k.length=z.length}if(C[0]&2050){q=x(p[1]);let m;for(m=0;m<q.length;m+=1){const j=lt(p,q,m);y[m]?y[m].p(j,C):(y[m]=ft(j),y[m].c(),y[m].m(g,null))}for(;m<y.length;m+=1)y[m].d(1);y.length=q.length}if(C[0]&2056){A=x(p[3]);let m;for(m=0;m<A.length;m+=1){const j=rt(p,A,m);$[m]?$[m].p(j,C):($[m]=st(j),$[m].c(),$[m].m(v,null))}for(;m<$.length;m+=1)$[m].d(1);$.length=A.length}if(p[6].length>1?P?P.p(p,C):(P=ct(p),P.c(),P.m(R,null)):P&&(P.d(1),P=null),C[0]&64){J=x(p[6]);let m;for(m=0;m<J.length;m+=1){const j=tt(p,J,m);T[m]?T[m].p(j,C):(T[m]=_t(j),T[m].c(),T[m].m(S,null))}for(;m<T.length;m+=1)T[m].d(1);T.length=J.length}if(C[0]&2064){B=x(p[4]);let m;for(m=0;m<B.length;m+=1){const j=et(p,B,m);_[m]?_[m].p(j,C):(_[m]=vt(j),_[m].c(),_[m].m(N,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=B.length}if(C[0]&1){D=x(p[0]);let m;for(m=0;m<D.length;m+=1){const j=nt(p,D,m);F[m]?F[m].p(j,C):(F[m]=mt(j),F[m].c(),F[m].m(w,null))}for(;m<F.length;m+=1)F[m].d(1);F.length=D.length}},i(p){I||(Fn(n.$$.fragment,p),Fn(t.$$.fragment,p),I=!0)},o(p){Bn(n.$$.fragment,p),Bn(t.$$.fragment,p),I=!1},d(p){p&&(M(i),M(r),M(l)),he(n,p),he(t,p),E&&E.d(),mn(k,p),mn(y,p),mn($,p),P&&P.d(),mn(T,p),mn(_,p),mn(F,p)}}}function bi(e,n,i){let t=window.innerWidth,r=window.innerHeight;const l=Ti().rotate([123,48]).scale(250).precision(1).clipAngle(95.3).translate([t/2,r/2]),o=yi().projection(l);let{data:a}=n,s=[{lon:-126.3622344,lat:-72.9741938,name:"Maher Island"},{lon:-109.452777777778,lat:-27.2013888888889,name:"Easter Island"},{lon:-124.787888,lat:-24.6807263,name:"Ducie Island"},{lon:-123.3933333,lat:-48.8766667,name:"Point Nemo"}],h=[],u=[],f=[],c=[],g=[],v=[],R=null,S=0,N;St(async()=>{try{const E=await fetch("world.json").then(y=>y.json()),z=await fetch("EEZ_land_v2_201410.json").then(y=>y.json()),k=await fetch("contour.json").then(y=>y.json()),q=await fetch("spoua.json").then(y=>y.json());i(1,h=Vn(E,E.objects.land).features),i(2,u=Vn(z,z.objects.EEZ_land_v2_201410).features),i(3,f=Vn(k,k.objects.collection).features),i(4,c=Vn(q,q.objects.spoua).features),i(5,g=a.map(y=>{const[A,$]=l([y.lon,y.lat]);return{cx:A,cy:$,name:y.satellite_name,year:y.satellite_decay,r:y.rcs}}).filter(y=>!isNaN(y.cx)&&!isNaN(y.cy))),i(0,s=s.map(y=>{const[A,$]=l([y.lon,y.lat]);return{cx:A,cy:$,name:y.name}})),w()}catch(E){console.error("Error loading or processing data:",E)}});const w=()=>{N&&clearInterval(N),i(8,S=0),i(6,v=[]),N=setInterval(()=>{S<g.length?(i(6,v=[...v,g[S]]),i(7,R=g[S]),i(8,S+=1)):clearInterval(N)},500)},I=E=>{i(8,S=E.detail),i(6,v=g.slice(0,S+1)),i(7,R=v[v.length-1])};return e.$$set=E=>{"data"in E&&i(13,a=E.data)},[s,h,u,f,c,g,v,R,S,t,r,o,I,a]}let Gi=class extends ie{constructor(n){super(),re(this,n,bi,Zi,te,{data:13},null,[-1,-1])}};function Xi(e){let n,i,t,r;return i=new Gi({props:{data:e[0]}}),{c(){n=an("article"),fe(i.$$.fragment),this.h()},l(l){n=un(l,"ARTICLE",{class:!0});var o=O(n);se(i.$$.fragment,o),o.forEach(M),this.h()},h(){d(n,"class","svelte-8i21gr"),Vt(()=>e[3].call(n))},m(l,o){W(l,n,o),ce(i,n,null),t=jt(n,e[3].bind(n)),r=!0},p(l,o){const a={};o&1&&(a.data=l[0]),i.$set(a)},i(l){r||(Fn(i.$$.fragment,l),r=!0)},o(l){Bn(i.$$.fragment,l),r=!1},d(l){l&&M(n),he(i),t()}}}function Wi(e){let n,i="Loading...";return{c(){n=an("p"),n.textContent=i,this.h()},l(t){n=un(t,"P",{class:!0,"data-svelte-h":!0}),Et(n)!=="svelte-qdsr2u"&&(n.textContent=i),this.h()},h(){d(n,"class","svelte-8i21gr")},m(t,r){W(t,n,r)},p:En,i:En,o:En,d(t){t&&M(n)}}}function Ui(e){let n,i,t,r;const l=[Wi,Xi],o=[];function a(s,h){return s[0].length===0?0:1}return n=a(e),i=o[n]=l[n](e),{c(){i.c(),t=tn()},l(s){i.l(s),t=tn()},m(s,h){o[n].m(s,h),W(s,t,h),r=!0},p(s,[h]){let u=n;n=a(s),n===u?o[n].p(s,h):(Zt(),Bn(o[u],1,1,()=>{o[u]=null}),Yt(),i=o[n],i?i.p(s,h):(i=o[n]=l[n](s),i.c()),Fn(i,1),i.m(t.parentNode,t))},i(s){r||(Fn(i),r=!0)},o(s){Bn(i),r=!1},d(s){s&&M(t),o[n].d(s)}}}function Qi(e,n,i){let t=[],r,l;St(async()=>{const s=await(await fetch("data.json")).json(),h=Math.min(...s.map(f=>f.rcs)),u=Math.max(...s.map(f=>f.rcs));i(0,t=s.map(f=>({...f,rcs:1+(f.rcs-h)*19/(u-h)})))});function o(){r=this.clientWidth,l=this.clientHeight,i(1,r),i(2,l)}return[t,r,l,o]}class nr extends ie{constructor(n){super(),re(this,n,Qi,Ui,te,{})}}export{nr as component};
