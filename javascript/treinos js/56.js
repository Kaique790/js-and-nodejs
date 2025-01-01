function somaTudo(...n) {
    let tam = n.length
    let soma = 0
    for (let i = 0; i < tam; i++) {
        soma += n[i]
    }
    return soma
}

console.log(somaTudo(12, 8, -67, -44, 52))