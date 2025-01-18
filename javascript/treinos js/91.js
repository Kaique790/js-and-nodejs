const marks = [70, 70, 70];

function calculateGrade(array) {
    const total = array.reduce((acc, atual) => acc + atual);
    const media = (total / array.length).toFixed(1);

    if (media >= 0 && media <= 59) {
        console.log(`Sua média é: ${media}, Nota: E`);
    } else if (media > 59 && media  <= 69) {
        console.log(`Sua média é: ${media}, Nota: D`);
    } else if (media > 59 && media  <= 79) {
        console.log(`Sua média é: ${media}, Nota: C`);
    } else if (media > 79 && media <= 89) {
        console.log(`Sua média é: ${media}, Nota: B`);
    } else if (media > 89 && media <= 100) {
        console.log(`Sua média é: ${media}, Nota: A`);
    } else {
        console.log('Digite notas válidas', media);
    };
};
calculateGrade(marks)