describe("User Login", () => {
  //single user
  it("Logs in with fixture data", () => {
    cy.fixture("users").then((user) => {
      cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
      cy.get("#username").type(user.username);
      cy.get("#password").type(user.password);
      cy.get("#signInBtn").click();
    });
  });
  //multi-user login
  it.only("Logs in with multiple users", () => {
    cy.fixture("user").each((user) => {
      cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
      cy.get("#username").type(user.username);
      cy.get("#password").type(user.password);
      cy.get("#signInBtn").click();

      if (user.username === "rahulshettyacademy") {
        cy.url().should("include", "shop");
      } else {
        cy.get(".alert-danger").should("be.visible");
      }
    });
  });
});
