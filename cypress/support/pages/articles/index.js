const faker = require('faker')

class Articles {

    visitEditor() {
        cy.get('a[href*="editor"]').click();
    }

    fillForm() {
        cy.get('input[placeholder*="Title"]').type('The best tool for e2e tests');
        cy.get('input[placeholder*="about"]').type('Do you know Cypress?');
        cy.get('textarea[ng-model*="body"]').type(faker.lorem.paragraph());
        cy.get('input[placeholder*="tags"]').type('#endtoend');
    }
    
    submitForm() {
        cy.get('button.btn-primary').click()
    }
       
    assertNewArticleCreation () {
        cy.url().should('contain','the-best-tool-for-e2e-tests');
    }

}

export default new Articles();