import locators from './pageObject/locators.cy'

describe('test3 spec', () => {
  it('open home page', () =>{
    
    cy.log('Step 1 - load home page')
    cy.visit('/')
  })

  it('test not implemented sidebar buttons with cypress real events', () => {
    cy.log('Step 2 - hover over button and check if button is disabled')
    
    cy.get('use[xlink:href*="https://jira.trungk18.com/project/board#ship"]').realHover()
  });
})