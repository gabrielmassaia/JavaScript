function calculator() {
    const peso = document.querySelector(".txtpeso");
    const altura = document.querySelector(".txtaltura");
    const result = document.querySelector(".result")

    const imc = peso / (altura **2)

    function recebeEventoForm (evento) {
        evento.preventDefault(); 
    }

    if (imc < 18.5) {
        result.innerHTML = `Seu IMC é de ${imc} o qual se enquadra abaixo do peso.`
    }
    else if (imc >= 18.5 & imc <=24,9 ) {
        result.innerHTML = `Seu IMC é de ${imc} o qual se enquadra no peso normal`
    }
    else if (imc >= 25 & imc <=29,9 ) {
        result.innerHTML = `Seu IMC é de ${imc} o qual se enquadra em sobrepeso`
    }
    else if (imc >= 30 & imc <=39,9 ) {
        result.innerHTML = `Seu IMC é de ${imc} o qual se enquadra em obesidade I`
    }
    else {
        result.innerHTML = `Seu IMC é de ${imc} o qual se enquadra em obesidade II`
    }
    form.addEventListener('submit', recebeEventoForm);
}
calculator()