const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const numerosPares = numeros.filter(n => n % 2 == 0)
console.log(numerosPares);


// Filtrar palavras curtas
console.log('Filtrar palavras curtas')


const palavras = ['sol', 'lua', 'estrela', 'nuvem', 'mar', 'terra', 'galáxia'];
const palavrasCurtas = palavras.filter(palavra => palavra.length < 5)
console.log(palavrasCurtas);