# silverorange Quality Assurance Exercise

This exercise is designed to assess how you approach tasks required in your QA
position. We are interested to see how you work as well, as what your final
results are, so please include documentation.

For the test automations, please commit tests inside a git repository and
provide access to silverorange.

## The Application

This code repository contains a sample application that needs to be tested. The
application allows adding and removing items from a list. The application is
simple and not connected to a database, so reloading the page will clear the
application state.

The tests we are looking for, and instructions on how to run the application
are detailed below.

## Exercise Requirements

With the provided React application, perform the following:

1. Write a test document for testing adding a new item to the list. Include
   testing error states. This document should be possible to follow to do a
   manual test.
2. Using any framework or language of your choosing, write an automated version
   of the test. Include instructions on how we can install and run the
   framework.
3. Add an additional automated test for removing items.
4. The application has some simple validation functions in `src/validations`.
   Using the built-in test framework, add unit tests for these functions. See
   `src/components/Form.js` for an example of how to import and use the
   validation functions.

## Running the Application

This is a [create-react-app](https://facebook.github.io/create-react-app/)
bootstrapped React application. To run the application on your machine,
you will need:

- Node JS 8 or 10 https://nodejs.org/en/
- Yarn https://yarnpkg.com/en/

With those pre-requisites installed, follow these steps to run the application:

1.  Clone the git repository to your machine
2.  Inside the repository, run `yarn install`
3.  Inside the repository, run `yarn start`

This will open the application in your default web browser at
http://localhost:3000.

## Running the Test Framework

Create-react-app integrates [Jest](https://jestjs.io/) by default. Files
named `*.test.js` are automatically included in the test suite. The test suite
can be run with:

```sh
yarn test
```
