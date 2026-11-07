/* Revelação suave das seções e indicador de progresso de leitura. */
(function(){
 "use strict";
 var d=document,r=d.documentElement,els=[].slice.call(d.querySelectorAll(".rv"));
 if("IntersectionObserver" in window){
  r.classList.add("rv-on");
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(el){io.observe(el)});
 }
 var p=d.getElementById("prog"),t=false;
 if(!p)return;
 function upd(){t=false;var m=r.scrollHeight-window.innerHeight;p.style.transform="scaleX("+(m>0?Math.min(window.scrollY/m,1):0)+")"}
 window.addEventListener("scroll",function(){if(!t){t=true;requestAnimationFrame(upd)}},{passive:true});
 upd();
})();
