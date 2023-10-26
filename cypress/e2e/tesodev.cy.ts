describe('tesodev test', () => {
  it('main', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should("include", "/");
    cy.get('[data-test="main-logo"]').should('be.visible')
    cy.get('h4').should('be.visible').contains('Find in records')
    cy.get('[data-test="main-input"]').type('test')
    cy.get('[data-test="main-button"]').click({multiple:true})
    cy.url().should("include", "/results");
    cy.get('').should('be.visible').contains('Search')
    cy.get('.style_flex__Kk-qP').should('be.visible')
    cy.get('button').contains("Next").click()
    cy.get('.style_flex__Kk-qP').should('be.visible')
    cy.get('button').contains("Previous").click()
    cy.get('.style_dropdown__hru40').should('be.visible').click({force: true})
    cy.get('.style_orderMenu__6ZsOT').click()
    cy.url().should("include", "/add-new");
    cy.get(':nth-child(1) > label').should('be.visible').contains('Name Surname')
    cy.get(':nth-child(1) > #name').should('be.visible').type('test')
    cy.get(':nth-child(2) > label').should('be.visible').contains('Country')
    cy.get(':nth-child(2) > #name').should('be.visible').type('turkey')
    cy.get(':nth-child(3) > label').should('be.visible').contains('City')
    cy.get(':nth-child(3) > #name').should('be.visible').type('istanbul')
    cy.get(':nth-child(4) > label').should('be.visible').contains('Email')
    cy.get(':nth-child(4) > #name').should('be.visible').type('test@gmail.com')
    cy.get(':nth-child(5) > label').should('be.visible').contains('Website')
    cy.get(':nth-child(5) > #name').should('be.visible').type('test')
    cy.get('.styles_button__YJTit').should('be.visible').contains('Add').click()
    cy.get('.style_mainLogo__4RhYr').should('be.visible').click()
    cy.url().should("include", "/");
  })
})