/// <reference types="Cypress"/>

describe('Alias and invoke', () => {
    beforeEach('visit the web', () => {
        cy.visit('/')
    })

    it('Validate of skincare product', () => {
        cy.get('.subnav li').contains('Skincare').click()
        cy.get('.fixed_wrapper .prdocutname')
            .eq(0)
            .invoke('text')
            .as('productThumbnail')
        cy.get('@productThumbnail').should('contain', 'Flash Bronzer Body Gel')
    })

    it('validate the number displayed and add to cart', () => {
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail')
            .find('.productcart')
            .invoke('attr', 'title')
            .should('contain', 'Add to Cart')
    })

    it('Calculate total of normal and sale product', () => {
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail')
            .find('.pricenew')
            .invoke('text')
            .as('saleItemPrice')

        cy.get('@itemPrice').then(price => {
            let itemPriceTotal = 0
            // split here means remove the $ symbol from price tag
            const itemPrice = price.split('$')
            let i
            // loop for non sale item
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                // number method to make the itemPrice into number
                itemPriceTotal += Number(itemPrice[i])
            }
            cy.log('Non sale item price total :' + itemPriceTotal)
        })

        cy.get('@saleItemPrice').then(price => {
            let saleItemPriceTotal = 0
            // split here means remove the $ symbol from price tag
            const saleItemPrice = price.split('$')
            let i
            // loop for non sale item
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                // number method to make the saleItemPrice into number
                saleItemPriceTotal += Number(saleItemPrice[i])
            }
            cy.log('Sale item price total :' + saleItemPriceTotal)
        })
    })
})
