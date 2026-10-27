// Selección de elementos del DOM
const formPassword = document.querySelector('#formPassword');
const inputActual = document.querySelector('#actual');
const inputNueva = document.querySelector('#nueva');
const inputRepetir = document.querySelector('#repetir');

const errorActual = document.querySelector('#errorActual');
const errorNueva = document.querySelector('#errorNueva');
const errorRepetir = document.querySelector('#errorRepetir');

// --- FEEDBACK EN TIEMPO REAL (Evento 'input' en repetir contraseña) ---
inputRepetir.addEventListener('input', () => {
  const nuevaVal = inputNueva.value;
  const repetirVal = inputRepetir.value;

  // Solo evaluamos si el usuario ha empezado a escribir en repetir
  if (repetirVal.length > 0) {
    if (nuevaVal === repetirVal) {
      inputRepetir.classList.add('coincide');
      inputRepetir.classList.remove('no-coincide');
      errorRepetir.style.display = 'none';
    } else {
      inputRepetir.classList.add('no-coincide');
      inputRepetir.classList.remove('coincide');
      errorRepetir.style.display = 'block';
    }
  } else {
    inputRepetir.classList.remove('coincide', 'no-coincide');
    errorRepetir.style.display = 'none';
  }
});


// --- VALIDACIÓN AL ENVIAR EL FORMULARIO ---
formPassword.addEventListener('submit', (event) => {
  event.preventDefault();

  let esValido = true;

  const actualVal = inputActual.value.trim();
  const nuevaVal = inputNueva.value;
  const repetirVal = inputRepetir.value;

  // 1. VALIDACIÓN CONTRASEÑA ACTUAL
  if (actualVal === '') {
    errorActual.style.display = 'block';
    esValido = false;
  } else {
    errorActual.style.display = 'none';
  }

  // 2. VALIDACIÓN NUEVA CONTRASEÑA (Longitud, mayúscula, número y diferente a la actual)
  const tieneLongitud = nuevaVal.length >= 8;
  const tieneNumero = /\d/.test(nuevaVal);        // Expresión regular: al menos un dígito
  const tieneMayuscula = /[A-Z]/.test(nuevaVal);  // Expresión regular: al menos una mayúscula
  const esDiferente = nuevaVal !== actualVal;

  if (!tieneLongitud || !tieneNumero || !tieneMayuscula || !esDiferente) {
    errorNueva.style.display = 'block';
    esValido = false;
  } else {
    errorNueva.style.display = 'none';
  }

  // 3. VALIDACIÓN COINCIDENCIA DE CONTRASEÑAS
  if (repetirVal === '' || nuevaVal !== repetirVal) {
    errorRepetir.style.display = 'block';
    inputRepetir.classList.add('no-coincide');
    inputRepetir.classList.remove('coincide');
    esValido = false;
  } else {
    errorRepetir.style.display = 'none';
    inputRepetir.classList.add('coincide');
    inputRepetir.classList.remove('no-coincide');
  }

  // 4. CONFIRMACIÓN FINAL
  if (esValido) {
    alert('¡Contraseña actualizada correctamente!');
    formPassword.reset();
    inputRepetir.classList.remove('coincide', 'no-coincide');
  }
});