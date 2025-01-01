function somarNumeros(array){
    let soma = 0
    soma = array.reduce((acumulator, element) => acumulator + element, 0)
    console.log(soma)
}

somarNumeros([10, 10, 10])