---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 1  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- DWEC
    
- JavaScript
    
- UD2
    
- HTML
    

---

# Sesión 01. Incorporación de JavaScript en HTML

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Explicar qué es JavaScript y para qué se utiliza en una página web.
    
- Diferenciar HTML, CSS y JavaScript.
    
- Incorporar código JavaScript en un documento HTML.
    
- Diferenciar JavaScript interno y externo.
    
- Utilizar correctamente la etiqueta `<script>`.
    
- Comprender la utilidad de los atributos `src`, `defer` y `async`.
    
- Identificar errores habituales al cargar archivos JavaScript.
    

## 2. Relación curricular

Esta sesión introduce los fundamentos necesarios para trabajar con JavaScript en el entorno cliente.

La relación definitiva con los resultados de aprendizaje y criterios de evaluación debe comprobarse con la programación didáctica de la asignatura.

## 3. Contenidos

### 3.1. ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que permite añadir comportamiento e interactividad a las páginas web.

En una página web podemos distinguir tres tecnologías principales:

|Tecnología|Función|Ejemplo|
|---|---|---|
|HTML|Estructura y contenido|Títulos, párrafos, formularios|
|CSS|Presentación y diseño|Colores, tamaños, distribución|
|JavaScript|Comportamiento|Validaciones, cálculos, interacciones|

Ejemplo:

- HTML crea un botón.
    
- CSS modifica su apariencia.
    
- JavaScript hace que ocurra algo cuando pulsamos el botón.
    

JavaScript se ejecuta habitualmente en el navegador del usuario, por lo que permite modificar una página sin necesidad de recargarla constantemente.

### 3.2. Incorporar JavaScript en HTML

Para introducir JavaScript en un documento HTML utilizamos la etiqueta:

```
<script>
    // Código JavaScript
</script>
```

Podemos incorporar el código de dos maneras:

1. JavaScript interno: el código se escribe directamente dentro del HTML.
    
2. JavaScript externo: el código se guarda en un archivo independiente `.js`.
    

### 3.3. JavaScript interno

El código JavaScript se escribe dentro de la etiqueta `<script>`.

Ejemplo:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página JavaScript</title>
</head>
<body>

    <h1>Hola, mundo</h1>

    <script>
        console.log("Hola desde JavaScript");
    </script>

</body>
</html>
```

La instrucción:

```
console.log("Hola desde JavaScript");
```

muestra un mensaje en la consola del navegador.

**¿Cómo abrir la consola?**

1. Abre la página en el navegador.
    
2. Pulsa F12.
    
3. Accede a la pestaña Consola o Console.
    
4. Comprueba el mensaje mostrado.
    

La consola es una herramienta fundamental para desarrollar y detectar errores en JavaScript.

### 3.4. JavaScript externo

En proyectos reales es recomendable separar el código JavaScript del documento HTML.

Para ello creamos un archivo con extensión `.js`.

Estructura del proyecto:

```
mi-proyecto/
│
├── index.html
└── js/
    └── app.js
```

Contenido de `index.html`:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JavaScript externo</title>
</head>
<body>

    <h1>Mi primera aplicación</h1>

    <script src="js/app.js"></script>

</body>
</html>
```

Contenido de `js/app.js`:

```
console.log("JavaScript cargado correctamente");
```

El atributo `src` indica la ubicación del archivo JavaScript que queremos cargar.

**Ventajas de utilizar archivos externos:**

- Separa el contenido HTML de la programación.
    
- Facilita el mantenimiento del proyecto.
    
- Permite reutilizar un mismo archivo JavaScript en varias páginas.
    
- Mejora la organización del código.
    
- Facilita el trabajo en equipo.
    

### 3.5. ¿Dónde colocar la etiqueta script?

Podemos colocar la etiqueta `<script>` en diferentes partes del documento HTML.

Por ejemplo, dentro de `<head>`:

```
<head>
    <script src="js/app.js"></script>
</head>
```

O antes de cerrar `<body>`:

```
<body>

    <h1>Mi página</h1>

    <script src="js/app.js"></script>
</body>
```

Cuando el navegador encuentra una etiqueta `<script>` tradicional sin atributos especiales, normalmente detiene el análisis del HTML mientras descarga y ejecuta el JavaScript.

Esto puede provocar problemas si el código intenta acceder a elementos HTML que todavía no se han creado.

