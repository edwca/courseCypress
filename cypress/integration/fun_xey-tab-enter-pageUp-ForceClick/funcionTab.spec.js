/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Primeros pasos en Cypress', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('Validando el titulo', () => {
    cy.get('#firstName').type('user').tab()
    cy.get('#firstName').type('pass11').tab()
    cy.get('#userEmail').type('email@gmail.com').tab()
  })
})
