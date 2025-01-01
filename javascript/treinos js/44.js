function fat(n) {
    let mult = n
    for (let i = n - 1; i > 0; i--){
        mult = mult * i 
        console.log(`${mult} x ${i} = ${mult}`)
    }
    console.log(`Fatorial de ${n} é ${mult}`)
}

fat(5)