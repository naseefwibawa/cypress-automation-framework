/// <reference types="Cypress"/>

describe('dropdown', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
    })

    it('handle the dropdown element using select method', () => {
        cy.get('#dropdown-checkboxes-radiobuttons')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#dropdowm-menu-1').select('Python').should('contain', 'Python')
        cy.get('#dropdowm-menu-2').select('Maven').should('contain', 'Maven')
        cy.get('#dropdowm-menu-3')
            .select('JavaScript')
            .should('contain', 'JavaScript')
    })
})
