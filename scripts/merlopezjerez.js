//Trabajo practico numero 4

//Ejercicio 1: crear dos variables numericas y mostrarlas por consola.
let numero1 = 7
let numero2 = 36
console.log("El valor del numero 1 es: ", numero1)
console.log("El valor del numero 1 es: ", numero2)

//Ejercicio 2: crear tres strings y mostrarlas por consola.
let resultado1, resultado2, resultado3

resultado1 = "La suma entre ambos numeros es: " + (numero1+numero2)
console.log(resultado1)

resultado2 = "El producto entre ambos numeros es: "+ (numero1*numero2)
console.log(resultado2)

if(numero1<numero2)
    resultado3 = `El numero ${numero2} es el mayor`
else
    resultado3 = `El numero ${numero1} es el mayor`

console.log(resultado3)

//Ejercicio 3: 
//Primer apartado
console.log(`La longitud del string ${resultado1} es: ${resultado1.length}`)

//Segundo apartado
console.log(`El indice de ${resultado2} donde comienza el resultado de la multiplicacion es: ${resultado2.indexOf(numero1*numero2)}`)

//Tercer apartado
if(resultado3.includes(numero1)==true)
console.log(`El numero1 ${numero1} es mayor que el numero2 ${numero2}`)
else
console.log(`El numero1 ${numero1} es menor que el numero2 ${numero2}`)