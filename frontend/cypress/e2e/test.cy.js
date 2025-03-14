describe('Sample Test', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:5173');
    cy.contains('User Management'); // Use a valid text present on the page
  });
});