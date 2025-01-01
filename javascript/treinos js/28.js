function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`O maior número é num1: ${num1}`)
    }
    else if(num2 > num1 && num2 > num3){
        console.log(`O maior número é num2: ${num2}`)
    }
    else if(num3 > num2 && num3 > num1){
        console.log(`O maior número é num3: ${num3}`)
    }
    else {
        console.log("Os números são iguais")
    }
}

maiorNumero(10, 20, 30)
maiorNumero(10, 50, 30)
maiorNumero(90, 50, 30)
maiorNumero(30, 30, 30)