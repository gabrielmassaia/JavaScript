/* Faça um script que leia três números e mostre-os em ordem decrescente. 

let n1 = 3
let n2 = 2
let n3 = 1

if (n1 < n2 && n1 < n3 && n2 > n3) {
    console.log(`${n2}, ${n3}, ${n1}`)
} else if (n1 < n2 && n1 < n3 && n3 > n2) {
    console.log(`${n3}, ${n2}, ${n1}`) 
} else if (n2 < n1 && n2 < n3 && n1 > n3) {
    console.log(`${n1}, ${n3}, ${n2}`)
} else if (n2 < n1 && n2 < n3 && n3 > n1) {
    console.log(`${n3}, ${n1}, ${n2}`)
} else if (n3 < n1 && n3 < n2 && n1 > n2) {
    console.log(`${n1}, ${n2}, ${n3}`)
} else if (n3 < n1 && n3 < n2 && n2 > n1)
    console.log(`${n2}, ${n1}, ${n3}`)

 Resolução do site

<script type="text/javascript">

function exibir(){
 var num1 = parseFloat(document.getElementById("numero1").value);
 var num2 = parseFloat(document.getElementById("numero2").value);
 var num3= parseFloat(document.getElementById("numero3").value);

 var aux = num1;

 num1 = 8
 num2 = 11
 num3 = 6
 aux = 8

 if(num2 > num1){  num2 = 11 num1 = 8 
  aux=num2;        aux = 11
  num2=num1;        num2 = num1 , num2 = 8
  num1=aux;         num1 = 11
 }

 if(num3 > num1){
  aux=num3;
  num3=num1;
  num1=aux;
 }

 if(num3 > num2){
  aux=num3;
  num3=num2;
  num2=aux;
 }
 alert(num1+"-"+num2+"-"+num3);
}
</script>
*/

let n1 = 2
let n2 = 3
let n3 = 1
let aux = 0

if (n2 > n1) {
    aux = n2
    n2 = n1
    n1 = aux
}

if (n3 > n1) {
    aux = n3
    n3 = n1
    n1 = aux
}

if (n3 > n2) {
    aux = n3
    n3 = n2
    n2 = aux
}

console.log(`${n1}, ${n2}, ${n3}`);