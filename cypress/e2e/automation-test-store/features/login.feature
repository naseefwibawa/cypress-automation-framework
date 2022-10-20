Feature: Login into Automation store

    # Scenario: Valid Login to Automation store
    #     Given I access the Automation login portal page
    #     When I enter the login name with test_poy
    #     And I enter the password with poyoyo
    #     And I click on the orange login button
    #     Then I should be redirected to the my account page

    # Scenario: Invalid Login to automation store
    #     Given I access the Automation login portal page
    #     When I enter the login name with bbbb
    #     And I enter the password with bbbb
    #     And I click on the orange login button
    #     Then I should be redirected to the my account page

    Scenario Outline: Test login into Automation store
        Given I access the Automation login portal page
        When I enter the login name with <loginName>
        And I enter the password with <loginPassword>
        And I click on the orange login button
        Then I should be redirected to the my account page

        Examples:
            | loginName | loginPassword |
            | test_poy  | poyoyo  |
            | bbbb  | bbbbb  |
            | test1_poy  | poyoyo  |
            | aaaa | aaaa  |