### 3.6. El atributo defer

El atributo `defer` permite descargar el archivo JavaScript mientras el navegador continúa procesando el HTML.

El código se ejecutará cuando el documento HTML haya terminado de analizarse.

Ejemplo:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JavaScript con defer</title>

    <script src="js/app.js" defer></script>
</head>
<body>

    <h1>Mi página web</h1>

    <p id="mensaje">Contenido de la página</p>

</body>
</html>
```

Archivo `js/app.js`:

```
console.log("El documento HTML ya está preparado");
```

**Características de defer:**

- Descarga el archivo mientras se procesa el HTML.
    
- Ejecuta el código cuando el documento HTML ya está analizado.
    
- Mantiene el orden de ejecución de los scripts diferidos.
    
- Es una opción recomendable para cargar scripts externos que necesitan acceder al contenido HTML.
    

### 3.7. El atributo async

El atributo `async` también permite descargar el archivo JavaScript mientras se procesa el HTML.

Sin embargo, el código se ejecuta inmediatamente cuando termina de descargarse, sin esperar necesariamente a que termine el análisis del documento.

Ejemplo:

```
<script src="js/externo.js" async></script>
```

**Características de async:**

- Descarga el archivo sin bloquear el análisis del HTML durante la descarga.
    
- Ejecuta el código en cuanto está disponible.
    
- No garantiza el orden de ejecución entre varios scripts async.
    
- Puede ejecutarse antes de que el documento HTML esté completamente analizado.
    

Se utiliza principalmente en scripts independientes que no necesitan depender de otros scripts ni de elementos HTML que todavía puedan no existir.

### 3.8. Diferencias entre defer y async

|Característica|defer|async|
|---|---|---|
|Descarga en paralelo|Sí|Sí|
|Espera al análisis del HTML|Sí|No|
|Mantiene el orden entre scripts|Sí|No|
|Momento de ejecución|Tras analizar el HTML|Al terminar la descarga|
|Uso habitual|Código de la aplicación|Scripts independientes|

Para recordar:

- `defer`: descarga ahora, ejecuta después de analizar el HTML.
    
- `async`: descarga ahora, ejecuta en cuanto esté disponible.
    

### 3.9. Errores habituales

**Error 1. Ruta incorrecta**

```
<script src="app.js"></script>
```

Si el archivo está dentro de la carpeta `js`, la ruta correcta sería:

```
<script src="js/app.js"></script>
```

**Error 2. Nombre de archivo incorrecto**

```
<script src="js/aplicacion.js"></script>
```

Si el archivo realmente se llama `app.js`, el navegador no encontrará el archivo solicitado.

**Error 3. Olvidar la etiqueta de cierre**

```
<script src="js/app.js">
```

Forma correcta:

```
<script src="js/app.js"></script>
```

**Error 4. Intentar utilizar un elemento HTML antes de que exista**

Si el código se ejecuta antes de que el navegador haya creado el elemento, puede producirse un error.

Una solución habitual es utilizar `defer` cuando se carga un archivo JavaScript externo.

## 4. Desarrollo práctico de la sesión

### Actividad 1. Primer contacto con JavaScript

Crea un archivo llamado `index.html` con el siguiente contenido:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Primera práctica JavaScript</title>
</head>
<body>

    <h1>Aprendiendo JavaScript</h1>

    <script>
        console.log("Estoy aprendiendo JavaScript");
        console.log("Esta es mi primera práctica");
    </script>

</body>
</html>
```

Abre el archivo en el navegador y comprueba los mensajes en la consola.

### Actividad 2. Crear un archivo externo

Crea la siguiente estructura:

```
practica-javascript/
│
├── index.html
└── js/
    └── app.js
```

En `index.html` escribe:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JavaScript externo</title>

    <script src="js/app.js" defer></script>
</head>
<body>

    <h1>Práctica de JavaScript externo</h1>

    <p>Estamos separando HTML y JavaScript.</p>

