/// <reference types="Cypress"/>

describe('radio button', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
    })

    it('handle the radio button', () => {
        cy.get('#dropdown-checkboxes-radiobuttons')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#radio-buttons [type="radio"]').then(radiobutton => {
            cy.wrap(radiobutton).eq(0).click().should('be.checked')
            cy.wrap(radiobutton)
                .eq(2)
                .invoke('attr', 'value')
                .should('contain', 'yellow')
            cy.wrap(radiobutton).eq(1).should('not.be.checked')
        })
    })
})
