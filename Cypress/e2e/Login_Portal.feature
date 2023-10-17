Feature: WebdriverUniversity - Login Page
    Background: Navigate to Login-Portal
        Given I navigate to the webdriveruniversity homepage
        And I click on the Login Portal button
@smoke
    Scenario Outline: Validate Login
        When I type a username '<Username>'
        And I type a password '<Password>'
        Then I clicked on a Login button and I should be presented with validation message '<message>'
        Examples:
            | Username  | Password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |

