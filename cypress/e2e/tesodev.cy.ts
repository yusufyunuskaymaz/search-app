describe("tesodev test", () => {
  it("main", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "/");
    cy.get('[data-test="main-logo"]').should("be.visible");
    cy.get("h4").should("be.visible").contains("Find in records");
    cy.get("h4").should("be.visible").contains("Top News");
    cy.get('[data-test="news-card"]').should("be.visible");
    cy.get('[data-test="footer-img"]').should("be.visible");
    cy.get('[data-test="footer-text"]').should("be.visible");
    cy.get('[data-test="footer-map"]').should("be.visible");
    cy.get('[data-test="main-input"]').type("test");
    cy.get('[data-test="main-button"]').last().click();
    cy.url().should("include", "/results");
    cy.get('[data-test="main-button"]')
      .first()
      .should("be.visible")
      .contains("Search");
    cy.get('[data-test="result-card"]').should("be.visible");
    cy.get("button").contains("Next").click();
    cy.get('[data-test="result-card"]').should("be.visible");
    cy.get("button").contains("Previous").click();
    cy.get('[data-test="orderBy"]').should("be.visible").contains("Order By");
    cy.get('[data-test="main-button"]')
      .last()
      .should("be.visible")
      .contains("Add new record")
      .click();
    cy.url().should("include", "/add-new");
    cy.get(":nth-child(1) > label")
      .should("be.visible")
      .contains("Name Surname");
    cy.get(":nth-child(1) > #name").should("be.visible").type("test");
    cy.get(":nth-child(2) > label").should("be.visible").contains("Country");
    cy.get(":nth-child(2) > #name").should("be.visible").type("turkey");
    cy.get(":nth-child(3) > label").should("be.visible").contains("City");
    cy.get(":nth-child(3) > #name").should("be.visible").type("istanbul");
    cy.get(":nth-child(4) > label").should("be.visible").contains("Email");
    cy.get(":nth-child(4) > #name").should("be.visible").type("test@gmail.com");
    cy.get(":nth-child(5) > label").should("be.visible").contains("Website");
    cy.get(":nth-child(5) > #name").should("be.visible").type("test");
    cy.get('[data-test="main-button"]')
      .should("be.visible")
      .contains("Add")
      .click();
    cy.get('[data-test="add-new-logo"]').should("be.visible").click();
    cy.url().should("include", "/");
  });
});