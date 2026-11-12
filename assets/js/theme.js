/* Anti-flash do tema (síncrono, no <head>). Usa a mesma chave do componente DAY & NIGHT: dn-theme. */
(function(){
 "use strict";
 var r=document.documentElement,KEY="dn-theme",COLORS={light:"#F4F7FB",dark:"#111C28"};
 var mq=window.matchMedia?matchMedia("(prefers-color-scheme: dark)"):null;
 r.classList.add("js","loading");
 function stored(){try{var v=localStorage.getItem(KEY);return v==="dark"||v==="light"?v:null}catch(e){return null}}
 function sync(){
  var t=r.getAttribute("data-theme")==="dark"?"dark":"light",m=document.querySelector('meta[name="theme-color"]');
  if(m)m.setAttribute("content",COLORS[t]);
 }
 r.setAttribute("data-theme",stored()||(mq&&mq.matches?"dark":"light"));
 sync();
 if("MutationObserver" in window)new MutationObserver(function(){
  sync();r.classList.add("no-tr");setTimeout(function(){r.classList.remove("no-tr")},120);
 }).observe(r,{attributes:true,attributeFilter:["data-theme"]});
})();
