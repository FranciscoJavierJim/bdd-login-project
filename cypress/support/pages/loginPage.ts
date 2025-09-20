class loginPage {
  private selectors = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: 'h3[data-test="error"]'
  };

  typeUsername(username: string): void {
    cy.get(this.selectors.usernameInput).clear().type(username);
  }

  typePassword(password: string): void {
    cy.get(this.selectors.passwordInput).clear().type(password);
  }

  clickLogin(): void {
    cy.get(this.selectors.loginButton).click();
  }

  shouldShowError(): void {
    cy.get(this.selectors.errorMessage).should('be.visible');
  }
}

export default new loginPage();