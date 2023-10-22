describe('Searching products', () =>{
    it('Load Main page', () => {
        cy.visit('https://magento.softwaretestingboard.com')
    })
    it('Search for "track"', () => {
        cy.get('input[name="q"]').type("track")
        cy.get('.action.search').click()
    
        cy.get('.search-results').should('be.visible')
      })
})