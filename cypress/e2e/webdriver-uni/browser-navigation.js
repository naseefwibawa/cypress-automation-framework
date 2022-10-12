/// <reference types="Cypress"/>

describe('Validate webdriveruni homepage links', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
    })

    it('Confirm link redirect to the correct pages', () => {
        // work around if the web is open up a new tab since cypress doesn't support the multiple browser
        // using invoke('removeAttr')
        cy.get('#contact-us')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.url().should('include', 'contactus')

        //back forward and refresh browser navigation using cy.go
        cy.go('back')
        cy.reload()
        // cy.reload(true) // reload the browser without the cache

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get('#to-do-list')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    })
})
