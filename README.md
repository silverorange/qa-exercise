# silverorange QA Developer Exercise

This exercise is designed to assess how you approach tasks required as a QA
developer at silverorange. We are interested to see how you work as well, as
what your final results are; include useful Git commit messages and comments
where you think your code may be unclear.

Please do not include your name or any other self-identifying information in
code or commit messages as silverorange will anonymize your work before
reviewing.

For the test automations, please commit tests inside this Git repository and
provide access to silverorange.

## The Application to Test

This Git repository contains a sample application that needs to be tested. The
application allows adding and removing items from a list. The application is
simple and not connected to a database, so reloading the page will clear the
application state.

The tasks we are asking you to complete, and instructions on how to run the
application are detailed below:

## Tasks

### (A) Writing a Test Plan

- Write a test document to test adding a new item to the list.
- Include testing of error states.
- It should be possible to follow the document to manually test the
  application.

### (B) Automate the Test Plan

- Using any framework or language of your choosing, write an automated version
  of the test plan.
- Include instructions on how we can install and run the automation.
- Add an additional automated test for removing items from the list.

### (C) Unit Testing

- The application has some simple validation functions in `src/validations`.
- Using the built-in test framework, add unit tests for these functions.
- See `src/components/Form.js` for an example of how to import and use the
  validation functions.

## Running the Application

This is a [create-react-app](https://facebook.github.io/create-react-app/)
React application. To run the application on your machine, you will need the
following pre-requisites:

- [Node.js](https://nodejs.org/en/) version 10 or greater
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

If you are using macOS and Homebrew, the following command will install the
pre-requisites:

```sh
brew install node yarn
```

With the pre-requisites installed, follow these steps to run the application:

1.  Clone the Git repository to your machine
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
