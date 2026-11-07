/* Tema claro/escuro. Carregado no <head> (síncrono) para evitar o flash do tema incorreto. */
(function(){
 "use strict";
 var r=document.documentElement,KEY="ed-theme",COLORS={light:"#F4F7FB",dark:"#111C28"};
 var mq=window.matchMedia?matchMedia("(prefers-color-scheme: dark)"):null;
 r.classList.add("js","loading");
 function read(){try{return localStorage.getItem(KEY)}catch(e){return null}}
 function save(v){try{localStorage.setItem(KEY,v)}catch(e){}}
 function current(){var s=read();return s==="dark"||s==="light"?s:(mq&&mq.matches?"dark":"light")}
 function apply(t){
  r.setAttribute("data-theme",t);
  var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",COLORS[t]);
  var b=document.getElementById("theme-toggle");if(b)b.setAttribute("aria-pressed",String(t==="dark"));
 }
 apply(current());
 document.addEventListener("DOMContentLoaded",function(){
  apply(current());
  var b=document.getElementById("theme-toggle");if(!b)return;
  b.addEventListener("click",function(){
   var next=r.getAttribute("data-theme")==="dark"?"light":"dark";
   r.classList.add("no-tr");apply(next);save(next);
   void r.offsetWidth;setTimeout(function(){r.classList.remove("no-tr")},60);
  });
  if(mq&&mq.addEventListener)mq.addEventListener("change",function(){if(!read())apply(current())});
 });
})();
