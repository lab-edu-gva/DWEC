---

tipo: material_alumnado  
asignatura: DWEC  
unidad: UD1  
sesion: S01  
duracion: 55  
estado: preparado  
resultado_aprendizaje: RA1  
criterios_evaluacion:

- RA1.a
    
- RA1.c
    
- RA1.d  
    tags:
    
- dw ec
    
- ud1
    
- arquitectura-web
    

---

# S01 – Modelos de ejecución en aplicaciones web

## 1. Introducción: ¿qué ocurre cuando abrimos una página web?

Vamos a empezar con una pregunta:

**Cuando escribes** `**https://www.google.com**` **en el navegador y pulsas Enter, ¿qué ocurre realmente?**

Podríamos pensar que el navegador simplemente abre una página que está guardada en Internet. Pero el funcionamiento es bastante más interesante.

En realidad, intervienen diferentes elementos:

- Un dispositivo desde el que accedemos.
    
- Un navegador web.
    
- Un servidor que recibe solicitudes.
    
- Una serie de tecnologías que permiten construir y mostrar la página.
    
- Mecanismos de comunicación entre el navegador y el servidor.
    

Para comprender cómo se desarrolla una aplicación web debemos saber qué tareas se realizan en el navegador y cuáles se realizan en el servidor.

Esta distinción es la base de la programación web en entorno cliente.

## 2. Arquitectura cliente-servidor

La arquitectura cliente-servidor es un modelo de organización en el que dos partes colaboran para proporcionar un servicio.

### 2.1. El cliente

El cliente es el elemento que solicita un servicio o recurso.

En el desarrollo web, normalmente utilizamos un navegador como cliente.

Ejemplos:

- Google Chrome.
    
- Mozilla Firefox.
    
- Microsoft Edge.
    
- Safari.
    

El cliente puede realizar diferentes tareas:

- Mostrar una página web.
    
- Recoger información introducida por el usuario.
    
- Responder a pulsaciones y otros eventos.
    
- Ejecutar código JavaScript.
    
- Presentar información recibida del servidor.
    

### 2.2. El servidor

El servidor es el sistema que recibe las solicitudes del cliente y proporciona las respuestas correspondientes.

Puede realizar tareas como:

- Consultar una base de datos.
    
- Comprobar las credenciales de un usuario.
    
- Guardar información.
    
- Aplicar reglas de negocio.
    
- Calcular resultados.
    
- Gestionar permisos y autorizaciones.
    

El servidor puede estar en un centro de datos, en una infraestructura cloud o incluso en una máquina de nuestra propia red.

### 2.3. ¿Cómo se comunican?

Imagina que accedes a una tienda online.

El proceso simplificado sería:

1. Abres el navegador.
    
2. Escribes la dirección de la tienda.
    
3. El navegador solicita la página.
    
4. El servidor recibe la solicitud.
    
5. El servidor devuelve los recursos necesarios.
    
6. El navegador procesa esos recursos.
    
7. Finalmente, puedes visualizar e interactuar con la tienda.
    

Podemos representar el proceso así:

```
             USUARIO
                |
                v
       +----------------+
       |    NAVEGADOR   |
       |     CLIENTE    |
       +----------------+
                |
                | Solicitud
                |
                v
       +----------------+
       |    SERVIDOR    |
       |     BACK-END   |
       +----------------+
                |
                | Procesamiento
                |
                v
       +----------------+
       | BASE DE DATOS  |
       +----------------+
                |
                v
       +----------------+
       |    SERVIDOR    |
       +----------------+
                |
                | Respuesta
                |
                v
       +----------------+
       |    NAVEGADOR   |
       +----------------+
                |
                v
          USUARIO
```

Este esquema es una simplificación: no todas las peticiones necesitan consultar una base de datos.

## 3. Front-end: programación en el entorno cliente

El front-end es la parte de una aplicación web que se ejecuta en el entorno cliente y con la que interactúa directamente el usuario.

Su objetivo es presentar la información y permitir que el usuario utilice la aplicación.

### 3.1. Tecnologías principales

En el desarrollo web utilizamos tres tecnologías fundamentales.

**HTML: estructura**

HTML define los elementos que forman una página.

Por ejemplo:

```
<h1>Bienvenido</h1>
<p>Esta es mi primera aplicación.</p>
<button>Acceder</button>
```

Este código define un encabezado, un párrafo y un botón.

