/// <reference types="Cypress" />

describe('Contact us from Automation test store', () => {
    beforeEach('Visit', () => {
        cy.fixture('userDetails').as('user')

        cy.visit('/')
    })

    it('Should be able to submit contact us page', () => {
        cy.get('.info_links_footer li').eq(4).click()
        cy.get('@user').then(user => {
            cy.get('[name="first_name"]').type(user.firstName)
            cy.get('#ContactUsFrm_email').type(user.email)
        })

        cy.get('[name="enquiry"]').type('this is enquiry')
        cy.get('[title="Submit"]').click()
        cy.get('.contentpanel').should(
            'contain',
            'Your enquiry has been successfully sent to the store owner!'
        )
    })

    it('Check the name must be between 3 and 32 characters', () => {
        const name1 = 'a'

        cy.get('.info_links_footer li').eq(4).click()
        cy.get('[name="first_name"]').type(name1)
        cy.get('#ContactUsFrm_email').type('aaa@aaa.com')
        cy.get('[name="enquiry"]').type('this is enquiry')
        cy.get('[title="Submit"]').click()
        cy.get('#field_11')
            .find('.element_error')
            .should('contain', 'Name must be between 3 and 32 characters!')
    })

    it('Check if email is invalid', () => {
        const invalidEmail = 'aaa'

        cy.get('.info_links_footer li').eq(4).click()
        cy.get('[name="first_name"]').type('aaaaa')
        cy.get('#ContactUsFrm_email').type(invalidEmail)
        cy.get('[name="enquiry"]').type('this is enquiry')
        cy.get('[title="Submit"]').click()
        cy.get('#field_12')
            .find('.element_error')
            .should('contain', ' E-Mail Address does not appear to be valid!')
    })

    it('Check enquiry must be between 10 and 3000', () => {
        cy.get('.info_links_footer li').eq(4).click()
        cy.get('[name="first_name"]').type('aaa')
        cy.get('#ContactUsFrm_email').type('aaa@aaa.com')
        cy.get('[name="enquiry"]').type('a')
        cy.get('[title="Submit"]').click()
        cy.get('#field_13')
            .find('.element_error')
            .should(
                'contain',
                ' Enquiry must be between 10 and 3000 characters!'
            )
    })

    it('Check reset button function', () => {
        cy.get('.info_links_footer li').eq(4).click()
        cy.get('[name="first_name"]').type('tester')
        cy.get('#ContactUsFrm_email').type('aaa@aaa.com')
        cy.get('[name="enquiry"]').type('this is enquiry')
        cy.get('[type="reset"]').click()
        cy.get('[name="first_name"]').then(name => {
            expect(name).to.be.empty
        })
        cy.get('#ContactUsFrm_email').then(email => {
            expect(email).to.be.empty
        })
        cy.get('[name="enquiry"]').then(enquiry => {
            expect(enquiry).to.be.empty
        })
    })
})
