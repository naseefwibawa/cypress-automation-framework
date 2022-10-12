/// <reference types="Cypress"/>

describe('test mouse action', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
    })

    it('scroll element into view', () => {
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({ force: true })
    })

    it('drag and drop item', () => {
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({ force: true })

        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable')
            .trigger('mousemove')
            .trigger('mouseup', { force: true })
    })

    it('perform double mouse click', () => {
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({ force: true })

        cy.get('#double-click').dblclick()
        cy.get('#double-click').should(
            'have.css',
            'background-color',
            'rgb(147, 203, 90)'
        )
    })

    it.only('hold down and release mouse action', () => {
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({ force: true })

        cy.get('#click-box')
            .trigger('mousedown', { which: 1 })
            .then(element => {
                expect(element).to.have.css(
                    'background-color',
                    'rgb(0, 255, 0)'
                )
            })
    })
})
