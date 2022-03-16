/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Primeros pasos en Cypress', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('Realizando click mediante coordenada en un elamento', () => {
    cy.get('#firstName').type('user').tab()
    cy.get('#firstName').type('pass11').tab()
    cy.get('header > a > img').should('be.visible').click(50, 50)
  })
})
