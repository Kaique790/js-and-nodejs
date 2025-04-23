const usuarios = [
    { nome: 'Ana', idade: 17 },
    { nome: 'Carlos', idade: 21 },
    { nome: 'João', idade: 15 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Maria', idade: 25 }
];

const maiorDeIdade = usuarios.filter(user => user.idade >= 18)
console.log(maiorDeIdade)