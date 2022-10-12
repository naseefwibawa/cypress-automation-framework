/// <reference types="Cypress"/>

describe('iterate over element', () => {
    beforeEach('visit the web', () => {
        cy.visit('/')
    })

    it('Log information of all skincare product', () => {
        cy.get('.subnav li').contains('Skincare').click({ force: true })
        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            cy.log('Index: ' + index + ' : ' + $el.text())
        })
    })

    it('Add specific product to add cart', () => {
        cy.get('.subnav li').contains('Skincare').click()
        // cy.get('.fixed_wrapper .prdocutname').each(element => {
        //     if (element.text().includes('Absolue Eye Precious Cells')) {
        //         cy.wrap(element).click()
        //     }
        // })

        cy.selectProduct('Absolue Eye Precious Cells')
    })

    it('Add another specific product to add cart', () => {
        cy.get('.subnav li').contains('Hair Care').click()
        cy.selectProduct('Seaweed Conditioner')
    })

    it.only('Add another specific product to add cart', () => {
        cy.get('.subnav li').contains('Hair Care').click()
        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care')
    })
})
