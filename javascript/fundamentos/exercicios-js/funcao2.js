// Amazenando funcao em uma variável

const ImprimirSoma = function (a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)

// Armazenando funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(25, 25))

// retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(20, 50))

const imprimir2 = a => console.log(a)

imprimir2 ('aoubaaa')