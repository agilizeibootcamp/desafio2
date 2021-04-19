class Routes {

    as = {
        postArticle: 'POSTArticle',
        getArticleTitle: 'GETArticleTitle',
        getArticleComments: 'GETArticleComments'
    }
    init () {
        cy.intercept('POST', '**/api/articles').as(this.as.postArticle);
        cy.intercept('GET', `${Cypress.config().apiUrl}articles/the-best-tool-for-e2e-tests-**`).as(this.as.getArticleTitle);
        cy.intercept('GET', `${Cypress.config().apiUrl}articles/the-best-tool-for-e2e-tests-**/comments`).as(this.as.getArticleComments);
    }
}

export default new Routes();