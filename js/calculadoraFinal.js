let num1 = "";
let num2 = "";
let operador = null;
let escribiendoSegundo = false;


function mostrarDisplay(valor) {
    const display = document.getElementById('display');
    if (["+", "-", "*", "/", "%"].includes(valor)) {

        if (operador && num2) {
            calcular();
        }
        operador = valor;
        escribiendoSegundo = true;
        display.innerText += valor;
    }
    else if (valor === "=") {
        calcular();
    }
    else {
        // si esque hay numero o punto
        if (!escribiendoSegundo) {
            num1 += valor;
        } else {
            num2 += valor;
        }
        display.innerText += valor;
    }
}

function sumar(numeroUno,numeroDos) {
    return numeroUno + numeroDos;
}

function restar(numeroUno,numeroDos) {
    return numeroUno - numeroDos;
}

function multiplicar(numeroUno,numeroDos) {
    return numeroUno * numeroDos;
}

function dividir(numeroUno,numeroDos) {
    return numeroUno / numeroDos;
}

function porcentaje(numeroUno,numeroDos) {
    return numeroUno * (numeroDos/100);
}

function limpiar() {
    num1 = "";
    num2 = "";
    operador = null;
    escribiendoSegundo = false;
    document.getElementById('display').innerText = "";
}

function borrarUltimo() {
    const display = document.getElementById('display');
    let texto = display.innerText;
    if (texto.length === 0) return;
    texto = texto.slice(0, -1);
    display.innerText = texto;

    if (!escribiendoSegundo) {
        num1 = num1.slice(0, -1);
    } else if (escribiendoSegundo && num2.length > 0) {

        num2 = num2.slice(0, -1);
    } else if (escribiendoSegundo && num2.length === 0 && operador) {
        operador = null;
        escribiendoSegundo = false;
    }
}

function calcular() {
    const display = document.getElementById('display');

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let resultado = 0;
    if (isNaN(n1)) return;
    switch (operador) {
        case '+':
            resultado = sumar(n1,n2);
            break;
        case '-':
            resultado = restar(n1,n2);
            break;
        case '*':
            resultado = multiplicar(n1,n2);
            break;
        case '/':
            resultado = n2 !== 0 ? dividir(n1,n2) : "Error";
            break;
        case '%':

            resultado = porcentaje(n1,n2);
            break;
        default:
            resultado = n1;
    }

    display.innerText = resultado;

    // hay que reiniciar las variabkes para que no haya incovenientes
    num1 = resultado.toString();
    num2 = "";
    operador = null;
    escribiendoSegundo = false;
}