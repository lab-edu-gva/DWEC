const tablaEntregas = document.querySelector('#tablaEntregas');

tablaEntregas.addEventListener('click', (event) => {
    const boton = event.target.closest("button");
    
    if(boton.classList.contains("btn") ) {
        const filaContenedora = boton.closest('tr');
        console.log(filaContenedora.firstElementChild.textContent)
        if(boton.classList.contains("btn-estado") ) {
            filaContenedora.classList.toggle('entregado');
            const textoMod = filaContenedora.querySelector('.estado-texto');
            if (textoMod.textContent=="Entregado"){
                textoMod.textContent="Pendiente"
            } else {
                textoMod.textContent="Entregado"
            }
            console.log("Estoy en entregado");
        }
        if(boton.classList.contains("btn-borrar") ) {
            filaContenedora.remove();
            console.log("Estoy en borrar");
        }
    }
});