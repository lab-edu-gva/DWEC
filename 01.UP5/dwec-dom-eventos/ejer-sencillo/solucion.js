const form = document.querySelector('#formAviso');
const inputTexto = document.querySelector('#textoAviso');
const selectPrioridad = document.querySelector('#prioridadAviso');
const contenedor = document.querySelector('#contenedorAvisos');
const numPendientesSpan = document.querySelector('#numPendientes');

// Función auxiliar para actualizar el contador de avisos pendientes
function actualizarContador() {
  const pendientes = contenedor.querySelectorAll('.aviso[data-estado="pendiente"]').length;
  numPendientesSpan.textContent = pendientes;
}

// 1. Añadir nuevo aviso
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const texto = inputTexto.value.trim();
  const prioridad = selectPrioridad.value;

  if (!texto) return;

  const aviso = document.createElement('article');
  aviso.className = `aviso ${prioridad}`;
  aviso.dataset.estado = 'pendiente';

  aviso.innerHTML = `
    <p><strong>[${prioridad.toUpperCase()}]</strong> ${texto}</p>
    <div class="acciones">
      <button class="btn-estado">Marcar como leído</button>
      <button class="btn-borrar">Eliminar</button>
    </div>
  `;

  contenedor.appendChild(aviso);
  inputTexto.value = '';
  actualizarContador();
});

// 2. Delegación de eventos para Cambiar Estado y Eliminar
contenedor.addEventListener('click', (e) => {
  const target = e.target;
  const aviso = target.closest('.aviso');

  if (!aviso) return;

  // Cambiar estado leido / pendiente
  if (target.classList.contains('btn-estado')) {
    const esPendiente = aviso.dataset.estado === 'pendiente';
    aviso.dataset.estado = esPendiente ? 'leido' : 'pendiente';
    aviso.classList.toggle('leido', esPendiente);
    target.textContent = esPendiente ? 'Marcar como pendiente' : 'Marcar como leído';
    actualizarContador();
  }

  // Eliminar aviso
  if (target.classList.contains('btn-borrar')) {
    aviso.remove();
    actualizarContador();
  }
});
