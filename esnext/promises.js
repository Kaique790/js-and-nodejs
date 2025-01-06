function falarDepoisDe(second, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, second * 1000)
    })
}

falarDepoisDe(2, 'Funcionante')
    .then((frase) => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))