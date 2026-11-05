# Sesión Didáctica 1: Objeto String y Métodos de Cadena (UP3)

## 1. Ficha de la Sesión

* **Unidad de Programación:** UP3 - Objetos predefinidos del lenguaje, BOM y almacenamiento (*RA03*).
* **Duración:** 1 hora lectiva (60 minutos).
* **Distribución temporal:** 20 minutos de explicación teórica en pizarra + 40 minutos de trabajo práctico individual/parejas.
* **Requisitos previos:** Manipulación básica del DOM (`querySelector`, `textContent`) y gestión de eventos (`submit`).

---

## 2. Contenido Teórico para la Pizarra (20 min)

### Concepto Clave: Inmutabilidad
En JavaScript, las cadenas de texto son **inmutables**. Ningún método modifica la cadena original; todos los métodos devuelven una **nueva cadena** con los cambios aplicados.

### Propiedad Principal
* `cadena.length`: Devuelve el número total de caracteres (incluyendo espacios en blanco).

### Métodos de Búsqueda y Comprobación
* `cadena.includes(subcadena)`: Devuelve `true` o `false` si el texto contiene la subcadena indicada.
* `cadena.indexOf(subcadena)`: Devuelve la posición de la primera aparición de la subcadena, o `-1` si no existe.
* `cadena.startsWith(subcadena)` / `cadena.endsWith(subcadena)`: Comprueban si el texto empieza o termina por dicha subcadena (`true`/`false`).

### Métodos de Extracción
* `cadena.slice(inicio, fin)`: Extrae una sección desde el índice `inicio` hasta `fin` (sin incluir `fin`). Admite índices negativos para contar desde el final.
* `cadena.substring(inicio, fin)`: Extrae caracteres entre dos índices (similar a `slice`, pero no acepta índices negativos).
* `cadena.charAt(posicion)`: Devuelve el carácter situado en la posición indicada.

### Métodos de Transformación y Limpieza
* `cadena.trim()`: Elimina los espacios en blanco al inicio y al final de la cadena.
* `cadena.toLowerCase()` / `cadena.toUpperCase()`: Convierte todo el texto a minúsculas o mayúsculas respectivamente.
* `cadena.replace(buscar, reemplazar)` / `cadena.replaceAll(buscar, reemplazar)`: Reemplaza la primera o todas las apariciones de una subcadena.
* `cadena.split(separador)`: Divide la cadena según un delimitador y devuelve un arreglo (`Array`) de subcadenas.

---

## 3. Ejercicio Práctico de Aula: Sanitizador de Comentarios (40 min)

### Objetivo
Diseñar un script interactivo en JavaScript que valide, limpie y transforme el nombre y el comentario introducidos por un usuario en un formulario web antes de renderizarlos en el DOM.

### Requisitos Funcionales
1. **Limpieza del Nombre:**
   * Eliminar espacios sobrantes al inicio y al final con `.trim()`.
   * Formatear el nombre de modo que la primera letra sea mayúscula y las demás minúsculas (ejemplo: `"  mARíA  "` se transforma en `"María"`).
2. **Filtrado del Comentario:**
   * Censurar la palabra prohibida `"spam"` (independientemente de si está en mayúsculas o minúsculas) y reemplazarla por `"***"`.
   * Comprobar si el comentario contiene la palabra `"urgente"`. Si es así, añadir la clase CSS `.urgente` al contenedor de resultado.
3. **Métricas en Pantalla:**
   * Mostrar la longitud original del comentario frente a la longitud procesada utilizando la propiedad `.length`.

---

## 4. Código HTML Base (index.html)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DÍA 1 - Limpiador de Textos (String)</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
      background-color: #f4f6f8;
    }
    .card {
      background: white;
      padding: 25px;
      border-radius: 8px;
      max-width: 500px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .campo {
      margin-bottom: 15px;
    }
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      background: #0066cc;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover {
      background: #0052a3;
    }
    .resultado {
      margin-top: 20px;
      padding: 15px;
      border-left: 4px solid #0066cc;
      background: #eef6ff;
      border-radius: 0 4px 4px 0;
    }
    .urgente {
      border-left-color: #d9534f;
      background: #fdf2f2;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2>Sanitizador de Comentarios</h2>
    <form id="formTexto">
      <div class="campo">
        <label for="inputNombre">Nombre del usuario:</label>
        <input type="text" id="inputNombre" placeholder="ej.   mARíA  ">
      </div>
      <div class="campo">
        <label for="inputComentario">Comentario:</label>
        <textarea id="inputComentario" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
      </div>
      <button type="submit">Procesar y Publicar</button>
    </form>

    <div id="boxResultado" class="resultado" style="display: none;">
      <h3 id="resUsuario"></h3>
      <p id="resComentario"></p>
      <small id="resMetricas"></small>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```
