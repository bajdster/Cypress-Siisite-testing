class carierPageSearchInput
{
    get searchInput()
    {
        return cy.get('input.smartlib-a-input')
    }
    get searchTagLink()
    {
        return cy.get(".sii-a-search-tag__link").parents(".sii-o-search-bar__filters")
    }
    get numberOfOfferts() 
    {
        return cy.get(".js-ajax-load-number")
    }
    get jobOffertCards()
    {
        return cy.get(".sii-o-card-internship")
    }
    get searchResultTitle()
    {
        return cy.get('.sii-m-no-search-results__title')
    }

    typeCityAndCategory()
    {
        this.searchInput.type("Lublin{enter}")
        this.searchInput.type("Testing & QA{enter}")
       
    }
    checkSearching()
    {
        this.searchTagLink.should("contain", "Lublin")
        this.searchTagLink.should("contain", "Testing & QA")
    }
    checkNumberOfOfferts()
    {
        this.numberOfOfferts.invoke("text").then((text)=>
        {
            const txt = text;
            const number = txt.match(/\d+/g)
            this.jobOffertCards.should("have.length", number)
        })
    }

    verifyIncorrectSequence()
    {
        this.searchInput.type("123{enter}")
        this.searchResultTitle.should("contain", "Brak wyników spełniających kryteria wyszukiwania")
    }
}

export default new carierPageSearchInput