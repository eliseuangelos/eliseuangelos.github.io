/* Imprime somente o currículo (as regras estão em assets/css/print.css). */
(function(){
 "use strict";
 var b=document.getElementById("pbtn"),r=document.documentElement;
 if(!b)return;
 window.addEventListener("afterprint",function(){r.classList.remove("print-cv")});
 b.addEventListener("click",function(){r.classList.add("print-cv");setTimeout(function(){window.print()},50)});
})();
