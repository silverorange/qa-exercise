## Integration Tests Setup and Installation
- run `yarn install` from the root will add cypress and cypress testing library as `devDependencies`

## Running the Tests
1. use `yarn start` to launch the app
1. run `npx cypress open` from the root to open the test runner
1. select `list.js` to run the test

## Devving the Tests
- tests live in `/integration/`
- commands live in `cypress/support/commands.js`
- full cypress documentation can be found at https://docs.cypress.io/ 
- test library documentation can be found at https://github.com/kentcdodds/cypress-testing-library

## Test Document

### Scope notes:
- list is not saved so there is no need to test save state
- list can not be re-ordered

### Set up:
- `yarn start` in the root folder
- navigate to `http://localhost:3000/` in your browser window

### Defaut elements present:
Purpose: ensure that the app visually reflects provided documentation by including all the necessary elements and defaults.
1. ensure the "Items" title is present 
1. ensure the default list is present 
	- list items contain the correct text
	- list items contain a `Remove` button
1. ensure the form field `Title` is present
1. ensure validation tip is present
1. ensure `Add Item` button is present

Expected Result: all items are present and visible on the screen

### Add an item:
Purpose: ensure that the user can add an item to the list
1. select the `Title` text field
1. enter valid text into the field
1. press `Add Item` button

Expected Result: your text item is added to the bottom of the list, is styled to match, has an associated `Remove` button

### Remove an item:
Purpose: ensure that the user can remove an item from the list
1. press the `Remove` button next to any list item

Expected Result: the item is removed from the list

### Validation - too few characters
Purpose: ensure that the user can't create a list item if the text is shorter than 10 characters
1. select the `Title` text field
1. enter a text string shorter than 10 characters into the field
1. press `Add Item` button

Expected Result: your text item is not added, and an error message appears, "Title must be at least 10 characters."

### Validation - too many characters
Purpose: ensure that the user can't create a list item if the text is longer than 20 characters
1. select the `Title` text field
1. enter a text string longer than 20 characters into the field
1. press `Add Item` button

Expected Result: your text item is not added, and an error message appears, "Title can be at most 20 characters."