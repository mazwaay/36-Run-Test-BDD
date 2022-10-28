import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";

Given("I open the website and the website is visible", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("contains", "/index.html");
  });

When("I clicked on the search feature using the word bank", () => {
    cy.get("#searchTerm")
    .should('be.visible')
    .type("bank{enter}")
});

Then("I see search results containing the word bank", () => {
    cy.url().should("contain", "/search.html?searchTerm=bank")
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.get('span').should('contain.text', 'Download WebInspect')
    cy.get('a')
});

