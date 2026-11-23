---

tipo: material_alumnado  
asignatura: DWEC  
unidad: UD1  
sesion: S03  
titulo: El navegador y sus componentes de ejecución  
duracion: 55  
estado: preparado  
resultado_aprendizaje: RA1  
criterios_evaluacion:

- RA1.b  
    tags:
    
- dwec
    
- ud1
    
- navegador
    
- javascript
    
- dom
    

---

# S03 – El navegador y sus componentes de ejecución

## 1. Introducción

Cuando abrimos una página web, parece que el navegador simplemente descarga unos archivos y los muestra en pantalla.

Sin embargo, internamente realiza muchas operaciones:

- Recibe documentos HTML.
    
- Interpreta su estructura.
    
- Descarga hojas de estilo, imágenes y otros recursos.
    
- Construye estructuras internas para representar la página.
    
- Ejecuta código JavaScript.
    
- Calcula cómo deben aparecer los elementos.
    
- Pinta el resultado en pantalla.
    
- Gestiona las interacciones del usuario.
    

Para realizar estas tareas, el navegador utiliza distintos componentes que trabajan coordinadamente.

En esta sesión vamos a conocer los principales y entender qué función cumple cada uno.

## 2. Objetivos

Al finalizar la sesión deberías poder:

- Identificar los principales componentes de un navegador.
    
- Diferenciar el motor JavaScript del motor de renderizado.
    
- Explicar qué es el DOM.
    
- Explicar qué función cumple el CSSOM.
    
- Comprender cómo se relacionan HTML, CSS y JavaScript dentro del navegador.
    
- Identificar qué componente interviene en diferentes operaciones de una página web.
    

## 3. ¿Qué es un navegador web?

Un navegador web es una aplicación que permite acceder a recursos de Internet y visualizar e interactuar con documentos y aplicaciones web.

Algunos ejemplos son:

- Google Chrome.
    
- Mozilla Firefox.
    
- Microsoft Edge.
    
- Safari.
    
- Opera.
    

Aunque todos cumplen funciones similares, no tienen por qué utilizar exactamente la misma arquitectura interna.

Un navegador moderno no es simplemente un visor de documentos HTML: es un entorno de ejecución que incorpora motores y servicios especializados.

### 3.1. Funciones principales

Un navegador debe ser capaz de:

1. Solicitar recursos a servidores web.
    
2. Interpretar documentos HTML.
    
3. Procesar hojas de estilo CSS.
    
4. Ejecutar JavaScript.
    
5. Mostrar imágenes, vídeos y otros recursos.
    
6. Gestionar eventos e interacciones.
    
7. Almacenar determinados datos localmente.
    
8. Aplicar medidas de seguridad para proteger al usuario.
    

## 4. Componentes principales del navegador

Podemos estudiar el navegador como un conjunto de componentes especializados.

De forma simplificada, distinguiremos:

|Componente|Función principal|
|---|---|
|Interfaz del navegador|Permite interactuar con el navegador|
|Motor de navegación|Coordina la carga y gestión de páginas|
|Motor de renderizado|Interpreta HTML y CSS y prepara la representación visual|
|Motor JavaScript|Ejecuta el código JavaScript|
|Subsistema de red|Gestiona las comunicaciones con servidores|
|Almacenamiento|Gestiona datos guardados en el navegador|
|Subsistema gráfico|Colabora en la composición y presentación visual|

Estos componentes representan funciones conceptuales. La implementación concreta y su distribución en procesos o hilos dependen del navegador.

### 4.1. Interfaz del navegador

Es la parte con la que interactúa directamente el usuario.

Incluye elementos como:

- Barra de direcciones.
    
- Botones de navegación.
    
- Pestañas.
    
- Marcadores.
    
- Menús.
    
- Controles de configuración.
    

Por ejemplo, cuando escribimos una URL y pulsamos Enter, utilizamos la interfaz para iniciar una navegación.

### 4.2. Motor de navegación

Coordina las operaciones necesarias para cargar y gestionar una página.

Entre otras tareas, participa en:

- Gestionar las navegaciones.
    
- Coordinar la carga de recursos.
    
- Gestionar documentos y pestañas.
    
- Relacionar los diferentes componentes del navegador.
    

No debemos confundirlo con el motor JavaScript: el motor de navegación coordina el funcionamiento general, mientras que el motor JavaScript ejecuta código.

### 4.3. Subsistema de red

Es responsable de gestionar las comunicaciones con otros sistemas.

