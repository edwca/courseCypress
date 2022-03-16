// Comparar el valor
const a = 10
const b = 9

if (a === 10) {
  console.log('El numero es igual a 10')
} else {
  console.log('El numero no es menor que 10')
}

if (a < 10) {
  console.log('El numero es mayor a 10')
} else {
  console.log('El numero no es menor que 10')
}

if (a <= 10) {
  console.log('El numero es menor e igual a 10')
} else {
  console.log('El numero no es mayor que 10')
}

if (a !== 10) {
  console.log('El valor es diferente de 10')
} else {
  console.log('El valor no es diferente de 10')
}

if (a === 10 && b === 9) {
  console.log('El valor es igual a 10 y 9')
} else {
  console.log('El valor no es diferente de 10 y 9')
}

if (a === 11 || b <= 8) {
  console.log('El valor es igual a 11 o menor que 8')
} else {
  console.log('El valor no es es igual a 11 o menor que 8')
}
