const pessoa1 = new Object();
pessoa1.nome = "Gabriel";
pessoa1.sobrenome = "Massaia";
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando useu nome.`);
};
pessoa1.getDataNascimento = function() {
 const dataAtual = new Date();
 return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
