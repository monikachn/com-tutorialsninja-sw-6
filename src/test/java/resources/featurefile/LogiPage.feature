
Feature: Login Page Test
  I am on login page
  @sanity @regression
  Scenario: User should Login Successfully With Valid Credentials
    Given I am on homepage
    When I enter standard_user username
    And I enter secret_sauce password
    And I click on LOGIN button
    Then I verify the text PRODUCTS
  @smoke @regression
  Scenario: verify That Six Products Are Displayed On Page
    Given I am on homepage
    When I enter standard_user username
    And I enter secret_sauce password
    And I click on LOGIN button
    Then Six products are displayed on page