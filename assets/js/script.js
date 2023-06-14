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


  const nombre= document.getElementById('nombre');
  const email = document.getElementById('email');
  const number = document.getElementById('number');
  const mensaje = document.getElementById('mensaje');
  const error = document.getElementById('error');
  error.style.color='orange';
  
  const form= document.getElementById('formulario');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    let mensajesError= []
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
    if(nombre.value===null || nombre.value ===''){
      mensajesError.push('Ingresa tu nombre');
    }
  
    if(!regexEmail.test(email.value)){
      mensajesError.push('Ingrese un email válido');
  
    }
    if(number.value===null || number.value ===''){
      mensajesError.push('Ingresa tu numero de telefono');
    }
    if(mensaje.value===null || mensaje.value ===''){
      mensajesError.push('Ingresa tu mensaje');
    }
    error.innerHTML = mensajesError.join(', <br> ');

    if(mensajesError.length===0){
      alert("Formulario enviado correctamente.");
      nombre.value= '';
      email.value= '';
      number.value= '';
      mensaje.value= '';
    }
  })  

