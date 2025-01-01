// a function procura no contexto em que ela foi definida, não onde foi executada

const valor = 'Global'

function myFunction() {
    console.log(valor)
}

function exex() {
    const valor = 'Local'
    myFunction()
}

exec()