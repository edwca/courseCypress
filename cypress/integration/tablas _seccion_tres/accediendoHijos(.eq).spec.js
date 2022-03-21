/// <reference types ="cypress"/>

describe('Elementos de una tabla', () => {
  before(() => {
    cy.visit('https://datatables.net/examples/data_sources/js_array')
  })
  it('Seleccion por medio de EQ', () => {
    // selecciono contenedor padre
    cy.get('.nav-search').should('be.visible')
    // luego mediante un atributo del elemento llamo por una posicion que contiene x texto
    cy.get('[class="nav-item i-manual"]').eq(0).should('contain', 'Manual')
  })
})
