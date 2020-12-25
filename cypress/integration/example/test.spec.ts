/// <reference types="cypress" />

describe('Test Application', () => {
  before(() => {
    cy.visit("/");
  })

  it('sample test case', () => {
    expect(true).to.be.true;
    cy.testAction("123");
  })
})