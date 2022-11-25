/*//1. Crear dos variables numéricas (numero1, numero2) con un valor del 1 al 100 y mostrarlas por consola.
let numero1 = 20, numero2 = 50;
console.log("El primer numero es: " + numero1 + " y el segundo numero es: " + numero2);

/*2. Crear 3 strings. Asignarles los siguientes valores:
- resultado1 = "La suma entre ambos números es x"
- resultado2 = "El producto entre ambos números es y"
- resultado3 = "El número z es el mayor"
Donde x, y, z serán los valores correspondientes en cada caso. Mostrar los 3 strings por consola.*/

/*let resultado1 = "La suma entre ambos números es " + (numero1 + numero2);
let resultado2 = "El producto entre ambos números es " + (numero1 * numero2);
let resultado3 = "El numero " + numero2 + " es el mayor";

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);*/

/*3. Mostrar por consola los siguientes resultados:
-La longitud del string resultado1.
-En qué índice de resultado2 comienza el número que indica el resultado de la multiplicación.
-Si numero1 es mayor que numero2, pero solamente utilizando el string resultado3. No pueden comparar numero1 y numero2. */

/*console.log("La longitud del string resultado1: " + resultado1.length);
console.log("indice donde comienza el valor de la multiplicacion: " + resultado2.indexOf(numero1 * numero2));

if (resultado3.indexOf(numero2) === -1) {
    console.log("El numero1 es es mayor que numero2");
} else {
    console.log("El numero2 es mayor que numero1");
}*/




let contacto = new Object();
let telefono = document.getElementById("telefono");
telefono.addEventListener("keypress", validacion);
let enviar = document.getElementById("submit");
enviar.addEventListener("click", asignarContacto);

function asignarContacto(event) {
    event.preventDefault() // evita que refresque la pagina
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    contacto.nombre = nombre + " " + apellido;
    contacto.telefono = document.getElementById("telefono").value;
    contacto.mensaje = document.getElementById("mensaje").value;
    if (nombre != "" && apellido != "" && contacto.telefono != "" && contacto.mensaje != "") {
        alert("Mensaje Enviado! Gracias por contactarte, " + contacto.nombre);
        console.log(contacto);
    } else {
        alert("Debe completar todos los campos");
    }
}

function validacion(event) {
    let tecla = event.charCode; //asigna a la variable tecla el codigo ascii de la letra presionada
    if (tecla >= 46 && tecla <= 57) {//rango de los numeros en codigo ascii
        return true;
    }
    else {
        return false;
    }
}





