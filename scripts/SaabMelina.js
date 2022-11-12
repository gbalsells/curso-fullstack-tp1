numero1 = 78
numero2 = 23
console.log(numero1)
console.log(numero2)

x = numero1+numero2
y = numero1*numero2
resultado1 = "La suma entre ambos números es " + x
resultado2 = "El producto entre ambos números es " + y
resultado3 = "El número" + " " + Math.max(numero1,numero2) + " " + "es el mayor"
console.log(resultado1) 
console.log(resultado2)
console.log(resultado3)

console.log("La longitud de '", resultado1, "' es : " + resultado1.length)
console.log("El producto de los numeros empieza en el indice : " + resultado2.lastIndexOf('1'))

if(numero1 == resultado3.slice(resultado3.indexOf('7'), 2 + resultado3.indexOf('7'))){
    console.log("El numero 1 es mayor que numero 2")
}
    

