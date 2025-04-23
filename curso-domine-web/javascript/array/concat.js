const filhos = ['José', 'Marquin']
const filhas = ['Dayana', 'Juseifona']

const todosOsFilhos = filhas.concat(filhos, 'Fulanin')
console.log(todosOsFilhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // Entra apenas em uma camda de array