const valores = [7.8, 8.9, 4.8, 6.7];
console.log(valores[0], valores[3]);
console.log(valores[6]);
console.log(valores);

valores[4] = 6.8;
valores[5] = 9.4;

console.log(valores);
console.log(valores.length);;

valores.push({id: 3}, false, null, 'teste');

console.log(valores);
console.log(valores.length);
console.log(valores.pop());
delete valores[5];
console.log(valores);
console.log(valores);
console.log(typeof valores);