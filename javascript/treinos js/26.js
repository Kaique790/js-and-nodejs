let max = 80

function multa(v){
    if ( v <= max) {
        console.log(v)
    }
    else if (v > max && v <= max + 10) {
        console.log('Multa leve')
    }
    else if (v > max + 10 && v <= max + 20) {
        console.log('Multa grave')
    }
    else {
        console.log('Multa gravissíma')
    }
}

multa(60)
multa(80)
multa(85)
multa(97)
multa(770)