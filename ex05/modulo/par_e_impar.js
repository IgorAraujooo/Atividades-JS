const verificarParEImpar = function(nI, nF, decisaoU) {
    switch (true) {
        case nI < 0 || nI > 100:
            console.log('ERRO: O primeiro valor deve estar entre 0 e 100');
            return false;

        case nF < 100 || nF > 1000:
            console.log('ERRO: O segundo valor deve estar entre 100 e 1000');
            return false;

        case nI === '' || nF === '':
            console.log('ERRO: Os valores devem ser preenchidos');
            return false;

        case Number(nF) < Number(nI):
            console.log('ERRO: O primeiro valor não pode ser maior que o segundo');
            return false;

        case nI === nF:
            console.log('ERRO: Os dois valores não podem ser iguais');
            return false;

        case decisaoU.toLowerCase() === 'par':
            console.log('Números pares:');
            return calcularPares(nI, nF);

        case decisaoU.toLowerCase() === 'ímpar':
            console.log('Números ímpares:');
            return calcularImpares(nI, nF);

        case decisaoU.toLowerCase() === 'ambos':
            console.log('Números pares:');
            const statusPar = calcularPares(nI, nF);
            console.log('Números ímpares:');
            const statusImpar = calcularImpares(nI, nF);
            return statusPar && statusImpar;

        default:
            console.log('Decisão inválida');
            return false;
    }
};

function calcularPares(numeroInicial, numeroFinal) {
    let qtdI = 0;
    for (let i = 0; numeroInicial + i <= numeroFinal; i++) {
        const resultado = Number(numeroInicial) + i;
        if (resultado % 2 === 0) {
            console.log(resultado);
            qtdI++;
        }
    }
    console.log('Quantidade de números pares: ' + qtdI);
    return true;
}

function calcularImpares(numeroInicial, numeroFinal) {
    let qtdIi = 0;
    for (let i = 0; numeroInicial + i <= numeroFinal; i++) {
        const resultado = Number(numeroInicial) + i;
        if (resultado % 2 !== 0) {
            console.log(resultado);
            qtdIi++;
        }
    }
    console.log('Quantidade de números ímpares: ' + qtdIi);
    return true;
}

module.exports = {
    verificarParEImpar
};
