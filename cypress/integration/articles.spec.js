/// <reference types="cypress" />

const faker = require('faker')

describe('Articles', () => {
    
    beforeEach(() => {
        cy.backgroundLogin();
        cy.get('a[href*="editor"]').click();
    });
    
    it('Create a new article', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('input[placeholder*="Title"]').type('The best tool for e2e tests');
        cy.get('input[placeholder*="about"]').type('Do you know Cypress?');
        cy.get('textarea[ng-model*="body"]').type(faker.lorem.paragraph());
        cy.get('input[placeholder*="tags"]').type('#endtoend');
        cy.get('button.btn-primary').click()
        cy.url().should('contain','the-best-tool-for-e2e-tests');
    });
});