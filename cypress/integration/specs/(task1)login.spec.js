/// <reference types="Cypress" />

import homePage from '../pages/HomePage'
const faker = require('faker')
var randomUsername = faker.internet.userName()
var randomPass = faker.internet.password(8)
describe('Login tests', () => {
    it('Sign Up new user', () => {
        homePage.visit()
        homePage.clickSignUpBtn()
        homePage.signUpUsername(randomUsername)
        homePage.signUpPassword(randomPass)
        homePage.clickSignUpConfirm()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
          });
        cy.wait(1000)
    })

    it('Login and Logout', () => {
        homePage.clickLoginBtn()
        homePage.loginUsername(randomUsername)
        homePage.loginPassword(randomPass)
        homePage.clickLoginConfirm()
        homePage.elements.logoutBtn().should('be.visible')
        homePage.clickLogoutBtn()
        expect(homePage.elements.loginBtn().should('be.visible'))
    })

    it('Login with invalid credentials', () => {
        homePage.clickLoginBtn()
        var randomUsername = faker.internet.userName()
        var randomPass = faker.internet.password(8)
        homePage.loginUsername(randomUsername)
        homePage.loginPassword(randomPass)
        homePage.clickLoginConfirm()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User does not exist.');
          });
        cy.wait(1000)
    })
})