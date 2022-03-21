/// <reference types ="cypress"/>

// const { each } = require('cypress/types/bluebird')

describe('Manejo de fechas en calendario', () => {
  beforeEach(() => {
    cy.visit('https://www.phptravels.net/')
    cy.title('eq', 'PHPTRAVELS - PHPTRAVELS')
  })
  it.only('Selección de fecha en calendario ---> CheckIn Opcion con .each', () => {
    cy.get('#checkin').click({ force: true })
    cy.xpath('//*[@id="fadein"]/div[3]/div[1]/table/tbody/tr[5]')
      .each(($el, index, array) => {
        const stringArray = $el.text().match(/.{1,2}/g)
        const valDay = stringArray[3]
        cy.log('valor del dia :', stringArray[3])
        if (valDay === '30') {
          cy.wrap($el).click()
        }
      })
  })
  it('Selección de fecha en calendario ---> Checkin/CheckOut con dataSet', () => {
    // el valor de day tiene que ser un dia mas que el valor del chekin
    // para que el caso tome como dia de salida el 31, ya que en este ejemplo
    // el checkin fue 30 un dia antes.
    const dayCheckout = 21
    const dayCheckin = 20
    cy.get('#checkin').click({ force: true }).then(() => {
      cy.xpath('//' + '*' + '[@id="fadein"]/div[3]/div[1]/table/tbody/tr[4]/td[@class="day  active"  and .="' + dayCheckin + '"]').click()
    }).then(() => {
      cy.get('#checkout').should('be.visible')
      cy.xpath('//div[@class="datepicker-days"]//tbody//td[@class="day  active"  and .="' + dayCheckout + '"]').click()
    })
  })
})
