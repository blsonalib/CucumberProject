$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookLogin.feature");
formatter.feature({
  "line": 1,
  "name": "FacebookLogin feature",
  "description": "Description : This feature login functionality",
  "id": "facebooklogin-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Example Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Login with valid user credensials"
    },
    {
      "line": 6,
      "value": "#Given open the browser"
    },
    {
      "line": 7,
      "value": "#When Enter the given url \"https://www.facebook.com/\""
    },
    {
      "line": 8,
      "value": "#And Enter the valid \"priyamital05@gmail.com\" and \"sonabankar19\""
    },
    {
      "line": 9,
      "value": "#And click on login button"
    },
    {
      "line": 10,
      "value": "#Then Facebook login page must be open"
    },
    {
      "line": 13,
      "value": "#without Example Keyword"
    }
  ],
  "line": 15,
  "name": "Login with valid user credensials",
  "description": "",
  "id": "facebooklogin-feature;login-with-valid-user-credensials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter the given url \"https://www.facebook.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Facebook login page must be open",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "facebooklogin-feature;login-with-valid-user-credensials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "facebooklogin-feature;login-with-valid-user-credensials;;1"
    },
    {
      "cells": [
        "priyamital@gmail.com",
        "sonabankar19"
      ],
      "line": 25,
      "id": "facebooklogin-feature;login-with-valid-user-credensials;;2"
    },
    {
      "cells": [
        "sonabankar05@gmail.com",
        "sona123356"
      ],
      "line": 26,
      "id": "facebooklogin-feature;login-with-valid-user-credensials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Login with valid user credensials",
  "description": "",
  "id": "facebooklogin-feature;login-with-valid-user-credensials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter the given url \"https://www.facebook.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the valid \"priyamital@gmail.com\" and \"sonabankar19\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Facebook login page must be open",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLogin.open_the_browser()"
});
formatter.result({
  "duration": 9949325800,
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
  "duration": 5148478300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priyamital@gmail.com",
      "offset": 17
    },
    {
      "val": "sonabankar19",
      "offset": 44
    }
  ],
  "location": "FacebookLogin.enter_the_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 304779300,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.click_on_login_button()"
});
formatter.result({
  "duration": 13968271200,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.facebook_login_page_must_be_open()"
});
formatter.result({
  "duration": 20142600,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.close_the_browser()"
});
formatter.result({
  "duration": 10618460200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with valid user credensials",
  "description": "",
  "id": "facebooklogin-feature;login-with-valid-user-credensials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter the given url \"https://www.facebook.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the valid \"sonabankar05@gmail.com\" and \"sona123356\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Facebook login page must be open",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLogin.open_the_browser()"
});
formatter.result({
  "duration": 7953499400,
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
  "duration": 4888955700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sonabankar05@gmail.com",
      "offset": 17
    },
    {
      "val": "sona123356",
      "offset": 46
    }
  ],
  "location": "FacebookLogin.enter_the_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 425695700,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.click_on_login_button()"
});
formatter.result({
  "duration": 4231103400,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.facebook_login_page_must_be_open()"
});
formatter.result({
  "duration": 15550900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Facebook\u003e but was:\u003c[Log in to Facebook | ]Facebook\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefination.FacebookLogin.facebook_login_page_must_be_open(FacebookLogin.java:40)\r\n\tat ✽.Then Facebook login page must be open(FacebookLogin.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FacebookLogin.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});