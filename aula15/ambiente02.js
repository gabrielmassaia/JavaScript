//Vetor na tela

let valores = [2,6,4,8]


for(let pos=0; pos < valores.length; pos++) {
    console.log(`the position ${pos} has the value ${valores[pos]}`);
}


for(let pos in valores) {
    console.log(`the position ${pos} has the value ${valores[pos]}`)
}

let num = []

for(let pos = 0; pos <= 100; pos++) {
    num[pos] = pos*pos
}



console.log(num)