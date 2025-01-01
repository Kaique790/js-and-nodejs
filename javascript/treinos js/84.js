function filtrarNumeros (array){
    numeros = array.filter(Number)
    console.log(numeros)
}

filtrarNumeros(['kaique', 1, 4, 10, 20])
filtrarNumeros(['kaique','b'])