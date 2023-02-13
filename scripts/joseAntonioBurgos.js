// // 1. Crear dos variables numéricas (numero1,numero2) con un valor del 1 al 100 y mostrarlas por consola
// let numero1=2;
// let numero2=33;
// console.log(`numero1 = ${numero1}`);
// console.log(`numero2 = ${numero2}`);

// // 2. Crear 3 strings. Asignarles los siguientes valores:
// // - resultado1 = 'La suma entre ambos números es x'
// // - resultado2 = 'El producto entre ambos números es y'
// // - resultado3 = 'El número z es el mayor'
// // Donde x,y,z serán los valores correspondientes en cada caso. Mostrar los 3 strings por consola.
// let x=numero1+numero2;
// let y=numero1*numero2;
// let z=numero1>numero2 ? numero1:numero2;

// let resultado1=`La suma entre ambos números es ${x}`;
// let resultado2=`El producto entre ambos números es ${y}`;
// let resultado3=`El número ${z} es el mayor`;

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);

// // 3. Mostrar por consola los siguientes resultados:
// // - La longitud del string resultado1
// // - En qué índice de resultado2 comienza el número que indica el resultado de la multiplicación
// // - Si numero1 es mayor que numero2, pero solamente utilizando el string resultado3. No pueden comparar numero1 y numero2
// console.log(resultado1.length);
// console.log(resultado2.indexOf(y));
// console.log(resultado3.includes(numero1));

// TP 5
function enviarDatos(event){
    event.preventDefault();

    let datosPersona={}

    let nombre=document.getElementById('nombre').value;
    let telefono=document.getElementById('telefono').value;
    let mensaje=document.getElementById('mensaje').value;

    if([nombre,telefono,mensaje].includes('') || [nombre,telefono,mensaje].includes(' ')){
        alert('Debe completar todos los campos');
    }else{
        alert(`Mensaje Enviado! Gracias por contactarte, ${nombre}`);
        datosPersona.nombre=nombre;
        datosPersona.telefono=telefono;
        datosPersona.mensaje=mensaje;

        console.log(datosPersona);

        limpiarCampos();
    }
}

function limpiarCampos(){
    document.querySelector('#nombre').value='';
    document.querySelector('#telefono').value='';
    document.querySelector('#mensaje').value='';
}