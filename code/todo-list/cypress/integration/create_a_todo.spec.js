describe("create a todo", () => {
  it("displaying a todo", () => {
    cy.visit("/");

    cy.get("[data-test='todoText']").type("吃饭");
    cy.contains("add").click();

    cy.get("[data-test='todoText']").should("have.value", "");

    cy.contains("吃饭");
  });
});
