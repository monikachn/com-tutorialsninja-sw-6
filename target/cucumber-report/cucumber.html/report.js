$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogiPage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page Test",
  "description": "I am on login page",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3235942900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify That Six Products Are Displayed On Page",
  "description": "",
  "id": "login-page-test;verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter standard_user username",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter secret_sauce password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Six products are displayed on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 214071900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterStandard_userUsername()"
});
formatter.result({
  "duration": 108708700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterSecret_saucePassword()"
});
formatter.result({
  "duration": 76301400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLOGINButton()"
});
formatter.result({
  "duration": 116834300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sixProductsAreDisplayedOnPage()"
});
formatter.result({
  "duration": 49143100,
  "status": "passed"
});
formatter.after({
  "duration": 68400,
  "status": "passed"
});
});