/// <reference types ="cypress"/>
require('cypress-plugin-tab')

describe('Generando data con comando generaDataUsers', () => {
  beforeEach(() => {
    cy.visit('https://google.com')
  })
  before(() => {
    cy.log('Comenzo la prueba y creado fixture generaDataUsers')
    cy.generaDataUsers()
  })
  it('Cargando archivos', () => {
  })
})
