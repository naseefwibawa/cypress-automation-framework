/// <reference types="Cypress"/>

describe('dropdown', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#file-upload')
            .invoke('removeAttr', 'target')
            .click({ force: true })
    })

    it('upload a file', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')
        cy.get('#submit-button').click()
        cy.on('window:alert', str => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    })

    it('upload no file', () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', str => {
            expect(str).to.equal('You need to select a file to upload!')
        })
    })
})