</body>
</html>
```

En `js/app.js` escribe:

```
console.log("Archivo externo cargado");
console.log("El código JavaScript está separado del HTML");
```

Abre la página y comprueba que aparecen los dos mensajes.

### Actividad 3. Investigar defer y async

Crea dos copias del archivo HTML:

- `defer.html`
    
- `async.html`
    

En el primero carga el archivo JavaScript con `defer` y en el segundo con `async`.

Responde:

1. ¿Qué tienen en común ambos atributos?
    
2. ¿En qué momento se ejecuta el código con `defer`?
    
3. ¿En qué momento se ejecuta el código con `async`?
    
4. ¿Cuál garantiza el orden de ejecución de varios scripts?
    
5. ¿Cuál utilizarías para el código principal de una página web?
    

## 5. Material necesario

- Editor de código, como Visual Studio Code.
    
- Navegador web.
    
- Consola de herramientas para desarrolladores.
    
- Archivos HTML y JavaScript.
    

## 6. Resumen para estudiar

Debes recordar los siguientes conceptos:

- JavaScript permite añadir interactividad y comportamiento a las páginas web.
    
- HTML define la estructura, CSS la presentación y JavaScript el comportamiento.
    
- La etiqueta `<script>` permite incorporar JavaScript.
    
- El JavaScript interno se escribe directamente en el documento HTML.
    
- El JavaScript externo se guarda en archivos `.js`.
    
- El atributo `src` indica la ubicación del archivo JavaScript.
    
- `defer` descarga el archivo en paralelo y lo ejecuta después de analizar el HTML.
    
- `async` ejecuta el archivo en cuanto termina de descargarse.
    
- `defer` mantiene el orden de ejecución entre scripts diferidos.
    
- `async` no garantiza el orden de ejecución.
    
- La consola del navegador permite visualizar mensajes y detectar errores.
    

## 7. Errores que debes evitar

- Confundir la ruta del archivo JavaScript.
    
- Escribir mal el nombre del archivo.
    
- Olvidar cerrar la etiqueta `script`.
    
- Confundir `defer` con `async`.
    
- Pensar que `async` garantiza el orden de ejecución.
    
- No comprobar la consola del navegador cuando algo falla.
    

## 8. Autoevaluación

Contesta sin consultar los apuntes.

1. ¿Qué diferencia existe entre HTML, CSS y JavaScript?
    
2. ¿Qué etiqueta permite incorporar JavaScript en HTML?
    
3. ¿Qué diferencia existe entre JavaScript interno y externo?
    
4. ¿Para qué sirve el atributo `src`?
    
5. ¿Qué ventaja tiene separar JavaScript en archivos externos?
    
6. ¿Qué hace el atributo `defer`?
    
7. ¿Qué hace el atributo `async`?
    
8. ¿Qué diferencia fundamental existe entre `defer` y `async`?
    
9. ¿Qué herramienta del navegador permite consultar los mensajes de `console.log()`?
    
10. ¿Por qué puede producirse un error si JavaScript intenta acceder a un elemento HTML que todavía no existe?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué tecnología se utiliza principalmente para añadir interactividad a una página web?

a) HTML  
b) CSS  
c) JavaScript  
d) XML

**Pregunta 2.** ¿Qué atributo permite indicar la ruta de un archivo JavaScript externo?

a) href  
b) src  
c) link  
d) rel

**Pregunta 3.** ¿Qué atributo ejecuta el JavaScript después de que el HTML haya terminado de analizarse?

a) async  
b) defer  
c) href  
d) target

**Pregunta 4.** ¿Qué afirmación sobre async es correcta?

a) Garantiza el orden de ejecución de los scripts.  
b) Espera siempre a que termine el análisis del HTML.  
c) Ejecuta el script cuando termina de descargarse.  
d) Impide que el navegador descargue otros archivos.

**Pregunta 5.** ¿Dónde podemos consultar el resultado de `console.log()`?

a) En el título de la página.  
b) En la consola del navegador.  
c) En el archivo HTML.  
d) En la barra de direcciones.

## 10. Qué debes dominar antes de continuar

- Sé explicar qué es JavaScript.
    
- Distingo HTML, CSS y JavaScript.
    
- Sé incorporar JavaScript interno.
    
- Sé enlazar un archivo JavaScript externo.
    
- Comprendo la utilidad del atributo `src`.
    
- Sé explicar la diferencia entre `defer` y `async`.
    
- Sé utilizar la consola del navegador.
    
- Soy capaz de crear un pequeño proyecto con HTML y JavaScript separados.
    

---

**Importante:** Esta sesión está preparada para estudiar y practicar. No se considerará impartida hasta que se trabaje en clase.