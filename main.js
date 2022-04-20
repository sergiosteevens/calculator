function myFunction() {
   
    let x = document.getElementById("numb").value;

  let text;
    if (isNaN(x) || x ==0) {
       text = "Input not valid";
     } else {
      text ="Binario a decimal "+ parseInt(x, 2);
     }
     document.getElementById("demo").innerHTML = text;
   }
  
   ////global function to csss bootstrap
  
   (function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()