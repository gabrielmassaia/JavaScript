function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `It's ${hora} o'clock`
//  Condições 
    if (hora >= 6 && hora < 12) {
        // Good Morning
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd1f'
    } else if (hora >= 12 && hora < 18) {
        // Good Afternoon!
        document.body.style.background = '#b9846f'
        img.src = 'fototarde.jpg'
    } else {
        //Good Night
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    } 
}
    