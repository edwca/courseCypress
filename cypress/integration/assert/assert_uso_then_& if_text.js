/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Assert validar texto del estado con if ', () => {
    // vamos a buscar dentro de un contenedor padre, el contenedor hijo el cual posee un arreglo de imagenes
    // y con la funcion eq recorro ese arreglo por posiciones
    cy.get('.product-container .product-image-container').eq(3).click()
    cy.get('#product_condition .editable').then((estado) => {
      const valorEstado = estado.text()
      if (valorEstado === 'New') {
        cy.log('estado correcto')
      } else { cy.log('estado incorrecto') }
    })
  })
  it('Assert validar precio del articulo que tiene signo peso ', () => {
    // vamos a buscar dentro de un contenedor padre, el contenedor hijo el cual posee un arreglo de imagenes
    // y con la funcion eq recorro ese arreglo por posiciones
    cy.get('.product-container .product-image-container').eq(3).click()
    cy.get('#our_price_display').then((precio) => {
      let valorPrecio = precio.text()
      valorPrecio = valorPrecio.slice(1, 5)
      cy.log('El valor del precio es : ', valorPrecio)
      if (valorPrecio <= '50') {
        cy.log('Precio por debajo de 50')
      } else { cy.log('Precio por encima de 50') }
    })
  })
})
