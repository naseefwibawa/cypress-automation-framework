/// <reference types="Cypress" />

import {
    homepage,
    homepage_PO,
} from '../../support/pageObject/webdriveruni/homepage'

describe(' Test the contact us form in webDriverUni', () => {
    beforeEach('Visit the web', () => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.fixture('example').then(data => {
            // this.data = data
            // use this instead if the above code doesn't work
            globalThis.data = data
        })
        // work around if the web is open up a new tab since cypress doesn't support the multiple browser
        // using invoke('removeAttr')
        // cy.visit('http://www.webdriveruniversity.com')
        homepage_PO.visitHomepage()
        cy.get('#contact-us')
            .invoke('removeAttr', 'target')
            .click({ force: true })
    })

    it('Should be able to submit a succresful submission via contact us form', () => {
        // cy.get('[placeholder="First Name"]').type(data.firstName)
        // cy.get('[placeholder="Last Name"]').type(data.lastName)
        // cy.get('[placeholder="Email Address"]').type(data.email)
        // cy.get('[placeholder="Comments"]').type('this is the comment')
        // cy.get('form').submit()
        // cy.get('#contact_reply').should(
        //     'contain',
        //     'Thank You for your Message!'
        // )

        cy.webdriveruni_ContactUs(
            data.firstName,
            data.lastName,
            data.email,
            'this is the comment',
            '#contact_reply',
            'Thank You for your Message!'
        )
    })

    it('Should not be able to submit a succresful submission via contact us form as all fields are required', () => {
        // cy.get('[placeholder="First Name"]').type(data.firstName)
        // cy.get('form').submit()
        // cy.get('body')
        //     .should('contain', 'Error')
        //     .and('contain', 'all fields are required')

        cy.webdriveruni_ContactUs(
            data.firstName,
            data.lastName,
            ' ',
            'this is the comment',
            'body',
            'Error: Invalid email address'
        )
    })

    it('Should return invalid email if not input @xxx.xxx', () => {
        cy.get('[placeholder="First Name"]').type(data.firstName)
        cy.get('[placeholder="Last Name"]').type(data.lastName)
        cy.get('[placeholder="Email Address"]').type('a')
        cy.get('[placeholder="Comments"]').type('a')
        cy.get('form').submit()
        cy.get('body')
            .should('contain', 'Error')
            .and('contain', 'Invalid email address')
    })

    it('Check the content after hit reset button', () => {
        cy.get('[placeholder="First Name"]').type(data.firstName)
        cy.get('[type="reset"]').click()
        cy.get('[placeholder="First Name"]').then(firstName => {
            expect(firstName).to.be.empty
        })
    })
})
