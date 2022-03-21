/// <reference types ="cypress"/>

describe('caso generado para encontrar elemento -- Vestido con x nombre', () => {
  before(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  context('Busqueda mediante ciclo .each', () => {
    it('Buscando elemento mediante .ech', () => {
      cy.get('.product-name').should('be.visible')
        .then(() => {
          cy.get('.product-name').should('be.visible').as('arrayVestidos')
            .each(($el, index, $list) => {
              const producName = $el.text()
              if (producName.includes('Printed Dress')) {
                cy.wrap($el).click()
              }
            })
        })
    })
  })
})
