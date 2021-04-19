/// <reference types="cypress" />
import login from '../support/pages/login'

describe('Login', () => {
  it('Login with success', function () {
    login.visitLoginPage();
    login.fillForm();
    login.submitForm();
    login.assertLoginWithSuccess();
  })
})
