import{s as De,n as Kn,o as Ce,x as lt,k as ii}from"../chunks/scheduler.BWih1DpW.js";import{S as Te,i as Fe,e as dn,s as Hn,b as Cn,y as J,c as _n,d as q,g as k,h as Vn,z as be,f as Tn,A as K,o as m,p as $n,j as nn,k as Y,B as ri,l as ot,C as Ln,m as Pn,a as wt,n as li,t as Mt,q as oi,u as ui,v as ai,w as fi,D as ci,x as si}from"../chunks/index.C79tYGn6.js";function cn(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function hi(t){return t}function pi(t){if(t==null)return hi;var n,i,e=t.scale[0],r=t.scale[1],l=t.translate[0],o=t.translate[1];return function(u,c){c||(n=i=0);var s=2,a=u.length,f=new Array(a);for(f[0]=(n+=u[0])*e+l,f[1]=(i+=u[1])*r+o;s<a;)f[s]=u[s],++s;return f}}function gi(t,n){for(var i,e=t.length,r=e-n;r<--e;)i=t[r],t[r++]=t[e],t[e]=i}function _t(t,n){return typeof n=="string"&&(n=t.objects[n]),n.type==="GeometryCollection"?{type:"FeatureCollection",features:n.geometries.map(function(i){return Qt(t,i)})}:Qt(t,n)}function Qt(t,n){var i=n.id,e=n.bbox,r=n.properties==null?{}:n.properties,l=vi(t,n);return i==null&&e==null?{type:"Feature",properties:r,geometry:l}:e==null?{type:"Feature",id:i,properties:r,geometry:l}:{type:"Feature",id:i,bbox:e,properties:r,geometry:l}}function vi(t,n){var i=pi(t.transform),e=t.arcs;function r(a,f){f.length&&f.pop();for(var h=e[a<0?~a:a],p=0,v=h.length;p<v;++p)f.push(i(h[p],p));a<0&&gi(f,v)}function l(a){return i(a)}function o(a){for(var f=[],h=0,p=a.length;h<p;++h)r(a[h],f);return f.length<2&&f.push(f[0]),f}function u(a){for(var f=o(a);f.length<4;)f.push(f[0]);return f}function c(a){return a.map(u)}function s(a){var f=a.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:a.geometries.map(s)};case"Point":h=l(a.coordinates);break;case"MultiPoint":h=a.coordinates.map(l);break;case"LineString":h=o(a.arcs);break;case"MultiLineString":h=a.arcs.map(o);break;case"Polygon":h=c(a.arcs);break;case"MultiPolygon":h=a.arcs.map(c);break;default:return null}return{type:f,coordinates:h}}return s(n)}class jn{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const i=this._partials;let e=0;for(let r=0;r<this._n&&r<32;r++){const l=i[r],o=n+l,u=Math.abs(n)<Math.abs(l)?n-(o-l):l-(o-n);u&&(i[e++]=u),n=o}return i[e]=n,this._n=e+1,this}valueOf(){const n=this._partials;let i=this._n,e,r,l,o=0;if(i>0){for(o=n[--i];i>0&&(e=o,r=n[--i],o=e+r,l=r-(o-e),!l););i>0&&(l<0&&n[i-1]<0||l>0&&n[i-1]>0)&&(r=l*2,e=o+r,r==e-o&&(o=e))}return o}}function*di(t){for(const n of t)yield*n}function qe(t){return Array.from(di(t))}function Fn(t,n,i){t=+t,n=+n,i=(r=arguments.length)<2?(n=t,t=0,1):r<3?1:+i;for(var e=-1,r=Math.max(0,Math.ceil((n-t)/i))|0,l=new Array(r);++e<r;)l[e]=t+e*i;return l}var C=1e-6,_i=1e-12,T=Math.PI,hn=T/2,Ut=T/4,gn=T*2,wn=180/T,an=T/180,Z=Math.abs,mi=Math.atan,qn=Math.atan2,W=Math.cos,xn=Math.ceil,V=Math.sin,Ei=Math.sign||function(t){return t>0?1:t<0?-1:0},Nn=Math.sqrt;function Ye(t){return t>1?0:t<-1?T:Math.acos(t)}function Yn(t){return t>1?hn:t<-1?-hn:Math.asin(t)}function pn(){}function ut(t,n){t&&ne.hasOwnProperty(t.type)&&ne[t.type](t,n)}var xt={Feature:function(t,n){ut(t.geometry,n)},FeatureCollection:function(t,n){for(var i=t.features,e=-1,r=i.length;++e<r;)ut(i[e].geometry,n)}},ne={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var i=t.coordinates,e=-1,r=i.length;++e<r;)t=i[e],n.point(t[0],t[1],t[2])},LineString:function(t,n){Pt(t.coordinates,n,0)},MultiLineString:function(t,n){for(var i=t.coordinates,e=-1,r=i.length;++e<r;)Pt(i[e],n,0)},Polygon:function(t,n){te(t.coordinates,n)},MultiPolygon:function(t,n){for(var i=t.coordinates,e=-1,r=i.length;++e<r;)te(i[e],n)},GeometryCollection:function(t,n){for(var i=t.geometries,e=-1,r=i.length;++e<r;)ut(i[e],n)}};function Pt(t,n,i){var e=-1,r=t.length-i,l;for(n.lineStart();++e<r;)l=t[e],n.point(l[0],l[1],l[2]);n.lineEnd()}function te(t,n){var i=-1,e=t.length;for(n.polygonStart();++i<e;)Pt(t[i],n,1);n.polygonEnd()}function Dn(t,n){t&&xt.hasOwnProperty(t.type)?xt[t.type](t,n):ut(t,n)}function Nt(t){return[qn(t[1],t[0]),Yn(t[2])]}function Bn(t){var n=t[0],i=t[1],e=W(i);return[e*W(n),e*V(n),V(i)]}function nt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function at(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function mt(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function tt(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Rt(t){var n=Nn(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function jt(t,n){function i(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(i.invert=function(e,r){return e=n.invert(e,r),e&&t.invert(e[0],e[1])}),i}function kt(t,n){return Z(t)>T&&(t-=Math.round(t/gn)*gn),[t,n]}kt.invert=kt;function Si(t,n,i){return(t%=gn)?n||i?jt(ie(t),re(n,i)):ie(t):n||i?re(n,i):kt}function ee(t){return function(n,i){return n+=t,Z(n)>T&&(n-=Math.round(n/gn)*gn),[n,i]}}function ie(t){var n=ee(t);return n.invert=ee(-t),n}function re(t,n){var i=W(t),e=V(t),r=W(n),l=V(n);function o(u,c){var s=W(c),a=W(u)*s,f=V(u)*s,h=V(c),p=h*i+a*e;return[qn(f*r-p*l,a*i-h*e),Yn(p*r+f*l)]}return o.invert=function(u,c){var s=W(c),a=W(u)*s,f=V(u)*s,h=V(c),p=h*r-f*l;return[qn(f*r+h*l,a*i+p*e),Yn(p*i-a*e)]},o}function yi(t,n,i,e,r,l){if(i){var o=W(n),u=V(n),c=e*i;r==null?(r=n+e*gn,l=n-c/2):(r=le(o,r),l=le(o,l),(e>0?r<l:r>l)&&(r+=e*gn));for(var s,a=r;e>0?a>l:a<l;a-=c)s=Nt([o,-u*W(a),-u*V(a)]),t.point(s[0],s[1])}}function le(t,n){n=Bn(n),n[0]-=t,Rt(n);var i=Ye(-n[1]);return((-n[2]<0?-i:i)+gn-C)%gn}function Be(){var t=[],n;return{point:function(i,e,r){n.push([i,e,r])},lineStart:function(){t.push(n=[])},lineEnd:pn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var i=t;return t=[],n=null,i}}}function rt(t,n){return Z(t[0]-n[0])<C&&Z(t[1]-n[1])<C}function et(t,n,i,e){this.x=t,this.z=n,this.o=i,this.e=e,this.v=!1,this.n=this.p=null}function Xe(t,n,i,e,r){var l=[],o=[],u,c;if(t.forEach(function(v){if(!((N=v.length-1)<=0)){var N,E=v[0],M=v[N],R;if(rt(E,M)){if(!E[2]&&!M[2]){for(r.lineStart(),u=0;u<N;++u)r.point((E=v[u])[0],E[1]);r.lineEnd();return}M[0]+=2*C}l.push(R=new et(E,v,null,!0)),o.push(R.o=new et(E,null,R,!1)),l.push(R=new et(M,v,null,!1)),o.push(R.o=new et(M,null,R,!0))}}),!!l.length){for(o.sort(n),oe(l),oe(o),u=0,c=o.length;u<c;++u)o[u].e=i=!i;for(var s=l[0],a,f;;){for(var h=s,p=!0;h.v;)if((h=h.n)===s)return;a=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(u=0,c=a.length;u<c;++u)r.point((f=a[u])[0],f[1]);else e(h.x,h.n.x,1,r);h=h.n}else{if(p)for(a=h.p.z,u=a.length-1;u>=0;--u)r.point((f=a[u])[0],f[1]);else e(h.x,h.p.x,-1,r);h=h.p}h=h.o,a=h.z,p=!p}while(!h.v);r.lineEnd()}}}function oe(t){if(n=t.length){for(var n,i=0,e=t[0],r;++i<n;)e.n=r=t[i],r.p=e,e=r;e.n=r=t[0],r.p=e}}function Et(t){return Z(t[0])<=T?t[0]:Ei(t[0])*((Z(t[0])+T)%gn-T)}function wi(t,n){var i=Et(n),e=n[1],r=V(e),l=[V(i),-W(i),0],o=0,u=0,c=new jn;r===1?e=hn+C:r===-1&&(e=-hn-C);for(var s=0,a=t.length;s<a;++s)if(h=(f=t[s]).length)for(var f,h,p=f[h-1],v=Et(p),N=p[1]/2+Ut,E=V(N),M=W(N),R=0;R<h;++R,v=w,E=y,M=A,p=d){var d=f[R],w=Et(d),P=d[1]/2+Ut,y=V(P),A=W(P),I=w-v,L=I>=0?1:-1,$=L*I,j=$>T,G=E*y;if(c.add(qn(G*L*V($),M*A+G*W($))),o+=j?I+L*gn:I,j^v>=i^w>=i){var b=at(Bn(p),Bn(d));Rt(b);var D=at(l,b);Rt(D);var g=(j^I>=0?-1:1)*Yn(D[2]);(e>g||e===g&&(b[0]||b[1]))&&(u+=j^I>=0?1:-1)}}return(o<-C||o<C&&c<-_i)^u&1}function He(t,n,i,e){return function(r){var l=n(r),o=Be(),u=n(o),c=!1,s,a,f,h={point:p,lineStart:N,lineEnd:E,polygonStart:function(){h.point=M,h.lineStart=R,h.lineEnd=d,a=[],s=[]},polygonEnd:function(){h.point=p,h.lineStart=N,h.lineEnd=E,a=qe(a);var w=wi(s,e);a.length?(c||(r.polygonStart(),c=!0),Xe(a,Pi,w,i,r)):w&&(c||(r.polygonStart(),c=!0),r.lineStart(),i(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),a=s=null},sphere:function(){r.polygonStart(),r.lineStart(),i(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(w,P){t(w,P)&&r.point(w,P)}function v(w,P){l.point(w,P)}function N(){h.point=v,l.lineStart()}function E(){h.point=p,l.lineEnd()}function M(w,P){f.push([w,P]),u.point(w,P)}function R(){u.lineStart(),f=[]}function d(){M(f[0][0],f[0][1]),u.lineEnd();var w=u.clean(),P=o.result(),y,A=P.length,I,L,$;if(f.pop(),s.push(f),f=null,!!A){if(w&1){if(L=P[0],(I=L.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),y=0;y<I;++y)r.point(($=L[y])[0],$[1]);r.lineEnd()}return}A>1&&w&2&&P.push(P.pop().concat(P.shift())),a.push(P.filter(Mi))}}return h}}function Mi(t){return t.length>1}function Pi(t,n){return((t=t.x)[0]<0?t[1]-hn-C:hn-t[1])-((n=n.x)[0]<0?n[1]-hn-C:hn-n[1])}const ue=He(function(){return!0},Ni,ji,[-T,-hn]);function Ni(t){var n=NaN,i=NaN,e=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(l,o){var u=l>0?T:-T,c=Z(l-n);Z(c-T)<C?(t.point(n,i=(i+o)/2>0?hn:-hn),t.point(e,i),t.lineEnd(),t.lineStart(),t.point(u,i),t.point(l,i),r=0):e!==u&&c>=T&&(Z(n-e)<C&&(n-=e*C),Z(l-u)<C&&(l-=u*C),i=Ri(n,i,l,o),t.point(e,i),t.lineEnd(),t.lineStart(),t.point(u,i),r=0),t.point(n=l,i=o),e=u},lineEnd:function(){t.lineEnd(),n=i=NaN},clean:function(){return 2-r}}}function Ri(t,n,i,e){var r,l,o=V(t-i);return Z(o)>C?mi((V(n)*(l=W(e))*V(i)-V(e)*(r=W(n))*V(t))/(r*l*o)):(n+e)/2}function ji(t,n,i,e){var r;if(t==null)r=i*hn,e.point(-T,r),e.point(0,r),e.point(T,r),e.point(T,0),e.point(T,-r),e.point(0,-r),e.point(-T,-r),e.point(-T,0),e.point(-T,r);else if(Z(t[0]-n[0])>C){var l=t[0]<n[0]?T:-T;r=i*l/2,e.point(-l,r),e.point(0,r),e.point(l,r)}else e.point(n[0],n[1])}function ki(t){var n=W(t),i=2*an,e=n>0,r=Z(n)>C;function l(a,f,h,p){yi(p,t,i,h,a,f)}function o(a,f){return W(a)*W(f)>n}function u(a){var f,h,p,v,N;return{lineStart:function(){v=p=!1,N=1},point:function(E,M){var R=[E,M],d,w=o(E,M),P=e?w?0:s(E,M):w?s(E+(E<0?T:-T),M):0;if(!f&&(v=p=w)&&a.lineStart(),w!==p&&(d=c(f,R),(!d||rt(f,d)||rt(R,d))&&(R[2]=1)),w!==p)N=0,w?(a.lineStart(),d=c(R,f),a.point(d[0],d[1])):(d=c(f,R),a.point(d[0],d[1],2),a.lineEnd()),f=d;else if(r&&f&&e^w){var y;!(P&h)&&(y=c(R,f,!0))&&(N=0,e?(a.lineStart(),a.point(y[0][0],y[0][1]),a.point(y[1][0],y[1][1]),a.lineEnd()):(a.point(y[1][0],y[1][1]),a.lineEnd(),a.lineStart(),a.point(y[0][0],y[0][1],3)))}w&&(!f||!rt(f,R))&&a.point(R[0],R[1]),f=R,p=w,h=P},lineEnd:function(){p&&a.lineEnd(),f=null},clean:function(){return N|(v&&p)<<1}}}function c(a,f,h){var p=Bn(a),v=Bn(f),N=[1,0,0],E=at(p,v),M=nt(E,E),R=E[0],d=M-R*R;if(!d)return!h&&a;var w=n*M/d,P=-n*R/d,y=at(N,E),A=tt(N,w),I=tt(E,P);mt(A,I);var L=y,$=nt(A,L),j=nt(L,L),G=$*$-j*(nt(A,A)-1);if(!(G<0)){var b=Nn(G),D=tt(L,(-$-b)/j);if(mt(D,A),D=Nt(D),!h)return D;var g=a[0],z=f[0],H=a[1],Q=f[1],U;z<g&&(U=g,g=z,z=U);var Sn=z-g,fn=Z(Sn-T)<C,un=fn||Sn<C;if(!fn&&Q<H&&(U=H,H=Q,Q=U),un?fn?H+Q>0^D[1]<(Z(D[0]-g)<C?H:Q):H<=D[1]&&D[1]<=Q:Sn>T^(g<=D[0]&&D[0]<=z)){var B=tt(L,(-$+b)/j);return mt(B,A),[D,Nt(B)]}}}function s(a,f){var h=e?t:T-t,p=0;return a<-h?p|=1:a>h&&(p|=2),f<-h?p|=4:f>h&&(p|=8),p}return He(o,u,l,e?[0,-t]:[-T,t-T])}function Ii(t,n,i,e,r,l){var o=t[0],u=t[1],c=n[0],s=n[1],a=0,f=1,h=c-o,p=s-u,v;if(v=i-o,!(!h&&v>0)){if(v/=h,h<0){if(v<a)return;v<f&&(f=v)}else if(h>0){if(v>f)return;v>a&&(a=v)}if(v=r-o,!(!h&&v<0)){if(v/=h,h<0){if(v>f)return;v>a&&(a=v)}else if(h>0){if(v<a)return;v<f&&(f=v)}if(v=e-u,!(!p&&v>0)){if(v/=p,p<0){if(v<a)return;v<f&&(f=v)}else if(p>0){if(v>f)return;v>a&&(a=v)}if(v=l-u,!(!p&&v<0)){if(v/=p,p<0){if(v>f)return;v>a&&(a=v)}else if(p>0){if(v<a)return;v<f&&(f=v)}return a>0&&(t[0]=o+a*h,t[1]=u+a*p),f<1&&(n[0]=o+f*h,n[1]=u+f*p),!0}}}}}var Zn=1e9,it=-Zn;function zi(t,n,i,e){function r(s,a){return t<=s&&s<=i&&n<=a&&a<=e}function l(s,a,f,h){var p=0,v=0;if(s==null||(p=o(s,f))!==(v=o(a,f))||c(s,a)<0^f>0)do h.point(p===0||p===3?t:i,p>1?e:n);while((p=(p+f+4)%4)!==v);else h.point(a[0],a[1])}function o(s,a){return Z(s[0]-t)<C?a>0?0:3:Z(s[0]-i)<C?a>0?2:1:Z(s[1]-n)<C?a>0?1:0:a>0?3:2}function u(s,a){return c(s.x,a.x)}function c(s,a){var f=o(s,1),h=o(a,1);return f!==h?f-h:f===0?a[1]-s[1]:f===1?s[0]-a[0]:f===2?s[1]-a[1]:a[0]-s[0]}return function(s){var a=s,f=Be(),h,p,v,N,E,M,R,d,w,P,y,A={point:I,lineStart:G,lineEnd:b,polygonStart:$,polygonEnd:j};function I(g,z){r(g,z)&&a.point(g,z)}function L(){for(var g=0,z=0,H=p.length;z<H;++z)for(var Q=p[z],U=1,Sn=Q.length,fn=Q[0],un,B,vn=fn[0],O=fn[1];U<Sn;++U)un=vn,B=O,fn=Q[U],vn=fn[0],O=fn[1],B<=e?O>e&&(vn-un)*(e-B)>(O-B)*(t-un)&&++g:O<=e&&(vn-un)*(e-B)<(O-B)*(t-un)&&--g;return g}function $(){a=f,h=[],p=[],y=!0}function j(){var g=L(),z=y&&g,H=(h=qe(h)).length;(z||H)&&(s.polygonStart(),z&&(s.lineStart(),l(null,null,1,s),s.lineEnd()),H&&Xe(h,u,g,l,s),s.polygonEnd()),a=s,h=p=v=null}function G(){A.point=D,p&&p.push(v=[]),P=!0,w=!1,R=d=NaN}function b(){h&&(D(N,E),M&&w&&f.rejoin(),h.push(f.result())),A.point=I,w&&a.lineEnd()}function D(g,z){var H=r(g,z);if(p&&v.push([g,z]),P)N=g,E=z,M=H,P=!1,H&&(a.lineStart(),a.point(g,z));else if(H&&w)a.point(g,z);else{var Q=[R=Math.max(it,Math.min(Zn,R)),d=Math.max(it,Math.min(Zn,d))],U=[g=Math.max(it,Math.min(Zn,g)),z=Math.max(it,Math.min(Zn,z))];Ii(Q,U,t,n,i,e)?(w||(a.lineStart(),a.point(Q[0],Q[1])),a.point(U[0],U[1]),H||a.lineEnd(),y=!1):H&&(a.lineStart(),a.point(g,z),y=!1)}R=g,d=z,w=H}return A}}function ae(t,n,i){var e=Fn(t,n-C,i).concat(n);return function(r){return e.map(function(l){return[r,l]})}}function fe(t,n,i){var e=Fn(t,n-C,i).concat(n);return function(r){return e.map(function(l){return[l,r]})}}function Ai(){var t,n,i,e,r,l,o,u,c=10,s=c,a=90,f=360,h,p,v,N,E=2.5;function M(){return{type:"MultiLineString",coordinates:R()}}function R(){return Fn(xn(e/a)*a,i,a).map(v).concat(Fn(xn(u/f)*f,o,f).map(N)).concat(Fn(xn(n/c)*c,t,c).filter(function(d){return Z(d%a)>C}).map(h)).concat(Fn(xn(l/s)*s,r,s).filter(function(d){return Z(d%f)>C}).map(p))}return M.lines=function(){return R().map(function(d){return{type:"LineString",coordinates:d}})},M.outline=function(){return{type:"Polygon",coordinates:[v(e).concat(N(o).slice(1),v(i).reverse().slice(1),N(u).reverse().slice(1))]}},M.extent=function(d){return arguments.length?M.extentMajor(d).extentMinor(d):M.extentMinor()},M.extentMajor=function(d){return arguments.length?(e=+d[0][0],i=+d[1][0],u=+d[0][1],o=+d[1][1],e>i&&(d=e,e=i,i=d),u>o&&(d=u,u=o,o=d),M.precision(E)):[[e,u],[i,o]]},M.extentMinor=function(d){return arguments.length?(n=+d[0][0],t=+d[1][0],l=+d[0][1],r=+d[1][1],n>t&&(d=n,n=t,t=d),l>r&&(d=l,l=r,r=d),M.precision(E)):[[n,l],[t,r]]},M.step=function(d){return arguments.length?M.stepMajor(d).stepMinor(d):M.stepMinor()},M.stepMajor=function(d){return arguments.length?(a=+d[0],f=+d[1],M):[a,f]},M.stepMinor=function(d){return arguments.length?(c=+d[0],s=+d[1],M):[c,s]},M.precision=function(d){return arguments.length?(E=+d,h=ae(l,r,90),p=fe(n,t,E),v=ae(u,o,90),N=fe(e,i,E),M):E},M.extentMajor([[-180,-90+C],[180,90-C]]).extentMinor([[-180,-80-C],[180,80+C]])}const It=t=>t;var St=new jn,zt=new jn,Ve,Ze,At,$t,Mn={point:pn,lineStart:pn,lineEnd:pn,polygonStart:function(){Mn.lineStart=$i,Mn.lineEnd=Di},polygonEnd:function(){Mn.lineStart=Mn.lineEnd=Mn.point=pn,St.add(Z(zt)),zt=new jn},result:function(){var t=St/2;return St=new jn,t}};function $i(){Mn.point=Li}function Li(t,n){Mn.point=Ge,Ve=At=t,Ze=$t=n}function Ge(t,n){zt.add($t*t-At*n),At=t,$t=n}function Di(){Ge(Ve,Ze)}var Xn=1/0,ft=Xn,Qn=-Xn,ct=Qn,st={point:Ci,lineStart:pn,lineEnd:pn,polygonStart:pn,polygonEnd:pn,result:function(){var t=[[Xn,ft],[Qn,ct]];return Qn=ct=-(ft=Xn=1/0),t}};function Ci(t,n){t<Xn&&(Xn=t),t>Qn&&(Qn=t),n<ft&&(ft=n),n>ct&&(ct=n)}var Lt=0,Dt=0,Gn=0,ht=0,pt=0,bn=0,Ct=0,Tt=0,On=0,Oe,We,mn,En,sn={point:kn,lineStart:ce,lineEnd:se,polygonStart:function(){sn.lineStart=bi,sn.lineEnd=qi},polygonEnd:function(){sn.point=kn,sn.lineStart=ce,sn.lineEnd=se},result:function(){var t=On?[Ct/On,Tt/On]:bn?[ht/bn,pt/bn]:Gn?[Lt/Gn,Dt/Gn]:[NaN,NaN];return Lt=Dt=Gn=ht=pt=bn=Ct=Tt=On=0,t}};function kn(t,n){Lt+=t,Dt+=n,++Gn}function ce(){sn.point=Ti}function Ti(t,n){sn.point=Fi,kn(mn=t,En=n)}function Fi(t,n){var i=t-mn,e=n-En,r=Nn(i*i+e*e);ht+=r*(mn+t)/2,pt+=r*(En+n)/2,bn+=r,kn(mn=t,En=n)}function se(){sn.point=kn}function bi(){sn.point=Yi}function qi(){Je(Oe,We)}function Yi(t,n){sn.point=Je,kn(Oe=mn=t,We=En=n)}function Je(t,n){var i=t-mn,e=n-En,r=Nn(i*i+e*e);ht+=r*(mn+t)/2,pt+=r*(En+n)/2,bn+=r,r=En*t-mn*n,Ct+=r*(mn+t),Tt+=r*(En+n),On+=r*3,kn(mn=t,En=n)}function Ke(t){this._context=t}Ke.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:{this._context.moveTo(t,n),this._point=1;break}case 1:{this._context.lineTo(t,n);break}default:{this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,gn);break}}},result:pn};var Ft=new jn,yt,Qe,Ue,Wn,Jn,Un={point:pn,lineStart:function(){Un.point=Bi},lineEnd:function(){yt&&xe(Qe,Ue),Un.point=pn},polygonStart:function(){yt=!0},polygonEnd:function(){yt=null},result:function(){var t=+Ft;return Ft=new jn,t}};function Bi(t,n){Un.point=xe,Qe=Wn=t,Ue=Jn=n}function xe(t,n){Wn-=t,Jn-=n,Ft.add(Nn(Wn*Wn+Jn*Jn)),Wn=t,Jn=n}let he,gt,pe,ge;class ve{constructor(n){this._append=n==null?ni:Xi(n),this._radius=4.5,this._=""}pointRadius(n){return this._radius=+n,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(n,i){switch(this._point){case 0:{this._append`M${n},${i}`,this._point=1;break}case 1:{this._append`L${n},${i}`;break}default:{if(this._append`M${n},${i}`,this._radius!==pe||this._append!==gt){const e=this._radius,r=this._;this._="",this._append`m0,${e}a${e},${e} 0 1,1 0,${-2*e}a${e},${e} 0 1,1 0,${2*e}z`,pe=e,gt=this._append,ge=this._,this._=r}this._+=ge;break}}}result(){const n=this._;return this._="",n.length?n:null}}function ni(t){let n=1;this._+=t[0];for(const i=t.length;n<i;++n)this._+=arguments[n]+t[n]}function Xi(t){const n=Math.floor(t);if(!(n>=0))throw new RangeError(`invalid digits: ${t}`);if(n>15)return ni;if(n!==he){const i=10**n;he=n,gt=function(r){let l=1;this._+=r[0];for(const o=r.length;l<o;++l)this._+=Math.round(arguments[l]*i)/i+r[l]}}return gt}function Hi(t,n){let i=3,e=4.5,r,l;function o(u){return u&&(typeof e=="function"&&l.pointRadius(+e.apply(this,arguments)),Dn(u,r(l))),l.result()}return o.area=function(u){return Dn(u,r(Mn)),Mn.result()},o.measure=function(u){return Dn(u,r(Un)),Un.result()},o.bounds=function(u){return Dn(u,r(st)),st.result()},o.centroid=function(u){return Dn(u,r(sn)),sn.result()},o.projection=function(u){return arguments.length?(r=u==null?(t=null,It):(t=u).stream,o):t},o.context=function(u){return arguments.length?(l=u==null?(n=null,new ve(i)):new Ke(n=u),typeof e!="function"&&l.pointRadius(e),o):n},o.pointRadius=function(u){return arguments.length?(e=typeof u=="function"?u:(l.pointRadius(+u),+u),o):e},o.digits=function(u){if(!arguments.length)return i;if(u==null)i=null;else{const c=Math.floor(u);if(!(c>=0))throw new RangeError(`invalid digits: ${u}`);i=c}return n===null&&(l=new ve(i)),o},o.projection(t).digits(i).context(n)}function qt(t){return function(n){var i=new bt;for(var e in t)i[e]=t[e];return i.stream=n,i}}function bt(){}bt.prototype={constructor:bt,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Yt(t,n,i){var e=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),e!=null&&t.clipExtent(null),Dn(i,t.stream(st)),n(st.result()),e!=null&&t.clipExtent(e),t}function ti(t,n,i){return Yt(t,function(e){var r=n[1][0]-n[0][0],l=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),l/(e[1][1]-e[0][1])),u=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,c=+n[0][1]+(l-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([u,c])},i)}function Vi(t,n,i){return ti(t,[[0,0],n],i)}function Zi(t,n,i){return Yt(t,function(e){var r=+n,l=r/(e[1][0]-e[0][0]),o=(r-l*(e[1][0]+e[0][0]))/2,u=-l*e[0][1];t.scale(150*l).translate([o,u])},i)}function Gi(t,n,i){return Yt(t,function(e){var r=+n,l=r/(e[1][1]-e[0][1]),o=-l*e[0][0],u=(r-l*(e[1][1]+e[0][1]))/2;t.scale(150*l).translate([o,u])},i)}var de=16,Oi=W(30*an);function _e(t,n){return+n?Ji(t,n):Wi(t)}function Wi(t){return qt({point:function(n,i){n=t(n,i),this.stream.point(n[0],n[1])}})}function Ji(t,n){function i(e,r,l,o,u,c,s,a,f,h,p,v,N,E){var M=s-e,R=a-r,d=M*M+R*R;if(d>4*n&&N--){var w=o+h,P=u+p,y=c+v,A=Nn(w*w+P*P+y*y),I=Yn(y/=A),L=Z(Z(y)-1)<C||Z(l-f)<C?(l+f)/2:qn(P,w),$=t(L,I),j=$[0],G=$[1],b=j-e,D=G-r,g=R*b-M*D;(g*g/d>n||Z((M*b+R*D)/d-.5)>.3||o*h+u*p+c*v<Oi)&&(i(e,r,l,o,u,c,j,G,L,w/=A,P/=A,y,N,E),E.point(j,G),i(j,G,L,w,P,y,s,a,f,h,p,v,N,E))}}return function(e){var r,l,o,u,c,s,a,f,h,p,v,N,E={point:M,lineStart:R,lineEnd:w,polygonStart:function(){e.polygonStart(),E.lineStart=P},polygonEnd:function(){e.polygonEnd(),E.lineStart=R}};function M(I,L){I=t(I,L),e.point(I[0],I[1])}function R(){f=NaN,E.point=d,e.lineStart()}function d(I,L){var $=Bn([I,L]),j=t(I,L);i(f,h,a,p,v,N,f=j[0],h=j[1],a=I,p=$[0],v=$[1],N=$[2],de,e),e.point(f,h)}function w(){E.point=M,e.lineEnd()}function P(){R(),E.point=y,E.lineEnd=A}function y(I,L){d(r=I,L),l=f,o=h,u=p,c=v,s=N,E.point=d}function A(){i(f,h,a,p,v,N,l,o,r,u,c,s,de,e),E.lineEnd=w,w()}return E}}var Ki=qt({point:function(t,n){this.stream.point(t*an,n*an)}});function Qi(t){return qt({point:function(n,i){var e=t(n,i);return this.stream.point(e[0],e[1])}})}function Ui(t,n,i,e,r){function l(o,u){return o*=e,u*=r,[n+t*o,i-t*u]}return l.invert=function(o,u){return[(o-n)/t*e,(i-u)/t*r]},l}function me(t,n,i,e,r,l){if(!l)return Ui(t,n,i,e,r);var o=W(l),u=V(l),c=o*t,s=u*t,a=o/t,f=u/t,h=(u*i-o*n)/t,p=(u*n+o*i)/t;function v(N,E){return N*=e,E*=r,[c*N-s*E+n,i-s*N-c*E]}return v.invert=function(N,E){return[e*(a*N-f*E+h),r*(p-f*N-a*E)]},v}function xi(t){return nr(function(){return t})()}function nr(t){var n,i=150,e=480,r=250,l=0,o=0,u=0,c=0,s=0,a,f=0,h=1,p=1,v=null,N=ue,E=null,M,R,d,w=It,P=.5,y,A,I,L,$;function j(g){return I(g[0]*an,g[1]*an)}function G(g){return g=I.invert(g[0],g[1]),g&&[g[0]*wn,g[1]*wn]}j.stream=function(g){return L&&$===g?L:L=Ki(Qi(a)(N(y(w($=g)))))},j.preclip=function(g){return arguments.length?(N=g,v=void 0,D()):N},j.postclip=function(g){return arguments.length?(w=g,E=M=R=d=null,D()):w},j.clipAngle=function(g){return arguments.length?(N=+g?ki(v=g*an):(v=null,ue),D()):v*wn},j.clipExtent=function(g){return arguments.length?(w=g==null?(E=M=R=d=null,It):zi(E=+g[0][0],M=+g[0][1],R=+g[1][0],d=+g[1][1]),D()):E==null?null:[[E,M],[R,d]]},j.scale=function(g){return arguments.length?(i=+g,b()):i},j.translate=function(g){return arguments.length?(e=+g[0],r=+g[1],b()):[e,r]},j.center=function(g){return arguments.length?(l=g[0]%360*an,o=g[1]%360*an,b()):[l*wn,o*wn]},j.rotate=function(g){return arguments.length?(u=g[0]%360*an,c=g[1]%360*an,s=g.length>2?g[2]%360*an:0,b()):[u*wn,c*wn,s*wn]},j.angle=function(g){return arguments.length?(f=g%360*an,b()):f*wn},j.reflectX=function(g){return arguments.length?(h=g?-1:1,b()):h<0},j.reflectY=function(g){return arguments.length?(p=g?-1:1,b()):p<0},j.precision=function(g){return arguments.length?(y=_e(A,P=g*g),D()):Nn(P)},j.fitExtent=function(g,z){return ti(j,g,z)},j.fitSize=function(g,z){return Vi(j,g,z)},j.fitWidth=function(g,z){return Zi(j,g,z)},j.fitHeight=function(g,z){return Gi(j,g,z)};function b(){var g=me(i,0,0,h,p,f).apply(null,n(l,o)),z=me(i,e-g[0],r-g[1],h,p,f);return a=Si(u,c,s),A=jt(n,z),I=jt(a,A),y=_e(A,P),D()}function D(){return L=$=null,j}return function(){return n=t.apply(this,arguments),j.invert=n.invert&&G,b()}}function tr(t){return function(n,i){var e=W(n),r=W(i),l=t(e*r);return l===1/0?[2,0]:[l*r*V(n),l*V(i)]}}function er(t){return function(n,i){var e=Nn(n*n+i*i),r=t(e),l=V(r),o=W(r);return[qn(n*l,e*o),Yn(e&&i*l/e)]}}var ei=tr(function(t){return(t=Ye(t))&&t/V(t)});ei.invert=er(function(t){return t});function ir(){return xi(ei).scale(79.4188).clipAngle(180-.001)}function Ee(t,n,i){const e=t.slice();return e[17]=n[i].cx,e[18]=n[i].cy,e[19]=n[i].name,e}function Se(t,n,i){const e=t.slice();return e[17]=n[i].cx,e[18]=n[i].cy,e[19]=n[i].name,e[23]=i,e}function ye(t,n,i){const e=t.slice();return e[24]=n[i],e[23]=i,e}function we(t,n,i){const e=t.slice();return e[26]=n[i],e[23]=i,e}function Me(t,n,i){const e=t.slice();return e[26]=n[i],e[23]=i,e}function Pe(t,n,i){const e=t.slice();return e[26]=n[i],e[23]=i,e}function Ne(t){let n,i;return{c(){n=J("path"),this.h()},l(e){n=K(e,"path",{d:!0,class:!0}),q(n).forEach(k),this.h()},h(){m(n,"d",i=t[9](t[26])),m(n,"class","marineBorders")},m(e,r){nn(e,n,r)},p(e,r){r&4&&i!==(i=e[9](e[26]))&&m(n,"d",i)},d(e){e&&k(n)}}}function Re(t){let n,i;return{c(){n=J("path"),this.h()},l(e){n=K(e,"path",{d:!0,class:!0}),q(n).forEach(k),this.h()},h(){m(n,"d",i=t[9](t[26])),m(n,"class","country")},m(e,r){nn(e,n,r)},p(e,r){r&2&&i!==(i=e[9](e[26]))&&m(n,"d",i)},d(e){e&&k(n)}}}function je(t){let n,i;return{c(){n=J("path"),this.h()},l(e){n=K(e,"path",{d:!0,class:!0}),q(n).forEach(k),this.h()},h(){m(n,"d",i=t[9](t[26])),m(n,"class","spoua svelte-1j1xobp")},m(e,r){nn(e,n,r)},p(e,r){r&8&&i!==(i=e[9](e[26]))&&m(n,"d",i)},d(e){e&&k(n)}}}function ke(t){let n,i=cn(t[5]),e=[];for(let r=0;r<i.length;r+=1)e[r]=ze(ye(t,i,r));return{c(){for(let r=0;r<e.length;r+=1)e[r].c();n=Pn()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);n=Pn()},m(r,l){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(r,l);nn(r,n,l)},p(r,l){if(l&32){i=cn(r[5]);let o;for(o=0;o<i.length;o+=1){const u=ye(r,i,o);e[o]?e[o].p(u,l):(e[o]=ze(u),e[o].c(),e[o].m(n.parentNode,n))}for(;o<e.length;o+=1)e[o].d(1);e.length=i.length}},d(r){r&&k(n),Ln(e,r)}}}function Ie(t){let n,i,e,r,l,o;return{c(){n=J("line"),this.h()},l(u){n=K(u,"line",{x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),q(n).forEach(k),this.h()},h(){m(n,"x1",i=t[5][t[23]-1].cx),m(n,"y1",e=t[5][t[23]-1].cy),m(n,"x2",r=t[24].cx),m(n,"y2",l=t[24].cy),m(n,"class",o=lt(t[23]===t[5].length-1?"line highlite":"line old")+" svelte-1j1xobp")},m(u,c){nn(u,n,c)},p(u,c){c&32&&i!==(i=u[5][u[23]-1].cx)&&m(n,"x1",i),c&32&&e!==(e=u[5][u[23]-1].cy)&&m(n,"y1",e),c&32&&r!==(r=u[24].cx)&&m(n,"x2",r),c&32&&l!==(l=u[24].cy)&&m(n,"y2",l),c&32&&o!==(o=lt(u[23]===u[5].length-1?"line highlite":"line old")+" svelte-1j1xobp")&&m(n,"class",o)},d(u){u&&k(n)}}}function ze(t){let n,i=t[23]>0&&t[5][t[23]].name===t[5][t[23]-1].name&&Ie(t);return{c(){i&&i.c(),n=Pn()},l(e){i&&i.l(e),n=Pn()},m(e,r){i&&i.m(e,r),nn(e,n,r)},p(e,r){e[23]>0&&e[5][e[23]].name===e[5][e[23]-1].name?i?i.p(e,r):(i=Ie(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(e){e&&k(n),i&&i.d(e)}}}function Ae(t){let n,i=t[19]+"",e,r,l;return{c(){n=J("text"),e=Cn(i),this.h()},l(o){n=K(o,"text",{x:!0,y:!0,class:!0,"font-size":!0});var u=q(n);e=Tn(u,i),u.forEach(k),this.h()},h(){m(n,"x",r=t[17]+8),m(n,"y",l=t[18]+2),m(n,"class","satellite-name svelte-1j1xobp"),m(n,"font-size","8")},m(o,u){nn(o,n,u),Y(n,e)},p(o,u){u&32&&i!==(i=o[19]+"")&&ot(e,i),u&32&&r!==(r=o[17]+8)&&m(n,"x",r),u&32&&l!==(l=o[18]+2)&&m(n,"y",l)},d(o){o&&k(n)}}}function $e(t){let n,i,e,r,l,o,u=t[23]===t[5].length-1&&Ae(t);return{c(){n=J("circle"),u&&u.c(),o=Pn(),this.h()},l(c){n=K(c,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),q(n).forEach(k),u&&u.l(c),o=Pn(),this.h()},h(){m(n,"cx",i=t[17]),m(n,"cy",e=t[18]),m(n,"r",r=t[23]===t[5].length-1?5:1),m(n,"fill","red"),m(n,"class",l=lt(t[23]===t[5].length-1?"dot highlite":"dot old")+" svelte-1j1xobp")},m(c,s){nn(c,n,s),u&&u.m(c,s),nn(c,o,s)},p(c,s){s&32&&i!==(i=c[17])&&m(n,"cx",i),s&32&&e!==(e=c[18])&&m(n,"cy",e),s&32&&r!==(r=c[23]===c[5].length-1?5:1)&&m(n,"r",r),s&32&&l!==(l=lt(c[23]===c[5].length-1?"dot highlite":"dot old")+" svelte-1j1xobp")&&m(n,"class",l),c[23]===c[5].length-1?u?u.p(c,s):(u=Ae(c),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},d(c){c&&(k(n),k(o)),u&&u.d(c)}}}function Le(t){let n,i,e,r,l=t[19]+"",o,u,c;return{c(){n=J("circle"),r=J("text"),o=Cn(l),this.h()},l(s){n=K(s,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),q(n).forEach(k),r=K(s,"text",{x:!0,y:!0,"font-size":!0,class:!0});var a=q(r);o=Tn(a,l),a.forEach(k),this.h()},h(){m(n,"cx",i=t[17]),m(n,"cy",e=t[18]),m(n,"r",1),m(n,"fill","black"),m(n,"class","svelte-1j1xobp"),m(r,"x",u=t[17]+4),m(r,"y",c=t[18]+2),m(r,"font-size","8"),m(r,"class","svelte-1j1xobp")},m(s,a){nn(s,n,a),nn(s,r,a),Y(r,o)},p(s,a){a&1&&i!==(i=s[17])&&m(n,"cx",i),a&1&&e!==(e=s[18])&&m(n,"cy",e),a&1&&l!==(l=s[19]+"")&&ot(o,l),a&1&&u!==(u=s[17]+4)&&m(r,"x",u),a&1&&c!==(c=s[18]+2)&&m(r,"y",c)},d(s){s&&(k(n),k(r))}}}function rr(t){var Bt,Xt;let n,i,e,r,l,o,u,c=`<p class="svelte-1j1xobp">An interactive visualisation of all the space debris that reentered
            the atmosphere in the South Pacific Ocean. From 1960 until today.</p>`,s,a,f,h,p=((Bt=t[5][t[5].length-1])==null?void 0:Bt.name)+"",v,N,E,M,R=((Xt=t[5][t[5].length-1])==null?void 0:Xt.year)+"",d,w,P,y,A,I,L,$,j,G,b,D,g,z,H,Q,U,Sn,fn,un=cn(t[2]),B=[];for(let _=0;_<un.length;_+=1)B[_]=Ne(Pe(t,un,_));let vn=cn(t[1]),O=[];for(let _=0;_<vn.length;_+=1)O[_]=Re(Me(t,vn,_));let In=cn(t[3]),en=[];for(let _=0;_<In.length;_+=1)en[_]=je(we(t,In,_));let on=t[5].length>1&&ke(t),zn=cn(t[5]),rn=[];for(let _=0;_<zn.length;_+=1)rn[_]=$e(Se(t,zn,_));let An=cn(t[0]),ln=[];for(let _=0;_<An.length;_+=1)ln[_]=Le(Ee(t,An,_));return{c(){n=dn("div"),i=dn("div"),e=Hn(),r=dn("div"),l=Hn(),o=dn("div"),u=dn("div"),u.innerHTML=c,s=Hn(),a=dn("div"),f=dn("span"),h=Cn("Satellite: "),v=Cn(p),N=Hn(),E=dn("span"),M=Cn("Year: "),d=Cn(R),w=Hn(),P=J("svg"),y=J("defs"),A=J("path"),I=J("clipPath"),L=J("use"),$=J("g"),j=J("circle"),G=J("g");for(let _=0;_<B.length;_+=1)B[_].c();b=J("g");for(let _=0;_<O.length;_+=1)O[_].c();D=J("g");for(let _=0;_<en.length;_+=1)en[_].c();g=J("g"),on&&on.c(),z=J("g");for(let _=0;_<rn.length;_+=1)rn[_].c();H=J("g"),Q=J("path"),U=J("g");for(let _=0;_<ln.length;_+=1)ln[_].c();this.h()},l(_){n=_n(_,"DIV",{class:!0});var X=q(n);i=_n(X,"DIV",{class:!0,style:!0}),q(i).forEach(k),e=Vn(X),r=_n(X,"DIV",{class:!0,style:!0}),q(r).forEach(k),X.forEach(k),l=Vn(_),o=_n(_,"DIV",{class:!0});var F=q(o);u=_n(F,"DIV",{class:!0,"data-svelte-h":!0}),be(u)!=="svelte-11o204v"&&(u.innerHTML=c),s=Vn(F),a=_n(F,"DIV",{class:!0});var Rn=q(a);f=_n(Rn,"SPAN",{class:!0});var S=q(f);h=Tn(S,"Satellite: "),v=Tn(S,p),S.forEach(k),N=Vn(Rn),E=_n(Rn,"SPAN",{class:!0});var tn=q(E);M=Tn(tn,"Year: "),d=Tn(tn,R),tn.forEach(k),Rn.forEach(k),F.forEach(k),w=Vn(_),P=K(_,"svg",{viewBox:!0,style:!0});var vt=q(P);y=K(vt,"defs",{});var dt=q(y);A=K(dt,"path",{id:!0,d:!0}),q(A).forEach(k),I=K(dt,"clipPath",{class:!0,id:!0});var Ht=q(I);L=K(Ht,"use",{href:!0}),q(L).forEach(k),Ht.forEach(k),dt.forEach(k),$=K(vt,"g",{"clip-path":!0,class:!0});var yn=q($);j=K(yn,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),q(j).forEach(k),G=K(yn,"g",{class:!0,fill:!0,stroke:!0});var Vt=q(G);for(let x=0;x<B.length;x+=1)B[x].l(Vt);Vt.forEach(k),b=K(yn,"g",{class:!0,fill:!0,stroke:!0});var Zt=q(b);for(let x=0;x<O.length;x+=1)O[x].l(Zt);Zt.forEach(k),D=K(yn,"g",{class:!0,fill:!0,stroke:!0});var Gt=q(D);for(let x=0;x<en.length;x+=1)en[x].l(Gt);Gt.forEach(k),g=K(yn,"g",{class:!0});var Ot=q(g);on&&on.l(Ot),Ot.forEach(k),z=K(yn,"g",{class:!0});var Wt=q(z);for(let x=0;x<rn.length;x+=1)rn[x].l(Wt);Wt.forEach(k),H=K(yn,"g",{class:!0});var Jt=q(H);Q=K(Jt,"path",{class:!0,fill:!0,d:!0}),q(Q).forEach(k),Jt.forEach(k),U=K(yn,"g",{class:!0});var Kt=q(U);for(let x=0;x<ln.length;x+=1)ln[x].l(Kt);Kt.forEach(k),yn.forEach(k),vt.forEach(k),this.h()},h(){m(i,"class","progress svelte-1j1xobp"),$n(i,"width",(t[6]+1)/t[4].length*100+"%"),m(r,"class","draggable svelte-1j1xobp"),$n(r,"left",(t[6]+1)/t[4].length*100+"%"),m(n,"class","progress-bar svelte-1j1xobp"),m(u,"class","description svelte-1j1xobp"),m(f,"class","svelte-1j1xobp"),m(E,"class","svelte-1j1xobp"),m(a,"class","satellite-info svelte-1j1xobp"),m(o,"class","top-bar svelte-1j1xobp"),m(A,"id","sphere"),m(A,"d",t[9]({type:"Sphere"})),m(L,"href","#sphere"),m(I,"class","clip"),m(I,"id","clip"),m(j,"cx",t[7]/2),m(j,"cy",t[8]/2),m(j,"r",t[7]/2),m(j,"fill","#efffff"),m(G,"class","marine svelte-1j1xobp"),m(G,"fill","#e2eaea"),m(G,"stroke","red"),m(b,"class","world svelte-1j1xobp"),m(b,"fill","white"),m(b,"stroke","none"),m(D,"class","spoua svelte-1j1xobp"),m(D,"fill","none"),m(D,"stroke","black"),m(g,"class","svelte-1j1xobp"),m(z,"class","svelte-1j1xobp"),m(Q,"class","graticule svelte-1j1xobp"),m(Q,"fill","none"),m(Q,"d",t[9](t[10]())),m(H,"class","svelte-1j1xobp"),m(U,"class","nemo svelte-1j1xobp"),m($,"clip-path","url(#clip)"),m($,"class","svelte-1j1xobp"),m(P,"viewBox","0 0 "+t[7]+" "+t[8]),$n(P,"width","100%"),$n(P,"height","100vh")},m(_,X){nn(_,n,X),Y(n,i),Y(n,e),Y(n,r),nn(_,l,X),nn(_,o,X),Y(o,u),Y(o,s),Y(o,a),Y(a,f),Y(f,h),Y(f,v),Y(a,N),Y(a,E),Y(E,M),Y(E,d),nn(_,w,X),nn(_,P,X),Y(P,y),Y(y,A),Y(y,I),Y(I,L),Y(P,$),Y($,j),Y($,G);for(let F=0;F<B.length;F+=1)B[F]&&B[F].m(G,null);Y($,b);for(let F=0;F<O.length;F+=1)O[F]&&O[F].m(b,null);Y($,D);for(let F=0;F<en.length;F+=1)en[F]&&en[F].m(D,null);Y($,g),on&&on.m(g,null),Y($,z);for(let F=0;F<rn.length;F+=1)rn[F]&&rn[F].m(z,null);Y($,H),Y(H,Q),Y($,U);for(let F=0;F<ln.length;F+=1)ln[F]&&ln[F].m(U,null);Sn||(fn=ri(n,"mousedown",t[11]),Sn=!0)},p(_,[X]){var F,Rn;if(X&80&&$n(i,"width",(_[6]+1)/_[4].length*100+"%"),X&80&&$n(r,"left",(_[6]+1)/_[4].length*100+"%"),X&32&&p!==(p=((F=_[5][_[5].length-1])==null?void 0:F.name)+"")&&ot(v,p),X&32&&R!==(R=((Rn=_[5][_[5].length-1])==null?void 0:Rn.year)+"")&&ot(d,R),X&516){un=cn(_[2]);let S;for(S=0;S<un.length;S+=1){const tn=Pe(_,un,S);B[S]?B[S].p(tn,X):(B[S]=Ne(tn),B[S].c(),B[S].m(G,null))}for(;S<B.length;S+=1)B[S].d(1);B.length=un.length}if(X&514){vn=cn(_[1]);let S;for(S=0;S<vn.length;S+=1){const tn=Me(_,vn,S);O[S]?O[S].p(tn,X):(O[S]=Re(tn),O[S].c(),O[S].m(b,null))}for(;S<O.length;S+=1)O[S].d(1);O.length=vn.length}if(X&520){In=cn(_[3]);let S;for(S=0;S<In.length;S+=1){const tn=we(_,In,S);en[S]?en[S].p(tn,X):(en[S]=je(tn),en[S].c(),en[S].m(D,null))}for(;S<en.length;S+=1)en[S].d(1);en.length=In.length}if(_[5].length>1?on?on.p(_,X):(on=ke(_),on.c(),on.m(g,null)):on&&(on.d(1),on=null),X&32){zn=cn(_[5]);let S;for(S=0;S<zn.length;S+=1){const tn=Se(_,zn,S);rn[S]?rn[S].p(tn,X):(rn[S]=$e(tn),rn[S].c(),rn[S].m(z,null))}for(;S<rn.length;S+=1)rn[S].d(1);rn.length=zn.length}if(X&1){An=cn(_[0]);let S;for(S=0;S<An.length;S+=1){const tn=Ee(_,An,S);ln[S]?ln[S].p(tn,X):(ln[S]=Le(tn),ln[S].c(),ln[S].m(U,null))}for(;S<ln.length;S+=1)ln[S].d(1);ln.length=An.length}},i:Kn,o:Kn,d(_){_&&(k(n),k(l),k(o),k(w),k(P)),Ln(B,_),Ln(O,_),Ln(en,_),on&&on.d(),Ln(rn,_),Ln(ln,_),Sn=!1,fn()}}}function lr(t,n,i){let e=window.innerWidth,r=window.innerHeight;const l=ir().rotate([123,48]).scale(250).precision(1).clipAngle(95.3).translate([e/2,r/2]),o=Hi().projection(l),u=Ai().step([0,10]);let{data:c}=n,s=[{lon:-126.3622344,lat:-72.9741938,name:"Maher Island"},{lon:-109.452777777778,lat:-27.2013888888889,name:"Easter Island"},{lon:-124.787888,lat:-24.6807263,name:"Ducie Island"},{lon:-123.3933333,lat:-48.8766667,name:"Point Nemo"}],a=[],f=[],h=[],p=[],v=[],N=0,E;Ce(async()=>{try{const d=await fetch("world.json").then(y=>y.json()),w=await fetch("EEZ_land_v2_201410.json").then(y=>y.json()),P=await fetch("spoua.json").then(y=>y.json());i(1,a=_t(d,d.objects.countries).features),i(2,f=_t(w,w.objects.EEZ_land_v2_201410).features),i(3,h=_t(P,P.objects.spoua).features),i(4,p=c.map(y=>{const[A,I]=l([y.lon,y.lat]);return{cx:A,cy:I,name:y.satellite_name,year:y.satellite_decay}}).filter(y=>!isNaN(y.cx)&&!isNaN(y.cy))),i(0,s=s.map(y=>{const[A,I]=l([y.lon,y.lat]);return{cx:A,cy:I,name:y.name}})),M()}catch(d){console.error("Error loading or processing data:",d)}});const M=()=>{E=setInterval(()=>{N<p.length?(i(5,v=[...v,p[N]]),i(6,N+=1)):clearInterval(E)},500)};function R(d){const w=d.currentTarget.getBoundingClientRect();let P=d.clientX-w.left;const y=w.width;P<0?P=0:P>y&&(P=y);const A=P/y*100;i(6,N=Math.floor(A/100*p.length)),i(5,v=p.slice(0,N+1))}return t.$$set=d=>{"data"in d&&i(12,c=d.data)},[s,a,f,h,p,v,N,e,r,o,u,R,c]}let or=class extends Te{constructor(n){super(),Fe(this,n,lr,rr,De,{data:12})}};function ur(t){let n,i,e,r;return i=new or({props:{data:t[0]}}),{c(){n=dn("article"),ui(i.$$.fragment),this.h()},l(l){n=_n(l,"ARTICLE",{class:!0});var o=q(n);ai(i.$$.fragment,o),o.forEach(k),this.h()},h(){m(n,"class","svelte-zuq6b6"),ii(()=>t[3].call(n))},m(l,o){nn(l,n,o),fi(i,n,null),e=ci(n,t[3].bind(n)),r=!0},p(l,o){const u={};o&1&&(u.data=l[0]),i.$set(u)},i(l){r||(Mt(i.$$.fragment,l),r=!0)},o(l){wt(i.$$.fragment,l),r=!1},d(l){l&&k(n),si(i),e()}}}function ar(t){let n,i="Loading...";return{c(){n=dn("article"),n.textContent=i,this.h()},l(e){n=_n(e,"ARTICLE",{class:!0,"data-svelte-h":!0}),be(n)!=="svelte-1qk6kpe"&&(n.textContent=i),this.h()},h(){m(n,"class","svelte-zuq6b6")},m(e,r){nn(e,n,r)},p:Kn,i:Kn,o:Kn,d(e){e&&k(n)}}}function fr(t){let n,i,e,r;const l=[ar,ur],o=[];function u(c,s){return c[0].length===0?0:1}return n=u(t),i=o[n]=l[n](t),{c(){i.c(),e=Pn()},l(c){i.l(c),e=Pn()},m(c,s){o[n].m(c,s),nn(c,e,s),r=!0},p(c,[s]){let a=n;n=u(c),n===a?o[n].p(c,s):(oi(),wt(o[a],1,1,()=>{o[a]=null}),li(),i=o[n],i?i.p(c,s):(i=o[n]=l[n](c),i.c()),Mt(i,1),i.m(e.parentNode,e))},i(c){r||(Mt(i),r=!0)},o(c){wt(i),r=!1},d(c){c&&k(e),o[n].d(c)}}}function cr(t,n,i){let e=[],r,l;Ce(async()=>{const u=await fetch("data.json");i(0,e=await u.json())});function o(){r=this.clientWidth,l=this.clientHeight,i(1,r),i(2,l)}return[e,r,l,o]}class gr extends Te{constructor(n){super(),Fe(this,n,cr,fr,De,{})}}export{gr as component};