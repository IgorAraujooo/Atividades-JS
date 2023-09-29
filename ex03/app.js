/**********************************************************************************************************************************
* Objetivo: Arquivo de funções para calcular uma tabuada                                                                          *
* Data: 22/09/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

var calcTabuada = require('./modulo/Tabuada.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor da primeira tabuada:', function (valorTabuada1) {
    let primeiraTabuada = valorTabuada1

    entradaDados.question('Digite o valor da segunda tabuada:', function (valorTabuada2) {
        let segundaTabuada = valorTabuada2

        entradaDados.question('Digite o primeiro multiplicador:', function (multiplicador1) {
            let primeiroMultiplicador = multiplicador1

            entradaDados.question('Digite o segundo multiplicador:', function (multiplicador2) {
                let segundoMultiplicador = multiplicador2

                calcTabuada.calculoTabuada(primeiraTabuada, segundaTabuada, primeiroMultiplicador, segundoMultiplicador)

                entradaDados.close
            })
        })
    })
})
