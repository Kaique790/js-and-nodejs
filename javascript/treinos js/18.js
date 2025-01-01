const user = {
    nome: 'kaique',
    age: 30,
    street: 'Rua dos loucos'
}



console.log('As chaves...')
console.log(' ')

for (key in user){
    console.log(key)
}
console.log(' ')
console.log(' ')
console.log('Valores da chaves...')
console.log(' ')

for (key in user){
    console.log(user[key])
}

console.log(' ')
console.log('Chave: Valor')
console.log(' ')

for (key in user){
    console.log(`${key}: ${user[key]}`)
}
