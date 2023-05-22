function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 5
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=5 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#C0987A'
        saudacao.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#3F3C32'
        saudacao.innerHTML = 'Boa tarde!'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#4A2F4B'
        saudacao.innerHTML = 'Boa noite!'
    }
}