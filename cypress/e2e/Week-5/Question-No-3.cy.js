describe("Exercise 3 – Login flows", () => {
  const url = "https://practicetestautomation.com/practice-test-login/";

  it("shows error for invalid username & password, then logs in with valid credentials", () => {
    cy.visit(url);

    // Invalid credentials
    cy.get("#username").clear().type("invalidUser");
    cy.get("#password").clear().type("invalidPass");
    cy.get("#submit").click();

    // Error message appears; sites sometimes vary wording, handle both cases
    cy.get("#error", { timeout: 10000 })
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const t = text.trim();
        const matches =
          /Invalid username or password|Your username is invalid!|Your password is invalid!/i.test(
            t
          );
        expect(matches, `Actual error text was: "${t}"`).to.be.true;
      });

    // Valid credentials
    cy.get("#username").clear().type("student");
    cy.get("#password").clear().type("Password123");
    cy.get("#submit").click();

    // Verify successful login lands on the success page
    cy.url().should("include", "/logged-in-successfully");
    cy.contains("Congratulations").should("be.visible");
  });
});
