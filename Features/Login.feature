Feature: Login
@Sanity
Scenario: successfully login with valid cedentials
Given User launch the Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enter Email as "admin@yourstore.com" and password as "admin"
And Click on Login
Then Page title should be "Dashboard / nopCommerce administration"
When User click on logout
Then Page title should be "Your store. Login"
And Close the browser

@regression
Scenario Outline: Login with Data driven
Given User launch the Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enter Email as "<Email>" and password as "<password>"
And Click on Login
Then Page title should be "Dashboard / nopCommerce administration"
When User click on logout
Then Page title should be "Your store. Login"
And Close the browser
Examples:
|Email|password|
|admin@yourstore.com|admin|
|asd@yourstore.com|admin|