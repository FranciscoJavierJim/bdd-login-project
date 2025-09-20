class InventoryPage {
  private selectors = {
    titleSpan: '.title'
  };

  assertTitle(expected: string): void {
    cy.get(this.selectors.titleSpan).should('have.text', expected);
  }
}

export default new InventoryPage();
