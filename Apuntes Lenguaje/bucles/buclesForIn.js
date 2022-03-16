
// obtebción for in (valor el producto y valor del objeto)
const frutas = { a: 1, b: 2, c: 3, d: 4, nom: 'juan' }

for (const key in frutas) {
  console.log(`${key}: ${frutas[key]}`)
}
