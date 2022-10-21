Feature: Adding Item to the cart

    As a user , I should be able to add item into the cart

    Scenario: Adding Item from search function
       Given I login with valid credential with username test_poy and password poyoyo
       When I search the item by keyword of Delicate
       Then I should be able to see the result of the search