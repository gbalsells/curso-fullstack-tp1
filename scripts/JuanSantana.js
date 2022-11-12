// Punto 1
//Crear las variables aleatorias entre 1 y 100
var numero1 = Math.floor(Math.random() * (100 - 1) + 1);
var numero2 = Math.floor(Math.random() * (100 - 1) + 1);
//Muestro por consola los valores adoptados
console.log("Numero 1 = "+numero1);
console.log("Numero 2 = "+numero2);

// Punto 2
//Defino la variable aux y hago la suma de ambos numeros
let aux = numero1+numero2;
//Guardo la suma en la cadena
const resultado1 = `La suma entre ambos números es ${aux}`;
//Guardo el maximo entre los 2 en aux
aux = Math.max(numero1,numero2);
//Guardo el mayor en la cadena
const resultado3 = `El numero ${aux} es el mayor`;
//Guardo la multiplicación entre los 2 en aux
aux = numero1*numero2;
//Guardo la multiplicacion en la cadena
const resultado2 = `El producto entre ambos numeros es ${aux}`;
//Muestro las cadenas
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

// Punto 3
console.log(`Tamaño de resultado1 = ${resultado1.length}`);
console.log(`La posicion del resultado de la multiplicacion es ${resultado2.indexOf((aux).toString())}`);
console.log(resultado3.includes(numero1.toString()) ? "numero1 es el mayor" : "numero1 no es el mayor");