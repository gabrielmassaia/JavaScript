const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)


for (let p of ps) {
    p.style.backgroundColor = 'rgb(24, 66, 29)'
    p.style.color = '#FFFFF0'
}



