let numero1 = 78
let numero2 = 23
console.log(numero1)
console.log(numero2)

let x = numero1+numero2
let y = numero1*numero2
let resultado1 = "La suma entre ambos números es " + x
let resultado2 = "El producto entre ambos números es " + y
let resultado3 = "El número" + " " + Math.max(numero1,numero2) + " " + "es el mayor"
console.log(resultado1) 
console.log(resultado2)
console.log(resultado3)

let posicion = resultado2.lastIndexOf(' ') + 1
console.log("La longitud de '", resultado1, "' es : " + resultado1.length)
console.log("El producto de los numeros empieza en el indice : " + posicion)

if(resultado3.includes(numero1.toString())){
    console.log("El numero 1 es mayor que numero 2")
}


