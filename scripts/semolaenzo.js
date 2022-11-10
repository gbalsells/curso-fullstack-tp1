//EJERCICIO 1 
let numero1 = 35
let numero2 = 46
console.log("***EJERCICIO 1***")
// Forma directa
console.log('El valor del numero 1 es ' + numero1)
//Template literals
console.log(`El valor del numero 2 es ${numero2}`)

//EJERCICIO 2
let resultado1, resultado2, resultado3
// Forma directa
resultado1 = 'La suma entre ambos numeros ' + (numero1 + numero2)
//Template literals
resultado2 = `El producto entre ambos números es ${numero1 * numero2}`

if (numero1 < numero2)
    resultado3 = `El número ${numero2} es el mayor`
else
    resultado3 = `El número ${numero1} es el mayor`
console.log("***EJERCICIO 2***")
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

console.log("***EJERCICIO 3*** ")
//EJERCICIO 3
//Apartado 1 
console.log(`La longitud de string " ${resultado1} " es: ${resultado1.length}`)
//Apartado 2
console.log(`El indice en el que aparece el valor de la multiplicacion es : ${resultado2.indexOf(numero1 * numero2)}`)
//Apartado 3
let verifacion= resultado3.indexOf(numero1)
if (verifacion === -1)
    console.log(`El valor numero1 es mayor que numero2`)
else
    console.log(`El valor numero2 es mayor que numero1`)