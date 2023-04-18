///<reference types ="Cypress"/>
describe('Main page categories and menu options', () => {
  const hotels_category = ('.hotels');
  const guaides_category = ('.guides');
  const tours_category = ('.js-list-tours');
  const things_to_do_category = ('.attraction-link');
  const hotel_page = ('https://www.accesstravel.com/en-US/Hotel/List');
  const guides_page = ('https://www.accesstravel.com/en-US/Guide/List?DestinationId=2');
  const tours_page = ('https://www.accesstravel.com/en-US/Tour/List?DestinationId=2')
  const things_to_do_page = ('https://www.accesstravel.com/en-US');
  

  before(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
  })


  it('Navigate to the main page', () => {
    cy.get(hotels_category).should("be.visible")
    cy.get(guaides_category).should("be.visible")
    cy.get(tours_category).should("be.visible")
    cy.get(things_to_do_category).should("be.visible")
  })


  it('Navigates to the correct hotel page', () => {
    cy.get(hotels_category).click({ force: true })
    cy.url(hotel_page).should('include', '/Hotel')
    cy.go('back')
  })

  it('Navigates to the correct guides page', () => {
    cy.get(guaides_category).click({ force: true })
    cy.url(guides_page).should('include', '/Guide')
    cy.go('back')

  })

  it('Navigates to the correct tours page', () => {
    cy.get(tours_category).click({ force: true })
    cy.url(tours_page).should('include', '/Tour')
    cy.go('back')

  })

  it('Navigates to the Things to do page', () => {
    cy.get(things_to_do_category).click({ force: true })
    cy.url(things_to_do_page)
    cy.go('back')

  })
})



