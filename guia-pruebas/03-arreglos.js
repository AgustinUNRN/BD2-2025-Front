/* Si quisieramos incorporar todos los elementos de un arreglo a otro,
tenemos la opcion de utulizar la construccion sintatica denominada spread syntax */
let myParents = ["Maria", "Jose"];
let JoseParents = ["Carmen", "Antonio"];
let family = ["juan","Ana","Luis","Enrique"];
let all = [...myParents, ...JoseParents, ...family];
console.log(all);

/* tambien  es posible utilizar spread syntaxt en los parametros de las funciones para
indicar un numero indefinido de argumentos*/
function restParams(param1, param2, ...params){
}

restParams

/*la forma clasica de iterar sobre un arreglo es utilizando la construccion sintatica for,
como se muestra a continuacion */

let family2 = ["juan","Ana","Luis","Enrique"];
for (let element of family2){
    console.log("regular for: " + element);
}

//sin embargo, los arreglos proveen de un conjuto de metodos muy convenientes
//y que utilizaremos con frecuencia. El mas simple es el metodo forEach

let family3 = ["juan","Ana","Luis","Enrique"];

family3.forEach(function(value, index, array){
    //value es el valor del elemento actual
    //index es el indice del elemento actual
    //array es el arreglo sobre el cual se esta iterando
    console.log(value, index, array);
});

//foreach acepta 3 argumentos, value que es el elemento a procesar,
//index que es el indice del elemento y array que es el arreglo.
//si solo nos interesa trabajar con value, podemos simplemente escribir:
console.log();
let family4 = ["juan","Ana","Luis","Enrique"];

family4.forEach((value) => {
    console.log(value);
});

//un metodo mas interesante es filter, el cual se utiliza para procesar el arreglo
//y devolver otro con igual o menor numero de elementos. Recibe una funcion con los
//mismos parametros que forEach y devuelve un arreglo para aquellos elementos donde
//la funcion evalua a true.

let family5 = ["juan","Ana","Luis","Enrique"];

let members = family5.filter((member) => {
    return member.length > 5;
});
console.log("Length mayor a 5: " + members);

//filter recibe una funcion que evalua por cada elemento del arreglo si es mayor a 5
//aquellos elementos que sean mayores a 5 seran parte del nuevo arreglo members.
//El arreglo original no se ve modificado.
//Otro metodo interestante es map, este metodo, al igual que filter, recibe una funcion
//como parametro y retorna otro arreglo con el resultado de aplicar la funcion a cada
//elemento del arreglo original.

let numbers = [1,2,3,4,5,6,7];
console.log("Arreglo original: " + numbers);
const doubles = numbers.map((element) => {
    return element * 2;
});
console.log("Elementos del arreglo multiplicados por 2: " + doubles);

//estos metodos se pueden combinar. Veamos el siguienre ejemplo. Primero aplicamos
//filter para quedarnos con los numeros impares y luego map para multiplicar por 2
//cada elemento del nuevo arreglo.

let numbers2 = [1,2,3,4,5,6,7];
console.log("Arreglo original: " + numbers2);
const chain = numbers2.filter((element) => {
    return element % 2 !== 0;
}).map((element) => {
    return element * 2;
});
console.log("Elementos impares multiplicados por 2: " + chain);

//Existe una forma de asignar cada uno de los elementos de un arreglo a una variables
// que se denomina destructuring. Veamos un ejemplo:

let [one, two, three] = [1, 2, 3];

let fewNumbers = [1,2,3];
[one, two, three] = fewNumbers;

let [a, b, ...rest] = [1,2,3,4,5];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

console.log("\nEjercicio: \n");

//Escriba una arrow function que reciba un arreglo de string por parametro
//y transforme el arreglo utilizando map invirtiendo cada uno de sus elementos.
//Es decir, si el arreglo de entrada es: ['abc123','456cde'], el resultado deberia ser:
//['321cba','edc654']

