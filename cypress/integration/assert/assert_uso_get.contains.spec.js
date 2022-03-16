/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de assert contains', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it('Assert contains', () => {
    cy.contains('[data-toggle="tab"]', 'Popular').should('be.visible').click({ force: true })
  })
})
