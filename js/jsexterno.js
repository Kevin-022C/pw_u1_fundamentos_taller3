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


/**
 * fundamentos de js parte 1
 */
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

    /**
     * aqui se abordaran los ultimos temas de fundamentos de js
     * fundamentos de js parte 2
     */
    console.log("Desestructuración")
    const e1 = {
        nombre:'Mateo',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito'
    }

    const e2 = {
        nombre:'Kevin',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito'
    }


    const arregloEstudiantes = [e1,e2, {
        nombre:'Kevin3',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito'
    }, {
        nombre:'Kevin4',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito'
    }];
    console.log(arregloEstudiantes[0]);
    console.log(arregloEstudiantes[2]);
    console.log(arregloEstudiantes[3]);

    /*Desestructuracion*/
    //Arreglos
    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [p1, p2, p3, p4, p5] = ar1;
    console.log(p1);
    console.log(p4);
    console.log('')

    const [primero, , , , , ,ultimo] = ar1;
    console.log(primero);
    console.log(ultimo);

    //en 1 paso
    const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(ar1);

    //Objetos
    const e3 = {
        nombre:'Kevin',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito'
    }

    const {nombre, ciudad} = e3;
    console.log(nombre);
    console.log(ciudad);

    //en 1 paso
    const {nombre:n, ciudad:ciu} = {
        nombre:'Kevin',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito'
    }
    console.log(n);
    console.log(ciu);
    console.log('');

    const e4 = {
        nombre:'Kevin',
        apellido:'Cayambe',
        edad:23,
        ecuatoriano: true,
        genero:'M',
        ciudad:'quito',
        direccion: {
            calle: "Av. America",
            barrio: "La Gasca",
            numeracion: "2343"
        }
    }
    console.log(e4.direccion);
    console.log(e4.direccion.barrio);

    //desestructurar un objeto
    const {edad:ed, direccion} = e4;
    console.log(ed);
    console.log(direccion);

    const {calle} = direccion;
    console.log(calle);
    console.log('');

    //en 1 paso
    const {direccion:{barrio, calle:c1, numeracion}} = e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);

    //console.log(ed); //con desestructuracion puedo reutilizar el ed para optimizar la memoria
}
function imprime([a, b, c]){
    console.log(a);
    console.log(b);
    console.log(c);
}