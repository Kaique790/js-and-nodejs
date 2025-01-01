const produtos = [
    '{"nome": "borracha", "preco": 3.45}', 
    '{"nome": "caderno", "preco": 13.90}', 
    '{"nome": "kit de lapis", "preco": 41.22}', 
    '{"nome": "Caneta", "preco": 7.50}' 
];

const paraObjeto = json => JSON.parse(json)
const prodCaro = produto => {
    if (produto.preco >= 10) {
        return produto
    } else {
        return 'barato'
    }
}

const produtosCaros = produtos.map(paraObjeto).map(prodCaro)
console.log(produtosCaros)