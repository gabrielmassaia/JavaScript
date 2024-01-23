function Pessoa(nome, sobrenome) {
    const ID = 11115077910;

    const metodoInterno = function() {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Gabriel', 'Massaia de Oliveira');
const p2 = new Pessoa('Luana', 'Girola');