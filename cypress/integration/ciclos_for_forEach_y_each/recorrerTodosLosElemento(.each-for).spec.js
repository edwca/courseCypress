/// <reference types ="cypress"/>

describe('Recorrer arreglo con todos sus elementos --> vestidos selector nombre', () => {
  before(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Recorriendo todos los vestidos de acuerdo a selector de nombre y generar proceso compra', () => {
    const datos = []
    cy.get('.product-name').each(($el, index, list) => {
      // datos[] almacena los index de los elementos
      // datos[index] = $el.text()
      datos[index] = index
      // cy.log('los indices son', datos[index])
    }).then(() => {
      for (let i = 1; i <= datos.length; i++) {
        // accciones que necesitamos realizar para probar la funcionalidad
        cy.get('.product-name').eq(i).click({ force: true })
        cy.get('.home').click()
      }
    })
  })
})
