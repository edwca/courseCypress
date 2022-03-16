
// resolve : resolver
// reject :
let x = 10

console.log('1.- *** Primer Proceso****')
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    x = x + 3 * 3
    console.log('2.- *** Segundo Proceso****')
    resolve(x)
  }, 3000)
})
promesa.then(respuesta => {
  console.log('3- *** Tercer Proceso****' + respuesta)
})
