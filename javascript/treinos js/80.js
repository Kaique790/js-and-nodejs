function removerPropriedade(obj, remover){
    delete obj[remover]
    console.log(obj)
}

removerPropriedade({a:1, b:2}, 'b')