'use strict'

function calcularSubtracao () {
    const number1 = +document.getElementById('number1').value
    const number2 = +document.getElementById('number2').value
    const number3 = +document.getElementById('number3').value
    const number4 = +document.getElementById('number4').value
    const exibir = document.getElementById('result')
    const form = document.getElementById('form')
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

document.getElementById('calcular').addEventListener('click', calcularSubtracao)