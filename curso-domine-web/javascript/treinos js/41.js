function jurosSimples(c, j, t){
    let juros = c * (j/100) * t
    let acumulo = c + juros
    console.log(`O juros simples de ${c}, com juros de ${j}% por ${t} meses é de ${acumulo}R$`)
}

jurosSimples(1000, 5, 3)

function jurosCompostos(c, j, t){
    let acumulo = c * (1 + j/100)**t
    console.log(`O juros composto de ${c}, com juros de ${j}% por ${t} meses é de ${acumulo.toFixed(2)}R$`)
}

jurosCompostos(1000, 5, 3)