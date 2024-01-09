const pessoa = {
    nome: "Gabriel",
    sobrenome: "Massaia",
    idade: 19,
    endereco: {
        rua: "Rua caimão",
        bairro: "Itapocu",
        numero: 0
    }
}

const { nome, sobrenome, idade, endereco } = pessoa;
console.log(nome, sobrenome, idade, endereco)