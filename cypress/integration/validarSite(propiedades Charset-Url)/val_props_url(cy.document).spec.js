/// <reference types ="cypress"/>
require('cypress-plugin-tab')

describe('Referencias en ventanas', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq', 'The Number Game')
  })
  it('Windows Propiedades Charset', () => {
    cy.url().should('include', 'random-number.html')
    cy.url().should('contain', 'random')
    cy.url().should('eq', 'https://testsheepnz.github.io/random-number.html')
  })
})
