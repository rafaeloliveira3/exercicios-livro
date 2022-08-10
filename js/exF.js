'use strict'

function calcularSubtracao () {
    let ordenar = []
    ordenar[0] = +document.getElementById('number1').value
    ordenar[1] = +document.getElementById('number2').value
    ordenar[2] = +document.getElementById('number3').value
    const exibir = document.getElementById('result')
    const form = document.getElementById('form')

    if(form.reportValidity()){
        ordenar.sort((a, b) => a - b)
        exibir.textContent = `Os números em ordem crescente são: ${ordenar}`
    }
}

document.getElementById('calcular').addEventListener('click', calcularSubtracao)