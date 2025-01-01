const vetor = [20, 33, 51, 30, 10, 17, 13]
let pares = 0
let impares = 0
function parOuIMpar(){
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            console.log(`${vetor[i]} é par`)
            pares++
        }
        else {
            console.log(`${vetor[i]} é impar`)
            impares++
        }
    }
    console.log(pares + ' pare(s)')
    console.log(impares + ' impare(s)')
}
parOuIMpar()