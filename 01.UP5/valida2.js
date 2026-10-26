const formRegistro = document.querySelector('#formRegistro');
const inputNombre = document.querySelector('#nombre');
const inputMail = document.querySelector('#email');

const errorNombre = document.querySelector('#errorNombre');
const errorEmail = document.querySelector('#errorEmail');

// Expresión regular básica para correo electrónico
const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputNombre.addEventListener('input', () => {
    if (inputNombre.value.trim().length <3){
        errorNombre.style.display = 'block';
        inputNombre.classList.add('invalido');
    } else {
        errorNombre.style.display = 'none';
        inputNombre.classList.remove('invalido');
    }
});

formRegistro.addEventListener('submit', (event) => {

    event.preventDefault();

    let enviarFormulario = true;

    if (inputNombre.value.trim().length <3){
        errorNombre.style.display = 'block';
        inputNombre.classList.add('invalido');
        enviarFormulario = false;
    } else {
        errorNombre.style.display = 'none';
        inputNombre.classList.remove('invalido');
    }
    
    if (!patronEmail.test(inputMail.value)){
        inputMail.classList.add('invalido');
        errorEmail.style.display = 'block';
        enviarFormulario = false;
    } else {
        inputMail.classList.remove('invalido');
        errorEmail.style.display = 'none';
    }

    if (enviarFormulario) {
        alert('¡Formulario validado correctamente en el cliente!');
        // Muestra una ventana emergente avisando al usuario de que la validación ha sido exitosa.

        // formulario.submit(); 
        // (Comentario): En una aplicación real con backend, ejecutaríamos esta línea para procesar y enviar el formulario.
    }
});

