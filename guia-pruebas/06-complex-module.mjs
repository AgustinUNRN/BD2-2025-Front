/*En ECMAScript 2015 (ES6) incorporaron al lenguaje la posibilidad de
definir módulos. En las versiones anteriores de JavaScript si queríamos definir
módulos teníamos que utilizar alguna herramienta externa como requirejs [4].
Ahora está soportado de forma nativa.
Realmente es muy simple de utilizar. En un archivo JavaScript podemos
definir funciones, clases, objetos, constantes, variables, etc y exportar solo
aquellos que queremos que sean visibles para los clientes del módulo. Para
exportar utilizamos la palabra reservada export. Los clientes del módulo
deben importar explícitamente aquello que quieran utilizar. Importan utilizando
la palabra reservada import. Veamos algunos ejemplos:*/

//mi modulo complx.module.js

export function complexThing() {
    console.log("ejecutando algo complejo...");
}

export let obj = {
    a: 1,
    b: 2,
}

export class ASimpleClass {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log("printing: " + this.name);
    }
}

//En el módulo complex-module.js del ejemplo anterior exportamos una
//función, un objeto y una clase. También es posible realizar lo mismo de la
//siguiente forma:

function complexThing2() {
    console.log("ejecutando algo complejo 2...");
}

let obj2 = {
    a: 10,
    b: 20,
}

class AnotherSimpleClass {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log("printing: " + this.name);
    }
}

export { complexThing2, obj2, AnotherSimpleClass };

/*Por supuesto, en un módulo solo debemos exportar aquello que queremos
exponer hacia afuera del módulo y no todo como en este caso hemos hecho.
*/

function complexThing3() {
    console.log("ejecutando algo complejo 3...");
}

let obj3 = {
    a: 100,
    b: 200,
}

class ASimpleClass3 {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log("printing: " + this.name);
    }
}

export default ASimpleClass3;
export { complexThing3, obj3 };

/*Esto nos permite, como vemos en el siguiente ejemplo en la línea 26,
importar la clase pero con un nombre diferente al que se definió en el módulo
donde reside.*/