
// setTimeout(() => {
//     console.log('Executando callback.');
    
//     setTimeout(() => {
//         console.log('Executando callback..');
//         setTimeout(() => {
//             console.log('Executando callback...')
//         }, 2000);    
//     }, 2000);
// }, 2000);

function esperaPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    });
};

esperaPor(3000)
    .then(() => esperaPor())
    .then(esperaPor);