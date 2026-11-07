/* Menu mobile acessível e destaque da seção ativa. */
(function(){
 "use strict";
 var d=document,tg=d.getElementById("tg"),nav=d.getElementById("nav");
 if(!tg||!nav)return;
 function set(o){tg.setAttribute("aria-expanded",String(o));tg.setAttribute("aria-label",o?"Fechar menu":"Abrir menu");nav.classList.toggle("open",o)}
 var links=[].slice.call(nav.querySelectorAll("a"));
 tg.addEventListener("click",function(){set(tg.getAttribute("aria-expanded")!=="true")});
 links.forEach(function(a){a.addEventListener("click",function(){set(false)})});
 d.addEventListener("keydown",function(e){if(e.key==="Escape"&&nav.classList.contains("open")){set(false);tg.focus()}});
 d.addEventListener("click",function(e){if(nav.classList.contains("open")&&!nav.contains(e.target)&&!tg.contains(e.target))set(false)});
 if(!("IntersectionObserver" in window))return;
 var io=new IntersectionObserver(function(es){
  es.forEach(function(en){
   if(!en.isIntersecting)return;
   links.forEach(function(a){if(a.getAttribute("href")==="#"+en.target.id)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")});
  });
 },{rootMargin:"-45% 0px -50% 0px"});
 [].forEach.call(d.querySelectorAll("main section"),function(s){io.observe(s)});
})();
