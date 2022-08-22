import locators from './pageObject/locators.cy'

describe('test2 spec - Settings page', () => {
  it('open settings page', () =>{
    cy.log('Step 1 - load home page, then visit settings page')
    cy.visit('/')
    cy.get('div').contains('Project Settings').click()
    cy.get(locators.sidebarButton).click()
    cy.wait(1000)
    cy.get(locators.sidebarButton).click()
    
  })

  it('edit settings', () => {
    

    cy.log('Step 2 - edit project setting, save and verify')
    cy.get(locators.projectNameInput).should('exist').clear().type('Demo QA Jira Clone')
    cy.get(locators.projectURLInput).should('exist').clear().type('https://github.com/cvele992/QA-Automation-cypress-test')
    cy.get(locators.projectCategorySelect).should('exist').select('Marketing')
    cy.get(locators.projectDescriptionTextarea).should('exist').type('used for QA Automation test')
    cy.get(locators.projectSaveButton).should('exist').click()
    cy.wait(1000)
    cy.get('div').contains('Changes have been saved successfully.')
  });

})