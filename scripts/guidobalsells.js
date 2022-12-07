function sendInfo(arr) {
  let contactInfo = {}

  let inputName = document.querySelector('#nombre').value
  let inputPhone = document.querySelector('#phone').value
  let inputMessage = document.querySelector('#mensaje').value

  if ([inputName, inputPhone, inputMessage].includes('')) {
    alert('Debe completar todos los campos')
  } else {
    contactInfo.nombre = inputName
    contactInfo.phone = inputPhone
    contactInfo.message = inputMessage
    alert('Mensaje Enviado! Gracias por contactarte, ' + contactInfo.nombre)
  }
}
