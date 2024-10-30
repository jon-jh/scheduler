describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
    cy.contains("[data-testid=day]", "Tuesday")
      // targeting the <li> list item
      // we gave the <li> item the data-testid=day for stability in DayListItem.js
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
