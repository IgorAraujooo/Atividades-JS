/**********************************************************************************************************************************
* Objetivo: Realizar o cálculo de IMC                                                                                             *
* Data: 22/09/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

var calcImc = require('./modulo/imc.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o peso: ', function(pesoUsuario){
    let peso = pesoUsuario

    entradaDados.question('Digite a altura: ', function(alturaUsuario){
        let altura = alturaUsuario

        calcImc.calcularImc(peso, altura)

        entradaDados.close()
    })
})
