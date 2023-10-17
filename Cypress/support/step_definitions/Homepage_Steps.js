import {Given, When} from "@badeball/cypress-cucumber-preprocessor"



Given("I navigate to the webdriveruniversity homepage",function(){
    cy.visit('https://www.webdriveruniversity.com/')
})

When("I click on the contact us button",function(){
    cy.get("#contact-us").invoke('removeAttr','target').click()
})

When('I click on the Login Portal button',()=>{
    cy.get('#login-portal').invoke('removeAttr','target').click()
})