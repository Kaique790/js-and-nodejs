class lancamento {
    constructor(nome = 'Genérioco', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLAncamentos(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLAncamentos(salario, contaDeLuz)
console.log(contas.sumario( ))