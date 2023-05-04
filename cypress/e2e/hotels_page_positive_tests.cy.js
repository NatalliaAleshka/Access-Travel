///<reference types ="Cypress"/>

describe('Positive tests: Jerusalem, London, and New York are on the list, and a search in these cities is working', () => {
  const hotel_page = ('https://www.accesstravel.com/en-US/Hotel/List')
  const CheckIn = ('[name ="Filter.CheckIn"]');
  const CheckOut = ('[name ="Filter.CheckOut"]');
  const Search_button = ('.form-centered > .btn');
  const Destination_box = ('#Filter_DestinationId');

  beforeEach(() => {
    cy.visit(hotel_page)
  })

  it('Verify Destination box', () => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get(Destination_box).should("be.visible")

  })

  it('Should display Jerusalem and a search in this city is working ', () => {
    cy.get(Destination_box).should('contain', 'Jerusalem');
    cy.get(Destination_box).select('Jerusalem')
    cy.get(CheckIn).clear().type("2023-11-11")
    cy.get(CheckOut).clear().type("2023-11-30")
    cy.get(Search_button).click()
    cy.get('[class ="product-listing container"]').should("be.visible")

  })


  it('Should display London a search in this city is working', () => {
    cy.get(Destination_box).should('contain', 'London');
    cy.get(Destination_box).select('London')
    cy.get(CheckIn).clear().type("2023-06-30")
    cy.get(CheckOut).clear().type("2023-07-05")
    cy.get(Search_button).click()
    cy.get('[class ="product-listing container"]').should("be.visible")

  })

  it('Should display New York a search in this city is working', () => {
    cy.get(Destination_box).should('contain', 'New York');
    cy.get(Destination_box).select('New York')
    cy.get(CheckIn).clear().type("2023-07-10")
    cy.get(CheckOut).clear().type("2023-07-20")
    cy.get(Search_button).click()
    cy.get('[class ="product-listing container"]').should("be.visible")

  })

})




