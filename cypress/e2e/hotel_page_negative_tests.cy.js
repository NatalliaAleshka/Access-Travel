///<reference types ="Cypress"/>
describe('Negative tests: Adults, Childrens and Dates with invalid numbers', () => {
    const hotel_page = ('https://www.accesstravel.com/en-US/Hotel/List')
    
    before(() => {
      cy.visit(hotel_page)
    })
})

it('Verify Destination box', () => {
  cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
  cy.get('#Filter_DestinationId').should("be.visible")

})

it('Invalid Adult value ', () => {
  cy.get('#Filter_DestinationId').should('contain', 'Jerusalem');
  cy.get('#Filter_DestinationId').select('Jerusalem')
  cy.get('[name ="Filter.CheckIn"]').should("be.visible")
  cy.get('[name ="Filter.CheckIn"]').clear().type("2023-11-11")
  cy.get('[name ="Filter.CheckOut"]').should("be.visible")
  cy.get('[name ="Filter.CheckOut"]').clear().type("2023-11-30")
  cy.get('#Filter_AdultNum').should("be.visible").clear().type(-6)
  cy.get('.form-centered > .btn').click()
})

  it('Invalid Dates ', () => {
    cy.get('#Filter_DestinationId').should('contain', 'London');
    cy.get('#Filter_DestinationId').select('London')
    cy.get('[name ="Filter.CheckIn"]').should("be.visible")
    cy.get('[name ="Filter.CheckIn"]').clear().type("2022-11-11")
    cy.get('[name ="Filter.CheckOut"]').should("be.visible")
    cy.get('[name ="Filter.CheckOut"]').clear().type("2019-11-30")
    cy.get('#Filter_AdultNum').should("be.visible").clear().type(10)
    cy.get('.form-centered > .btn').click()

})
 
  it('Invalid number of childrens ', () => {
    cy.get('#Filter_DestinationId').should('contain', 'Jerusalem');
    cy.get('#Filter_DestinationId').select('Jerusalem')
    cy.get('[name ="Filter.CheckIn"]').should("be.visible")
    cy.get('[name ="Filter.CheckIn"]').clear().type("2023-09-20")
    cy.get('[name ="Filter.CheckOut"]').should("be.visible")
    cy.get('[name ="Filter.CheckOut"]').clear().type("2023-09-30")
    cy.get('#Filter_AdultNum').should("be.visible").clear().type(10)
    cy.get('#Filter_ChildrenNum').should("be.visible").clear().type(-876)
    cy.get('.form-centered > .btn').click()

})
 
it('Special characters tests ', () => {
  cy.get('#Filter_DestinationId').should('contain', 'Jerusalem');
  cy.get('#Filter_DestinationId').select('Jerusalem')
  cy.get('[name ="Filter.CheckIn"]').should("be.visible")
  cy.get('[name ="Filter.CheckIn"]').clear().type("@&*")
  cy.get('[name ="Filter.CheckOut"]').should("be.visible")
  cy.get('[name ="Filter.CheckOut"]').clear().type("%$|")
  cy.get('#Filter_AdultNum').should("be.visible").clear().type("|&^")
  cy.get('#Filter_ChildrenNum').should("be.visible").clear().type("%>!@#")
  cy.get('.form-centered > .btn').click()









  })