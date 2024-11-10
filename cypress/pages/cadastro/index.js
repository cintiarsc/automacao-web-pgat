class Cadastro {

    iniciarCadastro(email) {
        const signUpName = 'Tester QA'
        Cypress.env('signUpName', signUpName)
        if (!email) { 
  
            const timestamp = new Date().getTime()
            email =`tester12${timestamp}@mail.com`
  
            cy.get('[data-qa="signup-name"]').type('Teste Cadastro')
            cy.get('[data-qa="signup-email"]').type(email)
            cy.contains('button', 'Signup').click()
            cy.get('input[type=radio]').check('Mr')
            cy.get('input[type=radio]').eq(0).check()
            cy.get('[type=password]').type('12345', { log: false })
            cy.get('[data-qa="first_name"]').type('Carla ')
            cy.get('[data-qa="last_name"]').type('Caroline ')
            cy.get('[data-qa="country"]').eq(0)
            cy.get('[data-qa="create-account"]').type('Address1')
            cy.get('[data-qa="state"]').type('state1')
            cy.get('[data-qa="city"]').type('city1')
            cy.get('[data-qa="zipcode"]').type(37200000)
            cy.get('[data-qa="mobile_number"]').type(35989899898)
            cy.get('[data-qa="create-account"]').click()
            return this
        } else {
            cy.get('[data-qa="signup-name"]').type('Teste Cadastro')
            cy.get('[data-qa="signup-email"]').type(email)
            cy.get('[data-qa="signup-button"]').click()
            return this
        }
    }
  
    verificarSeCadastroFoiConcluido() {
        cy.get('[data-qa="continue-button"]').should('contain', 'Continue')
        return this
    }
  }
  
  export default new Cadastro()
