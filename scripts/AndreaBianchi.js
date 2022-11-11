let numero1 = 5;
let numero2 = 20;
console.log("Número1:",numero1);
console.log("Número2:",numero2);
let suma1 = numero1 + numero2;

let resultado1 = "La suma entre ambos números es " + suma1.toString();
prod1 = numero1 * numero2
let resultado2 = "El producto entre ambos números es " + prod1.toString();
if ( numero1 > numero2 ) {mayor= numero1} else { mayor=  numero2}
let resultado3 = `El número ${mayor} es el mayor`;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

long_resul1=resultado1.length
console.log("La longitud de resultado1 es:", long_resul1);
ind_resul2= resultado2.indexOf(prod1)
console.log("El indice del resultado es:", ind_resul2);
cadena= resultado3.slice(resultado3.indexOf("número" )+6, resultado3.indexOf("es" )).trim()

if (cadena === numero1) { `El número ${numero1} es el mayor` } else { `El número ${numero1} no es el mayor`}
                                                           
let isTrue = cadena === numero1 ? "yes" : "no";                                                                  
console.log(isTrue);
