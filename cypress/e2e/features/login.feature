Feature: login saucedemo.com
  Background:
    Given Website is available

  Scenario: Successful login with valid username and password
    Given I visit login page
    When Enter valid username and password
    And I click on login
    Then Should enter to inventory page

  Scenario: Login failed with invalid username
    Given I visit login page
    When Enter invalid username and correct password
    And I click on login
    Then Should show the credentials error message

   Scenario: Login failed with invalid password
    Given I visit login page
    When Enter valid username and incorrect password
    And I click on login
    Then Should show the credentials error message