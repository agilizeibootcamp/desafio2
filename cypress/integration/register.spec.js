/// <reference types="cypress" />
import register from '../support/pages/register'

describe('Register', () => {
  it('Register new user', function () {
    register.visitRegisterPage();
    register.fillForm();
    register.submitForm();
    register.assertRegisterWithSuccess();
  })
})

