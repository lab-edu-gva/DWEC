const btnSumar = document.querySelector('#sumar');
const btnRestar = document.querySelector('#restar');
const btnResetear = document.querySelector('#resetear');
const contador = document.querySelector('#contador');
const evento = document.querySelector('#info');

let valorContador = 0;

/*
Creamos un evento para cada botón, que al hacer click, se ejecuta la función correspondiente.
- El botón de sumar incrementa el valor del contador en 1.
- El botón de restar decrementa el valor del contador en 1, pero solo si el valor es mayor que 0.
- El botón de resetear pone el valor del contador a 0.

Cada vez que se hace click en un botón, se actualiza el contenido del elemento contador con el nuevo valor.
*/

btnSumar.addEventListener('click', () => {
  valorContador++;
  contador.textContent = valorContador;
});

btnRestar.addEventListener('click', () => {
    if (valorContador > 0) {
        valorContador--;
        contador.textContent = valorContador;
    }
});

btnResetear.addEventListener('click', () => {
  valorContador = 0;
  contador.textContent = valorContador;
});

/* Creamos la función actualizarContador que recibe el evento, el valor a sumar o restar y un booleano para resetear.
- Si reset es true, el valor del contador se pone a 0.
- Si reset es false, el valor del contador se incrementa o decrementa según el valor recibido.
- Actualizamos el contenido del elemento contador con el nuevo valor.
- Actualizamos el contenido del elemento evento con la última acción realizada.
- Imprimimos en consola información sobre el evento y el elemento que lo disparó.
*/

/*
function actualizarContador(e, valor, reset = false) {
    valorContador = reset ? 0 : valorContador + valor;
    contador.textContent = valorContador;
    evento.textContent = `Última acción: ${e.target.textContent}`;
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.textContent);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.attributes);
    console.log(e.target.parentElement);
}

btnSumar.addEventListener('click', (e) => {
    actualizarContador(e, 1);
});

btnRestar.addEventListener('click', (e) => {
    if (valorContador > 0) {
        actualizarContador(e, -1);
    }
});

btnResetear.addEventListener('click', (e) => {
    actualizarContador(e, 0, true);
});
*/