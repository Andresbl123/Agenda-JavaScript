const nombre = document.querySelector(".nombre");
const telefono = document.querySelector(".telefono");
const direccion = document.querySelector(".direccion");
const btnAgregar = document.querySelector(".bt_agregar");

const listadoTareas = document.querySelector(".Listado_tareas");

const dataBase = window.localStorage;

btnAgregar.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    telefono: telefono.value,
    direccion: direccion.value,
  };
  guardarConstacto(dataBase, contacto);
};
cargarContactos(dataBase, listadoTareas);
