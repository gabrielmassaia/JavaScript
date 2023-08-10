//Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

function Verificar() {
    var letra = document.getElementById('leter').value
    var letra2 = letra.toUpperCase()
    var resposta = document.getElementById('res')
        if (letra2 != 'A' && 'E' && 'I' && 'O' && 'U') {
        resposta.innerHTML = `A letra ${letra2} é uma consoante`
    } else {
        resposta.innerHTML = `A letra ${letra2} é uma vogal`
    }
}
    
