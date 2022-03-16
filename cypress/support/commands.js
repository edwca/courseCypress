
Cypress.Commands.add('generaDataUsers', () => {
  const faker = require('faker')

  cy.writeFile('cypress/fixtures/dataTest/usersData.json', {

    users: Cypress._.times(1, () => {
      return {
        email: faker.Internet.email(),
        Pass: faker.random.number(10),
        FirstName: faker.random.first_name(),
        LastName: faker.random.last_name(),
        AddressLine1: faker.Address.streetAddress(),
        CityTown: faker.Address.city()
      }
    })
  })
})
