export class homepage {
    visitHomepage() {
        cy.visit('http://www.webdriveruniversity.com')
    }
}
export const homepage_PO = new homepage()
