// creando array

const frutas = ['manzana', 'pera', 'platano']
console.log('Las frutas son : ' + frutas)

// recorrer array
frutas.forEach(function (elemento, index, array) {
  console.log('Los datos son : ' + elemento, index, array)
})

// Metodo length
console.log('El largo del arreglo es :' + frutas.length)

// Metodo push (Agregar Elemento)
const agregarElement = function (nomFruta) {
  const nuevaFruta = frutas.push(nomFruta)
  console.log(nuevaFruta)
}
console.log('Se agrega al array frutas ', agregarElement('uvas'), frutas)

// Metodo pop (Obtiene el ultimo elemento)
const ultimoElemento = function (arreglo) {
  const ultimoValor = arreglo.pop()
  console.log(ultimoValor)
  console.log('Ultimo elemento ', ultimoValor)
}
ultimoElemento(frutas)

//  Array unshif - shift
function agregarPrincipio (valor) {
  const value = frutas.unshift(valor)
  console.log(value)
  console.log('Se agregao al principio', frutas)
}
agregarPrincipio('melon')

//  Array unshif - shift
function eliminarPrimero () {
  const value = frutas.shift()
  console.log('Se elimino del principio :', value)
  console.log(frutas)
}
eliminarPrimero()

// Encontrar elemento en una posición
function buscarElemento (posicion) {
  const value = frutas.indexOf(posicion)
  console.log('El elemento encontrado esta en la posición :', value)
  console.log(frutas)
}
buscarElemento('pera')

// Eliminar elemento porposición
function eliminarElementoPorPosicion (valora, valorb) {
  const value = frutas.splice(valora, valorb)
  console.log('Elemento a eliminar :', value)
  console.log(frutas)
}
eliminarElementoPorPosicion(0, 1)

// copio a Nuevo array
const frutas2 = frutas
frutas2.push('melon', 'tomate', 'kiwi')
console.log(frutas2)

frutas2.forEach(function (elemento, index) {
  console.log('Elemento : ' + elemento, 'posicion :', index)
})
