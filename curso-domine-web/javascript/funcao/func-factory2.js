function Produto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(Produto('s22', 4500.00))
console.log(Produto('Asus', 1349.49))
console.log(Produto('sNotebook', 3450.09))