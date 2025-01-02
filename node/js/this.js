console.log(global === this)
console.log(module === this)

console.log(module.exports === this)
console.log(exports === this)

function logthis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logthis()