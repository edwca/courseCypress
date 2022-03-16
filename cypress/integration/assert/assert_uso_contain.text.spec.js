/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains', () => {
  beforeEach(() => {
    cy.visit('http://demoqa.com/text-box')
  })
  it('Assert should (contain text)', () => {
    cy.get('#userName').should('be.visible').type('rodrigo').click()
    cy.get('#userEmail').should('be.visible').type('rodrigo@kjdsk.com').click()
    cy.get('#currentAddress').should('be.visible').type('direccion particular 223').click()
    cy.get('#permanentAddress').should('be.visible').type('direccion particular 223').click()
    cy.get('#submit').should('be.visible').click()
    cy.get('.border').then(() => {
      cy.get('#name').should('contain.text', 'rodrigo')
    }).then(() => {
      cy.get('#email').should('contain.text', 'rodrigo')
    }).then(() => {
      cy.get('.border > #currentAddress').should('contain.text', 'direccion')
    }).then(() => {
      cy.get('.border > #currentAddress').should('contain.text', 'direccion')
    })
  })
})
