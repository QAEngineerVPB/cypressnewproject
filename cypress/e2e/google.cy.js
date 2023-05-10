Cypress.on('uncaught:exception',(err,runnable) =>{
  return false
})

/// <reference types="cypress" />

describe('MyTestSuite', () => {
  it('PositivescenarioTestCaseId -01', () => {
    cy.visit('https://google.com/')
    cy.title().should('eq','Google')
    //cy.get('.gb_Ve').should('be.visible').click()

  })

  it.skip('NegativescenarioTestCaseId -02', () => {
    cy.visit('https://google.com/')
      cy.title().should('eq','Toogle')
    //cy.get('.gb_Ve').should('be.visible').click()
    
  })

})
