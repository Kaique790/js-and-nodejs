function aleatorio(a = 1, b = 10){
    const numero = Math.random() * (b - a) + a
    return Math.floor(numero)
} 

const numero = aleatorio()

console.log(numero)

function chute(x){
    if (x == numero) {
        console.log('Acertouuuuuu!!')
    }
    else if (x > numero) {
        console.log("Chutou altooo")
    }
    else if (x < numero) {
        console.log('Chutou baixoooooo')
    }
}

chute(3)