describe('Create Account on Magento', () => {
    it('creates a user account', () => {
        cy.request({
            method: 'POST',
            url: 'https://magento.softwaretestingboard.com/customer/account/createpost/',
            form: true, // Menggunakan metode form submission
            body: {
                "firstname": "Citra",
                "lastname": "Hutajulu",
                "email": "citrahutajulu@gmail.com",
                "password": "QA in my life",
                "confirmation": "QA in my life "
            }
        }).then((response) => {
            expect(response.status).to.equal(200) // Sesuaikan dengan kode status yang sesuai
            // Lakukan asertifikasi lain sesuai kebutuhan kita
        })
    })
})
