describe("testing serra app: signup, login, logout", () => {
  it("user signs up", () => {
    cy.visit("localhost:3000");
    cy.findByRole('link', {  name: /sign up/i }).click();

    cy.get("#username").type("Isra");
    cy.get("#newEmail").type("Isra@heart.com", {force: true});
    cy.get("#newPassword").type("Isra#16#", {force: true});
    cy.get("#confirmPassword").type("Isra#16#", {force: true});
    cy.get("#terms").check({force: true});
    cy.findByRole('button', { name: /sign up/i }).click();
  });

  it("user logs in", () => {
    cy.visit("localhost:3000");
    cy.findByRole('link', {  name: /log in/i }).click();
    cy.get("#currentEmail").type("omartarekramoun@gmail.com");
    cy.get("#currentPassword").type("Mynameisr@moun16");
    cy.findByRole('button', { name: /log in/i }).click();
  });

  it("user logs out", () => {
    cy.visit("localhost:3000");
    cy.findByRole('link', {  name: /my profile/i }).click();
    cy.findByRole('button', { name: /logout/i }).click();
  });
});
