function imprimirNota (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Veterarano "Aí Sabeeee"')
            break
        case 8: case 7:
            console.log('Bixo é bom')
            break
        case 6: case 5:
        console.log('Outra tentativa')
        case 4: case 3:
            console.log('Você é um merda, mermão')
            break
        default:
            console.log('se lascou')

    }
}

imprimirNota(10)
imprimirNota(8)
imprimirNota(6)
imprimirNota(4)
imprimirNota(2)