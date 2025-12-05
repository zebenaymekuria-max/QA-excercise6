//-------------------------------------
// Question 2: Bookstore cart state management
//-------------------------------------
describe("Bookstore cart state management", () => {
  // Get cart count badge
  const getCartCount = () => cy.get("span.badge");

  // Empty the cart using the real DELETE buttons
  const emptyCart = () => {
    cy.get("body").then(($body) => {
      const deleteButtons = $body.find(
        'a.btn.btn-danger.btn-sm[role="button"]'
      );

      if (deleteButtons.length > 0) {
        // Remove every item
        cy.get('a.btn.btn-danger.btn-sm[role="button"]').each(($btn) => {
          cy.wrap($btn).click({ force: true });
        });
      }
    });

    // Wait until the cart becomes empty (badge is '' or '0')
    getCartCount().should(($badge) => {
      if ($badge.length) {
        const val = $badge.text().trim();
        expect(val === "" || val === "0").to.be.true;
      }
    });
  };

  // ------------------------------
  // BEFORE EACH TEST
  // ------------------------------
  beforeEach(() => {
    cy.visit("https://practice.expandtesting.com/bookstore");
    emptyCart(); // ensure clean start
  });

  // ------------------------------
  // TEST: Starts empty
  // ------------------------------
  it("starts with an empty cart", () => {
    getCartCount().then(($badge) => {
      if ($badge.length) {
        const val = $badge.text().trim();
        expect(val === "" || val === "0").to.be.true;
      }
    });
  });

  // ------------------------------
  // TEST: Add one item
  // ------------------------------
  it("adds one book and updates the cart count", () => {
    cy.contains("Add To Cart").first().click({ force: true });

    getCartCount().should(($badge) => {
      expect($badge.text().trim()).to.eq("1");
    });
  });

  // ------------------------------
  // TEST: Remove an item
  // ------------------------------
  it("removes a book and updates the cart count", () => {
    // Add a book
    cy.contains("Add To Cart").first().click({ force: true });

    // Wait for cart badge to update
    getCartCount().should(($badge) => {
      expect($badge.text().trim()).to.eq("1");
    });

    // Go directly to Cart page (table exists here)
    cy.visit("https://practice.expandtesting.com/bookstore/cart");

    // Wait for table row
    cy.get("table tbody tr", { timeout: 8000 }).should("exist");

    // Click Delete
    cy.get("table tbody tr td a.btn.btn-danger.btn-sm")
      .first()
      .click({ force: true });

    // Confirm cart is empty
    cy.visit("https://practice.expandtesting.com/bookstore/cart"); // refresh
    getCartCount().then(($badge) => {
      const val = $badge.text().trim();
      expect(val === "" || val === "0").to.be.true;
    });
  });
});
