let n1 = Number(prompt("Write a number here: "))
let titleNumber = document.getElementById("number-title")
let texto = document.getElementById("text")

titleNumber.innerHTML = n1

texto.innerHTML +=`<p>A raiz quadrada do seu número é: ${Math.sqrt(n1)} </p>`
texto.innerHTML +=`Esse número é inteiro?: ${Number.isInteger(n1)} </p>`
texto.innerHTML +=`<p>Esse numero é NaN?: ${isNaN(n1)} </p>`
texto.innerHTML +=`<p>Arredondado para baixo: ${Math.floor(n1)} </p>`
texto.innerHTML +=`<p>Arredondado para cima: ${Math.ceil(n1)} </p>`
texto.innerHTML +=`<p>Com duas casas decimais: ${n1.toFixed(2)} </p>`
  

  


