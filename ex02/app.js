/**********************************************************************************************************************************
* Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade                                                 *
* Data: 22/09/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

const calcNotas = require('./modulo/notas');
const readline = require('readline');
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o nome do aluno: ', function (nomeAluno) {
    entradaDados.question('Digite o nome do professor: ', function (nomeProfessor) {
        entradaDados.question('Digite o sexo do aluno: ', function (sexoAluno) {
            entradaDados.question('Digite o sexo do professor: ', function (sexoProfessor) {
                entradaDados.question('Digite o nome do curso: ', function (nomeCurso) {
                    entradaDados.question('Digite o nome da disciplina: ', function (nomeDisciplina) {
                        entradaDados.question('Digite a primeira nota: ', function (nota1) {
                            entradaDados.question('Digite a segunda nota: ', function (nota2) {
                                entradaDados.question('Digite a terceira nota: ', function (nota3) {
                                    entradaDados.question('Digite a quarta nota: ', function (nota4) {
                                        entradaDados.question('Digite a nota do exame: ', function (notaExame) {
                                            calcNotas.calcularNotas(
                                                nomeAluno,
                                                nomeProfessor,
                                                sexoAluno,
                                                sexoProfessor,
                                                nomeCurso,
                                                nomeDisciplina,
                                                nota1,
                                                nota2,
                                                nota3,
                                                nota4,
                                                notaExame
                                            );

                                            entradaDados.close();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
