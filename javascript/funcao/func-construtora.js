function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelecerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new carro()
uno.acelecerar()
uno.acelecerar()
uno.acelecerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new carro(350, 20)
ferrari.acelecerar()
ferrari.acelecerar()
ferrari.acelecerar()
console.log(ferrari.getVelocidadeAtual())