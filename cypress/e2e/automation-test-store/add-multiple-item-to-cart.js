/// <reference types="Cypress"/>

import { addItemAutoStore } from '../../support/pageObject/automation-test-store/add-multiple-page'

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

    it.only('Add from search item', () => {
        addItemAutoStore.searchItemAuto('oil')
    })

    it('check no stock product', () => {
        const productName = [
            'Flash Bronzer Body Gel',
            'Absolue Eye Precious Cells',
        ]

        productName.forEach(element => {
            cy.get('.subnav li').contains('Skincare').click()
            cy.get('.fixed_wrapper .prdocutname').contains(element).click()
            cy.get('.productpagecart')
                .find('li')
                .then(($el, $li) => {
                    if ($el.text() === 'Add to Cart') {
                        cy.log($el.text())
                    } else if ($el.text() === 'Call To Order') {
                        cy.log($el.text())
                    } else if ($el.text() === 'Out of Stock') {
                        cy.log($el.text())
                    }
                })
        })
    })
})
