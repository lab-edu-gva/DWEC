const inputBuscador = document.querySelector('#buscador');
const items = document.querySelectorAll('#listaLenguajes li');

inputBuscador.addEventListener('input', (event) => {
    const textoFiltro = event.target.value.toLowerCase();

    items.forEach(li => {
        const coincidencia = li.textContent
            .toLowerCase()
            .includes(textoFiltro);

        li.style.display = coincidencia ? '' : 'none';
    });
});