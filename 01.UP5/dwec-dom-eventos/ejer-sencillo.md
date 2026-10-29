#### Requisitos del ejercicio:
1. **Formulario de alta:**
   * Un `<input type="text">` para el texto del aviso.
   * Un `<select>` con las prioridades: *"Alta"* (rojo), *"Media"* (naranja), *"Baja"* (verde).
   * Un botón *"Añadir Aviso"*.

2. **Renderizado de avisos:**
   * Al pulsar añadir, se inserta una tarjeta `<article>` dentro de un contenedor.
   * Cada tarjeta debe mostrar el texto, la prioridad (con un borde del color correspondiente) y dos botones: *"Marcar como leído"* y *"Eliminar"*.
   * Guardar el estado en un atributo `data-estado="pendiente"`.

3. **Interacción mediante Delegación de Eventos:**
   * Al pulsar *"Marcar como leído"*: se cambia el texto del estado a *"Leído"*, la tarjeta pasa a tener opacidad reducida y el botón cambia a *"Marcar como pendiente"*.
   * Al pulsar *"Eliminar"*: la tarjeta se elimina del DOM usando `.closest()`.

4. **Contador dinámico:**
   * En la parte superior debe haber un encabezado `<h3>` que muestre en todo momento cuántos avisos están en estado **"pendiente"**.
