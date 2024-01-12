// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {

    const sobrenome = 'Massaia';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;

    }

    function falaNome() {
        console.log(criaNome('Gabriel'))
    }

    falaNome();
    console.log(idade, peso, altura)
})(19, 76, 187)