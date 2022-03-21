/// <reference types ="cypress"/>

describe('Elementos de una tabla', () => {
  before(() => {
    cy.visit('https://datatables.net/examples/data_sources/js_array')
  })
  it('Seleccion por medio de PARENT para llegar al elemento PADRE', () => {
    // Selecciono nodo hijo,para buscar el elemento padre
    cy.get('.nav-item').parent()
    cy.get('.nav-item').parent().should('have.class', 'nav-search')
  })
})
