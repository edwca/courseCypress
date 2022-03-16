/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Primeros pasos con assert', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it.skip('Validadr si Elemento esta Visible', () => {
    cy.get('#firstName').should('be.visible')
  })
  it(' Validar si Elemento habilitado', () => {
    cy.get('#firstName').should('be.enabled')
  })
  it('Validar texto', () => {
    cy.get('#firstName').should('be.enabled')
    cy.title().should('eq', 'ToolsQA')
  })
})
