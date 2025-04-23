let numero = 1

function tabuada(numero) {
    for(let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        let resultado = numero * multiplicador
            console.log(`${numero} x ${multiplicador} = ${resultado}`)
    }
}

tabuada(110)