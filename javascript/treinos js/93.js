const array = [[1, 2], [3, 4], [5, 6]];

function multipleAll(array) {
    let result = 1

    for (let i = 0; i < array.length; i++) {
        
        for(let a = 0; a < array[i].length; a++) {
           result *= array[i][a]
        }
        
    }

    return result;
}

console.log(multipleAll(array))