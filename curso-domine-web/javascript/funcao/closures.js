// Closure é o escopo onde a função é declarada
// Permite a função acessar e manipular váriaveis externas à função

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())