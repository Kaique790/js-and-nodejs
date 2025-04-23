let a = 3

global.b = 123
this.c = 976

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports.c === this)
console.log(module.exports)

abc = 3 // não criar variaveis assim
console.log(abc)

// module.exports = { e: 456, f: false, g: 'teste }