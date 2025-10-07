/*Ejercicio: Cree un m ́odulo servicio.mjs (los m ́odulos en nodejs
requieren de la extensión .mjs) y exponga la función creada
anteriormente para invertir los elementos de un arreglo. Luego
importe dicha función desde un archivo cliente.mjs e invóquela.*/
import { invertStrings } from './06-ejercicio-servicio.mjs';

let arr = ['abc123','456cde'];
console.log("Arreglo original: " + arr);
console.log("Arreglo invertido: " + invertStrings(arr));