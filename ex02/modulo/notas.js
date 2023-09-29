const calcularNotas = function (nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame) {
    let status = false;
    let situacao;

    switch (true) {
        case (nomeAluno === '' || nomeProfessor === '' || sexoAluno === '' || sexoProfessor === '' || nomeCurso === '' || nomeDisciplina === '' || nota1 === '' || nota2 === '' || nota3 === '' || nota4 === ''):
            console.log('ERRO: Todos os campos devem ser preenchidos');
            break;
        case (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)):
            console.log('ERRO: Todas as notas devem ser preenchidas com números');
            break;
        case (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100):
            console.log('ERRO: Todas as notas devem estar entre 0 e 100');
            break;
        default:
            let media = (nota1 + nota2 + nota3 + nota4) / 4;
            let aluno;
            let professor;

            if (sexoAluno.toLowerCase() === 'feminino') {
                aluno = 'A aluna';
            } else {
                aluno = 'O aluno';
            }

            if (sexoProfessor.toLowerCase() === 'Feminino') {
                professor = 'Professora:';
            } else {
                professor = 'Professor:';
            }

            if (media < 50) {
                situacao = 'Reprovado';
            } else if (media >= 50 && media <= 69) {
                situacao = 'Exame';

                if (notaExame > 60) {
                    situacao = 'Aprovado';
                } else {
                    situacao = 'Reprovado';
                }
            } else {
                situacao = 'aprovado';
            }

            console.log('\nRELATÓRIO DO ALUNO:');
            console.log('\n' + aluno + ' ' + nomeAluno + ' foi ' + situacao + ' na disciplina ' + nomeDisciplina + '.');
            console.log('Curso:' + nomeCurso);
            console.log(professor + nomeProfessor);
            console.log('Notas do ' + aluno + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4);
            console.log('Média final: ' + media);

            if (situacao === 'exame') {
                console.log('Média final do exame: ' + notaExame);
            }

            status = true;
            break;
    }

    return status;
};

module.exports = {
    calcularNotas
};
