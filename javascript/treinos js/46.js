function comprarCarro(modelo) {
    switch (modelo.toLowerCase()) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedans':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

comprarCarro('SEDanS')