const frutas = [1, 2, 3, 4, 5]

// foreach
function obtenerdatos () {
  frutas.forEach(element => {
    const valores = element
    console.log(valores)
  })
}
obtenerdatos()

// otra forma
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice, array)
})
