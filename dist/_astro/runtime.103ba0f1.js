function B(e){for(var t=0;t<e.length;t++)e[t]()}let i=null;function O(e){i=e}function le(e){const t=[];let n=e,l=null;for(;n!==null;){const r=n.nodeType,o=n.nextSibling;if(r===8){const f=n.data;if(f.startsWith("ssr:")){const u=f.slice(4);if(l===null)l=u;else{if(u===l)return t;t.push(n)}n=o;continue}}l!==null&&t.push(n),n=o}return null}function me(e,t){let n=e;if(i!==null)if(t&&(n=n.firstChild),n.nodeType===8){let l=n.$$fragment;l===void 0&&(l=le(n),n.$$fragment=void 0),O(l)}else O([n.firstChild])}var I=Array.isArray,Ae=Array.from,ae=Object.defineProperty,P=Object.getOwnPropertyDescriptor,A,$,de,j,ve,ye,re,xe;function Oe(){A===void 0&&(A=Node.prototype,$=Element.prototype,de=Text.prototype,j=Map.prototype,ve=A.appendChild,ye=A.cloneNode,j.set,j.get,j.delete,$.__click=void 0,de.__nodeValue=" ",$.__className="",re=P(A,"firstChild").get,xe=P(A,"nextSibling").get,P(A,"textContent").set,P($,"className").set)}function pe(e,t){ve.call(e,t)}function Re(e,t){return ye.call(e,t)}function qe(e){const t=re.call(e);if(i!==null)if(t===null){const n=document.createTextNode("");return e.appendChild(n),n}else return oe(t);return t}function _t(e){if(i!==null){const t=e[0];return i!==null&&t!==null?oe(t):t}return re.call(e)}function at(e){const t=xe.call(e);return i!==null&&t!==null?oe(t):t}function oe(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&i.at(-1)!==e){const t=le(e),l=(t.at(-1)||e).nextSibling;return l.$$fragment=t,l}return e}const De=0,Ie=1;function Fe(e){return{d:null,e:null,i:e,p:null,r:null,t:De}}function Le(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:w,r:null,t:Ie,v:!1}}const Me=["touchstart","touchmove","touchend"];function Ve(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ue(e,t,n){if(I(e)){for(var l=0,r;l<e.length;l++)r=e[l],n===null?pe(t,r):n.before(r);return e[0]}else e!==null&&(n===null?pe(t,e):n.before(e));return e}function k(e){var t=e;if(I(e))for(var n=0,l;n<e.length;n++)l=e[n],n===0&&(t=l),l.isConnected&&l.remove();else e.isConnected&&e.remove();return t}function z(e,t,n){const l=[];for(const r of e){const o=r.r;t==="in"?(o==="in"||o==="both"?r.in():r.c(),r.d.inert=!1,ne(r.e,!1)):t==="key"?o==="key"&&(r.p=r.i(n),r.in()):((o==="out"||o==="both")&&(r.p=r.i(),l.push(r.o)),r.d.inert=!0,ne(r.e,!0))}if(l.length>0){const r=rt(()=>{R(r);const o=Se(()=>{R(o),B(l)})},!1)}}const Ee=new Set,Q=new Set;function Ye(){return document.createTextNode("")}function dt(e,t){let n;return()=>{if(n===void 0){const l=Ve(e);n=t?l:qe(l)}return n}}function be(e,t,n,l){if(i!==null){n!==null&&me(n,!1);const r=i;if(r!==null)return e?r:r[0]}return t?Re(l(),!0):document.importNode(l(),!0)}function pt(e,t,n){return be(!1,t,e,n)}function ht(e,t,n){return be(!0,t,e,n)}function ge(e,t,n){const l=w,r=t?I(e)?e:Array.from(e.childNodes):e;n!==null&&i===null&&Ue(r,null,n),l.d=r}function mt(e,t){ge(t,!1,e)}function vt(e,t){ge(t,!0,e)}function yt(e,t,n,l,r){const o={capture:l,passive:r},f=n;t.addEventListener(e,f,o),(t===document.body||t===window||t===document)&&C(()=>()=>{t.removeEventListener(e,f,o)})}function xt(e,t){C(()=>{const n=t();Pe(e,n)})}function Pe(e,t){const n=e.__nodeValue,l=je(t);i!==null&&e.nodeValue===l?e.__nodeValue=l:n!==l&&(e.nodeValue=l,e.__nodeValue=l)}function Et(e,t){he(()=>{t(e),C(()=>()=>{he(()=>{t(null)})})})}function bt(e){for(let t=0;t<e.length;t++)Ee.add(e[t]);for(const t of Q)t(e)}function $e(e,t){const n=t.type,l=t.composedPath?.()||[];let r=l[0]||t.target;t.target!==r&&ae(t,"target",{configurable:!0,value:r});let o=0;const f=t.__root;if(f){const u=l.indexOf(f);u<l.indexOf(e)&&(o=u)}for(r=l[o]||t.target,ae(t,"currentTarget",{configurable:!0,get(){return r||document}});r!==null;){const u=r.parentNode||r.host||null,_="__"+n,a=r[_];if(a!==void 0&&!r.disabled)if(I(a)){const[p,...c]=a;p.apply(r,[t,...c])}else a.call(r,t);if(t.cancelBubble||u===e)break;r=u}t.__root=e}function gt(e,t,n,l){const r=Le();me(e);const o=i;let f=null,u=null,_=!1,a=!1;const p=C(()=>{const m=!!t();if(r.v!==m||!_){if(r.v=m,_){const x=r.c,q=r.a;m?(q===null||q.size===0?D(s):z(q,"out"),x===null||x.size===0?D(c):z(x,"in")):(x===null||x.size===0?D(c):z(x,"out"),q===null||q.size===0?D(s):z(q,"in"))}else if(i!==null){const x=i?.[0]?.data;!x&&i[0]!==null||x==="ssr:if:true"&&!m||x==="ssr:if:false"&&m?(k(i),O(null)):i.shift()}_=!0}},r,!1),c=C(()=>{f!==null&&(k(f),f=null),r.v&&(n(e),a||(O(o),a=!0)),f=r.d,r.d=null},r,!0);r.ce=c;const s=C(()=>{u!==null&&(k(u),u=null),r.v||(l!==null&&l(e),a||(O(o),a=!0)),u=r.d,r.d=null},r,!0);r.ae=s,ot(p,()=>{f!==null&&k(f),u!==null&&k(u),R(c),R(s)}),r.e=p}function je(e){return typeof e=="string"?e:e==null?"":e+""}function kt(e,t,n){C(()=>{const l=n();ze(e,t,l)})}function ze(e,t,n){n=n==null?null:n+"",(i===null||e.getAttribute(t)!==n&&t!=="src"&&t!=="srcset")&&(n===null?e.removeAttribute(t):e.setAttribute(t,n))}function Be(e,t){Oe();const n=new Set,l=t.target,r=Fe(t.intro||!1),o=l.firstChild,f=le(o),u=i;let _;try{let c=null;f===null&&(c=Ye(),l.appendChild(c)),O(f);const s=C(()=>{t.context&&(st({}),v.c=t.context),_=e(c,t.props||{},t.events||{}),t.context&&it()},r,!0);r.e=s}catch(c){if(t.recover!==!1&&f!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",c),k(f),o.remove(),f.at(-1)?.nextSibling?.remove(),Be(e,t);throw c}finally{O(u)}const a=$e.bind(null,l),p=c=>{for(let s=0;s<c.length;s++){const m=c[s];n.has(m)||(n.add(m),l.addEventListener(m,a,Me.includes(m)?{passive:!0}:void 0))}};return p(Ae(Ee)),Q.add(p),[_,()=>{for(const s of n)l.removeEventListener(s,a);Q.delete(p);const c=r.d;c!==null&&k(c),f!==null&&k(f),R(r.e)}]}const ke=1,fe=2,ue=4,G=8,ce=16,Te=32,V=64,U=128,b=256,E=512,L=1024,X=2048,Z=4096,J=ue|G|ce|Te,He=Symbol();let H=!1,T=[],ee=[],K=0,g=null,h=null,d=null,y=0,N=!1,Ke=!1,F=!1,w=null,v=null;function We(e){return{a:null,c:null,e:null,i:!1,m:!1,p:v,s:e,r:!1,u:null}}function W(e){const t=e||v;return t!==null&&t.r}function Ge(e,t){return e===t}function Ze(e,t){return{c:null,e:null,f:e,v:t,x:null}}function Je(e,t,n){return{b:n,c:null,d:null,e:null,f:e,i:null,r:null,v:t,x:null,y:null}}function Qe(e,t){const n=e.r;n===null?e.r=[t]:n.push(t)}function se(e){const t=e.f;if(t&E||e.v===He)return!0;if(t&L){const n=e.d;if(n!==null){const l=n.length;let r;for(r=0;r<l;r++){const o=n[r];if(o.f&L&&!se(o)){S(o,b);continue}if(o.f&E)if(o.f&fe){if(Ce(o,!0),e.f&E)return!0}else return!0}}}return!1}function Ne(e){const t=e.i,n=d,l=y,r=g,o=w,f=v,u=F,_=(e.f&ce)!==0,a=N;d=null,y=0,g=e,w=e.b,v=e.x,F=h===null&&(e.f&U)!==0,N=!1,_&&v?.u!=null&&v.u.e();try{let p;_?p=t(e.b):p=t();let c=e.d;if(d!==null){let s;if(M(e,y,!1),c!==null&&y>0)for(c.length=y+d.length,s=0;s<d.length;s++)c[y+s]=d[s];else e.d=c=d;if(!F)for(s=y;s<c.length;s++){const m=c[s];m.c===null?m.c=[e]:m.c.push(e)}}else c!==null&&y<c.length&&(M(e,y,!1),c.length=y);return p}finally{d=n,y=l,g=r,w=o,v=f,F=u,N=a}}function M(e,t,n){const l=e.d;if(l!==null){let r;for(r=t;r<l.length;r++){const o=l[r],f=o.c;let u=0;if(f!==null)if(u=f.length-1,u===0)o.c=null;else{const _=f.indexOf(e);f[_]=f[u],f.pop()}n&&u===0&&o.f&U&&M(o,0,!0)}}}function we(e){const t=e.r;if(e.r=null,t!==null){let n;for(n=0;n<t.length;n++){const l=t[n];l.f&J?R(l):(M(l,0,!0),l.d=null)}}}function Xe(e,t){if(e!==null)throw t}function D(e){if(e.f&Z)return;const t=e.v,n=h;h=e;try{we(e),t!==null&&t();const r=Ne(e);typeof r=="function"&&(e.v=r)}catch(r){const o=e.b;if(o!==null)Xe(o,r);else throw r}finally{h=n}const l=e.x;W(l)&&e.f&G&&T.length>0&&tt(l)}function te(e){const t=e.length;if(t>0){if(K>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");K++;let n;for(n=0;n<t;n++){const l=e[n],r=l.f;r&(Z|X)||(se(l)?(S(l,b),D(l)):r&L&&S(l,b))}e.length=0}}function et(){if(H=!1,K>101)return;const e=T,t=ee;T=[],ee=[],te(e),te(t),H||(K=0)}function Y(e,t){const n=e.f;t||n&Te?(D(e),S(e,b)):(H||(H=!0,queueMicrotask(et)),n&ue?ee.push(e):T.push(e))}function tt(e){const t=[];for(let n=0;n<T.length;n++){const l=T[n];l.f&G&&l.x===e&&(t.push(l),T.splice(n,1),n--)}te(t)}function Ce(e,t){const n=Ne(e),l=F||h===null&&e.f&U?E:b;S(e,l);const r=e.e;r(n,e.v)||(e.v=n,ie(e,E,t))}function Tt(e){const t=e.f;if(t&Z)return e.v;if(g!==null&&!(g.f&V)&&!N){const n=(g.f&U)!==0,l=g.d;d===null&&l!==null&&l[y]===e&&!(n&&h!==null)?y++:d===null?d=[e]:e!==d[d.length-1]&&d.push(e)}return t&fe&&se(e)&&Ce(e,!1),e.v}function Nt(e,t){return nt(e,t),t}function ne(e,t){const n=e.f;(n&X)!==0!==t&&(e.f^=X,!t&&n&J&&!(n&b)&&Y(e,!1));const r=e.r;if(r!==null){let o;for(o=0;o<r.length;o++)ne(r[o],t)}}function ie(e,t,n){const l=W(e.x),r=e.c;if(r!==null){const o=r.length;let f;for(f=0;f<o;f++){const u=r[f],_=u.f,a=(_&U)!==0,p=(_&E)!==0;p&&!a||(!n||!l)&&u===h||(S(u,t),(_&b||p&&a)&&(u.f&J?Y(u,!1):ie(u,L,n)))}}}function nt(e,t){if(!N&&!Ke&&g!==null&&W(e.x)&&g.f&fe)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");if(e.f&ke&&!e.e(t,e.v)){const n=e.x;if(e.v=t,W(n)&&h!==null&&h.c===null&&h.f&b&&d!==null&&d.includes(e)&&(S(h,E),Y(h,!1)),ie(e,E,!0),h===null&&T.length===0){const l=n?.u;if(l!=null){B(l.b);const r=Se(()=>{R(r),B(l.a)})}}}}function R(e){const t=e.v,n=e.y,l=e.f;we(e),M(e,0,!0),e.i=e.r=e.y=e.x=e.b=e.v=e.d=e.c=null,S(e,Z),n!==null&&(I(n)?B(n):n()),t!==null&&l&J&&t()}function wt(e,t){const n=Ze(ke|b,e);return n.x=v,n.e=lt(t),n}function lt(e){if(e!==void 0)return e;const t=v;return t&&!t.i?ct:Ge}function he(e){const t=N;try{return N=!0,e()}finally{N=t}}function _e(e,t,n,l,r){const o=Je(e|E,null,l);return o.i=t,o.x=v,r&&Y(o,n),h!==null&&!(e&V)&&Qe(h,o),o}function Se(e){return _e(ue|V,e,!1,w,!0)}function rt(e,t){return _e(G|V,e,t,w,!0)}function C(e,t=w,n=!1,l=!0){let r=ce;return n&&(r|=V),_e(r,e,l,t,!0)}function ot(e,t){let n=e.y;n===null?e.y=t:I(n)?n.push(t):e.y=[n,t]}const ft=~(E|L|b);function S(e,t){e.f=e.f&ft|t}function ut(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ct(e,t){return!ut(e,t)}function st(e,t=!1,n=!1){const l=We(e);l.r=t,l.i=n,v=l}function it(e){const t=v;if(t!==null){e!==void 0&&(t.a=e);const n=t.e;if(n!==null){t.e=null;for(let l=0;l<n.length;l++)Y(n[l],!1)}v=t.p,t.m=!0}}export{st as a,Et as b,mt as c,bt as d,yt as e,kt as f,Tt as g,ze as h,gt as i,Pe as j,vt as k,qe as l,at as m,ht as n,pt as o,it as p,wt as q,C as r,Nt as s,xt as t,_t as u,dt as v,Be as w};
