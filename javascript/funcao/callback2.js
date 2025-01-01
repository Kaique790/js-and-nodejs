const notas = [2.4, 6.8, 9.0, 8.0, 6.5, 4.8, 3.8]

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 4) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callback

const notasBaixas2 = notas.filter(function (element) {
    return element < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter((element) => {return element < 5})

console.log(notasBaixas3)