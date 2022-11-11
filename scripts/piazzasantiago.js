//Creando dos variables numéricas
let numero1 = 9
let numero2 = 99

//Mostrando las dos variables por consola
console.log(numero1)
console.log(numero2)

//Creando 3 String
let resultado1 = "La suma entre ambos números es: " + (numero1 + numero2)
let resultado2 = "El producto entre ambos numeros es: " + (numero1 * numero2)
let resultado3
if (numero1 > numero2) {
    resultado3 = "El número " + numero1 + " es el mayor"
} else {
    if (numero1 === numero2) {
        resultado3 = "Los números son iguales"
    } else {
        resultado3 = "El número " + numero2 + " es el mayor"
    }
}

//Mostrando los 3 String por consola
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

//Mostrando por consola la longitud de resultado1
console.log(resultado1.length)

//Mostrando por consola el índice del producto de resultado2
console.log(resultado2.indexOf(numero1 * numero2))

//Mostrando por consola si numero1 es mayor que numero2 a partir del String resultado3
if (resultado3.indexOf(numero1) !== -1) {
    let i = resultado3.indexOf(numero1)
    if (resultado3.charAt(i + 1) === numero1.toString().charAt(1)) {
        console.log("El numero1 es mayor")
    } else {
        console.log("El numero1 no es mayor")
    }
} else {
    console.log("El numero1 no es mayor")
}