import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit saucedemo", () => {
  cy.visit("https://www.saucedemo.com");
});

