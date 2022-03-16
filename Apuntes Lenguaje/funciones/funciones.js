// Funciones declaradas (Requieren identificador y son alzables)

function saludo () {
  console.log('Este es un Saludo con una función Declarada')
}

saludo()

// Funciones asociadas a una varible (Puede tener nombre o ser anonima)
//  Funcion con nombre
const nombres = function entradaNombres (nomA, nomB) {
  console.log('El nombre a es :' + nomA + ' ' + nomB)
}
nombres('Ricardo', 'Pedro')

//  Funcion Anonima
const nombresDos = function (nomA, nomB) {
  console.log('El nombre a es :' + nomA + ' ' + nomB)
}
nombresDos('Ricardo', 'Pedro')

// Funciones flecha (No disponen de contexto especifico this,
// constan de retorno implicito, deliminatores opcionales y no se alzan)

const nombre = (valor) => {
  const nomUnico = valor
  console.log('Asignación ' + nomUnico)
}
console.log(nombre('juan'))

const nombreMayus = (nombre) => {
  const valorNom = nombre.toUpperCase()
  return valorNom
}
console.log('El nombre en mayuscula es ' + nombreMayus('juan'))

// otro ejemplo función flecha
const multiplo = x => { console.log(x * x) }
multiplo(10)
