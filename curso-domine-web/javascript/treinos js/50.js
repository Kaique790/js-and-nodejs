function pedido(codigo, quantidade){
    switch(codigo){
        case 100:
            console.log(`${quantidade} Cachorro quente = R$${3.00*quantidade}`)
            break
        case 200:
            console.log(`${quantidade} Hambúrguer simples = R$${4.00*quantidade}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer = R$${5.50*quantidade}`)
            break
        case 400:
            console.log(`${quantidade} Bauru = R$${7.50*quantidade}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante = R$${3.50*quantidade}`)
            break
        case 600:
            console.log(`${quantidade} Suco = R$${2.80*quantidade}`)
            break
        default:
            console.log('Produto não existente')
    }
}

pedido(400, 3)
pedido(500, 5)
pedido(600, 7)
pedido(300, 2)
pedido(100, 3)
pedido(200, 4)
pedido(900, 1)