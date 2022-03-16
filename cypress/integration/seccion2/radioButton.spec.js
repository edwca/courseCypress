/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de radio button', () => {
  it('Seleccion de todos los radio button propiedad type', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]/label').click()
  })
})
