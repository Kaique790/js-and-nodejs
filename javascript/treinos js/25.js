function fat (x) {
    for(i = x - 1; i >= 1; i--){
        x *= i
        console.log(`7 x ${i} = ${x}`)
    }
    return x
}

console.log(fat(7))