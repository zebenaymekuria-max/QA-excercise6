describe("Exercise 5 – Checkbox toggle", () => {
  it("checks and unchecks a checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("input[type='checkbox'][value='option1']").as("option1");

    cy.get("@option1").check().should("be.checked");
    cy.get("@option1").uncheck().should("not.be.checked");
  });
});
