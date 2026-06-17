Feature: SauceDemo Cart Functionality

Scenario: Add product to cart

Given User opens SauceDemo website
When User logs in with valid credentials
And User adds a product to cart
Then Cart badge should show 1
When User opens cart
Then Product should be displayed in cart