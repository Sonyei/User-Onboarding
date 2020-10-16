describe('Testing Form Interactions', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
        })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="password"]')
    const checkBox = () => cy.get('[type="checkbox"]')
    const submitBtn = () => cy.get('button')

    it('Can type inside name input', () => {
        nameInput()
        .should('have.value', '')
        .type('My Name')
        .should('have.value', 'My Name')
            })

    it('Can type inside email input', () => {
        emailInput()
        .should('have.value', '')
        .type('Fake@email.com')
        .should('have.value', 'Fake@email.com')
    })

     it('Can type inside password input', () => {
         passInput()
         .should('have.value', '')
         .type('password')
         .should('have.value', 'password')
        })

    it('Can check and uncheck the terms of service box', () => {
        checkBox()
        .check()
        .click()
    })

    it('Users can submit form data', () => {
        nameInput().type('Name')
        emailInput().type('Fake@email.com')
        passInput().type('password')
        submitBtn().should('exist').click()
    })

    it('Errors messages render to screen', () => {
        nameInput()
        .type('A')
        emailInput()
        .type('Fake')
    })

})

