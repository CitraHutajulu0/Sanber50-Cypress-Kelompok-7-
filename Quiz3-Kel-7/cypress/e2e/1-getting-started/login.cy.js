describe('Login Test', () => {
    it('Success Login', () => {
        cy.visit('/')
        // Di sini kita mengunjungi halaman login Magento dengan URL yang diberikan pada soal quis.
        // Kemudian, kita dapat melanjutkan dengan tindakan yang sesuai pada halaman ini.
        // Contoh lain, jika ingin memeriksa elemen berdasarkan teksnya:
        cy.get('#email').type('habibannajjar20@gmail.com')
        cy.get('#pass').type('Test12345')
        cy.get('#send2').click()
        cy.get('h1.page-title').should('contain', 'My Account')

    })

    it('Fail login', () => {
        cy.visit('/')
        cy.get('#email').type('habibannajjar@gmail.com')
        cy.get('#pass').type('Test12345')
        cy.get('#send2').click()
        cy.get('div.message-error').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later')

    })

        it('Fail login', () => {
            cy.visit('/')
            cy.get('#email').type('habibannajjar')
            cy.get('#pass').type('Test12345')
            cy.get('#send2').click()
           
        })

        it('Fail login', () => {
            cy.visit('/')
            cy.get('#email').type('habibannajjar@gmail.com')
            cy.get('#pass').type('123')
            cy.get('#send2').click()

        })

        it('Fail login', () => {
            cy.visit('/')
            cy.get('#email').type('   ')
            cy.get('#pass').type('   ')
            cy.get('#send2').click()
            

    })

})
