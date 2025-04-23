function objetoParaArray(obj){
    array = []
    for( let key in obj){
        array.push([key, obj[key]])
    }
    console.log(array)
}

objetoParaArray({
    nome: 'kaique',
    idade: 15
})