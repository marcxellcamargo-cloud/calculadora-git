let numeroAtual = '';
let numeroAnterior = '';
let operacao = null;

function digitar(num) {
    numeroAtual += num;
    atualizarDisplay();
}

function limpar() {
    numeroAtual = '';
    numeroAnterior = '';
    operacao = null;
    atualizarDisplay('0');
}

function inverter() {
    if (numeroAtual !== '') {
        numeroAtual = String(-parseFloat(numeroAtual));
        atualizarDisplay();
    }
}

function porcentagem() {
    if (numeroAtual !== '') {
        numeroAtual = String(parseFloat(numeroAtual) / 100);
        atualizarDisplay();
    }
}

function operar(op) {
    if (numeroAtual === '') return;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
    operacao = op;
}

function calcular() {
    if (!operacao || numeroAtual === '' || numeroAnterior === '') return;

    const anterior = parseFloat(numeroAnterior);
    const atual = parseFloat(numeroAtual);
    let resultado;

    switch (operacao) {
        case '+': resultado = anterior + atual; break;
        case '-': resultado = anterior - atual; break;
        case '*': resultado = anterior * atual; break;
        case '/': resultado = atual === 0 ? 'Erro' : anterior / atual; break;
    }

    numeroAtual = String(resultado);
    operacao = null;
    atualizarDisplay();
}

function atualizarDisplay(valor) {
    document.getElementById('resultado').innerText = valor || numeroAtual || '0';
}
