const fabricantes = [ 'Mercedes', 'Audi', 'BMW', 'Celta']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}



fabricantes.forEach(imprimir)



fabricantes.forEach(function (fabricantes) {
    console.log(fabricantes)
})



fabricantes.forEach(fabricantes => console.log(fabricantes))