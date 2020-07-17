$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookLogin.feature");
formatter.feature({
  "line": 1,
  "name": "FacebookLogin feature",
  "description": "Description : This feature login functionality",
  "id": "facebooklogin-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid user credensials",
  "description": "",
  "id": "facebooklogin-feature;login-with-valid-user-credensials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the given url \"https://www.facebook.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the valid \"priyamital05@gmail.com\" and \"sonabankar19\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Facebook login page must be open",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLogin.open_the_browser()"
});
formatter.result({
  "duration": 13934703300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 21
    }
  ],
  "location": "FacebookLogin.enter_the_given_url(String)"
});
formatter.result({
  "duration": 8391791400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyamital05@gmail.com",
      "offset": 17
    },
    {
      "val": "sonabankar19",
      "offset": 46
    }
  ],
  "location": "FacebookLogin.enter_the_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 277429700,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.click_on_login_button()"
});
formatter.result({
  "duration": 13691670800,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.facebook_login_page_must_be_open()"
});
formatter.result({
  "duration": 71234200,
  "status": "passed"
});
});