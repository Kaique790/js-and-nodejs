function pessoa(nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade}, e sou ${this.profissao}`)
}

const pessoa1 = new pessoa('Jõao', 25, 'Programador')
pessoa1