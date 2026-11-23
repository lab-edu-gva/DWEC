---

tipo: material_alumnado  
asignatura: DWEC  
unidad: UD1  
sesion: S02  
titulo: Flujo de una petición web: cliente y servidor  
duracion: 55  
estado: preparado  
resultado_aprendizaje: RA1  
criterios_evaluacion:

- RA1.a  
    tags:
    
- dwec
    
- ud1
    
- cliente-servidor
    
- http
    

---

# S02 – Flujo de una petición web: cliente y servidor

## 1. Introducción

En la sesión anterior estudiamos que una aplicación web puede ejecutar código en dos entornos diferentes:

- **Cliente:** normalmente, el navegador del usuario.
    
- **Servidor:** el equipo o sistema que recibe peticiones, procesa información y devuelve respuestas.
    

Pero ¿cómo se comunican ambos entornos?

Imaginemos que entramos en una tienda online, seleccionamos un producto y pulsamos el botón «Añadir al carrito».

El navegador necesita comunicarse con el servidor para obtener o actualizar información. Esa comunicación sigue un proceso organizado.

En esta sesión aprenderemos a identificar las fases de ese proceso.

## 2. Objetivos

Al finalizar la sesión deberías poder:

- Explicar cómo se comunica un navegador con un servidor.
    
- Identificar una petición y una respuesta HTTP.
    
- Reconocer los principales elementos de una petición web.
    
- Diferenciar los métodos GET y POST.
    
- Interpretar el recorrido básico de una petición.
    
- Explicar qué información puede viajar entre cliente y servidor.
    

## 3. ¿Qué ocurre cuando visitamos una página web?

Cuando escribimos una dirección en el navegador, por ejemplo:

```
https://www.ejemplo.com/productos
```

no aparece mágicamente una página en pantalla.

Se produce una secuencia de operaciones:

1. El navegador interpreta la dirección solicitada.
    
2. Localiza el servidor correspondiente mediante el sistema DNS.
    
3. Establece una conexión con el servidor.
    
4. Envía una petición HTTP.
    
5. El servidor procesa la petición.
    
6. El servidor devuelve una respuesta HTTP.
    
7. El navegador interpreta la respuesta y muestra el contenido.
    

Este proceso puede repetirse muchas veces mientras utilizamos una página web.

### 3.1. Esquema general

```
┌──────────────────────┐
│       CLIENTE        │
│                      │
│      Navegador       │
└──────────┬───────────┘
           │
           │ 1. Petición HTTP
           ▼
┌──────────────────────┐
│       SERVIDOR       │
│                      │
│  Recibe y procesa    │
│  la petición         │
└──────────┬───────────┘
           │
           │ 2. Respuesta HTTP
           ▼
┌──────────────────────┐
│       CLIENTE        │
│                      │
│  Interpreta respuesta│
│  y actualiza la web  │
└──────────────────────┘
```

Es importante recordar que la comunicación no consiste únicamente en descargar una página HTML. También se solicitan imágenes, hojas de estilo, scripts, datos y otros recursos.

## 4. La dirección URL

Una URL (_Uniform Resource Locator_) identifica la ubicación de un recurso al que queremos acceder.

Ejemplo:

```
https://www.ejemplo.com:443/productos?id=25
```

Podemos dividirla en varias partes:

|Elemento|Valor|Significado|
|---|---|---|
|Protocolo|`https`|Protocolo utilizado|
|Dominio|`www.ejemplo.com`|Nombre del servidor|
|Puerto|`443`|Puerto de comunicación|
|Ruta|`/productos`|Recurso solicitado|
|Parámetro|`id=25`|Información adicional|

No todas las URL muestran explícitamente el puerto. Cuando se omite, el navegador utiliza el puerto habitual del protocolo.

Puertos habituales:

|Protocolo|Puerto habitual|
|---|---|
|HTTP|80|
|HTTPS|443|

### 4.1. ¿Qué es DNS?

Los ordenadores se comunican utilizando direcciones IP, pero las personas utilizamos nombres de dominio porque son más fáciles de recordar.

El sistema DNS (_Domain Name System_) permite traducir nombres de dominio a direcciones IP.

Por ejemplo:

```
www.ejemplo.com
       │
       ▼
      DNS
       │
       ▼
203.0.113.10
```

La dirección mostrada es un ejemplo reservado para documentación, no la dirección real de un servidor.

DNS no descarga la página ni procesa la petición HTTP: ayuda a localizar el servidor al que debemos conectarnos.

## 5. El protocolo HTTP

HTTP (_Hypertext Transfer Protocol_) es un protocolo de comunicación utilizado para intercambiar información entre clientes y servidores web.

