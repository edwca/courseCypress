/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it('Assert find, eq', () => {
    // vamos a buscar dentro de un contenedor padre, el contenedor hijo el cual posee un arreglo de imagenes
    // y con la funcion eq recorro ese arreglo por posiciones
    cy.get('.product-container').find('.product-image-container').eq(0).click()
  })
})
