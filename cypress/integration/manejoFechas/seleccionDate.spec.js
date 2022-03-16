/// <reference types ="cypress"/>

describe('Manejo de fechas', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/test/')
  })
  it('Manejo de fechas', () => {
    cy.get('[type="datetime-local"]').type('2017-06-01T08:30').click()
  })
})
