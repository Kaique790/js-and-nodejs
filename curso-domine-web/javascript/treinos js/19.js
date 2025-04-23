const numeros = [0, 1 , 2, 3, 4, 5, 12, 37287, 2502890] ;
function parOuImpar (element) {
    if(element % 2 == 0) {
        console.log(`${element} é par`)
    } else {
        console.log(`${element} é impar`)
    }
}

numeros.forEach(function(element, item) {parOuImpar(element)})