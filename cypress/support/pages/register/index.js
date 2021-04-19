const faker = require('faker')
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

class Register {
    
    visitRegisterPage () {
        cy.visit('register');
    }

    fillForm () {
        cy.get('input[ng-model*=username]').type(firstName + ' ' + lastName);
        cy.get('input[ng-model*=email]').type(faker.internet.email());
        cy.get('input[ng-model*=password]').type('agilizei');
    }

    submitForm () {
        cy.get('button.btn-primary').click();
    }

    assertRegisterWithSuccess () {
        cy.get('a[ui-sref*="username"]').should('contain', firstName);
    }
}

export default new Register();

