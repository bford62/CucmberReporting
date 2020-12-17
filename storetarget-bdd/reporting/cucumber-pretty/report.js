$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12570502958,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 8,
  "name": "user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "there should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1916025701,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 366875006,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 2752634,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 125368453,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 32039,
  "status": "passed"
});
formatter.after({
  "duration": 182574750,
  "status": "passed"
});
formatter.before({
  "duration": 7753380888,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "There should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 1975285563,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 421958325,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 171898120,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 431075619,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 23551,
  "status": "passed"
});
formatter.after({
  "duration": 173424038,
  "status": "passed"
});
formatter.uri("notlogin.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6969224875,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "attempt to login with no password",
  "description": "",
  "id": "login-feature;attempt-to-login-with-no-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "users enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "users does not enter input in password field",
  "keyword": "But "
});
formatter.step({
  "line": 8,
  "name": "users clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "theres should be an error stating user should enter password",
  "keyword": "And "
});
formatter.match({
  "location": "NotLoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 2195740990,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 276389081,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_does_not_enter_input_in_password_field()"
});
formatter.result({
  "duration": 52600,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 118192824,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_stating_user_should_enter_password()"
});
formatter.result({
  "duration": 32798,
  "status": "passed"
});
formatter.after({
  "duration": 174760617,
  "status": "passed"
});
formatter.before({
  "duration": 7055179020,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "users enters incorrect email",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "users signs enter incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "users clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Theres should be an error, and user should not be granted access",
  "keyword": "And "
});
formatter.match({
  "location": "NotLoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 2565445816,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_enters_incorrect_email()"
});
formatter.result({
  "duration": 262360701,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_signs_enter_incorrect_password()"
});
formatter.result({
  "duration": 153633595,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 475476770,
  "status": "passed"
});
formatter.match({
  "location": "NotLoginSteps.there_should_be_an_error_and_user_should_not_be_granted_access()"
});
formatter.result({
  "duration": 24404,
  "status": "passed"
});
formatter.after({
  "duration": 180331024,
  "status": "passed"
});
});