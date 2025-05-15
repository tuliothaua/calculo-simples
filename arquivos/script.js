// Declarando as variáveis fora das funções para ficarem acessíveis em todas
let num1;
let num2;

function click1() {
    num1 = prompt("Digite um valor: ");
    num1 = parseFloat(num1);
    document.getElementById("btn1").innerText = num1;
}

function click2() {
    num2 = prompt("Digite um valor: ");
    num2 = parseFloat(num2);
    document.getElementById("btn2").innerText = num2;
}

function click3() {
    let resultado;
    let ope = prompt("Digite a operação desejada (+ ou -):");

    if (ope === "+") {
        resultado = num1 + num2;
    } else if (ope === "-") {
        resultado = num1 - num2;
    } else {
        resultado = "Operação inválida!";
    }

    confirm(
        "Primeiro número escolhido: " +
            num1 +
            "\nSegundo número escolhido: " +
            num2 +
            "\nOperação escolhida: " +
            ope
    );
    document.getElementById("btn3").innerText = ope;
    document.getElementById("res").innerText = "Resultado: " + resultado;
    alert("Resultado: " + resultado);
}