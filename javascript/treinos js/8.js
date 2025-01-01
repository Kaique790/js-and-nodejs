function maiorOuIgual(x, y) {
    if (typeof x != typeof y) {
        console.log (false)
    }

    else if (x >= y) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(0, 1)
maiorOuIgual(10, 5)