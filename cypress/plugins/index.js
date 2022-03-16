/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const pg = require('pg')

module.exports = (on, config) => {
  // conect to BD
  on('task', {
    DATABASE ({ dbConfig, sql, values }) {
      const pool = new pg.Pool(dbConfig)
      try {
        return pool.query(sql, values)
      } catch (e) {

      }
    }
  })
}
