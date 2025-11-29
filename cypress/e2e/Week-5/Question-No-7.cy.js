// Exercise 7: Dropdown Option Selection

describe("Exercise 7 – Dropdown selection", () => {
  it("selects an option by visible text and verifies the value", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#dropdown-class-example")
      .select("Option2")
      .should("have.value", "option2");
  });
});
