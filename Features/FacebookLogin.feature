Feature: FacebookLogin feature
Description : This feature login functionality
Scenario: Login with valid user credensials
Given open the browser
When Enter the given url "https://www.facebook.com/"
And Enter the valid username and password
And click on login button
Then Facebook login page must be open





