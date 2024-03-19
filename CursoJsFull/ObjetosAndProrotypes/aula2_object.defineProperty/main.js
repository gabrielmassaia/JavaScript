// defineProperty = defineProperties

function Produto(nome, preco, estoque) {

    /* pra um só 
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, //true = pode alterar / false = não pode alterar
        configurable: false // configurável ou apagar a variável
    }); */

    Object.defineProperties(this, {
        nome: {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, //true = pode alterar / false = não pode alterar
        configurable: false // configurável ou apagar a variável
        },

        preco: {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, //true = pode alterar / false = não pode alterar
        configurable: false // configurável ou apagar a variável
        },

    });

};

const p1 = new Produto('Tenis', 399, 2);

console.log(Object.keys(p1));