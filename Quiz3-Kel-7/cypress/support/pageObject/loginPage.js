class loginPage{

    elements = { 
        usernameInput : () => cy.get('input[name="userName"]'),      
        passwordInput : () => cy.get('input[name="password"]'),    
        loginBtn : () => cy.get('input[name="submit"]'),
        successTxt : () => cy.get('h3'),
        errorTxt : () => cy.get('span')
    }
 
    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
 
    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
   
    clickSubmit() {
        this.elements.loginBtn().click();
    }
 
 }
 
 export default loginPage;