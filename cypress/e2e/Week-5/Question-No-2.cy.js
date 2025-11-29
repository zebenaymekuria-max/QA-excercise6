// Exercise 2: Modal Window Visibility Test

describe("Exercise 2  Modal visibility", () => {
  it("verifies modal hidden by default, visible after click", () => {
    cy.visit(" https://demoqa.com/modal-dialogs");

    // Small modal title does not exist before opening
    cy.get("#example-modal-sizes-title-sm").should("not.exist");

    // Open small modal
    cy.get("#showSmallModal").should("be.visible").click();

    // Modal becomes visible
    cy.get(".modal-content").should("be.visible");
    cy.get("#example-modal-sizes-title-sm")
      .should("be.visible")
      .and("contain.text", "Small Modal");

    // Close
    cy.get("#closeSmallModal").click();

    // After closing, title element should be removed again
    cy.get("#example-modal-sizes-title-sm").should("not.exist");
  });
});
