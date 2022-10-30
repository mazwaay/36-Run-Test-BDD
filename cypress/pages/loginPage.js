class featurepages {
    
    elements = {
      searchTerm: () => cy.get("#searchTerm"),
      assertTest: () => cy.get('h2').should('contain.text', 'Search Results:'),
      clickpage: () => cy.get("#searchTerm").should('be.visible').type("bank{enter}"),
    };
  }
  
  module.exports = new featurepages();
  