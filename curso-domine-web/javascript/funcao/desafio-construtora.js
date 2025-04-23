function Pessoa(nome) {
    this.nome = nome


    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar()




function criarPessoa(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new criarPessoa('Kaique')
p2.falar()