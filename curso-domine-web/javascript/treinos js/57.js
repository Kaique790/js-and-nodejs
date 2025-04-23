const vetor = [10, 245, 26, 18, 19, 15, 21, 643, 9, 20, 65, 8, 83]

let dentroDoIntervalo = 0

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
        console.log(vetor[i])
        dentroDoIntervalo++
    }
}
console.log(`${dentroDoIntervalo} número(s) estão no intervalo`)
