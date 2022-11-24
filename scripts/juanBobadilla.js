// // Punto 1. Crear dos variables y mostrarlas por consola
// let numero1 = 10;
// let numero2 = 50;
// console.log(`El primer número es: ${numero1}`);
// console.log(`El segundo número es: ${numero2}`);

// // Punto 2. Crear 3 strings y asignarles valores dados.
// let resultado1 = `La suma entre ambos números es: ${numero1 + numero2}`;
// console.log(resultado1);

// let resultado2 = `El producto entre ambos números es: ${numero1 * numero2}`;
// console.log(resultado2);

// let z = numero1 >= numero2 ? numero1:numero2;
// let resultado3 = `El número ${z} es el mayor`;
// console.log(resultado3);

// // Punto 3. Mostrar resultados por consola

// console.log(`La longitud de del string resultado1 es: ${resultado1.length}`);
// console.log(`El índice en el cual empieza el resultado de la multiplicación es: ${resultado2.lastIndexOf(' ') + 1}`);
// console.log(`¿Es numero1 mayor que numero2? Respuesta: ${resultado3.includes(numero1)}`);

let usuario = new Object();

let submit = document.querySelector("#enviar");

submit.addEventListener('click', myFunction);

function myFunction(ev){
    if (ev.target.form.nomb.value === "" || ev.target.form.tel.value === "" || ev.target.form.text.value === "") {
        alert("¡Debe ingresar todos los datos!");
    }else{
        
        alert("¡Mensaje enviado!");

        usuario.nombre = ev.target.form.nomb.value;
        usuario.telefono = ev.target.form.tel.value;
        usuario.mensaje = ev.target.form.text.value;

        console.log(`\tNombre: ${usuario.nombre}
    Teléfono: ${usuario.telefono}
    Mensaje: ${usuario.mensaje}`)

    }
}



