//object literal

let yo = {
    name: "Loki",
    surname: "Laufeyson",
    //pueden arreglos
    sports: ["futbol","chess","video games"],
    age: 35,
    isGod: true,
    //pueden ser otros objetos  
    adress: {
        street: "Asgard Av.",
        number: 123,
    },
    //pueden ser funciones
    allSports: function() {
        console.log(this.sports);
    },
};

//un objeto vacio
let obj0 = {};

//desde ES6, es posible crear objetos utilizando variables como nombre de propiedad

let aproperty = "phone";
//un objeto litral con una computed property name
let computed = {
    name: "Thor",
    surname: "Odinson",
    [aproperty]: "+54 2920 123456",
};

//Cada vez que el int ́erprete de JavaScript eval ́ua un objeto literal se crea la
//instancia. Las propiedades de los objetos se acceden utilizando la notaci ́on
//de punto. Veamos un ejemplo:

console.log(yo.name);
console.log(yo.sports[0]);
console.log(yo.adress.street);
yo.allSports();

/*En JavaScript es posible agregar propiedades nuevas en tiempo de ejecuci ́on
a los objetos. Este concepto es sumamente importante para entender algunas  ́
cuestiones m ́as adelante. Observen el siguiente ejemplo. En las l ́ınes 3 y 4, se
agregan las propiedades x e y (inicializadas) al objeto obj. */

let obj = {a: 1, b: 2};
//agrego nuevas propiedades
obj.x = 10;
obj.y = 20;

//Podemos utilizar la expresi ́on denominada spread syntax con objetos tambien:

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    c: 3,
    d: 4,
};
let obj3 = {
    ...obj1,
    ...obj2,
};


//Podemos crear objetos a partir de variables inicializadas, de la siguiente
//forma:

let a = 1, b = 2;

let obj4 = {
    a,
    b
};

/*Hasta el momento hemos visto cómo crear objetos utilizando la notación
literal. Pero para aquellos que venimos estudiando lenguajes estáticos y
compilados como Java, nos estaremos preguntando qué pasa si necesitamos
una cantidad de instancias desconocidas, y con igual estructura, o sea, creadas
a partir de una clase. Para esto, en JavaScript tenemos lo que denominamos
constructor functions. También tenemos clases como veremos más adelante,
pero las clases vienen mucho después, es importante primero entender como
funciona una funcion constructora.*/

//Por convención el nombre de una función constructora comienza con
//mayúscula. Veamos algunos ejemplos a continuación:

function Book(name,authors, publishedYear) {
    this.name = name;
    this.authors = authors;
    this.publishedYear = publishedYear;
    this.fullName = function() {
        return this.name + " by " + this.authors + ". " + this.publishedYear;
    };
}

let thisBook1 = new Book("The Lord of the Rings", ["J.R.R. Tolkien"], 1954);

thisBook1.fullName(); // "The Lord of the Rings by J.R.R. Tolkien. 1954"

let archBook1 = new Book("The Arch of Triumph", ["Erich Maria Remarque"], 1945);

archBook1.fullName(); // "The Arch of Triumph by Erich Maria Remarque. 1945"

/*Como podemos observar del ejemplo anterior, la función Book se parece
mucho a un constructor de los que solemos tener cuando escribimos clases
en lenguajes como Java. En las líneas 92, 93 y 94 definimos propiedades y las
inicializamos con los parámetros recibidos. En la línea 95 definimos el método
fullName(). Luego, en las líneas 100 y 104 creamos dos instancias de Book e
invocamos al método fullName().*/

/*Ejercicio: Cree un objeto literal que modele los datos de una tarjeta
de crédito e imprímalo en consola.*/

let creditCard = {
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "Dave Mustaine",
    expirationDate: "12/26",
    cvv: "018",

    printCardInfo: function() {
        console.log(`Card Number: **** **** **** ${this.cardNumber.slice(-4)}`);
        console.log(`Card Holder: ${this.cardHolder}`);
        console.log(`Expiration Date: ${this.expirationDate}`);
    }
};

creditCard.printCardInfo();


//Un Lenguaje basado en Prototipos

/*Ahora que sabemos como crear objetos con notación literal, como crear
instancias a partir de funciones constructoras, podemos continuar explicando
qué significa que JavaScript sea un lenguaje basado en prototipos. Los
lenguajes basados en prototipos son un estilo de lenguajes orientados a
objetos en los cuales los objetos son creados sin crear previamente una
clase. Por este motivo, estos lenguajes también son conocidos como lenguajes
classless (sin clases). Por otro lado, lenguajes como Smalltalk, Java, C++ y
C#, para nombrar algunos, son conocidos como lenguajes class-based (basados
en clases).
En los lenguajes basados en prototipos, no hay clases, solo objetos. No
existe esa diferencia entre clase y objeto. En lenguajes basados en clases,
definimos una estructura estática con la posibilidad de definir entre ellas una
relación de herencia, la cual no es posible modificar en tiempo de ejecución.
En lenguajes basados en prototipos sólo tenemos instancias. No tenes clases,
se hace evidente a medida vamos entendiendo cómo funciona JavaScript.
Veamos algunos ejemplos.
Tal cual implementamos la función constructora Book en el ejemplo anterior,
no es la forma ideal. Observemos por qué con el siguiente ejemplo:*/

let thisBook2 = new Book("The Lord of the Rings", ["J.R.R. Tolkien"], 1954);
let archBook2 = new Book("The Arch of Triumph", ["Erich Maria Remarque"], 1945);

//printing thisBook

//Book {
//    name: 'The Lord of the Rings',
//    authors: [ 'J.R.R. Tolkien' ],
//    publishedYear: 1954,
//    fullName: [Function (anonymous)]
//  }
    
