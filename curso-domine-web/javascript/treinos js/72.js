const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaTudo = numeros.reduce((acumulador, atual)=> {
    console.log(`${acumulador} + ${atual} = ${acumulador + atual}`)
    return acumulador + atual
}, 0)