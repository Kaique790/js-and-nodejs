const notas = [3, 5, 6, 8]
soma = 0
for (let i = 0; i < notas.length; i++){
    soma += notas[i]
}

const result = soma / notas.length
console.log(result)