/// <reference types ="cypress"/>
require('cypress-plugin-tab')

describe('Carga de archivos', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq', 'ToolsQA')
    cy.document().should('have.property', 'charset').should('eq', 'UTF-8')
  })
  before(() => {
    cy.log('Comenzando la prueba')
  })
  it('Cargando archivos', () => {
    cy.get('[type="file"]').selectFile('cypress/fixtures/img/mono.jpg')
  })
})
