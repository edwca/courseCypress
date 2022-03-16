/// <reference types ="cypress"/>
require('@4tw/cypress-drag-drop')

describe('Acciones con mouse', () => {
  beforeEach(() => {
    cy.visit('https://www.way2automation.com/')
    cy.title('eq', 'Get Online Selenium Certification Course | Way2Automation')
  })
  it('Accion: Mouse over con triger nativo', () => {
    cy.contains('All Courses').trigger('mouseover')
  })
  it('Accion: Mouse over con plugins cypress-real-events/support -> realHover', () => {
    // navegando en el menu mediante hover
    cy.contains('All Courses').realHover()
    cy.contains('Selenium').realHover()
    cy.contains('Selenium with Java').realHover().click()
  })
})
