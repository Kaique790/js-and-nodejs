function salto (start, end, jump){
    f = end 
    p = jump
    for (i = start; i <= f; i += p) {
        console.log(i)
    }
}

salto(0, 10, 2)