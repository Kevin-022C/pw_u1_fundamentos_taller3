function guardar() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {
    let tieneErrores = false;
    
    let nombre = document.getElementById("id_nombre_card").value;
    if (nombre === "") {
        mostrarAsterisco('id_error_nombre_card');
        tieneErrores = true;
    }

    let card = document.getElementById("id_number_card").value;
    if (card === "") {
        mostrarAsterisco('id_error_numero_card');
        tieneErrores = true;
    }

    let fechaExpiracion = document.getElementById("id_fecha_exp").value;
    if (fechaExpiracion === "") {
        mostrarAsterisco('id_error_expire_date');
        tieneErrores = true;
    }

    
    let cvv = document.getElementById("id_numero_cvv").value;
     if (cvv === "") {
        mostrarAsterisco('id_error_cvv');
        tieneErrores = true;
    }

    if (tieneErrores) {
        mostrarMensaje('Completar campos obligatorios');
        return;
    }
    
    alert("Formulario validado correctamente");
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}