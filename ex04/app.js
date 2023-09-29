/**********************************************************************************************************************************
* Objetivo: Calcular fatoração                                                                                                    *
* Data: 22/09/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

var calcFatorial = require('./modulo/fatorial.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número a ser fatoriado: ' , function(valorFatorial){
    vFatorial = valorFatorial

    calcFatorial.calculoFatorial(vFatorial)
})