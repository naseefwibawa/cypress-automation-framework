Feature: Adding Item to the cart

    As a user , I should be able to add item into the cart

    Scenario: Adding Make up Item
       Given I login with valid credential with username test_poy and password poyoyo
       When I navigate to the Make up page
       And I add any item to the cart with key word Viva
       Then in checkout page the item should be presented with item that I selected