/// <reference types="Cypress"/>

describe('checkboxes', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons')
            .invoke('removeAttr', 'target')
            .click({ force: true })
    })

    it('handle the checkboxes', () => {
        cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(2).uncheck().should('not.be.checked')
    })
})
