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
        resultado = sumar(num1, num2);

    }
    if(tipo === '-'){
        resultado = restar(num1, num2);
    }
    if(tipo === '*'){
        resultado = multiplicar(num1, num2);
    }
    if(tipo === '/'){
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText=resultado;
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


function fundamentosJS() {
    /* tres tipós de variables*/
    var nomnbre = "Edison ";// obsoleta
    let apellido = "Celi";// variables cambiantes
    let apellido2 = 15;
    apellido2 = "Jami";

    let arreglo = [1, 2, 3, 4, 5, 6];
    let diaSemana = ['luynes', 'martes', '...'];// si no le pones ; igual funciona
    const IVA = 12.8;
    console.log('Fundamentos de Js');
    console.log(nomnbre);
    console.log(IVA);
    console.log(arreglo);
    // arreglos
    // lo mas comun es que declaremos como constantes
    const arreglosDiasSemanas = ['lunes', 'martes', 'Miercoles'];
    arreglosDiasSemanas.push('jueves');
    console.log(arreglosDiasSemanas);
    arreglosDiasSemanas.unshift('dias');
    console.log(arreglosDiasSemanas);
    console.log(arreglosDiasSemanas[0]);
    console.log('manejo de nulos,undefined y vacio');
    arreglosDiasSemanas.push(null);
    arreglosDiasSemanas.push('');
    console.log(arreglosDiasSemanas[5]);// nullo
    console.log(arreglosDiasSemanas[6]);// vacio
    console.log(arreglosDiasSemanas[7]);// undefined

    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);
    /*
    sentencias de control
    */
    let edad = 19;
    if (edad >= 18) {
        console.log('es mayor de edad')
    } else {
        console.log('es menor de edad')
    }

    let dia = 'lunes';
    switch (dia) {
        case 'lunes':
            console.log('es lunes')
            break;
        case 'martes':
            console.log('es martes')
            break;
        case 'miercoles':
            console.log('es miercoles')
            break;
        case 'jueves':
            console.log('es jueves')
            break;
        case 'viernes':
            console.log('es viernes')
            break;
        default:
            console.log('no es ninguno de esos dias')

    }

    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    // of es para iterar en for  de manera for aech arreglos

    const frutas = ['mazana', 'sandia', 'papaya', 'naranja']
    for (let fruta of frutas) {
        console.log(fruta)
    }

    // manejo de objetos en js
    const profesor = {
        nombre: 'edison',
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'quito'

    }
    console.log(profesor);

    console.log(profesor.nombre);
    profesor.apellido = 'Jami';
    console.log(profesor);

    if (profesor.ciudad === 'quito') {
        console.log('Es  Quiteño');

    }
    if (profesor.edad !== 36) {
        console.log('Es diferente 36')
    } else {
        console.log('es 36')
    }

    for (let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);
    }
}