/// <reference types="Cypress" />

class Cart {

    elements = {
        deleteBtn: (value) => cy.xpath(`(//a[text()="Delete"])[${value}]`),
        placeOrderBtn: () => cy.xpath('//button[text()="Place Order"]'),
        nameField: () => cy.get('#name'),
        countryField: () => cy.get('#country'),
        cityField: () => cy.get('#city'),
        cardField: () => cy.get('#card'),
        monthField: () => cy.get('#month'),
        yearField: () => cy.get('#year'),
        purchaseBtn: () => cy.xpath('//button[text()="Purchase"]'),
        completedPurchase: () => cy.xpath('//h2[text()="Thank you for your purchase!"]')
    }

    clickDeleteBtn(value) {
        this.elements.deleteBtn(value).click()
    }

    clickPlaceOrderBtn() {
        this.elements.placeOrderBtn().click()
    }

    clickPurchaseBtn() {
        this.elements.purchaseBtn().click()
    }

    setName(value) {
        this.elements.nameField().clear()
        this.elements.nameField().type(value)
    }

    setCountry(value) {
        this.elements.countryField().clear()
        this.elements.countryField().type(value)
    }

    setCity(value) {
        this.elements.cityField().clear()
        this.elements.cityField().type(value)
    }

    setCard(value) {
        this.elements.cardField().clear()
        this.elements.cardField().type(value)
    }

    setMonth(value) {
        this.elements.monthField().clear()
        this.elements.monthField().type(value)
    }

    setYear(value) {
        this.elements.yearField().clear()
        this.elements.yearField().type(value)
    }

    placeOrder(name, country, city, card, month, year) {
        this.setName(name)
        this.setCountry(country)
        this.setCity(city)
        this.setCard(card)
        this.setMonth(month)
        this.setYear(year)
        this.clickPurchaseBtn()
    }
}

export default new Cart()