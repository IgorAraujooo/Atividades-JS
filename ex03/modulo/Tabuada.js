const calculoTabuada = function(valorTabuada1, valorTabuada2, multiplicador1, multiplicador2) {
    let resultado1, resultado2;

    switch (true) {
        case valorTabuada1 < 2 || valorTabuada1 > 100 || valorTabuada2 < 2 || valorTabuada2 > 100:
            console.log('ERRO: Os valores das tabuadas devem estar entre 2 e 100');
            return false;
        case multiplicador1 < 1 || multiplicador1 > 50 || multiplicador2 < 1 || multiplicador2 > 50:
            console.log('ERRO: Os valores dos multiplicadores devem estar entre 1 e 50');
            return false;
        case !valorTabuada1 || !valorTabuada2 || !multiplicador1 || !multiplicador2:
            console.log('ERRO: Todos os valores devem ser informados');
            return false;
        case isNaN(valorTabuada1) || isNaN(valorTabuada2) || isNaN(multiplicador1) || isNaN(multiplicador2):
            console.log('ERRO: Todos os valores devem ser números');
            return false;
        default:
            console.log('Tabuada do [' + valorTabuada1 + ']');
            for (let i = 0; (Number(i) + Number(multiplicador1)) <= (multiplicador2); i++) {
                resultado1 = valorTabuada1 * (Number(multiplicador1) + Number(i));
                console.log(valorTabuada1 + 'x' + (Number(multiplicador1) + Number(i)) + ' = ' + resultado1);
            }

            console.log('Tabuada do [' + valorTabuada2 + ']');
            for (let i = 0; (Number(i) + Number(multiplicador1)) <= (multiplicador2); i++) {
                resultado2 = valorTabuada2 * (Number(multiplicador1) + Number(i));
                console.log(valorTabuada2 + 'x' + (Number(multiplicador1) + Number(i)) + ' = ' + resultado2);
            }
            return true;
    }
};

module.exports = {
    calculoTabuada
};
