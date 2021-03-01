
/// <reference types="cypress" />

context('Jobs', () => {

    beforeEach(() => {
        cy.intercept('GET', '*positions.json?', { fixture: 'jobs' }).as('getJobs') 

    })
   
    it('Can open the app', () => {
       

        cy.visit('http://localhost:3000/');

    })

    it('Can write in the description field with the text: Frontend', () => {

         const inputDescription = cy.get('#description');
        
         inputDescription.type('Frontend').should('have.value', 'Frontend')

         inputDescription.type('{enter}')

    })
    
    it('Can write in the location field with the text: New York', () => {

        const inputLocation = cy.get('#location');
       
        inputLocation.type('New York').should('have.value', 'New York')

        inputLocation.type('{enter}')

    })

    it('Can press on the title of the offer and go to the detail of this', () => {

        cy.intercept('GET', '*274a58c3-1f2e-4c24-a8d8-8dd2e41301b1.json', { fixture: 'jobDetail' })

        const titleJob = cy.get('.JobList > :nth-child(1) > a > h2');
    
        titleJob.click();

        cy.visit('http://localhost:3000/job/274a58c3-1f2e-4c24-a8d8-8dd2e41301b1');

    })

    it('Can press on the logo, it takes you to Home', () => {

        const logoH1 = cy.get('.Header .mainHeader h1');
    
        logoH1.click();

        cy.visit('http://localhost:3000/');


    })

    it('Change dark theme', () => {
        const theme = cy.get('.ToogleColorTheme')
        
        theme.click()
        
        const classBody = cy.get('body')
        classBody.should('have.class','darked')

    })
    
    it('Change light theme', () => {
        const theme = cy.get('.ToogleColorTheme')
        
        theme.click()
        
        const classBody = cy.get('body')
        classBody.should('have.class','lighted')

    })
});