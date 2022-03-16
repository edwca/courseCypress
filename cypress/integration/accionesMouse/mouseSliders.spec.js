/// <reference types ="cypress"/>

describe('Acciones con mouse', () => {
  beforeEach(() => {
    cy.visit('https://rangeslider.js.org/')
    cy.title('eq', ' rangeslider.js')
  })
  it('Accion: Mouse slider cypress-real-events/support  -> realSwipe', () => {
    cy.get('#js-rangeslider-0 > .rangeslider__handle').realSwipe('toRight')
    cy.get('#js-rangeslider-0 > .rangeslider__handle').realSwipe('toLeft')
  })
})
