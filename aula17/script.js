let num = document.querySelector("input#fnum")
let list = document.querySelector("select#flist")
let res = document.querySelector("div#res")
let values = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }

}

function toAdd() {
    if(isNumber(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value))
    let item = document.createElement("option")
    item.text = `Value ${num.value} add.`
    list.appendChild(item)
    res.innerHTML = ''
   } else {
    alert("Invalid value or we find it inside the list!")
}
    num.value = ''
    num.focus()
}

function finalize() {
    if (values.length == 0) {
        window.alert("Add values before to finalize")
    } else {
        let tot = values.length
        let maior = values[0]    
        let menor = values[0]
        let soma = 0
        let media = 0
        for(let pos in values) {
            soma += values[pos]
            if(values[pos] > maior)
            maior = values[pos]
            if (values[pos] < menor)
            menor = values[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo, we have ${tot} registered numbers`
        res.innerHTML += `<p>the highest value is ${maior}</p>`
        res.innerHTML += `<p>the smallest value is ${menor}</p>`
        res.innerHTML += `<p>adding all the values, we have ${soma}</p>`
        res.innerHTML += `<p>the media is ${media}</p>`
}

}