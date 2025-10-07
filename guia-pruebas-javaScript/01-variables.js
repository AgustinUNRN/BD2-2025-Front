    const Hello = "Hello World";

    let myFirstVariable = "Imprimiendo... " + Hello;
    console.log(myFirstVariable);

    let changeMyType = "Hello String";
    console.log(typeof changeMyType);
    changeMyType = 5;
    console.log(typeof changeMyType);


/*Ejercicio: Declare una variable sin inicializar e imprímala en la consola.*/

    let variableSinInicializar;
    console.log(variableSinInicializar);

/*Ejercicio: Declare una variable utilizando la palabra reservada const
y luego intente asignarle un nuevo valor.*/

    const constante = "constante";
    constate = "nuevo valor"; // Esto generará un error porque las constantes no pueden ser reasignadas.

/*Ejercicio: Pruebe el ejemplo anterior y revise el tipo de la variable
changeMyType utilizando typeof.*/

    let changeMyType2 = "Hello String";
    console.log(typeof changeMyType2);
    changeMyType2 = 5;
    console.log(typeof changeMyType2);