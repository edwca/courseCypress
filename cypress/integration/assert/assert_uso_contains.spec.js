/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it('Assert contains', () => {
    // ojo el contains es hijo del menu
    cy.get('#block_top_menu').contains('Women').click()
  })
})
