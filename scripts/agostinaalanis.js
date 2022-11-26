//***TP4***
// 1. Crear dos variables numéricas (numero1, numero2) con un valor del 1 al 100 y mostrarlas por consola.
console.log("***Ejercicio 1***");
let numero1 = Math.floor(Math.random() * (100 - 1 + 1) + 1); //devuelve un numero entero aleatorio entre 1 y 100
let numero2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(`El número 1 es: ${numero1}`);
console.log("El número 2 es: " + numero2);

// 2. Crear 3 strings. Asignarles los siguientes valores:
// - resultado1 = "La suma entre ambos números es x"
// - resultado2 = "El producto entre ambos números es y"
// - resultado3 = "El número z es el mayor"
// Donde x, y, z serán los valores correspondientes en cada caso. Mostrar los 3 strings por consola.
console.log("***Ejercicio 2***");
let resultado1, resultado2, resultado3;

resultado1 = `La suma entre ambos números es ${numero1 + numero2}`;

resultado2 = `El producto entre ambos números es ${numero1 * numero2}`;

if (numero1 === numero2) resultado3 = `Los números son iguales`;
else if (numero1 > numero2) resultado3 = `El número ${numero1} es el mayor`;
else resultado3 = `El número ${numero2} es el mayor`;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

// 3. Mostrar por consola los siguientes resultados:
// -La longitud del string resultado1.
// -En qué índice de resultado2 comienza el número que indica el resultado de la multiplicación.
// -Si numero1 es mayor que numero2, pero solamente utilizando el string resultado3. No pueden comparar numero1 y numero2.
console.log("***Ejercicio 3***");
console.log(`La longitud del string resultado1 es: ${resultado1.length}`);
console.log(
  `El resultado de la multiplicación comineza en el índice ${resultado2.indexOf(
    numero1 * numero2
  )}`
);
if (!resultado3.includes(numero1) && !resultado3.includes(numero2))
  result = "Los números son iguales";
else if (resultado3.includes(numero1))
  result = `El número ${numero1} es el mayor`;
else result = `El número ${numero2} es el mayor`;
console.log(result);

//***TP5***
// Para este TP deberán crear una sección de "Contáctame" en el archivo HTML con el que venían trabajando. Esta sección deberá tener formulario en el que el usuario tendrá que ingresar:
// - Nombre y Apellido
// - Teléfono (Que sólo acepte números)
// - Un mensaje (Recomendación: utilizar el tag HTML <textarea>, es como un input pero que permite más caracteres)

// Al final del formulario, deberá haber un botón "Enviar". Al ser presionado, si alguno de los datos no fue ingresado, deberá mostrar en un alert el mensaje "Debe completar todos los campos". Si todos los datos fueron ingresados, deberá mostrar también en un alert "Mensaje Enviado! Gracias por contactarte, {nombre ingresado en el form}".

// A su vez, la información deberá guardarse en un objeto que deberán mostrar por consola. El objeto debería tener el siguiente formato:

// {
//     nombre: "",
//     telefono: "",
//     mensaje: ""
// }

let contacto = new Object();
let botonEnviar = document.getElementById("submit");
botonEnviar.addEventListener("click", EnviarDatos);

function EnviarDatos() {
  contacto.nombre = document.getElementById("nombre").value;
  contacto.telefono = document.getElementById("telefono").value;
  contacto.mensaje = document.getElementById("mensaje").value;
  if (
    contacto.nombre === "" ||
    contacto.telefono === "" ||
    contacto.telefono === ""
  ) {
    alert("Debe completar todos los campos");
  } else {
    alert(`Mensaje Enviado! Gracias por contactarte, ${contacto.nombre}!`);
    console.log(contacto);
  }
}
