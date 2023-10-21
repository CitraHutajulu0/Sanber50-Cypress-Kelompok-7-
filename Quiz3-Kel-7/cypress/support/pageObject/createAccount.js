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
}
export default new CreateAccount()