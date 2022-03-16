/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains value', () => {
  beforeEach(() => {
    cy.visit('https://datatables.net/examples/basic_init/alt_pagination.html')
  })
  it.skip('Assert para validar el largo de una tabla (tr) con then', () => {
    cy.get('#example').should('be.visible')
    cy.get('#example').should('have.length', 1)
    cy.get('#example').then((largo) => {
      const largoTable = largo.find('tr').length
      cy.log('El largo de la tabla es :', largoTable)
    })
  })
  it('Assert para validar el largo de una tabla (>th) con CSS', () => {
    cy.get('#example').should('be.visible')
    cy.get('#example >thead >tr').should('have.length', 1)
    cy.get('#example >thead >tr').should('have.length', 1)
    cy.get('#example >thead >tr >th').should('have.length', 6)
    cy.get('#example >thead >tr >th').should('have.length', 6).and('have.css', 'padding', '10px 18px')
  })
})
