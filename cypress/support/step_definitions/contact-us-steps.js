import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I access the contact us portal page', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
})

When('I enter the first name {word}', firstName => {
    cy.get('[placeholder="First Name"]').type(firstName)
})

And('I enter the last name {word}', lastName => {
    cy.get('[placeholder="Last Name"]').type(lastName)
})

And('I enter the email address {word}', email => {
    cy.get('[placeholder="Email Address"]').type(email)
})

And('I enter the comments {string}', comment => {
    cy.get('[placeholder="Comments"]').type(comment)
})

And('I click on the submit button', () => {
    cy.get('form').submit()
})

Then('I should be presented with the {string}', message => {
    cy.get('#contact_reply').should('contain', message)
})
