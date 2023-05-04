///<reference types ="Cypress"/>
describe('Hotel page test', () => {
  const hotel_page = ('https://www.accesstravel.com/en-US/Hotel/List')
  const CheckIn = ('[name ="Filter.CheckIn"]');
  const CheckOut = ('[name ="Filter.CheckOut"]');
  const Adults = ('#Filter_AdultNum');
  const Search_button = ('.form-centered > .btn');
  const Destination_box = ('#Filter_DestinationId');
  const Childrens = ('#Filter_ChildrenNum');



  beforeEach(() => {
    cy.visit(hotel_page)
  })

  it('Verify Destination box', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(Destination_box).should("be.visible")
  })

  it('Invalid Adult value ', () => {
    cy.get('#Filter_DestinationId').should('contain', 'Jerusalem');
    cy.get('#Filter_DestinationId').select('Jerusalem')
    cy.get(CheckIn).should("be.visible")
    cy.get(CheckIn).clear().type("2023-11-11")
    cy.get(CheckOut).clear().type("2023-11-30")
    cy.get(Adults).should("be.visible").clear().type(-6)
    cy.get(Search_button).click()
  })

  it('Invalid Dates ', () => {
    cy.get(Destination_box).should('contain', 'London');
    cy.get(Destination_box).select('London')
    cy.get(CheckIn).should("be.visible")
    cy.get(CheckIn).clear().type("2022-11-11")
    cy.get(CheckOut).clear().type("2019-11-30")
    cy.get(Adults).should("be.visible").clear().type(10)
    cy.get(Search_button).click()

  })

  it('Invalid number of childrens ', () => {
    cy.get(Destination_box).should('contain', 'Jerusalem');
    cy.get(Destination_box).select('Jerusalem')
    cy.get(CheckIn).should("be.visible")
    cy.get(CheckIn).clear().type("2023-09-20")
    cy.get(CheckOut).clear().type("2023-09-30")
    cy.get(Adults).should("be.visible").clear().type(10)
    cy.get(Childrens).should("be.visible").clear().type(-876)
    cy.get(Search_button).click()

  })

  it('Special characters tests ', () => {
    cy.get(Destination_box).should('contain', 'Jerusalem');
    cy.get(Destination_box).select('Jerusalem')
    cy.get(CheckIn).should("be.visible")
    cy.get(CheckIn).clear().type("@&*")
    cy.get(CheckOut).clear().type("%$|")
    cy.get(Adults).should("be.visible").clear().type("|&^")
    cy.get(Childrens).should("be.visible").clear().type("%>!@#")
    cy.get(Search_button).click()



  })

})