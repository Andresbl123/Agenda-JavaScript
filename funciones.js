const guardarConstacto = (dataBase, contacto) => {
  dataBase.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/";
};
const cargarContactos = (dataBase, parentNode) => {
  let claves = Object.keys(dataBase);
  for (clave of claves) {
    let contacto = JSON.parse(dataBase.getItem(clave));
    crearContacto(parentNode, contacto, dataBase);
  }
};
const crearContacto = (parentNode, contacto, dataBase) => {
  let divContacto = document.createElement("div");
  let nombreContacto = document.createElement("h3");
  let telefonoContacto = document.createElement("p");
  let direccionContacto = document.createElement("p");
  let iconoBorrar = document.createElement("span");

  nombreContacto.innerHTML = contacto.nombre;
  telefonoContacto.innerHTML = contacto.telefono;
  direccionContacto.innerHTML = contacto.direccion;
  iconoBorrar.innerHTML = "delete_forever";

  divContacto.classList.add("tarea");
  iconoBorrar.classList.add("material-icons", "icono");

  iconoBorrar.onclick = () => {
    dataBase.removeItem(contacto.id);
    window.location.href = "/";
  };

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(telefonoContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);
  parentNode.appendChild(divContacto);
};
