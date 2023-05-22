function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (formsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/bebe.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'imagens/jovemh.png')
            } else {
                img.setAttribute('src', 'imagens/homem.png')
            }
        } else if (formsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/bebe.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'imagens/jovemf.png')
            } else {
                img.setAttribute('src', 'imagens/mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}