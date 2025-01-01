function salarioComAumento(salario, plano){
    
    switch(plano){
        case 'a':
            let valorA = salario * (1 + 0.10)
            console.log(`Seu salário com  plano de aumento 'a' é de ${valorA}`)
            break
            case 'b':
            let valorB = salario * (1 + 0.15)
            console.log(`Seu salário com  plano de aumento 'b' é de ${valorB}`)
            break
            case 'c':
            let valorC = salario * (1 + 0.20)
            console.log(`Seu salário com  plano de aumento 'c' é de ${valorC}`)
    }
}

salarioComAumento(1000, 'a')
salarioComAumento(1000, 'b')
salarioComAumento(1000, 'c')