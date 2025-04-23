function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceDeErro) {
            reject('Ocorreu um erro')
        }
        resolve(valor);
    });
};

funcionarOuNao('Testando...', 0.5)
    .then(console.log)
    .catch(err => console.log(`Error: ${err}`))
    .then(() => console.log('FIM!'))