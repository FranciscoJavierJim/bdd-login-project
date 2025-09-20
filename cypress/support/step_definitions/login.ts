import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/inventoryPage";
import users from "../../fixtures/sauceUsers.json";

Given("Since we are on the saucedemo login website", () => {
  cy.visit("https://www.saucedemo.com");
});

When("Enter valid username and password", () => {
  loginPage.typeUsername(users.validUser.username);
  loginPage.typePassword(users.validUser.password);
});

When("Enter invalid username and correct password", () => {
  loginPage.typeUsername(users.invalidUser.username);
  loginPage.typePassword(users.invalidUser.password);
});

When("Enter valid username and incorrect password", () => {
  loginPage.typeUsername(users.invalidPassword.username);
  loginPage.typePassword(users.invalidPassword.password);
});

When("I click on login", () => {
  loginPage.clickLogin();
});

Then("Should enter to inventory page", () => {
  inventoryPage.assertTitle("Products");
});

Then("Should show the credentials error message", () => {
  loginPage.shouldShowError();
});



