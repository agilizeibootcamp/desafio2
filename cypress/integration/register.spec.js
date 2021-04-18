// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

const faker = require('faker')

describe('Register', () => {
  it('Register new user', function () {
    cy.visit('register');
    cy.get('input[ng-model*=username]').type(faker.name.firstName());
    cy.get('input[ng-model*=email]').type(faker.internet.email());
    cy.get('input[ng-model*=password]').type('agilizei');
    cy.get('.btn').click();
  })
})
