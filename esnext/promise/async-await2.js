function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    };

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min;

        if (numerosProibidos.includes(random)) {
            reject('Número repetido!')
        }
        resolve(random);
    });
};

async function gerarMegaSena(qtDeNumeros) {
    const numeros = [];
    try {
        for (let _ of Array(qtDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros;
    }
    catch(e) {
        throw 'Que chato'
    }
};

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)