/* DAY & NIGHT EXPERIENCE: o botão do componente fica no cabeçalho (#dn-slot), onde ficava o botão de tema. */
(function(){
 "use strict";
 var slot=document.getElementById("dn-slot");
 if(!slot)return;
 function fallback(){ /* só entra se o componente não carregar */
  if(slot.firstElementChild)return;
  var r=document.documentElement,b=document.createElement("button");
  b.type="button";b.className="icon-btn";b.setAttribute("aria-label","Alternar tema claro ou escuro");
  b.innerHTML='<svg class="ic moon" aria-hidden="true"><use href="#i-moon"/></svg><svg class="ic sun" aria-hidden="true"><use href="#i-sun"/></svg>';
  b.addEventListener("click",function(){
   var n=r.getAttribute("data-theme")==="dark"?"light":"dark";
   r.setAttribute("data-theme",n);
   try{localStorage.setItem("dn-theme",n)}catch(e){}
  });
  slot.appendChild(b);
 }
 if(window.DayNight&&typeof window.DayNight.init==="function"){
  try{
   window.DayNight.init({target:"#dn-slot",mode:"cinematic",speed:"normal",rotation:true,clouds:true,size:44,button:{size:44},persistence:true,respectSystem:true});
  }catch(e){}
  setTimeout(fallback,1500);
 }else fallback();
})();
