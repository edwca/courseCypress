/// <reference types ="cypress"/>

describe('Uso de select', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })
  it('Delete from database', () => {
    cy.task('DATABASE', {
      dbConfig: Cypress.env('DB'),
      sql: `
      DELETE FROM person;
      `
    }).then((data) => {
      console.log(data)
    })
  })
  it('Insert table', () => {
    cy.task('DATABASE', {
      dbConfig: Cypress.env('DB'),
      sql: `
      INSERT INTO person(idperson, username, userPass)
      VALUES ('01', 'juan', '1234'),
      ('02', 'diego','12345'),
      ('03', 'ricardo', '123456');
      `
    }).then((data) => {
      console.log(data)
    })
  })
  it('Select data', () => {
    cy.task('DATABASE', {
      dbConfig: Cypress.env('DB'),
      sql: `
      select * from person;
      `
    }).then((data) => {
      console.log(data)
      expect(data.rows[0].username).to.have.string('juan')
    })
  })
})
