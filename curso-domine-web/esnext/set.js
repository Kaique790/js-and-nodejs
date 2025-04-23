// não aceita repetição e não é indexado
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('Palmeiras'));
console.log(times.has('almeiras'));
times.delete('Flamengo');
console.log(times.has('Flamego'));

const nomes = ['Raquel','Lucas', 'Lucas', 'Lucia'];
const nomesSet = new Set(nomes);
console.log(nomesSet)