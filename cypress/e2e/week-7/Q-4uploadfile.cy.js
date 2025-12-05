import "cypress-file-upload";
describe("ImgBB Image Upload Test", () => {
  it("uploads an image and verifies success", () => {
    // Visit the imgbb upload page directly
    cy.visit("https://imgbb.com/");

    // Click on the "Start Uploading" button
    cy.contains("Start uploading").click();

    // Upload image from fixtures
    const fileName = "banner-puppies.jpg"; // Ensure this file exists in cypress/fixtures

    cy.get('input[type="file"]').attachFile(fileName);

    // Wait for upload to complete and verify upload success
    cy.get('[data-group="upload-queue-ready"] > .btn', { timeout: 10000 })
      .should("be.visible")
      .click();

    // Optional: Check for "Upload complete" message or copy link button
    cy.contains(/Upload complete|Upload/i).should("exist");
  });
});
