/// <reference types="Cypress"/>

describe('data table', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#data-table')
            .invoke('removeAttr', 'target')
            .click({ force: true })
    })

    it('calculate total age of user', () => {
        let userDetails = []
        let num = 0

        cy.get('#t01 tr td')
            .each((element, index, list) => {
                userDetails[index] = element.text()
            })
            .then(() => {
                let i
                for (i = 0; i < userDetails.length; i++) {
                    if (Number(userDetails[i])) {
                        num += Number(userDetails[i])
                    }

                    // cy.log(userDetails[i])
                }
                cy.log(' Total age in table 1 is ' + num)
                expect(num).to.equal(159)
            })
    })

    it.only('Calculate the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(
            (lastName, index, list) => {
                const text = lastName.text()
                if (text.includes('Woods')) {
                    cy.get('#thumbnail-1 tr td:nth-child(2)')
                        .eq(index)
                        .next()
                        .then(age => {
                            const userAge = age.text()
                            expect(userAge).to.equal('80')
                        })
                }
            }
        )
    })
})
