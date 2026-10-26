const formulario = document.querySelector('#formRegistro');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');

const errorNombre = document.querySelector('#errorNombre');
const errorEmail = document.querySelector('#errorEmail');

// Expresión regular básica para correo electrónico
const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputNombre.addEventListener('input', () => {
    
    if (inputNombre.value.trim().length < 3){
        errorNombre.style.display = 'block';
        inputNombre.classList.add('invalido');
    }
    else{
        errorNombre.style.display = 'none';
        inputNombre.classList.remove('invalido');
    }
});

formulario.addEventListener('submit', (event) => {

    event.preventDefault();
    let formularioValido = true;

    if (inputNombre.value.trim().length < 3){
        errorNombre.style.display = 'block';
        formularioValido = false;
    }

    if (!patronEmail.test(inputEmail.value.trim())){
        errorEmail.style.display = 'block';
        inputEmail.classList.add('invalido');
        formularioValido = false;
    } else {
        errorEmail.style.display = 'none';
        inputEmail.classList.remove('invalido');
    }

    if (formularioValido) {
        alert('¡Formulario validado correctamente en el cliente!');
        // Muestra una ventana emergente avisando al usuario de que la validación ha sido exitosa.

        // formulario.submit(); 
        // (Comentario): En una aplicación real con backend, ejecutaríamos esta línea para procesar y enviar el formulario.
    }
    });
