describe('Login ', function () {
    it('visit the login screen', function () {
     cy.visit('/') 
     cy.get('#normal_login_email').type('muhammadyousuf@gmail.com')
     .should('have.value','muhammadyousuf@gmail.com').click()
     cy.get('#normal_login_password').type('123456')
     .should('have.value','123456').click()
     cy.get('.loginbtn')
     .click()    
    })
})