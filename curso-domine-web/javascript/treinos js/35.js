function carro (marca, modelo, ano) { 
      this.marca = marca
      this.modelo = modelo
      this.ano = ano
      this.detalhes = console.log(`${marca}, ${modelo}, ${ano}`)
}

const carro1 = new carro('Toyota', 'Corolla', 2020)
carro1.detalhes