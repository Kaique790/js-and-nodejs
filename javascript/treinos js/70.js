const produtos = [
    { nome: 'TV', disponibilidade: true },
    { nome: 'Celular', disponibilidade: false },
    { nome: 'Notebook', disponibilidade: true },
    { nome: 'Tablet', disponibilidade: false }
];

const produtosDisponiveis = produtos.filter(produto => produto.disponibilidade)

console.log(produtosDisponiveis)