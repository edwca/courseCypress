/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Primeros pasos en Cypress', () => {
  before(() => {
    cy.visit('https://demoqa.com/webtables')
  })

  it('Agregar nuevo elemento', () => {
    cy.get('#addNewRecordButton').should('be.visible').click()
    cy.get('#firstName').should('be.visible').type('Andres').click().tab()
    cy.get('#lastName').should('be.visible').type('Lopez').click().tab()
    cy.get('#userEmail').should('be.visible').type('prueba@prueba.cl').click().tab()
    cy.get('#age').should('be.visible').type('37').click().tab()
    cy.get('#salary').should('be.visible').type('89808').click().tab()
    cy.get('#department').should('be.visible').type('456A').click().tab()
    cy.get('#submit').should('be.visible').click()
  })
  it('Buscar Elemento', () => {
    cy.get('#searchBox').should('be.visible').type('cierra').click().tab()
    cy.get('#searchBox').should('be.visible').type('cierra').clear()
  })
  it('Editar Elemento', () => {
    cy.get('#searchBox').should('be.visible').type('cierra').click().tab()
    cy.get('#edit-record-1').should('be.visible').click()
    cy.get('#department').should('be.visible').type('456A').click().tab()
    cy.get('#submit').should('be.visible').click()
    cy.get('#searchBox').should('be.visible').type('cierra').clear()
  })
  it('Borrar Elemento', () => {
    cy.get('#searchBox').should('be.visible').type('cierra').click().tab()
    cy.get('#delete-record-1').should('be.visible').click()
  })
})
