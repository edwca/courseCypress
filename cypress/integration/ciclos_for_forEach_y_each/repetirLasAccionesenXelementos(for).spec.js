/// <reference types ="cypress"/>

describe('Recorrer ciclo en 4 elementos --> vestidos selector nombre', () => {
  before(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Recorriendo 4 vestidos de acuerdo a selector de nombre y generar proceso compra', () => {
    for (let i = 1; i <= 3; i++) {
      cy.get('.product-name').eq(i).click({ force: true })
      cy.get('.home').click()
    }
  })
})
