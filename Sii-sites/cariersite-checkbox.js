class carierPageCheckBox
{
    get countriesDropdown()
    {
        return cy.get(".sii-a-button").parents(".-countries")
    }
    get cityOfLublin()
    {
        return cy.get('[data-name="Lublin"]')
    }
    get categoriesDropdown()
    {
        return cy.get(".sii-a-button").parents(".-categories")
    }
    get categoryOfTesting()
    {
        return cy.get('[data-name="Testing & QA"]')
    }
    get searchButton()
    {
        return cy.get('[aria-label="Szukaj"]')
    }

    get searchTagLink()
    {
        return cy.get(".sii-a-search-tag__link").parents(".sii-o-search-bar__filters")
    }
    get loadNumber()
    {
        return cy.get(".js-ajax-load-number")
    }
    get jobOfferCard()
    {
        return cy.get(".sii-o-card-internship")
    }
    get jobOfferTitle()
    {
        return cy.get('.sii-o-card-internship > .sii-o-card-internship__left > .sii-o-card-internship__title > a')
    }

    chooseCityAndCategory()
    {
        this.countriesDropdown.click()
        this.cityOfLublin.click()
        this.categoriesDropdown.click()
        this.categoryOfTesting.click()
        this.searchButton.click()
    }

    checkSearching()
    {
        this.searchTagLink.should("contain", "Lublin");
        this.searchTagLink.should("contain", "Testing & QA");
    }

    checkNumberOfOfferts()
    {
        this.loadNumber.invoke("text").then((text)=>
            {
                const txt = text;
                const number = txt.match(/\d+/g)
                cy.log(number)

                this.jobOfferCard.should("have.length", number);
            });
    }

    saveJobOfferts()
    {
        let results = [];
        this.jobOfferTitle.each(el=>
            {
                let txt = el.text().trim()
                results.push(txt);
            })
                cy.writeFile("results.txt", results)
    }
}

export default new carierPageCheckBox();