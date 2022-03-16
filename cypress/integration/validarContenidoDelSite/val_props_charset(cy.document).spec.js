/// <reference types ="cypress"/>
require('cypress-plugin-tab')

describe('Referencias en ventanas', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq', 'The Number Game')
  })
  it('Windows Propiedades Charset', () => {
    cy.document().should('have.property', 'charset').should('eq', 'UTF-8')
  })
})
