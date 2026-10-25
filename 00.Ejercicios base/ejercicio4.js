const enlaces = document.querySelectorAll('.enlace-seguro');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault();

        const urlDestino = enlace.href;

        const aceptar = confirm(
            `¿Estás seguro de que quieres abandonar esta página e ir a: ${urlDestino}?`
        );

        if (aceptar){
            window.location.href = urlDestino;
        }

    });
});