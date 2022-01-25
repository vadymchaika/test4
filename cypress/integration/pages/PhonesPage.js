/// <reference types="Cypress" />

class Phones {

    elements = {
        phoneBtn: (value) => cy.xpath(`//a[@href="prod.html?idp_=${value}"][not (@class)]`),
        addToCartBtn: () => cy.xpath('//a[text()="Add to cart"]')
    }

    clickPhoneBtn(value) {
        this.elements.phoneBtn(value).click()
    }
    
    clickAddToCartBtn() {
        this.elements.addToCartBtn().click()
    }
}

export default new Phones()