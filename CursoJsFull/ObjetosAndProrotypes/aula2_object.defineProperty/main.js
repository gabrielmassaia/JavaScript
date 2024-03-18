// defineProperty = defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, //pode alterar
        configurable: false // configurável 
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, //pode alterar
        configurable: false // configurável 
    });
};

const p1 = new Produto('Tenis', 399, 2);
p1.estoque = 500000;
console.log(p1);