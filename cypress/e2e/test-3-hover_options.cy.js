import locators from './pageObject/locators.cy'

describe('test3 spec - Hover options', () => {
  it('open home page', () =>{
    
    cy.log('Step 1 - load home page')
    cy.visit('/')
  })

  it('test hover options with cypress real events', () => {
    cy.log('Step 2 - hover over button and check if text is displayed')
    
    cy.get(locators.projectSearchLogo).realHover()
    cy.get('.ant-tooltip-inner.ng-tns-c76-2').should('have.text', 'Search issues')
    cy.get(locators.projectCreateIssueLogo).realHover()
    cy.get('.ant-tooltip-inner.ng-tns-c76-3').should('have.text', 'Create issue')
  });
})