///<reference types ="Cypress"/>

describe('Hotel page test', () => {
  const hotel_page = ('https://www.accesstravel.com/en-US/Hotel/List')
  const CheckIn = ('[name ="Filter.CheckIn"]')
  const search_button = ('.form-centered > .btn')
  before(() => {
    cy.visit(hotel_page)
  })

})

it('Verify Destination box', () => {
  cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
  cy.get('#Filter_DestinationId').should("be.visible")

})

it('Should display Jerusalem and a search in this city is working ', () => {
  cy.get('#Filter_DestinationId').should('contain', 'Jerusalem');
  cy.get('#Filter_DestinationId').select('Jerusalem')
  cy.get('[name ="Filter.CheckIn"]').should("be.visible")
  cy.get('[name ="Filter.CheckIn"]').clear().type("2023-11-11")
  cy.get('[name ="Filter.CheckOut"]').should("be.visible")
  cy.get('[name ="Filter.CheckOut"]').clear().type("2023-11-30")
  cy.get('.form-centered > .btn').click()
  cy.go('back')

})


it('Should display London a search in this city is working', () => {
  cy.get('#Filter_DestinationId').should('contain', 'London');
  cy.get('#Filter_DestinationId').select('London')
  cy.get('[name ="Filter.CheckIn"]').should("be.visible")
  cy.get('[name ="Filter.CheckIn"]').clear().type("2023-12-30")
  cy.get('[name ="Filter.CheckOut"]').should("be.visible")
  cy.get('[name ="Filter.CheckOut"]').clear().type("2024-01-30")
  cy.get('.form-centered > .btn').click()
  cy.go('back')


})

it('Should display New York a search in this city is working', () => {
  cy.get('#Filter_DestinationId').should('contain', 'New York');
  cy.get('#Filter_DestinationId').select('New York')
  cy.get('[name ="Filter.CheckIn"]').should("be.visible")
  cy.get('[name ="Filter.CheckIn"]').clear().type("2024-12-30")
  cy.get('[name ="Filter.CheckOut"]').should("be.visible")
  cy.get('[name ="Filter.CheckOut"]').clear().type("2025-01-30")
  cy.get('.form-centered > .btn').click()
  cy.go('back')





})







