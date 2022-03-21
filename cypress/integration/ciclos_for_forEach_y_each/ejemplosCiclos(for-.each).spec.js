/// <reference types ="cypress"/>

describe('Manejo de funciones each y foreach', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
    // cy.title('eq', 'PHPTRAVELS - PHPTRAVELS')
  })
  it.skip('Ciclo for ----> Nativo de javascrip', () => {
    cy.get('.gLFyf').should('be.visible').click().then(() => {
      for (let index = 0; index <= 10; index++) {
        const element = index
        cy.log('Valor elemento: ' + element)
      }
    })
  })
  context('Ciclo Each ----> Nativo de cypress', () => {
    it('Analisis primer parametro $EL funcion .each: Entrega los nombres de los elementos que contiene el selector', () => {
      cy.get('.product-name').should('be.visible')
        .then(() => {
          cy.get('.product-name').should('be.visible').as('arrayVestidos')
            .each(($el, index, $list) => {
              const producName = $el.text()
              cy.log('El nombre de los productos :', producName)
            })
        })
    })
    it('Analisis segundo parametro INDEX funcion .each: Entrega los indices de los elementos que contiene el selector', () => {
      cy.get('.product-name').should('be.visible')
        .then(() => {
          cy.get('.product-name').should('be.visible')
            .each(($el, index, $list) => {
              const indices = index
              cy.log('Los indices de los productos son :', indices)
            })
        })
    })
    it('Analisis tercer parametro $LIST funcion .each: Entrega la estructura de cada elemento con que contiene el selector', () => {
      cy.get('.product-name').should('be.visible')
        .then(() => {
          cy.get('.product-name').should('be.visible')
            .each(($el, index, $list) => {
              cy.log('La estructura delelemento es :', $list)
            })
        })
    })
  })
})
