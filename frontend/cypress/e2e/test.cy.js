// cypress/e2e/sample.cy.js
describe('Sample Test', () => {
    it('Visits the app', () => {
      cy.visit('/');
      cy.contains('Welcome'); // Change based on your app's content
    });
  });