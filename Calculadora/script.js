function calcular(event) {
    event.preventDefault();
    var n1 = parseFloat(document.getElementById("valor1").value);
    var n2 = parseFloat(document.getElementById("valor2").value);
    var operacao = document.getElementById("operacao").value;

    if (operacao == 1) {
        var resultado = (n1 + n2);
        document.getElementById("resultado").value = resultado;
    }
    else if (operacao == 2) {
        var resultado = (n1 - n2);
        document.getElementById("resultado").value = resultado;
    }
    else if (operacao == 3) {
        var resultado = (n1 * n2);
        document.getElementById("resultado").value = resultado;
    }
    else {
        var resultado = (n1 / n2);
        document.getElementById("resultado").value = resultado;
    }
}