HTML no determina por sí solo cómo se distribuyen visualmente todos esos elementos ni qué ocurre cuando pulsamos el botón.

**CSS: presentación**

CSS permite establecer el aspecto visual de los elementos.

```
h1 {
    color: blue;
    font-size: 32px;
}

p {
    color: #444;
}

button {
    background-color: green;
    color: white;
    padding: 10px;
}
```

Con CSS podemos modificar:

- Colores.
    
- Tipografías.
    
- Tamaños.
    
- Márgenes y espacios.
    
- Distribución de elementos.
    
- Adaptación a diferentes dispositivos.
    

**JavaScript: comportamiento**

JavaScript permite incorporar lógica e interacción.

```
const boton = document.querySelector("button");

boton.addEventListener("click", function () {
    alert("Has pulsado el botón");
});
```

Este código localiza un botón y establece qué debe ocurrir cuando el usuario lo pulsa.

### 3.2. Las tres tecnologías trabajando juntas

Podemos resumir sus responsabilidades:

|Tecnología|Responsabilidad|Pregunta que responde|
|---|---|---|
|HTML|Estructura|¿Qué elementos hay?|
|CSS|Presentación|¿Cómo se muestran?|
|JavaScript|Comportamiento|¿Qué ocurre cuando interactuamos?|

Las tres tecnologías se complementan.

## 4. Back-end: procesamiento en el servidor

El back-end contiene la lógica que se ejecuta en el servidor.

No debemos confundirlo con la parte visual de la aplicación.

Imagina que queremos iniciar sesión en una plataforma educativa.

El usuario introduce:

- Correo electrónico.
    
- Contraseña.
    

El navegador puede comprobar que ambos campos tengan contenido, pero no debería decidir por sí mismo si la contraseña es correcta.

Esa comprobación debe realizarse en el servidor.

### 4.1. Ejemplos de tareas del back-end

|Operación|¿Por qué corresponde habitualmente al servidor?|
|---|---|
|Consultar los usuarios registrados|Necesita acceder a los datos almacenados.|
|Comprobar las credenciales|Debe realizarse de forma segura.|
|Guardar un pedido|Debe persistir la información.|
|Consultar el historial de compras|Necesita acceder a los datos del usuario.|
|Calcular impuestos de una operación|Debe aplicar las reglas de negocio y validar el resultado.|

### 4.2. Lenguajes y tecnologías

Algunos ejemplos de tecnologías utilizadas en el servidor son:

- PHP.
    
- Python.
    
- Java.
    
- C#.
    
- JavaScript mediante Node.js.
    

No existe un único lenguaje obligatorio para desarrollar el back-end.

## 5. Comparación entre front-end y back-end

|Característica|Front-end|Back-end|
|---|---|---|
|Entorno habitual|Navegador|Servidor|
|Objetivo|Interfaz e interacción|Procesamiento y datos|
|Tecnologías|HTML, CSS, JavaScript|PHP, Python, Java, Node.js, etc.|
|Acceso a datos|Puede recibirlos y mostrarlos|Gestiona normalmente el acceso a datos persistentes|
|Ejemplo|Mostrar un catálogo|Consultar los productos almacenados|

Una aplicación web moderna suele combinar ambos entornos.

## 6. Ejemplo completo: una tienda online

Vamos a analizar qué sucede cuando compramos un producto.

Supongamos que queremos adquirir unos auriculares por 50 €.

### Paso 1. Mostrar el producto

El navegador presenta el nombre, la imagen y el precio.

Es una tarea del front-end.

### Paso 2. Añadir al carrito

El usuario pulsa el botón «Añadir al carrito».

JavaScript puede actualizar la interfaz y mostrar que hay un producto en el carrito.

Es una tarea del front-end.

### Paso 3. Confirmar el pedido

El navegador envía la información del pedido al servidor.

### Paso 4. Comprobar la operación

El servidor verifica:

- Que el producto existe.
    
- Que el precio es correcto.
    
- Que hay disponibilidad.
    
- Que el usuario tiene permiso para realizar la operación.
    

Es una tarea del back-end.

### Paso 5. Guardar el pedido

El servidor registra la operación en la base de datos.

### Paso 6. Mostrar la confirmación

El servidor devuelve el resultado y el navegador muestra el mensaje correspondiente.

Es una tarea del front-end.

**Una idea fundamental:** el navegador puede mejorar la experiencia del usuario, pero no debe ser la autoridad que decide si una operación importante es válida.

