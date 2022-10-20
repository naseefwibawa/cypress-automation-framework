export class addItemToCart {
    addMakeupItem(productName) {
        cy.get('.subnav li').contains('Makeup').click()
        cy.get('.fixed_wrapper .prdocutname').each((element, index) => {
            if (element.text() === productName) {
                cy.get('.productcart').eq(index).click({ force: true })
            }
        })
    }

    addItemFromSearch(searchProduct) {
        cy.get('#filter_keyword').type(searchProduct).type('{enter}')
        cy.get('.breadcrumb')
            .find('li')
            .eq(1)
            .then(element => {
                cy.log(element.text())
                if (element.text().includes(searchProduct)) {
                    cy.get('.productpagecart').contains('Add to Cart').click()
                    cy.get('tbody tr')
                        .find('td')
                        .eq(1)
                        .then((element, index) => {
                            expect(element.text()).to.include(searchProduct)
                        })
                } else if (element.text().includes('Search')) {
                    cy.get('.contentpanel > :nth-child(4)').should(
                        'contain',
                        'There is no product that matches the search criteria.'
                    )
                }
            })
    }
}

export const addItemAutoStore = new addItemToCart()
