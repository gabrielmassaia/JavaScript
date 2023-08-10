/*  const data = new Date();
console.log("", data.getDate())
console.log("", data.getMonth() +1)
console.log("", data.getFullYear())
console.log("", data.getHours())
console.log("", data.getMinutes())
console.log("", data.getMilliseconds())
console.log("", data.getDay())
console.log(data.toString()); */
 

function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return  `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)

