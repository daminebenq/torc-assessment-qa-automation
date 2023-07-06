declare namespace Cypress {
    interface Chainable {
      visitUrl(urlParam: 'baseUrl' | 'testUrl'): Chainable;
    }
}