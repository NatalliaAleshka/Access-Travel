///<reference types ="Cypress"/>
describe('Authentication', () => {

})
before(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
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
