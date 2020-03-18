Feature: Customers

Background: Below are the common steps
Given User launch the Chrome browser
When User opens URL "https://admin-demo.nopcommerce.com/login"
And User enter Email as "admin@yourstore.com" and password as "admin"
And Click on Login
Then User can see the dashboard
@Sanity
Scenario: Add New Customers
When User clicked on Customers menu
And Clicked on the customer Item
And Click on Add new button
Then User can view add new customer page
When User add customer info
When Clicked on Save button
Then User can view confirmation message "The new customer has been added successfully!"
And Close the browser
@regression
Scenario: Search customer by email
When User click on customer menu
And User click on cutomer item
And User enter the customer email id
When Click on Search button
Then User will get the email id in the search table
Then Close the browser

@regression
Scenario: Search customer by name
When User click on customer menu
And User click on cutomer item
And User enter the user FirstName
And User enter the user LastName
When Click on search button
Then User will get the Name in search table
Then Close the browser

