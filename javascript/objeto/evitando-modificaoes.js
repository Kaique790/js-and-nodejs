// Object.preventExtensions -> não pode aumentar a quantidade de atributos do objeto
const produto = Object.preventExtensions({
    nome: 'Qualuer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.description = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -> nÂo é possível aumentar ou deleter atributos, apenas modificá-los
const pessoa = {nome: 'Julia', idade: 38}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrome = "silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> Não pode aumentar, deletar ou modficar atributos