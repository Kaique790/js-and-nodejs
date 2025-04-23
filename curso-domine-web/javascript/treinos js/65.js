const produtos = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

const paraJson = json => JSON.parse(json)
const apenasNome = produto => produto.nome

const result = produtos.map(paraJson).map(apenasNome)
console.log(result)