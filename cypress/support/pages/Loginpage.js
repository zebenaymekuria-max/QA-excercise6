class LoginPage {
  // visit function definition
  visit() {
    return cy.visit("https://practice.expandtesting.com/login");
  }
  getUserName() {
    return cy.get("input[name='username']");
  }
  getPassword() {
    return cy.get("input[name='password']");
  }
  getLoginButton() {
    return cy.get("button[type='submit']");
  }
  getsuccessMessage() {
    return cy.get(".alert-success");
  }
  login(userName, password) {
    this.visit();
    this.getUserName().type(userName);
    this.getPassword().type(password);
    this.getLoginButton().click();
    return this.getsuccessMessage();
  }
}
export default LoginPage;
