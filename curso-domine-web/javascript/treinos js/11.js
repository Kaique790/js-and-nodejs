function inverso(valor) {
    const tipo =  typeof valor
    if (tipo == 'boolean') {
        return !valor
    }
    else if (tipo == 'number') {
        return -valor
    }
    else {
        return `Digite um valor booleano ou number, esse valor é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso(452234))
console.log(inverso('dsvgdhuvsdu'))