let alunos = ["Luiz", "Maria", "João"]
alunos[0] = "Gabriel"
alunos[3] = "Matheus"
alunos.push("Luana")
alunos.unshift("Luiza")
delete alunos[1]

alunos.pop()
let removido = alunos.pop()

console.log(alunos)
console.log(alunos.length)
console.log(alunos[50])
console.log(removido)

console.log(typeof alunos)
console.log(alunos instanceof Array)
