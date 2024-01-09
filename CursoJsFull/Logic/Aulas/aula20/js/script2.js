function container() {
    const form = document.querySelector(".form");
    const result = document.querySelector(".result");

   /*  form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1)
        console.log("Foi enviado!")
    }; */

    function recebeEventoForm (evento) {
         evento.preventDefault(); 

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
        
        const infoPessoal = [nome.value, sobrenome.value, peso.value, altura.value]
        
        const pessoas = infoPessoal;

        console.log(pessoas)

        let resImprimir = document.querySelector(".imprimir");
        resImprimir.innerHTML += `${pessoas} <br>`

    }
    form.addEventListener('submit', recebeEventoForm);
}
container()