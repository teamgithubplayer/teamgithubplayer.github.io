describe('My Page', () => {
  it('Main Page - index.html', () => {
    cy.visit('')
    cy.get('[data-cy="p1.el_3"]').click()
    cy.url().should('include', '/Page3/3rdPage.html')
  })
  it('Page2', () => {
    cy.visit('/Page2/2ndPage.html')
    cy.get('[data-cy="p2.el_2"]').click()
    cy.get('[data-cy="p2.slide_1_3"]').should('be.visible')
    cy.get('[data-cy="p2.el_1"]').click()
    cy.get('[data-cy="p2.slide_1_2"]').should('be.visible')
  })
  it('Page3', () => {
    cy.visit('/Page3/3rdPage.html')
    cy.get('[data-cy="p3.el_1"]').click()
  })
  it('Page3a', () => {
    cy.visit('/Page3/Page3a/3rdPageA.html')
  })
  it('Page3b', () => {
    cy.visit('/Page3/Page3b/3rdPageB.html')
  })
  it('Page3c', () => {
    cy.visit('/Page3/Page3c/3rdPageC.html')
  })
  it('Page3d', () => {
    cy.visit('/Page3/Page3d/3rdPageD.html')
  })
  it('Page4', () => {
    cy.visit('/Page4/4thPage.html')
  })
})