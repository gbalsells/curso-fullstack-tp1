let numero1, numero2
numero1 = 20
numero2 = 25
console.log('variable 1' , numero1, 'variable 2' , numero2)

resultado1 = `La suma entre ambos números es: ${numero1 + numero2}`
resultado2 = `El producto entre ambos números es: ${numero1 * numero2}`

if (numero1 > numero2) {
    resultado3 = `El numero: ${numero1} es el mayor`
} else {
    resultado3 = `El numero: ${numero2} es el mayor`
}

console.log(resultado1 , resultado2 , resultado3)

// ----------------

console.log(`La longitud del resultado1 es: ${resultado1.length}`)

console.log(`El indice del numero de resultado2 comienza en: ${resultado2.indexOf(numero1 * numero2) }` )

if (resultado2) {
    if (resultado3.includes(numero1)) {
        console.log(`El numero1 es el mayor`);
    } else {
        console.log(`El numero2 es el mayor`);
    }   
}

// Si el resultado3 incluye el numero1 como V, es el mayor
// Si el resultado3 NO incluye el numero1 y por lo tanto es falso, no aparece como mayor

//TP N5

let contacto = new Object();
let botonEnviar = document.getElementById("submit");
botonEnviar.addEventListener("click", EnviarDatos);

function EnviarDatos() {
  contacto.nombre = document.getElementById("nombreApellido").value;
  contacto.telefono = document.getElementById("numero").value;
  contacto.mensaje = document.getElementById("texto").value;
  if (
    contacto.nombre === "" ||
    contacto.telefono === "" ||
    contacto.telefono === ""
  ) {
    alert("Debe completar todos los campos");
  } else {
    alert(`Mensaje Enviado! Gracias por contactarte, ${contacto.nombre}!`);
  }
}