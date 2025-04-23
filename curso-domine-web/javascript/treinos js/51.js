function quantasCedulas(valor){
    let c100 = 0, c50 = 0, c10 = 0, c5 = 0, c1 = 0;

    c100 = Math.floor(valor / 100)
    valor = valor % 100
    
    c50 = Math.floor(valor / 50)
    valor = valor % 50

    c10 = Math.floor(valor / 10)
    valor = valor % 10

    c5 = Math.floor(valor / 5)
    valor = valor % 5

    c1 = valor

    if (c100 > 0) console.log(`${c100} nota(s) de R$ 100`);
    if (c50 > 0) console.log(`${c50} nota(s) de R$ 50`);
    if (c10 > 0) console.log(`${c10} nota(s) de R$ 10`);
    if (c5 > 0) console.log(`${c5} nota(s) de R$ 5`);
    if (c1 > 0) console.log(`${c1} nota(s) de R$ 1`);
}

quantasCedulas(20)