/// <reference types="Cypress" />

import homePage from '../pages/HomePage'

const mainCategoryList = []
const otherCategoriesList = []

function loadMainCategoryItems() {
    cy.get('[href*="prod.html?idp_="][class]').each((item)=> {
        mainCategoryList.push(item.text())
        cy.log(item.text())
    })
    homePage.elements.nextBtn().then($button => {
        if ($button.is(':visible')) {
            homePage.clickNextBtn()
            cy.wait(2000)
            loadMainCategoryItems()
        }
    })
} 

function loadOtherCategoriesItems() {
    cy.get('[href*="prod.html?idp_="][class]').each((item)=> {
        otherCategoriesList.push(item.text())
        cy.log(item.text())
    })
    homePage.elements.nextBtn().then($button => {
        if ($button.is(':visible')) {
            homePage.clickNextBtn()
            cy.wait(2000)
            loadOtherCategoriesItems()
        }
    })
}

describe('Validate items', () => {
    
    beforeEach('Visit website', () => {
        cy.visit('https://www.demoblaze.com/')
    })

    it('Get item list of main category', () => {
        loadMainCategoryItems()
        cy.wrap(mainCategoryList).as('mainCategoryList')
        cy.get('@mainCategoryList')
            .then(mainCategoryList => {
                cy.log(mainCategoryList)
            })
    })

    it('Get item list of other categories', () => {
        homePage.clickPhonesBtn()  //
        cy.wait(1000)              //
        homePage.clickNextBtn()    //
        cy.wait(1000)              //
        homePage.clickPhonesBtn()  // had to switch sub-categories once to get rid of "next" button in sub-categories (bug?)
        cy.wait(1000)              // bug - if we go from category to sub-categories we see "next" button even if we don't have enough(9) possitions here
        loadOtherCategoriesItems()
        homePage.clickLaptopsBtn()
        cy.wait(1000)
        loadOtherCategoriesItems()
        homePage.clickMonitorsBtn()
        cy.wait(1000)
        loadOtherCategoriesItems()
        cy.wrap(otherCategoriesList).as('otherCategoriesList')
        cy.get('@otherCategoriesList')
            .then(otherCategoriesList => {
                cy.log(otherCategoriesList)
            })
    })

    it('Compare two lists of items', () => {
        var mainArray = []
        var otherArray = []
        cy.wrap(mainCategoryList).as('mainCategoryList')
        cy.wrap(otherCategoriesList).as('otherCategoriesList')
        cy.get('@mainCategoryList').each(($elem, index) => {
            mainArray[index] = $elem
        }) 
            .then(() => {
                mainArray.sort()
        })
            .then(() => {
                cy.get('@otherCategoriesList').each(($elem, index) => {
                    otherArray[index] = $elem
                })
                    .then(() => {
                        otherArray.sort()
                    })
                        .then(() => {
                            expect(JSON.stringify(mainArray)).to.equal(JSON.stringify(otherArray))
                        })
            })
    })
})