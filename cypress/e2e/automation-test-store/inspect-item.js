/// <reference types="Cypress" />

describe('Inspect Automation test store items', () => {
    beforeEach('visit the web', () => {
        cy.visit('/')
    })

    it('Click on the first item using item header', () => {
        cy.get('#featured .prdocutname').eq(0).click()
    })
})
