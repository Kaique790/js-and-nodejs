const form = document.getElementById('form')
const nome = document.getElementById('name')
const altura = document.getElementById('height')
const peso = document.getElementById('weight')
const messageErro = document.querySelector('.resultado .resultado-message')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkNome()
    checkAltura()
    checkPeso()
    calcularIMC()
})

function inputErro(input, mensagem) {
    input.parentElement.classList.add('erro')

    const messageErro = input.parentElement.getElementsByTagName('a')[0]
    if (messageErro) {
        messageErro.innerHTML = mensagem
    }
}

function checkNome() {
    const valorNome = nome.value
    if (valorNome === "") {
        inputErro(nome, "Digite um nome")
    } else {
        nome.parentElement.classList.remove('erro')
    }
}

function checkAltura() {
    const valorAltura = altura.value.replace(',', '.')
    if (valorAltura <= 0) {
        inputErro(altura, 'Digite uma altura válida')
    } else {
        altura.parentElement.classList.remove('erro')
    }
}

function checkPeso() {
    const valorPeso = peso.value.replace(',', '.')
    if (valorPeso <= 0) {
        inputErro(peso, 'Digite um peso válido')
    } else {
        peso.parentElement.classList.remove('erro')
    }
}

function calcularIMC() {
    const valorNome = nome.value;
    const valorAltura = altura.value.replace(',', '.');
    const valorPeso = peso.value.replace(',', '.');
    const calculo = (valorPeso / (valorAltura / 100) ** 2).toFixed(2);

    let mensagem;

    if (isNaN(calculo) || valorNome === "" || calculo === undefined
){
        mensagem = 'Preencha todos os campos'
    }
    else if (calculo <= 18.5) {
        mensagem = `Olá, ${valorNome}! Seu IMC é <strong>${calculo}</strong> (Abaixo do peso).`;
    }
    else if (calculo <= 24.9) {
        mensagem = `Olá, ${valorNome}! Seu IMC é <strong>${calculo}</strong> (Peso normal).`;
    }
    else if (calculo <= 29.9) {
        mensagem = `Olá, ${valorNome}! Seu IMC é <strong>${calculo}</strong> (Sobrepeso).`;
    }
    else if (calculo <= 34.9) {
        mensagem = `Olá, ${valorNome}! Seu IMC é <strong>${calculo}</strong> (Obesidade grau I).`;
    }
    else if (calculo <= 39.9) {
        mensagem = `Olá, ${valorNome}! Seu IMC é <strong>${calculo}</strong> (Obesidade grau II).`;
    }
    else { mensagem = `Olá, ${valorNome}! Seu IMC é ${calculo} (Obesidade grau III ou extrema).`; }

    messageErro.innerHTML = mensagem;
}
