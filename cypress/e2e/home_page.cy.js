describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('')
    cy.get('[data-cy="head.el_1"]').click()
  })
})