Cuando una página necesita descargar un archivo, se utiliza este subsistema.

Por ejemplo:

```
index.html
estilos.css
app.js
logo.png
```

El navegador puede necesitar solicitar todos esos recursos al servidor.

El subsistema de red interviene en operaciones como:

- Realizar solicitudes HTTP o HTTPS.
    
- Recibir respuestas.
    
- Gestionar conexiones.
    
- Descargar recursos.
    
- Aplicar mecanismos de caché.
    

**Importante:** descargar un archivo no significa ejecutarlo. La descarga y el procesamiento del recurso son tareas diferentes.

## 5. El motor de renderizado

El motor de renderizado es el componente encargado de interpretar el contenido del documento y preparar su representación visual.

Trabaja principalmente con HTML y CSS.

Por ejemplo, recibe un documento HTML:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Hola, mundo</h1>
    <p>Esta es mi primera página web.</p>
</body>
</html>
```

Y una hoja de estilos:

```
body {
    font-family: Arial, sans-serif;
    background-color: #eeeeee;
}

h1 {
    color: blue;
}

p {
    font-size: 18px;
}
```

El navegador debe interpretar ambos archivos para determinar qué elementos existen y cómo deben mostrarse.

### 5.1. El DOM: representación del documento HTML

DOM significa _Document Object Model_.

Es una representación estructurada del documento HTML mediante objetos organizados en forma de árbol.

Veamos este documento:

```
<body>
    <h1>Mi página</h1>
    <p>Bienvenidos a clase.</p>
</body>
```

El navegador construye una estructura conceptual similar a esta:

```
DOCUMENT
   |
  HTML
   |
  BODY
  /  \
 H1   P
 |    |
Texto Texto
```

Cada elemento HTML se representa mediante un nodo.

Esto permite que JavaScript pueda acceder a los elementos y modificarlos.

Por ejemplo:

```
const titulo = document.querySelector("h1");

titulo.textContent = "Nuevo título";
```

¿Qué ocurre aquí?

1. `document` representa el documento cargado.
    
2. `querySelector("h1")` busca el primer elemento que coincide con el selector.
    
3. La referencia al elemento se guarda en `titulo`.
    
4. `textContent` modifica el texto del elemento.
    
5. El navegador actualiza la representación de la página cuando corresponde.
    

El DOM es fundamental en desarrollo web porque permite que JavaScript interactúe con el contenido HTML.

**Idea clave:** JavaScript no necesita modificar directamente el archivo HTML original. Puede modificar la representación del documento que mantiene el navegador.

### 5.2. El CSSOM: representación de los estilos

CSSOM significa _CSS Object Model_.

Es una representación estructurada de las reglas CSS que el navegador ha procesado.

Por ejemplo:

```
h1 {
    color: red;
    font-size: 32px;
}
```

El navegador procesa esas reglas y obtiene información que utilizará para determinar cómo deben mostrarse los elementos.

Podemos distinguir:

- DOM: representa la estructura del documento.
    
- CSSOM: representa las reglas de estilo procesadas.
    

Ambos contribuyen a determinar la apariencia final de la página.

### 5.3. DOM y CSSOM trabajan conjuntamente

Imaginemos este HTML:

```
<h1>Desarrollo web</h1>
```

Y este CSS:

```
h1 {
    color: green;
    font-size: 30px;
}
```

El DOM permite saber que existe un elemento `h1` con un determinado texto.

El CSSOM aporta las reglas que indican cómo debe presentarse.

El navegador combina esta información para calcular la apariencia del elemento.

## 6. El motor JavaScript

El motor JavaScript es el componente encargado de ejecutar el código JavaScript.

Cada navegador puede utilizar un motor diferente.

Algunos ejemplos:

|Navegador|Motor JavaScript|
|---|---|
|Google Chrome|V8|
|Microsoft Edge|V8|
|Mozilla Firefox|SpiderMonkey|
|Safari|JavaScriptCore|

El motor JavaScript interpreta y ejecuta el código siguiendo las especificaciones del lenguaje ECMAScript.

Por ejemplo:

```
const nombre = "Ana";

