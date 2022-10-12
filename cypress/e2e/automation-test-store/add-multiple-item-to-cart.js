/// <reference types="Cypress"/>

describe('add multiple item to the cart', () => {
    before('product', () => {
        cy.fixture('product').then(data => {
            globalThis.data = data
        })
    })

    beforeEach('visit the web', () => {
        cy.visit('/')
        cy.get('.subnav li').contains('Skincare').click()
    })

    it('add skincare product to cart', () => {
        globalThis.data.productName.forEach(element => {
            cy.addProductToCart(element)
        })
        cy.get('.topcart .dropdown-toggle').click()
    })
})
