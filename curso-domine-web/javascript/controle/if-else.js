const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('aprovado ' + nota)
    }
    else {
        console.log('Reprovado ' + nota)
    }
}

imprimirResultado(8)
imprimirResultado(5)
imprimirResultado('Êpa!')