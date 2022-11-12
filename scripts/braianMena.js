// Comentar varias lineas: Ctrl+K+C

//1) Crear dos variables numéricas (numero1, numero2) con un valor del 1 al 100 y mostrarlas por consola.
let numero1 = 9
let numero2 = 12
console.log(`La suma de ${numero1}+${numero2} es igual a ${numero1+numero2}`)

// 2) Crear 3 strings. Asignarles los siguientes valores:
// - resultado1 = "La suma entre ambos números es x"
// - resultado2 = "El producto entre ambos números es y"
// - resultado3 = "El número z es el mayor"
// Donde x, y, z serán los valores correspondientes en cada caso. Mostrar los 3 strings por consola.

let resultado1 = 'La suma entre ambos números es '+ (numero1+numero2)
console.log(resultado1)

let resultado2 = 'El producto entre ambos números es '
console.log(resultado2.concat(numero1*numero2))

let resultado3 = 'El numero es el mayor'
console.log(resultado3.replace('o', ('o '+ numero2)))  //PERDON ,Guido. Solo estoy planteando alternativas XD

// 3) Mostrar por consola los siguientes resultados:
// -La longitud del string resultado1.
// -En qué índice de resultado2 comienza el número que indica el resultado de la multiplicación.
// -Si numero1 es mayor que numero2, pero solamente utilizando el string resultado3. No pueden comparar numero1 y numero2. 
console.log(`'resultado1' tiene una longitud de: ${resultado1.length}`)

console.log(`En el índice ${resultado2.concat(numero1*numero2).indexOf('1')} comienza el número ${numero1*numero2}`)

resultado3 = 'El numero '+numero2+' es el mayor'
if(resultado3.indexOf(numero2) === -1){
    console.log(`El numero1 = ${numero1} es mayor que el numero2 = ${numero2}`)
}else{
    console.log(`El numero2 = ${numero2} es mayor que el numero1 = ${numero1}`)
}