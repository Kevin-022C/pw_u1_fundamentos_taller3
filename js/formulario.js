function guardar() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {

    let nombre = document.getElementById("id_nombre").value;
    if (nombre === "") {
        mostrarMensaje('Completar la sección con el campo Nombre');
        mostrarAsterisco('id_error_nombre');
        return;
    }

    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        mostrarMensaje('Completar la sección con el campo Apellido');
        mostrarAsterisco('id_error_apellido');
        return;
    }

    let fechaNacimiento = document.getElementById("id_fecha").value;
    if (fechaNacimiento === "") {
        mostrarMensaje('Completar la sección con el campo Fecha de nacimiento');
        mostrarAsterisco('id_error_fecha');
        return;
    }

    let email = document.getElementById("id_email").value;
    if (email === "") {
        mostrarMensaje('Completar la sección con el campo Email');
        mostrarAsterisco('id_error_email');
        return;
    } else if (!validarEmail(email)) {   // ← corregido
        mostrarMensaje('Formato de email inválido');
        mostrarAsterisco('id_error_email');
        return;
    }

    let password = document.getElementById("id_password").value;
    if (password === "") {
        mostrarMensaje('Completar la sección con el campo Contraseña');
        mostrarAsterisco('id_error_password');
        return;
    }

    // Si llega aquí, TODO está validado
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

    // Limpia todos los asteriscos
    const errores = document.querySelectorAll('.error_asterisco');
    errores.forEach(e => e.innerText = '');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}
