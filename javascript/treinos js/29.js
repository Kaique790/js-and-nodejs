function SomaImpares(n){
    for(i = 1; i <= n; i++){
        if (i % 2 !== 0) {
        val = n + i
        console.log(`${n} + ${i} = ${val}`)}
    } 
}
SomaImpares(10)