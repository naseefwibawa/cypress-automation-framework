// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(element => {
        if (element.text().includes(productName)) {
            cy.wrap(element).click()
        }
    })
})

Cypress.Commands.add('addProductToCart', productName => {
    cy.get('.fixed_wrapper .prdocutname').each((element, index) => {
        if (element.text() === productName) {
            cy.get('.productcart').eq(index).click({ force: true })
        }
    })
})

Cypress.Commands.add(
    'webdriveruni_ContactUs',
    (firstName, lastName, email, comment, $selector, textToLocate) => {
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[placeholder="Last Name"]').type(lastName)
        cy.get('[placeholder="Email Address"]').type(email)
        cy.get('[placeholder="Comments"]').type(comment)
        cy.get('form').submit()
        cy.get($selector).contains(textToLocate)
    }
)
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
