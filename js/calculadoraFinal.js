let num1 = 0; //variables globales
let num2 = 0;
function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function sumar() {

}

function restar() {

}

function multiplicar() {

}

function dividir() {

}

function porcentaje() {

}

function borrarC() {
    let display = document.getElementById('display');
    display.innerText = '';
    num1 = '';
    num2 = '';
}

function borrar() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0,-1);

}