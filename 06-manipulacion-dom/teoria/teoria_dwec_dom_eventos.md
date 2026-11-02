# Apuntes de Teoría y Guion Docente: Manipulación del DOM y Eventos Avanzados

**Módulo:** Desarrollo Web en Entorno Cliente (DWEC) — 2º DAW  
**Bloque Temático:** Unidad de Programación 5 (Eventos y Formularios) y Unidad de Programación 6 (Manipulación del DOM)  
**Duración:** 3 Horas Lectivas  
**Público Objetivo:** Alumnado de Formación Profesional (CFGS DAW)

---

## 📋 Resumen de la Estructura por Horas

* **Hora 1:** Selección Avanzada de Elementos y Navegación por el Árbol DOM (*DOM Traversing*).
* **Hora 2:** Creación, Modificación, Gestión de Estilos (`classList`/`dataset`) y Destrucción de Nodos.
* **Hora 3:** Ciclo de Vida de los Eventos (Burbujeo), Patrón de Delegación (*Event Delegation*) e Introducción a Persistencia Local (`localStorage`).

---

## ⏰ HORA 1: Selección Avanzada y Navegación por el Árbol DOM

### 1.1 El DOM como Estrategia de Árbol de Objetos

El **DOM (*Document Object Model*)** es una interfaz de programación de aplicaciones (API) proporcionada por el navegador que representa cualquier documento HTML como una estructura jerárquica de árbol en memoria RAM.

```
                  [document]
                      │
                    [html]
           ┌──────────┴──────────┐
        [head]                 [body]
           │              ┌──────┴──────┐
        [title]         [h1]          [ul]
                          │         ┌───┴───┐
                       "Título"   [li]     [li]
```

#### Concepto Clave: Nodos vs. Elementos
* **Nodo (`Node`):** Cualquier punto del árbol DOM. Incluye etiquetas HTML, bloques de texto, comentarios e incluso saltos de línea.
* **Elemento (`Element`):** Un tipo específico de nodo que corresponde a una etiqueta HTML (por ejemplo, `<div>`, `<button>`, `<span>`). En el desarrollo web cliente habitualmente interactuamos con objetos de tipo `Element`.

---

### 1.2 Métodos de Selección de Elementos

JavaScript ofrece métodos tradicionales y métodos modernos basados en selectores CSS.

#### A) Métodos Tradicionales (Específicos)
* `document.getElementById('id')`: Devuelve un único elemento que coincide con el atributo `id`. Es el método más rápido en tiempo de ejecución.
* `document.getElementsByClassName('clase')`: Devuelve una colección "viva" (`HTMLCollection`) con todos los elementos que poseen esa clase CSS.
* `document.getElementsByTagName('etiqueta')`: Devuelve una `HTMLCollection` con todos los elementos de ese tipo de etiqueta.

#### B) Métodos Modernos (Basados en Selectores CSS)
* `document.querySelector('selectorCSS')`: Devuelve el **primer elemento** que coincida con el selector CSS especificado (por ejemplo: `'#miId'`, `'.miClase'`, `'ul > li:first-child'`). Si no encuentra coincidencias, devuelve `null`.
* `document.querySelectorAll('selectorCSS')`: Devuelve una colección de elementos (`NodeList`) con todas las coincidencias encontradas.

#### Diferencia Crítica: `HTMLCollection` vs `NodeList`
* **`HTMLCollection` (Colección Viva):** Se actualiza automáticamente en memoria si se añaden o eliminan elementos en el HTML tras la selección. No dispone directamente de métodos de iteración como `.forEach()`.
* **`NodeList` (Colección Estática):** Es una captura fija en el momento de la ejecución. No refleja cambios posteriores en el DOM, pero **sí implementa el método `.forEach()`** directamente.

```javascript
// Ejemplo de selección
const botonSubmit = document.querySelector('#formRegistro button[type="submit"]');
const listaItems = document.querySelectorAll('.item-lista');

// Iteración directa sobre NodeList
listaItems.forEach(item => {
  console.log(item.textContent);
});
```

---

### 1.3 Navegación entre Nodos (*DOM Traversing*)

En lugar de realizar búsquedas globales en todo el documento mediante `document.querySelector()`, a menudo es más eficiente y limpio navegar desde un elemento ya seleccionado hacia sus parientes cercanos en el árbol DOM.

