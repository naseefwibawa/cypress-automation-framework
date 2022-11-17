export class navigationAuto {
    navigateMakeup() {
        cy.visit('/')
        cy.get('.subnav li').contains('Makeup').click()
    }

    navigateSkinCare() {
        cy.visit('/')
        cy.get('.subnav li').contains('Skincare').click()
    }

    navigateFragrance() {
        cy.visit('/')
        cy.get('.subnav li').contains('Fragrance').click()
    }

    navigateMen() {
        cy.visit('/')
        cy.get('.subnav li').contains('Men').click()
    }

    navigateHairCare() {
        cy.visit('/')
        cy.get('.subnav li').contains('Hair Care').click()
    }

    navigateBooks() {
        cy.visit('/')
        cy.get('.subnav li').contains('Books').click()
    }
}

export const navigateTo = new navigationAuto()
