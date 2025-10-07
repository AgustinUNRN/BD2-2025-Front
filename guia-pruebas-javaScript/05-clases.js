/*Sí! JavaScript tiene clases y su sintaxis es muy similar a la que conocemos
de lenguajes basados en clases como Java. Las clases en JavaScript fueron
incorporadas al lenguaje en 2015 como parte de EcmaScript 6 (ES6). Lo que
es importante entender, es que esto no transforma a JavaScript en un lenguaje
basado en clases. Las clases son solo una mejora sintáctica (syntactic sugar)
para poder utilizar herencia sin lidiar con lo que mostramos en la sección
anterior. Por detrás siempre son funciones constructoras y herencia basada
en prototipos*/

//Implementemos entonces la jerarquía Book e EBook de la sección anterior
//pero ahora utilizando clases:

class Book {
    constructor(name, authors, publishedYear) {
        this.name = name;
        this.authors = authors;
        this.publishedYear = publishedYear;
    }

    //este método se agrega a Book.prototype
    fullName() {
        return this.name + "by" + this.authors + ". " +this.publishedYear;
    }
}

class EBook extends Book {
    constructor(fileSize, name, authors, publishedYear) {
        super(name, authors, publishedYear);
        this.fileSize = fileSize;
    }

    fullName() {
        return super.fullName() + " (File Size: " + this.fileSize + "MB)";
    }
}

/*En el ejemplo anterior construimos la relación de herencia entre EBook y
Book, utilizando clases. Pero en ejecución termina quedando exactamente lo
mismo que utilizando funciones constructoras como lo hicimos en la sección
anterior. Veamos el siguiente ejemplo que lo demuestra:*/

let ebook = new EBook(2048, "The Lord of the Rings", ["J.R.R. Tolkien"], 1954);

console.log("ebook es instancia de Book: " + (Book.prototype.isPrototypeOf(ebook))); // true
//el método fullName esta en prototype
console.log("ebook.fullName() = " + ebook.fullName()); // The Lord of the Rings by J.R.R. Tolkien. 1954 (File Size: 2048MB)
//EBook es una función, no una clase
console.log("ebook es una: " + typeof EBook); // function

/*Primero hemos creado una instancia de EBook y luego en la línea 44
verificamos que Book.prototype está seteado como el prototipo de la instancia
ebook. De esta forma comprobamos que tenemos en ejecución la relación de
herencia basada en prototipos como construimos en la sección anterior.*/



//¿Cómo se comporta el this en JavaScript?



/*En las secciones anteriores hemos estado utilizando this en aquellas
situaciones en las que tu comportamiento es el mismo que en lenguajes
basados en clases como Java o C#. Sin embargo, hay ciertas diferencias
para algunas construcciones sintácticas que necesitamos entender para poder
luego entender el porqué de algunas cuestiones que necesitamos hacer en
React.
Si utilizamos this en funciones constructoras y creamos las instancias
utilizando new, this apuntará a la instancia creada. Sin embargo, si la función
constructora es invocada (como lo haríamos con cualquier función), this
tendrá otro valor. Veamos el siguiente ejemplo:*/

function Constr(param) {
this.param = param;
}

Constr(2); //this apunta al objeto global window
//console.log(window.param); //imprime 2 en navegadores
//como estoy usando node.js y no un navegador tengo que usar global
console.log(global.param); //imprime 2

/*Invocando a la función Const tal como lo hacemos en la línea 76 tiene un
efecto bastante extraño. En estos casos, this apunta al objeto global window.
Con lo cual, lo que termina haciendo  este ejemplo es agregando la propiedad
param al objeto window con el valor 2.
El ejemplo anterior no es algo que vayamos a utilizar con frecuencia en
React, sin embargo son cuestiones a tener presentes. Otra forma donde el
this pierde valor es cuando asignamos un método a una variable, y  esto sí es
importante entender si queremos usar clases en React. Veamos el siguiente
ejemplo: */

class Person{
    constructor(name){
        this.name = name;
    }

    saySomething(){
        console.log(this.name + " is talking...");
    }
}

let loki = new Person("Loki");
loki.saySomething(); // Loki is talking...

let o = loki.saySomething; //asigno el método a una variable
//o(); //TypeError: Cannot read property 'name' of undefined

/*En el ejemplo anterior creamos en la línea 101 una instancia de la clase
Person y luego en la línea 102 invocamos al método saySomething(). Hasta
aquí todo perfecto, el this en la línea 97 funciona tal como esperamos.
Sin embargo, en la línea 104 asignamos el método a una variable y en la
siguiente línea utilizamos dicha variable para invocar al método. En esta
ocasión, this es undefined, provocando un error. Para arreglar este comportamiento,
necesitamos, en forma explicita, decirle al método qué valor de this queremos
que utilice, algo similar a lo que hicimos con el método call en secciones
anteriores. Veamos cómo lo resolvemos con el siguiente ejemplo:*/

class Person2{
    constructor(name){
        this.name = name;
        this.saySomething = this.saySomething.bind(this);
    }
    
    saySomething(){
        console.log(this.name + " is talking..."); 
    }
}

let thor = new Person2("Thor");
thor.saySomething(); // Thor is talking...

let p = thor.saySomething; //asigno el método a una variable
p(); // Thor is talking...

/*El método bind que utilizamos en la línea 120, devuelve la misma función
pero con el valor de this seteado con el parámetro recibido. En este caso,
le pasamos this, el cual apuntará a la instancia creada. De esta forma al
invocar nuevamente utilizando p(), funcionará de la forma esperada.

Otra forma de solucionar este mismo inconveniente es declarando el método
dentro de la clase utilizando funciones flecha (arrow functions). Veamos el
siguiente ejemplo:*/

class Person3{
    constructor(name){
        this.name = name;
    }

    saySomething = () => {
        console.log(this.name + " is talking...");
    }
}

let odin = new Person3("Odin");
odin.saySomething(); // Odin is talking...

let q = odin.saySomething; //asigno el método a una variable
q(); // Odin is talking...

/*Definiendo el método saySomething de esta forma no tendremos el inconveniente
que mostramos antes. Las funciones flecha le asignan al this el valor que
tenga en el ámbito léxico en el que se crean. El cual en este caso es la
clase. Sin embargo, lo métodos definidos de esta forma no son agregados
al prototipo del objeto sino que son parte del objeto, provocando lo que ya
hemos mencionado que cada nueva instancia tendrá una copia del código del
método.*/