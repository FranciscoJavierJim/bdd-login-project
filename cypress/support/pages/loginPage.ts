class LoginPage {
  fillUsername(username: string): void {
    cy.get('[data-test="username"]').clear().type(username);
  }

  fillPassword(password: string): void {
    cy.get('[data-test="password"]').clear().type(password);
  }

  submit(): void {
    cy.get('[data-test="login-button"]').click();
  }

  shouldShowAuthError(): void {
    cy.get('[data-test="error"]').should('be.visible');
  }
}

export default new LoginPage();
