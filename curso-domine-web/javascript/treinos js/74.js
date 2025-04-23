const numeros = [5, 12, 8, 21, 15, 3, 17];
const valorMaximo = numeros.reduce((acumulado, atual) => {
    if(atual > acumulado){
        return atual
    } 
    return acumulado
})

console.log(valorMaximo)