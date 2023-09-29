const calcularImc = function(pesoF, alturaF) {
    function formatarNumero(numero) {
        return Number(numero.replace(',', '.'));
    }

    if (pesoF === '' || alturaF === '') {
        console.log('ERRO: Preencha todos os valores');
        return false;
    }

    const peso = formatarNumero(pesoF);
    const altura = formatarNumero(alturaF);

    if (isNaN(peso) || isNaN(altura)) {
        console.log('ERRO: Todos os valores devem ser números');
        return false;
    }

    const resultado = peso / (altura ** 2);
    console.log('O IMC é: ' + resultado.toFixed(1));

    let situacao;

    switch (true) {
        case resultado < 18.5:
            situacao = 'Você está abaixo do peso ideal';
            break;
        case resultado >= 18.5 && resultado <= 24.9:
            situacao = 'Você está no peso ideal';
            break;
        case resultado >= 25 && resultado <= 29.9:
            situacao = 'Você está acima do peso';
            break;
        case resultado >= 30 && resultado <= 34.9:
            situacao = 'Você está com obesidade nível 1';
            break;
        case resultado >= 35 && resultado <= 39.9:
            situacao = 'Você está com obesidade nível 2';
            break;
        default:
            situacao = 'Você está com obesidade nível 3';
            break;
    }

    console.log(situacao);

    return true;
};

module.exports = {
    calcularImc
};
