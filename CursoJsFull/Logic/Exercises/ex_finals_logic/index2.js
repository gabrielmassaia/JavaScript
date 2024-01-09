//Minha resolução
function ePaisagem (x = 1080, y = 1920) {
    if (x > y) {
    return 'É paisagem';
    } else {
        return 'É retato';
    }
}
console.log(ePaisagem())

//Resolução da aula 

//1)
function ePaisagem2 (largura, altura) {
    return largura > altura;
}

console.log(ePaisagem2(1080,1920))

//2)
const ePaisagem3 = (largura, altura) => largura > altura;
console.log(ePaisagem3(1920,1080))

