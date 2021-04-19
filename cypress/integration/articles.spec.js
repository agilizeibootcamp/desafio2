/// <reference types="cypress" />
import articles from '../support/pages/articles'

describe('Articles', () => {
    
    beforeEach(() => {
        cy.backgroundLogin();
        articles.visitEditor();
    });

    
    it('Create a new article', () => {
        articles.visitEditor();
        articles.fillForm();
        articles.submitForm();
        articles.assertNewArticleCreation();
    });
});