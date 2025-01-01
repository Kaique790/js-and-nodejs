function divisivel (value) {
    if (value % 9 === 0)
        return "divisível";
    if (value % 9 !== 0)
        return 'não divisível';
}

let result = divisivel(9);
console.log(result)