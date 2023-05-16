package com.saucedemo.cucumber.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    LoginPage loginPage;

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        loginPage = new LoginPage();
    }

    @When("^I enter standard_user username$")
    public void iEnterStandard_userUsername() {
        loginPage.sendTextToUserNameField();
    }

    @And("^I enter secret_sauce password$")
    public void iEnterSecret_saucePassword() {
        loginPage.sendTextToPasswordField();
    }

    @And("^I click on LOGIN button$")
    public void iClickOnLOGINButton() {
        loginPage.clickOnLoginButton();
    }

    @Then("^Six products are displayed on page$")
    public void sixProductsAreDisplayedOnPage() {
        Assert.assertEquals(6, loginPage.get6Products());
    }

    @Then("^I verify the text PRODUCTS$")
    public void iVerifyTheTextPRODUCTS() {
        Assert.assertEquals("Products", loginPage.getProductText());
    }
}
