import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/inventoryPage";
import users from "../../fixtures/sauceUsers.json";

Given('Website is avaliable', () => {

});

Given("I visit login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When('Enter valid username and password', () => {
  loginPage.fillUsername("standard_user");
  loginPage.fillPassword("secret_sauce");
});

When('Enter invalid username and correct password', () => {
  loginPage.fillUsername("invalid_user");
  loginPage.fillPassword("secret_sauce");
});

When('Enter valid username and incorrect password', () => {
  loginPage.fillUsername("standard_user");
  loginPage.fillPassword("invalid_password");
});

When('I click on login', () => {
  loginPage.submit();
});

Then('Should enter to inventory page', () => {
  inventoryPage.elements.titleSpan().should('have.text', 'Products');
});

Then('Should show the credentials error message', () => {
  loginPage.shouldShowAuthError();
});


