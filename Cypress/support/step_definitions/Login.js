import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When('I type a username {string}',(username)=>{
   cy.get('#text').type(username); 
})

When('I type a password {string}',password=>{
    cy.get('#password').type(password);
})

Then ('I clicked on a Login button and I should be presented with validation message {string}',(message)=>{
    cy.on ('window:alert',(str)=>{
        expect(str).to.equal(message)
    } ) 
    cy.get('#login-button').click();
})