'use strict'

function calcularSubtracao () {
    const number = +document.getElementById('number').value
    const exibir = document.getElementById('result')
    const form = document.getElementById('form')
    let resultado

    if(form.reportValidity()){
        if(number % 2 == 0){
            resultado = 'par'
        }
        else{
            resultado = 'impar'
        }
        exibir.textContent = `O número ${number} é ${resultado}.`
    }
}

document.getElementById('calcular').addEventListener('click', calcularSubtracao)