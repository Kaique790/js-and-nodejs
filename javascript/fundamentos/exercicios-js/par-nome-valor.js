const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = 'Falaaaa' // contecto léxico 2
    return saudacao
}

// Obejetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Santo Antônio',
        numero: 32
    }
}

console.log (saudacao)
console.log (exec())
console.log(cliente)