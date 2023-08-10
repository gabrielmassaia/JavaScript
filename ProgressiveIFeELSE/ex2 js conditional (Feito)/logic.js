// Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno 
//e dar o seguinte resultado:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

function Verificar() {
    var notaum = Number(document.getElementById('nota1').value)
    var notadois = Number(document.getElementById('nota2').value)
    var resposta = document.getElementById('res')
    var res = (notaum + notadois) / 2
    resposta.innerHTML = `Sua média é ${res}`
        if (res >= 7 && res < 10) {
            resposta.innerHTML += ', parabéns! Você foi aprovado.'
        } else if (res < 7) {
            resposta.innerHTML += ', [ATENÇÃO]! Você foi reprovado.'
        } else if (res = 10) {
            resposta.innerHTML += ', parabéns! Você foi aprovado com exito'
        }
}