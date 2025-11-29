describe("Exercise 4 – Shop link href attribute", () => {
  it("verifies the Shop link points to /shop (or contains it)", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.contains("a", "Shop")
      .should("have.attr", "href")
      .then((href) => {
        // Some deployments include a prefix (e.g., /angularpractice/shop). Accept common variants
        const ok =
          href === "/shop" || href.endsWith("/shop") || href.includes("/shop");
        expect(ok, `href was: ${href}`).to.be.true;
      });
  });
});
