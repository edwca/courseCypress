/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains value', () => {
  beforeEach(() => {
    cy.visit('http://demoqa.com/text-box')
  })
  it('Assert validar valor ingresado en input junto con and (&)  de ser correcto then realiza acción', () => {
    cy.get('#userName').should('be.visible').type('rodrigo').click()
    // validacion
    cy.get('#userName').should('be.visible').and('contain.value', 'rodrigo').then(() => {
      cy.get('#userEmail').should('be.visible').type('rodrigo@kjdsk.com').click()
      cy.get('#submit').should('be.visible').click()
    })
  })
})
