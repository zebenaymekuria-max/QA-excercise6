import LoginPage from "../../support/pages/Loginpage";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // prevents Cypress from failing the test
});
//---------------------------------------------------------
// Question
//--------------------------------------------------------

describe("Login Automation Using Page Object Model", () => {
  it("Login Automation Using Page Object Model (POM)", () => {
    // create an instance of LoginPage
    const loginPage = new LoginPage();
    // call the login method with user credentials
    loginPage.visit();
    loginPage.login("practice", "SuperSecretPassword!");
    // Assert the error message is visible
    loginPage.getsuccessMessage().should("be.visible");
  });
});
