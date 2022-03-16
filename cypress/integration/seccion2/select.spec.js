/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de select', () => {
  it('Seleccion de select', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.xpath('//*[@id="block_top_menu"]/ul/li[1]/a').should('be.visible').click()
    cy.get('#selectProductSort').should('be.not.visible').select('In stock').should('have.value', 'quantity:desc')
  })

  it('Multi de select si selector lo permite', () => {
    cy.visit('https://demoqa.com/select-menu')
    cy.get('#cars').should('be.visible').select(['Volvo', 'Saab', 'Opel'])
  })
})
