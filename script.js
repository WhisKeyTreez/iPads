document.getElementById("registro").onsubmit = function(f) {
  f.preventDefault();//este es para que no se recarge cuando mande el formulario
  const datos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    motivo: document.getElementById("motivo").value,
    telefono: document.getElementById("telefono").value
  };
  console.log(datos);
};

document.getElementById("iniciar_secion").onsubmit = function(f) {
  f.preventDefault();//este es para que no se recarge cuando mande el formulario
  const datos = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value

  };
  console.log(datos);
};

document.getElementById("bitacora").onsubmit = function(f) {
  f.preventDefault();//este es para que no se recarge cuando mande el formulario
  const datos = {
    fecha: document.getElementById("fecha").value,
    hora: document.getElementById("hora").value,
    actividad: document.getElementById("actividad").value,
    descripcion: document.getElementById("descripcion").value
  };
  console.log(datos);
}