/// <reference types ="cypress"/>

describe('Funciones para Type', () => {
  before(() => {
    cy.visit('https://www.google.com')
  })

  it('Type Scroll UP', () => {
    cy.get('.gLFyf').type('gato{enter}') // Enter
    cy.get('.zLaXBc').click()
    cy.get('#logo > img').type('{pageup}') // scroll up al elemento
  })
  it('Type Scroll Down', () => {
    cy.get('.gLFyf').type('gato{enter}') // Enter
    cy.get('.zLaXBc').click()
    cy.get('[style="display:block;margin-left:53px"]').type('{pagedown}') // scroll down al elemento
  })
})
