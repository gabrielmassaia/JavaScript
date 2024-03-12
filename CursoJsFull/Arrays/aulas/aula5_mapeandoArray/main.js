// Map

//Dobrar numeros

const numeros = [ 5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor, indice, array) {
    
});

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

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idade = pessoas.map(obj => obj.idade);
console.log(idade);

const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice;
    return obj;
});

console.log(comIds)