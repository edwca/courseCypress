/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Reto DOS', () => {
  before(() => {
    cy.visit('https://computer-database.gatling.io/computers')
  })

  it('Agregar Nuevo Elemento', () => {
    cy.get('#add').should('be.visible').click()
    cy.get('#name').should('be.visible').type('Lenovo01').tab()
    cy.get('#introduced').should('be.visible').type('2020-12-12').tab()
    cy.get('#discontinued').should('be.visible').type('2022-12-12').click().tab()
    cy.get('select').select('Lenovo Group')
    cy.get('[value = "Create this computer"]').should('be.visible').click()
  })
  it('Buscar Elemento', () => {
    cy.get('#searchbox').should('be.visible').type('Lenovo01')
    cy.get('#searchsubmit').should('be.visible').click()
  })
})
