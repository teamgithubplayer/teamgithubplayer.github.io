describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://teamgithubplayer.github.io/index.html') // change URL to match your dev URL
    cy.get('[data-cy="head.el_1"]').click()
    cy.get('[data-cy="head.el_2"]').click()
    cy.get('[data-cy="head.el_3"]').click()
    cy.get('[data-cy="head.el_3a"]').click({force: true})
    cy.get('[data-cy="head.el_3b"]').click({force: true})
    cy.get('[data-cy="head.el_3c"]').click({force: true})
    cy.get('[data-cy="head.el_3d"]').click()
    cy.get('[data-cy="head.el_4"]').click()
    cy.get('[data-cy="head.el_5"]').click()
    cy.get('[data-cy="head.el_6"]').click()
    cy.get('[data-cy="head.el_7"]').click()
  })
})