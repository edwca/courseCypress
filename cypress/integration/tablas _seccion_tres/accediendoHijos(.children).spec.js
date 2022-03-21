/// <reference types ="cypress"/>

describe('Elementos de una tabla', () => {
  before(() => {
    cy.visit('https://cosmocode.io/automation-practice-webtable/')
  })
  it('Elementos children', () => {
    cy.get('.entry-content').as('titleTable')
    cy.get('@titleTable').children('#countries').should('contain', 'Visited')
  })
})
