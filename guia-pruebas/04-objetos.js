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

thisBook = new Book("The Lord of the Rings", ["J.R.R. Tolkien"], 1954);

thisBook.fullName(); // "The Lord of the Rings by J.R.R. Tolkien. 1954"

archBook = new Book("The Arch of Triumph", ["Erich Maria Remarque"], 1945);

archBook.fullName(); // "The Arch of Triumph by Erich Maria Remarque. 1945"

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