Su funcionamiento básico sigue un modelo de petición-respuesta:

- El cliente solicita un recurso o una operación.
    
- El servidor recibe y procesa la solicitud.
    
- El servidor devuelve una respuesta.
    

HTTP es un protocolo sin estado (_stateless_): cada petición es independiente desde el punto de vista del protocolo. Si una aplicación necesita recordar que un usuario ha iniciado sesión, debe utilizar mecanismos adicionales, como cookies o sesiones.

### 5.1. Petición HTTP

Una petición HTTP contiene información que permite al servidor saber qué recurso se solicita y cómo debe tratar la petición.

Entre sus elementos podemos encontrar:

- Método HTTP.
    
- Ruta del recurso.
    
- Versión del protocolo.
    
- Cabeceras.
    
- Cuerpo, cuando corresponde.
    

Ejemplo simplificado:

```
GET /productos HTTP/1.1
Host: www.ejemplo.com
Accept: text/html
```

Interpretación:

|Elemento|Significado|
|---|---|
|`GET`|Método utilizado|
|`/productos`|Recurso solicitado|
|`HTTP/1.1`|Versión del protocolo|
|`Host`|Servidor al que se dirige la petición|
|`Accept`|Tipo de contenido que acepta el cliente|

### 5.2. Respuesta HTTP

El servidor devuelve una respuesta con información sobre el resultado de la petición.

Ejemplo:

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 120

<h1>Listado de productos</h1>
```

En este ejemplo:

- `200 OK` indica que la petición se ha procesado correctamente.
    
- `Content-Type` indica el tipo de contenido devuelto.
    
- `Content-Length` indica la longitud del contenido.
    
- El cuerpo contiene el HTML que recibe el navegador.
    

## 6. Métodos HTTP principales

El método HTTP indica qué tipo de operación pretende realizar el cliente.

### 6.1. GET

Se utiliza principalmente para solicitar información.

Ejemplo:

```
GET /productos HTTP/1.1
Host: tienda.ejemplo.com
```

Podría utilizarse para obtener el listado de productos de una tienda.

Características habituales:

- Solicita información.
    
- Los parámetros pueden aparecer en la URL.
    
- No debería utilizarse para realizar modificaciones en el servidor.
    
- Es habitual que las respuestas puedan almacenarse en caché.
    

Ejemplo de URL con parámetros:

```
https://tienda.ejemplo.com/productos?categoria=ordenadores
```

### 6.2. POST

Se utiliza habitualmente para enviar información al servidor y solicitar que realice una operación.

Ejemplo:

```
POST /usuarios HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{
  "nombre": "Ana",
  "email": "ana@ejemplo.com"
}
```

El servidor podría utilizar esos datos para registrar un nuevo usuario.

Características habituales:

- Puede enviar información en el cuerpo de la petición.
    
- Se utiliza para operaciones como crear registros o enviar formularios.
    
- No debe suponerse que el envío de datos mediante POST los cifra.
    

**Importante:** POST no significa automáticamente que los datos sean seguros. Para proteger la comunicación necesitamos HTTPS, además de las medidas de seguridad correspondientes en la aplicación.

### 6.3. Comparación entre GET y POST

|Característica|GET|POST|
|---|---|---|
|Uso habitual|Consultar información|Enviar información|
|Parámetros|Frecuentemente en la URL|Frecuentemente en el cuerpo|
|Modificación del servidor|No debería realizarla|Puede realizarla|
|Caché|Puede almacenarse|No se almacena normalmente de forma predeterminada|
|Ejemplo|Consultar productos|Registrar un usuario|

Existen otros métodos, como PUT, PATCH y DELETE, que estudiaremos cuando trabajemos con servicios y comunicación asíncrona.

## 7. Códigos de estado HTTP

El servidor informa del resultado de una petición mediante un código de estado.

Los códigos se agrupan en cinco familias:

|Rango|Significado|
|---|---|
|1xx|Información|
|2xx|Operación correcta|
|3xx|Redirección|
|4xx|Error relacionado con la petición del cliente|
|5xx|Error del servidor|

Algunos códigos habituales:

|Código|Significado|Ejemplo|
|---|---|---|
|200|OK|Se ha obtenido correctamente un listado|
|201|Created|Se ha creado un usuario|
|301|Moved Permanently|El recurso se ha trasladado permanentemente|
|400|Bad Request|La petición tiene un formato incorrecto|
|401|Unauthorized|Se necesita autenticación|
|403|Forbidden|No se permite acceder al recurso|
|404|Not Found|No existe el recurso solicitado|
|500|Internal Server Error|Se ha producido un error interno|

No debemos confundir un error HTTP con un fallo de conexión. Por ejemplo, un código 404 significa que el servidor ha respondido, pero no ha encontrado el recurso solicitado.

## 8. Ejemplo completo: consultar productos

Imaginemos una tienda online.

El usuario entra en:

```
https://tienda.ejemplo.com/productos
```

### Paso 1. El navegador localiza el servidor

El navegador consulta DNS para obtener la dirección IP asociada al dominio.

### Paso 2. El navegador establece la conexión

Al utilizar HTTPS, se establece una conexión protegida mediante TLS.

### Paso 3. El navegador envía la petición

```
GET /productos HTTP/1.1
Host: tienda.ejemplo.com
Accept: text/html
```

### Paso 4. El servidor procesa la petición

El servidor podría:

1. Recibir la solicitud.
    
2. Comprobar que la ruta existe.
    
3. Consultar una base de datos.
    
4. Preparar los resultados.
    
5. Generar una respuesta.
    

### Paso 5. El servidor responde

```
HTTP/1.1 200 OK
Content-Type: text/html
```

Cuerpo de la respuesta:

```
<h1>Productos disponibles</h1>

