function cambiarColor (id_elemento,color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento () {
    document.getElementById('id_div').innerHTML ='<h1 >Calculador</h1>';
}
function agregarElementoUno (IdelemntoPadre ,html ){
    document.getElementById(IdelemntoPadre).innerHTML =html;
}
function  construirH1(){
    return '<h1 id="id_div_titulo">Titulo del titulo</h1>';
}
function eliminarElemento(idElemento){
    document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento){
    document.getElementById(idElemento).style.display = 'none';
}
function mostarElemento(idElemento){
    document.getElementById(idElemento).style.display = 'block';
}
function evaluarOperacion(tipo){
    let num1=parseFloat(document.getElementById('id_n1').value);
    let num2=parseFloat(document.getElementById('id_n2').value);
    let resultado=0;
    if(tipo === '+'){
        resultado=1;

    }
    if(tipo === '-'){

    }
    if(tipo === '*'){

    }
    if(tipo === '/'){

    }
    document.getElementById('id_resultado').innerHTML=resultado;
}
function sumar(num1, num2){
    return num1 + num2;
}
function restar(num1, num2){
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    return num1 / num2;
}