// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa ->  456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
 // Object.freee() -> Nã deixar: adicionar, deletar ou alterar os valores e chaves do objeto

pessoa.nome = ' Maria'
console.log(pessoa.nome)