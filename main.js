function saludarUsuario(nombre) {
    alert("¡Hola, " + nombre + "! Bienvenido/a.");
}

saludarUsuario("Usuario");

function crearBotonPeligro() {
    // Crear el elemento de botón
    var boton = document.createElement("button");
    
    // Asignar texto al botón
    boton.textContent = "Peligro";
    
    // Agregar clase CSS al botón
    boton.classList.add("btn-peligro");
    
    // Agregar el botón al cuerpo del documento
    document.body.appendChild(boton);
  }
  
  // Llamar a la función para crear el botón de peligro cuando se cargue la página
  window.onload = function() {
    crearBotonPeligro();
  };