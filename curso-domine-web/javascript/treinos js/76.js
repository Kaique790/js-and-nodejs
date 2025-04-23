const vetor = [-1, -2, -9, 10, 40, 30, -100]
let negativos = 0
function quantosNegativos(elem, ind){
    if (elem < 0) {
        console.log(elem)
        negativos++
    }
    return negativos
}

vetor.forEach(quantosNegativos)
console.log(negativos + ' Numero(s) negativos')