import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import Features from "../../pages/loginPage";
const loginPage = require("../../pages/loginPage");

Given("I open the website and the website is visible", () => {
    cy.visit("/");
    cy.get('h4').should("contains.text", "Online Banking")
    cy.get('a').should("contains.text", "Zero Bank")
  });

When("I clicked on the search feature using the word bank", (clickpage) => {
    Features.elements.clickpage()
    cy.url().should("contain", "/search.html?searchTerm=bank")
});

Then("I see search results containing the word bank", (assertTest) => {
    loginPage.elements.assertTest()
  });