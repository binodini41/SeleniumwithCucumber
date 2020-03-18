$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Customers.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Below are the common steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_opens_URL_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Customers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User clicked on Customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_clicked_on_Customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicked on the customer Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Clicked_on_the_customer_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Add new button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view add new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_can_view_add_new_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add customer info",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_add_customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicked on Save button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Clicked_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view confirmation message \"The new customer has been added successfully!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_opens_URL_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_click_on_customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on cutomer item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_click_on_cutomer_item()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027KANINI-LTP-85\u0027, ip: \u0027192.168.0.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\windows\\TEMP\\scoped_dir1...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: 3edebc9a548f7f20ad36bae8ad89165e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.AddCustomer.clickCustomerItem(AddCustomer.java:55)\r\n\tat stepDefinations.Steps.User_click_on_cutomer_item(Steps.java:181)\r\n\tat ✽.User click on cutomer item(./Features/Customers.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter the customer email id",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_the_customer_email_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will get the email id in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_will_get_the_email_id_in_the_search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Below are the common steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_opens_URL_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_click_on_customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on cutomer item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_click_on_cutomer_item()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027KANINI-LTP-85\u0027, ip: \u0027192.168.0.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\windows\\TEMP\\scoped_dir3...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: d90e03c494991cb0ec4f7edc8fac9e6e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.AddCustomer.clickCustomerItem(AddCustomer.java:55)\r\n\tat stepDefinations.Steps.User_click_on_cutomer_item(Steps.java:181)\r\n\tat ✽.User click on cutomer item(./Features/Customers.feature:31)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter the user FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_the_user_FirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter the user LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_the_user_LastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will get the Name in search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_will_get_the_Name_in_search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("./Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "successfully login with valid cedentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_opens_URL_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on logout",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_click_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with Data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter Email as \"\u003cEmail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on logout",
  "keyword": "When "
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "asd@yourstore.com",
        "admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with Data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_opens_URL_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on logout",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_click_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.User_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_opens_URL_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Email as \"asd@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.User_enter_Email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinations.Steps.Page_title_should_be(Steps.java:99)\r\n\tat ✽.Page title should be \"Dashboard / nopCommerce administration\"(./Features/Login.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on logout",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.User_click_on_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});