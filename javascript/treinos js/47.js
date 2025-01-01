function calculadora(a, b, c) {
    switch(b){
        case '+':
            console.log(a + c)
            break
        case '-':
            console.log(a - c)
            break
        case '*':
            console.log(a * c)
            break
        case '/':
            console.log(a / c)
            break
        default:
            console.log('operações inválidas')
    }
}

calculadora(10, '+', 5)
calculadora(10, '-', 5)
calculadora(10, '*', 5)
calculadora(10, '/', 5)
calculadora(10, 'y', 5)