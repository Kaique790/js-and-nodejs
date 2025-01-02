const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const MulherComMenorSalario =(func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(MulherComMenorSalario);

    console.log(func)
})

// --- Exercício
// Russo com menor salário

// const homem = f => f.genero === 'M'
// const Isrussia = f => f.pais === 'Russia'
// const MenorSalario =  (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

// axios.get(url).then(response => {
//     const funcionarios = response.data
//     //console.log(funcionarios)

//     homemComMenorSalario = funcionarios.filter(homem).filter(Isrussia).reduce(MenorSalario)

//     console.log(homemComMenorSalario)

// })

// axios.get(url).then(response => {
//     const funcionarios = response.data
//     //console.log(funcionarios)

//     homemRussoComMenorSalario = funcionarios
//     .filter(homem)
//     .filter(Isrussia)
//     .reduce(MenorSalario)
//     homemComMenorSalario = funcionarios
//     .filter(homem)
//     .reduce(MenorSalario)

//     console.log(homemRussoComMenorSalario)
//     console.log(homemComMenorSalario)

//     funcionario1 = funcionarios
//     .filter(f => f.id == 1)
//     console.log(funcionario1)
//})