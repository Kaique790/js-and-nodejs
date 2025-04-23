function triangulo(a, b, c){
    if (a == b && a == c && b == c){
        console.log('Triângulo equilátero')
    }
    else if(a == b || a == c || b == c){
        console.log('Triângulo Isósceles')
    }
    else {
        console.log('Triângulo escaleno')
    }
}

triangulo(10, 10, 10)
triangulo(10, 20, 10)
triangulo(20, 20, 10)
triangulo(12, 14, 19)