## 7. Práctica guiada: analizamos una aplicación

Vamos a utilizar una aplicación ficticia de gestión de alumnos.

La aplicación permite:

- Consultar alumnos.
    
- Añadir un alumno.
    
- Modificar sus datos.
    
- Eliminar un alumno.
    
- Mostrar mensajes de confirmación.
    

Clasificaremos las operaciones según dónde se realizan.

|Operación|Entorno|
|---|---|
|Mostrar la tabla de alumnos|Front-end|
|Consultar los alumnos almacenados|Back-end|
|Mostrar un formulario|Front-end|
|Comprobar que el correo tiene un formato válido|Front-end, como comprobación inicial|
|Verificar que el correo no está registrado|Back-end|
|Guardar un alumno|Back-end|
|Mostrar el mensaje de confirmación|Front-end|

### Preguntas para comentar en clase

1. ¿Podemos comprobar en JavaScript que un correo tiene un formato válido?
    
2. ¿Podemos confiar exclusivamente en esa comprobación?
    
3. ¿Dónde debemos comprobar que un correo no está registrado?
    
4. ¿Qué sucedería si el navegador pudiera decidir libremente qué alumnos guardar?
    

## 8. Ejercicios

### Ejercicio E01 – Cliente o servidor

Clasifica las siguientes operaciones:

1. Cambiar el color de un botón al pulsarlo.
    
2. Consultar los productos de una base de datos.
    
3. Mostrar el nombre del usuario.
    
4. Comprobar que una contraseña es correcta.
    
5. Calcular visualmente el precio total de una cesta.
    
6. Guardar una compra.
    
7. Mostrar un mensaje de error.
    
8. Verificar que el usuario tiene permiso para eliminar un registro.
    
9. Mostrar una fotografía.
    
10. Recuperar el historial de pedidos.
    

Para cada operación indica:

- Front-end o back-end.
    
- Justificación.
    
- Si podría intervenir también el otro entorno.
    

### Ejercicio E02 – Diseña una aplicación

Imagina que vas a desarrollar una aplicación para gestionar las notas de los alumnos.

La aplicación debe permitir:

- Mostrar una lista de alumnos.
    
- Consultar sus notas.
    
- Añadir una nueva nota.
    
- Modificar una nota.
    
- Calcular la media.
    
- Guardar los cambios.
    

Clasifica cada operación y explica qué tecnologías utilizarías en el front-end y en el back-end.

### Ejercicio E03 – Detecta los errores

Un compañero afirma lo siguiente:

1. HTML es un lenguaje que se ejecuta en el servidor.
    
2. JavaScript solo puede ejecutarse en el navegador.
    
3. CSS se utiliza para guardar información en bases de datos.
    
4. El servidor se encarga de mostrar los botones.
    
5. El navegador puede validar un formulario, pero el servidor también debe comprobar los datos importantes.
    

Indica cuáles son correctas y corrige las incorrectas.

### Reto final – Diseña la arquitectura de un pequeño sistema

Una academia quiere desarrollar una aplicación para gestionar sus cursos.

Los usuarios podrán:

- Consultar cursos.
    
- Inscribirse.
    
- Consultar sus inscripciones.
    
- Cancelar una inscripción.
    

Diseña un esquema que incluya:

1. El cliente.
    
2. El servidor.
    
3. La base de datos.
    
4. Las operaciones que realiza cada elemento.
    
5. Las tecnologías que utilizarías.
    

Explica por qué has asignado cada responsabilidad.

## 9. Resumen de la sesión

- Las aplicaciones web suelen utilizar una arquitectura cliente-servidor.
    
- El cliente solicita recursos y presenta la información.
    
- El servidor procesa peticiones y gestiona operaciones y datos.
    
- El front-end se ocupa de la interfaz y la interacción.
    
- El back-end se ocupa de la lógica y el procesamiento en servidor.
    
- HTML, CSS y JavaScript trabajan conjuntamente en el entorno cliente.
    
- Las comprobaciones importantes deben realizarse también en el servidor.
    

## 10. Autoevaluación

Marca cada afirmación:

- Sé explicar qué es una arquitectura cliente-servidor.
    
- Distingo front-end y back-end.
    
- Conozco la función de HTML, CSS y JavaScript.
    
- Sé identificar dónde se ejecuta una operación.
    
- Comprendo por qué no debemos confiar exclusivamente en las validaciones del navegador.