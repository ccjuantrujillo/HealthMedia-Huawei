import"./disclose-version.76be68c5.js";import{d as N,i as H,c as L,p as T,a as G,b as J,e as K,g as s,f as Q,t as W,r as X,h as Y,j,k as $,s as t,o as V,l as e,m as a,n as aa,q as g,u as ea,v as h}from"./runtime.103ba0f1.js";/* empty css                             */const sa={}.PUBLIC_API_URL||"http://101.44.2.188:5000/registrar-archivo";var la=h("<p> </p>"),ta=h('<div class="view-preview svelte-1m76naz"><div class="image svelte-1m76naz"><img alt="preview" class="svelte-1m76naz"> <!></div> <input class="btn svelte-1m76naz" type="submit" value="Evaluar"></div>'),ia=h('<div class="wrapp svelte-1m76naz"><div class="upload svelte-1m76naz"><label for="file">Sube tu imagen</label> <input class="file-upload svelte-1m76naz" type="file" name="file"></div> <!></div>'),va=h('<div class="result svelte-1m76naz"><img alt="preview" class="svelte-1m76naz"> <div class="response svelte-1m76naz"><ul class="svelte-1m76naz"><li class="svelte-1m76naz"><div class="icon svelte-1m76naz"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 24L4 16H18C19.1 16 24 15.1 24 14V2C24 0.9 19.1 0 18 0H2ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z" fill="white"></path></svg></div> <div class="item"><h4 class="svelte-1m76naz">Resultado:</h4> <p> </p></div></li> <li class="svelte-1m76naz"><div class="icon svelte-1m76naz"><p>MEL</p></div> <div class="item"><h4 class="svelte-1m76naz">Melanoma:</h4> <p> </p></div></li> <li class="svelte-1m76naz"></li></ul></div></div> <button class="btn svelte-1m76naz">Analizar otra imagen</button>',!0),ra=h('<div class="form svelte-1m76naz"><div class="wrapper svelte-1m76naz"><!> <!></div></div>');function da(I,C){G(C,!1);let n=g(),u=g(""),x=g(0),_=g(""),z=g(!1);function E(){t(u,""),t(x,0),t(_,""),t(z,!1)}async function F(){if(!s(n).files)return;const l=new FormData,o=s(n).files[0];l.append("archivo",o);const c={method:"POST",body:l};try{const m=await(await fetch(`${sa}`,c)).json(),p=m.predicted_label,i=m.scores;if(console.log(p),i){let v,r;i.forEach(function(f){v=f[0],r=f[1],v=="melanoma"&&t(x,r),console.log(v+"-"+r)})}p=="melanoma"?t(u,"Se ha detectado un melanoma"):t(u,"No se ha detectado un melanoma")}catch(d){console.log(d),t(u,"Error al subir la imagen")}t(z,!0)}function P(){if(!s(n).files)return;const l=s(n).files[0];l&&t(_,URL.createObjectURL(l))}var R=V(I,!0,ra),A=e(R),Z=e(A),D=a(a(Z));H(Z,()=>s(z)==!1,l=>{var o=V(l,!0,ia),c=e(o),d=e(c),m=a(a(d));J(m,i=>t(n,i));var p=a(a(c));K("change",m,P,!1),H(p,()=>s(_),i=>{var v=V(i,!0,ta),r=e(v),f=e(r),M=a(a(f)),U=a(a(r));Q(f,"src",()=>s(_)),H(M,()=>s(n).files,b=>{var w=V(b,!0,la),k=e(w);W(k,()=>s(n).files[0].name),L(b,w)},null),U.__click=F,L(i,v)},null),L(l,o)},null),H(D,()=>s(z)==!0,l=>{var o=aa(l,!0,va),c=ea(o),d=e(c),m=a(a(d)),p=e(m),i=e(p),v=e(i),r=a(a(v)),f=e(r),M=a(a(f)),U=e(M),b=a(a(i)),w=e(b),k=a(a(w)),S=e(k),B=a(a(S)),O=e(B),q=a(a(c)),y;X(()=>{y!==(y=s(_))&&Y(d,"src",y),j(U,s(u)),j(O,s(x))}),q.__click=E,$(l,o)},null),L(I,R),T()}N(["click"]);export{da as default};
