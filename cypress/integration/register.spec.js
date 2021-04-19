/// <reference types="cypress" />
import register from '../support/pages/register'

describe('Register', () => {
  beforeEach (() => {
    //Arrange
    register.visitRegisterPage();
  });

  it('Register new user', function () {
    //Act
    register.fillForm();
    register.submitForm();

    //Assert
    register.assertRegisterWithSuccess();
  })
})

