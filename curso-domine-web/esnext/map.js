const tecnologias = new Map;
tecnologias.set('react', {
    framework: false
});
tecnologias.set('Angular', {framework: true});

console.log(tecnologias.react);
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

console.log(chavesVariadas.has(123));
console.log(chavesVariadas.delete(123));;
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
console.log(chavesVariadas);