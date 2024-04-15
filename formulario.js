const formulario = document.querySelector("#form") // cambio de variable var a const

// agregar nombre a la funcion 
formulario.onsubmit = function(event) {
  event.preventDefault(); // se añade el Default
  
  const name = formulario.elements[0] // cambio de variable var aconst , cambio al nombre de la variable de n - name
  const ageInput = formulario.elements[1] // cambio de variable var aconst , cambio al nombre de la variable de e - ageInput
  const nationality = formulario.elements[2]

  const  nombre = name.value   // cambio a la variable de var aconst y cambio al nombre de la sentencia
 const edad = parseInt(ageInput.value, 10); // para que edad sea un número

 const selectedIndex = nationality.selectedIndex 
 const nacionalidad = nationality.options[selectedIndex].value; // se agrego ; para que se pueda ejecutar el código 
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
 name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    ageInput.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}; // se agrego ; para que se pueda ejecutar el código 

const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}