const frutas = ['Maçã', 'Banana', 'Pera', 'Uva']

for (let i in frutas) {
    console.log(frutas[i])
}

const nome = ['Gabriel', 'Carla', 'Pedro']

for (let valor of nome) {
    console.log(valor)
}

nome.forEach(function(valor, indice) {
    console.log(valor, indice, array)
})