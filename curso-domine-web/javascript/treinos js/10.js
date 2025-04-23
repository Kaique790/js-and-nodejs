const meses = [
    'janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

function nomeDoMês(mes) {
    switch(mes) {
        case 1: console.log(meses[0])
        break
        case 2: console.log(meses[1])
        break
        case 3: console.log(meses[2])
        break
        case 4: console.log(meses[3])
        break
        case 5: console.log(meses[4])
        break
        case 6: console.log(meses[5])
        break
        case 7: console.log(meses[6])
        break
        case 8: console.log(meses[7])
        break
        case 9: console.log(meses[8])
        break
        case 10: console.log(meses[9])
        break
        case 11: console.log(meses[10])
        break
        case 12: console.log(meses[11])
        break
        default: console('Digite umnúmero de 1 a 12')
    }
}
nomeDoMês(12)