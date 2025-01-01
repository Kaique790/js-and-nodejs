function planoDeSaude(idade){
    let valor = 100
    if (idade <= 10){
        valor += 80
    }
    else if (idade <= 30){
        valor += 50 
    }
    else if (idade <= 60){
        valor += 95
    }
    else {
        valor += 130
    }
    console.log(`o valor a ser pago de acordo com a taxa de idade(${idade} anos) mais o valor fixo é de ${valor}R$`)
}

planoDeSaude(20)
planoDeSaude(10)
planoDeSaude(50)
planoDeSaude(90)