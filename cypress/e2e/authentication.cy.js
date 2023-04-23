///<reference types ="Cypress"/>
describe('Authentication', () => {
    const hotel_page = ('https://www.accesstravel.com/en-US/Hotel/List')

    beforeEach(() => {
        cy.visit(hotel_page)
    })


    it('Should open the Login page', () => {
        cy.get(':nth-child(3) > :nth-child(1) > a').click({ force: true })
        cy.url('https://www.accesstravel.com/en-US/Account/Login');
        cy.go('back')


    })

    it('Should open the Signup page', () => {
        cy.get('.mobile-menu > :nth-child(3) > :nth-child(2) > a').click({ force: true })
        cy.url('https://www.accesstravel.com/en-US/Account/Register');
        cy.go('back')

    })
})