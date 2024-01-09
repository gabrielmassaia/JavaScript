function soma(a, b) {
    return a + b;
}

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

function duplica(n) {
    return n * 2
};
function triplica(n) {
    return n * 3
};
function quadriplica(n) {
    return n * 4
};

function criaMultiplicador(multiplicador) {
    
};

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))