console.log("Hola " + nombre);
```

El motor JavaScript ejecuta las instrucciones y produce:

```
Hola Ana
```

### 6.1. ¿Qué hace el motor JavaScript?

Entre sus responsabilidades encontramos:

- Analizar el código.
    
- Comprobar su sintaxis.
    
- Preparar su ejecución.
    
- Ejecutar instrucciones.
    
- Gestionar los valores y objetos utilizados por el programa.
    
- Administrar la memoria necesaria para la ejecución.
    

Los motores modernos suelen combinar diferentes técnicas de interpretación y compilación para optimizar el rendimiento.

No debemos pensar que JavaScript se ejecuta siempre de una única manera interna.

### 6.2. Motor JavaScript y DOM

El motor JavaScript puede trabajar con los objetos y las interfaces que proporciona el navegador.

Por ejemplo:

```
const boton = document.querySelector("button");

boton.textContent = "Pulsado";
```

Aquí intervienen dos conceptos:

- El motor JavaScript ejecuta las instrucciones.
    
- El navegador proporciona `document` y los métodos necesarios para acceder al DOM.
    

El DOM no forma parte del núcleo del lenguaje JavaScript. Es una API proporcionada por el entorno del navegador.

Esta distinción es importante porque JavaScript también puede ejecutarse fuera del navegador, por ejemplo, mediante Node.js, donde no existe el DOM del navegador de forma nativa.

## 7. ¿Cómo trabajan juntos los componentes?

Imaginemos que visitamos una página que contiene HTML, CSS y JavaScript.

El proceso simplificado sería:

1. El subsistema de red descarga el HTML.
    
2. El navegador procesa el documento.
    
3. Se construye el DOM.
    
4. Se descargan y procesan los archivos CSS.
    
5. Se construye el CSSOM.
    
6. El motor JavaScript ejecuta los scripts.
    
7. El navegador calcula cómo debe presentarse el contenido.
    
8. El subsistema gráfico participa en la presentación en pantalla.
    

No siempre ocurre como una secuencia estrictamente lineal. La carga de recursos, el procesamiento del HTML, la ejecución de scripts y el renderizado pueden coordinarse y solaparse.

En las próximas sesiones estudiaremos con más detalle el ciclo de eventos y el proceso de renderizado.

## 8. Ejemplo práctico: identificar los componentes

Tenemos estos archivos:

**index.html**

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo DWEC</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <h1 id="titulo">Bienvenidos</h1>

    <button id="boton">Cambiar título</button>

    <script src="app.js"></script>
</body>
</html>
```

**estilos.css**

```
body {
    font-family: Arial, sans-serif;
    background-color: #eeeeee;
}

h1 {
    color: blue;
}
```

**app.js**

```
const boton = document.querySelector("#boton");
const titulo = document.querySelector("#titulo");

boton.addEventListener("click", function () {
    titulo.textContent = "Título modificado";
});
```

### ¿Qué sucede cuando abrimos la página?

1. El navegador descarga el documento HTML.
    
2. El motor de renderizado procesa el HTML y construye el DOM.
    
3. Se descarga y procesa el CSS.
    
4. Se procesa el archivo JavaScript.
    
5. El motor JavaScript ejecuta las instrucciones.
    
6. Se registra una función para responder al evento `click`.
    
7. Cuando el usuario pulsa el botón, se ejecuta esa función.
    
8. JavaScript modifica el DOM.
    
9. El navegador actualiza la presentación visual.
    

### ¿Qué componente interviene?

|Operación|Componente o mecanismo|
|---|---|
|Descargar `index.html`|Subsistema de red|
|Interpretar HTML|Motor de renderizado|
|Construir el DOM|Procesamiento del documento|
|Procesar `estilos.css`|Motor de renderizado|
|Construir el CSSOM|Procesamiento de CSS|
|Ejecutar `app.js`|Motor JavaScript|
|Buscar el botón|API DOM utilizada por JavaScript|
|Detectar el clic|Sistema de eventos del navegador|
|Cambiar el texto|JavaScript modifica el DOM|
|Mostrar el cambio|Proceso de actualización y renderizado|

## 9. Seguridad: ¿todo el código puede hacer cualquier cosa?

No. Los navegadores incorporan diferentes mecanismos de seguridad.

Uno de ellos es la política del mismo origen (_Same-Origin Policy_).

De forma simplificada, esta política restringe determinadas interacciones entre recursos que pertenecen a distintos orígenes.

Un origen se define mediante:

- Protocolo.
    
- Dominio.
    
- Puerto.
    

Por ejemplo:

```
https://web.ejemplo.com
https://web.ejemplo.com:443
```

Son el mismo origen porque HTTPS utiliza habitualmente el puerto 443 y ambos identifican el mismo origen.

En cambio:

```
https://web.ejemplo.com
http://web.ejemplo.com
```

