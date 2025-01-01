function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorio(40, 50)
    console.log( `A opção é: ${opcao}`)
} while (opcao != 45)