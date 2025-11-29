describe("Checkbox Enable/Disable Test", () => {
  it("verifies checkbox enabled, disables it, then enables again", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    const checkbox = "#checkBoxOption3"; // Option1 checkbox

    // Verify checkbox is enabled by default
    cy.get(checkbox).should("be.enabled");

    // // Disable the checkbox using JavaScript
    cy.get(checkbox).invoke("attr", "disabled", true);
    cy.get(checkbox).should("be.disabled");

    // // Enable it back
    cy.get(checkbox).invoke("removeAttr", "disabled");
    cy.get(checkbox).should("be.enabled").check().should("be.checked");
  });
});
