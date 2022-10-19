import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I access the Automation store portal page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/create')
})

When('I click on register account', () => {})

And('I enter the first name in create account with {word}', firstName => {
    cy.get('#AccountFrm_firstname').type(firstName)
})

And('I enter the last name in create account with {word}', lastName => {
    cy.get('#AccountFrm_lastname').type(lastName)
})

And('I enter the email in create account with {word}', email => {
    cy.get('#AccountFrm_email').type(email)
})

And('I enter the address in create account with {string}', address => {
    cy.get('#AccountFrm_address_1').type(address)
})

And('I enter the city in create account with {word}', city => {
    cy.get('#AccountFrm_city').type(city)
})

And(
    'I select the region of state in create account with {word}',
    regionState => {
        cy.get('#AccountFrm_zone_id').select(regionState)
    }
)

And('I enter the ZIP code in create account with {int}', zipCode => {
    cy.get('#AccountFrm_postcode').type(zipCode)
})

And('I select the country in create account with {word}', country => {
    cy.get('#AccountFrm_country_id').select(country)
})

And('I enter the login name in create account with {word}', loginName => {
    cy.get('#AccountFrm_loginname').type(loginName)
})

And('I enter the password in create account with {word}', password => {
    cy.get('#AccountFrm_password').type(password)
})

And(
    'I enter the password confirmation in create account with {word}',
    confirmPassword => {
        cy.get('#AccountFrm_confirm').type(confirmPassword)
    }
)

And('I click on continue button to register the account', () => {
    cy.get('[type="submit"]').contains('Continue').click()
})

And('I have checked on the Privacy Policy', () => {
    cy.get('#AccountFrm_agree').check({ force: true })
})

Then('I should be successfully sign up into the Automation store', () => {
    cy.url().should('contain', 'success')
    cy.get('.heading1').should('contain', 'Your Account Has Been Created!')
})
