const notas = [5, 7, 8, 4, 9, 6, 3, 10];
const media = 7;

const acimaDaMedia = notas.filter(nota => nota > media)
console.log(acimaDaMedia)