// Función declarada
// Función que se declara y luego se invoca
function saySomething(string) {
    console.log(string);
}

saySomething("Hello Function!");


// IIFE - Immediately Invoked Function Expression
// Función que se declara y se ejecuta inmediatamente
(function saySomething2(string) {
    console.log(string);
})("Hello Function 2!");


//si se omite el uso de return, la función devuelve undefined
//x es undefined
let x = saySomething("Hello Function!");
console.log(x);

//Nos encontramos con una función que se asigna a la variable say
//y luego utilizamos esa variable para invocar la función
function returnSomething(string) {
    return "Esto es: " + string;
}

let say = returnSomething;

returnSomething("Hello js!");
say("Hello again!");


//en el siguiente ejemplo, invocamos una funcion pasando como parametro
//a la funcion returnSomething. y luego utilizando el argumento recibido
//realizamos la invocacion a la funcion.
function returnSomething(String) {
    return "Hola: " + String;
}

//recibe una funcion como parametro
//la invoca y retorna
function saySomethingMore(fn){
    return fn("Hey !");
}

//pasa una funcion como parametro
saySomethingMore(returnSomething);

//tambien podemos asignar una funcion a una variable directamente
//en su declaracion

//asignacion
const returnSomethingE = function(String) {
    return "This is: " + String;
};

returnSomethingE("Hey !");

//Otra forma de declarar funciones en JavaScript, de una forma algo menos verbosa,
//se denomina arrow function (función flecha)

//arrow function sin parametros
const arrowf1 = () => {
    return "arrowf1 was invoked!";
};

//arrow function con un parametro
//los parentesis no son necesarios aqui

const arrowf2 = param => {
    return "this is the argument: " + param;
};

//arrow functions con una sentencia no necesita llaves
//y tampoco es necesario el return
const arrowf3 = (a, b) => a + b;