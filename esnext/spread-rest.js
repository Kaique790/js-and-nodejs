// spread com objetos
const funcionario = {
    nome: 'Kaique',
    idade: 15
}

const clone ={
    homem: true,
    ...funcionario
}

console.log(clone)

// spread com array
const grupoA = ['Kaique', "lucas", 'eduardo']

const grupoCompelto = ['Francyel', 'Maria', ...grupoA]

console.log(grupoCompelto)