#### Propiedades de Navegación por Elementos (`Element`)
* `element.parentElement`: Devuelve el nodo padre inmediato que sea un elemento HTML.
* `element.children`: Devuelve una `HTMLCollection` con los elementos hijos directos.
* `element.firstElementChild`: Devuelve el primer elemento hijo directo.
* `element.lastElementChild`: Devuelve el último elemento hijo directo.
* `element.previousElementSibling`: Devuelve el elemento hermano anterior en el mismo nivel.
* `element.nextElementSibling`: Devuelve el elemento hermano posterior en el mismo nivel.

```javascript
// Ejemplo: Dado un <li>, acceder a su contenedor <ul> y a su hermano
const itemActual = document.querySelector('.item-activo');

const listaPadre = itemActual.parentElement; // El <ul> contenedor
const hermanoSiguiente = itemActual.nextElementSibling; // El siguiente <li>
```

#### El Método `element.closest(selector)`
Es uno de los métodos más potentes de navegación. Realiza una búsqueda **ascendente** desde el elemento actual hacia sus ancestros (padres, abuelos, etc.) hasta encontrar el primer elemento que coincida con el selector CSS indicado. Si no encuentra ninguno, devuelve `null`.

```javascript
// Ejemplo: Desde un botón borrador dentro de una tabla, buscar su fila <tr> contenedora
const botonBorrar = document.querySelector('.btn-eliminar');
const filaContenedora = botonBorrar.closest('tr'); // Sube por el DOM hasta encontrar el <tr>
```

---

## ⏰ HORA 2: Creación, Modificación, Estilos y Destrucción de Nodos

### 2.1 Creación e Inyección de Elementos

Para añadir contenido dinámico a una página web se sigue un proceso de dos pasos: **creación del nodo en la memoria RAM** y **vinculación al árbol DOM visible**.

#### A) Creación de Nodos
* `document.createElement('tagName')`: Crea un objeto `Element` en memoria.
* `document.createTextNode('texto')`: Crea un nodo de texto plano.

#### B) Inserción de Nodos
* `parent.appendChild(nuevoNodo)`: Inserta `nuevoNodo` como el **último hijo** del elemento `parent`.
* `parent.insertBefore(nuevoNodo, nodoReferencia)`: Inserta `nuevoNodo` justo antes de `nodoReferencia`.
* `element.insertAdjacentHTML(posicion, cadenaHTML)`: Parsea e inyecta una cadena de texto HTML en una posición relativa a `element`.
  * Posiciones válidas:
    * `'beforebegin'`: Antes del elemento.
    * `'afterbegin'`: Dentro del elemento, antes de su primer hijo.
    * `'beforeend'`: Dentro del elemento, después de su último hijo.
    * `'afterend'`: Después del elemento.

```javascript
// Ejemplo 1: Creación clásica mediante nodos
const nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Módulo DIW';
document.querySelector('#listaModulos').appendChild(nuevoItem);

// Ejemplo 2: Inserción rápida con insertAdjacentHTML
const contenedor = document.querySelector('#panel');
contenedor.insertAdjacentHTML('beforeend', '<div class="alerta">Operación exitosa</div>');
```

---

### 2.2 Modificación de Contenido y Atributos

#### A) `textContent` vs `innerHTML` vs `innerText`
* `textContent`: Lee o escribe texto plano. **Es la opción recomendada para inyectar texto** porque no ejecuta parser HTML y previene ataques de inyección de código de terceros (XSS).
* `innerHTML`: Parsea e interpreta código HTML. Es útil para estructuras complejas, pero debe evitarse cuando los datos provienen directamente de entradas no confiables de usuarios.
* `innerText`: Similar a `textContent`, pero respeta la renderización CSS (ignora elementos ocultos con `display: none`). Es más lento porque fuerza el cálculo del diseño (*layout*).

#### B) Manipulación de Atributos Estándar
* `element.getAttribute('atributo')`: Lee el valor del atributo.
* `element.setAttribute('atributo', 'valor')`: Establece o modifica el atributo.
* `element.hasAttribute('atributo')`: Devuelve `true` si el atributo existe.
* `element.removeAttribute('atributo')`: Elimina el atributo.

