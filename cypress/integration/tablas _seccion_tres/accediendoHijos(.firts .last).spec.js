/// <reference types ="cypress"/>

describe('Elementos de una tabla', () => {
  before(() => {
    cy.visit('https://datatables.net/examples/data_sources/js_array')
  })
  it('Seleccion por medio de FIRTS', () => {
    cy.get('[class="nav-search"]').first().should('contain', 'Manual')
    cy.get('th').should('contain', 'Name').first()
    cy.get('th').should('contain', 'Position').last()
    cy.get('th').should('contain', 'Office').last()
    cy.get('th').should('contain', 'Extn').last()
    cy.get('th').each(($el, index, $list) => {
      const lista = $el.text()
      cy.log('Los valores son ', lista)
    })
  })
})
