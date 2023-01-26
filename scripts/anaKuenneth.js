//Trabajo Práctico N° 4 - Soria Kuenneth Ana Rosa
let numero1 = 23 
let numero2 = 11  
console.log('El primer numero creado es: ' + numero1) 
console.log('El segundo numero creado es: ' + numero2)  

console.log('***')  

let y = numero1*numero2

let z  
if (numero1 > numero2){   
    z = numero1 
} else if(numero2 > numero1){   
    z = numero2 
} else{   
    z = numero1 
}  

let resultado1 = 'La suma entre ambos numeros es ' + (numero1+numero2) 
let resultado2 = 'El producto entre ambos numeros es ' + y
let resultado3 = 'El numero ' + z + ' es el mayor'  

console.log(resultado1) 
console.log(resultado2) 
console.log(resultado3)  

console.log('***')  

console.log('Longitud del string resultado1: ' + resultado1.length)

//Se debe convertir el numero 23 a string
let primeraCifra = y.toString().charAt(0);
let indice = resultado2.indexOf(primeraCifra)

console.log('El resultado de la multiplicacion comienza con el numero ' + primeraCifra + ' en el indice ' + indice + ' del string resultado2')

if(resultado3.includes(numero1)){
    console.log('El numero ' + numero1 + ' es mayor que el numero ' + numero2)
}else{
    console.log('El numero ' + numero2 + ' es mayor que el numero ' + numero1)
}