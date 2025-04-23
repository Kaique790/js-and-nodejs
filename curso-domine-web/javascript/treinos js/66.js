const produtos = [
    '{"nome": "borracha", "preco": 3.45}', 
    '{"nome": "caderno", "preco": 13.90}', 
    '{"nome": "kit de lapis", "preco": 41.22}', 
    '{"nome": "Caneta", "preco": 7.50}' 
];

const paraObjeto = json => JSON.parse(json)
const desc10 = produto => {
    produto.preco = (produto.preco * 0.9).toFixed(2);
    return produto;
};

const produtosComDesconto = produtos.map(paraObjeto).map(desc10)
console.log(produtosComDesconto)