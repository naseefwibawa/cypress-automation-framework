export class addItemToCart {
    searchMakeupItem(productName) {
        cy.get('.subnav li').contains('Makeup').click()
        cy.get('.fixed_wrapper .prdocutname').each((element, index) => {
            if (element.text() === productName) {
                cy.get('.productcart')
                    .eq(index)
                    .should('have.class', 'fa-cart-plus')
            }
        })
    }

    searchItemAuto(searchProduct) {
        cy.get('#filter_keyword').type(searchProduct).type('{enter}')
        cy.get('.breadcrumb')
            .find('li')
            .eq(1)
            .then(element => {
                cy.log(element.text())
                if (element.text().includes(searchProduct)) {
                    cy.get('.productname').then(element => {
                        expect(element.text()).include(searchProduct)
                    })
                } else if (
                    element.text().includes('Search') &&
                    cy.get('.contentpanel').children('.thumbnails')
                ) {
                    cy.get('.fixed_wrapper .prdocutname').each(
                        (element, index) => {
                            expect(element.text()).includes(searchProduct, {
                                matchCase: false,
                            })
                        }
                    )
                } else {
                    cy.get('.contentpanel > :nth-child(4)').should(
                        'contain',
                        'There is no product that matches the search criteria.'
                    )
                }
            })
    }
}

export const addItemAutoStore = new addItemToCart()
