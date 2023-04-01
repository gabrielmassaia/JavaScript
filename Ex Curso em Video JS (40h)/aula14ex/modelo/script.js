function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let pas = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Faltam dados! ')
    } else {
        res.innerHTML = "Contando: " 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if ( i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) 
                res.innerHTML += ` ${c} \u{27A1}`
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`  
    }
}

