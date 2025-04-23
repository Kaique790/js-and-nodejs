let fatura = 1000

function pagoNoMes(MesPago){
    let juros = fatura * (1 + 0.05)**MesPago - fatura
    if (MesPago == 1) {
        console.log(fatura)
    }
    else {
        console.log((fatura + juros).toFixed(2))
    }
}

pagoNoMes(3)