function esperaPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve() , tempo)
    });
};

function retornarValor(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 3000);
    });
};

async function executar() {
    let valor = await retornarValor();

    await esperaPor(1500)
    console.log(`Async/Await ${valor}`);

    await esperaPor(1500)
    console.log(`Async/Await ${valor + 1}`);

    await esperaPor(1500)
    console.log(`Async/Await ${valor + 2}`);

    return valor + 3
}

console.log('Começo')
const v = await executar()
console.log(v)