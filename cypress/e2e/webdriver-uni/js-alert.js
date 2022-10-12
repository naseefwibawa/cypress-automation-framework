/// <reference types="Cypress" />

describe(' Handle js alert', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
    })

    it('Confirm js alert contain the correct text', () => {
        cy.get('#popup-alerts')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#button1').click()

        cy.on('window:alert', str => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it('Confirm js alert contain the correct text by clicking OK', () => {
        cy.get('#popup-alerts')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#button4').click()

        cy.on('window:alert', str => {
            expect(str).to.equal('Press a button!')
        })
        cy.get('#confirm-alert-text').should('contain', 'You pressed OK!')
    })

    it('Confirm js alert contain the correct text by clicking cancel', () => {
        cy.get('#popup-alerts')
            .invoke('removeAttr', 'target')
            .click({ force: true })

        cy.get('#button4').click()
        cy.on('window:confirm', () => false)
        cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!')
    })

    it('Validate js alert using a stub', () => {
        cy.get('#popup-alerts')
            .invoke('removeAttr', 'target')
            .click({ force: true })

        const stub = cy.stub()

        cy.on('window:confirm', stub)
        cy.get('#button4')
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Press a button!')
            })
            .then(() => true)
            .then(() => {
                cy.get('#confirm-alert-text').should(
                    'contain',
                    'You pressed OK!'
                )
            })
    })
})
