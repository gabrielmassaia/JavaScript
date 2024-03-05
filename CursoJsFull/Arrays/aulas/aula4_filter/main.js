// Filter => Sempre retorna um array, com a mesma quantidade de elementos ou menos.
// Retorne apenas os números maiores que 10

// Ex1
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

//Ex2

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

//Mandar uma função de callback
const pessoasComNomeGrande = pessoas.filter(function(obj) {
    return obj.nome.length >= 5;
});

console.log(pessoasComNomeGrande)

//Arrow
const pessoasComNomePequeno = pessoas.filter(obj => obj.nome.length <= 4);
console.log(pessoasComNomePequeno)


//Pessoas com mais de 25 anos
const pessoasComMaisDeVinteCinco = pessoas.filter(obj => obj.idade>= 24);
console.log(pessoasComMaisDeVinteCinco)

//Termina com A
const pessoasTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a')
});
console.log(pessoasTerminaComA)



