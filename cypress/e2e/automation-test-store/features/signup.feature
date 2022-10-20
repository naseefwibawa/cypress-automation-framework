Feature: Sign up into Automation store

    Scenario: Success Sign up into Automation store
        Given I access the Automation store portal page
        When I click on register account
        And I enter the first name in create account with Bonanza
        And I enter the last name in create account with kameo
        And I enter the email in create account with test1@example.com
        And I enter the address in create account with 'Pesona Mentari'
        And I enter the city in create account with manchester
        And I select the region of state in create account with Durham
        And I enter the ZIP code in create account with 55534
        And I select the country in create account with Turkey
        And I enter the login name in create account with poyoyo
        And I enter the password in create account with poyoyo
        And I enter the password confirmation in create account with poyoyo
        And I have checked on the Privacy Policy
        And I click on continue button to register the account
        Then I should be successfully sign up into the Automation store
