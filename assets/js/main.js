/* Tela de carregamento (mínimo de 4 s) e rodapé. */
(function(){
 "use strict";
 var d=document,r=d.documentElement,y=d.getElementById("yr");
 if(y)y.textContent=new Date().getFullYear();
 var L=d.getElementById("loader"),bar=d.getElementById("bar"),pct=d.getElementById("pct");
 var MIN=4000,MAX=9000,t0=Date.now(),loaded=d.readyState==="complete",done=false;
 var rm=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
 window.addEventListener("load",function(){loaded=true});
 function finish(){
  if(done)return;done=true;clearInterval(iv);
  if(bar)bar.style.width="100%";if(pct)pct.textContent="100%";
  r.classList.remove("loading");
  if(L){L.classList.add("out");setTimeout(function(){L.remove()},rm?50:600)}
 }
 var iv=setInterval(function(){
  var e=Date.now()-t0,p=Math.min(e/MIN,1)*100;
  if(!loaded&&p>99)p=99;
  p=Math.round(p);
  if(bar)bar.style.width=p+"%";if(pct)pct.textContent=p+"%";
  if(e>=MIN&&(loaded||e>=MAX))finish();
 },50);
})();
