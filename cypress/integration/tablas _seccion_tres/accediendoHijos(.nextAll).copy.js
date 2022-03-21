/// <reference types ="cypress"/>

describe('Elementos de una tabla', () => {
  before(() => {
    cy.visit('https://datatables.net/examples/data_sources/js_array')
  })
  it('Seleccion por medio de NEXT ALL', () => {
    // Selecciono nodo padre, busco un hijo con una clase en comun y selecciono los siguientes
    cy.get('div.nav-search').find('.nav-item').nextAll()
    cy.get('th').should('contain', 'Name').nextAll()
    cy.get('th').each(($el, index, $list) => {
      const lista = $el.text()
      cy.log('Los valores son ', lista)
    })
  })
})
