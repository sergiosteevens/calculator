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
  
   function convertToBinary() {
     
    let num
    let bin =  document.getElementById("dec").value;;
    let rem, i = 1, step = 1;
    if (isNaN(bin) || bin ==0) {
      text = "Input not valid";
    } else {
      num=parseInt(bin);
      text= "Decimal a binario "+num.toString(2);
    }



    document.getElementById("Con").innerHTML = text;
}



  