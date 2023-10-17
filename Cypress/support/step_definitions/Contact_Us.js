import {Then, When} from '@badeball/cypress-cucumber-preprocessor';

When ('I type a first name', () => {
  cy.get ('[name="first_name"]').type ('Peter');
});

When ('I type a last name', () => {
  cy.get ('[name="last_name"]').type ('Parker');
});

When ('I enter an email address', () => {
  cy.get ('[name="email"]').type ('Peter@gmail.com');
});

When ('I type a comment', () => {
  cy
    .get ('[name="message"]')
    .type (
      'I lost my spiderman suite, please help me to get a contact of iron man'
    );
});

When ('I click on sumbmit button', () => {
  cy.get ('[type="submit"]').click ();
});

Then (
  'I should be presented with successful contact us submission message',
  () => {
    cy
      .get ('#contact_reply')
      .invoke ('text')
      .should ('contain', 'Thank You for your Message!');
  }
);

Then (
  'I should be presented with Unsuccessful contact us submission message',
  () => {
    cy.get ('body').should ('contain.text', 'Invalid email address');
  }
);

When ('I type a specific first name {string}', first_name => {
  cy.get ('[name="first_name"]').type (first_name);
});

When ('I type a specific last name {string}', last_name => {
  cy.get ('[name="last_name"]').type (last_name);
});

When ('I enter an specific email address {string}', email => {
  cy.get ('[name="email"]').type (email);
});

When ('I type a specific comment {string} with {int} times', (comment, num) => {
  cy.get ('[name="message"]').type (comment + num);
});

When ('I type a first {word} and a last {string}', (first_name, last_name) => {
  cy.get ('[name="first_name"]').type (first_name);
  cy.get ('[name="last_name"]').type (last_name);
});

When ('I enter a {string} and a comment {string}', (email, comment) => {
  cy.get ('[name="email"]').type (email);
  cy.get ('[name="message"]').type (comment);
});

Then ('I should be presented with header text {string}', message => {
  cy.get ('body').should ('contain.text', message);
});
