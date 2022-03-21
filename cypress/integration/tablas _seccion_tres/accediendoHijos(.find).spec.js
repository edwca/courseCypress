/// <reference types ="cypress"/>

describe('Elementos de una tabla', () => {
  before(() => {
    cy.visit('https://datatables.net/examples/data_sources/js_array')
  })
  it('Seleccion por medio de FILTER', () => {
    cy.get('.nav-search').should('be.visible')
    // filtrando desde el padre a un hijo con cierto texto
    cy.get('[class="nav-search"]').find(':contains("Manual")')
    // filtrando un hijo con cierto texto y compruebo que existe solo 1 elemento como texto
    cy.get('[class="nav-item i-manual"]').find(':contains("Manual")').should('have.length', 1)
    cy.get('.nav-search').should('be.visible').find(':contains("Manual")')
  })
})