#### C) Atributos de Datos Personalizados HTML5 (`data-*` y `dataset`)
Los atributos `data-*` permiten asociar información de negocio arbitraria a las etiquetas HTML sin violar el estándar. En JavaScript se accede a ellos a través de la propiedad `element.dataset` en formato *camelCase*.

```html
<!-- En HTML -->
<article id="usr10" data-id-usuario="105" data-rol-acceso="admin">Carlos</article>
```

```javascript
// En JavaScript
const usuario = document.querySelector('#usr10');

// Lectura de atributos data-*
console.log(usuario.dataset.idUsuario); // "105"
console.log(usuario.dataset.rolAcceso); // "admin"

// Escritura/Modificación
usuario.dataset.rolAcceso = 'editor'; // Cambia data-rol-acceso a "editor"
```

---

### 2.3 Gestión de Estilos y Clases CSS (`classList`)

Modificar estilos inline directamente desde JavaScript (`element.style.color = 'red'`) se considera una mala práctica arquitectónica porque acopla la capa de presentación con la de lógica. La forma correcta es alternar o asignar clases CSS mediante el objeto **`element.classList`**.

#### Métodos Principales de `classList`
* `element.classList.add('clase1', 'clase2')`: Añade una o más clases.
* `element.classList.remove('clase1')`: Elimina una clase.
* `element.classList.toggle('clase')`: Si la clase existe la elimina; si no existe la añade. Devuelve `true` si la clase quedó puesta y `false` si se quitó.
* `element.classList.contains('clase')`: Devuelve un booleano indicando si el elemento posee dicha clase.
* `element.classList.replace('claseVieja', 'claseNueva')`: Reemplaza una clase por otra.

```javascript
// Ejemplo de uso de classList
const tarjeta = document.querySelector('.tarjeta');

// Alternar estado activo/inactivo
tarjeta.classList.toggle('tarjeta-destacada');

if (tarjeta.classList.contains('tarjeta-destacada')) {
  console.log('La tarjeta está resaltada');
}
```

---

### 2.4 Eliminación de Nodos del DOM

* `element.remove()`: Método estándar moderno que elimina el elemento directamente del árbol DOM.
* `parent.removeChild(hijo)`: Método tradicional que requiere obtener primero la referencia al nodo padre.

```javascript
// Forma moderna directa
const mensajeError = document.querySelector('#alerta');
mensajeError.remove();
```

---

## ⏰ HORA 3: Eventos Avanzados, Delegación y Persistencia Local

### 3.1 El Ciclo de Vida de un Evento (Captura vs. Burbujeo)

Cuando un evento (como un clic) ocurre en un elemento HTML anidado dentro de la página, el navegador no solo notifica a ese elemento puntual, sino que ejecuta un viaje en tres fases a lo largo del árbol DOM:

```
    [window]
       │   ▲
  1.   │   │   3.
Captura│   │Burbujeo (Bubbling)
       ▼   │
    [div#contenedor]
       │   ▲
       ▼   │
    [button#btn] <-- 2. Destino (Target)
```

1. **Fase de Captura (*Capturing Phase*):** El evento desciende desde el objeto `window` y `document` pasando por todos los contenedores padres hasta llegar al nodo destino.
2. **Fase de Destino (*Target Phase*):** El evento alcanza el nodo exacto sobre el que se realizó la acción (`event.target`).
3. **Fase de Burbujeo (*Bubbling Phase*):** El evento asciende (*burbujea*) desde el nodo destino hacia arriba, notificando a cada uno de sus elementos contenedores padres hasta alcanzar la raíz. **Por defecto, `addEventListener` escucha los eventos en esta tercera fase**.

#### Detención de la Propagación
* `event.stopPropagation()`: Detiene el ascenso del evento durante la fase de burbujeo, impidiendo que los elementos padre escuchen la interacción.
* `event.preventDefault()`: Cancela la acción predeterminada del navegador asociada al evento (por ejemplo, evitar la recarga al enviar un formulario o la navegación de un enlace `<a>`).

---

### 3.2 Patrón de Delegación de Eventos (*Event Delegation*)

#### El Problema
Si tenemos una lista o tabla dinámica con 100 elementos `<li>` o `<tr>`, asignar un `addEventListener` individual a cada elemento genera dos grandes inconvenientes:
1. **Consumo excesivo de memoria RAM.**
2. **Incompatibilidad con elementos dinámicos:** Los nuevos elementos creados mediante JavaScript después de la carga inicial no tendrán asignados los escuchadores.

