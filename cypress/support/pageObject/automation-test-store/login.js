export class loginAutoStore {
    loginAutoStore(loginName, loginPassword) {
        cy.visit('https://automationteststore.com/index.php?rt=account/account')
        cy.get('#loginFrm_loginname').type(loginName)
        cy.get('#loginFrm_password').type(loginPassword)
        cy.get('[type="submit"]').contains('Login').click()
        cy.url().should('contain', '/account')
    }
}

export const loginTo = new loginAutoStore()
