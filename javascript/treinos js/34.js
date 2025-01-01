function aluno(nome, turma) {
    this.nome = nome;
    this.turma = turma;
    this.notas = [];

    this.adicionarNota = function(nota) {
        this.notas.push(nota);
    };

    
    this.mediaNotas = function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length; // Dividir pela quantidade de notas
    };
}

const aluno1 = new aluno('Lucas', 'Turma A');
aluno1.adicionarNota(8);
aluno1.adicionarNota(9);
aluno1.adicionarNota(10);

console.log(`Aluno: ${aluno1.nome}, Turma: ${aluno1.turma}`);
console.log(`Média das notas: ${aluno1.mediaNotas()}`);