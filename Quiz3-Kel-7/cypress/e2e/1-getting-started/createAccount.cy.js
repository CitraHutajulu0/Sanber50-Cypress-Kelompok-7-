import createAccount from "../../support/pageObject/createAccount"

describe('Create Account on Magento API', () => {//Membuat akun dari Hit API
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

describe('Create Account on Magento Web', () =>{//Daftar akun melalui Websiate Magento
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    })
    it('Create Account with a Registered Account', () => {
        cy.get(createAccount.firstName).clear().type('Citra')
        cy.get(createAccount.secondName).clear().type('Hutajulu')
        cy.get(createAccount.Email).clear().type('citrahutajulu@gmail.com')
        cy.get(createAccount.pass).clear().type('QA in my life')
        cy.get(createAccount.conf_pass).clear().type('QA in my life')
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_fillBlank).should('contain.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
    it('Create Account with a Blank Fill', () => {
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_firstBlank).should('contain.text', 'This is a required field.')
    })
    it('Create Account with a Blank Fist Name', () => {
        cy.get(createAccount.secondName).clear().type('Panterus')
        cy.get(createAccount.Email).clear().type('febrian0530@gmail.com')
        cy.get(createAccount.pass).clear().type('CobabikinAkun')
        cy.get(createAccount.conf_pass).clear().type('CobabikinAkun')
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_firstBlank).should('contain.text', 'This is a required field.')
    })
    it('Create Account with a Blank Second Name', () => {
        cy.get(createAccount.firstName).clear().type('Pantera')
        cy.get(createAccount.Email).clear().type('febrian0530@gmail.com')
        cy.get(createAccount.pass).clear().type('CobabikinAkun')
        cy.get(createAccount.conf_pass).clear().type('CobabikinAkun')
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_secBlank).should('contain.text', 'This is a required field.')
    })
    it('Create Account with a Blank Email', () => {
        cy.get(createAccount.firstName).clear().type('Pantera')
        cy.get(createAccount.secondName).clear().type('Panterus')
        cy.get(createAccount.pass).clear().type('CobabikinAkun')
        cy.get(createAccount.conf_pass).clear().type('CobabikinAkun')
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_blankEmail).should('contain.text', 'This is a required field.')
    })
    it('Create Account with a Blank Pass', () => {
        cy.get(createAccount.firstName).clear().type('Pantera')
        cy.get(createAccount.secondName).clear().type('Panterus')
        cy.get(createAccount.Email).clear().type('febrian0530@gmail.com')
        cy.get(createAccount.conf_pass).clear().type('CobabikinAkun')
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_blankPass).should('contain.text', 'This is a required field.')
    })
    it('Create Account with a Blank Pass Confirm', () => {
        cy.get(createAccount.firstName).clear().type('Pantera')
        cy.get(createAccount.secondName).clear().type('Panterus')
        cy.get(createAccount.Email).clear().type('febrian0530@gmail.com')
        cy.get(createAccount.pass).clear().type('CobabikinAkun')
        cy.get(createAccount.createBtn).click()
        cy.get(createAccount.err_msg_blankConPass).should('contain.text', 'This is a required field.')
    })
})
