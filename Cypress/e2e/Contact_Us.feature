@regression
Feature: WebdriverUniversity - Contact Us Page
    Background: Pre Conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
     @contactUs
    Scenario: Valid contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on sumbmit button
        Then I should be presented with successful contact us submission message


    Scenario: Invalid contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on sumbmit button
        Then I should be presented with Unsuccessful contact us submission message

    Scenario: Valid contact Us Form Submission
        And I type a specific first name "Jack"
        And I type a specific last name "Sparrow"
        And I enter an specific email address "blackpearl@gmail.com"
        And I type a specific comment "Findind the ship named blackpearl" with 187 times
        And I click on sumbmit button
        Then I should be presented with successful contact us submission message

    Scenario Outline: Validate Contact Us page
        And I type a first <firstName> and a last '<lastName>'
        And I enter a '<emailAddress>' and a comment '<comment>'
        When I click on sumbmit button
        Then I should be presented with header text '<message>'
        Examples:
            | firstName | lastName | emailAddress    | comment                           | message                     |
            | Jack      | Sparrow  | jack@gmail.com  | Finding the ship named blackpearl | Thank You for your Message! |
            | Peter     | Parker   | peter@gmail.com | Finding the boat                  | Thank You for your Message! |
            | Jack      | don      | jackdon         | Finding the Plane                 | Invalid email address       |