#### La Solución (Delegación)
Se asigna **un único escuchador `addEventListener` en un elemento contenedor padre** que ya exista fijado en el HTML (`<ul>`, `<table>`, `<div>`). Aprovechando el burbujeo de eventos, el contenedor captura todos los clics de sus hijos. Dentro del callback se examina la propiedad `event.target` para identificar qué hijo exacto disparó la acción.

```javascript
// Selección del contenedor padre
const tabla = document.querySelector('#tablaUsuarios tbody');

// Un único escuchador en el contenedor <tbody>
tabla.addEventListener('click', (event) => {
  // event.target es el elemento exacto que recibió el clic
  const elementoPulsado = event.target;

  // Verificamos si el clic fue en un botón de eliminar
  if (elementoPulsado.classList.contains('btn-eliminar')) {
    const filaAEliminar = elementoPulsado.closest('tr');
    filaAEliminar.remove();
  }
});
```

---

### 3.3 Introducción a la Persistencia Local (`localStorage`)

La API **Web Storage** permite a las aplicaciones web cliente almacenar datos directamente en el navegador del usuario de forma persistente entre sesiones.

#### Características Clave
* **Estructura Clave-Valor:** Guarda parejas de clave y valor.
* **Solo almacena texto (cadenas de caracteres):** No puede guardar directamente objetos o arrays de JavaScript.
* **Persistencia:** Los datos en `localStorage` no caducan al cerrar la pestaña o el navegador.

#### Métodos de la API `localStorage`
* `localStorage.setItem('clave', 'valor')`: Guarda o sobrescribe una entrada.
* `localStorage.getItem('clave')`: Recupera el valor asociado. Devuelve `null` si la clave no existe.
* `localStorage.removeItem('clave')`: Elimina la clave indicada.
* `localStorage.clear()`: Borra todo el almacenamiento local del origen.

#### Serialización con JSON (`JSON.stringify` y `JSON.parse`)
Para almacenar objetos o arrays completos de JavaScript, debemos convertirlos a texto JSON antes de guardar, y volver a convertirlos a objetos tras recuperarlos.

```javascript
// Estructura de datos en JS
const usuario = { id: 101, nombre: 'Ana', rol: 'Admin' };

// 1. GUARDAR: Convertimos el objeto a cadena JSON con stringify
localStorage.setItem('usuarioSesion', JSON.stringify(usuario));

// 2. RECUPERAR: Convertimos la cadena de texto de nuevo a objeto con parse
const cadenaGuardada = localStorage.getItem('usuarioSesion');
if (cadenaGuardada) {
  const usuarioObjeto = JSON.parse(cadenaGuardada);
  console.log(usuarioObjeto.nombre); // "Ana"
}
```

---

## 🛠️ Guion de Ejercicios y Preguntas Rápidas de Aula

### Preguntas Diagnósticas para la Pizarra

1. *¿Qué diferencia existe entre usar `element.textContent = '<b>Hola</b>'` y `element.innerHTML = '<b>Hola</b>'`?*
   * **Respuesta:** `textContent` muestra textualmente la cadena con las etiquetas visibles, mientras que `innerHTML` parsea la etiqueta y renderiza el texto en negrita.

2. *Si creamos un elemento con `document.createElement('div')`, ¿aparece automáticamente en la pantalla?*
   * **Respuesta:** No. Solo existe en la memoria RAM hasta que lo inyectamos en el árbol DOM usando métodos como `appendChild()` o `insertBefore()`.

3. *¿Por qué el método `closest()` es preferible a encadenar múltiples `.parentElement.parentElement`?*
   * **Respuesta:** Porque `closest()` es inmune a cambios estructurales intermedios en el HTML; busca por selector CSS de forma ascendente sin importar cuántos niveles de profundidad existan.

4. *¿Por qué debemos usar `JSON.stringify()` al guardar un array en `localStorage`?*
   * **Respuesta:** Porque `localStorage` solo admite cadenas de texto. Si pasamos un array u objeto directo, lo convertirá implícitamente al texto `"[object Object]"`, perdiendo toda la información interna.
