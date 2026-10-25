const btn = document.querySelector('#miBoton');
btn.addEventListener('click', () => {
  console.log('Primer escuchador');
});
btn.addEventListener('click', () => {
  console.log('Segundo escuchador');
});