// 1) Creacion de dos variables numericas 
let numero1 = 54;
let numero2 = 24;

console.log(numero1);
console.log(numero2);

// 2)  Creacion de tres strings con los valores de la consigna
let resultado1, resultado2, resultado3;

resultado1 = `La suma entre ambos números es ${numero1 + numero2}`;
resultado2 = `El producto entre ambos números es ${numero1 * numero2}`;

if (numero1 > numero2) {
    resultado3 = `El número ${numero1} es el mayor`;
} else {
    resultado3 = `El número ${numero2} es el mayor`;
}


console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

// 3) Se muestra por pantalla lo solicitado en la consigna
console.log(`La longitud del string resultado1 es ${resultado1.length}`);

console.log(`El índice es: ${(resultado2.indexOf(numero1 * numero2) === -1) ? "No se encontro el valor del producto" : resultado2.indexOf(numero1 * numero2)}`);

if (resultado2.indexOf(numero1 * numero2) !== -1) {

    if (resultado3.includes(numero1)) {
        console.log(`El numero1 es el mayor`);
    } else {
        console.log(`El numero2 es el mayor`);
    }

} else {
    console.log("Se produjo un error. No se puede mostrar que valor es el mayor");
}

//-------------------------------- TP5 --------------------------------

function enviarDatos() {
    let usuario = {}

    // Registro de los datos
    let nombreCompleto = document.querySelector('#apellido').value + ", " + document.querySelector('#nombre').value
    let numeroTelefonico = document.querySelector('#telefono').value
    let mensajeEscrito = document.querySelector('#mensaje').values

    // Mensajes por pantalla
    if (nombreCompleto === "" || numeroTelefonico === "" || mensajeEscrito === "") {

        alert("Debe completar todos los campos")
    } else {
        usuario.nombre = nombreCompleto
        usuario.telefono = numeroTelefonico
        usuario.mensaje = mensajeEscrito
        alert(`Mensaje Enviado! Gracias por contactarte, ${usuario.nombre}`)
    }
}