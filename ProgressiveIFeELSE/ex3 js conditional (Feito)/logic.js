//3. Faça um script que leia três números inteiros e mostre o maior deles.

let n1 = 8
let n2 = 12
let n3 = 10

if (n1 > n2 && n1 > n3) {
    console.log(`${n1}`)
} else if ( n2 > n1 && n2 > n3) {
    console.log(`${n2}`)
} else if ( n3 > n2 && n3 > n1)  {
    console.log(`${n3}`)
}

// Resolução da pagina

var maior = num1

if (num2 > maior) {
    maior = num2
}
if (num3 > maior) {
    maior = num3
}
console.log(`${maior}`)
