# 📝 Ejercicio de Aula: Gestor de Entregas DAW (DOM Traversing)

**Unidad:** UP6 - Manipulación del DOM (*RA06*)  
**Módulo:** Desarrollo Web en Entorno Cliente (DWEC)  
**Duración estimada:** 20 - 25 minutos  
**Objetivo:** Practicar la navegación por el árbol DOM (`closest()`, `firstElementChild`, `querySelector`), la manipulación de clases dinámicas y la delegación de eventos.

---

## 📌 Enunciado para el Alumnado

Dado el siguiente código HTML base que muestra un listado de entregas de tareas, debes implementar la lógica en JavaScript para gestionar el estado de las entregas y la eliminación de filas mediante delegación de eventos.

---

## 1. Código HTML Base (`index.html`)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Gestor de Entregas DAW</title>
  <style>
    body { font-family: sans-serif; margin: 20px; background-color: #f8f9fa; }
    h2 { color: #333; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background-color: #f0f0f0; }
    
    /* Clases de estado */
    tr.entregado { background-color: #e8f5e9; }
    tr.entregado td.estado-texto { color: #2e7d32; font-weight: bold; }
    
    .btn { padding: 6px 12px; cursor: pointer; margin-right: 5px; border-radius: 4px; }
    .btn-estado { background-color: #2196f3; color: white; border: none; }
    .btn-borrar { background-color: #f44336; color: white; border: none; }
  </style>
</head>
<body>

  <h2>Listado de Entregas - Práctica DOM</h2>

  <table id="tablaEntregas">
    <thead>
      <tr>
        <th>Alumno/a</th>
        <th>Tarea</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Laura Martínez</td>
        <td>Validación de Formularios</td>
        <td class="estado-texto">Pendiente</td>
        <td>
          <button class="btn btn-estado"><span>Cambiar Estado</span></button>
          <button class="btn btn-borrar">Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Carlos Gómez</td>
        <td>Validación de Formularios</td>
        <td class="estado-texto">Pendiente</td>
        <td>
          <button class="btn btn-estado"><span>Cambiar Estado</span></button>
          <button class="btn btn-borrar">Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Ana Belén Rius</td>
        <td>Validación de Formularios</td>
        <td class="estado-texto">Pendiente</td>
        <td>
          <button class="btn btn-estado"><span>Cambiar Estado</span></button>
          <button class="btn btn-borrar">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>

  <script src="app.js"></script>
</body>
</html>
```

---

## ⚙️ Requisitos Funcionales

1. **Delegación de Eventos:** Asigna un **único evento `click`** al contenedor principal de la tabla (`<table id="tablaEntregas">`).
2. **Localización de la fila mediante `closest()`:** 
   * Al hacer clic en cualquier botón (ojo: el botón "Cambiar Estado" contiene una etiqueta interna `<span>`), localiza la fila contenedora `<tr>` utilizando `event.target.closest('tr')`.
3. **Acción 1 — Cambiar Estado:**
   * Al pulsar sobre el botón con clase `.btn-estado`:
     * Alterna la clase CSS `.entregado` en la fila `<tr>`.
     * Accede a la celda de estado (`<td class="estado-texto">`) mediante navegación DOM y cambia su texto a **"Entregado"** o **"Pendiente"** según corresponda.
     * Muestra en la consola del navegador el nombre del alumno obtenido desde la primera celda (`fila.firstElementChild.textContent`).
4. **Acción 2 — Eliminar Fila:**
   * Al pulsar sobre el botón con clase `.btn-borrar`, elimina la fila `<tr>` completa del DOM usando el método `.remove()`.

---

## 💻 Solución para el Profesorado (`app.js`)

```javascript
// Selección del contenedor principal
const tabla = document.querySelector('#tablaEntregas');

// Delegación de eventos en la tabla (un solo listener)
tabla.addEventListener('click', (event) => {
  const objetivo = event.target;

  // Localizamos la fila <tr> más cercana hacia arriba
  const fila = objetivo.closest('tr');

  // Si el clic no ocurre dentro de un <tr> o está en el <thead>, salimos
  if (!fila || fila.parentElement.tagName === 'THEAD') return;

  // 1. Botón Cambiar Estado (comprueba si el clic fue en el botón o en su <span> interno)
  if (objetivo.closest('.btn-estado')) {
    // Alternamos la clase CSS en la fila
    fila.classList.toggle('entregado');

    // Navegación DOM para actualizar la celda de estado
    const celdaEstado = fila.querySelector('.estado-texto');
    const estaEntregado = fila.classList.contains('entregado');
    celdaEstado.textContent = estaEntregado ? 'Entregado' : 'Pendiente';

    // Obtención del nombre mediante firstElementChild
    const nombreAlumno = fila.firstElementChild.textContent;
    console.log(`Estado actualizado para: ${nombreAlumno} -> ${celdaEstado.textContent}`);
  }

  // 2. Botón Eliminar
  if (objetivo.closest('.btn-borrar')) {
    const nombreAlumno = fila.firstElementChild.textContent;
    fila.remove();
    console.log(`Fila eliminada: ${nombreAlumno}`);
  }
});
```
