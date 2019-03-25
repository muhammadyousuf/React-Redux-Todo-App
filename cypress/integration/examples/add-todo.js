Cypress.Commands.add('login', () => {
    window.localStorage.setItem('token', 'abc12345');
  });
  
  describe('Add Todo ', function() {
    beforeEach(() => {
      cy.login();
    });
    it('visit the add todo screen', function() {
      let todo = 'hello world';
      cy.visit('/ADDTODO');
     // cy.get('.add-todo-btn').click();
      cy.get('#normal_todo_todo')
        .type('hello world')
        .should('have.value', 'hello world');
      cy.get('#order')
        .type('321')
        .should('have.value', '321');
      cy.get('.todo-form-button').click();
    });
  });
  