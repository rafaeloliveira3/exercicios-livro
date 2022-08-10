'use strict'

function calcularSubtracao () {
    const number = +document.getElementById('number').value
    const exibir = document.getElementById('result')
    const form = document.getElementById('form')
    let resultado

    if(form.reportValidity()){
        if (number < 0) {
            resultado = number * (-1)        
        }
        else{
            resultado = number
        }
        exibir.textContent = `O número digitado em sua forma positiva é: ${resultado}`
    }
}

document.getElementById('calcular').addEventListener('click', calcularSubtracao)