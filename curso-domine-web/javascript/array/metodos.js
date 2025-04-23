const pilotos = ['Vettel','Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Retira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Add elemento
console.log(pilotos)

pilotos.shift() // retira primieiro elmento
console.log(pilotos)

pilotos.unshift('Hamilton') // Add elemento no inicio do array
console.log(pilotos)

// Splice pode e add e remover elementos

//add
pilotos.splice(2, 0,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) 

 const algunsPilotos1 = pilotos.slice(2) // gera novo array
 console.log(algunsPilotos1)

 const algunsPilotos2 = pilotos.slice(1, 4)
 console.log(algunsPilotos2)