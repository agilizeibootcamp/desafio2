/// <reference types="cypress" />

describe('Articles', () => {
    
    beforeEach(() => {
        //Background login
        cy.request({
            method: 'POST',
            url: `${Cypress.config().apiUrl}users/login`,
            body: {
                user: {
                    email: 'tai@mail.com',
                    password: 'agilizei'
                }
            }
        }).then((loginResponse) => {
            cy.log(loginResponse.body.user.token)
            cy.visit('', {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
                }
            });
        });

        cy.get('a[href*="editor"]').click();
    });

    
    it('Create a new article', () => {
        

    });
});