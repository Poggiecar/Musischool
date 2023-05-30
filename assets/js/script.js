document.addEventListener("DOMContentLoaded", function() {

window.addEventListener("scroll", function() {
    var nav = document.getElementById("nav");
    if (window.pageYOffset > nav.offsetTop) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  });

  function changeColor(newColor) {
    const elem = document.getElementById("nombre");
    elem.style.color = red;
  }

  // obteniendo los datos del  formulario y los campos de entrada.
const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("number");
const mensajeInput = document.getElementById("mensaje");

// Evento del submit.
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar los campos
  if (nombreInput.value === "") {
    alert("Por favor, ingrese su nombre.");
    return;
  }

  if (emailInput.value === "") {
    alert("Por favor, ingrese su correo electrónico.");
    return;
  }

  if (telefonoInput.value === "") {
    alert("Por favor, ingrese su número de teléfono.");
    return;
  }

 
  enviarFormulario();
});
form.addEventListener("submit", function(event) {
  event.preventDefault();

  
  const formData = {
    nombre: nombreInput.value,
    email: emailInput.value,
    telefono: telefonoInput.value,
    mensaje: mensajeInput.value
  };


  console.log(formData);
  form.reset();
});


function enviarFormulario() {
 
  alert("Formulario enviado correctamente.");

  
}


});