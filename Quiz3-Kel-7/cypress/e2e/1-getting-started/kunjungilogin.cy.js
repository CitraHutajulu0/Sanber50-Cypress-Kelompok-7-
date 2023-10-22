import loginPage from "../../support/pageObject/loginPage"

describe('Access Login Page', () => {
    it('visits the login page', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        // Di sini kita mengunjungi halaman login Magento dengan URL yang diberikan pada soal quis.
        // Kemudian, kita dapat melanjutkan dengan tindakan yang sesuai pada halaman ini.
        // Contoh lain, jika ingin memeriksa elemen berdasarkan teksnya:
    })

    it('Verify Login successfull', () => {
        const loginObj = new loginPage();
        loginObj.enterUsername('shintasri29@gmail.com')
        loginObj.enterPassword('shinta123@')
        loginObj.clickSubmit();
        loginObj.elements.successTxt().should('have.text','Login Successfully');
      })

    it('Verify Login unsuccessful for invalid username/password', () => {
        const loginObj = new loginPage();
        loginObj.enterUsername('shintasri29@gmail.com')
        loginObj.enterPassword('shinta123@')
        loginObj.clickSubmit();
        loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
      })
})
