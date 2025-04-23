function bhaskara(ax2, bx, c) {

    var delta = bx ** 2 - (4 * ax2 * c);

    if (delta < 0) {
        return "Delta é negativo";
    }


    var valor1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    var valor2 = (-bx - Math.sqrt(delta)) / (2 * ax2);


    if (delta === 0) {
        return [valor1.toFixed(2), valor1.toFixed(2)];
    }

    return [valor1.toFixed(2), valor2.toFixed(2)];
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(5, 10, 6));
console.log(bhaskara(3, 93, 54));