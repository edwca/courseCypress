/// <reference types ="cypress"/>
/// require('cypress-plugin-tab')

describe('Uso de checkbox', () => {
  it('Seleccion de checkbox', () => {
    cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
    cy.get('#wsf-1-label-36-row-1').click()
  })
})

// para seleccionar todos los checkbox del tipo checkbox
// cy.get('[type="checkbox"]').check() // Check checkbox elemen

// para seleccionar todos los radiobutton del tipo radiobutton
// cy.get('[type="radio"]').first().check()
