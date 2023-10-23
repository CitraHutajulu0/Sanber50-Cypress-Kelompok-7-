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

describe('Tes Halaman Login', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  });

  // Test scenario: Validasi judul halaman yang sesuai
  it('Menampilkan judul halaman yang sesuai', () => {
    cy.title().should('include', 'Customer Login');
  });

  // Test scenario: Validasi login dengan invalid email format
  it('Memvalidasi skenario login dengan mengisi format email salah', () => {
    cy.get('[name="login[username]"]').type('asdasdasdasdsadas');
    cy.get('[name="login[password]"]').type('passwordinvalid');
    cy.get('[name="send"]').click();
    cy.get('#email-error').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).');
  });

   // Test scenario: Validasi login dengan invalid credential
  it('Memvalidasi skenario login dengan invalid credential', () => {
    cy.get('[name="login[username]"]').type('invalidemail@gmail.com');
    cy.get('[name="login[password]"]').type('invalidpassword');
    cy.get('[name="send"]').click();
    
    cy.get('.message-error').should('have.length', 1);
    cy.get('.message-error').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
  });

  // Test scenario: Validiasi skenario login dengan empty field
  it('Memvalidasi skenari0 klik login dengan empty field', () => {
    cy.get('[name="login[username]"]').clear();
    cy.get('[name="login[password]"]').clear();
    cy.get('[name="send"]').click();
    
    cy.get('.message-error').should('have.length', 1);
    cy.get('.message-error').should('contain', 'A login and a password are required.');
  });

});
