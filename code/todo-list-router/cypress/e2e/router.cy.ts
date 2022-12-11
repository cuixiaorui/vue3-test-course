describe("router", () => {
  it("router match", () => {
	cy.visit("http://localhost:5173")
	cy.getByCy("Home").should("be.visible")


	cy.visit("http://localhost:5173/#/about")
	cy.getByCy("About").should("be.visible")


	cy.visit("http://localhost:5173/#/todo")
	cy.getByCy("Todo").should("be.visible")


	cy.visit("http://localhost:5173/#/user/cxr")
	cy.getByCy("User").should("be.visible")
  });
});
