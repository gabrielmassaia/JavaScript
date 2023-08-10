/* 4. Faça um script que pede dois inteiros e armazene eles em 
duas variáveis. Em seguida, troque o valor das variáveis, invertendo 
e exibindo o antes e o depois em uma janela de alert. */

let int1 = 5 
let int2 = 8

let armazena = 0
armazena = int2 

int2 = int1 
int1 = armazena

console.log(int1);
console.log(int2)

// Resolução do site

function inverte() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    var aux = num1;

    num1=num2;
    num2=aux;

    alert("Antes:\n"+
       "numero1="+document.getElementById("numero1").value+"\n"+
       "numero2="+document.getElementById("numero2").value+"\n\n"+
       "Invertido:\n"+
       "numero1="+num1+"\n"+
       "numero2="+num2+"\n\n");

}




