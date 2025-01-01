function produto(nome, preco, categoria) {
    this.nome = nome
    this.preco = preco
    this.categoria = categoria

    this.desconto = function (desconto){
        this.preco -= this.preco * (desconto / 100)
    }
}

const produto1 = new produto('s22', 1000, 'Samsung')
produto1.desconto(30)
console.log(`${produto1.nome},  ${produto1.preco},  ${produto1.categoria}`)