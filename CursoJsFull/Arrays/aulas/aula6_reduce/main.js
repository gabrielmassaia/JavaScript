
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador;
});
//console.log(total)

const pessoas = [
    {nome: 'Gabriel', idade: 19 },
    {nome: 'Luana', idade: 21 },
    {nome: 'Tiago', idade: 39},
    {nome: 'Carina', idade: 36},
    {nome: 'Carla', idade: 34},
    {nome: 'Ariel', idade: 15},
    {nome: 'Gean', idade: 29},
    {nome: 'Lucas', idade: 30},
    {nome: 'gus', idade: 30},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    console.log(acumulador, valor)
});