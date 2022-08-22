import locators from './pageObject/locators.cy'

describe('test1 spec', () => {
  it('open home page', () =>{
    cy.visit('/')
  })
  
  let typeArray = ["Bug","Story","Task"];
  let priorityArray = ["Lowest","Medium","Highest"];
  let reporterArray = ["Iron Man","Spider Man","Captain"];
  let assigneeArray = ["Spider Man","Captain","Thor"];
  for(var i = 0; i<3; i++){
    
    let type = typeArray[i].toString();
    let priority = priorityArray[i].toString();
    let reporter = reporterArray[i].toString();
    let assignee = assigneeArray[i].toString();
    let brojac = i+2;
    it('create issue - '+type, () => {  

      cy.log('Step '+brojac+' - create '+type)
      cy.get(locators.addBtn).should('exist').click()
      cy.get(locators.issueTypeField).should('exist').click()
      cy.get(locators.SelectOptionField).as('option')
      cy.get('@option').contains(type).click()
  
      cy.get(locators.issueProirityField).should('exist').click()
      cy.get(locators.SelectOptionField).as('option')
      cy.get('@option').contains(priority).click()
  
      cy.get(locators.shortSummaryInput).should('exist').type('First '+type)
  
      cy.get(locators.descriptionParagraph).should('exist').type('This is the first '+type)
  
      cy.get(locators.reporterField).should('exist').click()
      cy.get(locators.SelectOptionField).as('option')
      cy.get('@option').contains(reporter).click()
  
      cy.get(locators.assigneesField).should('exist').click()
      cy.get(locators.SelectOptionField).as('option')
      cy.get('@option').contains(assignee).click()
  
      cy.get('label').contains('Description').click()
      cy.get(locators.form).find("[type='submit']").contains('Create Issue').click()
    })
  }
  it('create issue - negative', () => {
    let type = "Bug";
    let priority = "Lowest";
    let reporter = "Iron Man";
    let assignee = "Spider Man";


    cy.log('Step 5 - check if create issue button is disabled')
    cy.get(locators.addBtn).should('exist').click()
    cy.get(locators.issueTypeField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(type).click()

    cy.get(locators.issueProirityField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(priority).click()

    cy.get(locators.descriptionParagraph).should('exist').type('This is the first bug')

    cy.get(locators.reporterField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(reporter).click()

    cy.get(locators.assigneesField).should('exist').click()
    cy.get(locators.SelectOptionField).as('option')
    cy.get('@option').contains(assignee).click()

    cy.get('label').contains('Description').click()
    cy.get(locators.form).find("[type='submit']").contains('Create Issue').should('be.disabled')
    cy.get(locators.form).find("[type='button']").contains('Cancel').click()
  })

  it('edit first bug and add comment', () => {
    cy.log('Step 6 - edit first bug')
    cy.get(locators.issueCardP).contains('First Bug').click()

    cy.get(locators.issueTitleEditField).type(" - fixed")
    cy.get(locators.issueCommentAdd).type('This is not a bug, it is a feature')
    cy.get(locators.issueCommentAddButton).contains('Save').click()
    cy.get(locators.issueStatusEdit).contains('Backlog').click()
    cy.get(locators.issueStatusEditDropdown).contains('Done').click()
    cy.get(locators.jButtonTimesIcon).click()
  });

  it('delete first story', () => {
    cy.log('Step 7 - Delete first story')
    cy.get(locators.issueCardP).contains('First Story').click()
    cy.get(locators.jButtonTrashIcon).click()
    cy.get('span').contains('Delete').click()
  });
  
  it('collapse and open sidebar', () => {
    cy.log('Step 8 - collapse and open sidebar')
    cy.get(locators.sidebarButton).click()
    cy.wait(1000)
    cy.get(locators.sidebarButton).click()
  });
})