/**********************************************************************************************************************************
* Objetivo: Criar um sistema que gerencie números pares e ímpares                                                                 *
* Data: 22/09/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

var calculoParEImpar = require('./modulo/par_e_impar.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro valor: ', function(valorIni){
      vI = valorIni

      entradaDados.question('Digite o segundo valor: ', function(valorFin){
        vF = valorFin

        entradaDados.question('Par, Ímpar ou Ambos?', function(decisaoUsuario){
            decisaoU = decisaoUsuario

            calculoParEImpar.verificarParEImpar(Number(vI), Number(vF), decisaoU)
        })
      })
})
