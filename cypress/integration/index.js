
var validItemTitle = 'a-ha - "Take On Me"'
var shortItemTitle = 'Short'
var longItemTitle = 'Billie Eilish - "You Should See Me In A Crown"'

beforeEach(function() {
 	cy.visit('')
 }),

describe('List app', function() {
  it('contains expected default elements', function() {
    cy.getByText('Items').should('exist')

    cy.getByText('Wac, ft. Valeria - “Tortoise”').should('exist')
    cy.getByText('Kishi Bashi - “The Ballad of Mr Steak”')
    	.should('exist')
    cy.getByText('Lucy Dacus - “Night Shift”').should('exist')
    cy.getByText('Shamir - “Larry Clark”').should('exist')
    cy.getByText('Moloko - “Over & Over”').should('exist')
    cy.getByText('Shugo Tokumaru - “Lita-Ruta”').should('exist')
    cy.getByText('Remove').should('exist')

    cy.getByText('Title:').should('exist')
    cy.getByText('(between 10 and 20 characters)')
    	.should('exist')
    cy.get('input#title').should('exist')
    cy.getByText('Add Item').should('exist')
  })

  it('allows user to add an item', function() {
    cy.get('input#title')
    	.clear()
    	.type(validItemTitle)
    cy.getByText('Add Item').click()
    cy.getByText(validItemTitle).should('exist')
  })

  it('allows user to remove an item', function() {
     cy.getByText('Wac, ft. Valeria - “Tortoise”')
    	.parent('div')
    	.find('button').click()
    cy.get('div')
    	.contains('Wac, ft. Valeria - “Tortoise”')
    	.should('not.exist')
  })

  it('validates for items under 10 characters', function() {
     cy.get('input#title')
    	.clear()
    	.type(shortItemTitle)
    cy.getByText('Add Item').click()
    cy.getByText('Title must be at least 10 characters.').should('exist')
  })

  it('validates for items over 20 characters', function() {
    cy.get('input#title')
    	.clear()
    	.type(longItemTitle)
    cy.getByText('Add Item').click()
    cy.getByText('Title can be at most 20 characters.').should('exist')
  })

});
