function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        // setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome= valor.join(' ')
            console.log(valor)
        },

        fala(assunto = 'falando sobre nada...') {
            return `${this.nome + ' ' + this.sobrenome} está ${assunto}.`;
        },

        altura,
        peso,

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };;
}

const p1 = criaPessoa('Gabriel', 'Massaia', 1.85,  80);
// console.log(p1.fala("falando sobre factory functions"));
//console.log(p1.imc());


console.log(p1.nome)
console.log(p1.sobrenome);;
console.log(p1.fala());;
p1.nomeCompleto = 'Gabriel Massaia de Oliveira'




//const p2 = criaPessoa("Luana", 'Girola', 1.65, 60);
//onsole.log(p2.fala("falando sobre factory functions"));
//console.log(p2.imc());
