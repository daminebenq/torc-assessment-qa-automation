import {selectors} from '../selectors/elements';

describe("Visit DuckDuckGO", () => {
  it("Searches for 'The dev-friendly football API'", () => {
    cy.visitUrl("baseUrl");
    cy.get(selectors.searchBox).click();
    cy.get(selectors.searchBox).type(selectors.searchString);
    cy.get(selectors.searchButton).click().then(()=> {
      cy.wait(3000);
    });
    cy.get(selectors.searchResultsMain).should('be.visible');
    cy.get(selectors.searchResultFirstItem).eq(0).click({timeout: 5000});
    cy.url().should('eq', selectors.pageResultUrl);
  });
});
