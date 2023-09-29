const calculoFatorial = function(nFator){
    
    let numerofatorial = Number(nFator)
    let resultadoFinal = 1
    let cont = 1
    fatorialFixo = numerofatorial



    console.log('Fatorial de [' + numerofatorial + ']')

    
    while(numerofatorial > 1){
        resultadoFinal = resultadoFinal * numerofatorial

        console.log(resultadoFinal)

        numerofatorial--
        cont++

    }
   


}

module.exports = {
    calculoFatorial
}