// project1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Test Rozkładu Jazdy', function() {
    it('Wchodzi na stronę Rozkładu Jazdy, wyświetla nam rozkład jazdy, kupuje bilet', function(){
        cy.visit('https://rozklad-pkp.pl/')
        cy.get("input[id='from-station']").type('Toruń Główny').should('have.value','Toruń Główny')
        cy.get("input[id='to-station']").type('Poznań Główny').should('have.value','Poznań Główny')
        cy.get("button[id='singlebutton']").click()
        cy.wait(300)
//        cy.get("span[class='clear-lowres']"[0]).should('have.value', 'Poznań Główny')
        cy.contains("button","Kup bilet").click({force: true}).end()
        })
//        td[class='upcase footable-visible footable-last-column'] form
    it("Wchodzi na stronę Rozkładu Jazdy i wpisuje stację pośrednią",function(){
        cy.visit('https://rozklad-pkp.pl/')
        cy.get("input[id='from-station']").type('Toruń Główny').should('have.value','Toruń Główny')
        cy.get("input[id='to-station']").type('Poznań Główny').should('have.value','Poznań Główny')
        cy.get("span[class='md-1']").click()
        cy.get("input[id='wcag-via']").type('Gdańsk Główny').should('have.value','Gdańsk Główny')
        cy.get("button[id='singlebutton']").click()
})
})



