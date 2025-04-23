const primeiroElemento = array => returnarray[0];

const primeiraLetra = string => string[0];

const letraMinucula = letra => letra.toLowerCase();

let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinucula)
    .then(console.log);