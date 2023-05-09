function calcular() {
    let form = document.forms[0];
    let gasolina = form.gasolina.valueAsNumber;
    let etanol = form.etanol.valueAsNumber;
    let mensagem = document.getElementById("mensagem");
    let formatter = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
    if (gasolina && isNaN(etanol)) {
        mensagem.textContent = `O preço máximo do etanol deve ser ${formatter.format(gasolina * 0.7)}.`;
    } else if (etanol && isNaN(gasolina)) {
        mensagem.textContent = `O preço máximo da gasolina deve ser ${formatter.format(etanol / 0.7)}.`;
    } else if (isNaN(etanol) && isNaN(gasolina)) {
        mensagem.innerHTML = "&nbsp;";
    } else {
        if (etanol / gasolina > 0.7) {
            mensagem.textContent = "É melhor escolher gasolina.";
        } else {
            mensagem.textContent = "É melhor escolher etanol.";
        }
    }
}
function registerEvents() {
    var form = document.forms[0];
    form.gasolina.onkeyup = calcular;
    form.etanol.onkeyup = calcular;
}
window.onload = registerEvents;