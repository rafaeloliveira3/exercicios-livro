'use strict'

function calcularSubtracao () {
    const number1 = +document.getElementById('number1').value
    const number2 = +document.getElementById('number2').value
    const exibir = document.getElementById('result')
    const form = document.getElementById('form')
    let resultado

    if(form.reportValidity()){
        if (number1 > number2) {
            resultado = number1 - number2
        }
        else{
            resultado = number2 - number1
        }
        exibir.textContent = `O resultado da subtração entre o maior número e o menor é: ${resultado}`
    }
}

document.getElementById('calcular').addEventListener('click', calcularSubtracao)