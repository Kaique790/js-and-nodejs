const [a, n] = [10, 20]
console.log(n)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [numero1, numero2, , numero3] = [10, 20, 50]
console.log(numero1, numero2, numero3)

const [, [, nota]] = [[, 8, 8], [9,6, 8]]
console.log(nota)