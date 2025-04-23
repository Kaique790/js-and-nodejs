function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz'
    if (typeof input !== 'number')
        return 'NaN';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0) 
        return 'Buzz';
    return input
}

let result = fizzBuzz('');
console.log(result);

console.log(typeof '')