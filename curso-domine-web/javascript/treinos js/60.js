const vetor = [33, 4, 5];
let maior = vetor[0]
let menor = vetor[0]
for (let i = 1; i < vetor.length; i++) {    
    if (vetor[i] > maior) {
        maior = vetor[i]
    }
}
for (let i = 1; i < vetor.length; i++) {    
    if (vetor[i] < menor) {
        menor = vetor[i]
    }
}

console.log(maior)
console.log(menor)