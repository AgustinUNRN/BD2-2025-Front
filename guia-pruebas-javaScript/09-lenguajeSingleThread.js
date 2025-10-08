/*Dijimos que JavaScript es un lenguaje single threaded. Es decir, siempre
existe un único hilo de ejecución (con una única pila de ejecución y un heap)
que interpreta y ejecuta una sentencia a la vez. La siguiente sentencia no
comienza a ejecutarse hasta que la anterior no termina. Esto podría ser
muy perjudicial sobre todo con operaciones que lleven algo de tiempo. Por
ejemplo, en una petición Ajax mientras esperamos tener una respuesta de
algún servicio remoto no podríamos interactuar con alguna otra parte del
sitio web. Esto es así cuando utilizamos el método window.alert. Hasta no
apretar el botón Aceptar no es posible hacer nada más.*/

/*Por este motivo es que existen en JavaScript operaciones asincrónicas
como las llamadas Ajax que vimos en la sección anterior. Entonces, ¿cómo
es que funciona?
El intérprete de JavaScript recibe ayuda del Browser para esto. Existen
ciertas operaciones que el intérprete de JavaScript reconoce y en lugar de
ejecutarlas él mismo, las delega en el Browser, quien las ejecuta en su hilo
para luego devolverlas al intérprete como callbacks. Entre estas operaciones
encontramos los eventos (onclick, onmouseover, etc), la función Fetch o XMLHttpRequest
(ajax calls), setTimeout, etc. Para lograr esto el ambiente de ejecución de
JavaScript utiliza una pila de llamadas, el Browser, una cola de callbacks y
el loop de eventos. Observemos el siguiente ejemplo para entender cómo es
su ejecución dentro de este ambiente:*/

console.log("starting...1");

setTimeout(() => {
    console.log("callback 1");
}, 1000);

console.log("finishing...1");

/*Veamos entonces como JavaScript resuelve la ejecución de este programa:
1. La setencia de la línea 24 se inserta en la pila de llamadas y es ejecutada.
Se imprime en la consola "starting".

2. La función setTimeout de la línea 26 se delega al Browser para que este
la ejecute. Y se continúa con la ejecución de la siguiente sentencia.

3. La sentencia de la línea 30 se inserta en la pila de llamadas y es ejecutada.
Se imprime en la consola "finishing".

4. En el Browser, la ejecución de setTimeout hace que se deba esperar
un segundo. Cuando se termina, la función que recibe por parámetro
setTimeout, se inserta en la cola de callbacks. Dado que no existen en
el programa otras sentencias a ejecutar, el loop de eventos comienza
a ejecutar aquello que se encuentra en el cola de callbacks. Toma la
primera y la inserta en la pila de llamadas para luego ser ejecutada
imprimiendo "callback" en la consola.

Es importante entender que todas las funciones callback que se insertan
en la callback queue son ejecutadas luego de que no hay más sentencias para
ejecutar en el programa. Veamos un ejemplo más:*/

console.log("starting...2");

setTimeout(() => {
    console.log("callback 2");
}, 0);

console.log("finishing...2");

/*En el ejemplo anterior estamos pasando 0 segundos a setTimeout, y
de igual forma el orden en el que se imprimen los mensajes en consola
sigue siendo el mismo que en el ejemplo anterior: "starting", "finishing",
"callback". Esto es así porque los pasos de ejecución siguen siendo los
mismos. setTimeout se envía al Browser, quien agrega a la cola de callbacks
la función que recibe por parámetro para ser tomada y ejecutada solo después
de la última sentencia del programa.

El mismo comportamiento sucede con llamadas Ajax, veamos el siguiente
ejemplo:*/

console.log("starting...3");

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));
    
console.log("finishing...3");

/*La ejecución de fetch se delega en el Browser y sigue la ejecución del
programa. Cuando el Browser recibe respuesta del servicio externo al que
esta invocando, inserta las dos funciones en la cola de callbacks. Estas son
ejecutadas luego de imprimir "finishing" en la consola.
Recomiendo escuchar la charla de Philip Roberts[5] para más detalles de
cómo funciona el intérprete de JavaScript.*/