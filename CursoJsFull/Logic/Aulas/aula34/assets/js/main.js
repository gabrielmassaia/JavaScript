const elementos = [
    {tag: 'p', texto: 'Frase um'},
    {tag: 'div', texto: 'Frase dois'},
    {tag: 'footer', texto: 'Frase quatro'},
    {tag: 'section', texto: 'Frase tres'}   
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++ ) {

    let { tag, texto} = elementos[i];
    let criarElemento = document.createElement(tag)

    criarElemento.innerText = texto; 
    div.appendChild(criarElemento) 
}

container.appendChild(div)
