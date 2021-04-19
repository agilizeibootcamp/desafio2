class Login {
    visitLoginPage () {
        cy.visit('login');
    }

    fillForm () {
        cy.get('input[ng-model*=email]').type(Cypress.config().user.email);
        cy.get('input[ng-model*=password]').type(Cypress.config().user.password);
    }

    submitForm () {
        cy.get('button.btn-primary').click();
    }

    assertLoginWithSuccess () {
        cy.get('a[ui-sref*="username"]').should('contain', 'tainara');
    }
}

export default new Login();