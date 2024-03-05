const numeros = [ 5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

function callBackFilter(valor, indice, array) {
    return (valor > 10);
}

const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados)
