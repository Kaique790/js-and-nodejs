function tratarErrolancar(_erro) {
    throw 'contataremos o suporte'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.ToUpperCase() + '!!!')
    } catch (e) {
        tratarErrolancar(e)
    }
    finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)