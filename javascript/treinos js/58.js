function ConceitoDaNota(nota){
    if (nota >= 0 && nota <= 4.9) {
        console.log('Conceito D; Nota: ' + nota)
    }
    else if (nota <= 6.9) {
        console.log('Conceito C; Nota: ' + nota)
    }
    else if (nota <= 8.9) {
        console.log('Conceito B; Nota: ' + nota)
    }
    else if (nota <= 10) {
        console.log('Conceito A; Nota: ' + nota)
    }
    else {
        console.log('Digite uma nota de 0 a 10; Nota: ' + nota)
    }
}

ConceitoDaNota(3)
ConceitoDaNota(10)
ConceitoDaNota(7)
ConceitoDaNota(8.6)
ConceitoDaNota(4.9)
ConceitoDaNota(5)