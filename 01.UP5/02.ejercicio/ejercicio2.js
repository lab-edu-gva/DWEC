// Selección de elementos del DOM
const formReserva = document.querySelector('#formReserva');
const inputFecha = document.querySelector('#fecha');
const selectTipo = document.querySelector('#tipoEntrada');
const checkPolitica = document.querySelector('#politica');

const errorFecha = document.querySelector('#errorFecha');
const errorTipo = document.querySelector('#errorTipo');
const errorPolitica = document.querySelector('#errorPolitica');

formReserva.addEventListener('submit', (event) => {
  // Prevenimos la recarga automática de la página
  event.preventDefault();

  let esValido = true;

  // 1. VALIDACIÓN DE FECHA (No anterior a hoy)
  if (!inputFecha.value) {
    errorFecha.textContent = 'Por favor, selecciona una fecha.';
    errorFecha.style.display = 'block';
    inputFecha.classList.add('invalido');
    esValido = false;
  } else {
    // Convertimos la fecha del input a objeto Date
    const fechaSeleccionada = new Date(inputFecha.value);
    // Creamos la fecha actual y limpiamos las horas/minutos para comparar solo días
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < hoy) {
      errorFecha.textContent = 'La fecha no puede ser anterior al día de hoy.';
      errorFecha.style.display = 'block';
      inputFecha.classList.add('invalido');
      esValido = false;
    } else {
      errorFecha.style.display = 'none';
      inputFecha.classList.remove('invalido');
    }
  }

  // 2. VALIDACIÓN DEL SELECT (No valor vacío)
  if (selectTipo.value === '') {
    errorTipo.style.display = 'block';
    selectTipo.classList.add('invalido');
    esValido = false;
  } else {
    errorTipo.style.display = 'none';
    selectTipo.classList.remove('invalido');
  }

  // 3. VALIDACIÓN DEL CHECKBOX (.checked es booleano)
  if (!checkPolitica.checked) {
    errorPolitica.style.display = 'block';
    esValido = false;
  } else {
    errorPolitica.style.display = 'none';
  }

  // 4. CONFIRMACIÓN FINAL
  if (esValido) {
    alert('¡Reserva realizada con éxito!');
    formReserva.reset(); // Opcional: limpia los campos
  }
});