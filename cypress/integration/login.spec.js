// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

const faker = require('faker')

describe('Register', () => {
  it('Register new user', function () {
    cy.visit('login');
    cy.get('input[ng-model*=email]').type(Cypress.config().user.email);
    cy.get('input[ng-model*=password]').type(Cypress.config().user.password);
    cy.get('.btn').click();
  })
})
