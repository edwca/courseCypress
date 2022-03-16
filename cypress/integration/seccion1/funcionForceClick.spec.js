/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Primeros pasos en Cypress', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('Force clicl en email', () => {
    cy.get('#firstName').type('user').tab()
    cy.get('#firstName').type('pass11').tab()
    cy.get('#userEmail').type('email@gmail.com').click({ force: true })
  })
})
