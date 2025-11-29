// Exercise 6: Multiple Checkbox Selection by value

describe("Exercise 6 – Multiple checkbox selection", () => {
  it("selects multiple checkboxes by their value", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    ["option2", "option3"].forEach((val) => {
      cy.get(`input[type='checkbox'][value='${val}']`)
        .check()
        .should("be.checked");
    });
  });
});
