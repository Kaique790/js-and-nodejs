numerosParesDeIndicesPares = []

function filtrarPares(array){
    numerosParesDeIndicesPares = array.filter((e, i) => e % 2=== 0 && i % 2 === 0)
    console.log(numerosParesDeIndicesPares)
}

filtrarPares([10, 70, 22,43])