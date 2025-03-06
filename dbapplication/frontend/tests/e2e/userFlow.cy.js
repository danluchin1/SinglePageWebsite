describe("User Flow", () => {
    it("adds and deletes a user", () => {
      cy.visit("http://localhost:5173"); // Visit the frontend app
  
      cy.get("input[placeholder='Name']").type("Test User");
      cy.get("input[placeholder='Email']").type("test@example.com");
      cy.contains("Add User").click(); // Click the add user button
  
      cy.contains("Test User (test@example.com)").should("exist"); // Check if user is added
  
      cy.contains("Test User (test@example.com)")
        .parent()
        .contains("Delete")
        .click(); // Click delete button
  
      cy.contains("Test User (test@example.com)").should("not.exist"); // Ensure user is deleted
    });
  });
  