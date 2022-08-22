const locators = {
    // elements on home page
    addBtn: '.anticon-plus',
    sidebarButton: '.overlay',

    // elements in create issue
    form: '.issue-form',
    issueTypeField: 'issue-type-select',
    issueProirityField: 'issue-priority-select',
    SelectOptionField: 'nz-option-container',
    shortSummaryInput: '.mt-3.form-group > input',
    descriptionParagraph: '.ql-editor.ql-blank',
    reporterField: "j-user",
    assigneesField: "issue-assignees-select > nz-select",

    issueCardP: 'issue-card > div > div > p',
    issueTitleEditField: 'issue-title',
    issueCommentAdd: '.editing-area > textarea',
    issueCommentAddButton: '.editing-area >div > j-button > button > span',
    issueStatusEdit: 'issue-status > j-button > button > span',
    issueStatusEditDropdown: 'ul > li > div > span',

    jButtonTrashIcon: 'j-button[icon*="trash"]',
    jButtonTimesIcon: 'j-button[icon*="times"]',

    // elements in settings page
    projectNameInput: 'input[formcontrolname*="name"]',
    projectURLInput: 'input[formcontrolname*="url"]',
    projectCategorySelect: 'select[formcontrolname*="category"]',
    projectDescriptionTextarea: 'textarea[formcontrolname*="description"]',
    projectSaveButton: 'button[type*="submit"]',

    // hover options
    projectLogo: '.logoLink',
    projectSearchLogo: '.anticon-search',
    projectCreateIssueLogo: '.anticon-plus',
    projectAbout: '.anticon-question-circle',
}

export default locators;