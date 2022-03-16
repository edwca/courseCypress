/// <reference types ="cypress"/>
require('cypress-plugin-tab')

describe('Validación titulo', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq', 'The Number Game')
  })
})