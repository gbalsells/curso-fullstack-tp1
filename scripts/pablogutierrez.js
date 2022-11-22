// // 1. Crear dos variables numéricas (numero1, numero2) con un valor del 1 al 100 y 
// // mostrarlas por consola.
// let numero1= 33
// let numero2= 22

// console.log("Numero1 es",numero1,", Numero2 es",numero2)

// // 2. Crear 3 strings. Asignarles los siguientes valores:
// // - resultado1 = "La suma entre ambos números es x"
// // - resultado2 = "El producto entre ambos números es y"
// // - resultado3 = "El número z es el mayor"
// // Donde x, y, z serán los valores correspondientes en cada caso. Mostrar los 3 strings por consola.

// resultado1 = "La suma entre ambos números es "+(numero1+numero2)
// resultado2 = "El producto entre ambos números es "+(numero1*numero2)

// if(numero1<numero2)
// resultado3 = `El numero ${numero2} es el mayor `
// else
// resultado3=`El numero ${numero1} es el mayor`


// console.log(resultado1)
// console.log(resultado2)
// console.log(resultado3)

// // 3. Mostrar por consola los siguientes resultados:
// // -La longitud del string resultado1.
// // -En qué índice de resultado2 comienza el número que indica el resultado de la multiplicación.
// // -Si numero1 es mayor que numero2, pero solamente utilizando el string resultado3.
// //  No pueden comparar numero1 y numero2. 

// console.log(`La longitud del string ${resultado1} es ${resultado1.length}`)

// console.log(`El indice de ${resultado2} donde comienza el resultado de la multiplicacion
// es ${resultado2.indexOf(numero1 * numero2)}`)

// if(resultado3.includes(numero1)==true)
// console.log(`El numero1 ${numero1} es mayor que el numero2 ${numero2}`)
// else
// console.log(`El numero1 ${numero1} es menor que el numero2 ${numero2}`)

// COMIENZA TP 5------------------------------------------------------

let contacto = {
    nombre: "",
    telefono: "",
    mensaje: ""
    };


function datosContacto(){

    contacto.nombre= document.getElementById("apellido").value+ " " + document.getElementById("nombre").value,
    contacto.telefono= document.getElementById("tel").value
    contacto.mensaje= document.getElementById("mensaje").value


    if (contacto.nombre === ""||contacto.telefono === ""||contacto.mensaje === ""){
    alert("Los campos son obligatorios")
    console.log(contacto)
    }
    else{
    alert(`Mensaje Enviado! Gracias por contactarte, ${contacto.nombre}.`)
    console.log(contacto)
    }
}
