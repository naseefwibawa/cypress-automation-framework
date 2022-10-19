Feature: Webdriver University Contact Us

    Scenario: Submit the valid contact us
        Given I access the contact us portal page
        When I enter the first name bonanza
        And I enter the last name meloto
        And I enter the email address Poy@example.com
        And I enter the comments 'This is sparta'
        And I click on the submit button
        Then I should be presented with the 'Thank you for your message'