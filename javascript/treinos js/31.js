function receita(title, serve, ingredientes) {
    this.title = title
    this.serve = serve
    this.ingredientes = ingredientes
}

let ingredientes = [
    '2 ovos',
    '1 colher de leite',
    '1 colher de manteiga',
    'Pimenta',
    'Sal'
]

const receita1 = new receita('Omelete', 1, ingredientes)
console.log(receita1.title)
console.log(`Serve: ${receita1.serve} pessoa(s)`)
console.log('Ingredientes:')
for(i = 0; i <= ingredientes.length; i++){
    console.log(ingredientes[i])
}