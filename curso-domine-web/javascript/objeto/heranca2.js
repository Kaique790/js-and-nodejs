// Cadeia de protótipo (prototype chain)
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'C'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`;
    }
};

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const Volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro); // Ferrari tem como protótipo carro
Object.setPrototypeOf(Volvo, carro); // Volvo tem como protótipo carro

Volvo.acelerarMais(100)
console.log(Volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())