function verificarDiaSemana(dia) {
    switch(dia) {
        case 1:
        case 7:
            console.log("Fim de semana");
            return "Fim de semana";
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Dia útil");
            return "Dia útil";
        default:
            console.log("Dia inválido");
            return "Dia inválido";
    }
}

verificarDiaSemana(1);
verificarDiaSemana(3);
verificarDiaSemana(7);
verificarDiaSemana(10);
