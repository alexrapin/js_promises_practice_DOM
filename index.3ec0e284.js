var n=function(n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add("success"),t.innerText="".concat(n," promise was resolved"),document.body.appendChild(t)},t=function(n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add("error"),t.innerText="".concat(n.message," promise was rejected"),document.body.appendChild(t)},e=new Promise(function(n,t){document.addEventListener("click",function(){n("First")}),setTimeout(function(){t(Error("First"))},3e3)}),c=new Promise(function(n,t){document.addEventListener("click",function(){n("Second")}),document.addEventListener("contextmenu",function(){n("Second")})}),i=new Promise(function(n,t){var e=!1,c=!1;document.addEventListener("click",function(){e=!0,i()}),document.addEventListener("contextmenu",function(){c=!0,i()});var i=function(){e&&c&&n("Third")}});e.then(function(t){n(t)}).catch(function(n){t(n)}),c.then(function(t){n(t)}),i.then(function(t){n(t)});
//# sourceMappingURL=index.3ec0e284.js.map
