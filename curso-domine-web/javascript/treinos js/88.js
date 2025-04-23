function somaEhPar(a, b){
    const soma = a + b;
    let p = new Promise((resolve, reject) => {
        if(soma % 2 === 0){
            resolve(`O número ${soma} (Soma de ${a} + ${b}), é par.`)
        }
        reject('Não é par')
    })

    p.then(console.log)
        .catch(console.log)
}

somaEhPar(5, 5)