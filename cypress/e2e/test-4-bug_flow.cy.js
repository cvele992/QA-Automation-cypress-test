import locators from './pageObject/locators.cy'

describe('test4 spec - Bug flow', () => {
  it('open home page', () =>{
    
    cy.log('Step 1 - load home page')
    cy.visit('/')
  })

  it('test bug flow', () => {
    let type = "Bug";
    let priority = "Lowest";
    let reporter = "Iron Man";
    let assignee = "Spider Man";


    cy.log('Step 2 - create bug')
    cy.get(locators.addBtn).should('exist').click()
    cy.get(locators.issueTypeField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(type).click()

    cy.get(locators.issueProirityField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(priority).click()

    cy.get(locators.shortSummaryInput).should('exist').type('New '+type)

    cy.get(locators.descriptionParagraph).should('exist').type('This is the new bug')

    cy.get(locators.reporterField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(reporter).click()

    cy.get(locators.assigneesField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(assignee).click()

    cy.get('label').contains('Description').click()
    cy.get(locators.form).find("[type='submit']").contains('Create Issue').click()

    cy.wait(1000)
    
    cy.get(locators.issueCardP).contains('New Bug').click()
    cy.get(locators.issueCommentAdd).type('This bug will be selected for development')
    cy.get(locators.issueCommentAddButton).contains('Save').click()
    cy.get(locators.issueStatusEdit).contains('Backlog').click()
    cy.get(locators.issueStatusEditDropdown).contains('Selected for Development').click()
    cy.wait(1000)
    cy.get(locators.jButtonTimesIcon).click()

    cy.get(locators.issueCardP).contains('New Bug').click()
    cy.get(locators.issueCommentAdd).type('This bug is currently in progress')
    cy.get(locators.issueCommentAddButton).contains('Save').click()
    cy.get(locators.issueStatusEdit).contains('Selected for Development').click()
    cy.get(locators.issueStatusEditDropdown).contains('In progress').click()
    cy.wait(1000)
    cy.get(locators.jButtonTimesIcon).click()
    
    cy.get(locators.issueCardP).contains('New Bug').click()
    cy.get(locators.issueCommentAdd).type('This bug is done')
    cy.get(locators.issueCommentAddButton).contains('Save').click()
    cy.get(locators.issueStatusEdit).contains('In progress').click()
    cy.get(locators.issueStatusEditDropdown).contains('Done').click()
    cy.wait(1000)
    cy.get(locators.jButtonTimesIcon).click()
  });
})