/// <reference types="Cypress" />

class HomePage {
    
    elements = {
        signUpBtn: () => cy.get('#signin2'),
        loginBtn: () => cy.get('#login2'),
        signUpConfirm: () => cy.xpath('//button[text()="Sign up"]'),
        loginConfirm: () => cy.xpath('//button[text()="Log in"]'),
        signUsernameField: () => cy.get('#sign-username'),
        signPassField: () => cy.get('#sign-password'),
        loginUsernameField: () => cy.get('#loginusername'),
        loginPassField: () => cy.get('#loginpassword'),
        logoutBtn: () => cy.get('#logout2'),
        phonesBtn:() => cy.xpath('//a[text()="Phones"]'),
        laptopsBtn:() => cy.xpath('//a[text()="Laptops"]'),
        monitorsBtn:() => cy.xpath('//a[text()="Monitors"]'),
        cartBtn: () => cy.get('#cartur'),
        nextBtn: () => cy.get('[id="next2"]')
    }

    visit() {
        cy.visit("https://www.demoblaze.com")
    }

    clickSignUpBtn() {
        this.elements.signUpBtn().click()
    }

    clickLoginBtn() {
        this.elements.loginBtn().click()
    }

    clickLogoutBtn() {
        this.elements.logoutBtn().click()
    }

    clickSignUpConfirm() {
        this.elements.signUpConfirm().click()
    }

    clickLoginConfirm() {
        this.elements.loginConfirm().click()
    }

    clickPhonesBtn() {
        this.elements.phonesBtn().click()
    }

    clickLaptopsBtn() {
        this.elements.laptopsBtn().click()
    }

    clickMonitorsBtn() {
        this.elements.monitorsBtn().click()
    }

    clickCartBtn() {
        this.elements.cartBtn().click()
    }

    clickNextBtn() {
        this.elements.nextBtn().click()
    }

    signUpUsername(value) {
        this.elements.signUsernameField().clear()
        this.elements.signUsernameField().type(value)
    }

    signUpPassword(value) {
        this.elements.signPassField().clear()
        this.elements.signPassField().type(value)
    }

    loginUsername(value) {
        this.elements.loginUsernameField().clear()
        this.elements.loginUsernameField().type(value)
    }

    loginPassword(value) {
        this.elements.loginPassField().clear()
        this.elements.loginPassField().type(value)
    }

}
export default new HomePage()