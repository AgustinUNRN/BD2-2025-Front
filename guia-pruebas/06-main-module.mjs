/*Veamos ahora cómo podemos utilizar y consumir lo exportado por un
módulo.*/

//este es el módulo main-module.js
import { complexThing, obj, ASimpleClass } from './06-complex-module.mjs';

//invocando a la función importada
complexThing(); // ejecutando algo complejo...

//imprimimos el objeto importado
console.log(obj.a); // 1

let o = new ASimpleClass("Loki");
o.print(); // printing: Loki

/*En la línea 5 importamos las tres abstracciones que 06-complex-module.mjs
exporta. Y simplemente las utilizamos como si estuvieran definidas allí mismo.
Es posible definir una abstracción a exportar por defecto. Observen en el
siguiente ejemplo cómo exportamos las mismas abstracciones pero la clase la
exportamos utilizando las palabras reservadas export default:*/

/*Esto nos permite, como vemos en el siguiente ejemplo en la línea 26,
importar la clase pero con un nombre diferente al que se definió en el módulo
donde reside.*/

import AClass3 from './06-complex-module.mjs';
//lo mismo que:
//import { default as AClass } from "./06-complex-module.mjs";
import { complexThing3, obj3 } from './06-complex-module.mjs';

let o3 = new AClass3("Thor");
o3.print(); // printing: Thor

//... más lineas de código aca