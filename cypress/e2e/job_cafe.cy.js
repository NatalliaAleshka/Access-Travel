///<reference types ="Cypress"/>
describe('Job Cafe Sanity spec.', { defaultCommandTimeout: 10000 }, () => {


    it('Test jobs page with 10 sec.', { defaultCommandTimeout: 20000 }, () => {
        cy.visit('job-page')
        //    cy.wait(5000)
        cy.get('[class="post-item clearfix"]').should('be.visible')

    })

    // it('Test jobs page search for QA position', { defaultCommandTimeout: 20000 }, () => {
    //     cy.visit('job-page')
    //     // cy.get('[placeholder="position"]').type('QA', { force: true })
    //     // cy.get('button').contains('search').click({ force: true })
    //     cy.SearchForPosition('QA')
    //     cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')

    // })

    it('Test jobs page search for Developer position', { defaultCommandTimeout: 20000 }, () => {
        cy.visit('job-page')
        // cy.get('[placeholder="position"]').type('Developer', { force: true })
        // cy.get('button').contains('search').click({ force: true })
        cy.SearchForPosition('Developer')
        cy.get('[class="post-item clearfix"]').contains('Developer').should('be.visible')
    })

    it('Test jobs page search for QA positions in USA by Company name', { defaultCommandTimeout: 40000 }, () => {
        cy.visit('job-page')
        cy.CompleteSearch('Developer', 'USA', 'Apple')
        cy.get('[class="post-item clearfix"]').contains('Developer').should('be.visible')
        cy.get('p').contains('Apple').should('be.visible')
        cy.get('span').contains('USA').should('be.visible')

    })



})








