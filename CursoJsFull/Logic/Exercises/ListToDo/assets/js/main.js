const inputTarefa = document.querySelector('.input_tarefa');
const btnTarefa = document.querySelector('.btn_tarefa');
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }  
})

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar está tarefa')
    li.appendChild(botaoApagar);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefas();
}

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
    console.log(tarefasJSON)
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    console.log(inputTarefa.value)
});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefas();
    }
})

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
   
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }

}

adicionaTarefasSalvas()