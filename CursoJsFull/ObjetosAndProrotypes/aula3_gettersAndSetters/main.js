// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
               throw new TypeError("this is a bad value")
            }

            estoquePrivado = valor;
        }
    })
};

const p1 = new Produto('Tenis', 399, 2);
p1.estoque = "kakakakaka"
console.log(p1.estoque);