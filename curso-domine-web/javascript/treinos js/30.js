function pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = () => console.log("andando")
    console.log(`${nome}, ${idade}`)
}

const pessoa1 = new pessoa('kaique', 15)
const pessoa2 = new pessoa('João', 20, andar())

