const countries = {
    name:'Japan',
    population: 125,
    capital: 'Tokyo',
    ecconomyPosition: 3
}

function showString (obj) {
    for(let key in obj) {
        if(typeof obj[key] ==='string')
            console.log(key,': ', obj[key])    
    }
}

showString(countries)