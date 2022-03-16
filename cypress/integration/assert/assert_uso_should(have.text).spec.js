/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it.skip('Assert validar texto del estado funcion have.text', () => {
    // vamos a buscar dentro de un contenedor padre, el contenedor hijo el cual posee un arreglo de imagenes
    // y con la funcion eq recorro ese arreglo por posiciones y le doy  un click
    cy.get('.product-container').find('.product-image-container').eq(3).click()
    // validacion
    cy.get('#product_condition').find('.editable').should('have.text', 'New')
  })
})
