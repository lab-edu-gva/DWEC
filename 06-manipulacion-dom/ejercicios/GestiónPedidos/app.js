const tablaPedidos = document.querySelector('#tablaPedidos');

tablaPedidos.addEventListener('click', (event) => {

    console.log(event.target);

    if(event.target.classList.contains('menos')){

        console.log("estamos en menos");
    }

});