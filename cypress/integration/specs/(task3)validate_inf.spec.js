/// <reference types="Cypress" />

import homePage from '../pages/HomePage'
import phonePage from '../pages/PhonesPage'
import cartPage from '../pages/CartPage'
import credentials from '../../fixtures/credentials.json'
import purchaseInfo from '../../fixtures/purchase_info.json'

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

describe('Place order test', () => {

    beforeEach('Login', () =>{
        homePage.visit()
        homePage.clickLoginBtn()
        homePage.loginUsername(credentials.username)
        homePage.loginPassword(credentials.password)
        homePage.clickLoginConfirm()
        homePage.elements.logoutBtn().should('be.visible')
    })

    it('Add phones to cart', () => {
        homePage.clickPhonesBtn()
        var numOne = getRandomInt(1,7)
        do {
            var numTwo = getRandomInt(1,7)
        } while (numTwo === numOne)

        phonePage.clickPhoneBtn(numOne)
        phonePage.clickAddToCartBtn()
        
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added.');
          });
        
        cy.go('back')
        cy.go('back')

        phonePage.clickPhoneBtn(numTwo)
        phonePage.clickAddToCartBtn()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added.');
          });
        homePage.clickCartBtn()
        cartPage.clickDeleteBtn(getRandomInt(1,2))
        cy.wait(1000)
        cartPage.clickPlaceOrderBtn()
        cy.wait(1000)
        cartPage.placeOrder(purchaseInfo.name, purchaseInfo.country, purchaseInfo.city, purchaseInfo.card, purchaseInfo.month, purchaseInfo.year)
        expect(cartPage.elements.completedPurchase().should('be.visible'))
        cy.get('[class="lead text-muted "]').should(($locator) => {
            const text = $locator.text()
            expect(text).to.include(purchaseInfo.name)
            expect(text).to.include(purchaseInfo.card)
          })
    })

})