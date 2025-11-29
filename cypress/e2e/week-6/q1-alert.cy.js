// describe("Alert Test", () => {
//   it("simple alert", () => {
//     cy.visit("https://vinothqaacademy.com/alert-and-popup/");

//     // Click the button that triggers the alert
//     cy.on("window:alert", (alrtText) => {
//       expect(alrtText).to.equal("I am an alert box!");
//     });
//     cy.get("button[name='alertbox']").click();
//     cy.get("#demotwo").should("have.text", "You clicked on OK!");
//   });
//   it("Confrimational alert", () => {
//     cy.visit("https://vinothqaacademy.com/alert-and-popup/");
//     cy.on("window:confirm", (confirmText) => {
//       // confirm
//       expect(confirmText).to.equal("Confirm pop up with OK and Cancel button");
//       return false;
//     });
//     cy.get("button[name='confirmalertbox']").click();
//     cy.get("#demo").should("have.text", "You clicked on Cancel!");
//   });
//   it("Prompt Alert", () => {
//     cy.visit("https://vinothqaacademy.com/alert-and-popup/");
//     cy.window().then((prmpt) => {
//       cy.stub(prmpt, "prompt").returns("No");
//     });
//     cy.get("button[name='promptalertbox1234']").click();
//     // cy.contains("button", "Prompt Alert Box").click();

//     cy.get("#demoone").should("contain", "Sad ");
//   });

// });
//Question 2
    // it("Handling Dropdown with Hover and Submenu",()=>{
    //     // visit the page with dropdown and submenu
    //     cy.visit(" https://rahulshettyacademy.com/AutomationPractice/");
    //     // Hover over the element that triggers the submenu.
    //     cy.get("#mousehover").trigger("mouseover");
    //     // Click on the submenu item that appears after hovering.
    //     cy.get(".mouse-hover-content").contains("Top").click({ force: true });
    //     // Verify that the click action was successful by checking the URL or page content.
    //     cy.url().should("include","#top");
    // });
//       // QUESTION 3
//    // QUESTION 3
  //   it('Handling Dynamic Web Table with Pagination', () => {
  //   cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

  //   const searchText = 'Rice';
  //   let found = false;

  //   function searchInPage() {
  //     // Look through all rows in the current page
  //     cy.get('tbody tr').each($row => {
  //       cy.wrap($row).find('td:nth-child(1)').then($cell => {
  //         if ($cell.text().includes(searchText)) {
  //           found = true;
  //           // Validate that this row has the search text in the first column
  //           expect($cell.text()).to.include(searchText);
  //         }
  //       });
  //     }).then(() => {
  //       // If found on current page, we stop
  //       if (!found) {
  //         // Check if the next button is disabled
  //         cy.get('[aria-label="Next"]').parent().then($nextBtn => {
  //           if (!$nextBtn.hasClass('disabled')) {
  //             cy.wrap($nextBtn).click();
  //             cy.wait(500); 
  //             searchInPage(); 
  //           } else {
  //             // If last page and not found, fail the test
  //             expect(found).to.be.true;
  //           }
  //         });
  //       }
  //     });
  //   }

  //   // Start the search from the first page
  //   searchInPage();
  // });
// QUESTION 4
//     it("Handling Table with Checkboxes", () => {
//         // Visit the webpage containing the table with checkboxes
//     cy.visit("https://vinothqaacademy.com/webtable/");
//     //Select (check) and deselect some checkboxes.
//     cy.get("#myTable tbody tr").each(($row) => {
//         cy.wrap($row).find("td").eq(1).then(($cell) => {
//             if ($cell.text().includes("Jane Smith")) {
//                 cy.wrap($row).find("input[type='checkbox']").check();
//             }
//             if ($cell.text().includes("Alice Johnson")) {
//                 cy.wrap($row).find("input[type='checkbox']").uncheck();
//             }
//         }
//         );
//     });
//     // Verify that the correct checkboxes are selected or deselected.
//     cy.get("#myTable tbody tr").each(($row) => {
//         cy.wrap($row).find("td").eq(1).then(($cell) => {
//             if ($cell.text().includes("Jane Smith")) {
//                 cy.wrap($row).find("input[type='checkbox']").should("be.checked");
//             }
//             if ($cell.text().includes("Alice Johnson")) {
//                 cy.wrap($row).find("input[type='checkbox']").should("not.be.checked");
//             }
//         });
//     });
   
// });


//Question 5
// import "cypress-iframe";

//   describe("Handle iframe and click button", () => {
//     it("Clicks button inside iframe and verifies success message", () => {
//       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//       // Load iframe
//       cy.frameLoaded("#courses-iframe");

//       // Switch to iframe
//       cy.iframe("#courses-iframe").as("iframeBody");

//       // Click only the FIRST mentorship link
//       cy.get("@iframeBody").find("a[href*='mentorship']").first().click();

//       // Verify page heading
//       cy.get("@iframeBody")
//         .find("h1")
//         .should("contain.text", "Get Personal Guidance from");
//     });
//   });

  

import "cypress-iframe";
describe("Handle iframe and click button", () => {
  it("Clicks button inside iframe and verifies success message", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
    // Load iframe
    cy.frameLoaded("#courses-iframe");

    // Switch to iframe
    cy.iframe("#courses-iframe").as("iframeBody");

    // Click only the FIRST mentorship link
    cy.get("@iframeBody").find("a[href*='mentorship']").first().click();

    // Verify page heading
    cy.get("@iframeBody")
      .find("h1")
      .should("contain.text", "Get Personal Guidance from");
  });
});



