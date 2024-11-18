describe(`Game History Log - Basic Test`, () => {
  it(`should log user choice and name in history`, () => {
    // Visit the app
    cy.visit(`index.html`);  // Replace with the correct URL
    
    // Input the username (use correct selector)
    cy.get(`.form-control`)  // Adjust the selector to match your input field
      .should(`be.visible`)   // Ensure it is visible before typing
      .type(`Alice`);
    
    // Select a random game choice (rock, paper, or scissors)
    const choices = [ `rock`, `paper`, `scissors` ];
    const choice = choices[Math.floor(Math.random() * 3)];
    
    // Start the game and make a selection
    cy.get(`#start-button`).click();  // Start game button
    cy.get(`#choice-dropdown`).select(choice);  // Select the choice
    cy.get(`#play-button`).click();  // Play button
    
    // Check that the history log contains the correct name and choice
    cy.get(`.history-log`)
      .should(`contain`, `Alice`)  // Name should be in the history log
      .and(`contain`, choice);  // Selected choice should be in the log
  });
});
