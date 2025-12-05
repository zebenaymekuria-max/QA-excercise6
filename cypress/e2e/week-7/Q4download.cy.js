describe("File Download Test", () => {
  it("downloads a file and verifies it exists", () => {
    cy.visit("https://practice-automation.com/file-download/");

    // Get the download button and extract the REAL file URL
    cy.get("a.wpdm-download-link")
      .should("be.visible")
      .invoke("attr", "data-downloadurl")
      .then((downloadUrl) => {
        // Use cypress-downloadfile plugin
        cy.downloadFile(
          downloadUrl,
          "cypress/downloads",
          "downloaded-file.pdf"
        );
      });

    // Verify the file exists
    cy.readFile("cypress/downloads/downloaded-file.pdf").should("exist");
  });
});
