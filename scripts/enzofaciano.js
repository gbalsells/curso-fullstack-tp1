/*
1. Crear dos variables numéricas (numero1, numero2) con un valor del 1 al 100 y mostrarlas por consola.

2. Crear 3 strings. Asignarles los siguientes valores:
- resultado1 = "La suma entre ambos números es x"
- resultado2 = "El producto entre ambos números es y"
- resultado3 = "El número z es el mayor"
Donde x, y, z serán los valores correspondientes en cada caso. Mostrar los 3 strings por consola.

3. Mostrar por consola los siguientes resultados:
-La longitud del string resultado1.
-En qué índice de resultado2 comienza el número que indica el resultado de la multiplicación.
-Si numero1 es mayor que numero2, pero solamente utilizando el string resultado3. No pueden comparar numero1 y numero2. 
*/

// Devuelve un nro aleatorio entre 0 y max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function suma(numero1, numero2) {
    return numero1+numero2;
}

function producto(numero1, numero2) {
    return numero1*numero2;
}

function mayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1
    }
    else if (numero2 > numero1) {
        return numero2
    }
    else {
        return "Numeros iguales"
    }
}
// Punto 1
let numero1 = getRandomInt(100);
console.log(numero1);
let numero2 = getRandomInt(100);
console.log(numero2);
// Punto 2
let resultado1 = "La suma entre ambos números es " + suma(numero1,numero2);
console.log(resultado1)
let resultado2 = "El producto entre ambos números es " + producto(numero1,numero2);
console.log(resultado2);
let resultado3 = "El número " + mayor(numero1,numero2) + " es el mayor";
console.log(resultado3);
// Punto 3
console.log("Longitud de resultado1: " + resultado1.length)
