/*//Trabajo Práctico N4

//Punto 1
let numero1, numero2
numero1 = 12
numero2 = 23
console.log("numero1 es: ",numero1)
console.log("numero2 es: ",numero2)

//Punto 2
let resultado1, resultado2, resultado3
resultado1 = "La suma entre ambos números es " + (numero1 + numero2)
console.log(resultado1)
resultado2 = "El producto entre ambos números es " + (numero1 * numero2)
console.log(resultado2)
if (numero1>numero2) {
    resultado3 = "El número 1 es el mayor"
} else {
    resultado3 = "El número 2 es el mayor"
}
console.log(resultado3)

//Punto 3
console.log("La longitud de la string resultado1 es: " + resultado1.length)
console.log("El indice de resultado2 donde comienza el resultado de la multiplicacion es: " + resultado2.indexOf(numero1*numero2))
if(resultado3.includes("1")){
   console.log("Numero 1 es mayor que numero 2")
} else {
    console.log("Numero 2 es mayor que numero 1")
}
*/
//Trabajo Práctico N5

function enviarFormulario(){
    let contacteme = new Object();
    contacteme.nombre= document.getElementById("Nombre").value+ " " +document.getElementById("Apellido").value,
    contacteme.numero= document.getElementById("Número").value
    contacteme.mensaje= document.getElementById("Mensaje").value
if (contacteme.nombre == "" ||  contacteme.numero == "" ||  contacteme.mensaje == ""){
    alert("Debe completar todos los campos")
    }
else{
    alert(`Mensaje Enviado! Gracias por contactarte, ${contacteme.nombre}.`)
    console.log(`Nombre: ${contacteme.nombre}, Número: ${contacteme.numero}, Mensaje: ${contacteme.mensaje}`);
}
}