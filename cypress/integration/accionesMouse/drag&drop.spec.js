/// <reference types ="cypress"/>

describe.skip('Acciones con mouse', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/drag_and_drop')
    cy.title('eq', 'The Internet')
  })
  it('Accion: Drang and Drop', () => {
    // mueve de un lado a  otro un elemento
    cy.get('#column-b').drag('#column-a', { force: true })
  })
})

describe.skip('Acciones con mouse', () => {
  beforeEach(() => {
    cy.visit('https://interactjs.io/')
    cy.title('eq', 'The Internet')
  })
  it('Accion: Drang and Drop', () => {
    // mueve de un lado a  otro un elemento
    cy.get('#yes-drop .drag-drop').drag('#inner-dropzone .dropzone', { force: true })
  })
})
