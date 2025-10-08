/*Veamos otra forma que nos da JavaScript de trabajar con las Promises.
Como mencionamos en la sección anterior, para obtener el resultado de una
llamada utilizando fetch tenemos que manejar el objeto Promise, veamos
el siguiente ejemplo:*/

console.log('=== EJEMPLO 1: Usando fetch ===');

function fetchBlogPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

fetchBlogPosts();

/*Como se puede ver en la línea 7 anterior, el método fetch devuelve una
promesa, lo que nos permite llamar al método then en él para trabajar con
los datos de la respuesta.*/

/*Otra forma de manejar las promesas es mediante el uso de las keywords
async y await. Estas palabras clave se agregaron a JavaScript en ES2017,
lo que nos permite escribir código asíncrono de manera síncrona. Vamos a
reescribir el ejemplo anterior para aprovechar estas palabras clave:*/

async function fetchPost(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    data = await data.json();
    console.log('\n=== EJEMPLO 2: Usando fetch con timeout personalizado ===');
    console.log(data);
}

fetchPost();

/*Como se puede ver, es necesario declarar la función con la palabra clave
async (línea 25) y la llamada a fetch en la línea 26 se antepone con la palabra
clave await. Anteponer la palabra clave await a la función fetch significa
que, en lugar de devolver un objeto Promise, devuelve un objeto Response.
Esto nos permite llamar directamente en la línea 27 al método json() del
objeto Response. Como ese método devuelve una promesa, también anteponemos
la sentencia con la palabra clave await, lo que nos da un objeto JavaScript
que finalmente se imprime en la consola.
Es importante tener en cuenta que la palabra clave await solo se puede
utilizar dentro de una función async.*/

