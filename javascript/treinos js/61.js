function resultadoApOuRep(nota) {
    const multDe5 = Math.ceil(nota / 5) * 5

    if (nota < 38) {
        console.log('Brann')
    }

    else if (multDe5 - nota < 3) {
        nota = multDe5
    }

    const result = nota >= 40? 'Aprovado' : 'Reprovado'
    console.log(result + '; Nota: ' + nota)
}

resultadoApOuRep(37)