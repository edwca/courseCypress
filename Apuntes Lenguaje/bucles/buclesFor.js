const frutas = [1, 2, 3, 4, 5]

function recorreArr (array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    console.log('Los valores son : ', element)
  }
}
recorreArr(frutas)

// for normal
function multiNum (number) {
  for (let index = 1; index < 10; index++) {
    console.log('La multiplicacion es :', number * index)
  }
}
multiNum(5)
