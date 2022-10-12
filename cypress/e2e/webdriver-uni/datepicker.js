/// <reference types="Cypress"/>

describe('datepicker', () => {
    beforeEach('Visit the web', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#datepicker')
            .invoke('removeAttr', 'target')
            .click({ force: true })
    })

    it('verify the datepicker', () => {
        cy.get('#datepicker').click()
        let date = new Date()
        // // get the current day with this code
        // date.setDate(date.getDate())
        // cy.log(date.getDate())

        // // get the current day + 5 days
        // date.setDate(date.getDate() + 5)
        // cy.log(date.getDate())
        date.setDate(date.getDate() + 12)

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleString('default', { month: 'long' })
        let futureDay = date.getDate()

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown')
                .find('.datepicker-switch')
                .first()
                .then(currentDate => {
                    if (!currentDate.text().includes(futureYear)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
                .then(() => {
                    cy.get('.datepicker-dropdown')
                        .find('.datepicker-switch')
                        .first()
                        .then(currentDate => {
                            if (!currentDate.text().includes(futureMonth)) {
                                cy.get('.next').first().click()
                                selectMonthAndYear()
                            }
                        })
                })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()
    })
})