<ul>
  <li>Teclado - 25 €</li>
  <li>Ratón - 15 €</li>
  <li>Monitor - 180 €</li>
</ul>
```

### Paso 6. El navegador muestra el resultado

El navegador interpreta el HTML y construye la representación visual de la página.

El proceso no termina necesariamente aquí: también puede solicitar archivos CSS, JavaScript, imágenes y otros recursos.

## 9. Práctica guiada: analizar una petición

Tenemos una aplicación de biblioteca.

El usuario quiere consultar los libros disponibles y accede a:

```
https://biblioteca.ejemplo.com/libros?autor=cervantes
```

El navegador envía:

```
GET /libros?autor=cervantes HTTP/1.1
Host: biblioteca.ejemplo.com
Accept: application/json
```

El servidor responde:

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes"
  }
]
```

**Analiza la comunicación:**

1. ¿Qué método HTTP se utiliza?
    
2. ¿Cuál es la ruta solicitada?
    
3. ¿Qué parámetro aparece en la URL?
    
4. ¿Qué tipo de contenido acepta el navegador?
    
5. ¿Qué código devuelve el servidor?
    
6. ¿Qué formato de datos devuelve?
    
7. ¿Quién debe interpretar la respuesta para mostrarla al usuario?
    

## 10. Ejercicios

### E01 – Identificar las partes de una URL

Analiza la siguiente dirección:

```
https://academia.ejemplo.com:443/cursos/javascript?nivel=avanzado
```

Identifica:

1. Protocolo.
    
2. Dominio.
    
3. Puerto.
    
4. Ruta.
    
5. Parámetro.
    
6. Valor del parámetro.
    

### E02 – Elegir el método HTTP

Indica si utilizarías GET o POST en cada situación. Justifica tu decisión.

1. Consultar los datos de un alumno.
    
2. Registrar un nuevo alumno.
    
3. Consultar el catálogo de cursos.
    
4. Enviar un formulario de contacto.
    
5. Consultar las notas de un estudiante.
    
6. Enviar los datos para iniciar sesión.
    

### E03 – Interpretar códigos de estado

Explica qué podría haber ocurrido en cada situación:

1. El servidor devuelve 200.
    
2. El servidor devuelve 201.
    
3. El servidor devuelve 301.
    
4. El servidor devuelve 404.
    
5. El servidor devuelve 500.
    

### E04 – Reconstruir el proceso

Ordena correctamente las siguientes operaciones:

- El servidor consulta la base de datos.
    
- El navegador muestra la información.
    
- El navegador envía una petición HTTP.
    
- El servidor devuelve una respuesta.
    
- El navegador localiza el servidor.
    
- El servidor recibe la petición.
    

### E05 – Analizar una comunicación

Una aplicación permite consultar y registrar reservas de aulas.

Para consultar las reservas, el navegador envía:

```
GET /reservas?aula=12 HTTP/1.1
Host: centro.ejemplo.com
Accept: application/json
```

Para registrar una reserva, envía:

```
POST /reservas HTTP/1.1
Host: centro.ejemplo.com
Content-Type: application/json

{
  "aula": 12,
  "fecha": "2026-11-20",
  "hora": "10:00"
}
```

Responde:

1. ¿Qué operación utiliza GET?
    
2. ¿Qué operación utiliza POST?
    
3. ¿Dónde aparece el identificador del aula en cada petición