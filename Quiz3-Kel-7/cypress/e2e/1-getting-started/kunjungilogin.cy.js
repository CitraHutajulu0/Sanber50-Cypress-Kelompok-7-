describe('Access Login Page', () => {
    it('visits the login page', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        // Di sini kita mengunjungi halaman login Magento dengan URL yang diberikan pada soal quis.
        // Kemudian, kita dapat melanjutkan dengan tindakan yang sesuai pada halaman ini.
        // Contoh lain, jika ingin memeriksa elemen berdasarkan teksnya:
        cy.contains("Sign In or Create an Account")
    })
})
