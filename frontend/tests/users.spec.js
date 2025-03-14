describe("User Management", () => {
    it("Loads users and adds a new user", () => {
      cy.visit("http://localhost:3000");
      cy.get("input").type("Alice");
      cy.get("button").click();
      cy.contains("Alice");
    });
  });