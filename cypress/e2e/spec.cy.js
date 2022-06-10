describe('Offset', () => {
  it('stay at the specified position', () => {
    // replace examples/offset with your server configuration
    return cy.visit('cypress/fixtures/dom.html').get('#inner-content').should('exist').click()
  })
})