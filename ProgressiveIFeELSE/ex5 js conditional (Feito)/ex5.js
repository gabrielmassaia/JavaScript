5. /* Faça um script que leia três números inteiros, em seguida  
mostre o maior e o menor deles. */

let int1 = 5
let int2 = 8
let int3 = 10

if (int1 > int2 && int1 > int3) {
    console.log(`${int1}`)
} else if (int2 > int1 && int2 > int3) {
    console.log(`${int2}`)
} else if (int3 > int1 && int3 > int2) {
    console.log(`${int3}`)
}

if (int1 < int2 && int1 < int3) {
    console.log(`${int1}`)
} else if (int2 < int1 && int2 < int3) {
    console.log(`${int2}`)
} else if (int3 < int1 && int3 < int2) {
    console.log(`${int3}`)
}

/* Resolução do site

<script type="text/javascript">
     function maior(){
       var num1 = parseFloat(document.getElementById("numero1").value);
       var num2 = parseFloat(document.getElementById("numero2").value);
       var num3 = parseFloat(document.getElementById("numero3").value);

       var maior = num1;

       if(num2 > maior)
        maior = num2;
       if(num3 > maior)
        maior = num3;

       alert("Maior: "+maior);
     }


  function menor(){
       var num1 = parseFloat(document.getElementById("numero1").value);
       var num2 = parseFloat(document.getElementById("numero2").value);
       var num3 = parseFloat(document.getElementById("numero3").value);

       var menor = num1;

       if(num2 < menor)
        menor = num2;
       if(num3 < menor)
        menor = num3;

       alert("Menor: "+menor);
      }
    </script> */