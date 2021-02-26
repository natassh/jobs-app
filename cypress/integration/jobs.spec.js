/// <reference types="cypress" />

context('Jobs', () => {

    it('Can open the app', () => {

        cy.visit('http://localhost:3000/');

    })
    it('Can search by the description field with the text: Frontend', () => {

         const inputDescription = cy.get('#description');
        
         inputDescription.type('Frontend').should('have.value', 'Frontend')

         inputDescription.type('{enter}')

    })
    it('Can search by the location field with the text: New York', () => {

        const inputLocation = cy.get('#location');
       
        inputLocation.type('New York').should('have.value', 'New York')

        inputLocation.type('{enter}')

    })
    it('Can click on the title of the offer and go to the detail of this', () => {

        const titleJob = cy.get('.JobList > li a h2');
    
        titleJob.click();


        cy.visit('http://localhost:3000/job/a63feabb-6976-4f74-b788-44afa96aed06');

    })
    it('Can click on the logo, it takes you to Home', () => {

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