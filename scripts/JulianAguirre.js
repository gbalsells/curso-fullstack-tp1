//Ejercicio 1

let numero1 = 18;
let numero2 = 50;

console.log("Ejercicio 1")
console.log("Número 1: " + numero1)
console.log("Número 2: " + numero2)

//Ejercicio 2
let resultado1 = "La suma entre ambos números es " + (numero1 + numero2)
let resultado2 = "El producto entre ambos números es " + (numero1 * numero2)
mayor = Math.max(numero1, numero2)
let resultado3 = `El número ${mayor} es el mayor` 

console.log("Ejercicio 2")
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

//Ejercicio 3
let ej3_1 = "Longitud del string resultado 1: " + resultado1.length
let valor = numero1 * numero2
let ej3_2 = "Índice del número en resultado 2: " + resultado2.indexOf(valor)
let valor_mayor = resultado3.charCodeAt(10)
let ej3_3 = "Número 1 es mayor que numero 2? " + (resultado1 == valor_mayor? true:false)

console.log(ej3_1)
console.log(ej3_2)
console.log(ej3_3)

