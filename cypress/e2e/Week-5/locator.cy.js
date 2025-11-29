cypress.on("uncaught:exception", (err, runnable) => {
    return false
});
describe("Locating Element", () => {
    it("Locating", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        //ID sector
        cy.get(":nth-child(1) > .form-control").type("John doe");
        //class selector 
        cy.get("input[name='email']").type("john@email.com");
        //Attribute selector
        cy.get("#exampleInputPassword1").type("12345");
        //checkbox interaction
        cy.get("#exampleCheck1").check();
        cy.get("#exampleFormControlSelect1").select("Male");
        cy.get("input[type='radio'][value='option1']").check();
        cy.get("input[name='bday']").type("2000-01-01");
        //submit button click
        cy.get("input[type='submit']").click();
        cy.get(".alert").should("be.visible")

    });
    it.only("Modal window visibilty", () => {
      //step 1: visit the page
        cy.visit("https://demoqa.com/modal-dialogs");
       
          
    })
})