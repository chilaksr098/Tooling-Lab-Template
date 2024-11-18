describe('User Interaction Test', () => {
  it('should log correct name and number of tries', () => {
    // Visit your application
    cy.visit('http://localhost:3000'); // replace with your app's URL if different

    // Type your name in the input field
    cy.get('input[name="name"]') // replace with the correct selector for the name input
      .type('Sasidhar Chilaka');

    // Select a choice from the dropdown
    cy.get('select[name="choices"]') // replace with the correct selector for the dropdown
      .select('Option 2'); // replace 'Option 2' with the actual option text you want to select

    // Submit the form (if applicable)
    cy.get('button[type="submit"]') // replace with the correct selector for the submit button
      .click();

    // Check that the history log contains the correct number of tries and the name
    cy.get('.history-log') // replace with the correct selector for the history log
      .should('contain', 'Sasidhar Chilaka') // Check if your name is logged
      .and('have.length', 1); // Check if there is 1 entry (or adjust based on your app's behavior)
  });
});
