/// <reference types ="cypress"/>

describe('Funciones para Type', () => {
  before(() => {
    cy.visit('https://www.google.com')
  })

  it('Type Enter', () => {
    cy.get('.gLFyf').type('gato{enter}')
  })
})
