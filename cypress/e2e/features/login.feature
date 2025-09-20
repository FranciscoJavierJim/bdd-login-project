Feature: login saucedemo.com
  Background: 
    Given Since we are on the saucedemo login website

  Scenario: Successful login with valid username and password
    When Enter valid username and password
    And I click on login
    Then Should enter to inventory page

  Scenario: Login failed with invalid username
    When Enter invalid username and correct password
    And I click on login
    Then Should show the credentials error message

   Scenario: Login failed with invalid password
    When Enter valid username and incorrect password
    And I click on login
    Then Should show the credentials error message