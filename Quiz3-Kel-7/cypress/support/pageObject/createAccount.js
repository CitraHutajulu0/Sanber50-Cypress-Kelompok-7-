class CreateAccount{
    firstName = '#firstname'
    secondName = '#lastname'
    Email = '#email_address'
    pass = '#password'
    conf_pass = '#password-confirmation'
    createBtn = '.action.submit.primary'
    err_msg_fillBlank = '.message-error > div'
    err_msg_firstBlank = '#firstname-error'
    err_msg_secBlank = '#lastname-error'
    err_msg_blankEmail = '#email_address-error'
    err_msg_blankPass = '#password-error'
    err_msg_blankConPass = '#password-confirmation-error'

    inputFirst_Name(FirstName){
        cy.get(this.firstName).clear().type(FirstName)
    }
    inputLast_Name(LastName){
        cy.get(this.secondName).clear().type(LastName)
    }
    inputEmail_Add(EmailAdd){
        cy.get(this.Email).clear().type(EmailAdd)
    }
    inputEmail_Pass(EmailPass){
        cy.get(this.pass).clear().type(EmailPass)
    }
    inputConf_Pass(PassConfirm){
        cy.get(this.conf_pass).clear().type(PassConfirm)
    }
    CreateBtn(ButtonCreate){
        cy.get(this.createBtn).click(ButtonCreate)
    }
    Msg_Err_Blank(){
        cy.get(this.err_msg_fillBlank)
    }
    Msg_Err_FirstBlank(){
        cy.get(this.err_msg_firstBlank)
    }
    Msg_Err_SecBlank(){
        cy.get(this.err_msg_secBlank)
    }
    Msg_Err_EmailBlank(){
        cy.get(this.err_msg_blankEmail)
    }
    Msg_Err_PassBlank(){
        cy.get(this.err_msg_blankPass)
    }
    Msg_Err_ConfPassBlank(){
        cy.get(this.err_msg_blankConPass)
    }
}
export default new CreateAccount()