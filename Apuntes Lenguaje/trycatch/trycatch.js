const numeros = { a: '1', b: '2', c: '3', d: '4' }

function contarNumeros (array) {
  console.log('los numeros son: ', array)
}

try {
  contarNumeros(numeros)
} catch (error) {
  console.log('Función no existe', error)
}
