let num = [3,5,6,7,8,4,1,2,9,10];
num.push();
num.sort();
console.log(num);
console.log(`Our array in crescent mode is ${num.length} positions `);
console.log(`O terceiro valor do vetor é ${num[2]}`);
let pos = num.indexOf(8);
if (pos == -1) {
    console.log('O valor nao foi encontrado')
}   else {
    console.log(`O valor 8 está na posição ${pos}`)
}
