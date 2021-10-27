describe('Sign Up Form', () => {
  it('Should render a title', () => {
    cy.visit('/');
    cy.getByTestId('title').contains('Sign Me Up!');
  });
});
