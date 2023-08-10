 const array = [1,2,3]
array.push(4)
array[0] = "Luiz"
console.log(array) 


/* #Formato manual */

 const pessoa01 = {
    nome: "luiz",
    sobrenome:"Miranda",
    idade: 25
};
console.log(pessoa01.nome) 

/*  Função factory (criadora de objetos) */

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenoe, idade}
}

let pessoa1 = criaPessoa("gabriel", "oliveira", 21);
let pessoa2 = criaPessoa("gabriel", "massaia", 21);
let pessoa3 = criaPessoa("henrique", "letzke", 21);
let pessoa4 = criaPessoa("tiago", "roberto", 21);
let pessoa5 = criaPessoa("luan", "garces", 21);

console.log(pessoa3.sobrenome, pessoa5.nome, pessoa1.idade)