No son el mismo origen porque cambia el protocolo.

Los navegadores también utilizan mecanismos de aislamiento y restricciones de ejecución para reducir los riesgos de seguridad.

No debemos confundir estas protecciones con una garantía absoluta: las aplicaciones web siguen necesitando desarrollar código seguro.

## 10. Ejercicios

### E01 – Identificar componentes

Relaciona cada operación con el componente que interviene principalmente:

1. Descargar una imagen.
    
2. Ejecutar una instrucción `console.log()`.
    
3. Interpretar una regla CSS.
    
4. Mostrar la barra de direcciones.
    
5. Representar la estructura HTML como un árbol.
    
6. Ejecutar una función JavaScript.
    

Utiliza estos componentes:

- Interfaz del navegador.
    
- Subsistema de red.
    
- Motor de renderizado.
    
- Motor JavaScript.
    

Justifica las respuestas.

### E02 – DOM y CSSOM

Observa este código:

```
<h1 id="titulo">Hola</h1>
<p>Estamos aprendiendo JavaScript.</p>
```

```
h1 {
    color: red;
}

p {
    font-size: 20px;
}
```

Responde:

1. ¿Qué representa el DOM?
    
2. ¿Qué representa el CSSOM?
    
3. ¿Qué elementos aparecerán en el DOM?
    
4. ¿Qué información aporta el CSSOM?
    
5. ¿Cuál de los dos representa la estructura y cuál los estilos?
    

### E03 – Motor JavaScript

Analiza el siguiente código:

```
const precio = 100;
const descuento = 20;

const resultado = precio - descuento;

console.log(resultado);
```

Responde:

1. ¿Qué componente ejecuta estas instrucciones?
    
2. ¿Qué valor tendrá `resultado`?
    
3. ¿Qué aparecerá en la consola?
    
4. ¿El DOM es necesario para ejecutar este código?
    
5. ¿Podría ejecutarse JavaScript sin navegador?
    

### E04 – Analizar una página

Tenemos una página que contiene:

- Un archivo HTML.
    
- Una hoja de estilos CSS.
    
- Un archivo JavaScript.
    
- Una imagen.
    
- Un botón que cambia el texto de un encabezado.
    

Explica qué componentes intervienen desde que se descarga la página hasta que el usuario pulsa el botón.

No basta con nombrarlos: debes explicar qué hace cada uno.

## 11. Reto final – El navegador por dentro

Una página web presenta los siguientes problemas:

1. La imagen no se descarga.
    
2. El encabezado aparece sin el color esperado.
    
3. El botón no responde al pulsarlo.
    
4. La estructura HTML se muestra, pero el contenido tiene un aspecto incorrecto.
    

Para cada situación:

- Indica qué componente o mecanismo investigarías primero.
    
- Explica por qué.
    
- Propón una comprobación que permitiría localizar el problema.
    

Puedes utilizar más de un componente cuando sea necesario. En desarrollo web los problemas no siempre respetan nuestras tablas.

## 12. Errores habituales

- Pensar que el motor JavaScript y el motor de renderizado son lo mismo.
    
- Creer que el DOM forma parte del lenguaje JavaScript.
    
- Confundir DOM y CSSOM.
    
- Pensar que el navegador solo descarga un archivo HTML.
    
- Creer que todos los navegadores utilizan el mismo motor.
    
- Suponer que el procesamiento de HTML, CSS y JavaScript ocurre siempre en una secuencia rígida.
    
- Pensar que Node.js necesita un navegador para ejecutar JavaScript.
    

## 13. Resumen

- El navegador es un entorno de ejecución compuesto por diferentes componentes.
    
- El subsistema de red permite descargar recursos.
    
- El motor de renderizado procesa HTML y CSS.
    
- El DOM representa la estructura del documento.
    
- El CSSOM representa las reglas CSS procesadas.
    
- El motor JavaScript ejecuta las instrucciones del lenguaje.
    
- JavaScript puede utilizar las API del navegador, como el DOM.
    
- Los componentes colaboran para mostrar e interpretar las páginas web.
    

## 14. Autoevaluación

- Sé identificar los principales componentes del navegador.
    
- Sé diferenciar el motor JavaScript del motor de renderizado.
    
- Comprendo qué es el DOM.
    
- Comprendo qué es el CSSOM.
    
- Sé explicar cómo JavaScript accede al DOM.
    
- Comprendo que JavaScript puede ejecutarse fuera del navegador.
    
- Sé explicar qué ocurre cuando se carga una página web.