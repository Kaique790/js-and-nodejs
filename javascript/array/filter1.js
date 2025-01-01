const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const ehFragil = p => p.fragil

const ehCaro = p => p.preco >= 500


const caroEFragil = produtos.filter(ehFragil).filter(ehCaro) 
console.log(caroEFragil)