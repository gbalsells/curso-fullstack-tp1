function validaDatos() {

const apenom = document.getElementById("apenom").value;
const telefono = document.getElementById("telefono").value;
const mensaje = document.getElementById("mensaje").value;
    if ((apenom.trim().length === 0 ) || (telefono.length === 0)  || (mensaje.trim().length === 0) ){     
    return alert( "Debe completar todos los campos " )} else 
    {return alert( "Mensaje enviado! " + "\nGracias por contactarte, " + apenom)};
    let MiObjeto={
    nombre: apenom,
    telefono: telefono,
    mensaje: mensaje
    };
    console.log(MiObjeto);

     }

