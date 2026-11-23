---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S05
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.b]
estado: preparado
impartido: false
---

# S05 – El proceso de renderizado del navegador

## 1. Introducción y objetivos

HTML define estructura, CSS presentación y JavaScript comportamiento. El navegador interpreta estos recursos, construye estructuras internas y calcula cómo mostrarlos. Este conjunto de operaciones se denomina **renderizado**.

Al finalizar podrás explicar DOM y CSSOM, identificar las fases principales del renderizado y analizar cómo los cambios de JavaScript afectan a la representación visual.

## 2. Del código fuente a la pantalla

Modelo conceptual:

```text
HTML ──> DOM ───────┐
                   ├─> Cálculo de estilos
CSS ───> CSSOM ────┘
                           |
                         Layout
                    (tamaño/posición)
                           |
                          Paint
                       (pintado)
                           |
                      Composición
                           |
                    Imagen en pantalla
```

Los navegadores optimizan el proceso; no debe interpretarse como una secuencia rígida e idéntica en todas las circunstancias.

## 3. DOM: Document Object Model

El DOM representa estructuradamente el documento HTML mediante un árbol de nodos.

```html
<!DOCTYPE html>
<html>
<head><title>Ejemplo</title></head>
<body>
    <h1>Mi página</h1>
    <p>Contenido</p>
</body>
</html>
```

Árbol simplificado:

```text
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p
```

Existen nodos de documento, elemento, texto y comentario, entre otros. JavaScript puede consultar y modificar el DOM:

```javascript
const titulo = document.querySelector("h1");
console.log(titulo.textContent);
titulo.textContent = "Título actualizado";
```

## 4. CSSOM: CSS Object Model

El CSSOM representa las reglas de estilo interpretadas por el navegador.

```css
h1 { color: navy; font-size: 32px; }
p { color: gray; }
```

| DOM | CSSOM |
|---|---|
| Representa el documento HTML | Representa reglas CSS |
| Contiene nodos y relaciones | Contiene reglas y declaraciones |
| Describe estructura | Describe presentación |

## 5. Cálculo de estilos

El navegador determina qué reglas corresponden a cada elemento teniendo en cuenta selectores, cascada, especificidad y herencia.

```html
<h1 id="titulo" class="principal">DWEC</h1>
```

```css
h1 { color: blue; }
.principal { color: green; }
#titulo { color: red; }
```

El selector de ID tiene mayor especificidad y el título se mostrará rojo. Algunas propiedades, como `color` y `font-family`, pueden heredarse de los elementos antecesores.

## 6. Layout: dimensiones y posiciones

En layout el navegador calcula la geometría de los elementos: tamaños, posiciones y distribución.

```css
.tarjeta {
    width: 400px;
    padding: 20px;
    margin: 30px;
    border: 2px solid #333;
}
```

El cálculo tiene en cuenta el modelo de caja:

```text
+---------------------------+
|          MARGIN           |
|  +---------------------+  |
|  |       BORDER        |  |
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

## 7. Paint y composición

Durante **paint** se determinan las operaciones para dibujar texto, colores, fondos, bordes, sombras e imágenes. La **composición** combina las capas que el navegador utiliza para formar la imagen final. No todos los elementos tienen necesariamente una capa propia.

## 8. Reflow, repaint y composición

- **Reflow / recálculo de layout:** se recalculan dimensiones o posiciones.
- **Repaint:** se actualiza el dibujo visual.
- **Composición:** se combinan capas preparadas.

| Cambio | Trabajo que puede requerir |
|---|---|
| Modificar `width` | Layout y posiblemente paint |
| Modificar `height` | Layout y posiblemente paint |
| Cambiar `background-color` | Normalmente paint |
| Cambiar `color` | Normalmente paint |
| Cambiar `transform` | Puede resolverse mediante composición |

Son ejemplos orientativos, no reglas absolutas: el trabajo exacto depende del documento y de las optimizaciones del navegador.

## 9. JavaScript y renderizado

```javascript
const titulo = document.querySelector("h1");
titulo.textContent = "Actualizado";
titulo.style.color = "red";
titulo.style.width = "300px";
```

Estos cambios pueden requerir recálculo de estilos, layout, paint o composición. Un script largo también puede bloquear el hilo principal y retrasar la actualización de la interfaz.

## 10. Ejemplo práctico

Guarda como `renderizado.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Renderizado</title>
<style>
body { font-family: Arial; background: #eee; padding: 30px; }
.tarjeta { width: 400px; margin: auto; padding: 20px; background: white; }
</style>
</head>
<body>
<div class="tarjeta">
    <h1 id="titulo">Mi tarjeta</h1>
    <p>Ejemplo de actualización visual.</p>
    <button id="boton">Cambiar</button>
</div>
<script>
const titulo = document.querySelector("#titulo");
const tarjeta = document.querySelector(".tarjeta");
document.querySelector("#boton").addEventListener("click", () => {
    titulo.textContent = "Contenido actualizado";
    tarjeta.style.backgroundColor = "lightyellow";
    tarjeta.style.width = "500px";
});
</script>
</body>
</html>
```

Al cargar se construyen las estructuras y se calcula la presentación. Al pulsar el botón, JavaScript modifica texto, color y ancho; el navegador actualiza la representación según los cambios.

## 11. Ejercicios

**E01 – Fases:** relaciona con DOM, CSSOM, cálculo de estilos, layout, paint o composición: interpretar `h1`; interpretar una regla CSS; resolver el color final; calcular el ancho; dibujar un fondo; combinar capas.

**E02 – DOM y CSSOM:** identifica qué información pertenece a cada estructura en el ejemplo:

```html
<h1 class="titulo">DWEC</h1><p>Desarrollo web</p>
```
```css
.titulo { color: red; font-size: 30px; }
p { color: blue; }
```

**E03 – Cambios:** explica qué operaciones pueden ser necesarias al cambiar el fondo, anchura, tamaño de fuente, texto y borde de un elemento.

**E04 – Página interactiva:** crea una página con encabezado, menú, dos tarjetas y un botón. El botón debe cambiar el texto, el fondo de una tarjeta y el ancho de la otra. Explica las actualizaciones.

## 12. Reto: reducir actualizaciones

Analiza:

```javascript
const caja = document.querySelector(".caja");
for (let i = 0; i < 100; i++) {
    caja.style.width = `${100 + i}px`;
}
```

Reescribe el programa calculando primero el ancho final y aplicando el cambio una sola vez. Explica por qué no debe afirmarse que cada asignación provoca necesariamente un layout inmediato: los navegadores pueden agrupar y optimizar operaciones.

## 13. Errores habituales, resumen y autoevaluación

No confundas DOM y CSSOM, layout y paint, ni afirmes que cualquier cambio CSS provoca siempre un reflow completo. DOM representa el documento; CSSOM las reglas; layout calcula geometría; paint dibuja; composición combina capas.

- [ ] Diferencio DOM y CSSOM.
- [ ] Explico el cálculo de estilos.
- [ ] Describo layout, paint y composición.
- [ ] Diferencio reflow y repaint.
- [ ] Explico cómo JavaScript actualiza la representación.

**Evaluación – RA1.b:** identificación y explicación de los mecanismos del navegador relacionados con interpretación, estilos, ejecución y representación visual.
