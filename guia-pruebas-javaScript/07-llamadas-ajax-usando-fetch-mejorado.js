/*A partir de la versión ES6 podemos realizar peticiones Ajax utilizando el
método fetch. La firma de  este método es la siguiente:*/

//promise<Response> fetch(url, [init]);

/*Promise es un objeto que representa un valor que puede estar disponible
ahora, en el futuro o nunca. Es el resultado de una operación asíncrona.
Luego volveremos sobre Promise. Como parámetros el método fetch recibe
la URL a la cual invocará y de forma opcional un objeto para configurar el
tipo de petición que se realizará. Por ejemplo, la forma más simple de utilizar
fetch es la siguiente:*/

// Función auxiliar para crear un timeout personalizado
function fetchWithTimeout(url, options, timeout = 10000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), timeout)
        )
    ]);
}

console.log('=== EJEMPLO 1: Petición GET simple ===');
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', {}, 15000)
    .then(response => {
        console.log('Status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log('Respuesta exitosa:');
        console.log(json);
    })
    .catch(error => {
        console.log('Error en petición GET:', error.message);
        
        // Alternativa local para demostración
        console.log('\n=== SIMULACIÓN LOCAL (GET) ===');
        const simulatedData = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        console.log('Datos simulados:', simulatedData);
    });

/*Observen que solo utilizamos el primer parámetro que es el único obligatorio.
Esta es una petición HTTP de tipo GET que retorna de un servicio de blog
ficticio el post con identificador 1. Las peticiones HTTP de tipo GET solo
deben utilizarse para recuperar datos, nunca para realizar alguna inserción
o modificación. Son peticiones idempotentes, es decir que el efecto que
provoca en el servicio que consume es el mismo ya sea enviando una única
petición o múltiples.

La función fetch retorna un objeto Promise, el cual expone dos métodos
que utilizaremos mucho: then(funcion(response)) y catch(funcion(error)).
then(funcion(response)) se llama si hubo una respuesta exitosa por parte
del servicio que estamos consumiendo y como parámetros tenemos la respuesta.
Entonces con la respuesta en la línea 14 la transformamos a un JSON y luego
en la línea 15 lo imprimimos en la consola. Finalmente el método catch(funcion(error))
es invocado si hubiera algún error con la respuesta obtenida o en su defecto
si no es posible obtener respuesta alguna.

Veamos ahora cómo podemos utilizar el parámetro opcional del método
fetch para realizar una petición de tipo POST. El método POST no es
idempotente, llamarlo varias veces tendrá efectos adicionales sobre el servicio
invocado. Veamos un ejemplo:*/

console.log('\n=== EJEMPLO 2: Petición POST ===');
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        name: "Loki",
        username: "loki.laufeyson",
        email: "loki.laufeyson@example.com",
    }),
}, 15000)
    .then(response => {
        console.log('Status POST:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log('Respuesta POST exitosa:');
        console.log(json);
    })
    .catch(error => {
        console.log('Error en petición POST:', error.message);
        
        // Alternativa local para demostración
        console.log('\n=== SIMULACIÓN LOCAL (POST) ===');
        const simulatedResponse = {
            name: "Loki",
            username: "loki.laufeyson",
            email: "loki.laufeyson@example.com",
            id: 101 // ID simulado del nuevo post creado
        };
        console.log('Respuesta simulada POST:', simulatedResponse);
    });

/*Observemos que como segundo parámetro del método fetch estamos pasando
un objeto literal con las siguiente propiedades:
method: Aquí especifico que es un request de tipo POST.
headers: Aquí le aviso al servicio al cual estoy invocando que los datos
enviados como valor de la propiedad body tienen una estructura JSON.
body: Aquí van los datos a enviar. Observen que se utiliza el método
JSON.stringify transformando un objeto literal en un JSON.*/

console.log('\n=== EJEMPLO 3: Usando async/await (más moderno) ===');

async function ejemploAsyncAwait() {
    try {
        console.log('Intentando petición con async/await...');
        
        const response = await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/2', {}, 15000);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos obtenidos con async/await:');
        console.log(data);
        
    } catch (error) {
        console.log('Error con async/await:', error.message);
        
        // Simulación local
        console.log('\n=== SIMULACIÓN LOCAL (async/await) ===');
        const simulatedData = {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        };
        console.log('Datos simulados async/await:', simulatedData);
    }
}

// Ejecutar el ejemplo async/await después de un pequeño delay
setTimeout(() => {
    ejemploAsyncAwait();
}, 2000);