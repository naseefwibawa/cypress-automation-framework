/// <reference types="Cypress"/>

describe('verify autocomplete dropdown', () => {
    // explicit time out for given test
    Cypress.config('defaultCommandTimeout', 20000)

    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
    })

    it('select specific product via autocomplete list', () => {
        cy.get('#autocomplete-textfield')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#myInput').type('a')

        // create a selector using > * which means that will target everything in the element
        cy.get('#myInputautocomplete-list > *')
            .each((element, index, list) => {
                const product = element.text()
                const productToSelect = 'Asparagus'

                if (product === productToSelect) {
                    cy.wrap(element).click()
                    cy.get('[type="submit"]').click()
                    cy.url().should('include', productToSelect)
                }
            })
            .then(() => {
                cy.get('#myInput').type('g')
                cy.get('#myInputautocomplete-list > *').each(
                    (element, index, list) => {
                        const product = element.text()
                        const productToSelect = 'Grapes'

                        if (product === productToSelect) {
                            cy.wrap(element).click()
                            cy.get('[type="submit"]').click()
                            cy.url().should('include', productToSelect)
                        }
                    }
                )
            })
    })
})
