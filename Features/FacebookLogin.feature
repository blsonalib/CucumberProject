Feature: FacebookLogin feature
Description : This feature login functionality
  #without Example Keyword

#Scenario: Login with valid user credensials
#Given open the browser
#When Enter the given url "https://www.facebook.com/"
#And Enter the valid "priyamital05@gmail.com" and "sonabankar19"
#And click on login button
#Then Facebook login page must be open


  #without Example Keyword

  Scenario Outline: Login with valid user credensials
Given open the browser
When Enter the given url "https://www.facebook.com/"
And Enter the valid "<username>" and "<password>"
    And click on login button
    Then Facebook login page must be open
    Then close the browser

    Examples:
      | username               | password   |
      | priyamital@gmail.com   |sonabankar19|
      | sonabankar05@gmail.com | sona123356 |



