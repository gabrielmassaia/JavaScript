function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('Massaia')

console.dir(funcao, funcao2)
console.log(funcao(), funcao2())