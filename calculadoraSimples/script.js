function calcularValores() {
    let valor1 = document.getElementById('txtValor1')
    let valor2 = document.getElementById('txtValor2')
    let operacao = document.getElementById('cbxOperacao')
    let resultado = document.getElementById('txtResultado')

    if (operacao == 'Adição') {
        let resultado = (valor1 + valor2)
        resultado.innerHTML
    } else {
        alert('Não funcionou ainda!')
    }
    
}