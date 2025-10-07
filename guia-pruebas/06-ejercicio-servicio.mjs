/*Ejercicio: Cree un módulo servicio.mjs (los módulos en nodejs
requieren de la extensión .mjs) y exponga la función creada
anteriormente para invertir los elementos de un arreglo. Luego
importe dicha función desde un archivo cliente.mjs e invóquela.*/

function invertStrings(arr) {
    return arr.map((str) => {
        return str.split('').reverse().join('');
    });
}

export { invertStrings };