let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function add(element, index){
    vetorPilha.push(element)
}

vetorAdiciona.forEach(add)

console.log(vetorPilha)