//printing archBook
//Book {
//    name: 'The Arch of Triumph',
//    authors: [ 'Erich Maria Remarque' ],
//    publishedYear: 1945,
//    fullName: [Function (anonymous)]
//  }


/*En el ejemplo anterior, creamos dos instancias: thisBook y archBook, y
luego las imprimimos. Como podemos observar, cada una de las instancias no
solo cuenta con sus propiedades y valores, sino que también tiene la propiedad
fullName, con su código. Los fuentes de ese método no es almacenado en una
clase y compartido por las instancias de dicha clase como en los lenguajes
basados en clases. Si no que esta incluido en cada instancia. Este es un detalle
de implementación que tenemos que es importante entender, pero además
devela una de las diferencias que podemos encontrar en lenguajes basados en
prototipos.
¿Pero qué sucede con la herencia? Al no tener clases, ¿tenemos herencia?
La respuesta es Sí. La diferencia es que la relación de herencia en lenguajes
basados en prototipos es dinámica, es decir que se puede establecer y cambiar
en ejecución. Para entender cómo funciona la herencia en lenguajes sin clases,
vamos a presentar el concepto de prototype.
Cada objeto en JavaScript (y en general en cualquier lenguaje basado en
prototipos) puede estar asociado a lo que se denomina un objeto prototipo,
del cual hereda todas sus propiedades y métodos. Si sobre una instancia
queremos acceder a una propiedad y esta no está definida allí, se delega
su búsqueda en el objeto prototipo asociado. Como los prototipos pueden
tener también un prototipo, se delegará en ellos hasta que se encuentre la
propiedad o termina la ejecución con error al no encontrarla. Esto se conoce
como prototype chain.
Las funciones constructoras tienen acceso a una propiedad especial denominada
prototype y la podemos acceder de la siguiente forma: Book.prototype. Con
una instancia de un objeto es posible acceder a esta propiedad de la siguiente
forma: thisBook.__proto__ o lo que es lo mismo: Object.getPrototypeOf(thisBook).
Sabiendo esto, entonces si queremos mejorar la función constructora Book
de modo de que cada instancia no cuente con los métodos que se definen, la
creamos de la siguiente forma: */

function Book2(name, authors, publishedYear) {
    this.name = name;
    this.authors = authors;
    this.publishedYear = publishedYear;
}

Book2.prototype.fullName = function() {
    return this.name + " by " + this.authors + ". " + this.publishedYear;
};

let thisBook3 = new Book2("The Lord of the Rings", ["J.R.R. Tolkien"], 1954);
let archBook3 = new Book2("The Arch of Triumph", ["Erich Maria Remarque"], 1945);

//printing thisBook
//Book {
//    name: 'The Lord of the Rings',
//    authors: [ 'J.R.R. Tolkien' ],
//    publishedYear: 1954
//  }

//printing archBook
//Book {
//    name: 'The Arch of Triumph',
//    authors: [ 'Erich Maria Remarque' ],
//    publishedYear: 1945
//  }

console.log(thisBook3.fullName());
console.log(archBook3.fullName());

/*En el ejemplo anterior, definimos el método fullName() en el prototipo,
en la línea 212. Luego creamos dos instancias y las imprimimos. Ahora podemos
ver que el método fullName() no está en éstas instancias. Sin embargo, si
lo invocamos así:
1 thisBook.fullName();
JavaScript buscará primero el método en la instancia thisBook. Al no
encontrarlo, irá por su prototipo y la ejecutará.
Toda cadena de prototipos finaliza en Object.prototype, dado que todo
objeto en JavaScript es descendiente de Object. Con lo cual, si ejecutamos
la siguiente invocación:
1 thisBook.valueOf();
JavaScript recorrerá la cadena de prototipos hasta encontrar el método
valueOf() en Object.prototype. Creemos ahora un ejemplo utilizando
herencia. Crearemos el objeto EBook que hereda de Book, como se muestra a
continuación.*/

function EBook(filesize, name, authors, publishedYear) {
    //llamamos al constructor padre
    Book2.call(this, name, authors, publishedYear);
    this.filesize = filesize;
}
let eBook = new EBook(2.5, "Digital Fortress", ["Dan Brown"], 1998);

console.log(eBook); 
//EBook { filesize: 2.5, name: 'Digital Fortress', authors: [ 'Dan Brown' ], publishedYear: 1998 }

/*En el ejemplo anterior creamos la función constructora EBook. En la línea
254, invocamos a la función constructora Book y para ello utilizamos el método
call (Function.prototype.call) que permite invocar una función pasándole
como parámetro el valor que utilizará para this. En este caso observen que
le pasamos aquella instancia de EBook que se crea vía el operador new, en la
línea 5. Esto que estamos haciendo es similar a utilizar super(...) dentro
de un constructor de una clase, para instanciar e inicializar la superclase.
En la línea 257, como mencionamos, creamos una instancia de EBook e
imprimimos la instancia. Vemos como resultado de la impresión que contamos
con las propiedades de Book también. Sin embargo, no tenemos el método
fullName() definido en Book.prototype. Para heredarlo necesitamos setear
como prototipo a Book.prototype. Lo hacemos de la siguiente manera:*/

Object.setPrototypeOf(EBook, Book2.prototype);

//Otra forma de hacer lo mismo de arriba:
//thisEBook.__proto__ = Book.prototype;
//Ojo que __proto__ esta deprecado

/*Object.setPrototypeOf recibe dos parámetros, el primero es la instancia
a la cual le asigno un prototipo y el segundo parámetro es el prototipo a
asignar.*/