'use strict'

function exerciseA () {
    const number1 = +document.getElementById('exA-number1').value
    const number2 = +document.getElementById('exA-number2').value
    const exibir = document.getElementById('exA-result')
    const form = document.getElementById('form-A')
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

function exerciseB () {
    const number = +document.getElementById('exB-number').value
    const exibir = document.getElementById('exB-result')
    const form = document.getElementById('form-B')
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

function exerciseC () {
    const number1 = +document.getElementById('exC-number1').value
    const number2 = +document.getElementById('exC-number2').value
    const number3 = +document.getElementById('exC-number3').value
    const number4 = +document.getElementById('exC-number4').value
    const exibir = document.getElementById('exC-result')
    const form = document.getElementById('form-C')
    let resultado
    let texto

    if(form.reportValidity()){
        resultado = (number1 + number2 + number3 + number4) / 4
        if(resultado >= 5){
            texto = 'aprovado'
        }
        else{
            texto = 'reprovado'
        }
        exibir.textContent = `O aluno foi ${texto} | Média: ${resultado.toFixed(2)}`
    }
}

function exerciseF () {
    let ordenar = []
    ordenar[0] = +document.getElementById('exF-number1').value
    ordenar[1] = +document.getElementById('exF-number2').value
    ordenar[2] = +document.getElementById('exF-number3').value
    const exibir = document.getElementById('exF-result')
    const form = document.getElementById('form-F')

    if(form.reportValidity()){
        ordenar.sort((a, b) => a - b)
        exibir.textContent = `Os números em ordem crescente são: ${ordenar}`
    }
}

function exerciseJ () {
    const number = +document.getElementById('exJ-number').value
    const exibir = document.getElementById('exJ-result')
    const form = document.getElementById('form-J')
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

function exerciseN () {
    const number1 = +document.getElementById('exN-number1').value
    const number2 = +document.getElementById('exN-number2').value
    const number3 = +document.getElementById('exN-number3').value
    const exibir = document.getElementById('exN-result')
    const form = document.getElementById('form-N')
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

document.getElementById('calcular-A').addEventListener('click', exerciseA)
document.getElementById('calcular-B').addEventListener('click', exerciseB)
document.getElementById('calcular-C').addEventListener('click', exerciseC)
document.getElementById('calcular-F').addEventListener('click', exerciseF)
document.getElementById('calcular-J').addEventListener('click', exerciseJ)
document.getElementById('calcular-N').addEventListener('click', exerciseN)