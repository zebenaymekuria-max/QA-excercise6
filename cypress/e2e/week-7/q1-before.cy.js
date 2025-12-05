Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // prevents Cypress from failing the test
});

describe("Evangadi Authentication Flow with Before & After Hooks", () => {
  before(() => {
    cy.visit(" https://evangadi.com/auth/login");

    // Enter valid login credentials
    cy.get('input[name="email"]').type("ethiopiaz@yahoo.com");
    cy.get('input[name="password"]').type("Zeelove22");

    // Click Login button
    cy.contains("button", "Login").click();

    //  Wait for real login redirect
    cy.url().should("include", "/welcome");

    // Confirm welcome content
    cy.contains("Welcome").should("be.visible");
  });

  it("Should allow access to authenticated pages", () => {
    cy.visit("https://www.evangadi.com/welcome");
    cy.contains("Welcome").should("be.visible");
  });
  after(() => {
    // Perform logout
    // cy.contains("Logout").click();
    cy.get('span[role="button"]').click();
    // Confirm redirection to login page
    // Evangadi now redirects to HOME after logging out
    cy.url().should("eq", "https://www.evangadi.com/");
  });
});
