'use strict'

function calcularSubtracao () {
    const number1 = +document.getElementById('number1').value
    const number2 = +document.getElementById('number2').value
    const number3 = +document.getElementById('number3').value
    const exibir = document.getElementById('result')
    const form = document.getElementById('form')
    let resultado
    let texto

    if(form.reportValidity()){
        resultado = number1 + number2 + number3
        if(resultado >= 100){
            texto = `O resultado é ${resultado}`
        }
        else{
            texto = 'O resultado é menor que 100'
        }
        exibir.textContent = texto
    }
}

document.getElementById('calcular').addEventListener('click', calcularSubtracao)