describe('Adding a New Comment', () => {
  it('the homepage should have a button with the right text', () => {
    cy.visit('/')
    cy.contains('button', 'Add a New Comment')
  })
  it('the Add a New Comment button should toggle the editor display on and off', () => {
    cy.visit('/')
    cy.get('[data-test-id="new-comment-editor"]').should('not.be.visible')

    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should('be.visible')

    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should('not.be.visible')
  })
})
